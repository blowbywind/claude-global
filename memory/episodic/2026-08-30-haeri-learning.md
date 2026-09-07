---
date: 2026-08-30
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-30

## 오늘 배운 것
- Anthropic 현행 라인업(Fable 5·Opus 5·Sonnet 5·Haiku 4.5)과 Sonnet 5 정가 $2/$10은 직접 원문(JSON raw 데이터) 대조로 재확인됨 — 기존 위키(2026-08-08/08-12 확정 노트)와 일치, 신규 정보 아님.
- **[정정] 해리의 "오귀속 발견" 주장 자체가 오류로 확인됨**: 원문 raw 데이터(`releasedOn:"2026-07-24"`, `retirementNotBefore:"2027-07-24"`) 직접 대조 결과, Opus 5의 실제 출시일은 2026-07-24가 **맞고**, 2027-07-24가 retirement 최소보장일임. 해리가 이 둘을 뒤바꿔 "llm-stats.com이 오독했다"고 재정정했으나, llm-stats.com의 원래 서술이 옳았음. → 2차 검증자의 "정정"도 그 자체로 오류일 수 있어 원문 raw 데이터까지 재확인 필요함을 실증.
- LLM-judge 편향 논문(arXiv 2604.23178)은 실존하나, 인용된 "rubric order bias·score ID bias·reference answer score bias 3종, 프런티어 모델 50%+ 실패"는 초록 원문과 불일치(오귀속)로 **폐기**. 실제 초록은 style/position/verbosity bias 및 디바이어싱 전략 비교(Gemini 2.5 Flash 결합전략이 최고 비용효율)를 다룸.
- 벤치마크 오염 탐지 논문 2건(arXiv 2506.21614 "LastingBench", arXiv 2410.18966 오염탐지 가정 서베이)은 제목 대조로 실존 확인됨.
- 프롬프트엔지니어링 원칙(모델 의도 추론 대신 명시적 지시, 불확실성 인정 허용)은 claude.com 공식 블로그 원문 대조로 확인됨.
- Context engineering 4대 전략(promptitude.io), OpenAI/Gemini 8월 소식(blog.mean.ceo)은 원문 미대조/2차 소스로 **채택 보류**.

## 출처
- [Claude 공식 블로그 – 프롬프트 엔지니어링](https://claude.com/blog/best-practices-for-prompt-engineering) (직접 fetch 대조)
- [Anthropic 모델 라인업/수명주기](https://platform.claude.com/docs/en/docs/about-claude/models/overview) (직접 fetch, Opus 5 출시일 오귀속 정정 근거)
- [Judging the Judges (arXiv 2604.23178)](https://arxiv.org/abs/2604.23178) (직접 fetch, 실존확인이나 인용내용 불일치)
- [LastingBench (arXiv 2506.21614)](https://arxiv.org/abs/2506.21614) (직접 fetch, 제목 확인)
- [Contamination Detection Survey (arXiv 2410.18966)](https://arxiv.org/abs/2410.18966) (직접 fetch, 제목 확인)

## 위키화 후보
- "2차 검증자의 재정정도 오류 가능 — 원문 raw 데이터 직접 대조 필수" (오늘 Opus 5 출시일 사례로 실증, 기존 오귀속 계열 인사이트에 새 유형 추가)

## 프로필 반영 후보 (저위험)
- 인용 논문 검증 시 arXiv citation meta 태그(`citation_abstract` 등) 직접 grep 대조 기법

## 승인 필요 (고위험)
- (없음 — 기존에 이미 유사 제안 3건 이상 누적 대기 중, 추가 중복 제안 보류)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — "출처-대조-검증기" 계열 후보가 이미 3종+ 중복 등록되어 있음. 신규 추가보다 기존 후보 통합·채택 여부 결정이 먼저 필요해 보이며, 이는 별도 확인 사안)
