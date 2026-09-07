---
date: 2026-08-22
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-22

## 오늘 배운 것
- ratio metric(비율 지표) A/B 테스트용 R 패키지 **deltatest**(delta method 기반, 온라인 실험 분산보정) — useR! 2026(2026-07-06~09) 발표 원문 확인 완료
- **2-armed bandit + doubly robust 추정 + permutation 기반 p-value** 결합 방법론(arXiv:2507.18118) — 원문 초록 대조 결과 논문 게재일은 2025-07-24로, 리서치 결과의 "2026년 신규" 표기는 오류였음(정정). 기존 위키의 "doubly robust" 항목과 직결되는 검정력 개선 기법으로 확인
- DuckDB 최신판 v1.5.5는 GitHub 릴리스 원문 재대조 완료 — 단, 2026-08-03 기존 프로필 반영분과 동일해 **신규 정보 아님**(중복 기록 안 함)
- 데이터 레이크하우스 가이드(2025~2026) 원문 확인 결과 ELT 기본값 전환 흐름 자체는 실재하나, "Fivetran/Airbyte가 Iceberg/Delta/Hudi로 직접 적재" 주장은 인용된 AWS 블로그 원문에 해당 키워드가 전혀 없어 **폐기**
- "Gartner 2026년까지 70% 조직이 파이프라인을 SLA 갖춘 제품으로 취급" 주장은 원문 대조 결과 실제로는 "50%가 관측성 플랫폼 도입"이라는 별개 내용으로 확인돼 **오귀속 판정, 폐기**
- julius.ai "대시보드 5초 규칙" 출처는 접속 시 403 Forbidden으로 원문 확인 불가 → **폐기** (TPC-H 계층별 벤치마크는 기존 위키에 이미 "Coiled 자체발행 편향" 주의사항과 함께 등재돼 있어 재수록 생략)

## 출처
- [deltatest: Statistical Hypothesis Testing Using the Delta Method for Online A/B Testing (useR! 2026)](https://events.digital-research.academy/event/109/contributions/428/)
- [A Two-armed Bandit Framework for A/B Testing (arXiv:2507.18118, 2025-07-24)](https://arxiv.org/abs/2507.18118)
- [DuckDB Releases](https://github.com/duckdb/duckdb/releases)
- [The 2025 & 2026 Ultimate Guide to the Data Lakehouse](https://datalakehousehub.com/blog/2025-09-2026-guide-to-data-lakehouses/)

## 위키화 후보
- "2-armed bandit(doubly robust + permutation p-value) 검정력 개선 기법"(arXiv:2507.18118) — 기존 doubly-robust 개념 노트에 실무 확장으로 연결 가치 있음

## 프로필 반영 후보 (저위험)
- [분석 원칙] 통계기법 키워드 목록에 "deltatest(R, delta method 기반 ratio metric 검정, useR! 2026)" 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
