# Claude Code ↔ Obsidian 볼트 연동 구축 가이드

> 새 컴퓨터·새 사용자가 **처음부터** 이 연동을 만드는 방법입니다.
> 기존 저장소·기존 노트에 접근할 필요가 없습니다. 이 문서의 명령만 순서대로 실행하면 완성됩니다.
> 볼트 폴더 위치는 **사용자가 자유롭게 정합니다.** 모든 스크립트가 경로를 설정 파일에서 읽으므로 경로 하드코딩이 없습니다.
> 작성일 2026-07-22 · Linux/macOS(bash) 기준 · 문서 내 스크립트는 실제 실행 검증을 마쳤습니다.

---

## 1. 무엇을 만드는가

Claude Code가 **작업 기억을 Obsidian 마크다운에 축적**하고, 다음 세션 시작 때 **그 기억을 자동으로 되읽는** 구조입니다.

```
┌── 세션 시작 ────────────────────────────────────────────┐
│  SessionStart 훅 → 볼트에서 읽어 Claude에 자동 주입      │
│    · 영구 규칙 (내가 정한 작업 규칙)                     │
│    · 최근 기술 결정 2건 (제목·상태)                      │
│    · 현재 프로젝트 노트 앞 15줄 (지금 어디까지 했는지)   │
│    · 미완료 작업(WIP) 인계 노트                          │
└─────────────────────────────────────────────────────────┘
                          ↓ 작업 진행
┌── 작업 중 ──────────────────────────────────────────────┐
│  CLAUDE.md 규약에 따라 Claude가 직접 볼트에 기록          │
│    · 기술 결정 → decisions/ (ADR)                        │
│    · 프로젝트 상태 변경 → projects/                      │
│    · 과거 이력 질문 → 볼트를 grep 검색 후 답변           │
└─────────────────────────────────────────────────────────┘
                          ↓
┌── 세션 종료 ────────────────────────────────────────────┐
│  SessionEnd 훅 → session-log.md 에 작업 요약 자동 append │
└─────────────────────────────────────────────────────────┘
```

**핵심 설계**: Claude Code는 볼트를 **일반 파일로 직접 읽고 씁니다.** MCP 서버도, Obsidian 플러그인도, REST API도 필요 없습니다. Obsidian 앱은 사람이 노트를 보기 좋게 열람·검색하는 용도일 뿐이며, 앱을 켜두지 않아도 연동은 동작합니다.

**완성 후 폴더 구조** (볼트 경로는 예시로 `~/vault`)

```
~/vault/                        ← Obsidian 앱이 여는 볼트 루트 (경로 자유)
├── .obsidian/                   Obsidian 설정 (앱이 자동 생성)
└── claude/                      ← Claude 전용 영역
    ├── INDEX.md                 전체 노트 카탈로그 (사람·Claude가 함께 유지)
    ├── session-log.md           세션 종료 시 자동 기록 (훅이 append)
    ├── work-in-progress.md      미완료 작업 인계 노트 (WIP)
    ├── projects/                프로젝트별 상태 노트  <레포명>.md
    └── decisions/               기술 결정 기록 (ADR)  YYYY-MM-DD-<주제>.md

~/.claude/                      ← Claude Code 설정 디렉터리 (자동 생성됨)
├── obsidian.env                 ★ 볼트 경로 지정 (이 머신 전용)
├── CLAUDE.md                    전역 규약 (Claude가 매 세션 읽음)
├── memory/active-rules.md       영구 규칙
├── settings.json                훅 등록
└── hooks/
    ├── session-start/load-context.sh
    └── session-end/save-session.sh
```

---

## 2. 사전 준비

```bash
# Linux (Debian/Ubuntu)
sudo apt update && sudo apt install -y git curl python3 jq

# macOS
brew install git jq python3
```

| 도구 | 용도 | 필수 여부 |
|------|------|-----------|
| `python3` | 훅이 컨텍스트를 JSON으로 직렬화 (개행·따옴표 안전 처리) | **필수** |
| `jq` | `settings.json` 편집 | 권장 (손으로 편집해도 무방) |
| `git` | 프로젝트 정보 수집·볼트 백업 | 권장 |
| Node.js 18+ | Claude Code 설치 | **필수** |

Claude Code 설치 및 로그인:

```bash
npm install -g @anthropic-ai/claude-code
claude          # 최초 실행 시 브라우저 인증 → 완료 후 /exit
```

