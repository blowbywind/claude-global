---
date: 2026-08-23
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-23

## 오늘 배운 것
- **Flink vs Spark Structured Streaming 비교(신규 영역)**: Flink는 이벤트 단위 진성 스트리밍(서브초 지연)+비동기 분산 스냅샷으로 초 단위 장애복구, Spark Structured Streaming은 마이크로배치 방식이라 복구에 수 분 소요 가능. Flink는 사기탐지·실시간 개인화 등 저지연 미션크리티컬에, Spark는 생태계 폭·배치+스트림 통합 필요시 유리 — 출처 2건(Onehouse, Redpanda) 모두 스트리밍 인프라 전문 기업 발행물로 신뢰도 양호, 위키에 미기록된 공백 보완.
- **증분처리(Incremental) ETL 패턴**: dbt incremental materialization·Delta Lake MERGE INTO·BigQuery MERGE로 전체 리프레시 대비 비용 절감 — 기법 자체는 공식 문서로 재검증 가능한 업계 표준(출처 블로그 권위는 낮으나 사실관계는 안전).
- **TPC-H 벤치마크(Coiled) 재확인**: 로컬 100GB SQL은 DuckDB 우세, 클러스터 확장 시 Dask가 Spark를 앞서는 경향 — 단, 이 수치는 Dask 제작사(Coiled) 자체발행 벤치마크로 기존 위키 노트(`dask-duckdb-polars-성능-우위-벤치마크-출처-간-상충-coiled-자체발행`)에서 이미 편향 가능성이 지적된 항목과 동일 출처. **신규 정보 아님 — 프로필 재반영 보류.**
- **A/B 실험 플랫폼 통합 트렌드**: Eppo 등이 mSPRT(순차검정)+CUPED(분산감소)+SRM진단을 하나의 워크플로로 통합 제공 — CUPED·SRM 개별 개념은 위키에 이미 상세 기록(수치 확정), "플랫폼 통합" 관점만 보강 가치.

## 검증 메모(폐기 항목)
- "Gartner(2024) 인용, 2026년까지 조직 70%+가 파이프라인을 SLA 있는 제품으로 취급" — dataskew.io 블로그의 2차 인용(원 Gartner 리포트 직접 확인 불가)으로 **출처 신뢰도 미달, 폐기**.
- 대시보드 "5초 규칙·KPI 5~7개 제한" — thinklytics.com(권위 낮은 마케팅 블로그) 단독 근거이며 기존 프로필의 "뷰당 차트 6~8개 제한" 인사이트와 개념 중복 → **프로필 반영 보류**.

## 출처
- [Coiled — TPC-H Benchmark](https://docs.coiled.io/blog/tpch.html)
- [Onehouse — Spark Structured Streaming vs Flink vs Kafka Streams](https://www.onehouse.ai/blog/apache-spark-structured-streaming-vs-apache-flink-vs-apache-kafka-streams-comparing-stream-processing-engines)
- [Redpanda — Event Stream Processing: Flink vs Spark](https://www.redpanda.com/guides/event-stream-processing-flink-vs-spark)
- [OneUptime — ETL Best Practices 2026](https://oneuptime.com/blog/post/2026-02-13-etl-best-practices/view)

## 위키화 후보
- Flink vs Spark Structured Streaming 비교(지연/복구모델/적합 워크로드) — 실시간 스트리밍 프레임워크 선택기준 신규 개념 노트로 가치 있음.

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "실시간 스트리밍: Flink(서브초 지연·초단위 복구) vs Spark Structured Streaming(마이크로배치·생태계 폭)" 구도 키워드 추가
- ETL 원칙에 "증분처리(dbt incremental / MERGE INTO)로 전체 리프레시 대비 비용절감" 항목 추가

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)
