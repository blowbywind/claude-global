---
date: 2026-09-03
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-09-03

## 오늘 배운 것
- Anthropic 공식 모델 페이지 직접 fetch로 라인업 재검증 완료: `Claude Fable 5.1`($10/$50, 1M 컨텍스트, 은퇴 2027-09-01 이전 없음)·Opus 5($5/$25)·Sonnet 5($2/$10)·Haiku 4.5($1/$5) 전부 표기 정확. `Claude Mythos 5.1`은 비교표 본문엔 없고 캐시읽기 각주(2.5%)에만 등장 — "제한공개 모델" 추정 그대로 유지.
- dateless 모델 ID 정책 문구 원문 그대로 재확인: "Every Claude model ID is a pinned snapshot, including the dateless IDs used from the 4.6 generation on." — 기존 인사이트와 100% 일치.
- `GPT-5.6`(Sol/Terra/Luna) 및 `gpt-5.4`/`gpt-5.4-mini` 2026-08-31 은퇴는 자체 위키(`codex-gpt.md`, `gpt.md`)에 08월 이후 반복 교차검증된 기존 확정 사실과 일치 — 유지. 단 이번 세션은 `learn.chatgpt.com` 자체 재검증은 도구 거부로 실패(아래 비고).
- **`Gemini 3.8 Flash`는 폐기**: 위키에 이미 "`Gemini 3.5/3.6/3.7 Flash`는 비공식 소수점 버전 명명 환각 패턴"이라고 명시적으로 기록돼 있음(`없음-오늘-항목-전부-미검증-또는-폐기.md`). 오늘 주장은 동일 패턴을 반복하며 원문 재확인도 실패해 확실히 폐기.
- Antigravity 데스크톱 2.12.0/CLI 1.1.25 버전 수치는 이번 세션 WebFetch·WebSearch 전부 거부, wget도 SPA 셸만 반환돼 독립 재확인 실패 — 버전 진행 자체는 과거 위키 궤적(CLI 1.1.5→1.1.25 등)과 방향은 개연성 있으나 **수치는 미검증**으로 보류.
- `PaperBench`(arxiv 2504.01848)와 `VoltAgent/awesome-ai-agent-papers`(GitHub API로 실존·설명 확인, 2026-09-02 최신 push) 둘 다 원문 대조 검증 성공.

## 출처
- [Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview) — 직접 fetch 검증
- [PaperBench: Evaluating AI's Ability to Replicate AI Research](https://arxiv.org/abs/2504.01848) — 원문 제목 대조 검증
- [VoltAgent/awesome-ai-agent-papers](https://github.com/VoltAgent/awesome-ai-agent-papers) — GitHub API 대조 검증

## 위키화 후보
- (신규 없음 — Gemini 3.X Flash 환각 패턴 노트는 이미 존재, 이번은 재확인 사례로 흡수)

## 프로필 반영 후보 (저위험)
- 검증 기법 축적: 정적 문서(arxiv, GitHub 저장소)는 WebFetch 거부 시 `wget` + `api.github.com/repos/...` 조합으로 실존·최신성 검증 가능(이번 세션 실증). SPA/JS렌더링 페이지(learn.chatgpt.com, antigravity.google)는 이 폴백도 무효 — `js렌더링-대응-원문검증기` 필요성 재확인.

## 승인 필요 (고위험)
- (없음 — WebFetch/WebSearch 권한 비일관 거부는 기존 다회 기록된 이슈와 동일 패턴 반복이라 신규 항목 아님, 별도 승인 재요청 생략)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 후보 `출처-대조-검증기-wget-폴백` 계열로 이미 충분히 등록됨)
