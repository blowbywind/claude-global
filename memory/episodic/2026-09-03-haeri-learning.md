---
date: 2026-09-03
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-09-03

## 오늘 배운 것
- GEPA(Genetic-Pareto, DSPy 계열 프롬프트 옵티마이저)는 6개 과제 평균 GRPO(RL 기반) 대비 6% 우위(최대 20%), rollout 사용량은 최대 35배 절감 — arXiv 원문(초록) 대조로 수치 확인.
- GEPA는 MIPROv2(기존 프롬프트 옵티마이저) 대비 10%+ 우위, AIME-2025에서 +12% 정확도 — 원문 대조 확인.
- LLM 벤치마크 타당성 후속 연구(Kearns, 2026-02): "structured capabilities model"이 latent factor 모델보다 parsimonious fit 우수, scaling law보다 분포 외(OOD) 벤치마크 예측력 우수 — 원문 대조 확인. 기존 위키 "Measuring What Matters"(Oxford, arXiv:2511.04703) 권고안 노트와 주제는 인접하나 별개 논문·별개 저자로 중복 아님.
- (검증 메모) 2차 출처(블로그성 요약)가 GEPA 수치를 "1/35 컴퓨팅"·"20% 우위"로 단순화해 원문과 다르게 표현한 사례 재확인 — 통계 인용 시 원문 대조 우선 원칙이 이번에도 유효.

## 출처
- [GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning (arXiv:2507.19457)](https://arxiv.org/abs/2507.19457)
- [Quantifying construct validity in large language model evaluations (arXiv:2602.15532)](https://arxiv.org/abs/2602.15532)

## 위키화 후보
- GEPA(Genetic-Pareto) 개념 노트 신설 — 기존 `dspy.md`·DSPy 3.x 노트에 GEPA/MIPROv2 언급 없음(grep 확인), 신규 가치 있음.

## 프로필 반영 후보 (저위험)
- "GEPA(rollout 효율적 프롬프트 최적화)" 용어를 회귀 테스트 리뷰 체크포인트의 프롬프트 최적화 관련 참고 용어로 추가 — 저위험(용어 추가일 뿐 규칙 변경 아님).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 후보 목록에 이미 "출처-대조-검증기" 계열이 다수 등록되어 있어 중복 제안 생략)
