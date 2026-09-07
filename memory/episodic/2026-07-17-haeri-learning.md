---
date: 2026-07-17
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-17

## 오늘 배운 것
- **명명 환각 재발 확인**: "Claude Sonnet 5", "GPT-5.6 Sol/Terra/Luna"는 기존 위키 `ai-리서치-결과-검증-프로토콜.md`(2026-07-03, kiel)에 이미 "Anthropic은 코드네임만 사용(버전숫자 없음), OpenAI GPT-5 계열에 Sol/Terra/Luna 서브티어 미존재"로 폐기 대상 등재된 사례와 정확히 동일. haeri의 이번 리서치(모델 출시 러시 항목 전체)는 **환각으로 판정, 폐기**.
- Kimi K3 · Grok 4.5(1.5T MoE) — 출처가 스니펫 수준이고 이번 세션 WebFetch/WebSearch 권한이 미승인 상태라 독립 재검증 불가 → **미검증 폐기**.
- "Reliability without Validity"(arxiv 2606.19544, judge 간 높은 상호일치≠실제 타당성, 길이·스타일 편향) — 출처는 구체적(논문ID)이나 원문 대조는 이번 세션에서도 불가 → **조건부 보류**(회귀테스트 judge 체크포인트 후보이나 검증 전 채택 금지).
- RAG Triad·RAGAS 언급은 기존 위키 노트(`RAG Triad Evaluation`, 2026-06-20, haeri)와 중복 — 신규 정보 아님, 채택 보류.
- Kappa 아키텍처·GPQA 포화·Agentic Time Horizons는 haeri 본인도 "미대조" 명시한 스니펫 기반이라 채택 보류.
- Anthropic 프롬프트 가이드(XML/role prompting 격하) — URL은 구체적이나 이번 세션에서 재확인 불가, 보류.

## 출처
- [ai-리서치-결과-검증-프로토콜](wiki/concepts/ai-리서치-결과-검증-프로토콜.md) — 명명규칙 폐기 판정 근거
- [리서치 환각 패턴 목록](wiki/concepts/리서치-환각-패턴-목록.md) — 동일 패턴 사전 등재 근거
- [RAG Triad Evaluation](wiki/concepts/rag-triad-evaluation.md) — 중복 확인 근거

## 위키화 후보
- 없음 (신규 검증 통과 개념 없음, 기존 프로토콜 재확인 성격)

## 프로필 반영 후보 (저위험)
- 없음 (검증 통과한 신규 전문 용어 없음)

## 승인 필요 (고위험)
- [반복 이슈] 웹리서치 산출물이 오늘도 기존 폐기 프로토콜(2026-07-03)과 동일한 모델명 환각(Sonnet 5, GPT-5.6 Sol/Terra/Luna)을 재생산함. 리서치 산출 직후 `ai-리서치-결과-검증-프로토콜.md` 자동 대조 게이트 강제화 제안(2026-07-16 제안과 동일 계열) — 사용자 확인 필요.
- WebFetch/WebSearch 툴 권한이 이번 세션에서도 미승인 재확인(2026-07-16 인사이트 미해결 지속). "인용 URL 원문 대조 필수화" 규칙을 승인해도 현재 설정으론 실행 불가 — 권한 부여 여부 결정 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] research-hallucination-filter — 웹리서치 산출물 수신 시 위키 `ai-리서치-결과-검증-프로토콜.md`/`리서치-환각-패턴-목록.md`를 자동 grep 대조해 명명규칙 위반 클레임을 기계적 폐기하는 사전필터(현재 수작업 반복 중).
