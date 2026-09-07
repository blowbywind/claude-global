---
date: 2026-09-06
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-09-06

## 오늘 배운 것
- LLM-as-Judge 21개(9개사)·118 run·약 54.1만 건 판정 대규모 검증에서 kappa deflation(정확일치율-Cohen's kappa 괴리 33~41%p)과 "테스트-재검사 신뢰도 >0.95 + position bias >0.10" 공존(일관성-편향 역설)을 확인 — 원문 대조 완료(arXiv 2606.19544, 제목·저자·수치 100% 일치). 회귀테스트 체크포인트에 "judge 신뢰도=정확일치율 단독판단 금지, kappa+position bias 병행확인" 반영 권고.
- LLM 벤치마크 오염·주석오류로 인한 construct validity 문제를 다루는 "structured capabilities model"이 잠재요인모델·스케일링법칙보다 OOD 예측력 우수함을 확인 — 원문 대조 완료(arXiv 2602.15532, 제목·초록 100% 일치).
- 검증 방법론: llm-stats.com(신규모델 출시설), medium.com(벤치마크 포화 수치), deepeval.com(평가 파이프라인·비용 수치) 3건은 wget 폴백으로도 본문 텍스트 확보 실패(JS 렌더링 SPA, 태그 제거 후에도 해당 문구 미검출) → 근거 불충분으로 전량 폐기. bigdataboutique.com(데이터 계약/schema registry)은 Confluent·스트리밍 도구 언급은 확인됐으나 "data contract" 표현 자체는 재확인 못해 개념(실재 기술)만 저신뢰로 유지.

## 출처
- [Reliability without Validity: A Systematic, Large-Scale Evaluation of LLM-as-a-Judge Models Across Agreement, Consistency, and Bias](https://arxiv.org/abs/2606.19544)
- [Quantifying construct validity in large language model evaluations](https://arxiv.org/abs/2602.15532)
- [Modern Data Platform 2026 (부분검증, 개념만 참고)](https://bigdataboutique.com/blog/modern-data-platform-2026)

## 위키화 후보
- "LLM judge 일관성-편향 역설(consistency-bias paradox)" 개념 노트 — 기존 position bias 노트와 연계

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "LLM judge 검증: 정확일치율 단독판단 금지, Cohen's kappa+position bias 병행확인" 기준 추가
- "구성타당도(construct validity)" 용어 추가 — 벤치마크 점수-실제역량 괴리 점검 시 참고

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 관련 후보 이미 다수 등록되어 중복 제안 생략)
