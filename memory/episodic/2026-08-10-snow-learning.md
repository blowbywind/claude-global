---
date: 2026-08-10
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-10

## 오늘 배운 것
- MCP 2026-07-28 신규 스펙: stateless 프로토콜 코어 전환 + Multi Round-Trip Requests + 헤더 기반 라우팅 + 캐시 가능한 list 결과 + 인가(authorization) 강화 + 확장 프레임워크(Tasks·MCP Apps·EMA) 공식화. 원문 본문에서 직접 확인.
- MCP Dynamic Client Registration(DCR)이 client metadata documents(CIMD)로 전환 예고됨 — 단 즉시 폐지가 아니라 12개월 최소 유예(deprecation policy) 부여, 하위호환 당분간 유지.
- Microsoft Agent Framework Harness + Foundry Hosted Agents 정식 GA(4월 1.0 GA 후속) — InfoQ 기사 제목으로 확인.
- 2026년 멀티에이전트 오케스트레이션 4대 프레임워크 트렌드 재확인: LangGraph(그래프형)·Microsoft Agent Framework(AutoGen+Semantic Kernel 통합)·CrewAI(역할기반)·Google ADK(계층형) — truefoundry 원문 본문에서 확인.
- 신규 arXiv 논문 "Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces"(arXiv:2605.02801): 서브에이전트 스폰·위임·통신·툴사용을 시간적 상호작용 그래프로 모델링해 강화학습에 활용 — 제목 직접 확인.
- OpenAI Agents SDK는 Agent/Handoff/Guardrail 등 경량 프리미티브로 오케스트레이션을 코드 레벨에 위임하는 방식 — composio.dev 본문에서 Handoff·Guardrail 용어 확인(단 Google ADK 세부 비교부는 원문에서 미확인이라 제외).

## 검증 중 폐기된 항목 (참고)
- "Claude Code 8월 업데이트(VSCode Focus 뷰·지출한도·샌드박스 마스킹)" — 인용 출처(blog.mean.ceo) 본문 전체에 해당 용어가 전혀 없어 폐기.
- "Claude Code v2.1.226(2026-08-08)" — 실제 releasebot.io 원문은 v2.1.225로 확인(버전 불일치), gateway spend-limit 지원 자체는 실재하나 이번 리서치 인용은 버전 오기로 폐기.
- MCP SDK 누적 10억 다운로드(scworld), MDPI 서베이 논문 상세 비교 — 접근 차단(403)으로 원문 대조 불가하여 미확인 처리, 이번 턴 반영 보류.

## 출처
- [Microsoft Agent Framework Harness and Hosted Agents Reach General Availability](https://www.infoq.com/news/2026/08/agent-framework-harness-ga/)
- [Multi-Agent Orchestration Frameworks](https://www.truefoundry.com/blog/multi-agent-orchestration-frameworks)
- [The 2026-07-28 Specification — Model Context Protocol Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces](https://arxiv.org/abs/2605.02801)
- [Claude Agents SDK vs OpenAI Agents SDK vs Google ADK](https://composio.dev/content/claude-agents-sdk-vs-openai-agents-sdk-vs-google-adk)

## 위키화 후보
- MCP "DCR→CIMD 전환 + 12개월 유예 폐지정책" — 인가(authorization) 어휘 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- MCP "stateless 코어 + 확장 프레임워크(Tasks/MCP Apps/EMA)" 용어를 오케스트레이션 설계 어휘로 추가 참고.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 "출처-대조-검증기" 계열이 이번 턴 검증에서도 유효성 재확인됨 — 신규 제안 없이 기존 후보 유지 권고)
