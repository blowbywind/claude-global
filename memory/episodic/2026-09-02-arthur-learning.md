---
date: 2026-09-02
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-09-02

## 오늘 배운 것
- 디자인 시스템은 `UI kit`, `design token`, `pattern`, `documentation`을 함께 관리해야 프론트엔드 구현 기준으로 작동합니다.
- `Design Tokens Format 2025.10`은 도구 간 토큰 교환용 구현 대상 사양이지만, W3C 표준 자체는 아니므로 표준 준수 문구로 과장하면 안 됩니다.
- Tailwind CSS v4.3 점검어는 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`로 유지합니다. 단, logical property utilities는 v4.2 항목으로 구분합니다.
- shadcn/ui는 React Aria를 1급 base로 추가했고 `--base aria` 선택이 가능합니다. 신규 자동화 전 Base UI, Radix, React Aria 중 base를 명시해야 합니다.
- shadcn `Toast`는 Base UI 프로젝트 한정으로 `actions`, `status types`, `promises`, `stacking`, `swipe dismissal`을 지원하므로 API 요청 피드백 후보로 유지합니다.
- WCAG 2.2 AA `Target Size (Minimum)`의 24 x 24 CSS px 기준과 Chrome Web UI 2026의 `scrollIntoView({ container: "nearest" })`, awaitable scrolling, `scroll-state`, anchored container queries는 스크롤 패널과 popover 회귀 검수어로 유효합니다.

## 출처
- [Figma - 12 Design System Examples](https://www.figma.com/resource-library/design-system-examples/)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [W3C WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Chrome for Developers - What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn/ui, Toast, Human in the Loop, WCAG 2.5.8, DTCG, scroll-state 관련 노트가 있어 신규보다 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 스크롤 패널 점검어에 `scrollbar-gutter-stable`, `@container-size`, `tab-*`, `zoom-*`를 유지하고 logical property utilities는 v4.2로 구분합니다.
- shadcn 작업 전 component base를 Base UI, Radix, React Aria 중 명시하고, Toast는 Base UI 프로젝트 한정 API 피드백 후보로 기록합니다.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] frontend-ui-regression-check — Tailwind, shadcn, WCAG, scroll panel 점검어를 UI 변경 전후 체크리스트로 자동 대조합니다.
