
export const meta = {
  name: 'harness-scan',
  description: '클로드 코드 하네스 감사 — 낡은 규칙·중복·과잉 컨텍스트·넓은 권한 탐지 (읽기 전용)',
  phases: [
    { title: 'Inventory', detail: '파일 목록화 및 사이즈 계량' },
    { title: 'Analyze', detail: '7개 관점 병렬 분석' },
    { title: 'Synthesize', detail: '발견 항목 통합 분류' },
    { title: 'Adversarial', detail: '삭제 후보 반박 검증' },
    { title: 'Report', detail: '최종 감사 리포트 생성' },
  ],
}

// ── 전체 하네스 스냅샷 (이미 읽음) ─────────────────────────────────────────
const HARNESS = {
  claude_md: `# Claude 글로벌 컨텍스트

## 정체성
- 스택: ~/.claude/memory/stack-notes.md

## 기본 원칙
0. **사용자 의도 최우선 + 무단작업 금지**: 시스템 트리거·자동화·기본동작보다 사용자 메시지 의도가 항상 우선. 키워드가 자동실행을 유발해도 사용자가 요청한 행동(만들기/설명/분석 등)을 먼저 파악해 응답. 사용자가 명시·의도한 범위를 벗어난 작업은 승인 없이 절대 진행 금지. 의도가 불분명하거나 범위가 애매하면 진행 말고 먼저 확인.
1. **계획 우선** — /plan 먼저 제시·승인 후 구현: 신규 기능·페이지·컴포넌트, 마이그레이션·리팩토링, 서버·인프라·DB 변경, 복잡작업(에이전트 2개+), 애매하면 Plan. 바로 진행 OK: 단순변경·린트·타입·단순버그·누락테스트·문서·네이밍. 반드시 확인: DB 스키마·인증/권한·결제/보안·PRD 충돌·기능범위 확장.
2. **간결·범위 제한**: 사족 없이 핵심만. 코딩 세부규칙(Simplicity First, Surgical Changes) → karpathy-guidelines.
3. **검증**: 코드=빌드+tsc --noEmit+린트 / 설정(hooks·settings.json·CLAUDE.md)=bash -n 또는 jq . / 메모리·문서=링크 유효성+MEMORY.md 인덱스. 완료 선언 전 "확인 없이 완료 주장 아닌가?" 자문.
4. **안전성**: 파괴적 명령(rm -rf, DROP TABLE 등) 사전 확인 필수.
5. **실수 영구 반영**: 원인분석 → memory/lessons.md 기록 → ACTIVE RULES 반영.
6. **완료 보고 필수** (서브에이전트·봇 전용): 위임받은 작업 완료 시 응답 마지막에 완료 보고(완료/결과/못한것/다음단계) 필수.

## 말투·형식
- 단답형(코드 주석·커밋은 영어), 이모지 최소, 결론→근거→상세 순서.
- 응답은 한글·영문·숫자·기본특수문자만. 제3언어 섞인 외부데이터는 제거/변환 후 출력.
- 코드는 언어지정 코드블록, 파일경로 변경 시 before/after, 긴 작업은 체크리스트.
- 성공=변경결과 목록만 / 실패=원인·파일:라인 상세. 주석은 WHY 명확할 때만.

## references 우선순위
references/plan/(또는 plan/)=기획서 필수 준수 / references/design/=색·스타일 참조만. 충돌 시 plan 우선.

## 금지
- 확인 없이 파일 삭제, 임의 라이브러리 추가(사전 보고), 완료 후 요약/결론 반복.
- references/design/를 기획 기준으로 사용 금지(plan/이 기준).
- ultracode 목적어 확인: 생성 요청은 생성만. 애매하면 실행/작성 여부 확인.
- 조건부 실행 즉시실행 금지: 승인대기 표현 감지 시 계획만 제시 후 보류.
- 서버 작업 시 ~/.claude/memory/server-network-warning.md 필독.

## Obsidian 위키
경로 ~/obsidian-vault/bbw-wiki/claude/: projects/(세션시작 자동주입), decisions/(ADR), session-log.md. "이전에 ~했는데" 류 질문은 위키 grep 후 답변. 작업 완료 후 위키화, 업무 시작 전 키워드 검색.

## WIP (컨텍스트 인계)
~/obsidian-vault/bbw-wiki/claude/work-in-progress.md 유지. 저장 트리거: 도구 15회+ 긴 작업, 중단의도, 멀티스텝 중간완료, 종료 전. 세션 시작 시 존재하면 자동 주입.

## 메모리 승격 (로컬↔Obsidian)
4계층(상세: ~/.claude/memory/second-brain-architecture.md). 로컬=반복명령·디버깅팁 / decisions/=ADR / projects/=상태변경 / WIP=긴 작업. 작업 전 grep 검색 필수.

## 에이전트 품질 게이트 (위험도 기반)
- self-check만: 단순 문서·네이밍·린트·타입·1파일 버그 수정.
- code-reviewer → evaluator-strict: 인증·권한·결제·보안·DB스키마·인프라 변경, 또는 2파일+ 대형 변경.
- 상세: ~/.claude/memory/agent-architecture.md.

## 커맨드 vs 스킬
커맨드(~/.claude/commands/*.md, 사용자 직접 입력) / 스킬(~/.claude/skills/*/SKILL.md, 에이전트 Skill 툴 호출). 동명이면 커맨드 우선.`,

  karpathy_skill: `name: karpathy-guidelines
description: 복잡한 신규 기능 구현·대규모 리팩토링·설계 결정이 필요한 작업에 적용해 과잉 구현과 범위 초과 수정을 방지한다.
Body length: ~93 lines
Sections: 사용하지 말아야 할 때 (3 conditions: 단순 Q&A/코드설명, 1-5줄 제한 수정, 설정파일 단순 값변경), Think Before Coding, Simplicity First (+ 의사결정 사다리 6단계 + 안전망 생략 금지), Surgical Changes, Goal-Driven Execution`,

  settings_json: `permissions.allow: 60 entries (Read/Write/Edit/Glob/Grep 광범위, git/pnpm/npm/node/python/파일유틸 등)
permissions.deny: 25 entries
  - Read(**/.env), Read(**/.env.*) x5, Read(**/secrets/**), Read(**/*.pem), Read(**/*.key), Read(**/.credentials*)
  - Read(~/.ssh/*), Read(~/.aws/*), Read(~/.config/gcloud/*)
  - Bash(rm -rf:*), Bash(dd:*), Bash(git push --force:*), Bash(git reset --hard:*), Bash(git restore:*), Bash(git clean:*), Bash(git stash:*)
  - Bash(systemctl:*), Bash(crontab:*), Bash(ssh-keygen:*), Bash(npm publish:*), Bash(pnpm publish:*)
  - 주의: Bash(sudo:*) deny 없음 (이전 스냅샷엔 있었음)
hooks.PreToolUse: Read → block-env-read.sh, Bash → block-dangerous.sh
hooks.PostToolUse: Edit|Write|MultiEdit → auto-format.sh
hooks.SessionStart: load-context.sh
hooks.SessionEnd: save-session.sh
hooks.SubagentStop: inline echo (완료 보고 확인 리마인더)
env: BASH_DEFAULT_TIMEOUT_MS, BASH_MAX_TIMEOUT_MS, CLAUDE_CODE_MAX_OUTPUT_TOKENS
기타: cleanupPeriodDays, theme, autoCompactThreshold, effortLevel, model
주의: 시스템에 jq 미설치 — CLAUDE.md 검증규칙 'jq .' 실행 불가, python -m json.tool 대체 필요`,

  agents: `11개 에이전트 파일:
backend-agent (105L): Fastify REST API, hnedu_auth·hnedu_crm 전용 (Read,Write,Edit,Bash,Grep,Glob)
code-reviewer (61L): 코드 품질·보안·성능 리뷰 (Read,Grep,Glob,Bash)
database-agent (78L): PostgreSQL+Prisma 스키마·마이그레이션·쿼리 (Read,Write,Edit,Bash,Grep,Glob)
dotnet-api-agent (53L): ASP.NET Core Web API, hnedu_erp 전용 (Read,Write,Edit,Bash,Grep,Glob)
evaluator-strict (92L): 요구사항 100% 충족 검증 (Read,Bash,Grep,Glob)
frontend-agent (102L): Next.js 15 App Router UI, hnedu_auth·hnedu_crm 전용 (Read,Write,Edit,Bash,Grep,Glob)
orchestrator (106L): 멀티 도메인 작업 분해·위임 (Read,Bash,Grep,Glob,Agent,TodoWrite)
research-agent (44L): WebSearch/WebFetch 외부 리서치 (Read,Bash,Grep,Glob,WebSearch,WebFetch)
senior-strategist (51L): 아키텍처 결정 전 장기 영향 검토 (Read,Grep,Bash)
test-agent (155L): Vitest 단위·통합 테스트 (Read,Write,Edit,Bash,Grep,Glob)
winforms-agent (40L): WinForms .NET 8 UI, hnedu_erp 전용 (Read,Write,Edit,Bash,Grep,Glob)`,

  commands: `commit.md: 44 lines — Conventional Commits 형식 커밋 생성
daily-log.md: 22 lines — 오늘 작업 정리 후 Obsidian log.md 기록
init.md: 222 lines — 프로젝트 Claude Code 초기 설정 생성 (내장 init 스킬과 이름 충돌 가능성)
plan.md: 49 lines — 작업 시작 전 상세 계획 수립
review.md: 41 lines — 현재 변경 사항 코드 리뷰 (내장 review/code-review 스킬과 이름 충돌 가능성)`,

  memory: `MEMORY.md: 9 lines — 메모리 인덱스 (세션 로드)
active-rules.md: 22 lines — 세션 시작 주입 영구 규칙
agent-architecture.md: 112 lines — 에이전트 목록·역할·품질 게이트 흐름
feedback_background_server.md: 15 lines — 백그라운드 서버 피드백
lessons.md: 291 lines — 과거 실수 교훈 (가장 긴 메모리 파일)
second-brain-architecture.md: 27 lines — 4계층 메모리 구조
server-network-warning.md: 166 lines — Docker/서버 안전 규칙 상세
stack-notes.md: 44 lines — 기술 스택 상세
work-log.md: 107 lines — 작업 로그
(주: 이전 스냅샷의 api-conventions.md·db-conventions.md는 현재 없음)`,

  hooks: `pre-tool-use/block-env-read.sh: .env·비밀파일 읽기 차단 (PreToolUse[Read])
pre-tool-use/block-dangerous.sh: rm -rf, fork bomb, dd, chmod 777, prisma migrate reset, pipe-to-shell 등 차단 (PreToolUse[Bash])
post-tool-use/auto-format.sh: 확장자별 포매터 prettier/ruff/black/gofmt/shfmt (PostToolUse[Edit|Write|MultiEdit])
session-start/load-context.sh: 날짜+브랜치+저장소+최근커밋+active-rules 주입 (SessionStart)
session-stop/save-session.sh: 세션 종료 저장 (SessionEnd)
auto-commit-on-stop.sh: 존재하나 settings.json 훅 미연결 (dead? — 확인 필요)
SubagentStop: inline echo — 완료 보고 확인 리마인더`,

  mcp: `로컬 MCP 서버 2개: obsidian-gateway, playwright (settings.json mcpServers)
Cloud-synced MCP: mcp-needs-auth-cache.json 캐시 존재 (86B)`,

  workflows: `claude-code-patterns-research.js: Claude Code 모범 사례 리서치
harness-diet.js: harness-scan 리포트 기반 low-risk 개선 적용
harness-scan.js: 하네스 감사 (이 워크플로우, 읽기 전용)
harness-update.js: 하네스 개선 (주의: 하드코딩 스냅샷이 낡아 실행 시 회귀 위험)`,

  builtin_skills: `Claude Code 내장 스킬 (충돌 분석용):
commit, daily-log, init("Initialize a new CLAUDE.md"), plan, review("Review a pull request"), code-review("Review current diff"), deep-research, update-config, keybindings-help, verify, simplify, fewer-permission-prompts, loop, schedule, claude-api, run, security-review`
}

