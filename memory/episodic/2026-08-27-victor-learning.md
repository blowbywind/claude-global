---
date: 2026-08-27
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-27

## 오늘 배운 것
- **DuckDB v2.0 프리뷰(2026-08-17 발표, 2026년 가을 출시 예정)** 원문 대조 확인: 서버모드(Quack 클라이언트-서버 프로토콜 정식 승격)·트리거(BEFORE/AFTER)·VARIANT 완성(Parquet shredded 읽기/쓰기)·비동기 I/O(원격 스토리지 대역폭 대폭 개선)·신규 SQL 파서·신규 스토리지 포맷 — v1.5(2026-03) 이후 1만+ 커밋 반영.
- **DuckDB v1.5.x 버전 이력** 원문 대조 확인: v1.5.0("Variegata", 신규 CLI·GEOMETRY 타입) → v1.5.3(Quack 프로토콜 코어 익스텐션 승격, DuckLake/Iceberg/AWS 강화). 기존 메모의 "v1.5.5 기준" 각주를 갱신할 필요.
- **Spark 4.1.0 릴리스노트 원문 대조 완료**(JIRA 티켓 단위 확인): SQL Scripting GA 기본활성화, zstd 압축 protobuf plan·Arrow 청크 결과 스트리밍(대규모 워크로드 안정성), VARIANT shredding(Parquet R/W), 재귀 CTE, KLL/Theta 근사 스케치 함수 — 기존 메모(SDP·Real-Time Mode·VARIANT GA)에 세부기능 보강.
- **A/B 테스트 사전설계 원칙** 원문 대조 확인: 표본크기·최소검출효과(MDE)·신뢰수준(보통 95%)을 출시 전 계산하고, 중간결과를 확인하지 않은 채 최소 1영업주기(7일) 이상 완주 — 기존 다중비교보정 메모를 보강하는 실무 규율.
- **리서치 산출물 중 2건 폐기 확정(원문 대조 결과 근거 부재)**: "Gartner 70% 파이프라인 SLA 제품화" 통계는 인용 출처(digna.ai) 원문에 해당 문구·수치가 존재하지 않음, "대시보드 40-30-20-10 공간 규칙"도 인용 출처(uxpin) 원문에 해당 수치가 존재하지 않음. MDPI 통계 리뷰 논문 주장은 접근 차단으로 검증 불가해 함께 폐기.

## 출처
- [A Preview of DuckDB v2.0](https://duckdb.org/2026/08/17/duckdb-20-highlights)
- [Announcing DuckDB 1.5.3](https://duckdb.org/2026/05/20/announcing-duckdb-153)
- [Announcing DuckDB 1.5.0](https://duckdb.org/2026/03/09/announcing-duckdb-150)
- [Spark 4.1.0 Release Notes](https://spark.apache.org/releases/spark-release-4.1.0.html)
- [A/B Testing Fully Explained](https://www.mida.so/blog/ab-testing-fully-explained)

## 위키화 후보
- DuckDB v2.0 프리뷰(서버모드·트리거·VARIANT 완성·비동기 I/O, 2026년 가을 출시) — 도구 선택 기준에 직결되는 신규 개념노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 도구 선택 기준 각주 갱신: "DuckDB v1.5.0(Variegata)→v1.5.3(Quack 코어익스텐션)→v2.0 프리뷰(2026 가을 예정) 확인, 2026-08-27 기준"으로 기존 버전 각주 최신화.
- A/B 원칙에 "표본크기·MDE·신뢰수준 사전계산 + 중단 없이 최소 1영업주기 완주" 키워드 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 등록된 "출처-대조-검증기" 계열 에이전트 제안이 이번 검증에서도 유효성 재확인됨: 리서치 주장 약 10건 중 2건이 원문 대조로 폐기됨. 신규 제안 대신 기존 후보 채택을 권고.)