이 시점에 `~/.claude/` 디렉터리가 생성됩니다.

---

## 3. Step 1 — 볼트 폴더 정하고 만들기

원하는 경로를 정합니다. 아래는 `~/vault` 예시이며, **`~/notes`·`~/Documents/obsidian` 등 무엇이든 됩니다.** 이후 모든 단계가 이 변수를 따라갑니다.

```bash
# ★ 원하는 경로로 바꾸십시오
export VAULT_DIR="$HOME/vault"

mkdir -p "$VAULT_DIR/claude/projects" "$VAULT_DIR/claude/decisions"
mkdir -p ~/.claude/hooks/session-start ~/.claude/hooks/session-end ~/.claude/memory
echo "볼트 경로: $VAULT_DIR"
```

> 이미 쓰던 Obsidian 볼트가 있다면 그 경로를 그대로 쓰고 `claude/` 하위 폴더만 추가하면 됩니다. 기존 노트에 영향을 주지 않습니다.

---

## 4. Step 2 — 경로 설정 파일 만들기

모든 훅이 이 파일 하나만 보고 볼트 위치를 판단합니다. **경로를 바꾸고 싶으면 이 파일만 고치면 됩니다.**

```bash
cat > ~/.claude/obsidian.env << EOF
# Obsidian 볼트 경로 — 이 컴퓨터 전용 설정
VAULT_DIR="$VAULT_DIR"
CLAUDE_DIR="\$VAULT_DIR/claude"
EOF

cat ~/.claude/obsidian.env      # 값이 실제 경로로 채워졌는지 확인
```

출력 예시:

```
VAULT_DIR="/home/newuser/vault"
CLAUDE_DIR="$VAULT_DIR/claude"
```

> `CLAUDE_DIR`의 `$VAULT_DIR`는 훅이 `source` 할 때 풀리므로 그대로 두는 것이 맞습니다.
> 이 파일은 머신마다 값이 다르므로 **git 동기화 대상에서 제외**하십시오(§10).

---

## 5. Step 3 — 훅 스크립트 2개 만들기

### 5-1. 세션 시작 훅 — 볼트 → Claude 주입

