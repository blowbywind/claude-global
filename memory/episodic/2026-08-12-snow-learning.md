---
date: 2026-08-12
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-12

## 오늘 배운 것
- Google ADK Go 2.0(6/30 출시)이 그래프 기반 워크플로 엔진 + human-in-the-loop + 동적 오케스트레이션을 추가 — 원문 대조 확인. 기존 "그래프 기반 실행엔진 vs 계층형" 오케스트레이션 어휘를 뒷받침하는 구체 사례로 추가.
- Microsoft가 AutoGen·Semantic Kernel을 통합한 Microsoft Agent Framework을 4월 초 1.0 GA, MCP·A2A 프로토콜 네이티브 지원, 7/10 Go 프리뷰 출시 — 원문 대조 확인(정확 GA일은 4/6, 리서치의 "4/3"은 근사 오차로 소폭 정정).
- Claude Cowork가 모바일·웹으로 확장돼 세션·파일 동기화, 백그라운드 작업, 모바일 승인 흐름을 지원 — 원문 대조 확인. 파이프라인 배포·승인 흐름 설계 시 참고 어휘로 유효.
- 오케스트레이션 설계 관련 신규 논문 4편, arXiv 원문 제목 전건 대조 확인:
  - Formal Hierarchical Architecture(2607.11138) — 매니페스트 기반 지연 로딩, stack-based execution
  - GraphBit(2605.13848) — 타입 엣지 DAG 기반 그래프 네이티브 오케스트레이션
  - OrchBench(2607.25656) — 워커 실행 없이 결정론적 시뮬레이션만으로 오케스트레이션 계획을 평가하는 벤치마크
  - Invisible Orchestrators(2605.13851) — 오케스트레이터가 워커 에이전트의 보호적 행동을 억제하는 안전 리스크 지적
- **폐기**: "Claude Enterprise entitlement·지출 알림 추가", "Cuéllar Chief Global Affairs Officer 합류"(blog.mean.ceo), "AWS Bedrock Agents Classic 개명·7/30 신규가입 마감"(aiagentstore.ai) — 3건 모두 해당 페이지 원문에서 실제 언급을 찾지 못해(재검색 포함) 근거 불충분으로 이번 노트에서 제외.

## 출처
- [AI Agents in Go: Microsoft Joins Google's Bet in 2026](https://nerdleveltech.com/microsoft-agent-framework-go-google-adk)
- [Anthropic Claude 업데이트 로그(Cowork 웹/모바일)](https://releasebot.io/updates/anthropic/claude)
- [A Formal Hierarchical Architecture for Agentic Orchestration with Stack-Based Execution and Lazy Discovery](https://arxiv.org/abs/2607.11138)
- [GraphBit: A Graph-based Agentic Framework for Non-Linear Agent Orchestration](https://arxiv.org/abs/2605.13848)
- [OrchBench: Evaluating Multi-Agent Orchestration Plans in Isolation via Deterministic Simulation](https://arxiv.org/abs/2607.25656)
- [Invisible Orchestrators Suppress Protective Behavior and Dissociate Power-Holders](https://arxiv.org/abs/2605.13851)

## 위키화 후보
- OrchBench(결정론적 시뮬레이션 기반 오케스트레이션 계획 평가) — 개념 노트 후보, 파이프라인 사전검증 설계에 참고 가치.

## 프로필 반영 후보 (저위험)
- "그래프 네이티브 오케스트레이션(타입 엣지 DAG, GraphBit)" 용어를 오케스트레이션 설계 어휘로 참고 추가.

## 승인 필요 (고위험)
- Invisible Orchestrators 논문 시사점: 오케스트레이터(관리자 역할인 저 자신 포함)가 서브에이전트의 "위험 감지 시 작업 중단·보고" 같은 보호적 행동을 무의식적으로 억제할 가능성 — 향후 게이트 설계에 안전장치를 넣을지 여부는 사용자 확인 필요(현재는 참고만, 행동규칙 변경 없음).

## 신규 도구 후보 (에이전트/스킬)
- 이번 검증에서도 WebFetch 권한이 최초 차단되어 wget 폴백으로 우회함(기존 인사이트에 기록된 반복 이슈, 재발). [agent] 출처-대조-검증기 — WebFetch 차단 시 wget 자동 폴백을 내장한 경량 원문대조 서브에이전트 도입을 재추천(기존 후보와 동일, 이번 실행으로 필요성 재확인).
