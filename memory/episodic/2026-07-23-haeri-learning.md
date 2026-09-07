---
date: 2026-07-23
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-23

## 오늘 배운 것
- 검증 결과: 이번 세션에서도 WebFetch 권한이 차단되어(3건 시도 모두 permission 거부) 해리가 제시한 인용 URL 원문 대조가 불가능했습니다. 따라서 블로그성 2차 출처(dataforest.ai, digitalapplied.com, dev.to, datavlab.ai, medium.com, futureagi.com) 기반 신규 주장은 원문 확인 없이 채택할 수 없어 전부 "미검증"으로 보류합니다.
- 예외적으로 인정 가능한 항목: LLM-judge 편향 5종(position/verbosity/self-preference/format/calibration drift)과 완화책(응답순서 랜덤화·다중 judge 앙상블·주기적 재캘리브레이션)은 기존 위키(`judge-신뢰도-정량화`, `position-bias-완화-3종-기법`)에 이미 검증·반영된 내용과 정합하므로 재확인 수준으로만 인정, 신규 채택 아님.
- arXiv 2510.12462은 arXiv ID 자체는 형식상 유효(2025년 10월 제출 범위)하나, 이번 세션에서 원문 재대조가 불가해 "judge 6종·편향 11유형·완화전략 4종·파인튜닝 시 성능저하" 세부 수치는 미검증 상태로 보류합니다.
- 모델명 환각(Sonnet 5, GPT-5.6 Sol/Terra/Luna, Kimi K3, Gemini 3.6 Flash) 재발은 해리가 자체 폐기 처리했으며, 검증 결과도 동일하게 폐기가 타당함을 확인했습니다(3회+ 연속 패턴).
- 결론: 이번 라운드는 원문 미대조로 인해 새로 채택 가능한 검증완료 사실이 없습니다.

## 출처
- (검증 미완료로 신규 채택 없음 — 해리 보고 원출처는 위 본문 참조)

## 위키화 후보
- (없음 — 신규 검증완료 개념 없음)

## 프로필 반영 후보 (저위험)
- (없음)

## 승인 필요 (고위험)
- WebFetch/WebSearch 툴 권한 차단이 2026-07-16→07-22→07-23까지 4회 연속 확인됨. "인용 URL 원문 대조 필수화" 규칙을 승인해도 현재 설정으론 검증 자체가 구조적으로 불가능한 상태이므로, 권한 부여 여부를 이번엔 결정해 주시기 바랍니다(미결정 시 매 세션 동일 문제 반복 예상).

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 07-22에 제안한 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재하나, WebFetch 권한 차단으로 실행 불가한 상태는 동일)
