---
date: 2026-07-11
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-11

## 오늘 배운 것
- LLM-as-a-Judge가 사람 평가자와 약 85% 일치율을 보이며(사람 간 상호 일치율보다 높음), 100k건 평가를 시간 단위로 처리(사람은 약 52일 소요)해 2026년 표준 LLM 평가 방법으로 자리잡음 — 원 리서치의 "500~5000배 비용 절감" 수치는 출처에서 확인되지 않아 **폐기**하고 정성적 근거로 수정했습니다.
- 2026년 7월 프론티어 모델 근황(원문 대조 확인 완료): GPT-5.6 패밀리(Sol/Terra/Luna, 7/9 정식출시·ChatGPT 기본), xAI Grok 4.5(7/8 공개, 코딩 특화 저가 모델), Anthropic Claude Sonnet 5(6/30, 기본 모델 전환). 단 단일 블로그(felloai.com) 출처이며 Anthropic/OpenAI/xAI 공식 발표는 별도 미대조 상태입니다.
- DSPy 3.0의 프롬프트 자동 컴파일 동향은 위키에 이미 `dspy.md`로 문서화되어 있어 신규 학습 아님(중복 확인).
- DeepEval(오픈소스 LLM-as-a-Judge 프레임워크, 50개+ 지표)은 위키에 별도 노트가 없어 신규 개념으로 확인됩니다.
- 나머지 항목(테스트 생성 AI 자동화, ML 데이터 파이프라인 5단계, 실시간 파이프라인 전환 추세)은 출처 URL은 존재하나 이번 세션에서 원문 대조는 하지 않았습니다 — 사용 전 추가 검증 권장.

## 출처
- [Why LLM-as-a-Judge Is the Best LLM Evaluation Method](https://www.confident-ai.com/blog/why-llm-as-a-judge-is-the-best-llm-evaluation-method) — 85% 일치율, 정성적 비용/속도 비교 원문 확인
- [Best AI Models 2026 근황](https://felloai.com/best-ai-models/) — Grok 4.5·GPT-5.6·Claude Sonnet 5 언급 원문 확인
- [DeepEval: LLM-as-a-Judge](https://deepeval.com/blog/llm-as-a-judge) — 미대조(원 리서치 인용만)
- [Prophecy: ML 데이터 파이프라인](https://www.prophecy.ai/guides/how-data-pipelines-power-machine-learning-from-raw-data-to-model-ready-features) — 미대조(원 리서치 인용만)

## 위키화 후보
- DeepEval(GEval·DAGMetric 등 LLM-as-a-Judge 오픈소스 프레임워크) — E2E 검증 파이프라인 후보 도구로 신규 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- LLM-as-Judge 채점 시 편향 통제(bias control) 필요성 — 회귀 테스트 리뷰 시 체크포인트로 반영 가치

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] llm-judge-bias-check — Jest/Cypress 자동생성 테스트에 LLM-as-Judge 채점을 결합하기 전, 편향 통제 방법(다중 판정기 교차검증 등) 점검 체크리스트. 신규 실험 성격상 도입 여부는 사용자 승인 후 별도 진행 필요.
