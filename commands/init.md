---
description: 프로젝트 Claude Code 초기 설정 생성 (CLAUDE.md · .claude/ 구조 · memory)
allowed-tools: Read, Bash(ls:*), Bash(find:*), Bash(cat:*), Bash(python3:*)
---

**실행 원칙**: 사용자에게 확인하거나 질문하지 않습니다. 모든 판단을 자동으로 내리고 즉시 실행합니다.

**파일 쓰기 원칙**: `Write`·`Edit` 도구를 사용하지 않습니다. 디렉토리 생성과 파일 쓰기를 모두 `python3` Bash 명령으로 수행합니다. 이 규칙은 `.claude/` 내부 파일 포함 모든 파일에 적용됩니다.

인수(`$ARGUMENTS`)가 있으면 프로젝트 타입 힌트로 사용합니다 (예: `python`, `node`, `fullstack`).

---

## Step 1 — 프로젝트 분석

다음 명령으로 구조를 파악합니다:

```bash
ls -la
find . -maxdepth 2 -not -path './.git/*' -not -path './.venv/*' -not -path './node_modules/*' | sort
```

존재하면 Read 도구로 읽습니다: `README.md`, `기획서.md`, `package.json`, `pyproject.toml`, `requirements.txt`, 기존 `CLAUDE.md`

**프로젝트 타입 결정**:

| 감지 파일                                      | 타입        |
| ---------------------------------------------- | ----------- |
| `requirements.txt` / `pyproject.toml` / `*.py` | `python`    |
| `package.json`                                 | `node`      |
| 둘 다                                          | `fullstack` |
| 그 외                                          | `other`     |

인수가 있으면 자동 감지보다 우선합니다.

---

## Step 2 — .claude/ 구조 생성 및 settings.json 작성

디렉토리 생성 + settings.json을 **하나의 python3 명령**으로 처리합니다:

```bash
python3 << 'PYEOF'
import os, json

# 디렉토리 생성
for d in ['.claude/commands', '.claude/hooks', '.claude/memory']:
    os.makedirs(d, exist_ok=True)

# settings.json — 이미 있으면 스킵
if not os.path.exists('.claude/settings.json'):
    # 모든 프로젝트 공통 기본 권한 (읽기 전용 탐색 명령)
    base_allow = [
        "Read(**)",
        "Bash(ls:*)",
        "Bash(find:*)",
        "Bash(cat:*)",
        "Bash(grep:*)",
        "Bash(echo:*)",
        "Bash(stat:*)",
        "Bash(file:*)",
        "Bash(wc:*)",
        "Bash(head:*)",
        "Bash(tail:*)",
        "Bash(pwd)",
        "Bash(whoami)",
        "Bash(which:*)"
    ]
    # 타입별 추가 권한을 base_allow에 합산해서 작성
    # python 예시:
    type_allow = [
        "Bash(python:*)",
        "Bash(python3:*)",
        "Bash(python -m venv:*)",
        "Bash(python3 -m venv:*)",
        "Bash(pip:*)",
        "Bash(pip3:*)"
    ]
    settings = {
        "permissions": {
            "allow": base_allow + type_allow,
            "deny": []
        }
    }
    with open('.claude/settings.json', 'w') as f:
        json.dump(settings, f, indent=2, ensure_ascii=False)
PYEOF
```

타입별 `type_allow` 권한:

- **python**: `python`, `python3`, `venv`, `pip`, `pip3` 관련
- **node**: `pnpm`, `npm`, `npx`, `node` 관련 (글로벌에도 있으나 명시)
- **fullstack**: python + node 합산
- **other**: 분석 결과 기반

---

## Step 3 — CLAUDE.md 작성

기존 CLAUDE.md가 비어있거나 placeholder 상태(200바이트 미만)이면 python3로 새로 작성합니다.
충분히 채워져 있으면 스킵합니다.

python3 heredoc으로 아래 섹션을 포함해 작성합니다 (분석 결과로 내용 채움):

