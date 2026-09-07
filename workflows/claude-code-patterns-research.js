
export const meta = {
  name: 'claude-code-patterns-research',
  description: 'Claude Code CLAUDE.md·Skill·Agent·Hook 모범 사례 리서치 → 한국어 마크다운 문서',
  phases: [
    { title: 'Search', detail: '5개 주제 병렬 웹 서치' },
    { title: 'FetchDeep', detail: '상위 소스 깊이 읽기' },
    { title: 'Verify', detail: '핵심 주장 교차 검증' },
    { title: 'Synthesize', detail: '최종 한국어 문서 합성' },
  ],
}

const FINDINGS_SCHEMA = {
  type: 'object',
  properties: {
    findings: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          url: { type: 'string' },
          key_points: { type: 'array', items: { type: 'string' } },
        },
        required: ['title', 'url', 'key_points'],
      },
    },
  },
  required: ['findings'],
}

// ── Phase 1: 병렬 서치 ────────────────────────────────────────────────────
phase('Search')

const searchResults = await parallel([
  () => agent(
    `Search the web for Claude Code CLAUDE.md best practices. 
    Queries to use: "CLAUDE.md best practices site:docs.anthropic.com", "Claude Code CLAUDE.md examples github", "Claude Code memory management CLAUDE.md tips".
    Extract: ideal structure, recommended sections, length guidelines, what to include vs exclude, memory file patterns.
    Return up to 5 findings with URLs and specific actionable key points.`,
    { label: 'search:CLAUDE.md', phase: 'Search', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `Search the web for Claude Code hooks configuration patterns and advanced usage.
    Queries to use: "Claude Code hooks pre-tool-use examples", "Claude Code settings.json hooks automation", "Claude Code post-tool-use hook patterns site:github.com".
    Extract: real hook script examples, when each hook type is used, safety guards, auto-formatting patterns, notification patterns.
    Return up to 5 findings with URLs and specific actionable key points.`,
    { label: 'search:hooks', phase: 'Search', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `Search the web for Claude Code custom agents (subagents) and multi-agent orchestration patterns.
    Queries to use: "Claude Code custom agents .claude/agents examples", "Claude Code subagent orchestration patterns", "Claude Code agent prompt writing tips".
    Extract: when to create custom agents vs inline, effective agent prompt structure, orchestrator patterns, quality gate patterns.
    Return up to 5 findings with URLs and specific actionable key points.`,
    { label: 'search:agents', phase: 'Search', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `Search the web for Claude Code skills (slash commands / .claude/commands) patterns.
    Queries to use: "Claude Code slash commands examples", "Claude Code custom commands .claude/commands", "Claude Code skills best practices".
    Extract: when skills beat CLAUDE.md instructions, effective skill prompt structure, reusable skill patterns, skill vs agent distinction.
    Return up to 5 findings with URLs and specific actionable key points.`,
    { label: 'search:skills', phase: 'Search', schema: FINDINGS_SCHEMA }
  ),
  () => agent(
    `Search the web for Claude Code common mistakes, anti-patterns, and power-user tips.
    Queries to use: "Claude Code common mistakes anti-patterns", "Claude Code tips power users reddit", "Claude Code CLAUDE.md too long problems context window", "Claude Code workflow optimization".
    Extract: context bloat mistakes, vague instruction problems, agent overuse, hook misconfiguration, memory rot issues.
    Return up to 5 findings with URLs and specific actionable key points.`,
    { label: 'search:mistakes', phase: 'Search', schema: FINDINGS_SCHEMA }
  ),
])

const validResults = searchResults.filter(Boolean)
log(`서치 완료: ${validResults.length}/5 성공`)

// URL 수집 및 우선순위 지정 (공식 문서 우선)
const allFindings = validResults.flatMap(r => r.findings)
const officialUrls = allFindings.filter(f => f.url && (f.url.includes('anthropic.com') || f.url.includes('docs.') || f.url.includes('github.com/anthropics'))).map(f => f.url)
const otherUrls = allFindings.filter(f => f.url && !officialUrls.includes(f.url) && f.url.startsWith('http')).map(f => f.url)
const prioritizedUrls = [...new Set([...officialUrls, ...otherUrls])].slice(0, 8)

log(`총 ${allFindings.length}개 발견, ${prioritizedUrls.length}개 URL 깊이 읽기`)

// ── Phase 2: 깊이 읽기 ───────────────────────────────────────────────────
phase('FetchDeep')

const INSIGHT_SCHEMA = {
  type: 'object',
  properties: {
    url: { type: 'string' },
    is_relevant: { type: 'boolean' },
    category: { type: 'string', enum: ['CLAUDE.md', 'hooks', 'agents', 'skills', 'mistakes', 'general'] },
    insights: { type: 'array', items: { type: 'string' } },
    examples: { type: 'array', items: { type: 'string' } },
  },
  required: ['url', 'is_relevant', 'category', 'insights'],
}

const deepReads = await pipeline(
  prioritizedUrls,
  (url, _, i) => agent(
    `Fetch and deeply analyze this URL for Claude Code best practices: ${url}
    
    Extract ONLY specific, actionable insights (not generic advice like "write clear prompts").
    Look for: concrete examples, actual code/config snippets, before/after comparisons, specific patterns with names.
    Categorize as: CLAUDE.md structure, hooks config, agents/subagents, skills/commands, or mistakes/anti-patterns.
    Skip if the page is not about Claude Code configuration or usage patterns.`,
    { label: `fetch:${i+1}/${prioritizedUrls.length}`, phase: 'FetchDeep', schema: INSIGHT_SCHEMA }
  )
)

const relevantReads = deepReads.filter(Boolean).filter(r => r.is_relevant)
log(`깊이 읽기 완료: ${relevantReads.length}/${prioritizedUrls.length}개 관련`)

// ── Phase 3: 교차 검증 ───────────────────────────────────────────────────
phase('Verify')

// 카테고리별 인사이트 집계
const byCategory = {
  'CLAUDE.md': [],
  hooks: [],
  agents: [],
  skills: [],
  mistakes: [],
  general: [],
}

for (const read of relevantReads) {
  const cat = read.category || 'general'
  if (byCategory[cat]) byCategory[cat].push(...(read.insights || []))
}
for (const result of validResults) {
  for (const finding of result.findings) {
    byCategory.general.push(...(finding.key_points || []))
  }
}

// 각 카테고리에서 핵심 주장 추출 및 검증
const CLAIM_SCHEMA = {
  type: 'object',
  properties: {
    category: { type: 'string' },
    top_claims: { type: 'array', items: { type: 'string' }, maxItems: 5 },
    verified: { type: 'array', items: { type: 'string' }, maxItems: 5 },
    refuted: { type: 'array', items: { type: 'string' } },
  },
  required: ['category', 'top_claims', 'verified'],
}

const verifications = await parallel(
  ['CLAUDE.md', 'hooks', 'agents', 'skills', 'mistakes'].map(cat => () =>
    agent(
      `You are a skeptical expert verifying Claude Code best practice claims for the "${cat}" category.
      
      Claims to evaluate:
      ${(byCategory[cat].slice(0, 20)).map((c, i) => `${i+1}. ${c}`).join('\n')}
      
      Also search for any contradicting evidence or important caveats.
      
      Return:
      - top_claims: the 3-5 most important, specific, actionable claims for this category
      - verified: claims that are well-supported and definitely true
      - refuted: claims that are wrong, misleading, or too vague to be useful
      
      Be strict — only include claims that are both true AND useful for a developer.`,
      { label: `verify:${cat}`, phase: 'Verify', schema: CLAIM_SCHEMA }
    )
  )
)

const validVerifications = verifications.filter(Boolean)
log(`검증 완료: ${validVerifications.length}/5 카테고리`)

// ── Phase 4: 최종 문서 합성 ──────────────────────────────────────────────
phase('Synthesize')

// bbw의 현재 구조 컨텍스트
const currentStructure = `
## bbw의 현재 ~/.claude/ 구조
- agents/: backend-agent.md, code-reviewer.md, database-agent.md, evaluator-strict.md, frontend-agent.md, orchestrator.md, senior-strategist.md, test-agent.md
- commands/: commit.md, daily-log.md, init.md, plan.md, review.md
- hooks/: pre-tool-use/, post-tool-use/, session-start/
- memory/: active-rules.md, agent-architecture.md, api-conventions.md, db-conventions.md, lessons.md, server-network-warning.md, stack-notes.md
- skills/: karpathy-guidelines
- settings.json: 광범위한 Bash 허용 권한, git/pnpm 명령어 허용
- 스택: Next.js 15, Fastify, PostgreSQL, Prisma, pnpm
`

const verifiedData = validVerifications.map(v =>
  `### ${v.category}\n검증된:\n${(v.verified || []).map(c => `- ${c}`).join('\n')}\n\n주요 주장:\n${(v.top_claims || []).map(c => `- ${c}`).join('\n')}`
).join('\n\n')

const DOC_SCHEMA = {
  type: 'object',
  properties: {
    markdown: { type: 'string' },
  },
  required: ['markdown'],
}

const docResult = await agent(
  `당신은 한국 개발자를 위한 테크니컬 라이터입니다. 아래 리서치 결과를 바탕으로 실용적인 Claude Code 활용 가이드 마크다운 문서를 작성하세요.
  
  ## 검증된 리서치 데이터:
  ${verifiedData}
  
  ## 추가 인사이트 (카테고리별):
  - CLAUDE.md: ${byCategory['CLAUDE.md'].slice(0, 10).join(' | ')}
  - Hooks: ${byCategory.hooks.slice(0, 10).join(' | ')}
  - Agents: ${byCategory.agents.slice(0, 10).join(' | ')}
  - Skills: ${byCategory.skills.slice(0, 10).join(' | ')}
  - 실수/안티패턴: ${byCategory.mistakes.slice(0, 10).join(' | ')}
  
  ${currentStructure}
  
  ## 문서 요구사항:
  
  **언어**: 한국어 (코드/설정 예시는 영어 그대로)
  **길이**: 2000~3000자
  **형식**: 실용적 마크다운, 코드블록 포함
  
  **필수 섹션** (이 순서로):
  
  ### 1. CLAUDE.md 작성법
  - 이상적인 구조와 섹션 구성
  - 길이 가이드라인 (너무 길면 생기는 문제)
  - 무엇을 넣고 뺄지 (메모리 파일과의 역할 분리)
  - 구체적인 예시 코드블록 포함
  
  ### 2. Hook 활용 패턴
  - pre-tool-use / post-tool-use / session-start 각각 언제 쓰는지
  - 실전 스크립트 예시 (실제 코드 포함)
  - 흔한 hook 실수
  
  ### 3. 커스텀 에이전트 설계
  - 에이전트를 만들 조건 vs 안 만들 조건
  - 효과적인 에이전트 프롬프트 구조
  - 품질 게이트 패턴 (code-reviewer → evaluator 체인)
  
  ### 4. Skills(슬래시 커맨드) 설계
  - CLAUDE.md 지시사항과 구분 기준
  - 재사용 가능한 skill 패턴
  - 실전 예시
  
  ### 5. 잘 쓰는 사람들의 공통 패턴
  - 검증된 베스트 프랙티스 목록 (각 항목에 ✓ 마크)
  - 구체적인 이유 포함
  
  ### 6. 흔한 실수 & 안티패턴
  - 구체적인 실수 사례와 수정 방법 (Before/After 형식)
  
  ### 7. bbw 현재 설정 개선 포인트
  - 위 구조를 분석해서 지금 당장 적용 가능한 개선 사항
  - Next.js 15 + Fastify + PostgreSQL + Prisma + pnpm 스택 특화 팁
  - 추가하면 좋을 agent/hook/skill 구체적 제안
  
  **주의**: 뻔한 조언("명확하게 작성하세요") 금지. 구체적이고 실행 가능한 내용만.`,
  { label: 'synthesize-doc', phase: 'Synthesize', schema: DOC_SCHEMA }
)

log('문서 합성 완료')

return {
  markdown: docResult?.markdown || '합성 실패',
  sources_searched: allFindings.length,
  sources_deep_read: relevantReads.length,
  claims_verified: validVerifications.flatMap(v => v.verified || []).length,
}
