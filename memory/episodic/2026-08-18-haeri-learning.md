---
date: 2026-08-18
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-18

## 오늘 배운 것
- **LLM-judge 비용효율 개선기법**: arXiv 2604.13717 "On Cost-Effective LLM-as-a-Judge Improvement Techniques"(Ryan Lail, Luke Markham) — PDF 원문 메타데이터(제목·저자) 직접 대조 완료, 실존 확인. 단 "앙상블 스코어링·태스크별 기준프롬프트·참조앵커링 4종 기법" 세부 목록은 제목·주제 일치 수준만 확인(본문 전수 대조는 미실시).
- **judge 불확실성 hidden-state linear probe**: arXiv 2512.22245 "Calibrating LLM Judges: Linear Probes for Fast and Reliable Uncertainty Estimation" — PDF 원문 대조로 제목·저자(6명) 확인, 08-08 인사이트와 정확히 일치. 재확증.
- **벤치마크 오염 탐지 "Excess Separability"(신규)**: techtimes.com 원문 본문 직접 대조, "Florian Braun"·"MAPR 2026(9th, Hue City 베트남)"·"residual stream" 고유명사 전부 실존 확인. 환각 아님, 신규 개념.
- **DSPy 3.x 프로덕션 성숙**: aiworkflowlab.dev 원문 본문 대조 완료 — "DSPy has matured...3.x release series...production-grade framework", optimizer가 metric 기준 프롬프트 공간 탐색 서술 확인. 프롬프트엔지니어링 패러다임 전환 주장 뒷받침됨.
- **[정정] Anthropic Opus 5 라인업 — 부분 오류 적발**: aitoolsreview.co.uk 원문 대조 결과 "Claude Opus 5, 2026-07-24 출시"는 확인되나, 리서치가 주장한 "Opus 4.1이 8/5 공식 은퇴"는 원문에 없음. 원문은 "Opus 5가 **Opus 4.8**을 대체"라고 명시(4.1이 아님, 은퇴일 언급 자체 없음). **모델버전 혼동/환각으로 판정, 해당 세부 주장 폐기.**
- **데이터 레이크하우스 3-tier 주장**: medium.com이 403 Forbidden으로 대조 불가 → 미검증, 채택 보류.

## 출처
- [On Cost-Effective LLM-as-a-Judge Improvement Techniques](https://arxiv.org/pdf/2604.13717)
- [Calibrating LLM Judges: Linear Probes for Fast and Reliable Uncertainty Estimation](https://arxiv.org/pdf/2512.22245)
- [Benchmark Contamination Detection... (Excess Separability)](https://www.techtimes.com/articles/324511/20260814/benchmark-contamination-detection-inside-ai-models-new-method-survives-rl-post-training.htm)
- [Production Prompt Engineering 2026 (DSPy)](https://aiworkflowlab.dev/article/production-prompt-engineering-2026-structured-outputs-prompt-chaining-dspy)
- [What's the Next Claude Model? (부분 정정 근거)](https://aitoolsreview.co.uk/insights/next-claude-model)

## 위키화 후보
- "Excess Separability"(residual stream 기반 벤치마크 오염 탐지, RL 후처리에도 생존) — 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- "DSPy 3.x 프로덕션급 성숙" 버전 정보 갱신(기존 dspy.md 보강).

## 승인 필요 (고위험)
- 모델명 환각 패턴 재발(오늘: "Opus 4.1 8/5 은퇴" 날조, 실제는 Opus 4.8 대체) — 리서치 산출물 내 모델명/버전 고유명사는 wget 원문 대조 없이는 채택 금지하는 게이트 정식화 제안(기존 07-16/07-22/08-11 제안과 동일 계열, 오늘 신규 실증 사례 추가).

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 제안이 오늘도 유효성 재입증됨, 중복 제안 생략)
