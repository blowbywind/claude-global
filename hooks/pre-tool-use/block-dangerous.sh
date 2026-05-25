#!/bin/bash
# 위험한 bash 명령 차단

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# 위험 패턴
DANGEROUS_PATTERNS=(
  "rm -rf /"
  "rm -rf ~"
  "rm -rf \*"
  ":(){ :|:& };:"
  "dd if=/dev/zero"
  "mkfs"
  "> /dev/sda"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if [[ "$COMMAND" == *"$pattern"* ]]; then
    echo "{\"decision\": \"block\", \"reason\": \"위험한 명령 감지: $pattern\"}"
    exit 0
  fi
done

echo '{"decision": "allow"}'