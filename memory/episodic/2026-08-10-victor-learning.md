---
date: 2026-08-10
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-10

## 오늘 배운 것
- Dask가 로컬(M1 MacBook Pro, TPC-H, 10GB) 벤치마크에서 Spark보다 최대 507% 빠름 — Coiled 자체 벤치마크 원문 대조 확인(단, Coiled는 Dask 개발사라 편향 가능성 유의)
- DuckDB는 단일머신 로컬에서 대체로 Polars를 능가하고, 클라우드로 확장할수록 우위가 더 뚜렷해짐 — 동일 벤치마크 원문에서 "occasionally outperformed locally by Polars, lead becomes more prominent in cloud" 확인
- CUPED(사전실험 데이터 기반 분산감소)는 A/B 테스트 기간을 약 20~50% 단축시킴(원문 확인) — 단, 지표별(매출/참여) 세부 수치는 원문에서 직접 확인 안 됨, 폐기
- ETL 신뢰성 확보 기법 중 "전이성 오류엔 지수 백오프 재시도", "스키마 강제(enforcement)", "데이터 볼륨/값 이상탐지"는 원문 대조 확인. 단 "day-zero 관측성", "스키마 계약·하위호환 버전관리" 표현은 원문에 없어 폐기
- Amplitude "2026 A/B 테스트 5대 트렌드" 중 "AI 활용은 하되 블랙박스 리스크로 신중 채택(4번 트렌드)"만 원문 확인. "순차검정·분산감소 고도화", "서버사이드 풀스택 실험 확장"은 원문(5개 트렌드: 통계 전문성 강화·웨어하우스 네이티브 실험 등)과 불일치해 폐기

## 출처
- [Dask vs. Spark — Coiled](https://docs.coiled.io/blog/spark-vs-dask.html)
- [TPC-H benchmarks — Coiled](https://docs.coiled.io/blog/tpch.html)
- [CUPED Variance Reduction in A/B Testing — Atticus Li](https://atticusli.com/blog/posts/cuped-variance-reduction-faster-ab-tests/)
- [ETL Pipeline Design — OneUptime](https://oneuptime.com/blog/post/2026-01-30-etl-pipeline-design/view)
- [5 Trends Shaping the Future of A/B Testing — Amplitude](https://amplitude.com/blog/ab-testing-trends)

**폐기(교차검증 실패)**: DuckDB "100배" 주장(dataexpert.io — 페이월로 본문 미확인, 헤드라인만 존재), Gartner "70%" 파이프라인-제품화 전망(oneuptime.com 2026-02-13 글 — 본문에 "Gartner"·"70%" 문자열 전무), ETL→ELT 전환·Snowflake/BigQuery/Redshift(dataskew.io — 해당 글은 Idempotency/DLQ/CDC 주제로 ELT·웨어하우스 언급 자체 없음), 대시보드 미니멀리즘·개인화(thinklytics.com — SPA라 본문 자동대조 불가), 접근성 8%/직접라벨링(techment.com — 403 차단으로 미확인, 단 기존 위키 2026-07-14 노트와 내용상 일치).

## 위키화 후보
- CUPED 20~50% 기간단축(수치 확정, 지표별 세부수치는 배제) — 기존 A/B 다중비교 보정 노트에 하위항목 추가

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "DuckDB(단일머신)·클라우드 확장 시 우위 확대, Dask(TPC-H 507%, 로컬 10GB 기준·Coiled 자체 벤치마크임을 명시)" 구체화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존에 제안된 "출처-대조-검증기" 계열은 이번 검증에서도 5건 중 3건 불일치 확인돼 필요성 재확인됨, 신규 제안은 생략)
