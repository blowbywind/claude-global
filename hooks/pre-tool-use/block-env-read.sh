#!/bin/bash
# .env 파일 읽기 차단

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

ENV_PATTERNS=(
  ".env"
  ".env.local"
  ".env.production"
  ".env.development"
  "secrets"
  ".pem"
  ".key"
)

for pattern in "${ENV_PATTERNS[@]}"; do
  if [[ "$FILE_PATH" == *"$pattern"* ]]; then
    echo "{\"decision\": \"block\", \"reason\": \"민감한 파일 접근 차단: $pattern\"}"
    exit 0
  fi
done

echo '{"decision": "allow"}'
