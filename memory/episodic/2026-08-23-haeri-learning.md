---
date: 2026-08-23
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-23

## 오늘 배운 것
- (검증 완료) 리서치가 인용한 "GLM-5.2 Turbo·Gemini 3.7 Flash·Claude Opus 5" 등 8월 출시설은 원문(digitalapplied.com)에 없는 허위 모델명임을 WebFetch 원문 대조로 확인. 실제 확인된 8월 출시: Qwen3.8-Max(알리바바, 2.4T MoE, 8/2), FLUX 3 Video(8/4), Muse Spark 1.2·Muse Code(메타, 8/5), GPT-5.6 Sol·Luna(OpenAI, 8/6).
- LLM 평가 트렌드: MMLU 88%+ 포화로 GPQA 등 도메인특화 벤치마크로 이동 중이며, LiveCodeBench는 출시일 태깅으로 학습오염 없는 신규 문제만 평가에 사용(기존 위키 벤치마크 오염 노트와 개념 중복, 신규 등재 불필요).
- LLM-as-judge는 인간 판정 대비 80~90% 일치·500~5000배 저비용이나 포지션 편향 존재 — 자동 채점 도입 시 편향 보정 필요(개념은 기존 위키 judge 관련 노트와 중복).
- 에이전트 평가는 오프라인(고정셋 CI 회귀)+온라인(실트래픽 드리프트·탈옥 탐지) 이중 체계가 표준이며 LangSmith·Braintrust·Arize Phoenix·DeepEval·Ragas가 대표 프레임워크 — 이 역시 기존 위키 `오프라인-온라인-pr.md`(2026-07-29)와 개념 중복 확인, 신규 노트 불필요.
- (기각) "기업 78% AI 에이전트 파일럿, 프로덕션 도달 15% 미만" 통계는 원문(morphllm.com) HTTP 429로 대조 실패 — 과거 통계 환각 반복 이력 감안해 이번 학습 노트에서 폐기.
- (기각) 데이터 파이프라인 "자동 데이터 티어링" 트렌드 1건은 단일 마케팅성 출처(dataworkers.io)만 있고 교차 확인 소스가 없어 채택 보류.

## 출처
- [AI Model Releases August 2026 Tracker](https://www.digitalapplied.com/blog/ai-model-releases-august-2026-tracker)
- [LLM Benchmarks 가이드](https://www.lxt.ai/blog/llm-benchmarks/)
- [Complete Guide to Prompt Engineering 2026](https://www.promptitude.io/post/the-complete-guide-to-prompt-engineering-in-2026-trends-tools-and-best-practices)

## 위키화 후보
- (없음) 이번 리서치 핵심 항목이 전부 기존 위키 노트(벤치마크 오염, judge 편향, 오프라인/온라인 이중평가)와 개념 중복 확인됨. 신규 노트 대신 `리서치-환각-패턴-목록.md`에 "실존 URL·허위 모델명 오귀속" 사례 1건만 추가 갱신 제안.

## 프로필 반영 후보 (저위험)
- Qwen3.8-Max/GPT-5.6 Sol·Luna 등 2026년 8월 확인 모델명 갱신(리서치 시 최신 모델 인지용, 저위험)

## 승인 필요 (고위험)
- (비움)

## 신규 도구 후보 (에이전트/스킬)
- (비움) — "인용 URL 원문대조" 자동화(출처-대조-검증기 계열)는 2026-07-16부터 반복 제안·이미 후보 등록 상태이므로 재제안 생략, 채택 여부 판단만 남음(기존 자가학습 인사이트 참조)
