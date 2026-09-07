---
date: 2026-07-15
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-15

## 검증 요약
해리의 리서치 원문 중 정량 수치·구체 주장이 담긴 6건을 원문 fetch로 직접 대조했습니다. 그 결과 **3건은 인용 URL 본문에 해당 내용이 존재하지 않아 폐기**했습니다.

| 항목 | 판정 | 근거 |
|---|---|---|
| Promptfoo → OpenAI 인수설 | **폐기(허위)** | braintrust.dev 원문 전체 스캔 결과 "acquisition/OpenAI 인수" 언급 전무. 해당 글은 Braintrust가 자사를 Promptfoo 대안으로 홍보하는 경쟁사 비교 마케팅 글(2026-03-03 발행) |
| Constrained decoding 반복률 38.5%→12.3% | **폐기(허위)** | pecollective.com 원문에 해당 수치·용어("38.5", "12.3", "constrained decoding", "iteration rate") 전무 |
| faithfulness 2%p 하락→CI flaky, "Continuous Prompt Regression" | **폐기(허위)** | contextqa.com 원문에 해당 수치·용어 전무 |
| NeuroFlake (arXiv:2605.11482) | **부분 정정 후 채택** | 논문 실존 확인(2026-05-12 제출). 단 해리 서술("타이밍/인프라 신호 상관분석+자동 수정안 제시")은 논문에 없음 — 실제는 Discriminative Token Mining으로 concurrency/async 코드 토큰을 LLM attention에 주입하는 분류 기법(F1 69.34% vs 기존 SOTA 65.79%) |
| DeepEval 기술 스펙(50+ 지표, pytest 네이티브, v3.0 컴포넌트 평가) | **채택** | braintrust.dev 원문에서 사실관계 확인. 단 "DeepEval+Braintrust 업계표준 이원화" 프레이밍은 벤더 마케팅 관점이라 사실 주장에서 제외 |
| "정확 매칭 대신 정량 회귀 델타 측정" | **취지 채택** | testquality.com에 "exact regression deltas across accuracy, safety, format compliance" 확인(원문 표현은 "stable properties"와 다름, 패러프레이즈로 반영) |

LLM-augmented ETL, Gartner 60% 전망은 검증 예산(웹검색 5회) 초과로 미검증 — 내 역할(테스트/검증)과 직접 관련이 낮아 채택 보류.

## 오늘 배운 것
- 해리 리서치 9건 중 3건(33%)이 인용 URL 원문에 실제로 없는 허위/과장 주장으로 확인됨 — 리서치 산출물은 수치·고유 용어가 포함된 항목일수록 원문 직접 대조 없이는 신뢰하면 안 된다는 실증 사례
- NeuroFlake(arXiv:2605.11482): flaky 테스트를 neuro-symbolic 방식(Discriminative Token Mining, concurrency/async 코드 토큰 신호)으로 분류, F1 69.34%(기존 SOTA 65.79%), 코드 변형에도 강건(성능저하 4~7pp) — E2E flaky 테스트 분류 자동화 참고 기법
- DeepEval v3.0은 `@observe` 데코레이터로 컴포넌트(함수/리트리버/툴 호출) 단위 평가 지원, pytest 네이티브 CI 게이팅 — 회귀 테스트 CI 게이트 구현 시 참고 가능한 도구 스펙
- 회귀테스트는 exact match 대신 정확도·안전성·포맷 준수 등 정량 회귀 델타를 측정하는 방식이 권장됨 — 기존 골든셋 CI 게이트/드리프트 판정 체크포인트와 결합 가치

## 출처
- [NeuroFlake: A Neuro-Symbolic LLM Framework for Flaky Test Classification (arXiv:2605.11482)](https://arxiv.org/abs/2605.11482)
- [Best Promptfoo alternatives in 2026 (Braintrust, DeepEval 기술사실만 채택)](https://www.braintrust.dev/articles/deepeval-alternatives-2026)
- [LLM Regression Testing Pipeline (testquality.com)](https://testquality.com/llm-regression-testing-pipeline/)

## 위키화 후보
- NeuroFlake(neuro-symbolic flaky 테스트 분류, arXiv:2605.11482) — E2E 테스트 안정화 체크포인트 신규 개념 노트로 가치 있음

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "정량 회귀 델타(정확도·안전성·포맷 준수 등) 측정" 용어 추가

## 승인 필요 (고위험)
- 웹리서치 위임 워크플로에 "인용 URL 원문 직접 fetch 대조" 검증 단계를 필수화 제안 — 이번 검증에서 리서치 산출물 33%가 원문 미대조 상태로 허위였음을 실증. 워크플로 규칙 변경(web-research-delegation.md)이라 사용자 확인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] source-fact-check — 리서치 산출물의 인용 URL을 자동 fetch해 claim과 원문 텍스트 일치 여부를 대조·리포트하는 검증 스킬
