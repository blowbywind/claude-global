---
date: 2026-08-28
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-28

## 오늘 배운 것
- **CSS `@scope`(컴포넌트 스코프 격리)** — Chrome/Edge·Firefox·Safari 4대 엔진 모두 Baseline 지원(Chrome 118 2023-10, Safari 17.4 2024-03, Firefox 128 2024-07 기준 일반 기술상식과 부합). 단, 1차 출처(Smashing Magazine) fetch가 이번 세션도 WebFetch 권한 거부로 실패해 원문 대조는 못 했음 — 위키 등재 시 "출처 미확인, 재검증 필요" 표기 권장.
- **`text-box-trim`/`text-box-edge`** — MDN 직접 확인 결과 **Baseline "Newly Available" 상태, 2026년 8월부터**는 정확히 맞음(기존 위키 표현과 일치, 신규 아님). 단 "Firefox 154·2026-08-18" 구체 버전·일자는 MDN 페이지에서 확인되지 않아 **폐기**(과잉 정밀도 주장).
- **corner-shape/squircle** — Chromium 전용, Safari/Firefox 타임라인 없음: 기존 `css-corner.md` 노트와 완전히 일치, 변동 없음(신규 아님, 재확인만).
- **APCA/WCAG 3.0, WCAG 2.2 AA 법적기준, DTCG 2025.10, `text-wrap: pretty`** — 모두 기존 위키 노트(`wcag-3-0-*.md`, `dtcg-v2025-10-*.md`, `text.md`)에 이미 반영된 내용과 중복. 신규 정보 없음, 등재 불필요.

## 출처
- [text-box-trim - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim) (직접 fetch 확인)
- [CSS @scope Baseline 지원](https://www.smashingmagazine.com/2026/02/css-scope-alternative-naming-conventions/) (fetch 실패, 미확인 — 일반 기술상식 근거로만 잠정 채택)

## 위키화 후보
- `@scope`(컴포넌트 범위 격리): 위키에 미등재된 신규 개념. 단 1차 출처 미확인 상태이므로 "검증 대기" 태그로 등재 권장.

## 프로필 반영 후보 (저위험)
- (없음 — 이번 검증에서 신규 확정 사실 부족)

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — WebFetch 권한 거부 재발은 기존 등록된 "리서치-검증-권한-정합기"/"출처-대조-검증기" 후보와 동일 이슈라 중복 생성 생략, 기존 후보 채택 검토만 재확인)
