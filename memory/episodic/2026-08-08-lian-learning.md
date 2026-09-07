---
date: 2026-08-08
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-08

## 오늘 배운 것
- Anthropic 현행 라인업 직접 fetch로 재검증 완료: **Fable 5 / Opus 5 / Sonnet 5 / Haiku 4.5**가 현행이며, Opus 4.8·4.7·4.6·Sonnet 4.6·4.5·Opus 4.5는 문서 내 "Legacy models" 섹션으로 강등된 것 확인 (platform.claude.com/docs 본문 직접 대조). 기존 위키 인사이트(2026-07-02, "Opus 4.8"을 현행으로 기록)는 **정정 필요** — 이제 Opus 5가 현행.
- Sonnet 5 가격 확인: 정가 $3/$15(MTok), 2026-08-31까지 도입가 $2/$10 — 표 각주 4번에서 직접 확인됨.
- Codex(GPT-5.4 은퇴/GPT-5.6 컨텍스트), LangGraph 1.2.10, Antigravity v2.6.0/v1.1.11, MS Agent Framework GA 관련 리안 주장은 이번 세션 **재검증 실패**(WebFetch·WebSearch가 platform.claude.com 1건 이후 전 도메인에서 권한 차단) — 출처 URL 실존은 확인되나 본문 대조 불가로 **채택 보류**, 확정 학습 항목에서 제외.
- 검증 권한 차단이 이번에도 재현됨(기존 인사이트 web-research-delegation.md/에이전트 카탈로그의 "리서치-검증-권한-정합기" 이슈, 2026-07-16/22/29에 이은 2026-08-08 4번째 재현) — 세션마다 도메인별 개별 승인이 필요해 검증 봇 역할 자체가 구조적으로 막히는 상황.

## 출처
- [Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview) — 직접 fetch 검증 완료
- (아래는 리안 원 인용, 이번 세션 재검증 실패·참고용) https://learn.chatgpt.com/docs/changelog · https://releasealert.dev/github/langchain-ai/langgraph · https://pypi.org/project/langgraph/ · https://www.gradually.ai/en/changelogs/antigravity/ · https://www.infoq.com/news/2026/08/agent-framework-harness-ga/

## 위키화 후보
- Anthropic "Legacy models" 아코디언 섹션 위치를 모델 수명주기 확인 표준 지점으로 노트화

## 프로필 반영 후보 (저위험)
- Anthropic 현행 라인업 정정: Fable 5 / **Opus 5**(Opus 4.8 아님) / Sonnet 5 / Haiku 4.5

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 동일 이슈가 이미 카탈로그의 "리서치-검증-권한-정합기" 후보로 등록되어 있음, 4회째 재현되었으므로 신규 제안 대신 기존 후보 우선순위 상향을 사용자에게 별도 보고 권장)
