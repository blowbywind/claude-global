---
date: 2026-08-05
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-05

## 오늘 배운 것
- Amazon이 Bedrock Agents를 "Bedrock Agents Classic"으로 개명, 2026-07-30부터 신규 고객 가입 차단(CreateAgent·InvokeInlineAgent 두 API만 차단, 화이트리스트 기존 계정은 계속 사용 가능, EOL 미발표) — 신규 워크로드는 별도 프레임워크-비종속 런타임 AgentCore로 유도되는 벤더 지형 변화.
- Google ADK는 "Python·Go·Java에서 v1.0 도달"이 아니라 **ADK 2.0**(Python·TypeScript 네이티브, Java는 1.0, Go는 2.0 SDK가 동등 지원)이며 네이티브 A2A 지원 포함 — 원 리서치 표현(v1.0 도달)은 부정확해 정정.
- A2A(Agent-to-Agent) 프로토콜은 Google 오리진으로 150개+ 조직이 채택(2026-04 기준)했으나, **네이티브** 지원은 Microsoft Agent Framework 1.0과 Google ADK 2.0뿐 — LangGraph·CrewAI·LlamaIndex·AutoGen계열은 커뮤니티 어댑터 수준. 원 리서치의 "6개 프레임워크 전체 확산" 주장은 과장이라 정정(이 사실은 원 인용 출처 eraswitch.com에 없었고, 실제로는 alicelabs.ai 문서에서 확인됨 — 아래 출처 참조).
- arXiv 2605.02801: 서브에이전트 스폰·위임·통신·집계·정지를 "오케스트레이션 트레이스"(시간적 상호작용 그래프)로 형식화. 84건 태깅 논문 풀·32건 제외 로그·재현용 JSON 스키마까지 abstract 원문 대조로 확인. 특히 "정지(stopping) 결정"에 대한 명시적 RL 학습법이 아직 학계에 전무하다는 지적은, 우리가 hops캡·재위임가드로 휴리스틱하게 풀고 있는 문제의 위치를 보여줌.
- arXiv 2511.15755: 348건 통제실험에서 멀티에이전트 오케스트레이션이 단일 에이전트 대비 실행가능 권고율 100% vs 1.7%(80배), 솔루션 정확도 140배 — abstract 원문 수치 대조로 확인.
- Google DeepMind "AI Control Roadmap"(2026-06 발표): 자율 에이전트를 "특권 내부자 위협"으로 간주하고 자동개입 3단계 프레임워크 제시 — 우리 봇 자율 sudo/시크릿 경계 정책과 비교 참고점.

## 출처
- [AI Agent News This Week](https://aiagentstore.ai/ai-agent-news/this-week) — Bedrock Agents Classic, Oracle+Gemini (직접 fetch 대조 완료)
- [Best AI Agent Frameworks 2026](https://alicelabs.ai/en/insights/best-ai-agent-frameworks-2026) — ADK 2.0·A2A 네이티브/어댑터 구분 (직접 fetch 대조, 원 인용 오귀속 정정)
- [Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces (arXiv 2605.02801)](https://arxiv.org/abs/2605.02801) (abstract 원문 대조 완료)
- [Multi-Agent LLM Orchestration Achieves Deterministic, High-Quality Decision Support for Incident Response (arXiv 2511.15755)](https://arxiv.org/abs/2511.15755) (abstract 원문 대조 완료)
- [Google DeepMind Has a Plan for When AI Agents Go Rogue](https://memeburn.com/google-deepmind-has-a-plan-for-when-ai-agents-go-rogue/) (직접 fetch 대조 완료)

※ 폐기: 원 리서치가 "eraswitch.com"을 근거로 든 ADK v1.0·A2A 확산 주장은 해당 페이지 실제 fetch 결과 관련 문구가 전혀 없어(일반 리스티클) 출처 불일치로 폐기하고, alicelabs.ai에서 확인한 정확한 내용으로 대체함. Deloitte 출처의 "EU AI Act 2026-08 발효" 구체 날짜는 해당 페이지에서 확인되지 않아 이번 노트에서 제외함.

## 위키화 후보
- "오케스트레이션 트레이스"(orchestration traces) — 서브에이전트 라이프사이클(스폰/위임/통신/집계/정지)을 시간적 상호작용 그래프로 형식화하는 학술 프레임, 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- ADK/A2A "네이티브 vs 커뮤니티 어댑터" 구분 및 정확한 버전(ADK 2.0) — 기존 인사이트(2026-07-13, 2026-07-19)의 관련 서술 정정 반영.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 검증에서 5개 출처 중 1건 오귀속을 발견해 기존 후보 "출처-대조-검증기"류의 필요성을 재확인했으나, 이미 후보 목록에 있어 중복 제안 생략)
