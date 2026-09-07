---
date: 2026-08-05
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-05

## 오늘 배운 것
- A/B 테스트: 주요지표(primary metric)를 단일화해야 함 — 다중 주요지표는 false positive rate를 높이므로 다중비교 보정이 필요하고, 통계적 유의성과 실무적 중요성은 별개로 구분해야 함(기존 [분석 원칙]과 정합, 보강)
- DuckDB가 50GB~1TB급 OLAP 집계·조인·Parquet 워크로드에서 Spark 대비 동등~우세 성능을 보인다는 업계 분석 확산 — 단일 벤치마크 우열 단정은 지양(기존 "도구 선택 기준" 갱신 항목으로 편입 가능)
- ETL 스택 트렌드: 단일 올인원 플랫폼보다 ELT 패턴 + composable(수집=Fivetran/Airbyte, 오케스트레이션=Airflow/Dagster, 변환=dbt) 전문도구 조합이 표준으로 자리잡는 추세
- 대시보드 디자인 트렌드: 개별 차트 나열형에서 스토리텔링형 내러티브 구조로 진화 + AI 기반 인사이트 자동 표면화(기존 "5초 내 핵심 파악" 원칙과 결합 가능한 신규 트렌드)

## 출처
- [Spark is Dead, Long Live DuckDB](https://www.confessionsofadataguy.com/spark-is-dead-long-live-duckdb/)
- [Spark v DuckDB v Polars v Daft, Revisited (TPC-H)](https://milescole.dev/data-engineering/2025/06/30/Spark-v-DuckDb-v-Polars-v-Daft-Revisited.html)
- [ETL Trends 2026](https://hevodata.com/learn/etl-trends/)
- [ETL Tools Practical Guide](https://www.dataquest.io/blog/etl-tools-practical-guide-with-examples/)
- [A/B Testing Hypothesis Fundamentals](https://www.statsig.com/perspectives/ab-testing-hypothesis-fundamentals-marketers)
- [Dashboard Design Examples & Best Practices](https://www.domo.com/learn/article/dashboard-design-examples-best-practices)

**검증 제외**: "Gartner 2024 전망 — 2026년 조직 70%+가 파이프라인을 SLA 제품화" 수치는 Gartner 1차 출처가 아닌 벤더 블로그(wolkinc.com) 인용이라 신뢰도 낮아 채택하지 않음. 표본크기 경험칙(전환율 5%·상대 20%↑·변형당 3,000명)은 예시성 수치로 위키/프로필 반영 없이 참고용으로만 폐기.

## 위키화 후보
- A/B 테스트 단일 주요지표 원칙(다중비교 보정 포함) — 신규 개념 노트 가치 있음
- 대시보드 내러티브형 구조 트렌드(2026) — 기존 "대시보드 원칙" 노트에 트렌드 섹션으로 추가 검토

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "DuckDB, 50GB~1TB OLAP 집계·조인 워크로드에서 Spark 대비 동등~우세(단일벤치마크 단정 금지)" 갱신 반영
- ETL 트렌드 인지: "ELT + composable 스택(수집/오케스트레이션/변환 전문도구 조합)"을 파이프라인 설계 검토 항목에 추가

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
