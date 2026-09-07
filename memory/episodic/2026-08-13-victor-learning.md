---
date: 2026-08-13
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-13

[교차검증 완료]

Coiled·Polars·dataworkers.io·uxpin.com·infogram.com·mljourney.com 6건은 wget으로 원문을 직접 확보해 핵심 주장을 본문과 대조했습니다. researchgate.net(1건)은 접근 차단(HTTP 오류)으로 검증 불가해 폐기했고, statsig.com(1건)은 원문 어디에도 "18.4%→41.2%", "n=2,400/4,200+", "14% 단축" 수치가 없어 환각으로 판단해 폐기했습니다.

## 오늘 배운 것
- Polars 공식 PDS-H 벤치마크(2025-05, 원문 확인): SF-10·SF-100에서 Polars·DuckDB가 Dask·PySpark보다 한 자릿수 이상 빠름. SF-100에서 Polars 인메모리 엔진은 캐시미스로 느려지지만 스트리밍 엔진은 DuckDB와 동급 유지(스트리밍이 인메모리 대비 최대 3~7배 개선) — 기존 07-18 수치를 이 1차 출처로 정밀화 가능
- Coiled TPC-H 벤치마크(2024-05, 원문 확인·단 Dask 개발사 자체발행이라 편향 유의, "no project wins" 강조): 로컬·소규모=DuckDB/Polars 우세, 클라우드 1TB 이하=Dask/DuckDB 우세, 클라우드 초대규모=Dask가 Spark 능가 — 스케일별 매트릭스로 참고 가치는 있으나 벤더 편향 감안 필요
- 인과추론 표준 워크플로 4단계(원문 확인): DoWhy(모델링→estimand 식별→추정→반박/민감도분석) + EconML(Double ML 등) — [분석 원칙] DiD·성향점수매칭 항목에 구체 절차로 보강 가능
- 2026 ETL 패턴 중 멱등성 변환·dbt/SQLMesh 선언적 모델링·계약기반 인터페이스·레이크하우스 저장은 원문 확인. 단 "배치-스트리밍 하이브리드"·"Zero-ETL"은 원문에 없어 제거, 출처 자체도 벤더(Data-Agents 플랫폼사) 마케팅 블로그라 참고용 등급으로만 취급
- 대시보드: 좌상단 우선배치(기존 인사이트 재확인)·역할 기반 개인화·AI 자동인사이트는 원문 확인. "역피라미드 배치"·"미니멀 저채도 팔레트"는 원문에 없어 제거
- 접근성 트렌드(색상대비+포용적 설계)는 원문 확인, 기존 [시각화 원칙] 방향과 일치
- 베이지안 A/B 채택률 통계(41.2% 등)는 출처 원문에 부재(환각) → 폐기. 07-16 보류 항목(방법론 변경, 사용자 승인 필요)에 신규 정량근거로 반영하지 않음

## 출처
- [Polars — Updated PDS-H benchmark results (2025-05)](https://pola.rs/posts/benchmarks/)
- [Coiled — DataFrames at Scale Comparison: TPC-H (2024-05)](https://docs.coiled.io/blog/tpch.html)
- [Causal Inference in ML: DoWhy and EconML](https://mljourney.com/causal-inference-in-machine-learning-dowhy-and-econml/)
- [Data Pipeline Best Practices 2026](https://dataworkers.io/resources/data-pipeline-best-practices-2026/)
- [Dashboard Design Principles](https://www.uxpin.com/studio/blog/dashboard-design-principles/)
- [10 Trends in Data Visualization to Watch in 2026](https://infogram.com/blog/10-trends-in-data-visualization-to-watch-in-2026/)

## 위키화 후보
- Polars 인메모리 vs 스트리밍 엔진 성능 특성(SF-100↑ 캐시미스로 인메모리 저하, 스트리밍은 DuckDB 동급) — 개념노트
- DoWhy 4단계 인과추론 워크플로(Model→Identify→Estimate→Refute) — 개념노트

## 프로필 반영 후보 (저위험)
- 도구 선택 기준의 벤치마크 수치를 Polars 공식 2025-05 PDS-H 결과(SF-10/100 한자릿수 이상 우위, 스트리밍엔진 SF-100 동급)로 정밀화
- [시각화 원칙]에 "포용적 설계(inclusive design)가 2026 명시적 트렌드" 한 줄 보강

## 승인 필요 (고위험)
(없음 — 베이지안 A/B 관련 신규 통계는 검증 결과 출처에 부재해 폐기, 07-16 보류 상태 변경 없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 검증에서 8건 중 2건(통계 환각 1건, 접근차단 1건) 실제 폐기 확인. WebFetch 권한 차단 시 wget+텍스트추출 폴백이 재차 유효함을 실증(기존 등록 후보와 동일 결론 반복)
