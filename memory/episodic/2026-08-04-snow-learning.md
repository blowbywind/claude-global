---
date: 2026-08-04
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-04

## 오늘 배운 것
- MCP 스펙 2026-07-28 릴리스: 프로토콜 코어가 stateless로 전환(세션/핸드셰이크 제거, 상태는 앱이 명시적 handle로 관리), Extensions 정식화(MCP Apps=서버렌더링 UI, Tasks=장시간작업), OAuth/OIDC 정렬 인가 강화, 12개월 유예 폐기정책 신설 — 공식 블로그 원문으로 직접 대조 확인.
- MCP "Enterprise-Managed Authorization"이 stable 전환: IdP(Okta 우선 지원)가 MCP 서버 접근을 중앙 프로비저닝, 첫 로그인 시 자동 연결(ID-JAG 방식). Anthropic(Claude/Claude Code/Cowork)·VS Code·Okta가 초기 도입 — 공식 블로그 원문 대조 확인.
- Claude Developer Platform: 레거시 Workbench + 실험용 prompt tools API(`generate_prompt`/`improve_prompt`/`templatize_prompt`)가 2026-08-17부로 접근 종료 — releasebot.io 원문 대조 확인.
- Amazon Bedrock Agents가 "Bedrock Agents Classic"으로 개명, 2026-07-30부로 신규계정 CreateAgent/InvokeInlineAgent 차단(기존 계정은 유지, 모델 카탈로그 동결) → 후속 런타임 AgentCore(프레임워크 중립, runtime/gateway/memory/identity/observability 분리)로 전환 — 소스 원문 대조 확인.
- Microsoft가 Semantic Kernel과 AutoGen을 Microsoft Agent Framework 1.0(2026-04-03)으로 통합, BUILD 2026서 Agent Harness/Hosted Agents/CodeAct 프리뷰 — 소스 원문 대조 확인.
- EU AI Act가 2026년 8월부로 시행, 고위험 섹터 멀티에이전트 오케스트레이션을 "고위험"으로 분류(human-in-the-loop, 불변 감사로그, 시나리오 기반 인시던트 테스트, 지속적 신원관리 의무) — 소스 원문 대조 확인.

**폐기(검증 실패)**: "Claude Opus 5 2026-07-24 출시" — 인용 출처 자체가 "공식 미확정, 루머·리크 단계"라고 명시(실제 확정 라인업은 Sonnet 5·Fable 5/Mythos 5, 현 플래그십은 Opus 4.8)해 원 주장과 정반대. "Claude Sonnet 5 프로모션가 $2/$10→9/1 정가 $3/$15" — 인용 출처가 실제로는 사용량(5시간 한도·주간 캡) 타임라인 문서로, 토큰 단가 언급 자체가 없어 출처 불일치. 두 건 모두 인사이트 미반영.

## 출처
- [The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [Enterprise-Managed Authorization: Zero-touch OAuth for MCP](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/)
- [Claude Developer Platform Updates](https://releasebot.io/updates/anthropic/claude-developer-platform)
- [AI Agent News This Week](https://aiagentstore.ai/ai-agent-news/this-week)
- [Best AI Agent Frameworks 2026](https://alicelabs.ai/en/insights/best-ai-agent-frameworks-2026)
- [AI Agent Orchestration Goes Enterprise (FifthRow)](https://www.fifthrow.com/blog/ai-agent-orchestration-goes-enterprise-the-april-2026-playbook-for-systematic-innovation-risk-and-value-at-scale)
- [AgentOrchestra: TEA Protocol (arXiv 2506.12508)](https://arxiv.org/abs/2506.12508)
- [Autonomous Event-Driven Multi-Agent Orchestration for Enterprise AI at Scale (arXiv 2606.20058)](https://arxiv.org/abs/2606.20058)

## 위키화 후보
- MCP 2026-07-28 stateless 코어 전환(핸드셰이크/세션 제거+explicit handle 패턴) — 오케스트레이션 인프라 설계에 직결되는 프로토콜 변경, 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- "Enterprise-Managed Authorization(EMA)"·"stateless MCP 코어" 용어를 오케스트레이션 설계 어휘로 참고 추가(자가학습 인사이트 갱신 권장).

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존 "출처-대조-검증기" 계열 에이전트 제안이 이미 대기 중 — 이번 턴에서 9건 중 2건 폐기로 재확인됨, 반복작업화 가치 지속 확인).