```bash
cat > ~/.claude/hooks/session-start/load-context.sh << 'SCRIPT'
#!/bin/bash
# 세션 시작 시 Obsidian 볼트 컨텍스트를 Claude에 주입한다.
# 볼트 경로는 ~/.claude/obsidian.env 에서 읽는다 (하드코딩하지 않는다).

ENV_FILE="$HOME/.claude/obsidian.env"
# shellcheck source=/dev/null
[[ -f "$ENV_FILE" ]] && source "$ENV_FILE"
VAULT_DIR="${VAULT_DIR:-}"
CLAUDE_DIR="${CLAUDE_DIR:-${VAULT_DIR}/claude}"

# ── 기본 컨텍스트 (볼트와 무관) ─────────────────────────────
DATE=$(date '+%Y-%m-%d %A')
BRANCH=$(git branch --show-current 2>/dev/null || echo "N/A")
GIT_TOP=$(git rev-parse --show-toplevel 2>/dev/null)
REPO=$(basename "${GIT_TOP:-$PWD}")
RECENT=$(git log --oneline -3 2>/dev/null | paste -sd' | ' -)

CONTEXT="오늘: ${DATE} | 브랜치: ${BRANCH} | 프로젝트: ${REPO}"
[[ -n "$RECENT" ]] && CONTEXT="${CONTEXT} | 최근커밋: ${RECENT}"

# ── 1) 영구 규칙 (로컬 메모리) ──────────────────────────────
RULES_FILE="$HOME/.claude/memory/active-rules.md"
if [[ -f "$RULES_FILE" ]]; then
  if head -1 "$RULES_FILE" | grep -q '^---$'; then
    RULES=$(awk 'NR>1 && /^---/{p=1; next} p' "$RULES_FILE")
  else
    RULES=$(cat "$RULES_FILE")
  fi
  [[ -n "$RULES" ]] && CONTEXT="${CONTEXT}

[영구규칙]
${RULES}"
fi

# ── 볼트 미설정 시 안내 후 종료 ─────────────────────────────
if [[ -z "$VAULT_DIR" || ! -d "$CLAUDE_DIR" ]]; then
  CONTEXT="${CONTEXT}

[알림] Obsidian 볼트 연동 미설정 — ~/.claude/obsidian.env 의 VAULT_DIR 을 확인하십시오."
  python3 -c "import json,sys; print(json.dumps({'additionalContext': sys.argv[1]}))" "$CONTEXT"
  exit 0
fi

# ── 프로젝트 노트 키 결정 ───────────────────────────────────
if [[ "$PWD" == "$HOME/.claude"* ]]; then
  NOTE_KEY="claude-config"
else
  NOTE_KEY="$REPO"
fi

# ── 2) 최근 ADR 2건 제목·상태만 ─────────────────────────────
RECENT_ADR=$(ls -t "$CLAUDE_DIR/decisions/"*.md 2>/dev/null | head -2 | while IFS= read -r f; do
  title=$(grep -m1 '^# ' "$f" | sed 's/^# //')
  status=$(grep -m1 '^status:' "$f" | sed 's/status: *//')
  [[ -n "$title" ]] && echo "  - ${title} (${status:-미기재})"
done)

# ── 3) 현재 프로젝트 노트 앞 15줄 ───────────────────────────
NOTE_FILE="$CLAUDE_DIR/projects/${NOTE_KEY}.md"
PROJECT_NOTE=""
[[ -f "$NOTE_FILE" ]] && PROJECT_NOTE=$(head -15 "$NOTE_FILE")

WIKI_CONTEXT=""
[[ -n "$RECENT_ADR" ]] && WIKI_CONTEXT="[최근 결정]
${RECENT_ADR}"
[[ -n "$PROJECT_NOTE" ]] && WIKI_CONTEXT="${WIKI_CONTEXT}

[${NOTE_KEY} 프로젝트 노트]
${PROJECT_NOTE}"

[[ -n "$WIKI_CONTEXT" ]] && CONTEXT="${CONTEXT}

${WIKI_CONTEXT}"

# 프로젝트 노트가 없으면 볼트 검색을 권유한다 (과거 결정 모르고 착수하는 것 방지)
if [[ ! -f "$NOTE_FILE" ]]; then
  CONTEXT="${CONTEXT}

[볼트] '${NOTE_KEY}' 프로젝트 노트 없음 — 관련 작업 전 \`grep -ri <키워드> ${VAULT_DIR}/\` 로 과거 기록 검색 권장"
fi

# ── 4) WIP — 미완료 체크박스가 있을 때만 ────────────────────
WIP_FILE="$CLAUDE_DIR/work-in-progress.md"
if [[ -f "$WIP_FILE" ]] && grep -q '^- \[ \]' "$WIP_FILE" 2>/dev/null; then
  CONTEXT="${CONTEXT}

[미완료 작업 인계]
$(head -30 "$WIP_FILE")"
fi

python3 -c "import json,sys; print(json.dumps({'additionalContext': sys.argv[1]}))" "$CONTEXT"
SCRIPT
```

**주입 규칙 요약**

| 주입 항목 | 소스 | 조건 | 분량 |
|-----------|------|------|------|
| 영구 규칙 | `~/.claude/memory/active-rules.md` | 파일 존재 | frontmatter 이후 전문 |
| 최근 결정 | `claude/decisions/*.md` (수정시각 최신순) | 항상 | 제목·상태 2건 |
| 프로젝트 노트 | `claude/projects/<키>.md` | 노트 존재 | 앞 15줄 |
| 검색 권유 | — | 노트 **부재** 시 | 1줄 |
| WIP | `claude/work-in-progress.md` | `- [ ]` 미완료 존재 | 앞 30줄 |

**`<키>` 결정 방식**: 현재 디렉터리가 git 저장소면 그 저장소 폴더명, 아니면 현재 폴더명. `~/.claude` 안에서 작업할 때는 `claude-config`. 즉 프로젝트 `~/work/myapp`에서 Claude를 실행하면 `claude/projects/myapp.md`가 주입됩니다.

> 분량 상한(15줄·30줄·2건)은 **의도적인 설계**입니다. 노트 전체를 주입하면 매 세션 컨텍스트를 크게 소모하므로, 요약만 주입하고 필요할 때 Claude가 직접 파일을 읽게 합니다.

### 5-2. 세션 종료 훅 — 작업 요약 자동 기록

