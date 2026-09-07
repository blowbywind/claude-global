#!/usr/bin/env bash
# Stop hook — ai-ops 미커밋 변경을 자동 커밋해 작업 유실(롤백) 방지 + 성공 이력 기록.
# 무한루프 방지: stop_hook_active=true 면 즉시 종료. git commit 은 Claude 를 호출하지
# 않으므로 추가 Stop 루프는 없다. 어떤 경우에도 exit 0 (작업 차단 금지).
set -uo pipefail

input="$(cat)"
# Stop hook 재진입(자동 continuation) 시 재실행 금지 — JSON 정확 파싱.
active="$(printf '%s' "$input" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(JSON.parse(s).stop_hook_active?"1":"0")}catch{process.stdout.write("0")}})' 2>/dev/null || echo 0)"
[ "$active" = "1" ] && exit 0

REPO="/home/bbw/ai-ops"
cd "$REPO" 2>/dev/null || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

# 커밋 가드 (audit 2026-07-09): git add -A 로 스테이징된 것 중 대용량(>5MB)·시크릿/키·DB
# 의심 파일을 커밋 전 언스테이징하고 경고한다. .gitignore 를 빠져나온 신규 파일에 대한
# 심층방어(무필터 add -A 로 브라우저 바이너리·DB백업·비밀이 히스토리에 유입된 사고 재발 방지).
# 파일은 언스테이징만(디스크 보존) → 유실 없음. 어떤 경우에도 커밋을 차단하지 않는다.
_guard_staged() {
  local dir="$1" f sz
  while IFS= read -r -d '' f; do
    case "$f" in
      *.pem|*.key|*.p12|*.pfx|*id_rsa*|*.credentials|*credentials.json|*.db|*.db-wal|*.db-shm|*.db.bak*|.env|*/.env|.env.*|*/.env.*)
        case "$f" in *.example|*.sample|*.template) continue ;; esac
        git -C "$dir" restore --staged -- "$f" 2>/dev/null \
          && echo "[auto-save:guard] 시크릿/DB 의심 제외(미커밋): $f" >&2
        continue ;;
    esac
    sz="$(stat -c%s "$dir/$f" 2>/dev/null || echo 0)"
    if [ "${sz:-0}" -gt 5242880 ]; then
      git -C "$dir" restore --staged -- "$f" 2>/dev/null \
        && echo "[auto-save:guard] 대용량 제외(${sz}B, 미커밋): $f" >&2
    fi
  done < <(git -C "$dir" diff --cached --name-only -z --diff-filter=ACM 2>/dev/null)
  return 0
}

_OUT="$REPO/autobots/frontend/out/_next"
if [ -d "$_OUT" ] && grep -rqE 'snowball\.me\.kr|agent-ui|127\.0\.0\.1|:9250|localhost:9200' "$_OUT" 2>/dev/null; then
  echo "[BUILD-GUARD] ⚠️ autobots out/_next 죽은 API 주소 — UI 데이터 공백 위험. 'pnpm build' 재빌드 필요." >&2
fi

# ── nested 프론트엔드 repo 자동 커밋 ──────────────────────────────────────────
# autobots/frontend 는 부모와 분리된 별도 git repo + 부모에서 gitignore 되어, 부모 repo 의
# 'git add -A' 로는 절대 커밋되지 않는 자동저장 사각지대였다(실사고: 챗 진행표시·위임 수정 49파일
# 미커밋 방치 → git checkout/reset 시 유실 위험). 부모와 독립으로, 프론트만 바뀌어도(부모 clean
# 으로 아래 early-exit 돼도) 반드시 커밋되도록 early-exit 위에 둔다. out/ 등은 FE .gitignore 가
# 제외하므로 빌드 산출물은 안 들어간다. push 안 함(부모 정책과 동일).
FE="$REPO/autobots/frontend"
if git -C "$FE" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  if ! { git -C "$FE" diff --quiet && git -C "$FE" diff --cached --quiet && [ -z "$(git -C "$FE" ls-files --others --exclude-standard)" ]; }; then
    FETS="$(date '+%Y-%m-%d %H:%M:%S')"
    FECOUNT="$(git -C "$FE" status --porcelain | wc -l | tr -d ' ')"
    git -C "$FE" add -A 2>/dev/null
    _guard_staged "$FE"
    if git -C "$FE" commit -q \
        -m "chore(auto-save): 프론트 작업 자동 저장 ${FETS} (${FECOUNT} files)" \
        -m "Stop hook 자동 커밋(nested frontend repo) — 미커밋 유실(롤백) 방지" 2>/dev/null; then
      echo "[auto-save:frontend] $(git -C "$FE" rev-parse --short HEAD) (${FECOUNT} files) 자동 커밋됨" >&2
    fi
  fi
fi

# 변경 없으면 종료 (tracked 수정 + staged + untracked 전부 확인)
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  exit 0
fi

TS="$(date '+%Y-%m-%d %H:%M:%S')"
BRANCH="$(git branch --show-current)"
COUNT="$(git status --porcelain | wc -l | tr -d ' ')"

git add -A 2>/dev/null || exit 0
_guard_staged "$REPO"
git commit -q \
  -m "chore(auto-save): 작업 자동 저장 ${TS} (${COUNT} files)" \
  -m "Stop hook 자동 커밋 — 미커밋 유실(롤백) 방지" 2>/dev/null || exit 0
HASH="$(git rev-parse --short HEAD)"

# 성공 이력: 옵시디언 위키 session-log
LOG="$HOME/obsidian-vault/bbw-wiki/claude/session-log.md"
[ -f "$LOG" ] && printf '\n- [auto-save %s] %s %s — %s files 자동 커밋\n' "$TS" "$BRANCH" "$HASH" "$COUNT" >> "$LOG" 2>/dev/null || true

# 성공 이력: 로컬 memory work-log
MEM="$HOME/.claude/memory/work-log.md"
printf '%s | %s | %s | %s files\n' "$TS" "$BRANCH" "$HASH" "$COUNT" >> "$MEM" 2>/dev/null || true

echo "[auto-save] ${HASH} (${COUNT} files) 자동 커밋됨" >&2
exit 0
