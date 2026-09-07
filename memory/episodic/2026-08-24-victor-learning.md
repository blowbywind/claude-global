---
date: 2026-08-24
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-24

(임시 검증 파일 `/home/bbw/ai-ops/.scratch_verify/` 삭제는 하네스에서 차단되어 남아있습니다 — 필요 시 수동 삭제 부탁드립니다.)

검증 결과: 5건 중 4건은 원문 대조로 사실 일치 확인, 1건(오케스트레이터 센서/이벤트 트리거 패턴)은 인용 출처 본문에 해당 내용이 전혀 없어 폐기했습니다.

## 오늘 배운 것
- Polars vs Spark 규모별 벤치마크(원출처 Miles Cole, 2025-06-30, 기사 재정리 확인): 140MB~1.2GB 구간 Polars가 DuckDB·Daft 대비 약 2배 우세, 12.7GB부터 Spark 역전 시작, 127GB에서 Spark가 DuckDB 대비 32 vCore 3.5배·64 vCore 6배, Polars·Daft는 완주 실패
- A/B 테스트 신규 기법(arXiv 2607.14604, Olivier Jeunen, 2026): 처치·대조 정책이 같은 행동에 합의(policy overlap)하면 그 결과는 처치효과 신호 없이 신뢰구간만 부풀리는 노이즈 — Δ-Off-Policy Estimation으로 이 중첩을 활용해 분산을 정책 간 발산(divergence)에 비례하도록 낮추는 프로토콜 제안, 기존 Difference-in-Means를 이론적으로 지배(dominate)함을 증명
- 데이터 파이프라인 2026년 표준 구도(guptadeepak.com, 2026-08-16): 단일 올인원 대신 수집(Fivetran/Airbyte)·변환(dbt)·오케스트레이션(Airflow/Dagster) 3계층("EL+T+orchestration") 스택 조합이 주류, ELT(선적재 후변환) 기본 패턴
- 대시보드 트렌드(infogram, 2026): "Narrative-Driven Dashboards"(차트 나열 → 구조화된 스토리텔링 내러티브)와 "Personalized Data Experiences"(역할별 개인화 레이아웃) 확산, AI 자동화 언급도 확인

※ 폐기: "Airflow ExternalTaskSensor·Dagster asset sensor·Prefect event trigger 완료신호 대기 표준화" 주장은 인용 출처(guptadeepak.com, Fivetran/Airbyte/dbt/Airflow/Dagster 5종 비교 기사)에 Prefect·sensor·trigger 관련 문구가 전무해 출처 불일치로 제외.

## 출처
- [Spark vs Polars: When to Use What in 2026](https://sparkingscala.com/latest/2026/05/22/spark-vs-polars-2026/) (Miles Cole 2025-06-30 벤치마크 재인용)
- [Accelerating A/B-Tests with Counterfactual Estimation: Reducing Variance through Policy Overlap](https://arxiv.org/abs/2607.14604)
- [Top 5 Data Pipeline & ETL Tools of 2026](https://guptadeepak.com/tools/top-5-data-pipeline-etl-tools-2026/)
- [10 Trends in Data Visualization to Watch in 2026](https://infogram.com/blog/10-trends-in-data-visualization-to-watch-in-2026/)

## 위키화 후보
- Polars/Spark 규모별 벤치마크(140MB/1.2GB/12.7GB/127GB 분기점, vCore별 배수) — 개념 노트로 정리 가치 있음

## 프로필 반영 후보 (저위험)
- [분석 원칙] A/B 테스트 통계 기법 키워드에 "policy overlap 기반 Δ-Off-Policy Estimation(Jeunen, arXiv 2607.14604)" 인지 추가
- 도구 선택 기준에 "Polars/Spark 분기점: ~10GB 이하 Polars 우세, 12.7GB부터 Spark 역전, 100GB+에서 Polars/Daft 완주 실패" 벤치마크 근거 갱신(기존 Dask 비교와는 별도 축으로 보완)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존에 이미 제안된 "출처-대조-검증기(wget 폴백)" 후보가 이번에도 1건 오귀속 적발로 유효성 재확인됐으나 중복 제안은 생략)
