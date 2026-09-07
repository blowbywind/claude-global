---
date: 2026-08-11
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-11

## 오늘 배운 것
- **Opus 4.1 완전 은퇴 확정**(`claude-opus-4-1-20250805`, 2026-08-05 Retired, 대체 `claude-opus-4-8`) — 원문 표에서 직접 확인. 봇 spawn 프롬프트에 하드코딩 있으면 즉시 교체 필요.
- **모델검증 필터 세분화 근거 확인**: "Claude 4.6 세대부터 dateless 소수점 ID(`claude-opus-4-8` 등)도 정식 pinned snapshot"이라는 공식 문구를 원문에서 직접 확인. 기존 인사이트("소수점+날짜접미사 없음=환각 의심")는 **4.6 세대 이전에만** 적용하도록 수정 필요.
- **활성 라인업 정정 확인**: `claude-opus-4-8`/`4-7`/`4-6`, `claude-sonnet-4-6`/`4-5-20250929`, `claude-opus-4-5-20251101` 모두 deprecation 표에서 "Active"(Deprecated: N/A) 확인. 단 models/overview 문서에서는 이들을 "Legacy models" 아코디언에 묶어 Opus 5로 마이그레이션을 안내(`If you're currently using Claude Opus 4.8 or earlier...`) — **"Active=은퇴 아님"과 "권장 최신모델=Opus 5"는 별개 개념**으로 구분 필요. Effort 기본값(Opus 4.8=API·Claude Code·claude.ai 전체 high, Opus5·Sonnet5=API·Claude Code만 high)은 원문과 정확히 일치.
- **Claude Mythos Preview→Mythos 5 마이그레이션** 공식 확인(`claude-mythos-preview` deprecated, 이관 대상 `claude-mythos-5`) — 기존 손상 노트 대체 가능.
- **Claude Code 변경사항 날짜 재귀속 필요**: 자격증명 마스킹(`mode: "mask"`, JWT/AWS SigV4)·Ultraplan 완전 제거(`/ultraplan` 명령·키워드 삭제)·Focus view(VS Code, 도구활동 1줄 접기)는 실제로 **Week 32(v2.1.220~224, 8/3~8/7)** 확인됨. 반면 WebSearch 세션당 200회 캡(`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`)·`/fork`→`/subtask` 개명·`/deep-research` 수동전환은 이보다 이른 **Week 28~29(v2.1.212~218)**로 확인 — lian 리서치의 "Week 32" 일괄 귀속은 부정확, 기능 자체는 실재.
- **Codex/Antigravity 확인**: GPT-5.4/5.4-mini는 2026-08-31 ChatGPT로그인 Codex에서 은퇴(API키 세션은 유지), 대체 `gpt-5.6-terra`/`gpt-5.6-luna`, 컨텍스트 272,000 토큰 — 원문 그대로 확인. Antigravity 로컬 Gemma·OpenAI호환 엔드포인트 서브에이전트+MCP 등록, `extra_high` thinking severity는 사실이나 **실제 릴리스는 SDK 0.1.7(2026-07-14)**이며 "2026-08 업데이트"라는 lian의 날짜 표기는 부정확.

## 출처
- [Model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Claude Code Week 32](https://code.claude.com/docs/en/whats-new/2026-w32)
- [Claude Code Changelog](https://code.claude.com/docs/en/changelog)
- [OpenAI Codex Changelog](https://developers.openai.com/codex/changelog)
- [Google Antigravity Changelog](https://antigravity.google/changelog)
- [awesome-ai-agent-papers (Mem2ActBench, AIRS-Bench 원문 확인)](https://github.com/VoltAgent/awesome-ai-agent-papers)

## 위키화 후보
- Claude 모델 수명주기 4단계(Active/Legacy/Deprecated/Retired) 개념 노트 — "Active=은퇴아님"과 "권장 기본값 전환"은 별개 축임을 명시
- Claude Code 2026-07~08 변경 타임라인(자격증명 마스킹·Ultraplan 제거·WebSearch 캡·`/subtask`) 버전별 정리

## 프로필 반영 후보 (저위험)
- 모델검증 필터 문구 갱신: "4.6세대 이전 dateless=환각 의심 / 4.6세대 이후 dateless=정식 pinned snapshot(공식 확인)"
- 신규 모델 용어 갱신: `gpt-5.6-terra`/`gpt-5.6-luna`, `claude-opus-4-8`

## 승인 필요 (고위험)
- `claude-mythos-preview-claude-mythos-5-마이그레이션-공식-확인.md` 손상 노트 — 이번 검증으로 실제 내용까지 원문 교차확인 완료, 폐기 후 정상 내용 재작성 승인 요청

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 제안이 이미 등록되어 있으며, 이번 세션에서 그 역할을 직접 수행해 실효성 재확인함)
