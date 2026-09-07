---
date: 2026-07-22
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-22

앞서 실패했던 검증이 두 번째 에이전트를 통해 성공적으로 완료되어, 결과를 반영해 최종 출력을 정정합니다.

## 오늘 배운 것
- 초소형 데이터(~140MB급) 벤치마크: Polars가 DuckDB·Daft 대비 약 2배 빠르고 Spark는 클러스터 기동시간만으로 쿼리시간을 초과(원문 대조 확인) — 기존 "1~10GB 구간 Polars 유리" 지식과 정합, 단 "Spark 4.1.2(Scala 2.13)" 버전 언급은 원문에 없어 폐기
- A/B 테스트 신규 방법론: doubly robust 추정 + two-armed bandit + permutation p-value를 결합한 프레임워크 논문 확인(arXiv 2507.18118, 제목·초록 원문 일치)
- A/B 테스트 통계 효율 개선 방법론: estimating equations/U-statistics 기반 doubly robust generalized U 추정 논문 확인(arXiv 2505.08128) — 단, 원 리서치의 "순차적 중간분석으로 조기종료" 서술은 원문과 불일치해 폐기하고 실제 주제(추정 효율 개선)로 정정
- 대시보드 인터랙티비티 과잉 사용 시 자주 보는 대시보드의 통찰 도달 시간이 35% 증가(2026년 조사, 원문 문구 확인) — 기존 "뷰당 차트 6~8개 제한" 원칙을 뒷받침하는 근거로 추가 가치
- ETL→ELT 전환·Zero-ETL 확산·파이프라인 제품화(Data Product)·대시보드 AI예측/대화형 UI 트렌드는 이번 라운드에서 원문 대조는 못했으나 업계 통설과 정합해 정성적 트렌드로만 인지(수치 주장은 미포함)

## 출처
- [Spark vs Polars 2026 벤치마크](https://sparkingscala.com/latest/2026/05/22/spark-vs-polars-2026/)
- [A Two-armed Bandit Framework for A/B Testing](https://arxiv.org/abs/2507.18118)
- [Beyond Basic A/B testing: Improving Statistical Efficiency for Business Growth](https://arxiv.org/abs/2505.08128)
- [Dashboard Design Guide — Improvado](https://improvado.io/blog/dashboard-design-guide)

## 위키화 후보
- A/B 테스트 doubly robust 추정 방법론(two-armed bandit / estimating equations 기반 U-statistics) — 기존 DiD·PSM·DML 인과추론 노트와 연계 가치
- Zero-ETL(운영DB-분석DW 직결) — 파이프라인 설계 기본값 검토 항목 후보

## 프로필 반영 후보 (저위험)
- [분석 원칙]에 A/B 테스트 통계 기법 키워드 "doubly robust 추정, permutation p-value" 인지 추가
- 도구 선택 기준의 초소형(≲1GB) 구간에 "Polars 2배 우위, Spark 클러스터 기동 오버헤드" 벤치마크 근거 보강

## 승인 필요 (고위험)
(없음 — 확인된 두 논문 모두 기존 사전등록/표본크기 확정 방식과 충돌하는 순차모니터링·조기종료 방법론이 아님, 방법론 변경 제안 아님)

## 신규 도구 후보 (에이전트/스킬)
(없음)