- `## Overview` — 프로젝트 목적 한 줄
- `## Dev Gate` — 환경 설정·의존성 설치 방법
- `## Architecture` — 소스 구조 트리
- `## Commands` — 주요 커맨드
- `## Security Rules` — 프로젝트 고유 보안 규칙
- `## Current Phase` — 현재 개발 단계

```bash
python3 -c "
import os
if not os.path.exists('CLAUDE.md') or os.path.getsize('CLAUDE.md') < 200:
    content = open('/dev/stdin').read()
    open('CLAUDE.md', 'w').write(content)
" << 'CONTENT'
# CLAUDE.md — {실제 프로젝트명}

## Overview
{분석에서 추출한 한 줄 설명}

## Dev Gate
{환경 설정 내용}

## Architecture
{소스 구조}

## Commands
{주요 커맨드}

## Security Rules
글로벌 규칙 적용

## Current Phase
{현재 단계}
CONTENT
```

실제 실행 시 `{플레이스홀더}`를 분석 결과로 채워 완전한 내용으로 작성합니다.

---

## Step 4 — .claude/memory/ 초기화

MEMORY.md가 없을 때만 python3로 생성합니다. project-overview.md는 Step 1 분석 내용을 바탕으로 채웁니다.

```bash
python3 << 'PYEOF'
import os

project = os.path.basename(os.getcwd())

# MEMORY.md
if not os.path.exists('.claude/memory/MEMORY.md'):
    with open('.claude/memory/MEMORY.md', 'w') as f:
        f.write(f"# {project} — Memory Index\n\n- [Project Overview](project-overview.md) — 프로젝트 목적, 기술 스택, 개발 단계\n")

# project-overview.md
if not os.path.exists('.claude/memory/project-overview.md'):
    content = f"""---
name: project-overview
description: {project} 핵심 요약 — 목적, 기술 스택, 현재 단계
metadata:
  type: project
---

{{분석에서 파악한 프로젝트 목적, 기술 스택, 주요 결정 사항}}

**Why:** {{이 프로젝트가 존재하는 이유}}
**How to apply:** {{이 컨텍스트를 작업 시 어떻게 활용할지}}
"""
    with open('.claude/memory/project-overview.md', 'w') as f:
        f.write(content)
PYEOF
```

`{플레이스홀더}` 부분은 Step 1 분석 결과로 실제 내용을 채워서 실행합니다.

---

## Step 5 — .gitignore 보완

```bash
python3 << 'PYEOF'
import os

required = ['.claude/settings.local.json']
# python 타입이면 추가:
# required += ['__pycache__/', '*.py[cod]', '.venv/', 'venv/', 'dist/', 'build/', '*.egg-info/']
# node 타입이면 추가:
# required += ['node_modules/', 'dist/', '.next/', '.env.local']

if os.path.exists('.gitignore'):
    existing = open('.gitignore').read()
    missing = [line for line in required if line not in existing]
    if missing:
        with open('.gitignore', 'a') as f:
            f.write('\n# Claude Code\n' + '\n'.join(missing) + '\n')
else:
    with open('.gitignore', 'w') as f:
        f.write('# Claude Code\n' + '\n'.join(required) + '\n')
PYEOF
```

타입에 맞게 `required` 리스트를 조정해서 실행합니다.

---

## Step 6 — 완료 보고

생성·수정된 파일을 테이블로 출력합니다:

| 파일                                 | 동작           | 비고 |
| ------------------------------------ | -------------- | ---- |
| `.claude/settings.json`              | 생성/스킵      | ...  |
| `CLAUDE.md`                          | 생성/갱신/스킵 | ...  |
| `.claude/memory/MEMORY.md`           | 생성/스킵      | ...  |
| `.claude/memory/project-overview.md` | 생성/스킵      | ...  |
| `.gitignore`                         | 생성/보완/스킵 | ...  |
