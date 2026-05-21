#!/bin/bash
# .env 파일 읽기 차단

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

if [[ "$FILE_PATH" == *".env"* ]] || [[ "$FILE_PATH" == *"secrets"* ]]; then
  echo '{"decision": "block", "reason": ".env / secrets 파일 접근이 차단되었습니다."}'
  exit 0
fi

echo '{"decision": "allow"}'
