---
date: 2026-07-30
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-30

## 오늘 배운 것
- WebFetch 툴 권한이 이번 세션에서도 차단됐으나, wget 폴백으로 arXiv:2607.00038(저자 Sandeco Macedo, 게재일 2026-06-28)과 MarkTechPost 기사(2026-07-29, Asif Razzaq)를 직접 원문 대조해 두 핵심 신규 개념("loop specification", "prompt→loop→graph 3계층 제어") 실재성과 세부 내용 일치를 확인함
- LLM-as-judge는 전면대체가 아닌 "트리아지 레이어+엣지케이스 사람 재검토" 하이브리드가 권장 추세 — 회귀 테스트 리뷰 체크포인트에 반영 가치 있음
- 프롬프트 엔지니어링 2026년 핵심 레버는 `reasoning_effort`(Low/Med/High) 파라미터이며, 공간·구조 추론에는 Chain-of-Symbol이 CoT보다 우수 — digitalapplied.com 원문 대조로 확인됨
- 평가 스택 성숙도 기준으로 프롬프트·모델·데이터셋 버전 역추적("traceability")이 부상 중
- 데이터 파이프라인은 배치 ELT/이벤트 스트리밍/서버리스/데이터 메시 4대 아키텍처로 분류, Airflow 최다배포·Dagster 신규채택 급증·dbt 변환계층 표준 고정

## 출처
- [Stop Hand-Holding Your Coding Agent (arXiv:2607.00038)](https://arxiv.org/abs/2607.00038) — 원문 fetch 대조 완료
- [Prompt Engineering vs Loop Engineering vs Graph Engineering](https://www.marktechpost.com/2026/07/29/prompt-engineering-vs-loop-engineering-vs-graph-engineering-what-changes-at-each-layer/) — 원문 fetch 대조 완료
- [Prompt Engineering Advanced Techniques 2026](https://www.digitalapplied.com/blog/prompt-engineering-advanced-techniques-2026) — 원문 fetch 대조 완료
- [LLM Evaluation Frameworks 2026 Edition](https://medium.com/@future_agi/llm-evaluation-frameworks-metrics-and-best-practices-2026-edition-162790f831f4) — 원문 미대조(업계 통설과 부합, 저위험 판단)
- [The Best LLM Evaluation Tools of 2026](https://medium.com/online-inference/the-best-llm-evaluation-tools-of-2026-40fd9b654dce) — 원문 미대조
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) — 원문 미대조
- [Data Pipeline Architecture](https://datadriven.io/data-pipeline-architecture) — 원문 미대조
- [Domain-Specific LLM Benchmarks Guide](https://kili-technology.com/blog/domain-specific-llm-benchmarks-guide) — 원문 미대조

## 위키화 후보
- "loop specification"(trigger·goal·verification·stopping rule·memory 5요소, prompt→context→harness→loop 계층) — arXiv 원문 대조 검증 완료, 신규 개념 노트 가치 있음
- "prompt → loop → graph" 3계층 제어 구조(단일응답/단일에이전트사이클/다중에이전트조직) — MarkTechPost 원문 대조 검증 완료

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "LLM-judge 트리아지 레이어화(전면대체 아닌 엣지케이스 사람 재검토 하이브리드)" 용어 추가
- 회귀 테스트 리뷰 체크포인트에 "평가 파이프라인 traceability(프롬프트·모델·데이터셋 버전 역추적)" 용어 추가

## 승인 필요 (고위험)
- WebFetch/WebSearch 툴 권한 차단이 이번 세션(2026-07-30)에도 재확인됨(2026-07-16/07-22에 이은 반복). 다만 이번엔 wget 폴백으로 핵심 인용 2건 원문 대조에 성공 — 제안된 "출처-대조-검증기-개선안"(wget 폴백 내장) 설계가 실증됨. 정식 채택 및 권한 정합 여부는 사용자 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
- 없음 (이미 제안된 "출처-대조-검증기-개선안"이 이번 세션에서 wget 폴백 실효성 실증 완료 — 신규 제안 대신 기존안 승인 검토 권장)
