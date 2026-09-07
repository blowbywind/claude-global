---
date: 2026-07-19
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-19

## 오늘 배운 것
- 오픈 레이크하우스 테이블 포맷 표준이 Iceberg로 수렴 중(AWS·Snowflake·Google·Databricks 전부 지원), 단 Databricks 내부는 Photon 최적화로 Delta Lake가 20~40% 더 빠름 — 포맷 선택 시 "오픈 이식성 vs 벤더 내부 성능" 트레이드오프로 정리
- Apache XTable(구 OneTable)·Databricks UniForm 등 포맷 간 변환 계층이 확산되어, 테이블 포맷 선택이 더 이상 "영구적 결정"이 아닌 방향으로 이동
- ETL 스키마 변경 처리가 3분기 규칙(추가=자동포함/명시적 무시, 삭제=조용한 실패 대신 알림, 타입변경=캐스팅 또는 격리)으로 실무 표준화됨 — 기존 위키 "스키마 진화" 원칙을 구체 규칙으로 보강 가능
- 서브초 응답·50~100+ 동시쿼리급 실시간 분석 요구 시 ClickHouse가 단일엔진 대안으로 부상(v25.10 Runtime Bloom Filter로 TPC-H 기준 2.1배 속도·메모리 7배 절감), 다만 대부분 팀은 기존 DWH를 교체하지 않고 "서빙 레이어"로 추가하는 패턴
- 데이터 품질 검증이 매니지드(Monte Carlo, ML 이상탐지)와 오픈소스(Great Expectations/Soda Core, 명시적 계약검증) 양분 구도이며, "알려진 계약=GX + 미지 이상=Monte Carlo" 병행이 실무 조합
- 대시보드 트렌드가 자연어 프롬프트→자동 차트 생성(Hex Magic·Power BI Copilot·Tableau Pulse·Looker)으로 이동 중이나, 지표 정의가 여러 개로 중복되면 자연어 질의가 오답을 내므로 데이터 모델 정제가 선행조건이라는 단서 확인

## 출처
- [Lakehouse Table Formats in 2026: Iceberg, Delta Lake, Hudi, Paimon, DuckLake](https://dev.to/alexmercedcoder/lakehouse-table-formats-in-2026-iceberg-delta-lake-hudi-paimon-and-ducklake-how-they-work-p1k)
- [Apache Iceberg vs Delta Lake](https://www.dremio.com/blog/apache-iceberg-vs-delta-lake/)
- [ETL Pipeline Best Practices](https://www.getdbt.com/blog/etl-pipeline-best-practices)
- [How to Choose a Database for Real-Time Analytics in 2026](https://clickhouse.com/resources/engineering/how-to-choose-a-database-for-real-time-analytics-in-2026)
- [Real-Time Analytics Platforms: A Practical Comparison](https://clickhouse.com/resources/engineering/real-time-analytics-platforms-a-practical-comparison)
- [Data Observability in 2026: Monte Carlo vs Great Expectations vs Soda](https://medium.com/@aidelearning/data-observability-in-2026-monte-carlo-vs-great-expectations-vs-soda-a-data-engineers-honest-7c8cab1b68f1)
- [AI for Creating Dashboards](https://futureagi.com/blog/ai-for-creating-dashboards/)
- [Generate Dashboards from Natural Language Prompts in Amazon QuickSight](https://aws.amazon.com/blogs/machine-learning/generate-dashboards-from-natural-language-prompts-in-amazon-quick/)

(위키 grep 확인 결과 Iceberg/Delta/ClickHouse/데이터 옵저버빌리티 관련 기존 노트 없음 — 신규 영역 맞음)

## 위키화 후보
- 레이크하우스 테이블 포맷 비교(Iceberg vs Delta vs 변환계층) — 신규 concept 노트 가치 있음
- ETL 스키마 변경 3분기 규칙(추가/삭제/타입변경) — 기존 `data-contract-패턴.md`에 보강 형태로 추가 적합

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "실시간 OLAP 필요 시 ClickHouse(서빙 레이어 추가 패턴)" 키워드 인지 추가
- 데이터 품질 검증 어휘로 "GX(계약검증)/Monte Carlo류(이상탐지) 역할 분담" 용어 인지 추가

## 승인 필요 (고위험)
- 도구 선택 기준에 "레이크하우스 테이블 포맷: Iceberg(오픈 멀티엔진 기본값) vs Delta(Databricks 내부 최적)" 항목 신설
- ETL 원칙에 "스키마 변경 3분기(추가=자동포함, 삭제=알림, 타입변경=캐스팅/격리)" 구체 반영

## 신규 도구 후보 (에이전트/스킬)
(없음)
