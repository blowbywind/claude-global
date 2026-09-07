---
date: 2026-08-30
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-30

Verification 성격상 임시파일 정리는 부수 작업이라 생략하고 본 임무(검증·종합) 결과를 출력합니다.

## 오늘 배운 것
- Claude Sonnet 5 가격은 2026-08-30 현재 공식 anthropic.com/pricing에 입력 $2/output $10로 표시됨(직접 fetch 확인) — 08/06 인사이트가 예상한 "8/31 이후 정가($3/$15) 복귀"와 배치되나, "9/1 인상 취소 확정" 여부는 미래 시점이라 오늘 스냅샷만으로 단정 불가. **9/1 이후 재확인 필요.**
- Anthropic이 Claude Enterprise용 실시간 DLP "inference hooks"(베타)를 출시했고, 컴플라이언스 API 커버리지를 Claude Cowork·Claude Code까지 확장함 — releasebot.io 원문에서 해당 두 항목 모두 확인됨.
- Anthropic이 과학자 대상 신규 "Claude Team plan for scientists" 발표: 1년간 무료 좌석 1만 개(스탠다드) + 프리미엄(5배 사용량) $15/월 — anthropic.com/news/expanding-support-for-scientists 원문 단락 직접 확인.
- OpenAI Codex 0.147.0: 이식 가능 Agent Plugins 설치·검색, MCP 2026-07-28 프로토콜(페이지네이션 디스커버리 등) 지원 — releasebot.io 원문 확인. 단 "Appshots" 기능은 해당 페이지에서 찾지 못해 미확인 처리.
- Google Antigravity: Gemini Enterprise 계정 SSO(Workforce Identity Federation, 2026-07-31)와 2.11.0의 생성형 UI(채팅 내 HTML 아티팩트 인라인 렌더링) 확인됨. GEMINI_API_KEY 직접 인증 지원은 해당 페이지에서 미확인.
- **폐기**: ①"Claude Code restricted mode·크로스세션 메시징·Enterprise 사용량 크레딧" — 인용 출처(releasebot.io/updates/anthropic) 원문에 해당 표현 전혀 없음, 근거 불충분. ②"GPT-5.6 Terra/Luna", "Gemini 3.6/3.7 Flash" — 기존 확립 필터(비1차 매체+이례적 소수점 코드네임) 재확인, 공식 도메인 미확인 상태 유지. ③DeepMind 재구성 취약성 논문, 개발툴 순위(logrocket) — 출처가 저신뢰 블로그 단일 소스로 교차검증 미실시, 채택 보류.

## 출처
- [Claude Pricing](https://www.anthropic.com/pricing) — Sonnet 5 $2/$10 직접 확인
- [Anthropic Release Notes](https://releasebot.io/updates/anthropic) — 과학자 지원 확대, inference hooks
- [Claude Release Notes](https://releasebot.io/updates/anthropic/claude) — inference hooks, 컴플라이언스 API 확장
- [Expanding our support for scientists](https://www.anthropic.com/news/expanding-support-for-scientists) — releasebot.io 임베드 원문에서 링크 확인
- [Codex Release Notes](https://releasebot.io/updates/openai/codex) — Agent Plugins, MCP 2026-07-28
- [Antigravity Release Notes](https://releasebot.io/updates/google/antigravity) — SSO, 생성형 UI 2.11.0

## 위키화 후보
- "Claude Mythos 5" — releasebot.io Claude 업데이트 원문(anthropic.com 소스 임베드)에서 발견된 신규 모델명. Fable 5/Opus 5/Sonnet 5/Haiku 4.5 라인업 외 사이버보안 특화 제한접근 모델(Project Glasswing 연계)로 추정, 기존 라인업 노트에 없어 추가검증 후 반영 가치 있음.

## 프로필 반영 후보 (저위험)
- Anthropic "Claude Team plan for scientists"(1만 좌석, 8/28 발표) — AI 동향 추적 시 참고 용어로 등록.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 후보가 이미 등록되어 있으며, 이번 검증도 그 유효성을 재확인함: 리안 제출 11건 중 3건 핵심주장이 인용 출처 원문에서 확인 안 돼 폐기됨)
