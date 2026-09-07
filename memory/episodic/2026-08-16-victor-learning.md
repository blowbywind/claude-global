---
date: 2026-08-16
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-16

## 오늘 배운 것

- (원문 대조 완료) Miles Cole 벤치마크(2025-06-30, milescole.dev): TPC-DS 스케일팩터 1GB(압축 140MB)~10GB(압축 1.2GB) 구간은 Polars가 DuckDB·Daft 대비 약 2배 빠르고 단일머신 엔진 전체가 Spark를 압도. 100GB(압축 12.7GB) 구간부터는 Fabric Spark가 OOM 없이 전 compute 스케일 완주하며 1위, Polars는 16-vCore 미만에서 OOM 위험 확인. 기존 위키 노트(도구 선택 기준 관련 4건, 2026-07-13~23)와 방향 일치, 원문 재확인으로 신뢰도 보강.
- (원문 대조 완료) 정보적 베이지안(Informed Bayesian) A/B: 사전분포로 ①효과크기 점추정 이동, ②신뢰구간(credible interval) 좁히기 두 방식으로 피킹·다중비교 문제 완화 — statsig.com 원문에서 확인. 단 "강한 사전이 원하는 결론을 정당화할 위험", "좁은 사전은 오히려 더 큰 표본크기 요구" 트레이드오프도 원문에 명시되어 있어, 장점만 반영한 최초 리서치 요약은 일부 보완 필요.
- **[폐기]** "Databricks Genie Code(2026-03 출시)/Snowflake Cortex Code" 주장: atlan.com 원문 대조 결과 "Cortex Code"라는 표현 자체가 없고, "Genie"는 Atlan이 연동 지원하는 제품 나열(Cortex/Genie/Claude/Codex) 중 하나로만 등장 — 별도 제품명·출시일 서술 없음. 근거 없는 조합으로 판단해 폐기.
- 에이전틱 데이터 파이프라인 트렌드(사람 작성 DAG → AI 에이전트가 관찰·추론·행동 루프로 파이프라인 운영·장애 트리아지·문서화, 데이터엔지니어는 가드레일 설계자로 재편) 자체는 atlan.com 원문 일반 서술로 확인됨(제품명·날짜 근거는 없음).
- 순차검정(Sequential Testing), 데이터 계약(Data Contract), 대시보드 내러티브·자연어질의 트렌드는 위키에 이미 2026-07-13~08-11 사이 축적되어 있어 **중복** — 신규 학습 아님, 재수록 생략.

## 출처
- [The Small Data Showdown '25](https://milescole.dev/data-engineering/2025/06/30/Spark-v-DuckDb-v-Polars-v-Daft-Revisited.html)
- [Informed Bayesian A/B Testing](https://www.statsig.com/blog/informed-bayesian-ab-testing)
- [AI Agents for Data Engineering](https://atlan.com/know/ai-agents-for-data-engineering/) (Genie Code/Cortex Code 근거 부재 확인용)

## 위키화 후보
- 에이전틱 ETL(사람 작성 DAG → AI 에이전트 관찰-추론-행동 루프 운영, 데이터엔지니어=AI 오케스트레이터 역할 재편) — 제품명·날짜 없이 트렌드 자체만 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- 도구 선택 기준의 Miles Cole 벤치마크 노트에 "원문 대조 완료(2026-08-16)" 검증 마크 추가

## 승인 필요 (고위험)
- (신규 제안 없음) 베이지안 A/B 도입 여부는 2026-07-16 항목과 동일 계열로 승인대기 유지, 이번엔 메커니즘(사전분포 이동/구간축소)만 원문으로 재확인함

## 신규 도구 후보 (에이전트/스킬)
- (없음) — 기존 제안된 "출처-대조-검증기"류의 유효성이 이번 검증(핵심 주장 3건 중 1건 원문 근거 부재로 폐기)으로 재차 실증됨, 별도 신규 제안 없음
