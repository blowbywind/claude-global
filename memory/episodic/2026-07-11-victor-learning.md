---
date: 2026-07-11
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-11

## 오늘 배운 것
- 소규모 데이터(≲10GB) 분석·로컬 100GB급 SQL 쿼리는 DuckDB·Polars가 Spark 대비 확연히 빠름(출처: Coiled TPC-H 벤치마크) — 단, 이는 특정 워크로드·규모 조건의 측정치이며 모든 상황에 일반화 불가(상관관계-인과관계 혼동 방지 원칙 적용).
- DuckDB는 단일 VM 범위를 넘는 수평 확장이 불가하다는 구조적 한계가 있음 — 대용량 분산 처리가 필요하면 Spark/Dask 계열로 전환 필요.
- 프로덕션 ETL 파이프라인의 핵심 설계 패턴 4가지: 멱등성(idempotency), 백필(backfill), Dead Letter Queue, 스키마 진화(schema evolution). 오케스트레이션은 Airflow가 여전히 주류이나 Dagster 채택이 늘고 있음.
- 2026년 파이프라인 트렌드는 단일 모놀리식 대신 수집·변환·활용을 분리한 컴포저블 스택 + 웨어하우스 내 변환(ELT), 스트리밍과 결합한 medallion/kappa 하이브리드 확산.
- A/B 테스트 함정: 표본 크기·관찰 기간을 사전 확정하지 않고 중도 종료하는 peeking, 유의한 결과가 나올 때까지 반복 검정하는 p-hacking이 대표적 오류 — 가설검정 설계 시 사전 등록(pre-registration) 필요.
- 대시보드 설계는 상단 핵심 KPI를 6~8개 이하로 제한하고, 색상 단독 의존을 피해 패턴·아이콘을 병행(색맹 약 8% 고려)해야 함.

**검증 메모**: DuckLake 익스텐션의 "production 단계 진입", "Iceberg/Delta 대비 10~100배", "MotherDuck GA 2026-04" 등 구체 수치·일정과, LinkedIn 게시물을 출처로 한 "Spark 입지 축소" 주장은 1차 출처 재검증(WebFetch)이 이번 세션에서 권한 미승인으로 불가했습니다. 후자(LinkedIn 게시물)는 개인 의견 성격의 소스로 데이터 출처 요건에 미달해 이번 정리에서 제외했고, DuckLake 관련 수치는 추가 검증 전까지 "미확정 수치"로 별도 표기해 아래 위키화/프로필 반영에서 보수적으로 다룹니다.

## 출처
- [Coiled: TPC-H Benchmarks](https://docs.coiled.io/blog/tpch.html)
- [AI Council: Spark/Dask/DuckDB/Polars Benchmarks at Scale](https://aicouncil.com/talks/spark-dask-duckdb-polars-benchmarks-at-scale)
- [Adobe Experience League: Common A/B Testing Pitfalls](https://experienceleague.adobe.com/en/docs/target/using/activities/abtest/common-ab-testing-pitfalls)
- [ExperimentHQ: A/B Testing Best Practices](https://www.experimenthq.io/blog/ab-testing-best-practices)
- [Wolk: Modern Data Pipeline Design Patterns](https://wolkinc.com/blog/modern-data-pipeline-design-patterns)
- [Dataskew: Data Pipeline Design Patterns](https://dataskew.io/blog/data-pipeline-design-patterns/)
- [Thinklytics: Data Visualization Best Practices 2026](https://thinklytics.com/insights/data-visualization-best-practices-2026)
- (미검증·참고용) [Programming Helper: DuckDB 2026 In-Process Analytics](https://www.programming-helper.com/tech/duckdb-2026-in-process-analytics-database-python)

## 위키화 후보
- ETL 4대 설계패턴(멱등성/백필/DLQ/스키마진화) — 기존 `bigdata-pipeline.md` 보강용 신규 개념 노트

## 프로필 반영 후보 (저위험)
- 분석 도구 선택 기준 명문화: 소규모(≲10GB)·단일노드 SQL → DuckDB/Polars, 대규모 분산 확장 필요 → Dask/Spark 계열
- A/B 테스트 설계 시 peeking/p-hacking 방지를 위한 표본크기·기간 사전등록 습관을 [분석 원칙]에 구체화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
