#!/bin/bash
# 위험한 bash 명령 차단 (pre-tool-use)

INPUT=$(cat)
COMMAND=$(echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('command','') or '')" 2>/dev/null)

[[ -z "$COMMAND" ]] && echo '{"decision": "allow"}' && exit 0

block() {
  echo "{\"decision\": \"block\", \"reason\": \"위험한 명령 감지: $1\"}"
  exit 0
}

# rm -rf: 루트(/), 루트글로브(/*), 홈(~), 현재글로브(*) 만 차단
# 허용: rm -rf /opt/specific-path 등 특정 경로 삭제 (CLAUDE.md 안전성 원칙 #4로 처리)
# settings.json의 Bash(rm:*)는 allow 유지 — 이 hook이 위험 패턴만 선택 차단함
if echo "$COMMAND" | grep -qE '\brm\s+-[a-z]*r[a-z]*f[a-z]*\s'; then
  if echo "$COMMAND" | grep -qE '\brm\s+-[a-z]*r[a-z]*f[a-z]*\s+(\/\*?\s*$|\/\*?\s+|~\s*$|~\s+|\*\s*$|\*\s+)'; then
    block "rm -rf on root/home/glob"
  fi
fi

DANGEROUS_PATTERNS=(
  # Fork bomb
  ":(){ :|:& };:"
  # 디스크 덮어쓰기
  "dd if=/dev/zero"
  "dd if=/dev/urandom"
  "> /dev/sda"
  # 권한 파괴
  "chmod -R 777 /"
  "chmod -R 777 ~"
  "chown -R root /"
  # 파일 제로화
  "truncate -s 0"
  # DB 파괴 (Prisma/PostgreSQL)
  "prisma migrate reset"
  "prisma db push --force-reset"
  # git 파괴적 명령: settings.json deny는 선행 토큰만 매칭해 "sudo git reset --hard",
  # "sh -c 'git push --force'" 같은 래핑/체이닝을 통과시킴 — substring 스캔으로 이중 방어
  # (harness-scan 2026-09-07 발견)
  "git reset --hard"
  "git push --force"
  "git restore ."
  "git restore --staged"
  "git restore --worktree"
  "git clean -f"
  "git clean -d"
  "git stash drop"
  "git stash clear"
  # settings.json deny의 ssh-keygen/publish도 동일 래핑 우회 가능
  "ssh-keygen "
  "npm publish"
  "pnpm publish"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if [[ "$COMMAND" == *"$pattern"* ]]; then
    block "$pattern"
  fi
done

# systemctl/crontab: 2026-09-07 settings.json에 읽기전용 서브커맨드 allow 규칙 추가됨
# (crontab -l, systemctl status/list-timers 등) — wrapping 우회 방지를 위해
# 블랑켓 차단 대신 안전한 서브커맨드 화이트리스트만 통과시키는 방식으로 전환
if echo "$COMMAND" | grep -qE '\bsystemctl\b'; then
  if ! echo "$COMMAND" | grep -qE '\bsystemctl\b[^|;&]*\b(status|list-timers|list-units|list-unit-files|is-active|is-enabled|is-failed|show|cat|--help|--version)\b'; then
    block "systemctl (읽기전용 서브커맨드만 허용: status/list-timers/list-units/is-active/is-enabled/show/cat)"
  fi
fi
if echo "$COMMAND" | grep -qE '\bcrontab\b'; then
  if ! echo "$COMMAND" | grep -qE '\bcrontab\b\s+-l\b'; then
    block "crontab (crontab -l만 허용)"
  fi
fi

# 원격 스크립트 실행 (pipe-to-shell) — 단어 경계 regex로 오탐 방지
# | sha256sum, | shfmt, | shuf 등 차단하지 않음
if echo "$COMMAND" | grep -qE '\|\s*(sh|bash)(\s|$)'; then
  block "pipe-to-shell detected"
fi

# git push -f 단축 플래그 (--force와 별개로 regex 차단)
if echo "$COMMAND" | grep -qE '\bgit\s+push\b.*\s-[a-zA-Z]*f[a-zA-Z]*(\s|$)'; then
  block "git push -f (force flag)"
fi

# mkfs: 블록 디바이스에만 차단 (/dev/ 경로)
if echo "$COMMAND" | grep -qE '\bmkfs\b.*\/dev\/'; then
  block "mkfs on block device"
fi

# DB 파괴 명령 (대소문자 무관)
if echo "$COMMAND" | grep -qiE '\b(dropdb|drop\s+database)\b'; then
  block "DB drop command"
fi

# kill/pkill에 음수 PID(-1) = 자신 소유 전체 프로세스 종료(현재 세션 셸 포함, 자해)
# settings.json의 Bash(kill:*)는 특정 PID kill을 허용해야 하므로 -1만 별도 차단
if echo "$COMMAND" | grep -qE '\b(kill|pkill|killall)\b[^|;&]*(^|[^0-9.-])-1([^0-9.]|$)'; then
  block "kill/pkill with PID -1 (all owned processes)"
fi

# 시크릿 파일 읽기: block-env-read.sh는 Read 툴 file_path만 검사하므로
# cat/grep/sed/awk/head/tail 등 Bash 경유 읽기는 무방비였음 (harness-scan 2026-09-07 발견)
SECRET_EXACT=(".env" ".env.local" ".env.development" ".env.production" ".env.staging" ".env.test" ".env.production.local" ".env.development.local")
for pattern in "${SECRET_EXACT[@]}"; do
  esc=$(printf '%s' "$pattern" | sed 's/[.[\*^$]/\\&/g')
  if echo "$COMMAND" | grep -qE "(^|[\"'\`[:space:]/:])${esc}(\$|[\"'\`[:space:]])"; then
    block "민감 파일 접근 의심: $pattern"
  fi
done

SECRET_SUBSTR=("secrets" ".pem" ".key" ".credentials" "id_rsa" "id_dsa" "id_ecdsa" "id_ed25519" ".p12" ".pfx")
for pattern in "${SECRET_SUBSTR[@]}"; do
  [[ "$COMMAND" == *"$pattern"* ]] && block "민감 파일 접근 의심: $pattern"
done

echo '{"decision": "allow"}'
