---
date: 2026-08-17
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-17

## 오늘 배운 것
- Claude Code 8월 업데이트(1차 소스 code.claude.com/docs/en/whats-new 대조 완료): Week 32(8/3~8/7)에 **self-hosted 클라우드 세션**(Team/Enterprise 베타), **VS Code Focus view** 발표 확인. 단 리안이 보고한 "샌드박스 credential masking 강화"는 원문에서 발견 못함 — 이 항목만 폐기.
- **Opus 5 fast mode 가격 정정**: 1차 소스(Week 30 digest)에서 fast mode가 **$10/$50/MTok**로 명시됨. 기존 위키 인사이트(2026-07-25, "$5/$25")와 불일치 — 정정 후보로 등록 필요.
- Sonnet 5(native 1M, adaptive thinking 기본)는 1차 소스로 재확인됐으나 신규 정보는 아님(기존 위키 기록과 일치).
- **폐기**: benchlm.ai(2차 소스)의 "Sonnet 5 프로모션가 8/31 이후 고정" 주장은 기존 1차 소스(platform.claude.com) 검증 기록("8/31 정가 $3/$15 전환")과 상충 → 폐기, 기존 위키 기록 유지.
- **폐기**: GPT-5.4 은퇴일·GPT-5.6 "Terra/Luna/Sol" 코드네임 — 1차 소스(help.openai.com) 검증 시도가 WebFetch 권한 거부로 실패했고, 이 코드네임은 과거에도 `리서치-환각-패턴-목록` 노트에 명명규칙 불일치 사례로 기록된 항목 → 전체 폐기(재등재 금지).
- **폐기**: OpenAI "Astra" 수학증명 주장, Antigravity 업데이트(gradually.ai), Qwen3.8 출시(buildfastwithai.com) — 전부 2차/aggregator 단일 출처뿐이라 이번 세션 채택 보류.

## 출처
- [Claude Code — What's new](https://code.claude.com/docs/en/whats-new)
- [기존 위키 — Sonnet 5 프로모션 가격 종료일](/home/bbw/obsidian-vault/bbw-wiki/wiki/concepts/sonnet-5-프로모션-가격-종료일-2026.md, 1차 근거: platform.claude.com/docs/en/about-claude/models/overview)
- [기존 위키 — 리서치 환각 패턴 목록](/home/bbw/obsidian-vault/bbw-wiki/wiki/concepts/리서치-환각-패턴-목록.md)

## 위키화 후보
- Opus 5 fast mode 가격($10/$50/MTok, 1차 소스) — 기존 `claude-opus-5-claude.md` 노트 정정 반영

## 프로필 반영 후보 (저위험)
- Opus 5 fast mode 정확 가격($10/$50/MTok)을 모델 마이그레이션 체크리스트 용어로 축적

## 승인 필요 (고위험)
- WebFetch 권한 거부가 오늘도 재발(07-16/07-22/07-29에 이어 08-17로 5회 이상 반복) — GPT-5.4/5.6 관련 1차 소스 대조가 이 때문에 매번 막힘. 권한 정합 조치(등록된 `리서치-검증-권한-정합기` 후보 적용 여부) 검토 승인 요청.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 리서치-검증-권한-정합기 — WebFetch/WebSearch 권한이 리서치·검증 역할 간 비일관 부여되는 문제가 5회+ 반복 확인됨(기존 후보 재확인, 신규 아님).
