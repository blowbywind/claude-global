---
date: 2026-06-18
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-06-18

## 오늘 배운 것

- **Context Engineering이 Prompt Engineering을 대체 중**: 프롬프트 문구보다 모델에게 "무엇을" 줄지가 핵심. LangChain의 4전략 — write(외부 저장), select(RAG 검색), compress(요약), isolate(컨텍스트 분리). 에이전트 테스트 설계 시 직접 적용 가능. ([출처](https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering))

- **LLM 추론 성능은 ~3,000 토큰에서 저하 시작**: 실무 최적 구간은 150~300 단어. 테스트 프롬프트가 너무 길면 오히려 결과 품질이 떨어짐. ([출처](https://pecollective.com/blog/prompt-engineering-best-practices/))

- **추론 모델에서 "단계별로 생각해" 역효과**: Claude Opus 4.8, GPT-5.5, Gemini 3.5 같은 최신 추론 모델은 내부 CoT를 자체 수행하므로, 수동 CoT 삽입이 오히려 성능 저하. ([출처](https://thomas-wiegold.com/blog/prompt-engineering-best-practices-2026/))

- **LLM-as-Judge 인간 판단과 80~90% 일치, 비용 500~5000배 절감**: AI 출력 자동 검증(회귀 테스트)에 활용 가능한 성숙한 기법. ([출처](https://futureagi.substack.com/p/llm-evaluation-frameworks-metrics))

- **에이전트 평가 3대 지표 등장**: `TrajectoryAccuracy`(단계 경로 정확도), `ToolCorrectnessJudge`(툴 호출 정확도), `TaskCompletionJudge`(최종 목표 달성 여부). 오토봇 에이전트 테스트 기준으로 활용 가능. ([출처](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc))

- **데이터 파이프라인 Bronze→Silver→Gold 레이어**: 모듈형 추출 + 스키마 기반 변환 + 독립 오케스트레이션이 2026 ML 파이프라인 표준. 데이터 드리프트 감지는 Evidently AI 권장. ([출처](https://skyvia.com/blog/ai-data-pipeline/))

## 출처

- [Prompt Engineering Best Practices 2026 — Thomas Wiegold](https://thomas-wiegold.com/blog/prompt-engineering-best-practices-2026/)
- [Prompt Engineering Best Practices — PE Collective](https://pecollective.com/blog/prompt-engineering-best-practices/)
- [LLM Evaluation in 2026 — Medium/Milind Nair](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc)
- [LLM Evaluation Frameworks — FutureAGI Substack](https://futureagi.substack.com/p/llm-evaluation-frameworks-metrics)
- [AI Data Pipeline 2026 — Skyvia](https://skyvia.com/blog/ai-data-pipeline/)
- [Context Engineering vs Prompt Engineering — Elastic](https://www.elastic.co/search-labs/blog/context-engineering-vs-prompt-engineering)
- [June 2026 LLM Release Roundup — DEV Community](https://dev.to/vjswamy/latest-ai-model-releases-june-2026-roundup-49j5)

## 위키화 후보

- **Context Engineering**: 프롬프트 문구가 아닌 컨텍스트 구조(write/select/compress/isolate)로 LLM 성능을 제어하는 설계 패러다임
- **Agent Evaluation Metrics**: TrajectoryAccuracy · ToolCorrectnessJudge · TaskCompletionJudge — 에이전트 품질 측정 3대 지표

## 프로필 반영 후보 (저위험)

- AI 출력 검증 시 LLM-as-Judge 패턴 활용 가능 (인간 판단 80~90% 일치, 대규모 회귀 테스트에 적합)
- 에이전트 테스트 작성 시 TrajectoryAccuracy / ToolCorrectnessJudge / TaskCompletionJudge 3지표를 체크리스트 기준으로 참조

## 승인 필요 (고위험)

_없음_
