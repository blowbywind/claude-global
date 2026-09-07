#!/bin/bash
# 세션 종료 시 작업 요약을 Obsidian session-log.md에 기록

# 봇/cron/learning 등 헤드리스 자동 실행(botSpawnEnv 가 AUTOBOTS_BOT_ID 설정)은 대화형 세션이
# 아니므로 기록을 건너뛴다 — 매 봇 종료마다 "## DATE — 커밋없음" placeholder 가 쌓여 session-log
# 를 오염시키던 문제 방지(2026-06-28). 대화형 사용자 세션만 기록(AUTOBOTS_BOT_ID 미설정).
if [[ -n "$AUTOBOTS_BOT_ID" ]]; then
  exit 0
fi

VAULT="$HOME/obsidian-vault/bbw-wiki/claude"
LOG_FILE="$VAULT/session-log.md"
DATE=$(date '+%Y-%m-%d')
TIME=$(date '+%H:%M')
REPO=$(basename "$(git rev-parse --show-toplevel 2>/dev/null)" 2>/dev/null || basename "$PWD")

# 로그 파일 없으면 헤더 생성
if [[ ! -f "$LOG_FILE" ]]; then
  cat > "$LOG_FILE" << 'HEADER'
# Claude 세션 로그

> 세션 종료 시 자동 기록됩니다.

---

HEADER
fi

# 당일 동일 레포의 동일 시간(HH:MM) 항목이 이미 있으면 스킵 (멀티 세션 중복 방지)
if grep -q "^## ${DATE} ${TIME} — ${REPO}$" "$LOG_FILE" 2>/dev/null; then
  exit 0
fi

# 최근 커밋 5개 요약 (없으면 빈 문자열)
RECENT_COMMITS=$(git log --oneline -5 2>/dev/null)

# 최근 변경 파일 목록 (직전 커밋 대비, 최대 10개)
CHANGED_FILES=$(git diff --name-only HEAD~1..HEAD 2>/dev/null | head -10)

# 스테이지됐지만 미커밋 파일
STAGED_FILES=$(git diff --name-only --cached 2>/dev/null | head -5)

# 세션 항목 구성
SESSION_CONTENT="## $DATE $TIME — $REPO"$'\n'$'\n'

if [[ -n "$RECENT_COMMITS" ]]; then
  SESSION_CONTENT+="**최근 커밋:**"$'\n'
  while IFS= read -r line; do
    SESSION_CONTENT+="- $line"$'\n'
  done <<< "$RECENT_COMMITS"
  SESSION_CONTENT+=$'\n'
fi

if [[ -n "$CHANGED_FILES" ]]; then
  SESSION_CONTENT+="**변경 파일 (마지막 커밋):**"$'\n'
  while IFS= read -r line; do
    SESSION_CONTENT+="- \`$line\`"$'\n'
  done <<< "$CHANGED_FILES"
  SESSION_CONTENT+=$'\n'
fi

if [[ -n "$STAGED_FILES" ]]; then
  SESSION_CONTENT+="**미커밋 스테이지 파일:**"$'\n'
  while IFS= read -r line; do
    SESSION_CONTENT+="- \`$line\`"$'\n'
  done <<< "$STAGED_FILES"
  SESSION_CONTENT+=$'\n'
fi

if [[ -z "$RECENT_COMMITS" && -z "$CHANGED_FILES" ]]; then
  SESSION_CONTENT+="_커밋 없음 — 세션 중 작업 내용을 \"오늘 작업 노트에 기록해줘\"로 추가 가능_"$'\n'$'\n'
fi

SESSION_CONTENT+="---"$'\n'$'\n'

# 세션 항목 추가 (최신이 상단)
TEMP=$(mktemp)
printf '%s' "$SESSION_CONTENT" > "$TEMP"
cat "$LOG_FILE" >> "$TEMP"
mv "$TEMP" "$LOG_FILE"