```bash
cat > ~/.claude/hooks/session-end/save-session.sh << 'SCRIPT'
#!/bin/bash
# 세션 종료 시 작업 요약을 볼트의 session-log.md 에 기록한다.

ENV_FILE="$HOME/.claude/obsidian.env"
# shellcheck source=/dev/null
[[ -f "$ENV_FILE" ]] && source "$ENV_FILE"
VAULT_DIR="${VAULT_DIR:-}"
CLAUDE_DIR="${CLAUDE_DIR:-${VAULT_DIR}/claude}"

# 볼트 미설정이면 조용히 종료 (세션 종료를 막지 않는다)
[[ -z "$VAULT_DIR" || ! -d "$CLAUDE_DIR" ]] && exit 0

LOG_FILE="$CLAUDE_DIR/session-log.md"
DATE=$(date '+%Y-%m-%d')
TIME=$(date '+%H:%M')
GIT_TOP=$(git rev-parse --show-toplevel 2>/dev/null)
REPO=$(basename "${GIT_TOP:-$PWD}")

MARKER='<!-- entries-below -->'

if [[ ! -f "$LOG_FILE" ]]; then
  cat > "$LOG_FILE" << HEADER
# 세션 로그

> 세션 종료 시 자동 기록됩니다. 최신 항목이 위에 옵니다.
> 아래 마커 줄은 삽입 위치 기준입니다 — 지우지 마십시오.

${MARKER}

HEADER
fi

# 같은 날·같은 시각(HH:MM)·같은 레포 항목이 이미 있으면 중복 기록하지 않는다
grep -q "^## ${DATE} ${TIME} — ${REPO}$" "$LOG_FILE" 2>/dev/null && exit 0

RECENT_COMMITS=$(git log --oneline -5 2>/dev/null)
CHANGED_FILES=$(git diff --name-only HEAD~1..HEAD 2>/dev/null | head -10)
STAGED_FILES=$(git diff --name-only --cached 2>/dev/null | head -5)

ENTRY="## ${DATE} ${TIME} — ${REPO}"$'\n\n'

if [[ -n "$RECENT_COMMITS" ]]; then
  ENTRY+="**최근 커밋:**"$'\n'
  while IFS= read -r line; do ENTRY+="- ${line}"$'\n'; done <<< "$RECENT_COMMITS"
  ENTRY+=$'\n'
fi

if [[ -n "$CHANGED_FILES" ]]; then
  ENTRY+="**변경 파일 (마지막 커밋):**"$'\n'
  while IFS= read -r line; do ENTRY+="- \`${line}\`"$'\n'; done <<< "$CHANGED_FILES"
  ENTRY+=$'\n'
fi

if [[ -n "$STAGED_FILES" ]]; then
  ENTRY+="**미커밋 스테이지 파일:**"$'\n'
  while IFS= read -r line; do ENTRY+="- \`${line}\`"$'\n'; done <<< "$STAGED_FILES"
  ENTRY+=$'\n'
fi

if [[ -z "$RECENT_COMMITS" && -z "$CHANGED_FILES" ]]; then
  ENTRY+="_커밋 없음 — 필요하면 \"오늘 작업 노트에 기록해줘\"로 수동 추가_"$'\n\n'
fi

ENTRY+="---"$'\n\n'

# 마커 바로 아래에 삽입한다 (마커가 없으면 파일 맨 위에 prepend)
ENTRY_FILE=$(mktemp)
printf '%s' "$ENTRY" > "$ENTRY_FILE"
TEMP=$(mktemp)

if grep -qF "$MARKER" "$LOG_FILE"; then
  inserted=0
  while IFS= read -r line; do
    printf '%s\n' "$line" >> "$TEMP"
    if [[ "$line" == "$MARKER" && $inserted -eq 0 ]]; then
      printf '\n' >> "$TEMP"
      cat "$ENTRY_FILE" >> "$TEMP"
      inserted=1
    fi
  done < "$LOG_FILE"
else
  cat "$ENTRY_FILE" "$LOG_FILE" > "$TEMP"
fi

mv "$TEMP" "$LOG_FILE"
rm -f "$ENTRY_FILE"
SCRIPT
```

### 5-3. 실행 권한 부여 + 문법 검증

```bash
chmod +x ~/.claude/hooks/session-start/load-context.sh \
         ~/.claude/hooks/session-end/save-session.sh
bash -n ~/.claude/hooks/session-start/load-context.sh && echo "load-context 문법 OK"
bash -n ~/.claude/hooks/session-end/save-session.sh   && echo "save-session 문법 OK"
```

