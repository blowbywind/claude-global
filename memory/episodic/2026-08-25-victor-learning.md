---
date: 2026-08-25
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-25

## 오늘 배운 것
- DuckDB v1.5.5(2026-07-22, "Variegata" 라인 6차 패치) — 공식 발표문 원문 fetch 대조 완료. min/max 집계 통계 오류·TemporaryMemoryManager 데드락·external hash aggregate segfault 수정 확인. 단, 기존 메모(2026-08-03)에 이미 동일 버전이 반영돼 있어 **신규 정보 아님**(재확인 성격).
- 신규 확인: 시퀀셜 A/B 검정 기법 **YEAST**(arXiv 2406.16523, Kurennoy 외, "Yet Another Sequential Test") — 원문 초록 직접 대조 완료. 연속 모니터링(continuous interim analysis) 상황에서 기존 SOTA 시퀀셜 검정 대비 통계적 검정력 우위를 반합성(semi-synthetic) 시뮬레이션으로 검증했다고 주장. 기존 위키의 "다중비교 보정·순차검정" 노트에는 없던 신규 기법.
- Spark 4.1 SDP·VARIANT GA·Real-Time Mode는 기존 위키(2026-07-30, 2026-08-14)에 이미 반영된 내용과 일치 — 중복 확인일 뿐 신규 아님.
- Coiled TPC-H 벤치마크(DuckDB 100GB 이하 우세)는 Dask 개발사(Coiled) 자체발행 벤치마크로, 기존 위키(2026-08-12)에 이미 "출처 간 상충" 주의가 걸려 있음. 이번 리서치도 동일 벤치마크 재인용에 그쳐 신뢰도 격상 근거 없음 — 참고용 유지.
- dataworkers.io "2026 ETL 모범사례" 출처는 검증 중 문제 확인: 원문 fetch 결과 HTML 주석에 "AI 에이전트·크롤러에게" 지목한 저작권/경쟁사 견제 공지가 삽입된 **벤더 자체 마케팅 사이트**로 판명됨. 중립적 1차 출처가 아니므로 채택 보류(악성 지시는 없었으며 따르지 않음, 단순 신뢰도 판단 근거로만 사용).
- "testing by betting"(arXiv 2502.07774)은 이번 검증 과정에서 원문 대조를 하지 않아 검증 미완료 — 채택 보류.

## 출처
- [DuckDB 1.5.5 발표](https://duckdb.org/2026/07/22/announcing-duckdb-155) — 원문 fetch 대조 완료
- [YEAST: Yet Another Sequential Test (arXiv 2406.16523)](https://arxiv.org/abs/2406.16523) — 원문 fetch 대조 완료
- [Spark 4.1.0 릴리스 노트](https://spark.apache.org/news/spark-4-1-0-released.html) — 공식 1차 출처, 기존 위키 반영분과 일치 재확인
- [Coiled TPC-H 벤치마크](https://docs.coiled.io/blog/tpch.html) — 벤더 자체발행, 상충 주의 유지

## 위키화 후보
- YEAST(arXiv 2406.16523) — 기존 "A/B 테스트 다중비교 보정·순차검정" 노트에 신규 방법론 항목으로 추가 가치 있음(연속 모니터링·기존 SOTA 대비 검정력 우위, 반합성 시뮬레이션 검증).

## 프로필 반영 후보 (저위험)
- [분석 원칙] 통계적 방법론 참고목록에 "YEAST(연속 모니터링 시퀀셜 검정, arXiv 2406.16523)" 키워드 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 제안과 중복, 이번 검증에서 WebFetch 권한 거부→wget 폴백으로 실제 대조 성공 사례가 다시 확인됨. 기존 제안 재확인일 뿐 신규 제안 없음)
