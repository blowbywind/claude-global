---
date: 2026-07-16
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-16

## 오늘 배운 것

- WCAG 3.0이 2026-03-03 새 Working Draft 공개: "outcomes" 방식이 174개 "requirements"로 재편되고 pass/fail 채점이 폐지·유연한 점수제로 전환. 단 CR은 2027년 4분기, 정식 Recommendation은 2028년 이후로 여전히 요원 — 기존 "2026년까지도 미확정" 인사이트를 구체 일정으로 갱신.
- 대비(contrast) 알고리즘 자체는 여전히 미확정: APCA는 2023년에 이미 초안에서 빠졌고 탐색적 제안 취급 상태라 2030년경까지도 확정 어려울 수 있음 — 실무는 WCAG 2.x 대비 기준(4.5:1 등)과 APCA 병행 준수가 안전하다는 기존 방침 유지 확인.
- CSS `contrast-color()`가 2026-04 Baseline Newly Available 도달(Chrome 147/Firefox 146/Safari 26.0 전 엔진 안정 출시, WPT 통과) — 자가보정 색상 페어링 패턴을 실 프로덕션 컴포넌트에 적용해도 되는 단계로 격상.
- `color-mix()`·relative color syntax(`oklch(from var(--base) ...)`)가 Baseline Widely Available 확정 — 프리프로세서 없이 CSS 변수만으로 hover/dark 파생 색상 생성이 실무 표준으로 굳어짐.
- DTCG Design Tokens Format Module 2025.10이 첫 안정판(stable)으로 확정(Adobe·Figma·Google 등 20+ 기관 공동 편집) — 토큰 가이드라인 근거를 draft가 아닌 stable 스펙으로 격상 가능.
- shadcn/ui가 2026-07 공식 변경로그로 Base UI를 신규 프로젝트 기본값으로 전환 확정(`shadcn init` 기본 선택지, Radix는 `-b radix` 플래그로만 유지) — 기존 "확인됨·도입 결정 아님" 메모의 사실관계 부분만 확정으로 갱신, 도입 여부 판단은 그대로 보류.

## 출처
- [WCAG 3.0 새 Working Draft 공개(W3C WAI, 2026-03-03)](https://www.w3.org/WAI/news/2026-03-03/wcag3/)
- [WCAG 3 is not ready yet](https://yatil.net/blog/wcag-3-is-not-ready-yet)
- [WCAG3 Contrast as of April 2026 (Adrian Roselli)](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Building Self-Correcting Color Systems with contrast-color() (Smashing Magazine)](https://www.smashingmagazine.com/2026/05/building-self-correcting-color-systems-contrast-color/)
- [contrast-color() — Can I Use](https://caniuse.com/wf-contrast-color)
- [shadcn/ui changelog: Base UI default (2026-07)](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [DTCG Design Tokens Format Module 2025.10 첫 안정판 확정](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [DTCG Format 최신 초안](https://www.designtokens.org/tr/drafts/format/)
- [CSS Relative Colors — Can I Use](https://caniuse.com/css-relative-colors)
- [Web Platform Baseline 2026 신규 기능](https://www.buildmvpfast.com/blog/web-platform-baseline-2026-new-features-browser-support)

## 위키화 후보
- WCAG 3.0 "outcomes→174 requirements 재편, pass/fail 폐지" — 기존 WCAG3 로드맵 노트에 항목 추가(신규 노트 아님).

## 프로필 반영 후보 (저위험)
- `contrast-color()` Baseline Newly Available 도달 문구를 공용 컴포넌트 가이드라인에 반영(실험적→실무 적용 가능 단계로 격상).
- Base UI 기본화가 "확인됨" 단계에서 "공식 확정"으로 사실관계만 갱신(도입 결정 아님 유지).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
