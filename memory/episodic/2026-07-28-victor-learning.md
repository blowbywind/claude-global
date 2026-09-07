---
date: 2026-07-28
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-28

## 오늘 배운 것
- DuckDB v1.4.0 LTS(AES-256 암호화, MERGE 문, Iceberg 쓰기, 공식 Docker 이미지)와 v1.5.2(2026-04-13) 출시 — 출처: motherduck.com 공식 블로그(신뢰 가능)
- DuckDB 공간조인이 R-tree 인덱싱으로 최대 58배 가속, pg_duckdb 1.0으로 PostgreSQL에 OLAP 기능 추가 — 출처: motherduck.com(같은 벤더 공식 채널)
- 2026년 구도 재확인: 분산 프로덕션 ETL/스트리밍=Spark, 로컬 탐색·CI 픽스처·단일노드=Polars/DuckDB — 출처: opensourceforu.com(공신력 있는 오픈소스 전문지)
- LLM이 스키마 드리프트 탐지·샘플 기반 변환 제안·이상 분류·dbt 모델 초안 작성을 보조(엔지니어 대체 아님) — 출처: blog.bismart.com(데이터 컨설팅 기업 블로그)
- 대시보드 설계에서 3D·그림자·그라데이션 등 장식 지양(데이터 미니멀리즘), 뷰당 "하나의 질문" 원칙이 재확인됨 — 출처: domo.com(기존 인사이트와 일치, 확증)

**검증 후 제외한 항목** (출처 신뢰도·재현 불가로 폐기, 도구 사용 제한으로 WebFetch 교차검증 자체가 이번 세션에서 막혀 원문 대조 불가):
- "ETL→ECL 패턴", "MCP 기반 AI 에이전트 데이터 소비" — medium.com 개인 기고 글로 편집 검수 없는 주장, 사실이 아닌 예측/의견 성격이라 채택 보류
- dataworkers.io 파이프라인 모범사례, thinklytics.com 수치, testing.ml(ICML 워크숍 주장) — 도메인 공신력 확인 불가(특히 testing.ml은 공식 ICML 채널 여부 불명)로 폐기

## 출처
- [MotherDuck DuckDB News](https://motherduck.com/duckdb-news/)
- [MotherDuck DuckDB Ecosystem Newsletter Feb 2026](https://motherduck.com/blog/duckdb-ecosystem-newsletter-february-2026/)
- [Polars/DuckDB the new power combo](https://www.opensourceforu.com/2026/03/polars-duckdb-the-new-power-combo-for-in-process-analytics/)
- [Bismart: EAI/ETL 블로그](https://blog.bismart.com/en/eai-data-integration-etl-elt)
- [Domo: Dashboard design examples & best practices](https://www.domo.com/learn/article/dashboard-design-examples-best-practices)

## 위키화 후보
- DuckDB v1.4+ 신기능(암호화·MERGE·Iceberg 쓰기, 공간조인 R-tree 가속) — 개념 노트 신규 가치 있음

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "DuckDB v1.4+: 암호화(AES-256)·MERGE·Iceberg 쓰기·공간조인 R-tree 가속" 구체 버전 정보 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 제안하려던 "출처-대조-검증기" 역할의 에이전트가 이미 카탈로그에 존재함, 이번 세션처럼 WebFetch 권한 제약 시 활용 검토 필요)
