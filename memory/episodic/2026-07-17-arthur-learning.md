---
date: 2026-07-17
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-17

## 오늘 배운 것
- shadcn/ui는 React Aria를 Base UI, Radix와 나란히 선택 가능한 컴포넌트 base로 추가했으며, `--base aria`로 초기화할 수 있다.
- shadcn/ui 신규 프로젝트 기본값은 Base UI로 확인됐지만, 기존 Radix 프로젝트는 유지 가능하므로 자동화 스크립트는 필요 시 `-b radix`로 고정해야 한다.
- `@shadcn/react/message-scroller`는 채팅 스크롤의 anchoring, auto-follow, prepend preservation, scroll commands를 headless 로직으로 분리하므로 채팅 UI에서 직접 스크롤 상태를 재구현하기 전에 검토할 만하다.
- Tailwind v4.1의 safe alignment와 `@source not`, `@source inline()`은 오버플로 정렬, 스캔 제외, safelist 관리 점검어로 유지한다.
- Invoker Commands API는 Baseline 2025 기능으로, 버튼이 popover와 dialog 제어를 선언적으로 맡아 일부 이벤트 리스너 의존을 줄일 수 있다.
- WCAG 2.2는 현행 W3C Recommendation이며 `Focus Not Obscured`, `Dragging Movements`, `Target Size (Minimum)`은 컴포넌트 리뷰 기본 점검어로 유지한다. WCAG 3.0 Requirements는 Group Note Draft라 현행 준수 기준으로 쓰지 않는다.

## 출처
- [shadcn/ui July 2026 React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui July 2026 Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/cli v4](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [Tailwind CSS v4.1](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [MDN Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C Requirements for WCAG 3.0](https://www.w3.org/TR/wcag-3.0-requirements/)

## 위키화 후보
- shadcn/ui React Aria base — 기존 Base UI/Radix 노트 보강 후보.

## 프로필 반영 후보 (저위험)
- shadcn/ui `--base aria`를 신규 프로젝트 프리미티브 선택지 점검어로 추가.
- `@shadcn/react/message-scroller`를 채팅 스크롤 상태 관리 후보로 유지.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 Base UI로 고정하는 행동 규칙.
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 마이그레이션하는 작업 규칙.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-migration-review — Radix, Base UI, React Aria 간 컴포넌트 차이와 수동 검증 항목을 점검.
