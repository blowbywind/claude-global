---
date: 2026-08-13
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-13

## 오늘 배운 것
- Microsoft Agent Framework의 Harness·Foundry Hosted Agents가 2026-08 정식 GA 전환 확인(InfoQ 제목 대조 검증) — "하네스"가 멀티에이전트 오케스트레이션의 프로덕션 표준 구성요소로 자리잡는 흐름, 관리자 역할의 파이프라인 배포 어휘로 참고할 만함.
- OpenAI Agent Builder·Evals가 2026-11-30 단계적 폐지, Agents SDK(코드)/ChatGPT Workspace Agents(자연어)로 이관 권고(mcp.directory 원문 메타데이터 대조 검증) — 벤더 종속 리스크의 구체 사례로, 자체 오케스트레이션 엔진 유지 판단에 참고 가치.
- 2026년 오케스트레이션 프레임워크 경쟁구도(truefoundry 원문 대조 검증): LangGraph(그래프기반)·CrewAI(역할기반)·Microsoft Agent Framework(AutoGen+Semantic Kernel 통합, 2026-04 1.0 GA)·Google ADK(계층형+A2A)·OpenAI Agents SDK(명시적 handoff) — 기존 "그래프기반 vs 계층형" 인사이트를 구체화.
- 신규 학술 논문 3건 존재·제목 확인(arXiv 원문 대조): LEMON(반사실적 강화학습 기반 실행형 멀티에이전트 오케스트레이션), Orchestration Traces 기반 RL, Harness-MU(다중 사용자 LLM 에이전트용 안전·거버넌스 하네스) — 학계에서도 "하네스 거버넌스"가 연구주제로 부상.

※ 검증 과정에서 다음은 근거 불충분으로 폐기함: "EU AI Act 2026-08 시행·고위험 분류" 주장(제시된 codebridge 원문에 EU AI Act 언급 자체가 없음), "기업 76~81% 벤더종속 우려" 통계(gogloby 원문에 해당 수치 없음), VentureBeat "Anthropic 종속 위험" 주장(접근 차단으로 본문 대조 불가).

## 출처
- [LEMON: Learning Executable Multi-Agent Orchestration via Counterfactual RL](https://arxiv.org/abs/2605.14483)
- [Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces](https://arxiv.org/abs/2605.02801)
- [Harness-MU: A Safe, Governed, and Effective Harness for Multi-User LLM Agents](https://arxiv.org/abs/2606.21856)
- [OpenAI AgentKit Deprecation Guide (2026)](https://mcp.directory/blog/openai-agentkit-deprecation-2026)
- [Microsoft Agent Framework Harness and Hosted Agents Reach GA](https://www.infoq.com/news/2026/08/agent-framework-harness-ga/)
- [Multi-Agent Orchestration Frameworks](https://www.truefoundry.com/blog/multi-agent-orchestration-frameworks)

## 위키화 후보
- Harness-MU(다중 사용자 LLM 에이전트 안전·거버넌스 하네스) — 학술 개념노트 신설 가치.

## 프로필 반영 후보 (저위험)
- "Harness GA"(에이전트 실행 하네스의 프로덕션 표준화) 어휘를 오케스트레이션 설계 어휘로 추가.

## 승인 필요 (고위험)
- 없음.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기-wget-폴백-내장 — 이번 검증에서도 유효성 재확인(9건 중 4건 폐기/보류: EU AI Act 무근거, VentureBeat 429 차단, 76~81% 수치 미확인, xpander JS렌더링 미확인). 반복 가치 재입증, 정식 서브에이전트화 검토 권고.
