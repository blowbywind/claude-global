---
date: 2026-07-13
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-13

## 오늘 배운 것
- 단일노드(DuckDB) vs 분산(Dask) 도구 선택 기준: 소규모(≲10GB) 데이터는 DuckDB가, 대규모·클라우드 확장은 Dask가 우세 — 기존 도구 선택 기준 노트와 정합적이므로 강화 근거로 채택
- 2026년 파이프라인 아키텍처 표준은 메달리온(Bronze→Silver→Gold), Delta Lake/Iceberg/Snowflake/BigQuery/S3+Parquet 어디서든 적용 가능하며 배치·스트리밍 하이브리드로 수렴 — 기존 위키(`bigdata-pipeline.md`, ETL 4대 패턴)에 미반영된 신규 개념
- 단순 ELT 배치로 충분한 경우 쿠버네티스 기반 풀 스트리밍 도입은 과잉설계·기술부채 유발 경고 — 도구 선택 판단 시 "필요 이상 확장 금지" 원칙으로 반영 가치 있음
- 대시보드 설계: KPI 12개+ 노출 시 참여도 40% 하락(작업기억 한계 5~9개), 차트당 색상 3~4개 제한 — 리나(디자인 총괄)와 협의할 정량적 근거로 유용
- Apache Spark 4.0/4.1(2026)은 ANSI SQL 기본화, VARIANT 타입, Spark Connect 기능 동등화 — 대규모 분산 처리 도구 선택 시 버전 인지 필요
- 인과추론은 SCM(다변수 상호작용)과 DC(시계열 동적 시스템)로 방법론이 구분됨 — "상관≠인과" 원칙을 구체화하는 프레임으로 참고, 단 신흥 용어라 실무 적용 전 추가 검증 필요

## 검증 메모
- 벤치마크 수치(DuckDB 최대 100배 등)는 벤더 블로그 발표치로 재현성 편차 가능 — victor의 표본/출처 메모와 동일하게 "채택 전 자체 벤치마크 권장" 유지
- 표본 크기·기간 불명시 주장(대시보드 참여도 40% 하락, 인사이트 도달시간 35% 증가)은 출처(UXPin)는 있으나 원 연구 설계 미확인 — 정량 수치는 참고용으로만 사용, 의사결정 근거로 단독 사용 금지
- 나머지 항목은 기존 위키와 상충 없이 정합적이며 출처 URL이 명시되어 채택

## 출처
- [Coiled: DataFrames at Scale (TPC-H)](https://docs.coiled.io/blog/tpch.html)
- [DuckDB benchmarked against Spark](https://blog.dataexpert.io/p/duckdb-can-be-100x-faster-than-spark)
- [Databricks: What is Medallion Architecture?](https://www.databricks.com/blog/what-is-medallion-architecture)
- [Dataforest: Modern Data Pipeline Architecture 2026](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)
- [UXPin Dashboard Design Principles 2026](https://www.uxpin.com/studio/blog/dashboard-design-principles/)
- [Databricks: Introducing Apache Spark 4.0](https://www.databricks.com/blog/introducing-apache-spark-40)
- [Apache Spark 4.1.0 released](https://spark.apache.org/news/spark-4-1-0-released.html)
- [Nature Communications: correlation to causation](https://www.nature.com/articles/s41467-026-69878-z)

## 위키화 후보
- 메달리온 아키텍처(Bronze/Silver/Gold) — `bigdata-pipeline.md`/ETL 4대 패턴에 미반영된 신규 개념, 별도 노트 가치 있음
- 대시보드 KPI 인지부하 한계(작업기억 5~9개, 12개+ 시 참여도 40%↓) — 기존 `대시보드-설계-원칙` 노트에 정량 근거 보강용으로 병합 검토

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "메달리온 아키텍처(Bronze/Silver/Gold)"를 파이프라인 설계 기본값 검토 항목으로 추가
- 대시보드 색상 기준 "차트당 3~4색 제한"을 [시각화 원칙]에 구체화(리나와 공유)

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
