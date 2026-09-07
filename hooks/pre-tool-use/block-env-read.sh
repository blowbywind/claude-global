#!/bin/bash
# 민감한 파일 읽기 차단 (pre-tool-use)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path','') or '')" 2>/dev/null)
# offset/limit가 지정된 ranged read 여부 (대형 파일 가드 우회 판단용)
HAS_RANGE=$(echo "$INPUT" | python3 -c "import json,sys; ti=json.load(sys.stdin).get('tool_input',{}); print('1' if ti.get('offset') or ti.get('limit') else '0')" 2>/dev/null)

[[ -z "$FILE_PATH" ]] && echo '{"decision": "allow"}' && exit 0

FILENAME=$(basename "$FILE_PATH")

block() {
  echo "{\"decision\": \"block\", \"reason\": \"민감한 파일 접근 차단: $1\"}"
  exit 0
}

# .env 파일: basename 정확 매칭 (.env.example 등은 허용)
ENV_EXACT=(
  ".env"
  ".env.local"
  ".env.development"
  ".env.production"
  ".env.staging"
  ".env.test"
  ".env.production.local"
  ".env.development.local"
)
for pattern in "${ENV_EXACT[@]}"; do
  [[ "$FILENAME" == "$pattern" ]] && block "$pattern"
done

# 경로 기반 패턴 (substring 매칭)
PATH_PATTERNS=(
  "secrets"
  ".pem"
  ".key"
  ".credentials"
  "id_rsa"
  "id_dsa"
  "id_ecdsa"
  "id_ed25519"
  ".p12"
  ".pfx"
)
for pattern in "${PATH_PATTERNS[@]}"; do
  [[ "$FILE_PATH" == *"$pattern"* ]] && block "$pattern"
done

# 대형 파일 가드: 5,000줄 이상 또는 300KB 이상이면 차단 → head/grep 요약 유도
# (컨텍스트 누수 방지 — @멘션/전체 Read 1회 15~20k 토큰 사례 대응)
if [[ -f "$FILE_PATH" && "$HAS_RANGE" != "1" ]]; then
  SIZE=$(stat -c%s "$FILE_PATH" 2>/dev/null || echo 0)
  LINES=$(wc -l < "$FILE_PATH" 2>/dev/null || echo 0)
  if (( SIZE > 307200 )) || (( LINES > 5000 )); then
    echo "{\"decision\": \"block\", \"reason\": \"대형 파일(${LINES}줄, ${SIZE}B) 전체 Read 차단 — head/tail/sed 범위 지정 또는 grep으로 필요한 부분만 읽으세요. 전체가 꼭 필요하면 Read의 offset/limit를 사용하세요.\"}"
    exit 0
  fi
fi

echo '{"decision": "allow"}'