---

## 6. Step 4 — `settings.json`에 훅 등록

훅 파일을 만들기만 해서는 동작하지 않습니다. `settings.json`에 **이벤트를 등록**해야 합니다.

**A. `~/.claude/settings.json`이 없거나 비어 있는 경우**

```bash
cat > ~/.claude/settings.json << 'EOF'
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          { "type": "command", "command": "bash ~/.claude/hooks/session-start/load-context.sh" }
        ]
      }
    ],
    "SessionEnd": [
      {
        "hooks": [
          { "type": "command", "command": "bash ~/.claude/hooks/session-end/save-session.sh" }
        ]
      }
    ]
  }
}
EOF
```

**B. 이미 `settings.json`을 쓰고 있는 경우 (기존 설정 보존 병합)**

```bash
cp ~/.claude/settings.json ~/.claude/settings.json.bak     # 먼저 백업

jq '.hooks.SessionStart = [{"hooks":[{"type":"command","command":"bash ~/.claude/hooks/session-start/load-context.sh"}]}]
  | .hooks.SessionEnd  = [{"hooks":[{"type":"command","command":"bash ~/.claude/hooks/session-end/save-session.sh"}]}]' \
  ~/.claude/settings.json > /tmp/s.json && mv /tmp/s.json ~/.claude/settings.json
```

**검증**

```bash
jq . ~/.claude/settings.json > /dev/null && echo "JSON 유효"
jq '.hooks | keys' ~/.claude/settings.json      # ["SessionEnd","SessionStart"] 포함 확인
```

---

## 7. Step 5 — Claude 규약(`CLAUDE.md`) 작성

훅은 **읽어오는** 일만 합니다. **볼트에 무엇을 언제 기록할지**는 `~/.claude/CLAUDE.md`에 규약으로 적어야 Claude가 따릅니다. 아래 블록은 볼트 경로를 실제 값으로 채워 생성합니다.

```bash
cat >> ~/.claude/CLAUDE.md << EOF

## Obsidian 볼트 (세컨드 브레인)

- 볼트 경로: \`$VAULT_DIR\` · Claude 영역: \`$VAULT_DIR/claude/\`
  - \`projects/<레포명>.md\` — 프로젝트 상태 (세션 시작 시 앞 15줄 자동 주입)
  - \`decisions/YYYY-MM-DD-<주제>.md\` — 기술 결정 기록(ADR)
  - \`session-log.md\` — 세션 종료 시 자동 기록 (수동 추가도 가능)
  - \`work-in-progress.md\` — 미완료 작업 인계 노트(WIP)
  - \`INDEX.md\` — 전체 노트 카탈로그

### 검색 규칙 (작업 시작 전)
"이전에 ~했는데", "~할 때 주의사항", 과거 결정·선호가 영향을 줄 수 있는 작업은
착수 전에 \`grep -ri <키워드> $VAULT_DIR/\` 로 먼저 검색한 뒤 답한다. 위키 확인 → 작업 순서를 지킨다.

### 기록 규칙 (작업 완료 후)
- 되돌리기 어려운 기술 결정 → \`decisions/\` 에 ADR 생성
  (형식: \`# 제목\` / \`status: accepted|proposed|superseded\` / 배경·결정·결과)
- 프로젝트 상태·단계 변경 → \`projects/<레포명>.md\` 갱신
- 새 노트를 만들면 \`INDEX.md\` 표에 한 줄 추가한다
- 반복 명령·빌드 팁·재발 방지 규칙은 볼트가 아니라 \`~/.claude/memory/\` 에 둔다

### WIP 규칙 (컨텍스트 인계)
다음 상황에서 \`work-in-progress.md\` 를 갱신한다: 도구 15회 이상 진행된 긴 작업,
사용자의 중단 의도("잠깐", "내일", "다른 컴퓨터"), 멀티스텝 중간 완료, 세션 종료 직전.
형식: frontmatter(updated/project/branch) + 완료 단계(\`- [x]\`) + 다음 단계(\`- [ ]\` 파일:함수/명령어) + 인계 노트(에러·임시 결정·주의점).
완료된 작업은 \`- [x]\` 로 바꾼다 — 미완료(\`- [ ]\`)가 하나도 없으면 다음 세션에 주입되지 않는다.
EOF
```

