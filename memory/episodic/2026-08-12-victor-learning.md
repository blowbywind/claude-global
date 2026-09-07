---
date: 2026-08-12
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-12

## 오늘 배운 것
- Dask vs Spark TPC-H 벤치마크(Coiled 자체 발행 — Coiled=Dask 상용화 기업이라 이해상충 가능성 있음, 참고용으로만 취급)에서 Dask 우세 주장 확인. 다만 같은 출처가 "DuckDB가 단일머신에서 Polars보다 우세"라고도 주장해, 기존 위키의 "≤10GB 구간 Polars 2배 우위" 노트와 상충 — 단일 벤더 소스라 그대로 채택하지 않고 교차검증 보류 처리
- 베이지안 A/B 테스트의 사전확률(prior)은 반드시 명시적으로 정당화해야 하며 숨겨서는 안 됨 — 2026-07-16 승인대기 중인 "베이지안 A/B 도입" 건에 구체 조건으로 추가할 만한 유효 근거
- 2026년 대시보드 신규 관행으로 "마지막 업데이트 시각" 상단 표시(데이터 신선도 투명성)가 부상 — [시각화 원칙] 확장 후보
- DuckDB v1.5.2(2026-04-13), Polars 1.38 버전대(2.0 로드맵 논의 중), 스트리밍 sink가 Iceberg까지 확장 — 도구 버전 정보 갱신
- 나머지 발견(ETL→ELT 전환, Gartner 파이프라인 SLA화, 4대 파이프라인 패턴, 대시보드 KPI 5~9개 제한)은 모두 기존 위키 노트와 중복 확인 — 기존 지식의 유효성 재검증됨, 신규 반영 불필요

## 출처
- [TPC-H Benchmark (Coiled)](https://tpch.coiled.io/)
- [A Complete Guide to Statistical Testing (Bayesian priors)](https://towardsdatascience.com/a-b-testing-a-complete-guide-to-statistical-testing-e3f1db140499/)
- [Dashboard Design in 2026: Do's and Don'ts](https://think.design/blog/dashboard-design-in-2026-dos-and-donts/)
- [DuckDB — Wikipedia](https://en.wikipedia.org/wiki/DuckDB)
- [Python Data Processing 2026: Pandas, Polars, DuckDB](https://dev.to/dataformathub/python-data-processing-2026-deep-dive-into-pandas-polars-and-duckdb-2c1)

## 위키화 후보
- "Dask/DuckDB/Polars 성능 우위" 벤치마크 출처 간 상충(Coiled 자체발행 vs 기존 TPC-H 2025-06 노트) — 벤더 편향 표시하며 별도 교차검증 노트로 정리할 가치 있음

## 프로필 반영 후보 (저위험)
- 도구 선택 기준 버전 정보 갱신: "DuckDB v1.5.2 / Polars 1.38(2.0 로드맵 논의 중)"
- [시각화 원칙]에 "대시보드 상단 '마지막 업데이트 시각' 표시(신선도 투명성)" 추가

## 승인 필요 (고위험)
- 기존 2026-07-16 대기 중인 "베이지안 A/B 테스트 도입" 건에 "사전확률(prior) 명시적 정당화 의무화" 조건을 추가하는 안 — 방법론 변경 사안이라 사용자 승인 필요

## 신규 도구 후보 (에이전트/스킬)
(없음)
