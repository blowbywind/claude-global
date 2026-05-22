#!/bin/bash
# On-demand Korean translation viewer for Claude config/memory files

FILE="$1"

if [[ -z "$FILE" ]]; then
  echo "Usage: kr <file>"
  echo "Example: kr ~/.claude/memory/lessons.md"
  exit 1
fi

if [[ ! -f "$FILE" ]]; then
  echo "Error: file not found — $FILE"
  exit 1
fi

CONTENT=$(cat "$FILE")

claude --print \
  --model claude-haiku-4-5-20251001 \
  "다음 마크다운 파일을 한국어로 번역해줘. 마크다운 형식과 구조는 그대로 유지하고, 번역 결과만 출력해. 설명이나 서두는 생략해.

$CONTENT"