> `~/.claude/CLAUDE.md`가 없으면 위 명령이 새로 만듭니다. 이미 개인 규칙을 쓰고 있다면 뒤에 덧붙습니다.

**영구 규칙 파일**(선택, 세션마다 주입됨):

```bash
cat > ~/.claude/memory/active-rules.md << 'EOF'
---
name: active-rules
description: 세션 시작 시 자동 주입되는 영구 규칙
---

Rule 1. 확인 없이 파일을 삭제하거나 파괴적 명령(rm -rf, DROP TABLE)을 실행하지 않는다.
Rule 2. 완료를 선언하기 전에 실제로 검증한다(빌드·문법검사·실행).
Rule 3. 사용자가 요청한 범위를 벗어난 작업은 승인 없이 진행하지 않는다.
EOF
```

---

## 8. Step 6 — 초기 노트 만들기

```bash
# 8-1. 카탈로그
cat > "$VAULT_DIR/claude/INDEX.md" << 'EOF'
# Claude 노트 인덱스

> 노트를 추가하거나 상태가 바뀌면 이 표도 함께 갱신합니다.

## 프로젝트 (`projects/`)

| 프로젝트 | 한 줄 요약 | 현재 단계 | 노트 |
|----------|-----------|----------|------|
| (예시) myapp | 설명 | 초기 설정 | [→](projects/myapp.md) |

## 기술 결정 (`decisions/`)

| 날짜 | 프로젝트 | 결정 내용 | 노트 |
|------|----------|----------|------|
EOF

# 8-2. WIP (미완료 항목이 없으면 주입되지 않음 — 정상)
cat > "$VAULT_DIR/claude/work-in-progress.md" << 'EOF'
---
updated: (미사용)
project: -
branch: -
---

# WIP — 진행 중 작업 인계 노트

> 미완료 항목(`- [ ]`)이 하나라도 있으면 다음 세션 시작 시 자동 주입됩니다.

## 완료
- [x] 볼트 연동 초기 설정

## 다음 단계
(없음)

## 인계 노트
(없음)
EOF

# 8-3. 프로젝트 노트 템플릿 — 프로젝트마다 <레포명>.md 로 복사해 사용
cat > "$VAULT_DIR/claude/projects/_template.md" << 'EOF'
---
project: <레포명>
status: active
updated: YYYY-MM-DD
---

# <프로젝트명>

**한 줄 요약**: 무엇을 하는 프로젝트인가
**현재 단계**: 예) Phase 1 구현 중
**스택**: 예) Next.js 15 · PostgreSQL

## 지금 하는 일
-

## 주의사항 / 함정
-

## 관련 결정
- [[decisions/YYYY-MM-DD-주제]]
EOF

# 8-4. ADR 템플릿
cat > "$VAULT_DIR/claude/decisions/_template.md" << 'EOF'
# <결정 제목>

status: accepted
date: YYYY-MM-DD
project: <레포명>

## 배경
왜 결정이 필요했는가

## 결정
무엇으로 정했는가

## 대안
검토했지만 택하지 않은 것과 그 이유

## 결과
이 결정으로 무엇이 달라지는가 · 되돌리려면 무엇이 필요한가
EOF

ls -R "$VAULT_DIR/claude"
```

> 파일명이 `_`로 시작하는 템플릿은 `decisions/*.md` 주입 목록에도 잡힙니다. 첫 실제 ADR을 만든 뒤에는 `_template.md`를 `_templates/` 하위로 옮기거나 지워도 됩니다.

---

## 9. Step 7 — Obsidian 앱 연결 (선택이지만 권장)

1. https://obsidian.md 에서 설치합니다.
2. **Open folder as vault** → Step 1에서 만든 경로(`~/vault`)를 선택합니다.
   - 하위 폴더가 아니라 **`VAULT_DIR` 자체**를 여십시오. 여기에 `.obsidian/` 설정 폴더가 생성됩니다.
3. 앱을 켜지 않아도 Claude 연동은 동작합니다. 앱은 그래프 뷰·백링크·전문검색으로 **사람이 읽기** 위한 용도입니다.
4. 권장 설정: 설정 → 파일 및 링크 → "새 노트 위치"를 `claude/`가 아닌 별도 폴더로 지정하면 Claude 영역이 어질러지지 않습니다.

