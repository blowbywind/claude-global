#!/bin/bash
# 파일 저장 후 자동 포맷

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path','') or '')" 2>/dev/null)

[[ -z "$FILE_PATH" ]] && exit 0
[[ ! -f "$FILE_PATH" ]] && exit 0

case "$FILE_PATH" in
  *.ts|*.tsx|*.js|*.jsx|*.json|*.css|*.scss|*.html|*.md|*.mdx|*.prisma)
    if command -v prettier &>/dev/null; then
      prettier --write "$FILE_PATH" 2>/dev/null
    elif [[ -x "$PWD/node_modules/.bin/prettier" ]]; then
      "$PWD/node_modules/.bin/prettier" --write "$FILE_PATH" 2>/dev/null
    fi
    # prettier 없으면 포맷 skip (npx fallback 제거 — 패키지 설치 지연 방지)
    ;;
  *.py)
    if command -v ruff &>/dev/null; then
      ruff format "$FILE_PATH" 2>/dev/null
    elif command -v black &>/dev/null; then
      black "$FILE_PATH" 2>/dev/null
    fi
    ;;
  *.go)
    command -v gofmt &>/dev/null && gofmt -w "$FILE_PATH" 2>/dev/null
    ;;
  *.sh)
    command -v shfmt &>/dev/null && shfmt -w "$FILE_PATH" 2>/dev/null
    ;;
esac

exit 0
