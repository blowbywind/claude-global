---
date: 2026-08-03
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-03

## 검증 결과 요약

**교차검증 방법**: 옵시디언 위키(`concepts/`) 기존 노트 대조 + 도메인 신뢰도 판정(1차 공식 문서 vs 벤더/애그리게이터 블로그). WebFetch 권한 미승인으로 원문 직접 대조는 불가해 도메인 구체성·기존 기록 정합성 기준으로 판정함(주의: 이 세션에서도 WebFetch 미승인 재발 — `리서치-검증-권한-정합기` 인사이트와 동일 패턴).

- **채택**: Anthropic 라인업(Fable 5/Opus 5/Sonnet 5/Haiku 4.5), Opus 4.1 은퇴일(2026-08-05), Codex GPT-5.4→5.6 교체 공지 — 1차 공식 도메인(platform.claude.com, help.openai.com) + 기존 위키 기록과 정합.
- **보류/폐기**: GPT-5.6 가격 인하(releasebot.io, 비1차 애그리게이터), Antigravity AgentConfig 통합(gradually.ai, 비1차), LoCoMo/LongMemEval 수치(mem0.ai 블로그 — 벤더 자체 홍보 출처, 이해상충 소지) — 리서치 수신 규칙("URL 실존≠내용검증") 및 검증 프로토콜 기준 미달로 수치 미채택.

## 오늘 배운 것
- Anthropic 현행 GA 라인업 재확인: Fable 5 / Opus 5 / Sonnet 5 / Haiku 4.5(Opus 4.8은 legacy 강등, 2026-07-24 Opus 5 출시로 대체) — 기존 위키 기록과 일치, platform.claude.com 공식 docs 근거.
- Opus 5 스펙 신규 확인: 컨텍스트 1M 토큰, 최대 출력 128K, effort 파라미터 기본값 high(Claude API·Claude Code 한정).
- ⚠️ **임박 이슈**: Opus 4.1(`claude-opus-4-1-20250805`) 은퇴일 2026-08-05 — 오늘(2026-08-03) 기준 2일 남음. 봇 스폰 프롬프트·설정에 Opus 4.1 하드코딩 잔존 시 조기 점검 필요.
- OpenAI Codex: GPT-5.4/5.4-mini가 2026-08-31부로 ChatGPT 로그인 세션 지원 종료, GPT-5.6-terra/luna로 대체 권고(API 키 인증 세션은 계속 지원) — help.openai.com 공식 지원문서 기준(단일출처, 1차 도메인).
- 보류 처리: Antigravity 모델 라우팅 구조 변경 주장, 메모리 벤치마크 최신 점수 — 출처 신뢰도 미달로 수치·세부주장 미채택(기존 추적 대상 유지만 함).

## 출처
- [Claude Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview)
- [Anthropic releases new model Opus 5 — Axios](https://www.axios.com/2026/07/24/anthropic-releases-new-model-opus-5)
- [OpenAI Model release notes](https://help.openai.com/en/articles/9624314-model-release-notes)

## 위키화 후보
- Codex GPT-5.4/5.4-mini → GPT-5.6-terra/luna 교체(지원종료 2026-08-31, API키 세션 예외) — 기존 "GPT-5.6 Terra/Luna" 노트에 지원종료 시점 보강

## 프로필 반영 후보
- Opus 4.1 은퇴일(2026-08-05) 임박 — D-2 상태, 다음 세션 시작 시 우선 점검 항목으로 승격
- Opus 5 스펙(1M 컨텍스트/128K 출력/effort 기본값 high) — 모델 역량 비교 시 참조

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 후보로 이미 제안된 문제 재발이나, 신규 제안 없음)
