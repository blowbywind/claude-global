
export const meta = {
  name: 'harness-update',
  description: '클로드 코드 하네스 개선 — CLAUDE.md 간소화, Skill 최적화, Command 정리',
  phases: [
    { title: 'Analyze', detail: '중복·과잉 트리거·충돌 분석' },
    { title: 'Plan', detail: '변경 계획 수립' },
    { title: 'Apply', detail: '변경 적용' },
    { title: 'Verify', detail: '변경 검증' },
    { title: 'Report', detail: '최종 보고서 생성' },
  ],
}

// ── 현재 파일 내용 (이미 읽음) ──────────────────────────────────────────
const CLAUDE_MD = `# Claude 글로벌 컨텍스트

## 나의 정체성

- 이름: bbw ([redacted-email])
- 주요 사용 언어: 한국어 (코드 주석/커밋은 영어)
- 스택: Next.js 15, Fastify, PostgreSQL, Prisma, pnpm (상세: \`~/.claude/memory/stack-notes.md\`)

## 기본 원칙 (Core Principles)

1. **계획 우선**: 코드 작성·에이전트 위임 전 계획 제시. 복잡한 작업(에이전트 2개+)은 사용자 승인 후 시작. 성공 기준을 먼저 정의하고 검증될 때까지 반복.
2. **솔직함**: 모르는 것은 모른다고 답변, 추측 시 명시. 요청이 모호하면 해석 제시 후 확인 — 가정 기반 실행 금지.
3. **간결함**: 불필요한 사족 없이 핵심만 전달. 요청한 것만 구현. 추측성 기능·추상화·에러핸들링 추가 금지.
4. **Surgical Changes**: 요청한 것만 수정. 인접 코드·스타일·주석 "개선" 금지. 자신의 변경으로 생긴 unused 심볼만 정리.
5. **검증**: 변경 후 반드시 테스트 또는 확인 절차 수행
6. **안전성**: 파괴적 명령(rm -rf, DROP TABLE 등)은 사전 확인 필수
7. **실수 영구 반영**: 실패 원인 분석 → \`memory/lessons.md\` 기록 → ACTIVE RULES 반영

## 말투

- 존댓말 사용
- 이모지는 최소한으로 (구조화 목적 외 사용 금지)
- 결론 → 근거 → 상세 순서로 답변

## 응답 형식

- 코드는 항상 언어 지정 코드블록 사용
- 파일 경로 변경 시 before/after 명시
- 긴 작업은 단계별 체크리스트로 분할
- **성공**: 변경 결과 목록만 / **실패**: 원인·파일:라인 상세히 (성공 서사 금지)

## 토큰 효율

- 반복 설명 생략: 이미 논의된 내용은 재설명하지 않음
- 코드 주석 최소화: WHY가 명확할 때만 작성
- 탐색 범위 제한: 필요한 파일만 읽고, 전체 디렉토리 스캔 지양
- 응답 길이: 간단한 질문은 2-3문장, 복잡한 작업만 단계별 형식 사용

## 금지 사항

- 확인 없이 파일 삭제
- .env 등 비밀 정보 파일 읽기/노출
- 임의의 라이브러리 추가 (반드시 사전 보고)
- 완료 후 "요약/결론" 반복 출력 (diff로 확인 가능한 내용 재설명 금지)

---

## 서버 작업 안전 규칙 (홈서버 Docker 환경)

- \`sudo ufw reload\` **금지** — iptables 전체 교체로 Docker 네트워크·SSH 순간 끊김 유발
- 방화벽 규칙 추가 시 \`sudo iptables -I INPUT 1 ...\` 사용
- SSH 파이프(tar/rsync)로 100MB+ 전송 금지 — 업로드 포화로 인터넷 불안정
- 대용량 패키지·이미지는 서버에서 직접 다운로드
- Docker 서비스 재시작 전 사용자에게 일시적 서비스 중단 고지

> 상세: \`~/.claude/memory/server-network-warning.md\`

---

## 에이전트 아키텍처

**품질 게이트 (생략 불가)**: 코드 변경 → \`code-reviewer\` → \`evaluator-strict\` → 완료 선언
상세 규칙: \`~/.claude/memory/agent-architecture.md\` | 에이전트 파일: \`~/.claude/agents/\``