**플러그인은 필요 없습니다.** 연동은 파일시스템 직결이므로 REST API 플러그인·동기화 플러그인 없이 완결됩니다.

---

## 10. Step 8 — 볼트 백업 (선택)

노트가 쌓이면 버전 관리를 권장합니다.

```bash
cd "$VAULT_DIR"
git init
cat > .gitignore << 'EOF'
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.obsidian/plugins/*/data.json
.trash/
.DS_Store
EOF
git add -A && git commit -m "chore: 볼트 초기 구조"
# 원격이 있다면
# git remote add origin <본인 저장소 URL> && git push -u origin main
```

`~/.claude` 설정도 함께 관리한다면 **다음 파일은 반드시 제외**하십시오.

```bash
cd ~/.claude
cat > .gitignore << 'EOF'
# 인증·머신 고유 설정
.credentials.json
settings.local.json
obsidian.env          ← 볼트 경로는 머신마다 다르므로 제외
# 런타임 데이터
projects/
sessions/
session-env/
file-history/
shell-snapshots/
history.jsonl
EOF
```

> `obsidian.env`를 제외하는 이유: 컴퓨터마다 볼트 경로가 다릅니다. 새 컴퓨터에서는 §4만 다시 실행하면 됩니다.

---

## 11. 설치 검증

```bash
# 1) 구조 확인 — 아래가 모두 있어야 합니다
ls "$VAULT_DIR/claude/"{INDEX.md,work-in-progress.md}
ls -d "$VAULT_DIR/claude/"{projects,decisions}
cat ~/.claude/obsidian.env

# 2) 세션 시작 훅 단독 실행 — JSON 한 줄이 출력돼야 합니다
bash ~/.claude/hooks/session-start/load-context.sh | python3 -m json.tool | head -5

# 3) 주입될 실제 내용 확인 (사람이 읽는 형태)
bash ~/.claude/hooks/session-start/load-context.sh \
  | python3 -c "import json,sys; print(json.load(sys.stdin)['additionalContext'])"

# 4) 세션 종료 훅 실행 → 로그 파일 생성 확인
bash ~/.claude/hooks/session-end/save-session.sh
cat "$VAULT_DIR/claude/session-log.md"
```

3번의 기대 출력(초기 상태):

```
오늘: 2026-07-22 Wednesday | 브랜치: N/A | 프로젝트: vault

[영구규칙]
Rule 1. 확인 없이 파일을 삭제하거나 ...

[볼트] 'vault' 프로젝트 노트 없음 — 관련 작업 전 `grep -ri <키워드> /home/newuser/vault/` 로 과거 기록 검색 권장
```

**최종 확인 (실제 세션)**

```bash
claude
```

세션에서 다음을 질문합니다.

> "지금 주입된 컨텍스트에 볼트 정보가 들어와 있나요? 무엇이 보이는지 알려주세요."

`[영구규칙]`·`[최근 결정]`·`[볼트]` 항목을 Claude가 언급하면 연동 성공입니다.

---

## 12. 일상 사용법

**자동으로 일어나는 일**

| 시점 | 동작 |
|------|------|
| 세션 시작 | 규칙·최근 결정·프로젝트 노트·WIP 주입 |
| 세션 종료 | `session-log.md`에 커밋·변경파일 요약 append |

**사용자가 말로 시키는 일** (CLAUDE.md 규약이 동작하게 함)

| 하고 싶은 것 | 이렇게 말합니다 |
|--------------|-----------------|
| 결정 기록 | "이 결정 ADR로 남겨줘" |
| 프로젝트 상태 갱신 | "프로젝트 노트 현재 상태로 업데이트해줘" |
| 과거 이력 조회 | "이전에 인증 방식 어떻게 정했는지 볼트에서 찾아줘" |
| 작업 인계 저장 | "여기까지 WIP에 저장해줘. 내일 이어서 할게" |
| 오늘 작업 정리 | "오늘 한 일 정리해서 session-log에 기록해줘" |

**새 프로젝트를 연동에 태우는 법**: `$VAULT_DIR/claude/projects/<레포폴더명>.md`를 만들면 끝입니다. 그 프로젝트 디렉터리에서 Claude를 실행할 때마다 앞 15줄이 자동 주입됩니다.

---

## 13. 커스터마이징

