---
date: 2026-08-28
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-28

## 오늘 배운 것
- DuckLake v1.0 원문 대조 완료: 2026-04-13 프로덕션 레디 공식 출시, 참조 구현(ducklake DuckDB 익스텐션)이 DuckDB v1.5.2에 포함. 카탈로그는 SQLite·PostgreSQL·DuckDB 등 RDBMS를 지원(파일 대신 DB에 메타데이터 저장) — 빅터 리서치 원문 확인됨.
- DuckLake 핵심 기능은 "데이터 인라이닝"(소규모 insert/delete/update를 카탈로그 DB에 스테이징해 "작은 파일 문제" 회피, 기본 임계값 10행) — Iceberg/Delta 대비 차별점으로 확인. 단 "v1.1 표준 2026-09 예정"은 원문에서 확인 못 해 제외.
- 2026년 시맨틱 레이어 지형(dbt Semantic Layer/MetricFlow, Cube, AtScale, Snowflake Semantic Views, Databricks Metric Views) 원문 대조 확인. 단 Cube의 자체 API는 SQL/REST/GraphQL/MCP이며 MDX/DAX는 AtScale·Power BI 쪽 특징 — 빅터가 "Cube=SQL/REST/GraphQL/MDX 4종"으로 정리한 부분은 부정확해 정정. 출처가 Cube 자사 블로그(자사를 "최고"로 선정)라 벤더 편향 유의 필요.
- AI 에이전트가 ETL 운영(모니터링·이상탐지·자가치유)을 맡으면서 데이터엔지니어 역할이 "가드레일 설계·데이터 계약 정의·에이전트 산출물 검증"으로 이동한다는 흐름은 원문 대조로 확인. 다만 출처가 소규모 컨설팅사 홍보성 블로그라 권위는 낮음, "ETL의 신규 하류 소비자(BI 대시보드 병행)" 프레이밍은 원문 미확인이라 폐기.
- **검증으로 폐기한 항목 2건**: ①"DuckDB가 Spark보다 100배(Zach Wilson, 2026 신규)" — 원문 게시일이 실제로는 2025-09-22로 확인돼 "2026년 신규" 표현이 오류(본문은 유료화로 세부 수치 미확인, 신뢰 불가). ②"Kestra: 소·중규모 팀 80%가 자체 오케스트레이터 포기·번들형 이전" — 원문 전체 대조 결과 해당 주장·수치가 존재하지 않음(원문 주제는 역할 파편화·조정 계층론). 두 항목 모두 프로필 미반영.

## 출처
- [DuckLake v1.0: The Lakehouse Format Built on SQL Reaches Production-Readiness](https://ducklake.select/2026/04/13/ducklake-10/)
- [DuckLake FAQ](https://ducklake.select/faq)
- [Best Semantic Layer for AI and BI in 2026: The Shortlist](https://cube.dev/articles/best-semantic-layer-for-ai-and-bi-2026)
- [AI Agents Are Replacing ETL Scripts — What Data Engineers Need to Know in 2026](https://tbdcdata.com/en/blog/ai-agents-replacing-etl-scripts-data-engineers-2026/)

## 위키화 후보
- DuckLake(v1.0) — RDBMS 카탈로그 기반 오픈 레이크하우스 포맷, 데이터 인라이닝으로 소규모 변경 성능 개선, DuckDB v1.5.2+ 참조 익스텐션 제공

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "DuckLake(카탈로그기반 레이크하우스 포맷, DuckDB v1.5.2+ 익스텐션, Iceberg/Delta 대비 소규모변경 강점)" 키워드 추가
- ETL 트렌드 인지에 "AI 에이전트=파이프라인 운영자(모니터링·자가치유), 데이터엔지니어는 가드레일·데이터계약·에이전트 산출물 검증으로 역할이동" 추가([출처=소규모 컨설팅사 블로그, 권위 낮음 단서 명시]로만 참고용 반영)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — WebFetch 권한 거부로 wget 폴백 수동 검증을 이번에도 반복 수행했으나, 동일 이슈가 이미 위키(`web-research-delegation.md`)와 후보 에이전트 목록에 여러 차례 등록돼 있어 중복 제안 생략)
