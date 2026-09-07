---
date: 2026-08-10
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-10

## 오늘 배운 것
- **Claude Mythos 5 / Fable 5 라인업 실재 확인**(anthropic.com/claude/mythos, anthropic.com/pricing 원문 대조): Mythos 5는 2026-06-09 발표된 최상위 특화모델(사이버보안·생물학·헬스케어), vetted partner 한정 접근, $10/$50(백만 토큰). 2026-06-12 일시 이용중단("currently unavailable") → 2026-07-01 미국 정부 승인으로 일부 미국 조직 복구. Fable 5는 동일 베이스에 안전장치 강화한 일반 공개판(해당 도메인 질의는 Opus로 자동 라우팅), 동일 가격 $10/$50.
- **Anthropic 현행 4단계 라인업 1차 소스로 재확인**(anthropic.com/pricing, 2026-08-10 시점): Opus 4.8 $5/$25, Sonnet 5 $2/$10, Haiku 4.5 $1/$5, Fable 5 $10/$50. (단 "9/1부터 Sonnet 5 정가 $3/$15 전환" 주장은 1차 소스에 없어 **폐기**)
- **OpenAI Codex "GPT-5.4/5.4 mini 2026-08-31 폐기, GPT-5.6 Terra/Luna 대체" 주장은 원문 대조 결과 불일치 → 폐기**. 공식 deprecations 페이지(learn.chatgpt.com/api/docs/deprecations) 실제 테이블에는 `gpt-5.2-chat-latest`/`gpt-5.3-chat-latest` → `gpt-5.6-sol`(2026-08-10 종료)만 존재. "Terra"는 "Terraform"의 오탐, "Luna"는 무관 GitHub PR 문맥에서 나온 오검출.
- **Codex 신기능은 1차 소스(learn.chatgpt.com changelog)로 확인**: Appshots, 스레드 핀/포크, 플러그인 마켓플레이스, WebSocket 기반 원격 Code Mode 연결.
- **Google Antigravity 버전 정보 1차 소스로 확인**: 최신 2.6.0 / CLI 1.1.11(2026-08-07), CLI 1.1.5(2026-07-21)에서 "model slug pinning + subagent별 모델 지정" 기능 추가.

## 출처
- [Claude Mythos](https://www.anthropic.com/claude/mythos)
- [Anthropic Pricing](https://www.anthropic.com/pricing)
- [OpenAI/ChatGPT Codex Changelog](https://learn.chatgpt.com/docs/changelog)
- [OpenAI API Deprecations](https://learn.chatgpt.com/api/docs/deprecations)
- [Antigravity Changelog](https://antigravity.google/changelog)

## 위키화 후보
- Claude Mythos/Fable 5 타임라인(발표→수출통제 중단→복구, Project Glasswing) — 기존 위키 노트("권한제약으로 미확인" 상태)의 실제 갱신·완결 가치 있음.

## 프로필 반영 후보 (저위험)
- Antigravity "model slug pinning"(CLI 1.1.5+) — 모델 드리프트 방지 관련 조사 시 참고 키워드로 등록.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] 출처-대조-검증 — 이번 턴처럼 리서치 산출물의 인용 URL을 wget/grep으로 직접 대조해 환각 항목(이번엔 GPT-5.4 폐기/Terra·Luna 건)을 걸러내는 절차를 반복작업화. (기존 "출처-대조-검증기-개선안" 에이전트 제안과 중복 가능성 있어 통합 검토 권장)
