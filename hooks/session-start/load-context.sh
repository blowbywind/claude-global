#!/bin/bash
# 세션 시작 시 컨텍스트 주입

DATE=$(date '+%Y-%m-%d %A')
BRANCH=$(git branch --show-current 2>/dev/null || echo "N/A")
REPO=$(basename "$(git rev-parse --show-toplevel 2>/dev/null)" 2>/dev/null || basename "$PWD")
RECENT=$(git log --oneline -3 2>/dev/null | paste -sd' | ' -)

# 프로젝트 타입 감지 (jq 없는 환경 대응 — python3 기반)
PROJECT_TYPE="unknown"
if [[ -f "package.json" ]]; then
  if python3 -c "import json,sys; d=json.load(open('package.json')); deps={**d.get('dependencies',{}),**d.get('devDependencies',{})}; sys.exit(0 if 'next' in deps else 1)" 2>/dev/null; then
    PROJECT_TYPE="Next.js"
  elif python3 -c "import json,sys; d=json.load(open('package.json')); deps={**d.get('dependencies',{}),**d.get('devDependencies',{})}; sys.exit(0 if 'react' in deps else 1)" 2>/dev/null; then
    PROJECT_TYPE="React"
  elif python3 -c "import json,sys; d=json.load(open('package.json')); deps={**d.get('dependencies',{}),**d.get('devDependencies',{})}; sys.exit(0 if 'fastify' in deps or 'express' in deps else 1)" 2>/dev/null; then
    PROJECT_TYPE="Node.js API"
  else
    PROJECT_TYPE="Node.js"
  fi
elif [[ -f "pyproject.toml" ]] || [[ -f "requirements.txt" ]]; then
  PROJECT_TYPE="Python"
elif [[ -f "go.mod" ]]; then
  PROJECT_TYPE="Go"
elif find . -maxdepth 2 \( -name "*.sln" -o -name "*.csproj" \) 2>/dev/null | grep -q .; then
  PROJECT_TYPE="C#/.NET"
elif find . -maxdepth 2 -name "*.html" 2>/dev/null | grep -q .; then
  PROJECT_TYPE="HTML/Prototype"
fi

CONTEXT="오늘: ${DATE} | 브랜치: ${BRANCH} | 프로젝트: ${REPO}(${PROJECT_TYPE})"
[[ -n "$RECENT" ]] && CONTEXT="${CONTEXT} | 최근커밋: ${RECENT}"

# 영구 규칙 주입 (active-rules.md 전문 — 멀티라인 규칙 잘림 방지)
RULES_FILE="$HOME/.claude/memory/active-rules.md"
if [[ -f "$RULES_FILE" ]]; then
  # frontmatter(---)와 메타데이터 라인 제외하고 규칙 본문 전체 주입
  RULES=$(awk '/^---/{p++; next} p==2{print}' "$RULES_FILE")
  [[ -n "$RULES" ]] && CONTEXT="${CONTEXT}
[영구규칙 전문]
${RULES}"
fi

# Obsidian 컨텍스트 주입 — 프로젝트 노트(앞 30줄) + 최근 ADR 제목만
OBSIDIAN_CLAUDE="$HOME/obsidian-vault/bbw-wiki/claude"
OBSIDIAN_BASE="$OBSIDIAN_CLAUDE/projects"

if [[ "$PWD" == "$HOME/.claude"* ]]; then
  NOTE_KEY="claude-config"
else
  NOTE_KEY="$REPO"
fi

# 1) 현재 프로젝트 노트 앞 15줄만 주입 (핵심·상태·요약 — 컨텍스트 절감)
#    INDEX.md 전체 주입 제거 — 모든 프로젝트 목록은 노이즈, 필요 시 직접 검색
OBSIDIAN_NOTE="$OBSIDIAN_BASE/${NOTE_KEY}.md"
if [[ -f "$OBSIDIAN_NOTE" ]]; then
  PROJECT_NOTE=$(head -15 "$OBSIDIAN_NOTE")
fi

# 2) 최근 ADR 2개 제목·상태만 (의사결정 맥락 파악용)
RECENT_ADR=$(ls -t "$OBSIDIAN_CLAUDE/decisions/"2*.md 2>/dev/null | head -2 | while IFS= read -r f; do
  title=$(grep -m1 "^# " "$f" | sed 's/^# //')
  status=$(grep -m1 "^status:" "$f" | sed 's/status: //')
  echo "  - $title ($status)"
done)

# Python으로 JSON 직렬화 (특수문자·개행 안전 처리)
WIKI_CONTEXT=""
[[ -n "$RECENT_ADR" ]]   && WIKI_CONTEXT="[최근 결정]
${RECENT_ADR}"
[[ -n "$PROJECT_NOTE" ]] && WIKI_CONTEXT="${WIKI_CONTEXT}

[${NOTE_KEY} 프로젝트 노트]
${PROJECT_NOTE}"

if [[ -n "$WIKI_CONTEXT" ]]; then
  FULL_CONTEXT="${CONTEXT}

${WIKI_CONTEXT}"
else
  FULL_CONTEXT="$CONTEXT"
fi

# 프로젝트 노트 부재 시 볼트 검색 권유 1줄 주입 (과거 결정 모르고 작업 시작 방지)
if [[ ! -f "$OBSIDIAN_NOTE" ]]; then
  FULL_CONTEXT="${FULL_CONTEXT}

[세컨드 브레인] '${NOTE_KEY}' 프로젝트 노트 없음 — 관련 작업 시작 전 \`grep -ri <키워드> ~/obsidian-vault/bbw-wiki/\` 로 과거 결정·소스 검색 권장"
fi

# WIP 파일 주입 — 미완료 체크박스가 있을 때만 주입 (완료 상태면 토큰 절약)
WIP_FILE="$HOME/obsidian-vault/bbw-wiki/claude/work-in-progress.md"
if [[ -f "$WIP_FILE" ]] && grep -q '\- \[ \]' "$WIP_FILE" 2>/dev/null; then
  WIP_CONTENT=$(head -30 "$WIP_FILE")
  FULL_CONTEXT="${FULL_CONTEXT}

[미완료 작업 인계]
${WIP_CONTENT}"
fi

python3 -c "import json,sys; print(json.dumps({'additionalContext': sys.argv[1]}))" "$FULL_CONTEXT"