// ── Phase 1: Inventory ────────────────────────────────────────────────────
phase('Inventory')

const INVENTORY_SCHEMA = {
  type: 'object',
  properties: {
    files: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          type: { type: 'string', enum: ['global-context', 'skill', 'agent', 'command', 'hook', 'memory', 'workflow', 'mcp', 'settings'] },
          size_estimate: { type: 'string' },
          load_frequency: { type: 'string', enum: ['every-session', 'on-trigger', 'on-invoke', 'on-tool-call', 'reference-only'] },
          context_cost: { type: 'string', enum: ['high', 'medium', 'low', 'zero'] },
        },
        required: ['path', 'type', 'size_estimate', 'load_frequency', 'context_cost'],
      },
    },
    total_always_on_items: { type: 'number' },
    estimated_session_token_cost: { type: 'string' },
  },
  required: ['files', 'total_always_on_items', 'estimated_session_token_cost'],
}

const inventory = await agent(
  `Create an inventory of all harness files and their context cost.

Harness snapshot:
CLAUDE.md: ${HARNESS.claude_md.split('\n').length} lines
settings.json: ${HARNESS.settings_json}
Agents: ${HARNESS.agents}
Commands (skills): ${HARNESS.commands}
Memory files: ${HARNESS.memory}
Hooks: ${HARNESS.hooks}
MCP: ${HARNESS.mcp}
Workflows: ${HARNESS.workflows}

For each file, estimate:
- load_frequency: every-session (CLAUDE.md, SessionStart hook), on-trigger (skills auto-selected), on-invoke (commands), on-tool-call (PreToolUse/PostToolUse hooks), reference-only (memory files not auto-injected)
- context_cost based on file size and load frequency
- total_always_on_items: count of files loaded every session without any trigger
- estimated_session_token_cost: rough estimate in tokens for a typical session`,
  { label: 'inventory', phase: 'Inventory', schema: INVENTORY_SCHEMA }
)

