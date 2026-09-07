---
date: 2026-07-29
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-29

## 오늘 배운 것
- **Anthropic 모델 라인업 공식 확인**(platform.claude.com/docs 직접 fetch 대조): 현행 = Opus 5 · Sonnet 5 · Fable 5 · Haiku 4.5. Legacy = Opus 4.8/4.7/4.6, Sonnet 4.6/4.5, Opus 4.5. Opus 4.1은 2026-08-05 은퇴 예정.
- **위키 정정 확정**: 기존 노트(`opus-4-1-은퇴일-2026.md`)의 "Opus 4.1→Opus 4.8 마이그레이션" 권고는 낡은 정보. 공식 문서는 현재 "**Opus 5**로 마이그레이션"을 안내함 — 리서치 주장이 맞음, 직접 검증 완료.
- **신규 확인(리서치에 없던 사실)**: Fable 5와 나란히 초대전용 **Claude Mythos 5**(Project Glasswing, 방어적 사이버보안 특화)가 존재 — 모델 트래킹 시 누락하지 말 것.
- Sonnet 5가 Pro/Team/Enterprise 기본 모델 전환 확정(네이티브 1M 컨텍스트, adaptive thinking 기본 on), 서브에이전트 기본 백그라운드 실행 시작(Week27, v2.1.198) — code.claude.com 직접 대조로 검증.
- Artifacts가 MCP 커넥터로 실시간 데이터 호출 가능(공개 공유링크 포함, Week29) — 검증 완료. 단 `/fork`는 "신규 추가"가 아니라 기존 인세션 분기가 백그라운드 세션 분기로 바뀐 것(구 동작은 `/subtask`로 개명)이라는 점에서 리서치 서술을 정정.
- **채택 보류**: MCP 스펙 2026-07-28 개정, Codex CLI(rust-v0.143.0 등), Antigravity SDK 0.1.7 주장은 이번 세션 WebFetch/WebSearch가 Anthropic 1차 도메인 외 전부 권한 차단되어 독립 재검증 불가 — "URL 실존 ≠ 내용검증" 원칙에 따라 확정 채택하지 않음(리서치 원문 출처 자체는 남겨둠).

## 출처
- [Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview)
- [Claude Code Week 27](https://code.claude.com/docs/en/whats-new/2026-w27)
- [Claude Code Week 29](https://code.claude.com/docs/en/whats-new/2026-w29)

## 위키화 후보
- Claude Mythos 5(Project Glasswing, invitation-only 방어적 사이버보안 모델) — 신규 개념 노트 후보.

## 프로필 반영 후보 (저위험)
- Anthropic 모델 마이그레이션 조사 시 "Opus 4.8 기준" 아닌 "Opus 5 기준" 최신 문서를 우선 참조.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
