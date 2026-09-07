---
date: 2026-08-16
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-16

## 오늘 배운 것
- GPT-5.3-Codex 출시 확인(openai.com 1차 소스 직접 대조 완료): GPT-5.2-Codex의 코딩 성능 + GPT-5.2의 추론력을 하나로 통합, 기존 대비 25% 빠름. "자신의 학습·배포를 스스로 디버깅한 최초 모델"이라는 설명도 원문에서 확인.
- Codex(ChatGPT 로그인 세션 한정) 내 gpt-5.4·gpt-5.4-mini는 2026-08-31 은퇴 확정(developers.openai.com/codex/changelog 원문 "2026-07-31 GPT-5.4 and GPT-5.4 mini retire from Codex on August 31" 대조 완료), 후속은 gpt-5.6-terra/gpt-5.6-luna. API·API키 인증 세션은 영향 없음.
- OpenAI–Cerebras 파트너십 자체는 1차 소스로 확인(gpt-5.3-codex-spark, ChatGPT Pro 리서치 프리뷰, 128k 컨텍스트, 비-NVIDIA 최초 배포). 단 "TTFT 50%↓·라운드트립 오버헤드 80%↓" 구체 수치는 1차 changelog에 없어 폐기(2차 소스 releasebot.io만 존재).
- Google Antigravity v1.1.13(2026-08-14)·v1.1.10(2026-08-03) 원문 changelog 전문 대조 완료 — GEMINI_API_KEY 직접인증/`/codesearch` 폴백/trajectory truncation·DB증가 버그수정(v1.1.13), Gemini Enterprise·WIF/ADC 인증·`.git` 읽기전용 샌드박스(v1.1.10) 문구까지 원문과 일치.
- "GPT-5-Codex-Mini 신규 옵션(사용량 4배)" 주장은 help.openai.com·developers.openai.com 어디에도 근거 없어 폐기 — Codex-Spark와의 오귀속 추정.
- DeepMind "reasoning collapse" 완화 논문 주장은 skycrumbs.com 2차 요약뿐이라 기존 필터대로 계속 저신뢰 보류(이번에도 원문 미확인).

## 출처
- [Introducing GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/)
- [Codex Changelog](https://developers.openai.com/codex/changelog)
- [Google Antigravity Changelog](https://antigravity.google/changelog)

## 위키화 후보
- GPT-5.3-Codex 특징(자기학습 관여 최초 모델·25% 속도향상, 통합 배경) — 신규 개념 노트 가치
- OpenAI–Cerebras 파트너십(Codex-Spark, 비-NVIDIA 최초 배포) — 신규 개념 노트 가치

## 프로필 반영 후보 (저위험)
- 검증 필터 구체화 사례 축적: "1차 소스에 없는 구체 수치(%·배수)는 인용 시 자동 폐기" — 이번 세션 Cerebras TTFT 수치·Codex-Mini 주장 2건 폐기로 재확인

## 승인 필요 (고위험)
- gpt-5.4/gpt-5.4-mini가 2026-08-31 Codex(ChatGPT 로그인)에서 은퇴 확정 — ai-ops 봇 스폰 설정 중 OpenAI Codex 런타임이 해당 모델 ID를 참조하는지 점검 필요(있다면 gpt-5.6-terra/luna 마이그레이션 검토)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 동일 취지 후보 다수 기등록, 중복 제안 생략)