log(`인벤토리: ${inventory?.files?.length || 0}개 파일, 상시 로딩 ${inventory?.total_always_on_items || 0}개, 세션 비용 ${inventory?.estimated_session_token_cost || '?'}`)

// ── Phase 2: 7개 관점 병렬 분석 ──────────────────────────────────────────
phase('Analyze')

const FINDING_SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          section: { type: 'string' },
          current_purpose: { type: 'string' },
          problem: { type: 'string' },
          evidence: { type: 'string' },
          recommendation: { type: 'string', enum: ['KEEP', 'SHRINK', 'MOVE', 'SPLIT', 'CONVERT', 'DELETE'] },
          move_target: { type: 'string' },
          risk: { type: 'string', enum: ['low', 'medium', 'high', 'critical'] },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          auto_applicable: { type: 'boolean' },
        },
        required: ['path', 'section', 'current_purpose', 'problem', 'evidence', 'recommendation', 'risk', 'confidence', 'auto_applicable'],
      },
    },
  },
  required: ['findings'],
}

const analyses = await parallel([
  // Agent 1: Global Context Tax
  () => agent(
    `You are the Global Context Tax Agent. Analyze what loads EVERY session and assess its necessity.

CLAUDE.md content:
${HARNESS.claude_md}

session-start hook injects: date, branch, repo, project type, recent commits, active-rules (top 5)

Questions to answer for EACH section of CLAUDE.md:
1. Is this section truly needed every session, or only for specific task types?
2. Does this section duplicate content already in memory/ files or skills?
3. Is the rule enforcement-level (vs guidance-level)? Guidance belongs in memory, enforcement in hooks.
4. Is the "서버 작업 안전 규칙" section always relevant, or only when working on the homeserver Docker setup?
5. Is "에이전트 아키텍처" in CLAUDE.md redundant with memory/agent-architecture.md?
6. Does the session-start hook inject too much? Is the active-rules injection (top 5 rules) valuable?

Context: Claude Code already enforces some behaviors by default. Claude 4.x has strong instruction-following without verbose reminders. CLAUDE.md loads on EVERY tool call as system-reminder.

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE, risk, confidence, auto_applicable.`,
    { label: 'analyze:global-context-tax', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),

  // Agent 2: Skill Quality
  () => agent(
    `You are the Skill Quality Agent. Analyze each skill for quality, necessity, and appropriate scope.

karpathy-guidelines skill:
${HARNESS.karpathy_skill}

commands (user-invocable, loaded on /command):
${HARNESS.commands}

Built-in Claude Code skills (for overlap analysis):
${HARNESS.builtin_skills}

Questions to answer:
1. karpathy-guidelines: Is the "사용하지 말아야 할 때" section sufficient to prevent over-triggering? Is 85 lines too long for a SKILL.md?
2. commands/init.md is 222 lines — is this appropriate for a command file? Does it need to be split into SKILL.md + reference.md?
3. commands/review.md: "현재 변경 사항 코드 리뷰" vs built-in "code-review" skill — is this a real collision? What's the impact?
4. commands/commit.md (44 lines): does it duplicate built-in "commit" skill?
5. commands/daily-log.md (29 lines): does it duplicate built-in "daily-log" skill?
6. commands/plan.md (35 lines): does it duplicate built-in "plan" skill?
7. Are there missing skills that would benefit from being created?

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE.`,
    { label: 'analyze:skill-quality', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),

  // Agent 3: Product Overlap
  () => agent(
    `You are the Product Overlap Agent. Find rules that Claude Code or Claude 4.x now handles natively.

CLAUDE.md:
${HARNESS.claude_md}

Commands:
${HARNESS.commands}

Context on Claude Code's built-in capabilities (2025):
- Claude Code has built-in Conventional Commits support
- Claude Code has built-in plan/review/commit/init commands as plugins
- Claude 4.x follows "write minimal code" and "don't add unrequested features" by default
- Claude Code automatically tracks todo items with TodoWrite
- Claude Code has built-in memory system
- Claude Code has built-in hooks for auto-format if configured
- Claude 4.x is trained to ask for clarification when ambiguous
- Claude 4.x knows not to expose secrets

Questions:
1. Which CLAUDE.md rules are behaviors Claude 4.x does by default anyway?
2. Which commands duplicate built-in Claude Code plugin skills exactly?
3. Is the "완료 후 요약/결론 반복 출력 금지" rule needed, or is this now default behavior?
4. Is the "이모지 최소한으로" rule needed in CLAUDE.md?
5. Are the "말투" rules (존댓말, 결론→근거 순서) meaningful constraints or style preferences that could live elsewhere?
6. Do the workflow files (harness-update.js, claude-code-patterns-research.js) provide lasting value as saved workflows?

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE.`,
    { label: 'analyze:product-overlap', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),

  // Agent 4: Safety & Permission
  () => agent(
    `You are the Safety and Permission Agent. Analyze hooks, settings.json permissions for over-broad grants and redundancies.

settings.json allow list (70 entries):
${HARNESS.settings_json}

Hook scripts:
${HARNESS.hooks}

Questions:
1. settings.json allow list has 70 entries. Which categories are over-broad?
   - "Bash(rm:*)" — allows rm with any args including rm -rf /. Is this safe given block-dangerous.sh?
   - "Bash(kill:*)" — allows killing any process. Needed?
   - "Bash(curl:*)" and "Bash(wget:*)" — allows arbitrary HTTP requests. Needed?
   - "Bash(python:*)" and "Bash(pip install:*)" — needed for global config?
   - "Bash(npm install:*)" — vs "Bash(pnpm install:*)" — is npm redundant given pnpm is the primary?
2. deny list: are the Read deny entries redundant with block-env-read.sh hook? (double protection or one is sufficient?)
3. block-dangerous.sh: are all 15 patterns still relevant? Are any redundant with deny list?
4. block-env-read.sh: the hook and the deny list both block .env files — double-layer protection justified?
5. auto-format.sh: runs on EVERY Edit|Write. Is the "npx --yes prettier" fallback safe (downloads packages)?
6. load-context.sh: injects active-rules top 5 into every session. Is this the right mechanism vs just reading memory files when needed?
7. MCP Canva: cloud-sync only, needs auth — low risk, but is it used?

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE, with special attention to KEEP for safety-critical items.`,
    { label: 'analyze:safety-permission', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),

  // Agent 5: Agent Architecture
  () => agent(
    `You are the Agent Architecture Analyzer. Analyze the 8 custom agents for quality, necessity, and description accuracy.

Agents:
${HARNESS.agents}

Memory:
${HARNESS.memory}

CLAUDE.md mentions agents. agent-architecture.md (40 lines) documents the flow.

Questions:
1. Are any of the 8 agents redundant with Claude Code's built-in sub-agent capabilities?
2. Do any agent descriptions overlap too broadly (causing multiple agents to be selected for same task)?
3. orchestrator: "단일 도메인이라도 반드시 해당 전문 에이전트에게 위임" — is this rule practical? Does it slow down simple tasks?
4. code-reviewer and evaluator-strict: are both needed, or does one cover the other?
5. senior-strategist: tools are Read,Grep only. Is this agent invoked frequently enough to justify its existence?
6. memory/agent-architecture.md duplicates information in CLAUDE.md's "에이전트 아키텍처" section. Which is the source of truth?
7. Do agent files reference memory/stack-notes.md correctly? Is this reference pattern working well?
8. test-agent: Vitest-specific. If a project uses Jest or Playwright, does this agent degrade?

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE.`,
    { label: 'analyze:agent-architecture', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),

  // Agent 6: Stale Rules Detector
  () => agent(
    `You are the Stale Rules Detector. Find rules that protect against past mistakes but may no longer be relevant.

active-rules.md (4 rules):
1. bash 배열 패턴에서 wildcard 처리 방법
2. rm -rf /path 차단 시 substring 패턴
3. hook 동작 테스트를 위해 Bash에 위험 패턴 직접 포함 금지
4. block-env-read.sh에서 .env substring 매칭 → basename 정확 매칭

lessons.md: (contains past mistakes)
memory/server-network-warning.md: Docker 환경 안전 규칙 (44 lines)

Questions:
1. active-rules.md rules 1-4: are these still relevant? Rules 1-3 are implementation details for the hooks — do they need to be in the active session context, or just in the hook code itself?
2. Rule 4 was the fix applied to block-env-read.sh — is the fix already in the code, making the rule redundant?
3. server-network-warning.md (44 lines): is every line still accurate? Are Docker/SSH/iptables rules from past incidents still valid?
4. lessons.md: are all 24 lines of lessons still applicable, or are some about issues that are now resolved?
5. Are there rules in CLAUDE.md that were added after a specific incident but the underlying issue is now fixed?
6. Is "완료 후 요약/결론 반복 출력 금지" still needed? Was this a frequent issue?

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE.`,
    { label: 'analyze:stale-rules', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),

  // Agent 7: Memory Architecture
  () => agent(
    `You are the Memory Architecture Analyst. Analyze the memory/ files for organization, staleness, and injection patterns.

Memory files:
${HARNESS.memory}

session-start hook injects active-rules top 5 lines into every session context.
Other memory files are NOT automatically injected — they must be explicitly read.

Questions:
1. db-conventions.md (85 lines) is the largest memory file. Is it comprehensive but too long? Should parts become reference.md or examples.md?
2. api-conventions.md (50 lines): is it referenced by backend-agent? How is it used?
3. stack-notes.md (44 lines): CLAUDE.md and agents reference it. Is the reference pattern working?
4. active-rules.md (11 lines, 4 rules): These are hook implementation notes. Should they be in the hook files themselves as comments rather than a separate memory file?
5. agent-architecture.md (40 lines): CLAUDE.md has a one-line summary, this has the full details. Is this the right split?
6. lessons.md (24 lines): Are lessons categorized well? Should past-fixed lessons be archived?
7. Is there a MEMORY.md index file? (referenced in auto-memory system)
8. Are any memory files stale (referring to outdated patterns or resolved issues)?

Rate each finding: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE.`,
    { label: 'analyze:memory-architecture', phase: 'Analyze', schema: FINDING_SCHEMA }
  ),
])

const allFindings = analyses.filter(Boolean).flatMap(a => a.findings || [])
log(`분석 완료: ${allFindings.length}개 발견 항목`)

// ── Phase 3: 통합 분류 (flat schema) ────────────────────────────────────
phase('Synthesize')

// 발견 항목 요약 (너무 큰 JSON 덤프 방지)
const findingSummary = allFindings.map(f =>
  `[${f.recommendation}][risk:${f.risk}][conf:${f.confidence}] ${f.path} § ${f.section} — ${f.problem}`
).join('\n')

const SYNTHESIS_SCHEMA = {
  type: 'object',
  properties: {
    keep:             { type: 'array', items: { type: 'string' } },
    shrink:           { type: 'array', items: { type: 'string' } },
    move:             { type: 'array', items: { type: 'string' } },
    split:            { type: 'array', items: { type: 'string' } },
    convert:          { type: 'array', items: { type: 'string' } },
    delete_candidates:{ type: 'array', items: { type: 'string' } },
    low_risk_auto:    { type: 'array', items: { type: 'string' } },
    high_risk_manual: { type: 'array', items: { type: 'string' } },
  },
  required: ['keep','shrink','move','split','convert','delete_candidates','low_risk_auto','high_risk_manual'],
}

const synthesis = await agent(
  `Synthesize harness audit findings. Each array item = one natural-language description.

Findings (one per line — format: [ACTION][risk][confidence] path § section — problem):
${findingSummary}

Rules:
- Safety-critical (server rules, security hooks) → keep
- Duplicates Claude 4.x default behavior → delete_candidates
- Duplicates another harness file → shrink or move
- Built-in skill duplicate commands → convert
- Files >100 lines → split
- Resolve conflicts conservatively (KEEP beats DELETE when uncertain)

low_risk_auto = auto-applicable by /harness-diet (e.g. "CLAUDE.md: 금지사항 '완료 후 요약 금지' 항목 삭제 — Claude 4.x 기본 동작")
high_risk_manual = needs human judgment (e.g. "commands/review.md → rename to avoid collision")

Each string should be specific enough to act on: include path, section, and what to do.`,
  { label: 'synthesize:classify', phase: 'Synthesize', schema: SYNTHESIS_SCHEMA }
)

log(`분류: KEEP ${synthesis?.keep?.length || 0} / SHRINK ${synthesis?.shrink?.length || 0} / MOVE ${synthesis?.move?.length || 0} / DELETE 후보 ${synthesis?.delete_candidates?.length || 0}`)

// ── Phase 4: Adversarial Review ───────────────────────────────────────────
phase('Adversarial')

const ADVERSARIAL_SCHEMA = {
  type: 'object',
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          item: { type: 'string' },
          proposed_action: { type: 'string' },
          survives_adversarial: { type: 'boolean' },
          argument_against_removal: { type: 'string' },
          final_recommendation: { type: 'string', enum: ['KEEP', 'SHRINK', 'MOVE', 'SPLIT', 'CONVERT', 'DELETE'] },
          revised_risk: { type: 'string', enum: ['low', 'medium', 'high', 'critical'] },
        },
        required: ['item', 'proposed_action', 'survives_adversarial', 'argument_against_removal', 'final_recommendation', 'revised_risk'],
      },
    },
  },
  required: ['verdicts'],
}

// Delete candidates + high-risk items에 대해서만 반박 검토
const adversarialTargets = [
  ...(synthesis?.delete_candidates || []).map(d => ({ item: d.section || d.path, action: 'DELETE', reason: d.reason })),
  ...(synthesis?.high_risk_manual || []).map(h => ({ item: h, action: 'MANUAL', reason: 'high-risk flag' })),
]

const adversarialResult = await agent(
  `You are the Adversarial Reviewer. For each item proposed for deletion or major change, try to ARGUE FOR KEEPING IT.

Items to adversarially review:
${JSON.stringify(adversarialTargets, null, 2)}

Harness context:
- User: Korean developer (bbw), solo or small team
- Stack: Next.js 15, Fastify, PostgreSQL, Prisma, pnpm
- Homeserver Docker environment (safety rules are critical)
- Uses Claude Code for real production work

For each item:
1. Try to think of a scenario where this rule PREVENTED a real mistake
2. Assess if removal creates an irreversible risk vs recoverable one
3. Consider: would removing this cause silent degradation (Claude quietly doing the wrong thing)?

Special scrutiny for:
- Server safety rules (sudo ufw reload ban) — has this actually saved the homeserver from network cuts?
- Security hooks — are there scenarios where the hook pattern prevents real data exposure?
- active-rules that seem like implementation details — but what if Claude regenerates the hooks wrong?

Default to survives_adversarial=true for anything safety/security-related unless very clearly redundant.`,
  { label: 'adversarial:review', phase: 'Adversarial', schema: ADVERSARIAL_SCHEMA }
)

const survivedCount = (adversarialResult?.verdicts || []).filter(v => v.survives_adversarial).length
log(`반박 검토: ${survivedCount}/${adversarialTargets.length}개 삭제 후보 중 유지 권고`)

// ── Phase 5: 최종 보고서 ─────────────────────────────────────────────────
phase('Report')

const REPORT_SCHEMA = {
  type: 'object',
  properties: { report_markdown: { type: 'string' } },
  required: ['report_markdown'],
}

// 보고서용 데이터 압축
const reportData = {
  session_cost: inventory?.estimated_session_token_cost,
  always_on: inventory?.total_always_on_items,
  keep:    synthesis?.keep    || [],
  shrink:  synthesis?.shrink  || [],
  move:    synthesis?.move    || [],
  split:   synthesis?.split   || [],
  convert: synthesis?.convert || [],
  delete:  synthesis?.delete_candidates || [],
  low_risk_auto:    synthesis?.low_risk_auto    || [],
  high_risk_manual: synthesis?.high_risk_manual || [],
  adversarial: (adversarialResult?.verdicts || []).map(v =>
    `${v.survives_adversarial ? 'KEEP' : 'DELETE'} — ${v.item}: ${v.argument_against_removal}`
  ),
  findings_summary: findingSummary,
}

const reportResult = await agent(
  `Generate a comprehensive Korean markdown audit report for the Claude Code harness.

Audit data (JSON):
${JSON.stringify(reportData, null, 2)}

Write a Korean report with EXACTLY these 9 sections:

## 전체 요약
2-3문장. 하네스 전체 상태, 주요 발견, 권장 방향.

## 1. 유지해야 할 항목 (KEEP)
Table: 경로 | 현재 목적 | 유지 이유
Focus on: why these are genuinely needed, not just "seems fine"

## 2. 줄여야 할 항목 (SHRINK)
Table: 경로 | 섹션 | 제거할 내용 | 예상 절약
Specific text/sections to remove, not vague "make it shorter"

## 3. 전역 지침에서 Skill로 옮길 항목 (MOVE)
Table: 현재 위치 | 섹션 | 이동할 위치 | 이유

## 4. Skill/Command에서 reference.md 또는 examples.md로 분리할 항목 (SPLIT)
Table: 파일 | 분리 대상 | 분리 파일명 | 이유

## 5. 삭제 후보 (DELETE)
Table: 경로 | 섹션 | 삭제 이유 | 반박 검토 결과 | 위험도
Include adversarial verdict for each

## 6. 사람이 직접 승인해야 하는 위험한 변경
Table: 항목 | 이유 | 권장 조치

## 7. 개별 발견 항목 상세 (Detailed Findings)
For each finding from the 7 agents, use this format:
---
**경로**: path
**현재 목적**: what it does
**발견한 문제**: the problem
**근거**: evidence
**추천 조치**: KEEP/SHRINK/MOVE/SPLIT/CONVERT/DELETE
**옮긴다면**: target (or N/A)
**위험도**: low/medium/high/critical
**신뢰도**: high/medium/low
**harness-diet 자동 처리**: yes/no
---

## 8. /harness-diet로 넘겨도 되는 low-risk 변경 목록
Numbered list of auto-applicable changes with exact descriptions.

## 9. /harness-diet 실행용 추천 프롬프트
Write a complete prompt the user can copy-paste to run /harness-diet.
The prompt should reference specific items from sections 2, 3, 4 that are safe to auto-apply.
Include explicit exclusions (items NOT to touch).`,
  { label: 'report:final', phase: 'Report', schema: REPORT_SCHEMA }
)

return {
  report: reportResult?.report_markdown,
  total_findings: allFindings.length,
  keep: synthesis?.keep?.length,
  shrink: synthesis?.shrink?.length,
  move: synthesis?.move?.length,
  split: synthesis?.split?.length,
  delete_candidates: synthesis?.delete_candidates?.length,
  low_risk_auto: synthesis?.low_risk_auto?.length,
  adversarial_survived: survivedCount,
}
