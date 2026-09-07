---
date: 2026-07-15
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-15

## 오늘 배운 것
- Coiled의 TPC-H 벤치마크(docs.coiled.io/blog/tpch.html, 원 URL 리다이렉트 확인)가 Spark·Dask·DuckDB·Polars를 10GB~10TB 규모로 실측 비교 — 도구 선택 시 참고자료로 활용 가능
- 통계적 추론 패러다임이 2016~2026년간 NHST 단일축 → p-value 호환성 해석·베이지안 워크플로·e-value 기반 순차추론(anytime-valid)·사전등록/멀티버스 분석으로 전환(arXiv 리뷰 논문으로 실제 존재 확인) — [분석 원칙] 근거 보강
- 베이지안 A/B 테스트가 고정 표본크기 불필요·peeking 허용 장점으로 업계에서 확산 중(단, 특정 도구명 채택 언급은 원문에서 확인 안 돼 제외)
- 인과추론에서 무작위실험이 골드스탠다드이고 관찰 데이터는 DiD(이중차분법)·성향점수매칭이 별도로 필요함을 재확인 — [분석 원칙]의 상관≠인과 원칙 보강
- 리버스 ETL(웨어하우스→CRM/광고/CS툴 재적재)이 실시간 개인화·영업자동화 목적으로 확산 — 파이프라인 설계 시 참고 패턴으로 추가
- 대시보드 접근성 기준에 "색상 단독 구분 금지"와 함께 "텍스트 대비비(contrast ratio) 준수"가 WCAG 근거로 명시됨 — [시각화 원칙] 구체화 근거

## 출처
- [DataFrames at Scale Comparison: TPC-H — Coiled](https://docs.coiled.io/blog/tpch.html)
- [Making Effective Statistical Inferences: From Significance Testing to the Open Science Inference Ecosystem (2016-2026)](https://arxiv.org/abs/2603.22594)
- [Frequentist vs. Bayesian approach in A/B testing — Dynamic Yield](https://www.dynamicyield.com/lesson/bayesian-testing/)
- [Causal Inference Methods — MCP Analytics](https://mcpanalytics.ai/articles/causal-inference-methods)
- [Data Pipeline Architecture — RudderStack](https://www.rudderstack.com/blog/data-pipeline-architecture/)
- [Dashboard Design Principles — UXPin](https://www.uxpin.com/studio/blog/dashboard-design-principles/)

## 위키화 후보
- e-value 기반 순차추론(anytime-valid inference) — A/B 테스트 실무 적용 가능성 있는 신규 통계 개념
- 리버스 ETL(Reverse ETL) — 파이프라인 설계 패턴 개념 노트

## 프로필 반영 후보 (저위험)
- [분석 원칙]에 "관찰 데이터 인과추론 시 DiD·성향점수매칭 명시" 구체화
- [시각화 원칙]에 "텍스트 대비비(contrast ratio) 준수"를 색상/패턴 원칙과 함께 추가

## 승인 필요 (고위험)
- 베이지안 A/B 테스트(peeking 허용, 고정 표본크기 불필요)를 실험설계 표준 옵션으로 도입할지 — 기존 사전등록/표본크기 사전확정 방식과 충돌 가능해 방법론 변경으로 판단, 사용자 승인 필요

## 신규 도구 후보 (에이전트/스킬)
(없음)

**검증 메모**: 리서치 원문 중 "GrowthBook·Statsig 채택"(dynamicyield 출처 내 미확인)과 "인터랙티비티 과잉 시 통찰 도달시간 35% 증가"(thinklytics 원문에 해당 수치 부재) 2건은 출처 대조 결과 근거를 찾을 수 없어 폐기했습니다. think.design 링크는 접근 차단(403)으로 검증 불가해 함께 제외했습니다.
