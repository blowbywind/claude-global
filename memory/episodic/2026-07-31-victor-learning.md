---
date: 2026-07-31
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-31

## 오늘 배운 것
- A/B 테스트 검정력 개선 방법론 2건 확인(원문 출처 검증 완료): ① two-armed bandit 프레임워크(doubly robust pseudo-outcome + 순열검정 p-value), ② doubly robust generalized U-statistic(LinkedIn 실데이터 적용, 소표본·비정규분포·ROI 고려) — 기존 사전등록/표본크기 방식과 별개로 검정력 개선 보조기법으로 참고 가치.
- Dask vs Spark(Coiled TPC-H) 원문 재확인: 대규모에서 Dask가 Spark 대비 약 2배 빠름(원문 확인). 단 "소규모에서 DuckDB/Dask가 우세"라는 리서치 원문 주장은 근거 오류 — 실제 원문은 소규모(≤10GB)는 **DuckDB/Polars**가 우세하고 Dask·Spark는 성능 손실이라 명시함. 이 부분은 정정 필요.
- DuckDB+Arrow+Parquet가 "로컬 우선 분석 스택"으로 부상 중이라는 2026-01 게시글 확인(제목·논지 일치) — 클라우드 웨어하우스 비용 절감 관점.
- 대시보드 트렌드 2건 확인: ① NLP/대화형 챗봇 기반 자연어 질의(UXPin, "augmented analytics" 섹션에서 확인) ② 색상 팔레트 축소·여백 확대의 "데이터 미니멀리즘"(Infogram) — 기존 [시각화 원칙](차트당 3~4색, 뷰당 6~8개 제한)과 방향 일치.
- **폐기 항목**(원문 대조 결과 근거 미확인): Gartner "2026년 70% 파이프라인 제품화" 인용(oneuptime 원문에 Gartner 언급 자체 없음), ELT 트렌드/웨어하우스 컴퓨트 비용 하락 배경(dataskew.io 원문은 idempotency·백필·DLQ·CDC 등 8대 패턴만 다루며 ELT 트렌드 언급 없음), 통계 리뷰 논문(MDPI, 접속 시 봇 차단으로 본문 검증 불가) — 모두 사용하지 않음.

## 출처
- [A Two-armed Bandit Framework for A/B Testing](https://arxiv.org/abs/2507.18118)
- [Beyond Basic A/B testing: Improving Statistical Efficiency for Business Growth](https://arxiv.org/abs/2505.08128)
- [DataFrames at Scale Comparison: TPC-H](https://docs.coiled.io/blog/tpch.html)
- [DuckDB, Arrow, and Parquet: The Ultimate Analytical Stack for 2026](https://dev.to/dataformathub/duckdb-arrow-and-parquet-the-ultimate-analytical-stack-for-2026-2mbi)
- [Dashboard Design Principles (UXPin)](https://www.uxpin.com/studio/blog/dashboard-design-principles/)
- [10 Trends in Data Visualization to Watch in 2026 (Infogram)](https://infogram.com/blog/10-trends-in-data-visualization-to-watch-in-2026/)

## 위키화 후보
- A/B 테스트 검정력 개선 방법론(two-armed bandit, doubly robust generalized U) — 기존 A/B테스트 개념노트에 보강 섹션 후보
- DuckDB+Arrow+Parquet 로컬우선 분석 스택 — 도구선택 기준 개념노트 보강 후보

## 프로필 반영 후보 (저위험)
- 도구 선택 기준 정정: "소규모(≤10GB)는 DuckDB/Polars 우세(Dask/Spark 손실), 대규모는 Dask가 Spark 대비 ~2배" — 기존 메모의 부정확한 표현 수정
- [시각화 원칙]에 "데이터 미니멀리즘(색상 축소·여백 확대)" 키워드를 기존 3~4색 제한 원칙 보강으로 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
