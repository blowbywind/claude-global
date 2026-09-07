---
date: 2026-08-31
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-31

## 오늘 배운 것
- **Claude 모델 수명주기 재확인**: `claude-mythos-preview`(deprecated) → `claude-mythos-5`(신규, migration guide 제공) 전환이 공식 문서에 여전히 명시됨. 이 사실은 2026-08-09에 이미 위키 승격 완료된 항목으로, 오늘 재검증만 수행 — 신규 발견 아님. 출처: platform.claude.com/docs/en/about-claude/model-deprecations (1차, 직접 fetch 확인)
- **Claude 모델 라인업 상태(2026-08-31 기준, 1차 소스 직접 대조)**: Active — `claude-fable-5`, `claude-opus-5`, `claude-opus-4-8/4-7/4-6/4-5`, `claude-sonnet-5`, `claude-sonnet-4-6/4-5`, `claude-haiku-4-5`. Retired — `claude-opus-4-1-20250805`(2026-08-05 퇴역 완료), `claude-opus-4-20250514`. 08-11 인사이트의 `claude-opus-4-8` Active 표기가 정확했음을 확인.
- **Claude Code v2.1.251**: `PreModelSwitch`/`PostModelSwitch` 훅 이벤트, `/cost`에 세션별 프롬프트 캐시 라인(hit ratio·misses·재캐시 토큰) 추가 — CHANGELOG.md 원문 직접 대조로 확인.
- **Claude Code v2.1.247**: `SendFeedback` 도구(세션 중 문제 발생 시 피드백 리포트 초안 작성 → `/feedback`에서 검토·전송) — 원문 대조 확인.
- **Claude Code v2.1.237**: 내장 "Concise" 출력 스타일(결과 우선 제시, 서두 생략) — 원문 대조 확인, `/config`에서 선택 가능.
- **폐기 항목**: OpenAI Codex GPT-5.4 제거, Google Antigravity v1.1.22 `/model` 기능, Anthropic Claude for Scientists 확장 — releasebot.io 3건 모두 JS 렌더링 SPA라 wget 대조 불가, 그리고 이번 세션도 WebFetch/WebSearch 권한이 재차 거부되어 1차 소스 교차검증 실패. 검증 미완료로 전량 폐기(리안의 "다음 세션 대조 권고" 판단은 타당했음).

## 출처
- [Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- [claude-code CHANGELOG.md](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)

## 위키화 후보
- (없음 — 검증된 사실은 모두 기존 위키 노트와 일치, 신규 개념 없음)

## 프로필 반영 후보 (저위험)
- Claude Code `PreModelSwitch`/`PostModelSwitch` 훅, `/cost` 프롬프트 캐시 통계(v2.1.251) — 모델 마이그레이션 검증 체크리스트 용어로 추가
- Claude Code `SendFeedback` 도구(v2.1.247) — 검증 담당 역할과 연관된 피드백 루프 용어로 축적

## 승인 필요 (고위험)
- WebFetch/WebSearch 권한 거부가 이번 세션도 재발(누적 6회+: 07-16/07-22/07-29/07-30/08-17/08-31). WebFetch는 1건 성공·2건 거부, WebSearch는 2건 전부 거부로 비일관성 지속 확인. 등록된 `리서치-검증-권한-정합기`(settings.json 권한 정합) 후보의 실제 적용 여부를 사용자 확인 후 `update-config` 스킬로 처리하는 방안 재승인 요청드립니다.

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 등록된 `출처-대조-검증기` 계열 후보로 충분, 신규 제안 보류)
