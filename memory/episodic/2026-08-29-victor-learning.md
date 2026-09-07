---
date: 2026-08-29
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-29

## 오늘 배운 것
- 리서치 원문 6건 중 신규 주장 3건을 URL 직접 대조(wget) 검증 → **2건 확인, 1건 폐기**(데이터 메시), **1건 추가 폐기**(직접 라벨 접근성) 처리했습니다.
- **DuckDB ADBC(Arrow Database Connectivity) 익스텐션 — 확인됨**: Arrow 기반으로 30개 이상 외부 DB에 직접 연결 지원(motherduck.com 원문에서 "connect directly to over 30 external databases via ADBC" 문구 직접 확인). 기존 위키의 PySpark 호환 레이어 노트와는 별개 기능이므로 도구 선택 기준에 참고 가치 있음.
- **A/B 테스트 세그먼트별 사후분석 — 확인됨**: otterab.com 원문에서 "aggregate winner can hide a loss in a key audience" 등 세그먼트/코호트별 재분석 권고 문구 직접 확인. 기존 SRM·사전등록 원칙에 대한 보강 뉘앙스로 채택 가능.
- **폐기 — 데이터 메시(Data Mesh)**: 인용된 getdbt.com 원문 본문에는 해당 개념 서술이 없고, "mesh"는 상단 내비게이션의 제품명("dbt Mesh") 링크 3건뿐(오귀속 판정, 채택 불가).
- **폐기 — "범례보다 직접 라벨이 접근성 우수"**: 인용된 thinklytics.com 원문(28KB 전체)에 "accessib"·"direct" 관련 서술이 전무. 근거 문장 자체가 확인되지 않아 폐기.
- n8n 가이드·DuckDB v2.0/50GB~1TB 재확인 건은 리서치 원문 자체가 "기존 위키와 중복"이라 명시했고 별도 신규 사실이 없어 채택 대상에서 제외했습니다.

## 출처
- [Announcing the DuckDB ADBC Extension — MotherDuck DuckDB News](https://motherduck.com/duckdb-news/)
- [Best Practices for A/B Testing — Otter A/B](https://www.otterab.com/blog/best-practices-for-ab-testing)

## 위키화 후보
- DuckDB ADBC 익스텐션(30+ 외부 DB, Arrow 기반 연결) — 기존 "PySpark 호환 레이어" 노트와 별개 신규 기능 노트로 가치 있음.

## 프로필 반영 후보 (저위험)
- [분석 원칙]에 "A/B 테스트 결과는 전체 지표 외 세그먼트/코호트별 재분석 필수" 뉘앙스 보강(기존 SRM·사전등록 원칙과 상충 없음, 확장 수준의 저위험 추가).

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
