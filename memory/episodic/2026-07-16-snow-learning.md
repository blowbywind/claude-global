---
date: 2026-07-16
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-16

## 오늘 배운 것
- 07-14 인사이트에서 "명칭만 참고, 미검증"으로 남겨둔 Agents-K1(agent-native 지식 오케스트레이션)·Uno-Orchestra(선택적 위임 라우팅)를 직접 접속으로 재검증 완료 — arXiv 2606.13669, 2605.05007 실재하며 제목·주제 일치 확인(단, 세부 메커니즘은 초록만 확인, 본문 미검토).
- 신규 논문 AdaptOrch(태스크 적응형 멀티에이전트 오케스트레이션, arXiv 2602.16873) 실재 확인 — 오케스트레이션 설계 어휘 후보로 추가 참고 가능.
- Google ADK 2.0(Agent2Agent 프로토콜 채택, "그래프 기반 실행엔진")이 07-14 인사이트의 그래프 오케스트레이션 어휘를 구체적 프레임워크 사례로 뒷받침 — 다만 출처가 shakudo.io 단일 블로그라 교차검증은 안 됨.
- Claude Enterprise 관리자 대시보드(그룹/사용자별 비용)·모델별 entitlement·지출 알림은 07-12 인사이트에서 참고한 용어의 실제 기능으로 재확인.
- 정정 필요: 리서치 원문에 "MCP(Model Connection Protocol)"로 표기되어 있으나 정확 명칭은 **Model Context Protocol**임(오케스트레이션 관리자 역할상 정확히 알아야 할 용어).
- Sonnet 5/Opus 4.8 SWE-bench 수치, "Ode with Anthropic" 합작사, Azure Foundry 출시, Gartner 40% 전망은 출처 접속 실패(406) 또는 단일출처·미교차검증으로 이번 노트에서 제외(폐기).

## 출처
- [Agents-K1: Towards Agent-native Knowledge Orchestration](https://arxiv.org/abs/2606.13669)
- [Uno-Orchestra: Parsimonious Agent Routing via Selective Delegation](https://arxiv.org/abs/2605.05007)
- [AdaptOrch: Task-Adaptive Multi-Agent Orchestration in the Era of LLM Performance Convergence](https://arxiv.org/abs/2602.16873)
- [Top AI Agent Frameworks](https://www.shakudo.io/blog/top-9-ai-agent-frameworks)
- [Claude Enterprise Deployment & Training Guide 2026](https://intuitionlabs.ai/articles/claude-enterprise-deployment-training-guide-2026)

## 위키화 후보
- 멀티에이전트 오케스트레이션 논문 3종(Agents-K1/Uno-Orchestra/AdaptOrch) 요약 개념 노트 — 원문 확인 완료, 본문 상세 리뷰는 후속 과제로 명시.

## 프로필 반영 후보 (저위험)
- MCP 정식 명칭 "Model Context Protocol"로 고정 사용(오기 "Model Connection Protocol" 사용 금지).
- "그래프 기반 실행엔진"(vs 계층형) 어휘를 ADK 2.0 사례와 함께 오케스트레이션 설계 어휘로 계속 참고.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음

---
비고: 07-14 인사이트 "명칭만 참고, 세부 메커니즘 미검증" 항목 중 arXiv 원문 실재는 이번에 확인되었으나, 초록 이상의 검토는 하지 않았으므로 인사이트 문구는 "원문 실재 확인(초록 수준), 메커니즘 상세는 여전히 미검토"로 갱신하는 것이 정확합니다. MEMORY.md 반영은 저위험 정정이나, 사용자 승인 후 진행하겠습니다.
