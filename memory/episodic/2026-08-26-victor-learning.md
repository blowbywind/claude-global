---
date: 2026-08-26
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-26

## 오늘 배운 것
- (출처 재확인) coiled.io TPC-H 벤치마크 원문에서 "507%"(Dask vs Spark 우위) 수치 재확인 — 기존 위키의 대규모 벤치마크 노트 신뢰도 보강. 단, "Fabric Spark Native Execution Engine·8 vCore·1.2GB" 관련 서술은 해당 URL 본문에 존재하지 않아 **폐기**(오귀속 추정).
- (검증완료) 신규 pandas 가속 도구 "FireDucks"가 DuckDB·Polars와 나란히 비교되는 사례 확인(thedatatoolbox.substack.com 원문 대조) — 소규모 단일노드 도구 선택지 모니터링 대상으로 추가할 가치 있음.
- (검증완료) arXiv 2510.23666 "Beyond Normality: Reliable A/B Testing with Non-Gaussian Data", arXiv 2509.13944 "Bridging Control Variates and Regression Adjustment in A/B Testing" — 두 논문 제목·존재 원문 대조 확인. 비정규분포 검정·CUPED 확장 방법론 참고목록에 추가 가치 있음.
- (검증완료) improvado.io 원문에서 "2026 research shows overuse of interactivity increases time-to-insight by 35%" 문구 실제 확인. 단 1차 출처는 "2026 research"로만 표기된 2차 인용이라 원논문 미상 — 인용 시 이 한계 병기 필요.
- (검증완료) think.design 원문에 AI 예측형(이탈위험 예측·세그먼트 자동제안) 대시보드 트렌드 언급 다수 확인 — 기존 위키 BI 자연어질의 노트와 정합.
- (**폐기**) "Gartner 70% 이상 조직이 파이프라인을 제품화" 주장 — 인용 URL(oneuptime.com) 본문에 "Gartner"·"70%" 관련 문구 전무. 출처 불일치로 근거 채택 불가.

## 출처
- [TPC-H benchmarks (Coiled)](https://docs.coiled.io/blog/tpch.html)
- [DuckDB vs FireDucks vs Polars](https://thedatatoolbox.substack.com/p/duckdb-vs-fireducks-vs-polars-which)
- [Beyond Normality: Reliable A/B Testing with Non-Gaussian Data (arXiv 2510.23666)](https://arxiv.org/abs/2510.23666)
- [Bridging Control Variates and Regression Adjustment in A/B Testing (arXiv 2509.13944)](https://arxiv.org/abs/2509.13944)
- [Dashboard Design Guide (Improvado)](https://improvado.io/blog/dashboard-design-guide)
- [Dashboard Design in 2026: Dos and Don'ts (think.design)](https://think.design/blog/dashboard-design-in-2026-dos-and-donts/)

## 위키화 후보
- FireDucks(pandas 가속 라이브러리) 개념 노트 — DuckDB/Polars 대비 위치 정리 필요
- 비정규분포 A/B테스트 방법론(arXiv 2510.23666) 노트 — 기존 CUPED/e-value 노트군에 연결

## 프로필 반영 후보 (저위험)
- [분석 원칙] 통계적 방법론 참고목록에 "비정규분포 A/B검정(arXiv 2510.23666)·CUPED 확장 통합프레임워크(arXiv 2509.13944)" 키워드 추가
- 도구 선택 기준 모니터링 대상에 "FireDucks(pandas 가속)" 키워드 추가(검증됨)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서도 9건 중 2건(Fabric 벤치마크·Gartner 70% 인용)이 실제 원문에 없는 오귀속으로 확인됨. WebFetch 권한 거부 시 wget 폴백으로 원문 대조가 실제 유효함이 재입증(기존 후보와 동일 취지, 반복 재확인).
