#!/bin/bash
# 세션 시작 시 컨텍스트 주입

cat <<EOF
{
  "additionalContext": "오늘은 $(date '+%Y-%m-%d %A')입니다. 작업 시작 전 ~/.claude/memory/lessons.md 를 확인하고 같은 실수를 반복하지 마세요."
}
EOF
