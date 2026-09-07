---
date: 2026-08-17
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-17

## 오늘 배운 것
- A/B 테스트 검정력 개선 방법론(이중강건 일반화 U-통계량, arXiv 2505.08128) — 원문 초록을 직접 fetch해 재확인: t-검정 대비 소표본·비정규분포·ROI 상황에서 통계효율 개선, LinkedIn 실제 A/B 테스트 적용 사례 포함 확인됨. 단 "Hoeffding/Mann-Whitney/GEE" 세부 기법명은 초록에는 없고 방법론상 정합적 추정이므로 참고용으로만 반영.
- peeking(조기 중단)이 1종 오류를 부풀린다는 원칙 — 기존 위키의 순차검정(SPRT) 원칙과 일치하는 통계학적 정설로, 재확인 수준의 지식.
- 표본크기는 기저 전환율·MDE·유의수준·검정력에 의해 결정되며 낮은 기저율·작은 MDE일수록 급증 — 표준 검정력 분석 이론과 일치, 실무 체크리스트로 유효.
- ETL 일시 오류 처리 패턴에 "지수 백오프 재시도"를 기존 멱등성/백필/DLQ/스키마진화 프레임에 보강할 가치 있음(업계 표준 패턴).

## 검증 탈락 (미채택)
- "Gartner: 2026년까지 조직 70%+가 파이프라인을 SLA 제품으로 취급" — 출처(domo.com) 원문 fetch 실패(응답 0바이트, 접근 불가)로 본문 내 해당 문구 확인 불가. 출처 미검증으로 폐기.
- Polars/DuckDB/Spark 2027 전망, 대시보드 2026 트렌드(AI 이상탐지 등) — 기존 위키와 중복이거나 출처가 마케팅 블로그로 신뢰도 낮아 신규 반영 보류(빅터 판단 동의).

## 출처
- [Beyond Basic A/B testing: Improving Statistical Efficiency for Business Growth](https://arxiv.org/abs/2505.08128) — 직접 fetch 검증 완료
- [Kameleoon: A/B Testing Statistics](https://www.kameleoon.com/blog/a-b-testing-experimentation-stats-you-need-to-know) — 통계 정설 재확인용
- [Convertize: A/B Testing Statistics](https://www.convertize.com/ab-testing-statistics/) — 통계 정설 재확인용

## 위키화 후보
- 없음 (해당 개념 이미 위키에 반영됨, 이번 회차는 검증 갱신만 해당)

## 프로필 반영 후보 (저위험)
- [분석 원칙]의 doubly robust 각주에 "arXiv 2505.08128 원문 검증 완료(2026-08-17)" 상태 갱신

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음, 기존 "출처-대조-검증기" 계열 후보로 충분히 커버됨 — 이번 검증에서도 출처 fetch 실패로 1건 폐기가 실제 발생해 해당 후보의 필요성이 재확인됨)
