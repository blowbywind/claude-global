---
date: 2026-08-31
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-31

## 오늘 배운 것
- **2026년 8월 모델 출시 원문 직접 대조 완료**: Gemini 3.7 Flash(8/13, Google), Grok 4.6(8/6, xAI), Qwen3.8 Flash(8/26, Alibaba) — llmgateway.io/timeline을 wget으로 직접 받아 날짜까지 정확히 일치 확인(리서치 원 주장 그대로 채택 가능).
- **검증 캐치(중요)**: futureagi.com 산출물 중 "DeepEval/Promptfoo로 200~500개 골든셋 단위테스트+4단계 파이프라인" 및 "LLM-as-Judge 평가당 수 센트 미만·분당 수천 건, 사람평가 5~50달러" 두 주장을 원문 wget 대조한 결과, 해당 서술이 본문에 전혀 존재하지 않음(DeepEval은 무관한 nav 링크 1건 언급뿐, Promptfoo·비용 수치 0건) — **폐기**. 인용 URL은 실재하나 주장이 원문에 없는 오귀속 패턴이 이번 세션도 재현됨(2026-07-16 이후 누적 확인 사례에 추가).
- arXiv 2601.13658(미지 시간대 사실 생성 기반 오염방지 평가) — 이미 2026-08-21 위키 노트로 채택된 기존 지식과 동일, 신규성 없음(중복 확인, 폐기 아님).
- 에이전트 평가의 "3계층(end-to-end/trajectory-level/component-level) + Tool Correctness" 프레이밍(confident-ai.com, 해리가 원문 fetch 직접 대조 완료 표기) — 기존 위키 `agent-evaluation-metrics.md`(TrajectoryAccuracy/ToolCorrectnessJudge/TaskCompletionJudge)와 개념 중첩되나 "계층" 관점은 보강 가치 있음.
- LiveCodeBench·reasoning_effort 파라미터·DSPy 3.0 주장은 이번 세션 원문 대조를 못 해(검증 예산 소진) 채택 보류 — 폐기는 아니나 신뢰도 확정 불가로 프로필/위키 반영 제외.

## 출처
- [LLM Gateway Timeline](https://llmgateway.io/timeline) — wget 직접 대조, 8월 모델 출시일 확인
- [Beyond Known Facts (arXiv 2601.13658)](https://arxiv.org/abs/2601.13658) — 기존 위키 노트 재확인용
- [Evaluating LLM Systems: Metrics & Benchmarks 2026](https://futureagi.com/blog/evaluating-llm-systems-metrics-benchmarks-2026/) — wget 대조 결과 핵심 주장 2건 원문 불일치로 폐기 처리
- [Agent Evaluation Complete Guide](https://www.confident-ai.com/blog/llm-agent-evaluation-complete-guide) — 해리 원문 fetch 대조 인용(교차 확인만, 재검증 안 함)

## 위키화 후보
- 없음(신규 개념 전부 기존 노트와 중복이거나 원문 대조 실패로 폐기됨)

## 프로필 반영 후보 (저위험)
- 에이전트 평가 "3계층(end-to-end/trajectory/component)" 용어 — 기존 프로필의 TrajectoryAccuracy 계열 표현에 보강

## 승인 필요 (고위험)
- (없음 — "인용 URL-원문 불일치 대조 필수화" 제안은 2026-07-16 이후 동일 내용으로 이미 다수 상정·대기 중이라 재상정 생략)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 출처-대조-검증기 계열 후보가 이미 6건 중복 등록돼 있어 추가 제안 생략, 기존 후보 채택 여부만 확인 필요)
