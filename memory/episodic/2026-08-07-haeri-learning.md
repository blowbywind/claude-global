---
date: 2026-08-07
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-07

## 오늘 배운 것
- **[검증 완료] Claude 모델 라인업 모순 해소**: platform.claude.com 원문 직접 fetch 결과, **Claude Opus 5·Sonnet 5·Fable 5·Mythos 5는 실제 존재하는 현행 공식 모델명**으로 확인(Legacy 섹션에 Opus 4.8/4.7/4.6, Sonnet 4.6/4.5가 별도 명시됨). 위키 내 2026-07-03 `ai-리서치-결과-검증-프로토콜.md`의 "환각 폐기" 판정은 모델 출시 이전 시점 판정으로, 이후 2026-07-26·08-05 재검증 노트가 맞았음. 리서치 산출물 6번 항목의 "모순"은 실제로는 이미 해소된 사안이었습니다.
- LLM-as-Judge가 코드번역 평가에서 인간 점수와 81.3% 상관(전통 ChrF++ 34.2% 대비 2배 이상) — judge 활용 근거 자료로 유효.
- Claude 프롬프트 구조화 원칙: "respond only with JSON" 패턴은 API-level JSON-schema 강제 모드로 대체되는 추세, 마크다운·번호목록보다 XML 태그(`<instructions>`, `<context>`, `<example>`) 구조가 더 안정적.
- 에이전트 CI/CD 회귀테스트: DeepEval(기존 채택 재확인) 외 Confident AI·LangSmith·Braintrust가 트레이스·툴콜·핸드오프 단위 회귀 게이트 제공.
- 벤치마크 포화: 2026년 조사 대상 60개 중 절반가량이 고포화 상태로 상위 모델 변별력 상실, 전문가 큐레이션 벤치마크가 크라우드소싱보다 수명 김.
- **[폐기]** "스키마 진화 비용 35% 감소" 항목은 원 arXiv 논문 미확인·재인용 수준이라 채택하지 않음(원 리서치 제안대로 보류).
- **[미확인 유지]** GPT-5.6(Sol/Terra/Luna), Gemini 3.6 Flash는 Anthropic 외 타사 모델명이라 이번 검증 범위 밖 — 2차 블로그 출처만 있어 여전히 미검증 상태로 둡니다.

## 출처
- [Models overview — platform.claude.com](https://platform.claude.com/docs/en/docs/about-claude/models/overview) (직접 fetch 검증)
- [Zylos Research](https://zylos.ai/research/2026-01-16-llm-evaluation-benchmarking/)
- [Level Up Coding](https://levelup.gitconnected.com/prompt-engineering-best-practices-for-structured-ai-outputs-ee44b7a9c293)
- [Claude by Anthropic 블로그](https://claude.com/blog/best-practices-for-prompt-engineering)
- [Confident AI](https://www.confident-ai.com/knowledge-base/compare/best-ci-cd-tools-testing-ai-agents-before-production-2026)
- [MLflow](https://mlflow.org/top-5-agent-evaluation-frameworks/)

## 위키화 후보
- `ai-리서치-결과-검증-프로토콜.md`(2026-07-03)에 "2026-07-26 공식문서 대조로 Opus5/Sonnet5/Fable5/Mythos5는 실제 모델로 재확인됨, 본 판정은 outdated" 각주 신설.

## 프로필 반영 후보 (저위험)
- Claude 프롬프트 구조화 시 XML 태그(`<instructions>`, `<context>`, `<example>`) 우선 원칙, 회귀테스트 프롬프트 작성에 적용.

## 승인 필요 (고위험)
- `ai-리서치-결과-검증-프로토콜.md`의 2026-07-03 "Sonnet5/Opus5 등 폐기 판정"이 실제로는 틀렸고 이후 2026-07-26·08-05 노트로 이미 뒤집혔음에도 원본 노트가 정정되지 않아, 리서치 봇들이 오늘까지도 동일 혼란(모델명 환각 의심)을 반복 재생산 중입니다(2026-07-22, 오늘). 원본 프로토콜 노트 정정 — 위키 콘텐츠 수정 범위라 사용자 확인 필요.
- (참고) WebFetch/WebSearch 툴이 이번 세션에서는 실제 정상 동작 확인됨 — 기존 인사이트(2026-07-16/22 "권한 차단 지속")가 최신 상태와 다를 수 있음, 재확인 권고.

## 신규 도구 후보
없음 (기존 제안된 "출처-대조-검증기"가 오늘 수동 검증으로 유용성 재입증됨 — 신규 제안 대신 기존 후보 채택 검토를 권고)