| 바꾸고 싶은 것 | 방법 |
|----------------|------|
| 볼트 위치 이동 | 폴더를 옮기고 `~/.claude/obsidian.env`의 `VAULT_DIR`만 수정 |
| `claude/` 대신 다른 폴더명 | `obsidian.env`의 `CLAUDE_DIR`를 원하는 경로로 지정 |
| 프로젝트 노트 주입량 | `load-context.sh`의 `head -15` 값 조정 |
| WIP 주입량 | `head -30` 값 조정 |
| ADR 주입 개수 | `head -2` 값 조정 |
| 프로젝트 노트 키 규칙 | `NOTE_KEY` 결정 블록 수정 (예: 디렉터리 경로 전체 해시) |
| 세션 로그를 날짜별 파일로 분리 | `LOG_FILE="$CLAUDE_DIR/logs/$(date +%Y-%m).md"` 로 변경 |

**주의**: 훅 스크립트는 세션마다 실행되므로 오래 걸리는 작업(네트워크 호출, 대용량 grep)을 넣지 마십시오. 세션 시작이 그만큼 지연됩니다.

---

## 14. 트러블슈팅

| 증상 | 원인 | 조치 |
|------|------|------|
| 주입이 전혀 안 됨 | 훅 미등록 | `jq '.hooks' ~/.claude/settings.json` 확인 |
| 주입이 전혀 안 됨 | 실행 권한 없음 | `chmod +x ~/.claude/hooks/*/*.sh` |
| 주입이 전혀 안 됨 | `python3` 미설치 | `python3 -V` 확인 후 설치 |
| "볼트 연동 미설정" 메시지 | `obsidian.env` 없음/경로 오타 | `cat ~/.claude/obsidian.env`로 실제 경로 확인 |
| 훅은 도는데 Claude가 모름 | 출력 형식 불일치 | 아래 ★ 참조 |
| 프로젝트 노트가 안 보임 | 파일명이 폴더명과 불일치 | `basename $(git rev-parse --show-toplevel)` 결과와 노트 파일명을 일치시킬 것 |
| WIP가 안 보임 | 미완료 `- [ ]` 없음 | **정상 동작**입니다. 미완료가 있어야 주입됩니다 |
| session-log에 기록 없음 | `SessionEnd` 미등록 | `jq '.hooks.SessionEnd' ~/.claude/settings.json` |
| 같은 시각 항목이 안 쌓임 | 중복 방지 로직 | 의도된 동작(같은 분·같은 레포는 1회만) |
| Obsidian에 노트가 안 보임 | 볼트 루트를 잘못 열었음 | `VAULT_DIR` 자체를 vault로 열 것 |

**★ 출력 형식 불일치 대응**: 이 문서의 훅은 `{"additionalContext": "..."}` 형식으로 출력합니다. Claude Code 버전에 따라 아래 형식을 요구할 수 있습니다. 주입이 안 되면 `load-context.sh` 마지막 줄을 다음으로 교체하십시오.

```bash
python3 -c "import json,sys; print(json.dumps({'hookSpecificOutput':{'hookEventName':'SessionStart','additionalContext':sys.argv[1]}}))" "$CONTEXT"
```

**훅 디버깅 일반 요령**

```bash
claude --debug            # 훅 실행 로그 확인
bash -x ~/.claude/hooks/session-start/load-context.sh 2>&1 | tail -30   # 단계별 추적
```

---

## 15. 확장 아이디어 (필요할 때만)

| 확장 | 설명 | 난이도 |
|------|------|--------|
| 볼트 자동 커밋 | cron으로 30분마다 `git add -A && git commit && git push` | 낮음 |
| 슬래시 커맨드 | `~/.claude/commands/daily-log.md`에 "오늘 작업을 session-log.md에 prepend" 지시를 적으면 `/daily-log`로 호출 | 낮음 |
| 자동 포맷 훅 | `PostToolUse`(matcher: `Edit\|Write`)로 prettier 실행 | 낮음 |
| 위험 명령 차단 훅 | `PreToolUse`(matcher: `Bash`)로 `rm -rf` 등 차단 | 중간 |
| 봇 전용 MCP 게이트웨이 | 자동화 에이전트가 볼트에 쓸 때 경로 allowlist·append-only 강제. 대화형 세션에는 **불필요** | 높음 |

마지막 항목은 여러 자율 에이전트가 동시에 볼트에 쓰는 환경에서만 의미가 있습니다. 1인 사용에서는 파일시스템 직결로 충분합니다.
