---
date: 2026-08-15
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-15

## 오늘 배운 것

- **구조화 출력(JSON/스키마)은 구문 레벨에서 해결된 문제**: 정규식으로 LLM 출력을 정제하고 있다면 기술부채 신호 — 회귀 테스트에서 출력 검증 로직이 정규식 파싱이면 스키마 검증(zod/pydantic 등)으로 교체 권고 근거로 사용 가능. (원문 대조 확인)
- **Few-shot 예시 개수 가이드라인 수치 확정**: 3~5개가 최적, 3개 미만은 불충분, 8개 초과는 토큰 낭비 대비 이득 없음 — 프롬프트 회귀 리뷰 체크포인트에 구체 수치로 반영 가능. (원문 대조 확인)
- **배치 vs 스트리밍 비용 비교 수치**: 신선도 요구가 낮은 경우(대시보드 아침 1회 갱신 등) Snowflake/BigQuery 야간 배치가 스트리밍 파이프라인 유지보다 **10~100배 저렴** — 기존 "계층별 배치/스트리밍 하이브리드 판단" 노트(2026-08-13)를 구체 수치로 보강. (원문 대조 확인)
- **벤치마크 타당성(construct validity) 논문 2건 실체 확인**: arXiv:2511.04703("Measuring What Matters")은 전문가 29명이 벤치마크 445개를 리뷰해 타당성 저해 패턴과 8개 권고안 제시(원문 abstract에서 정확히 일치 확인). arXiv:2602.15532는 "structured capabilities model"이 잠재요인모델보다 적합도 우수, **스케일링 법칙 대비** 분포외(OOD) 예측력 우수(리서치 원문의 "잠재요인모델 대비 OOD 우수" 표현은 부정확 — 정정: 비교 대상은 스케일링 법칙).
- **검증 실패 사례 2건 적발** — 검증자 역할상 중요: ①"LLM-judge 편향 정량치(포지션 10~15%p, 자기선호 10~25%)"는 인용된 원문(arXiv:2604.23178)을 직접 대조한 결과 오히려 **정반대**(해당 논문은 포지션 편향을 "무시할 수준(≤0.04)"으로, 자기선호 편향은 "모델군에 일관되게 묶이지 않는 이질적 패턴"으로 보고) — 폐기. ②"FairJudge(2026-02)" 관련 주장은 인용 출처(futureagi.com/blog/llm-as-a-judge/) 원문에 "FairJudge" 언급 자체가 없음 — 폐기(오귀속 추정).
- GSM8K/GPT-5.3 Codex 99%, LiveCodeBench 상세, 레이크하우스 3계층 항목은 원문(Medium)이 403으로 차단되고 WebFetch도 이번 세션 재차 권한 미승인 — 미검증 상태로 전량 폐기.

## 출처
- [Structured Output for LLMs in 2026](https://projectsupply.in/blog/structured-output-llm-2026)
- [Prompt Engineering Best Practices for LLMs](https://naeemahsmall.com/blog/prompt-engineering-best-practices-llms)
- [Stream Data Model and Architecture](https://addepto.com/blog/stream-data-model-and-architecture/)
- [arXiv:2511.04703 — Measuring what Matters: Construct Validity in LLM Benchmarks](https://arxiv.org/abs/2511.04703)
- [arXiv:2602.15532 — Quantifying construct validity in LLM evaluations](https://arxiv.org/abs/2602.15532)
- [arXiv:2604.23178 — Judging the Judges (교차대조로 원 리서치 주장 반박용 출처)](https://arxiv.org/html/2604.23178)

## 위키화 후보
- "Measuring What Matters" 8개 권고안(벤치마크 타당성 검토 체크리스트) — 신규 개념노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "Few-shot 3~5개 최적(3개 미만 불충분/8개 초과 낭비)" 수치 반영.
- 회귀 테스트 리뷰 체크포인트에 "정규식 기반 LLM 출력 파싱=기술부채 신호, 스키마 검증으로 대체 권고" 기준 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 세션에서 실제로 인용 2건(judge 편향 수치, FairJudge)의 원문 오귀속을 적발함. 기존 후보 유효성 재확인됨(정식 도입 여부는 사용자 결정 필요).
