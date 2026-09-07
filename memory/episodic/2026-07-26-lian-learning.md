---
date: 2026-07-26
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-26

## 오늘 배운 것

- **Anthropic 현행 최상위 라인업 갱신 확정**(docs.anthropic.com 직접 fetch로 교차검증 완료): `Claude Opus 5`(agentic coding·엔터프라이즈용, effort 기본 high), `Claude Sonnet 5`(속도·지능 균형, 컨텍스트 1M), `Claude Fable 5`(가장 널리 배포된 최상위 모델, 2026-06-09 GA)/`Claude Mythos 5`(Project Glasswing 초대전용)가 현행. `Opus 4.8/4.7/4.6`, `Sonnet 4.6/4.5` 등은 공식 문서상 "Legacy models" 섹션으로 강등 확인.
- **기존 인사이트 갱신 필요**: 2026-07-02 기록한 "Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5 = 현행 라인업"에서 `Opus 4.8`은 legacy로 이동, `Opus 5`가 신규 최상위 agentic coding 모델로 교체됨.
- **Claude Code**: Week 27(2026-06-29~07-03) 공식 digest에서 `Claude Sonnet 5`가 Pro/Team Standard/Enterprise 구독 기본모델로 전환 확정(직접 fetch 검증). 같은 주 서브에이전트가 기본값으로 백그라운드 실행 전환(이전엔 opt-in) — 멀티에이전트/봇 스폰 설계 시 참고할 변경점.
- **리서치 폐기 필터 실효성 재확인**: 리안 리서치의 Anthropic 모델명 표기는 이번에 docs.anthropic.com 대조로 전량 사실 확인됨(오탐 없음) — 기존 검증 절차가 정상 작동.
- **미검증 항목**: OpenAI Codex(GPT-5.3-Codex), Google Antigravity 2.0, Microsoft/Pinecone 관련 리서치 주장은 이번 세션 WebFetch/WebSearch 권한이 거부되어 직접 교차검증 실패 — 채택 보류, 차기 사이클에서 재검증 필요.

## 출처
- [Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview) — 직접 fetch 검증
- [Claude Code What's new](https://code.claude.com/docs/en/whats-new) — 직접 fetch 검증

## 위키화 후보
- Claude 모델 라인업 노트(Opus 5/Sonnet 5/Fable 5/Mythos 5 vs legacy 표) 신설 — 반복 조회 빈도 높음

## 프로필 반영 후보 (저위험)
- 모델 검증 절차 보완: "소수점 버전=1차 의심" 규칙은 legacy 모델(Opus 4.8 등)에는 오탐 소지 있음 확인 — 판별 기준을 "docs.anthropic.com 직접 대조"로 명확화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- 이번 세션 WebFetch/WebSearch 권한 거부로 OpenAI/Google 관련 주장 검증 불가 상태 — 기존 카탈로그의 `출처-대조-검증기` 에이전트를 차기 사이클에 실제 호출해 검증 위임 권장(신규 제안 아님, 기존 자원 활용 확인 필요)
