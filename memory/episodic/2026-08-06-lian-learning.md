---
date: 2026-08-06
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-06

## 오늘 배운 것
- **Anthropic 현행 라인업 1차 출처 직접 대조 완료**: `platform.claude.com/docs/en/about-claude/models/overview` 원문 fetch로 확인. 현행: Claude Fable 5(`claude-fable-5`, $10/$50)·Claude Mythos 5(`claude-mythos-5`, 초청제 Project Glasswing)·Claude Opus 5(`claude-opus-5`, $5/$25, 복잡한 agentic 코딩·엔터프라이즈 권장)·Claude Sonnet 5(`claude-sonnet-5`, 정가 $3/$15, 프로모션 $2/$10→2026-08-31까지)·Claude Haiku 4.5(`claude-haiku-4-5-20251001`, $1/$5). Opus 4.1은 표에서 완전히 빠짐.
- **Legacy 분류 정확히 일치**: Opus 4.8·Opus 4.7·Opus 4.6·Sonnet 4.6·Sonnet 4.5·Opus 4.5 = "Legacy models" 아코디언에 별도 분류, API 계속 사용 가능하나 마이그레이션 권고 문구 확인.
- **effort 파라미터 기본값 세부 차이(신규 확인)**: Opus 4.8은 API·Claude Code·claude.ai 전체 surface에서 `effort` 기본값 `high`, 반면 Opus 5·Sonnet 5는 API·Claude Code에서만 기본 `high` (claude.ai는 미포함) — 봇 spawn 프롬프트에서 effort 명시 여부 점검 시 참고할 세부 규칙.
- OpenAI/Codex(GPT-5.6 전환, named sessions 등)·Google Antigravity CLI v1.1.10·arXiv 벤치마크 논문 항목은 원문 도메인(help.openai.com, developers.openai.com, antigravity.google)이 이번 세션 WebFetch 권한 제한으로 재검증 실패 — 도메인 자체는 공식이므로 폐기하지 않고 "미재검증" 태그로 보류.
- **폐기**: releasebot.io 출처 2건(Voice Mode 확장, GPT-5.6 가격 인하)과 uvik.net 블로그 통계(AI 코딩 툴 시장 $12.8B)는 2차 집계/블로그 소스로 자체 검증 규칙("URL 실존≠내용 검증")에 따라 채택 보류.

## 출처
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview) — 직접 fetch 대조 완료
- [Codex model release notes](https://help.openai.com/en/articles/9624314-model-release-notes) — 도메인 공식, 이번 세션 재fetch 실패(미재검증)
- [Codex changelog](https://developers.openai.com/codex/changelog) — 도메인 공식, 재fetch 실패(미재검증)
- [Antigravity changelog](https://antigravity.google/changelog) — 리안 직접 fetch 주장, 이번 세션 재검증 실패
- [arXiv 2603.23749](https://arxiv.org/html/2603.23749v1) — 1차 학술 출처

## 위키화 후보
- "Claude 모델별 effort 기본값 차이(Opus 4.8 vs Opus5/Sonnet5)" — 기존 라인업 노트(2026-08-05)에 세부 업데이트로 병합 권장.

## 프로필 반영 후보 (저위험)
- Sonnet 5 프로모션 가격 종료일(2026-08-31) — 이후 세션 조사 시 정가($3/$15) 기준으로 전환 확인 필요.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- 이번 검증에서도 WebFetch가 특정 도메인(platform.claude.com) 1건만 허용되고 나머지는 권한 거부되는 현상 재현 — 기존 후보 "리서치-검증-권한-정합기"(웹fetch/search 권한 비일관성, settings.json 점검)를 사용자 승인 하에 재상정할 가치 있음.
