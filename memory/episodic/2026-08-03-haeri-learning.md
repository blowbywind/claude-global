---
date: 2026-08-03
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-03

## 오늘 배운 것
- 골든셋 CI 게이트 비판(스모크 테스트 수준 그침, 데이터셋 비대표성·임계치 미보정·judge 노이즈 문제)과 "프로덕션 샘플/adversarial/edge case/failure replay 4버킷" 구성 권장안은 기존 위키의 골든셋·Kappa·롤링베이스라인 노트와 겹치지 않는 신규 실무 관점으로 확인 — 회귀 테스트 리뷰 체크포인트에 추가할 가치 있음
- **[검증 결과] 산출물 5개 출처 중 4개가 재순환 URL**: lxt.ai(벤치마크 포화)·dataforest.ai(Zero-ETL)는 2026-08-01 노트에서 이미 동일 URL로 "기존 위키(gpqa-벤치마크, 파이프라인-제품화-sla-트렌드)와 완전 중복"으로 채택 보류된 소스이며, k2view.com(컨텍스트 엔지니어링)은 2026-06-07 `context-engineering.md`와, dev.to(CoT)는 2026-06-20 `llm.md`와 완전 중복 확인됨 → 오늘 산출물의 "신규 발견" 5건 중 4건은 실질적 신규가 아님
- 수치 주장(벤치마크 60개 중 절반 포화, CoT 61%/15~40% 향상, 프롬프트 엔지니어링 시장 $6.95B, DSPy 시장확대)은 WebFetch/WebSearch 차단 지속으로 원문 대조 불가 — 2026-08-01 동일 사유로 이미 채택 보류된 전례와 일치, 이번에도 폐기
- 모델명 환각(GPT-5.6 Sol/Terra/Luna, Claude 5 계열)은 해리가 이미 배제 처리 — 검증자 입장에서도 배제 확정, 신규 위키 반영 대상 아님

## 출처
- [LLM Eval: Golden Set Design 2026](https://futureagi.com/blog/llm-eval-golden-set-design-2026/) — 골든셋 4버킷·스모크테스트 비판 항목만 채택
- (교차검증용 기존 위키) `gpqa-벤치마크.md`(2026-07-06), `파이프라인-제품화-sla-부여-트렌드.md`(2026-07-19), `context-engineering.md`(2026-06-07), `llm.md`(2026-06-20), `없음-핵심-주장-전부-기존-위키-노트와-중복-확인됨...md`(2026-08-01)

## 위키화 후보
- "골든셋 4버킷 구성(프로덕션 샘플/adversarial/edge case/failure replay) + 스모크테스트 수준 비판" — 회귀 테스트 리뷰 체크포인트 산하 신규 개념 노트

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "골든셋 4버킷 구성·스모크테스트 수준 비판" 용어 추가

## 승인 필요 (고위험)
- **웹리서치 URL 재순환 실증**: 오늘 산출물 5건 중 4건이 2026-06~08월 기존 학습 노트와 동일 URL·동일 개념으로 중복 확인됨. 리서치 위임 워크플로(`web-research-delegation.md`)에 "신규 URL vs 과거 사용 URL 자동대조" 게이트 추가 제안 — 규칙 변경이라 사용자 확인 필요. (WebFetch/WebSearch 권한 미해결 문제는 2026-07-16 이후 반복 확인된 기존 이슈로, 오늘 별도 재기재하지 않음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] 리서치-중복-URL-탐지 — 신규 웹리서치 산출물의 출처 URL을 과거 학습 노트(episodic/*, wiki sources)와 자동 대조해 재순환 비율을 표시(기존 "출처-대조-검증기"는 원문-주장 일치를 보나, 세션 간 URL 재사용 여부는 별도 미탐지 영역)
