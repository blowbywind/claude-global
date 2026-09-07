---
date: 2026-08-19
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-19

## 오늘 배운 것
- linear probe로 judge hidden-state에서 Brier score 기반 uncertainty를 뽑아 재학습 없이 캘리브레이션하는 기법(arXiv 2512.22245, 원문 대조 완료) — judge-uncertainty-calibration 회귀 체크 참고용
- "Metacognitive Probe"(arXiv 2605.09844)가 확신-정답 정합성을 5개 행동축으로 분해하는 캘리브레이션 진단법 제시(원문 대조 완료)
- 오염 저항형 동적 벤치마크(arXiv 2605.19999 "Contamination-Resistant", arXiv 2502.17521 서베이 모두 원문 제목 대조 완료)가 정적 벤치마크의 대안으로 부상 — 회귀테스트용 벤치마크 선정 시 오염 리스크 고려 근거로 사용 가능
- Anthropic 공식 가이드: 복잡 프롬프트는 XML 태그로 instructions/context/examples 분리해 블렌딩 방지(claude.com 원문 대조 완료) — 테스트/위임 프롬프트 작성 시 적용
- 에이전틱 프롬프트는 역할·성공기준 외 "언제 멈추고 에스컬레이션할지" 경계 명시가 핵심(musketeerstech.com 원문 대조 완료) — 버그 픽스 위임 기준 문서화 참고
- **[검증 결과] 리서치 산출물 10건 중 2건 폐기**: ①"파이프라인 요인이 40~60% 더 큰 분산" 주장이 인용한 arXiv 2604.11662는 실제로 "Hidden Failures in Robustness: Why Supervised Uncertainty Quantification Needs Better Evaluation"이라는 무관한 논문(오귀속, 폐기) ②"91.8% 오염률 + SWE-bench Verified verbatim 재현을 OpenAI 감사가 확인" 통계는 llm-stats.com 원문에 해당 문구·수치가 존재하지 않음(수치 환각, 폐기). 반복 지적된 "모델명/통계 환각" 패턴이 오늘도 재현 확인됨.

## 출처
- [Calibrating LLM Judges: Linear Probes for Fast and Reliable Uncertainty Estimation](https://arxiv.org/abs/2512.22245)
- [The Metacognitive Probe: Five Behavioural Calibration Diagnostics for LLMs](https://arxiv.org/abs/2605.09844)
- [LLM Benchmark Datasets Should Be Contamination-Resistant](https://arxiv.org/abs/2605.19999)
- [Recent Advances in Large Language Model Benchmarks against Data Contamination](https://arxiv.org/abs/2502.17521)
- [Anthropic: Best practices for prompt engineering](https://claude.com/blog/best-practices-for-prompt-engineering)
- [Musketeers Tech: Prompt Engineering Best Practices](https://musketeerstech.com/blogs/prompt-engineering-best-practices/)
- [Mem0: Context Engineering for AI Agents](https://mem0.ai/blog/context-engineering-ai-agents-guide)
- [dataforest.ai: Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)
- [BigDataBoutique: Modern Data Platform 2026](https://bigdataboutique.com/blog/modern-data-platform-2026)

## 위키화 후보
- "Context Engineering"(mem0.ai, 원문 대조 완료) — 메모리 선별주입 표준화 개념, 신규 노트 가치 있음
- kappa/medallion 하이브리드 파이프라인 수렴 추세(dataforest.ai, 원문 대조 완료) — 기존 메달리온 노트에 보강 가능

## 프로필 반영 후보 (저위험)
- "인용 URL wget 원문 대조" 절차를 검증 표준 기법 용어로 반영(오늘도 오귀속·수치 환각 2건 적발로 유효성 재확인)

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)
