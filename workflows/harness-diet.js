export const meta = {
  name: 'harness-diet',
  description: 'harness-scan 보고서 기반 low-risk 하네스 개선 — CLAUDE.md 압축, memory 정리, agent/skill 역할 명확화',
  whenToUse: 'harness-scan 리포트 후 low-risk 변경 항목을 일괄 적용할 때. hooks·settings·permissions 변경은 포함하지 않음.',
  phases: [
    { title: 'Apply Changes', detail: 'CLAUDE.md, memory, agents, skills 파일 병렬 편집' },
    { title: 'Verify', detail: '각 파일 변경 결과 검증' },
    { title: 'Report', detail: '최종 변경 요약 생성' },
  ],
}

// args 로 BASE 경로를 오버라이드할 수 있음. 기본값: /home/bbw/.claude
const BASE = (args && args.base) || '/home/bbw/.claude'

phase('Apply Changes')

const applyResults = await parallel([

  // --- Agent 1: CLAUDE.md ---
  () => agent(`
Read ${BASE}/CLAUDE.md. Apply ALL of the following changes. Do NOT add any explanatory comments to the file.

Change 1 — 나의 정체성 섹션:
- Remove any line containing the user's name or email address (e.g. "이름: bbw" or email)
- Remove any standalone "주요 사용 언어" line
- Replace the stack inline list line with: "- 스택: ~/.claude/memory/stack-notes.md 참조"
- If the section already matches the target state, skip silently.

Change 2 — 말투 섹션:
- Append "(코드 주석·커밋은 영어)" to the "존댓말 사용" bullet if not already present.

Change 3 — 기본 원칙 섹션:
- Delete the "솔직함" principle entirely if present (the one about "모르는 것은 모른다고 답변").
- Renumber remaining principles sequentially starting from 1.

Change 4 — 금지 사항 섹션:
- Remove the ".env 등 비밀 정보 파일 읽기/노출" bullet if present (hook enforces this at tool level).

Change 5 — 토큰 효율 섹션:
- If a standalone "## 토큰 효율" section exists, remove it and move its bullet to the end of "## 응답 형식" section.

Change 6 — 서버 작업 안전 규칙 섹션:
- If a "## 서버 작업 안전 규칙" section exists with multiple bullets, replace the entire section body with the single line:
  서버 작업 시: \`~/.claude/memory/server-network-warning.md\` 필독
- Keep surrounding --- dividers. Remove the section header.

Change 7 — 에이전트 아키텍처 섹션:
- Keep the "품질 게이트 (생략 불가)" line unchanged.
- If the second line references both agent-architecture.md AND ~/.claude/agents/, simplify to:
  "상세: \`~/.claude/memory/agent-architecture.md\` 참조"

Write the modified file. Return "DONE: CLAUDE.md — [list changes applied or skipped]"
  `, { label: 'edit:CLAUDE.md', phase: 'Apply Changes' }),

  // --- Agent 2: Memory files ---
  () => agent(`
Apply harness-diet improvements to memory files in ${BASE}/memory/.

TASK 1: ${BASE}/memory/server-network-warning.md
Read the file. Remove the last line if it contains broken wiki links like [[server-deployment]] or [[server-lessons-learned]].
Write the file back only if changed.

TASK 2: ${BASE}/memory/active-rules.md
Read the file. Remove any rule that describes a fix already encoded in hook files:
- Remove rule about "rm -rf /path substring 패턴" (encoded in block-dangerous.sh)
- Remove rule about ".env substring 매칭 → .env.example도 차단" (encoded in block-env-read.sh)
Keep all other rules. Renumber remaining rules sequentially starting from 1.
Write the file back only if changed.

Return "DONE: memory — [list changes per file]"
  `, { label: 'edit:memory', phase: 'Apply Changes' }),

  // --- Agent 3: Agent definition files ---
  () => agent(`
Apply harness-diet improvements to 2 agent files.

TASK 1: ${BASE}/agents/evaluator-strict.md
Read the file. In the 원칙 section, find the line about "구현 에이전트와 code-reviewer의 결과를 모두 독립적으로 검증합니다."
Replace it with: "요구사항 충족 여부만 검증합니다. 코드 품질 재검토는 스코프 밖입니다."
Write only if changed.

TASK 2: ${BASE}/agents/senior-strategist.md
Read the file. Make two changes if not already applied:
a) Add "Bash" to the frontmatter tools list if missing.
b) If the "## 스택 컨텍스트" section contains hardcoded stack lines (Next.js, Fastify, PostgreSQL, etc.),
   replace the entire section body with:
   스택: ~/.claude/memory/stack-notes.md 참조 (스택 전환 제안은 극단적 이유 없으면 금지)
Write only if changed.

Return "DONE: agents — [list changes per file]"
  `, { label: 'edit:agents', phase: 'Apply Changes' }),

  // --- Agent 4: Skills ---
  () => agent(`
Apply a harness-diet improvement to ${BASE}/skills/karpathy-guidelines/SKILL.md

Read the file. In the "## 사용하지 말아야 할 때" section, remove the condition:
"CLAUDE.md 기본 원칙으로 이미 충분히 커버되는 작업"
Reason: circular logic — CLAUDE.md references this skill, so the boundary is undefined.

Keep all other conditions unchanged. Write only if changed.

Return "DONE: skills — [change applied or skipped]"
  `, { label: 'edit:skills', phase: 'Apply Changes' }),

])

