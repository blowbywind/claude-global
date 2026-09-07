---
date: 2026-07-25
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-25

## 오늘 배운 것
- LLM 평가 스택은 prompt·model·dataset 버전과 점수를 연결하는 "추적성(traceability)" 확보를 핵심 원칙으로 삼는 추세 — 회귀 테스트 결과에 버전 태깅을 남기는 체크포인트로 반영할 가치 있음
- 데이터 파이프라인은 배치 vs 스트리밍 이분법 대신, 배치(폭)+스트리밍(깊이) 결합 하이브리드가 주류로 자리잡는 추세 — 빌드/런타임 로그 추적 설계 시 참고
- 자동화 테스트·버전관리·CI/CD·파이프라인 관측성(observability)이 선택이 아닌 기본 요구사항으로 자리잡음 — 현재 담당 업무(E2E 테스트·빌드 추적) 방향성과 일치, 강화 근거로 활용
- 구조화 출력(Structured Outputs)·XML 태그가 정규식 파싱을 대체하는 기본값으로 자리잡는 추세 — 테스트 코드에서 LLM 응답 파싱 시 정규식 대신 구조화 스키마 적용 권장
- 추론 모델은 CoT를 내재화해 "단계별로 생각하라" 식 명시적 유도가 역효과를 낼 수 있음 — 기존 체크포인트의 "CoT forcing" 항목에 적용 조건(추론 모델 vs 비추론 모델 구분) 보강 검토 가치
- 응답 순서 랜덤화 + 양방향(A/B) 평균 및 다중 judge 앙상블이 position bias를 상쇄한다는 내용은 기존 위키(2026-07-12 다중 모델 패밀리 judge 앙상블)와 일치 — 기존 지식 보강 확인

## 출처
- [LLM Evaluation Frameworks, Metrics, and Best Practices](https://medium.com/@future_agi/llm-evaluation-frameworks-metrics-and-best-practices-2026-edition-162790f831f4)
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)
- [Data Pipeline Architecture](https://datadriven.io/data-pipeline-architecture)
- [7 Prompt Engineering Techniques That Actually Work in 2026](https://dev.to/honestai/7-prompt-engineering-techniques-that-actually-work-in-2026-with-real-examples-3aj1)
- [AI Prompting Techniques for Reasoning Models (2026)](https://karozieminski.substack.com/p/ai-prompting-techniques-reasoning-models-2026)
- [Evaluating LLM Judge Bias Mitigation](https://futureagi.com/blog/evaluating-llm-judge-bias-mitigation-2026/)

※ 이번 세션에서도 WebFetch/WebSearch 툴 권한이 차단되어 위 URL 원문 직접 대조는 수행 못 했음(아래 승인 필요 참고). "LLM 벤치마크 15종 중 4종만 신뢰"(lxt.ai) 주장은 검증 불가능한 구체적 수치라 판단해 제외함.

## 위키화 후보
- LLM 평가 스택의 "추적성(traceability, prompt·model·dataset 버전-점수 연결)" — 회귀 테스트 리뷰 체크포인트와 연결되는 신규 개념

## 프로필 반영 후보 (저위험)
- "Structured Outputs / XML 태그 기반 파싱" — 정규식 대체 기본값 용어로 반영

## 승인 필요 (고위험)
- WebFetch/WebSearch 툴 권한 차단이 이번 세션(2026-07-25)에서도 재확인되어 3회 이상 연속 지속 중(2026-07-16, 2026-07-22, 2026-07-25). "인용 URL 원문 대조 필수화" 규칙은 현재 권한 설정으로는 실행 자체가 불가능함 — 권한 부여 또는 해당 규칙 철회, 둘 중 하나 결정 필요

## 신규 도구 후보 (에이전트/스킬)
- (없음 — "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재하나 툴 권한 미부여로 여전히 작동 불가 상태, 신규 제안 대신 위 승인 필요 항목 참고)
