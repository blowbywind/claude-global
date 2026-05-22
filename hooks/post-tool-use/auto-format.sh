#!/bin/bash
# 파일 저장 후 자동 포맷 (로컬 바이너리 우선, 없으면 skip)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

[[ -z "$FILE_PATH" ]] && exit 0

case "$FILE_PATH" in
  *.ts|*.tsx|*.js|*.jsx|*.json)
    if command -v prettier &>/dev/null; then
      prettier --write "$FILE_PATH" 2>/dev/null
    elif [[ -x "./node_modules/.bin/prettier" ]]; then
      ./node_modules/.bin/prettier --write "$FILE_PATH" 2>/dev/null
    fi
    ;;
  *.py)
    command -v black &>/dev/null && black "$FILE_PATH" 2>/dev/null
    ;;
esac

exit 0
