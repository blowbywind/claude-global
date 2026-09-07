
export const meta = {
  name: 'harness-update',
  description: '클로드 코드 하네스 개선 — CLAUDE.md 간소화, Skill 최적화, Command 정리',
  phases: [
    { title: 'Read', detail: '현재 파일 내용 실시간 로드' },
    { title: 'Analyze', detail: '중복·과잉 트리거·충돌 분석' },
    { title: 'Plan', detail: '변경 계획 수립' },
    { title: 'Apply', detail: '변경 적용' },
    { title: 'Verify', detail: '변경 검증' },
    { title: 'Report', detail: '최종 보고서 생성' },
  ],
}

// ── Phase 0: 현재 파일 내용 실시간 로드 ──────────────────────────────────
// 과거에는 이 세 파일 내용을 문자열 상수로 하드코딩했었다. 재실행 시 그 스냅샷이
// 실제 현재 파일과 달라 최신 섹션을 덮어쓸 수 있었음(2026-09-07 harness-scan 발견,
// 하드코딩 스냅샷에 평문 이메일도 포함돼 있었음). 워크플로 스크립트는 파일시스템에
// 직접 접근할 수 없으므로 agent()로 Read하여 항상 최신 내용을 사용한다.
phase('Read')

const [CLAUDE_MD, KARPATHY_SKILL, REVIEW_CMD] = await parallel([
  () => agent(
    'Read the file /home/bbw/.claude/CLAUDE.md with the Read tool and return its exact raw content verbatim — no commentary, no code fence, no summary.',
    { phase: 'Read', label: 'read:claude-md' }
  ),
  () => agent(
    'Read the file /home/bbw/.claude/skills/karpathy-guidelines/SKILL.md with the Read tool and return its exact raw content verbatim — no commentary, no code fence, no summary.',
    { phase: 'Read', label: 'read:karpathy-skill' }
  ),
  () => agent(
    'Read the file /home/bbw/.claude/commands/review.md with the Read tool and return its exact raw content verbatim — no commentary, no code fence, no summary.',
    { phase: 'Read', label: 'read:review-cmd' }
  ),
])

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