const KARPATHY_SKILL = `---
name: karpathy-guidelines
description: Karpathy 코딩 원칙 적용 — Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution. 코드 작성·리뷰·리팩토링 시 과잉 구현과 범위 초과 수정을 방지한다.
license: MIT
---

# Karpathy Guidelines

Andrej Karpathy의 LLM 코딩 실수 관찰에서 도출한 4가지 행동 원칙.

**트레이드오프**: 이 원칙들은 속도보다 정확성을 우선한다. 사소한 작업은 판단해서 적용.

## 1. Think Before Coding

**가정하지 말 것. 혼란을 숨기지 말 것. 트레이드오프를 명시할 것.**

구현 전에:

- 가정을 명시적으로 밝힌다. 불확실하면 물어본다.
- 해석이 여러 개라면 모두 제시한다 — 묵묵히 하나를 선택하지 않는다.
- 더 단순한 방법이 있으면 말한다.
- 불명확하면 멈춘다. 무엇이 불명확한지 이름을 붙이고 묻는다.

## 2. Simplicity First

**문제를 해결하는 최소한의 코드. 추측성 코드 금지.**

- 요청하지 않은 기능 추가 금지.
- 단일 사용 코드에 추상화 금지.
- 요청하지 않은 "유연성"이나 "설정 가능성" 금지.
- 불가능한 시나리오에 대한 에러 핸들링 금지.
- 200줄로 쓴 것이 50줄로 가능하면 다시 쓴다.

스스로 물어볼 것: "시니어 엔지니어가 이것을 과도하게 복잡하다고 할까?" 그렇다면 단순화.

## 3. Surgical Changes

**필요한 것만 수정. 자신이 만든 엉망만 정리.**

기존 코드를 편집할 때:

- 인접한 코드, 주석, 포맷을 "개선"하지 않는다.
- 망가지지 않은 것을 리팩토링하지 않는다.
- 다르게 작성하고 싶어도 기존 스타일을 따른다.
- 관련 없는 dead code를 발견하면 언급만 한다 — 삭제하지 않는다.

자신의 변경으로 고아가 된 경우:

- **자신의** 변경으로 unused가 된 import/변수/함수만 제거.
- 기존에 있던 dead code는 요청받지 않으면 건드리지 않는다.

검증: 변경된 모든 라인이 사용자의 요청으로 직접 추적 가능해야 한다.

## 4. Goal-Driven Execution

**성공 기준을 정의할 것. 검증될 때까지 반복.**

명령형 작업을 검증 가능한 목표로 변환:

- "검증 추가" → "유효하지 않은 입력에 대한 테스트 작성, 통과시키기"
- "버그 수정" → "버그를 재현하는 테스트 작성, 통과시키기"
- "X 리팩토링" → "전후로 테스트 통과 확인"

멀티스텝 작업은 간략한 계획 제시:

\`\`\`
1. [단계] → 검증: [확인 방법]
2. [단계] → 검증: [확인 방법]
3. [단계] → 검증: [확인 방법]
\`\`\`

강력한 성공 기준은 독립적으로 반복할 수 있게 한다. 약한 기준("작동하게 만들어")은 계속 설명을 요구한다.`

const REVIEW_CMD = `---
description: 현재 변경 사항에 대한 코드 리뷰
---

다음 관점에서 현재 변경 사항을 리뷰하세요:

## 리뷰 체크리스트

1. **정확성**: 의도한 동작을 하는가?
2. **보안**: 입력 검증, 비밀 노출, 인증 우회 위험은?
3. **성능**: N+1 쿼리, 불필요한 루프, 동기 블로킹은?
4. **가독성**: 6개월 후의 내가 이해할 수 있는가?
5. **테스트**: 핵심 로직에 테스트가 있는가?
6. **컨벤션**: 프로젝트 규칙을 따르는가?

## 출력 형식

이슈별로:

\`\`\`
[심각도] 파일명:라인번호
문제: [설명]
수정: [구체적 코드]
\`\`\`

심각도: **Critical** (즉시 수정) / **High** (중요) / **Medium** (개선 권장) / **Low** (선택적)

이슈 없으면 "리뷰 통과 — 이슈 없음" 으로 종료.

리뷰 대상: $ARGUMENTS`

// ── Phase 1: 병렬 분석 ───────────────────────────────────────────────────
phase('Analyze')

const ISSUE_SCHEMA = {
  type: 'object',
  properties: {
    issues: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file: { type: 'string' },
          type: { type: 'string', enum: ['redundancy', 'over-broad-trigger', 'name-collision', 'generic-instruction', 'too-long'] },
          description: { type: 'string' },
          recommendation: { type: 'string' },
          risk: { type: 'string', enum: ['low', 'medium', 'high'] },
          auto_apply: { type: 'boolean' },
        },
        required: ['file', 'type', 'description', 'recommendation', 'risk', 'auto_apply'],
      },
    },
  },
  required: ['issues'],
}

