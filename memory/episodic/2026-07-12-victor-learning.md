---
date: 2026-07-12
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-12

## 오늘 배운 것
- Polars가 2026년 스트리밍 실행 엔진을 정식 안정화해, 물리 메모리를 초과하는 데이터셋도 out-of-core 방식으로 처리 가능해짐 — 기존 [분석-도구-선택-기준]의 "≲10GB→DuckDB/Polars" 기준을 보강하는 근거
- 단일 노드 환경에서 DuckDB·Polars 성능 차이는 20~50% 이내(복잡 SQL은 DuckDB, Python 네이티브 lazy 스트리밍은 Polars 우위), Spark는 대규모에서 Dask 대비 약 2배, 소규모에서 타 도구 대비 10배 이상 느림 — 다만 후자 출처(Coiled)는 Dask 판매사라 편향 가능성 있어 참고용으로만 반영
- A/B 테스트에서 다중 변형·다중 지표를 유의수준 보정 없이 동시 검정하면 거짓양성률 증가 → Bonferroni 등 다중비교 보정 필요, 통계적 유의성과 비즈니스(실무) 유의성은 별개로 평가 — [분석 원칙]의 peeking 방지 습관을 다중비교 영역까지 확장할 가치
- 지속 모니터링이 꼭 필요한 경우 순차검정(sequential testing)으로 데이터 누적에 따라 유의수준 임계값을 동적 조정, 검정력 손실 없이 조기판단 가능(단 세밀 분석은 고정기간 검정 병행 권장)
- ETL 설계 트렌드: 시간 기반 스케줄 대신 데이터 가용성 센서(Airflow ExternalTaskSensor, Dagster asset sensor)로 전환, 2026년 신규 파이프라인 다수가 ELT 패턴 채택
- 대시보드 설계 원칙: data-ink ratio(비필수 요소 제거), 화면당 차트 6~8개 제한, 색상 단독구분 지양(패턴·아이콘 병행, 색맹 약 8% 고려) — [시각화 원칙]에 따라 리나(디자인 총괄)와 색상·폰트 조율 시 참고

※ "DuckDB v1.5.3 Quack Remote Protocol" 주장은 재검증 시도(WebFetch) 실패 및 기존 DuckDB 제품 라인(MotherDuck)과 불일치해 출처 신뢰도 미확인 상태로 채택하지 않고 폐기함.

## 출처
- [Polars 스트리밍 엔진](https://dev.to/dataformathub/python-data-processing-2026-deep-dive-into-pandas-polars-and-duckdb-2c1)
- [DuckDB·Polars 단일노드 성능 비교](https://grantmcdermott.com/duckdb-polars/)
- [Spark/Dask TPC-H 벤치마크](https://docs.coiled.io/blog/tpch.html)
- [A/B 테스트 모범사례](https://vwo.com/blog/best-practices-for-ab-testing-in-enterprise/)
- [A/B 테스트 통계적 유의성](https://nicolalazzari.ai/guides/ab-test-statistical-significance)
- [순차검정(Sequential Testing)](https://www.statsig.com/perspectives/sequential-testing-ab-peek)
- [데이터 파이프라인 설계 패턴](https://dagster.io/guides/data-pipeline-architecture-5-design-patterns-with-examples)
- [2026 데이터 파이프라인 도구](https://getbruin.com/blog/best-data-pipeline-tools-2026/)
- [대시보드 시각화 모범사례](https://www.techment.com/blogs/data-visualization-best-practices-enterprise/)
- [데이터 시각화 2026 가이드](https://lumenore.com/blog/data-visualization-best-practices-2026-guide/)

## 위키화 후보
- A/B 테스트 다중비교 보정(Bonferroni)·순차검정(sequential testing) — 기존 [[a-b-테스트-설계-시-peeking-p]] 노트에 없는 신규 내용, 확장 노트 가치
- 대시보드 설계 원칙(data-ink ratio·차트 개수 제한·색맹 접근성) — 신규 개념 노트 가치

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "Polars 스트리밍 엔진(out-of-core)" 키워드 추가
- ETL 스케줄링을 시간 기반→데이터 가용성 센서(Airflow/Dagster) 전환 트렌드 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
