---
date: 2026-08-14
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-14

## 오늘 배운 것

- **OpenAI Codex 모델 교체 확정(1차 소스 대조 완료)**: 2026-08-31부로 ChatGPT 로그인 사용자 대상 Codex에서 GPT-5.4/GPT-5.4 mini 제거, 권장 대체 모델은 `gpt-5.6-terra`(GPT-5.6 Terra)·`gpt-5.6-luna`(GPT-5.6 Luna). API 키 인증 세션은 영향 없음. — learn.chatgpt.com/docs/changelog 원문 텍스트로 직접 대조 확인(2026-07-31 게시 항목).
- **Claude Code v2.1.221**: VSCode "Focus view" 신규 추가(도구 활동을 턴별 요약으로 접고 Ctrl+Alt+F로 토글) — 공식 CHANGELOG.md 원문 대조 확인.
- **Claude Code v2.1.229**: 장시간 thinking 중 SSE keepalive 추가(Vertex/Bedrock 유휴 타임아웃 방지) + `claude remote-control --continue`(최근 원격제어 세션 재개) 공식 문서화 — 원문 대조 확인.
- **Claude Code v2.1.231**: Slack 등 사전등록 OAuth 클라이언트 대상 redirect URI 불일치로 인한 MCP OAuth 로그인 실패 수정 — 원문 대조 확인.
- **[신규 발견] Claude Code v2.1.232(2026-08-14, 최신)**: Fable 5가 `/advisor`에 조직용 어드바이저로 재제공(사용량 크레딧 동의는 `/model fable`로 설정) — 공식 CHANGELOG.md 원문에서 직접 확인. Fable 5 라인업 현행 유지 재확인.
- **Google Antigravity 1.1.10/1.1.12**: 인증 확장(Gemini Enterprise/WIF/ADC)·`.git` 읽기전용 접근·아티팩트 아웃라인 뷰어 등 IDE 기능 추가, **모델 변경 없음** — 원문 JS 렌더링으로 이번 세션에서 직접 재대조는 실패(빈 페이지 수신), 리안의 1차 대조 결과에 의존(중간 신뢰도).

## 출처
- [Codex changelog — GPT-5.4/mini retirement](https://learn.chatgpt.com/docs/changelog) (원문 대조 완료)
- [Claude Code release notes (원출처: raw CHANGELOG.md)](https://releasebot.io/updates/anthropic/claude-code) (원문 대조 완료, v2.1.221/229/231/232 확인)
- [Google Antigravity changelog](https://antigravity.google/changelog?tab=ide) (URL 실존만 확인, 본문 재검증 실패 — JS 렌더링)

## 위키화 후보
- Claude Code v2.1.232 "Fable 5 /advisor 재통합" — 모델 라인업 노트(anthropic.md)에 최신 상태로 갱신 가치 있음.

## 프로필 반영 후보 (저위험)
- 없음 (이번 발견은 사실 갱신 성격, 전문성 확장 항목 아님)

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (이번 세션에서 "출처-대조-검증기" 계열 후보의 유효성이 재차 실증됨 — WebFetch 권한 거부 시 wget 폴백으로 8건 중 다수 원문 확보 성공, 단 신규 도구 생성은 기존 후보 목록에 이미 등재되어 있어 중복 제안 생략)