const analyses = await parallel([
  () => agent(
    `Analyze CLAUDE.md for redundancy with karpathy-guidelines skill.

CLAUDE.md content:
${CLAUDE_MD}

karpathy-guidelines SKILL.md content:
${KARPATHY_SKILL}

Find:
1. Which principles in "기본 원칙" section directly duplicate karpathy-guidelines (Simplicity First = 간결함, Surgical Changes = Surgical Changes)?
2. Which items in "토큰 효율" section are covered by karpathy-guidelines (Simplicity First covers "코드 주석 최소화")?
3. Which items in "토큰 효율" are too generic to be useful (obvious rules any assistant would follow)?

For each issue: describe exactly what to remove/merge, rate risk, and recommend auto_apply=true only if low-risk.
NEVER suggest touching: hooks, settings.json, server rules, agent architecture section.`,
    { label: 'analyze:claude-md', phase: 'Analyze', schema: ISSUE_SCHEMA }
  ),

  () => agent(
    `Analyze karpathy-guidelines skill for over-broad triggering.

SKILL.md content:
${KARPATHY_SKILL}

The description says: "코드 작성·리뷰·리팩토링 시" — this triggers on almost ALL coding tasks.

Find:
1. Is "코드 작성" too broad? What task types should NOT trigger this skill?
2. Is there a missing "사용하지 말아야 할 때" section that would prevent unnecessary invocations?
3. Is the skill body too long? (Current: ~80 lines. Limit: 500 lines. Is splitting needed?)

For each issue: specific recommendation, risk rating, auto_apply=true only if low-risk change.`,
    { label: 'analyze:karpathy-skill', phase: 'Analyze', schema: ISSUE_SCHEMA }
  ),

  () => agent(
    `Analyze commands/ for name collisions with built-in skills.

The available skills (from system context) include:
- "review": "Review a pull request" (built-in)
- "code-review": "Review the current diff for correctness bugs" (built-in)
- "init": "Initialize a new CLAUDE.md file with codebase documentation" (built-in)

User's commands:
- commands/review.md — description: "현재 변경 사항에 대한 코드 리뷰" (same scope as built-in code-review)
- commands/init.md — description: "프로젝트 Claude Code 초기 설정 생성" (overlaps with built-in init)

commands/review.md content:
${REVIEW_CMD}

Find:
1. Does commands/review.md collision with built-in review/code-review cause ambiguity?
2. Does commands/init.md collision with built-in init cause ambiguity?
3. What rename would resolve the collision without breaking user workflow?

Rate risk: renaming /review changes how user invokes it — HIGH risk.
Recommend auto_apply=false for anything that changes user-facing slash command names.`,
    { label: 'analyze:commands', phase: 'Analyze', schema: ISSUE_SCHEMA }
  ),
])

const allIssues = analyses.filter(Boolean).flatMap(a => a.issues || [])
log(`분석 완료: ${allIssues.length}개 이슈 발견`)

// ── Phase 2: 변경 계획 수립 ──────────────────────────────────────────────
phase('Plan')

const PLAN_SCHEMA = {
  type: 'object',
  properties: {
    auto_changes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file_path: { type: 'string' },
          action: { type: 'string', enum: ['write', 'edit'] },
          description: { type: 'string' },
          new_full_content: { type: 'string' },
          before_summary: { type: 'string' },
          after_summary: { type: 'string' },
          reason: { type: 'string' },
        },
        required: ['file_path', 'action', 'description', 'reason', 'before_summary', 'after_summary'],
      },
    },
    human_approval_items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file_path: { type: 'string' },
          description: { type: 'string' },
          reason_deferred: { type: 'string' },
          suggested_action: { type: 'string' },
        },
        required: ['file_path', 'description', 'reason_deferred', 'suggested_action'],
      },
    },
  },
  required: ['auto_changes', 'human_approval_items'],
}

const plan = await agent(
  `Create a precise change plan for improving the Claude Code harness.

Issues found:
${JSON.stringify(allIssues, null, 2)}

Current file contents:

CLAUDE.md:
${CLAUDE_MD}

karpathy-guidelines/SKILL.md:
${KARPATHY_SKILL}

RULES:
- auto_changes: only low-risk, clearly beneficial changes
- For each auto_change with action="write", provide the COMPLETE new file content in new_full_content
- human_approval_items: high-risk or uncertain changes (name collisions, renames, splits)
- NEVER include hooks, settings.json, MCP config in any changes
- NEVER widen permissions
- NEVER delete files without absolute certainty

Specific changes to plan:
1. CLAUDE.md: merge principles 3 (간결함) and 4 (Surgical Changes) into one line with karpathy-guidelines reference. Remove "코드 주석 최소화" and "반복 설명 생략" from 토큰 효율 section (both are duplicated in karpathy-guidelines or too generic). Keep all safety rules and agent architecture section intact.
2. karpathy-guidelines/SKILL.md: narrow description to exclude "코드 작성" from auto-trigger scope. Add "## 사용하지 말아야 할 때" section with 4 specific cases. Keep all principle content intact.
3. commands/review.md collision → human_approval_items
4. commands/init.md collision → human_approval_items

For new_full_content: write the COMPLETE file content, not a diff. Be precise.`,
  { label: 'plan:changes', phase: 'Plan', schema: PLAN_SCHEMA }
)

