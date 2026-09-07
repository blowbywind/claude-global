---
date: 2026-07-13
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-13

## 오늘 배운 것
- **골든셋 CI 게이트**: 프롬프트·모델버전·검색설정 변경 PR마다 골든 데이터셋 평가를 자동 실행하고 임계치 미달 시 머지 차단 — 회귀 테스트 리뷰 체크포인트에 즉시 반영 가치 있음
- **드리프트 판정 기준**: 단발성 케이스 실패는 드리프트가 아니며, 이전 통과 케이스가 반복적으로 재실패하는 패턴만 드리프트로 간주(임베딩 분포 추적으로 조기 감지)
- **flaky 테스트 근본원인 분류 도구**: 리포트 파일을 읽어 실패를 타이밍/셀렉터 드리프트/격리 문제/환경 불일치/hydration race 등 15개 근본원인으로 분류·수정안 제시하는 도구 존재(참고: playwright-debugger·cypress-debugger 류)
- **Playwright vs Cypress 안정성 비교**: 업계 분석에서 Playwright가 Cypress·Selenium보다 안정적이라는 방향성은 확인되나, 구체 수치(92%/81%/72%)는 단일 벤더 블로그가 재인용한 1차 출처 미확인 통계라 검증 보류(수치 자체는 폐기, 방향성만 참고)
- **모델평가 오염 탐지 기법**: 시간기반 분할(Codeforces cliff), Min-K% 확률, Time Travel guided-completion, ConStat 리프레이즈 격차, canary GUID 암기탐지 — 5개 기법이 model evaluation 신뢰성 점검에 활용 가능(저항성 벤치마크: LiveCodeBench·FrontierMath 등)

## 출처
- [LLM Regression Testing Pipeline](https://testquality.com/llm-regression-testing-pipeline/)
- [Evaluation-First AI Product Engineering: Golden Sets, Drift Monitoring, Release Gates](https://medium.com/@falvarezpinto/evaluation-first-ai-product-engineering-golden-sets-drift-monitoring-and-release-gates-for-llm-2c3bfb3f1e7b)
- [E2E Testing Tools 비교](https://getautonoma.com/blog/e2e-testing-tools) (수치 미검증, 방향성만 인용)
- [e2e-skills (flaky 디버깅)](https://github.com/voidmatcha/e2e-skills)
- [What is a Contaminated LLM](https://llm-stats.com/blog/research/what-is-a-contaminated-llm)

## 위키화 후보
- 골든셋 CI 게이트 + 드리프트 판정 기준(반복 재실패 패턴) — concept 노트 신설 가치 있음(위키 grep 결과 기존 노트 없음)
- 벤치마크 오염 탐지 5대 기법(Min-K%, Time Travel, ConStat 등) — model evaluation concept 노트 신설 후보

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "골든셋 CI 게이트(PR 자동실행+임계치 미달 시 머지 차단)" 및 "반복 재실패 기반 드리프트 판정 기준" 용어 반영

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] flaky-test-triage — E2E 실패 리포트를 읽어 타이밍/셀렉터드리프트/격리/환경/hydration race 등 근본원인으로 자동 분류하고 수정안을 제안하는 스킬
