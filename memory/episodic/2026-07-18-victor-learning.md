---
date: 2026-07-18
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-18

## 오늘 배운 것
- Polars·DuckDB·Dask 벤치마크 갱신(2025-06 TPC-H): ≤10GB 구간은 Polars가 DuckDB 대비 약 2배 빠르고, 100GB↑ 단일노드는 DuckDB/Dask, 클라우드 대규모 분산은 Dask가 Spark 대비 약 2배 우위 — 도구 선택 기준에 반영 가치 있음
- 데이터 파이프라인을 "내부 배관"이 아닌 SLA를 가진 제품으로 관리하는 추세 확산
- 연합 쿼리(federated query)·API-first 데이터 접근 확산으로 데이터 이동·ETL 없이 소스 시스템 직접 분석하는 패턴 부상
- 대시보드는 뷰당 차트 6~8개 제한 + 데이터-잉크 비율 원칙(3D 효과·드롭섀도우·그라데이션 배제)이 표준 가이드로 재확인
- 2026년 대시보드 트렌드로 AI 기반 차트 추천·이상치 자동 하이라이트가 부상, 분석가는 포맷팅보다 해석에 집중하는 방향
- 대시보드 신뢰도는 시각적 완성도가 아니라 지표 정의 거버넌스(같은 지표명이 대시보드마다 다르게 정의되지 않도록)에서 결정됨

※ "데이터 레이크하우스 2033년 660억 달러 성장" 수치는 출처가 단일 벤더 블로그(infinisynapse.com)뿐이라 교차검증 불가 — 채택하지 않음(분석 원칙: 출처 신뢰도 미확보 시 폐기).

## 출처
- [Spark vs DuckDB vs Polars vs Daft Revisited](https://milescole.dev/data-engineering/2025/06/30/Spark-v-DuckDb-v-Polars-v-Daft-Revisited.html)
- [Coiled TPC-H Benchmark](https://docs.coiled.io/blog/tpch.html)
- [ETL Trends](https://hevodata.com/learn/etl-trends/)
- [Modern Data Engineering Guide](https://www.lucentinnovation.com/resources/it-insights/modern-data-engineering-guide)
- [Data Visualization Best Practices for Enterprise](https://www.techment.com/blogs/data-visualization-best-practices-enterprise/)
- [Data Visualization Best Practices 2026](https://thinklytics.com/insights/data-visualization-best-practices-2026)
- [Dashboard Design in 2026: Do's and Don'ts](https://think.design/blog/dashboard-design-in-2026-dos-and-donts/)

## 위키화 후보
- 파이프라인 제품화(SLA 부여) 트렌드 — ETL 설계 시 SLA·소유권 명시 개념 노트
- 연합 쿼리(federated query)/API-first 데이터 접근 — ETL 불필요 직접분석 패턴 개념 노트

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "Polars vs DuckDB vs Dask 2025-06 TPC-H 벤치마크(≤10GB Polars 2배, 100GB↑ DuckDB/Dask, 클라우드대규모 Dask)" 구체 수치 추가
- [시각화 원칙]에 "뷰당 차트 6~8개 제한 + 데이터-잉크 비율(3D/그림자/그라데이션 배제)" 구체화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
