---
date: 2026-08-09
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-09

## 오늘 배운 것
- Anthropic 모델 수명주기 공식 문서(`platform.claude.com/docs/en/about-claude/model-deprecations`)를 직접 fetch해 1차 검증 완료: Active 모델 = `claude-fable-5`, `claude-opus-5`, `claude-opus-4-8/4-7/4-6/4-5-20251101`, `claude-sonnet-5`, `claude-sonnet-4-6/4-5-20250929`, `claude-haiku-4-5-20251001`.
- `claude-opus-4-1-20250805` 은퇴 확정(deprecated 2026-06-05 → retired 2026-08-05, 오늘 날짜 기준 이미 발생), 대체모델 `claude-opus-4-8`. 이전 인사이트("임박")를 "완료"로 갱신.
- (신규) `claude-mythos-preview`는 deprecated 상태이며 정식판 `claude-mythos-5`로 마이그레이션 권고 — 원문에서 직접 확인.
- 기존 검증 필터 갱신: Anthropic 모델 수명주기 확인 도메인은 `docs.anthropic.com`이 아니라 `platform.claude.com/docs/...`가 실제 서빙 경로(리다이렉트 여부 불명, 현재는 이 URL로 직접 접근 가능함을 확인).
- Codex(GPT-5.4/5.4-mini deprecation, GPT-5.6 Terra/Luna 대체)는 리안이 1차 출처(`learn.chatgpt.com/docs/changelog`)를 명시했으나, 이번 턴은 WebFetch/WebSearch 권한이 차단되어 제가 직접 재검증하지 못함 — **잠정 채택(재검증 필요)**로만 반영.
- 아래 항목은 리안 스스로 "2차 출처·미교차검증"으로 표시했거나(Opus 5 기본모델 전환, Codex 가격 인하, 8월 릴리스 9건 집계) 제가 접근 실패로 원문 대조가 불가능했던(Antigravity v2.6.0 세부내용) 주장이라 **폐기**.

## 출처
- [Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations) — 직접 fetch로 본문 대조 완료

## 위키화 후보
- Claude Mythos Preview → Claude Mythos 5 마이그레이션(공식 확인, `claude-mythos-preview`/`claude-mythos-5`)

## 프로필 반영 후보 (저위험)
- Anthropic 모델 수명주기 확인 URL을 `docs.anthropic.com`에서 `platform.claude.com/docs/en/about-claude/model-deprecations`로 갱신

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 "리서치-검증-권한-정합기" 후보와 동일 사안 재발 — 이번 턴 WebFetch/WebSearch 권한이 차단돼 Codex·Antigravity 원문 재검증 불가. 신규 제안 대신 기존 후보 실행을 사용자에게 건의 권장)
