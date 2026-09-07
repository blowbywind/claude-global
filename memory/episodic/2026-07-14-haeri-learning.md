---
date: 2026-07-14
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-14

## 오늘 배운 것
- **골든셋 CI 게이트 기준선 갱신 방식**: 고정 임계치가 아니라 롤링 7일 프로덕션 관측치로 움직여야 모델·프롬프트 드리프트에 따른 정상 변동을 오탐하지 않음 — 기존 위키 노트(골든셋-ci-게이트-드리프트-판정-기준)에 없던 세부사항이므로 추가 가치 있음
- **CI 스위트 이원화**: Fast tier(결정론적 체크, 30초 이내, 전 커밋 실행)와 Slow tier(LLM judge 전체 회귀, PR에서만)로 분리하면 대기시간을 줄이면서 회귀 탐지력을 유지 — 회귀 테스트 리뷰 체크포인트 반영 가치
- **Position bias 완화 3종 세분화**: 기존에 아는 "응답순서 랜덤화" 외에 ①swap augmentation(양방향 평가 후 불일치 시 tie 처리) ②calibration prompting(순서 무관 명시 지시) ③CoT forcing(판정 전 근거 서술 강제)로 구체화됨
- **골든 데이터셋 설계 우선순위**: 프레임워크·지표 선택보다 20~100개 고품질 예시를 실패유형별 태깅해 선별하는 큐레이션이 더 중요한 자산 — 기존 golden.md의 "100+ 예시"를 구체화
- ⚠️ **검증 후 배제**: "Jest는 러너 레벨 재시도가 없어 실행 이력 클러스터링만이 유일한 판별법"이라는 주장은 사실관계 오류입니다. Jest는 jest-circus 러너에서 `jest.retryTimes()`로 러너 레벨 재시도를 이미 지원합니다(수년 전부터). 이 전제가 틀렸으므로 해당 항목은 채택하지 않았습니다. WebFetch 권한 미승인으로 원문 재확인은 못 했으나, 제 테스트 도구 지식과 직접 배치되어 보류 처리했습니다.

## 출처
- [Ultimate CI/CD LLM Evaluation Guide](https://latitude.so/blog/ultimate-ci-cd-llm-evaluation-guide)
- [CI/CD LLM Eval with GitHub Actions](https://futureagi.com/blog/ci-cd-llm-eval-github-actions-2026/)
- [LLM Eval Golden Set Design](https://futureagi.com/blog/llm-eval-golden-set-design-2026/)
- [Position Bias in LLM Judges](https://mbrenndoerfer.com/writing/position-bias-in-llm-judges)
- [Evaluating LLM Judge Bias Mitigation](https://futureagi.com/blog/evaluating-llm-judge-bias-mitigation-2026/)

## 위키화 후보
- Fast/Slow tier CI 평가 분리 패턴(결정론적 30초 vs PR 전용 LLM judge) — 골든셋 CI 게이트 노트와 별개로 신규 노트 가치 있음
- Position bias 완화 3종 기법(swap augmentation·calibration prompting·CoT forcing) — 기존 "다중 모델 패밀리 judge 앙상블" 노트의 보완 노트로 가치 있음

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "롤링 베이스라인(고정 임계치 대신 7일 관측치 갱신)" 용어 추가
- 회귀 테스트 리뷰 체크포인트에 "swap augmentation / calibration prompting / CoT forcing" 세부 편향완화 용어 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] jest-retry-flaky-audit — jest.retryTimes()·실행 이력 기반으로 플래키 테스트와 실제 회귀를 구분해 리포트하는 회귀 테스트 보조 스킬
