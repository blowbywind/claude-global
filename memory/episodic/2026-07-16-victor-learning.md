---
date: 2026-07-16
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-16

## 오늘 배운 것
- Polars 2026.7 릴리스(1.40~1.42): On-Prem Kubernetes 배포 지원, 모순 필터 제거·`is_sorted()` 등 옵티마이저 개선 — 공식 블로그 출처로 신뢰도 높음
- Polars vs Spark PDS-H 벤치마크: 평균 3.2배(최대 7.7배), 단일 노드 조건에서는 평균 6.4배(최대 38배) — 단, Polars 자체 벤치마크이므로 벤더 편향 가능성 감안 필요(교차검증 안 됨, 참고용)
- 메달리온 아키텍처(Bronze/Silver/Gold)가 "데이터 엔지니어·분석 엔지니어·비즈니스 간 계약(contract)" 개념으로 재정의되는 흐름 — 기존 위키 메달리온 노트에 추가할 만한 갱신 사항
- 대시보드 트렌드: 정적 사전제작 → 대화형·의도기반 "생성형 BI(Generative BI)"로 이동, 신뢰성 확보에는 시맨틱 레이어(dbt Semantic Layer 등)가 핵심 — 단, precisiondatapartners·databricks 모두 벤더/프로모션 성격 있어 트렌드 참고 수준으로만 반영
- 대시보드 "5초 내 핵심 파악 + 좌상단 우선 정보 배치" 원칙 — uxpin 출처, 기존 KPI 인지부하 원칙에 구체적 수치 보강 가능
- Bayesian A/B 테스트는 조기중단(peeking)이 필수인 경우에만 우위이며, 계획된 표본크기까지 완주하는 경우 Frequentist와 결론 동일 — statsig 출처. 어제(2026-07-16) 보류한 "Bayesian 도입" 승인 건에 조건을 구체화할 근거로 사용 가능
- "DAG를 사람이 아닌 에이전트가 운영" 트렌드는 단일 블로그(dataforest.ai) 출처뿐이라 검증 미흡 — 위키/프로필 반영 보류, 참고만

## 출처
- [Polars in Aggregate](https://pola.rs/posts/polars-in-aggregate-jul26/)
- [Polars Benchmarks](https://pola.rs/posts/benchmarks/)
- [Medallion Architecture Evolution](https://www.singdata.com/trending/medallion-architecture-evolution-structured-data-flow/)
- [The End of the Dashboard: Generative BI](https://www.precisiondatapartners.com.au/blog/the-end-of-the-dashboard-navigating-the-generative-bi-paradigm-shift/)
- [Databricks AI/BI Dashboards](https://www.databricks.com/product/business-intelligence/ai-bi-dashboards)
- [Dashboard Design Principles - UXPin](https://www.uxpin.com/studio/blog/dashboard-design-principles/)
- [Bayesian vs Frequentist A/B Testing - Statsig](https://www.statsig.com/perspectives/bayesian-ab-testing-vs-frequentist)

## 위키화 후보
- 기존 `메달리온-아키텍처-bronze-silver-gold.md` 노트에 "3계층=조직 간 계약(contract)" 관점 갱신 추가

## 프로필 반영 후보 (저위험)
- 대시보드 원칙에 "5초 내 핵심 파악 + 좌상단 우선 배치" 구체 수치 추가([시각화 원칙] 보강, 리나와 공유)

## 승인 필요 (고위험)
- (신규 제안 없음. 단, 2026-07-16 기존 보류 건 "베이지안 A/B 테스트 도입"에 오늘 근거 추가: 오늘 자료상 "peeking 필요 케이스 한정 도입"이 데이터로 뒷받침됨 — 기존 보류 상태 유지, 승인 시 조건부 범위로 제한 권고)

## 신규 도구 후보 (에이전트/스킬)
(없음)
