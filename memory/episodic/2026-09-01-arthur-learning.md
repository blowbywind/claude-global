---
date: 2026-09-01
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-09-01

## 오늘 배운 것
- Tailwind CSS v4.3 점검어는 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`로 유지하되, logical property utilities는 v4.2 항목으로 분리한다. 출처: [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui 신규 프로젝트는 Base UI가 기본값이다. 기존 Radix 유지가 필요한 자동화 스크립트는 `-b radix`, registry는 `registry:base`로 명시 고정한다. 출처: [shadcn Base UI 기본값](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- shadcn/ui는 React Aria를 first-class base로 지원하며 `--base aria` 초기화가 가능하다. 접근성 중심 신규 컴포넌트 검토 시 Base UI, Radix, React Aria 선택지를 명시 비교한다. 출처: [shadcn React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- shadcn Toast의 `actions`, `status types`, `promises`, `stacking`, `swipe dismissal`은 Base UI 프로젝트에서 확인된 기능이다. API 요청 피드백 UI에는 프로젝트 base 확인 후 적용한다. 출처: [shadcn Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- `@shadcn/helpers/ai-sdk`는 human-in-the-loop 흐름을 실제 `useChat` 생명주기로 mock하고 `needsApproval` 흐름을 다룰 수 있어 agent 승인 UI 회귀 테스트 후보로 유효하다. 출처: [shadcn Changelog](https://ui.shadcn.com/docs/changelog)
- 접근성 검수는 WCAG-EM 2.0의 범위, 탐색, 대표 샘플, 평가, 보고 5단계와 WCAG 2.2의 `Target Size Minimum` 24x24 CSS px, `Focus Not Obscured`를 함께 본다. `scroll-state()`는 sticky header와 scroll affordance 구현 후보로 유지한다. 출처: [WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/), [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), [MDN scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn Base UI 기본값](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [shadcn Changelog](https://ui.shadcn.com/docs/changelog)
- [WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.2 Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [MDN Container scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Design Tokens 2025.10 안정 명세 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn/ui, Toast, WCAG, DTCG, scroll-state 관련 노트가 있어 신규 노트보다 보강 범위.

## 프로필 반영 후보 (저위험)
- shadcn 자동화 전 component base를 Base UI, Radix, React Aria 중 명시 확인하고 필요한 플래그를 고정한다.
- Toast와 sticky UI 접근성 검수에 `Focus Not Obscured`, `scroll-padding`, `scroll-state()`를 함께 적용한다.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