log(`계획: 자동 변경 ${plan.auto_changes.length}개, 수동 승인 ${plan.human_approval_items.length}개`)

// ── Phase 3: 변경 적용 ───────────────────────────────────────────────────
phase('Apply')

const APPLY_RESULTS_SCHEMA = {
  type: 'object',
  properties: {
    applied: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          file_path: { type: 'string' },
          success: { type: 'boolean' },
          note: { type: 'string' },
        },
        required: ['file_path', 'success'],
      },
    },
  },
  required: ['applied'],
}

const applyResult = await agent(
  `Apply these planned changes to files. Use Write tool for "write" actions.

Changes to apply:
${JSON.stringify(plan.auto_changes, null, 2)}

For each change:
- action="write": use Write tool with file_path and new_full_content
- Verify the file was written by checking for errors

IMPORTANT CONSTRAINTS:
- NEVER modify files in /home/bbw/.claude/hooks/
- NEVER modify /home/bbw/.claude/settings.json
- Only modify the files listed in the plan above

After applying all changes, report which files were successfully written.`,
  { label: 'apply:changes', phase: 'Apply', schema: APPLY_RESULTS_SCHEMA }
)

const successCount = applyResult?.applied?.filter(r => r.success).length || 0
log(`적용 완료: ${successCount}/${plan.auto_changes.length}개 성공`)

// ── Phase 4: 검증 ────────────────────────────────────────────────────────
phase('Verify')

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    passed: { type: 'boolean' },
    issues: { type: 'array', items: { type: 'string' } },
    safety_checks: { type: 'array', items: { type: 'string' } },
  },
  required: ['passed', 'issues', 'safety_checks'],
}

const verification = await agent(
  `Verify the applied changes to the Claude Code harness files.

Read these files and verify the changes are correct:
1. /home/bbw/.claude/CLAUDE.md
2. /home/bbw/.claude/skills/karpathy-guidelines/SKILL.md

Check:
1. Are there any syntax errors in the markdown?
2. Are the server safety rules still intact?
3. Is the agent architecture section still intact?
4. Are the quality gates still referenced?
5. Does CLAUDE.md still have all required sections (정체성, 기본원칙, 말투, 응답형식, 금지사항, 서버규칙, 에이전트)?
6. Does karpathy-guidelines still have all 4 principles?
7. Was a "사용하지 말아야 할 때" section added to karpathy-guidelines?
8. Were NO hooks files modified?
9. Was NO settings.json modified?

Use Read tool to read the actual files and verify.`,
  { label: 'verify:changes', phase: 'Verify', schema: VERIFY_SCHEMA }
)

log(`검증: ${verification?.passed ? '통과' : '이슈 발견'} — 안전 체크 ${verification?.safety_checks?.length || 0}개`)

// ── Phase 5: 최종 보고서 ─────────────────────────────────────────────────
phase('Report')

const REPORT_SCHEMA = {
  type: 'object',
  properties: {
    report_markdown: { type: 'string' },
  },
  required: ['report_markdown'],
}

const report = await agent(
  `Generate a comprehensive Korean report about the harness-update changes.

Plan applied:
${JSON.stringify(plan, null, 2)}

Apply results:
${JSON.stringify(applyResult, null, 2)}

Verification:
${JSON.stringify(verification, null, 2)}

Write a Korean markdown report with EXACTLY these 7 sections:

## 1. 변경한 파일 목록
Table: 파일명 | 변경 유형 | 상태

## 2. 파일별 변경 이유
For each file: what was the problem and why this change fixes it

## 3. Before / After 요약
For each changed file: concise before/after description (not full content)

## 4. diff 요약
Key lines added/removed per file (markdown format, not actual git diff)

## 5. Claude의 행동이 어떻게 달라지는지
Concrete behavioral changes: fewer auto-triggers, shorter context, clearer rules

## 6. 수동 승인 필요 항목 (High-Risk)
Table: 파일 | 이슈 | 권장 조치 | 위험도

## 7. Smoke-test 프롬프트 5개
5 prompts the user can run to verify the new harness works correctly.
Each should test a different aspect: karpathy skill trigger, CLAUDE.md rules, agent quality gate, etc.`,
  { label: 'report:final', phase: 'Report', schema: REPORT_SCHEMA }
)

return {
  report: report?.report_markdown,
  files_changed: successCount,
  human_approval_count: plan?.human_approval_items?.length || 0,
  verification_passed: verification?.passed,
}
