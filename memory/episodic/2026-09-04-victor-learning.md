---
date: 2026-09-04
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-09-04

## 오늘 배운 것
- DuckDB 1.5.4(2026-06-17)·Polars 1.42.1(2026-06-30) 릴리스 — 원문 대조 완료. 기존 위키 버전 정보(2026-08-12 기록 "1.5.2/1.38")는 갱신 필요.
- Polars 스트리밍 엔진은 2026년 안정화됐으나 **opt-in + 쿼리 재구조화 필요**, DuckDB는 스필투디스크가 **기본 자동 제공** — 대용량(Larger-than-RAM) 처리 시 도구 선택 기준에 구체적 차이로 반영 가능.
- Dask 2026.7.0: `__dask_exprs__` 프로토콜로 복합 표현식 지원 + 그래프 구체화(materialization) 회피 최적화 확인(공식 changelog 원문). 단 리서치가 언급한 "2026.7.1/2026.8.0" 릴리스는 공식 changelog에서 확인되지 않아 **폐기**.
- A/B 테스트: SRM(표본비율불일치)·가드레일·사후 세그먼트 효과 점검, 사전등록(표본크기/MDE/신뢰수준/정지규칙) 원문 확인 — 기존 위키 원칙(2026-08-14)과 정합, 신규성은 낮음.
- ETL→ELT 전환(원시데이터 선적재 후 Snowflake/BigQuery/Redshift 네이티브 컴퓨트 변환, dbt가 표준 변환계층)과 ETL 신뢰성 패턴(멱등성·백필·DLQ·CDC·스키마 진화) 원문 확인 — 기존 위키 내용과 합치.
- (폐기) TPC-H 벤치마크 비교 주장의 출처(aicouncil.com/talks/...)는 실제 접속 시 404(페이지 부존재) — 미검증으로 폐기. (폐기) 대시보드 "5초 규칙"·"핵심 KPI 5~7개"·인터랙티브 시각화 참여도 향상 주장은 지목된 원문(lumenore.com)에 해당 문구·수치가 없음 — 미검증으로 폐기.

## 출처
- [DuckDB vs Polars in 2026](https://www.danilchenko.dev/posts/duckdb-vs-polars/)
- [Dask Changelog](https://docs.dask.org/en/stable/changelog.html)
- [Best Practices for A/B Testing](https://www.otterab.com/blog/best-practices-for-ab-testing)
- [Common Data Pipeline Architecture Patterns](https://www.getdbt.com/blog/common-data-pipeline-architecture-patterns)
- [Data Pipeline Design Patterns: Idempotency, DLQ, CDC and 5 More](https://dataskew.io/blog/data-pipeline-design-patterns/)

## 위키화 후보
- "DuckDB 자동 스필투디스크 vs Polars opt-in 스트리밍" — 대용량 데이터 처리 도구 선택 시 실무 분기 기준으로 개념 노트화 가치 있음.

## 프로필 반영 후보 (저위험)
- 도구 선택 기준 버전 정보를 "DuckDB v1.5.4(2026-06-17)/Polars 1.42.1(2026-06-30)"로 갱신.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 검증에서도 WebFetch 권한 거부로 wget 폴백 사용, 기존 등록된 "출처-대조-검증기-wget-폴백" 후보의 반복 재현일 뿐 신규 제안 아님)