// Phase 2: Verify
phase('Verify')

const verifications = await parallel([

  () => agent(`
Read ${BASE}/CLAUDE.md and verify. Report PASS or FAIL for each check with quoted evidence.

CHECK 1: "나의 정체성" must NOT contain personal name/email. Must contain "stack-notes.md 참조".
CHECK 2: "말투" first bullet must include "(코드 주석·커밋은 영어)".
CHECK 3: "기본 원칙" must NOT contain "솔직함". Principles must be numbered 1–N without gaps.
CHECK 4: "금지 사항" must NOT contain ".env 등 비밀 정보 파일 읽기/노출".
CHECK 5: No "## 토큰 효율" section. "## 응답 형식" must end with "코드 주석 최소화" bullet.
CHECK 6: No "## 서버 작업 안전 규칙" section header. Single-line "server-network-warning.md 필독" present.
CHECK 7: "에이전트 아키텍처" second line reads "상세: ~/.claude/memory/agent-architecture.md 참조".
  `, { label: 'verify:CLAUDE.md', phase: 'Verify' }),

  () => agent(`
Read these files and report PASS or FAIL for each check with evidence.

CHECK A (${BASE}/memory/server-network-warning.md): Must NOT contain "[[server-deployment]]" or "[[server-lessons-learned]]".

CHECK B (${BASE}/memory/active-rules.md):
- Must NOT contain "rm -rf /path substring" text.
- Must NOT contain ".env.example도 차단" text.
- Remaining rules must be numbered sequentially without gaps.

CHECK C (${BASE}/agents/evaluator-strict.md):
- Must contain "요구사항 충족 여부만 검증합니다. 코드 품질 재검토는 스코프 밖입니다."
- Must NOT contain "구현 에이전트와 code-reviewer의 결과를 모두 독립적으로 검증합니다."

CHECK D (${BASE}/agents/senior-strategist.md):
- Frontmatter tools must include "Bash".
- Must NOT contain hardcoded "Frontend: Next.js 15".
- Must contain "stack-notes.md 참조".

CHECK E (${BASE}/skills/karpathy-guidelines/SKILL.md):
- Must NOT contain "CLAUDE.md 기본 원칙으로 이미 충분히 커버되는 작업".
- "사용하지 말아야 할 때" section must have exactly 3 conditions remaining.
  `, { label: 'verify:other', phase: 'Verify' }),

])

// Phase 3: Report
phase('Report')

const report = await agent(`
Generate the final harness-diet report in Korean markdown.

Apply results:
${applyResults.join('\n\n')}

Verification results:
${verifications.join('\n\n')}

Generate a structured report with these sections:

## 1. 변경한 파일 목록
Table: file | change reason | PASS/FAIL

## 2. diff 요약
Per file: lines removed, lines added, net.

## 3. Claude의 행동 변화
- 세션당 절약 토큰 추정
- quality gate 역할 분리 명확화
- stack context 동기화 개선

## 4. 수동 승인 필요 항목 (high-risk, 이번 단계 제외)
List unresolved items from harness-scan (kill:*, chmod:*, npm install:*, pip install:*, commands/commit.md, commands/review.md, orchestrator description, active-rules Rules 1&3, hooks DANGEROUS_PATTERNS 중복, auto-format npx fallback).

## 5. Smoke-test 프롬프트 5개
Short prompts to verify no regression.

Format as concise Korean markdown.
`, { label: 'generate:report', phase: 'Report' })

return { applyResults, verifications, report }
