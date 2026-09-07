---
date: 2026-07-26
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-26

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 컴포넌트 CSS 상태 조합 점검어로 검증됨. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui는 2026년 7월 React Aria를 `--base aria` 선택지로 추가했고, Base UI는 기본값, Radix는 계속 지원됨. 새 Toast는 Base UI 프로젝트에서 action, status, promise, stacking, swipe dismissal을 지원함. [출처](https://ui.shadcn.com/docs/changelog)
- `@shadcn/helpers`는 모델, API 라우트, 네트워크, API 키 없이 AI SDK와 TanStack AI의 `useChat` 흐름을 재현하므로 채팅 UI 프리뷰와 스트리밍 회귀 테스트 후보로 유효함. [출처](https://ui.shadcn.com/docs/changelog)
- React Aria는 50개 이상 컴포넌트, 접근성, 국제화, 마우스·터치·키보드·스크린 리더 상호작용 최적화를 제공하므로 접근성 중심 shadcn base 후보로 볼 수 있음. [출처](https://react-aria.adobe.com/)
- WCAG 2.2 `Target Size`의 24x24 CSS 픽셀 기준과 Popover API의 비모달 특성은 아이콘 버튼, 조밀한 툴바, 메뉴와 확인 대화상자 분리 설계의 기본 점검어로 유지해야 함. [출처](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [출처](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- DTCG 2025.10은 W3C 표준이 아니라 Design Tokens Community Group의 안정 명세이며, Format·Color·Resolver 모듈과 OKLCH 색상 표기를 확인함. [출처](https://www.designtokens.org/tr/2025.10/), [출처](https://www.designtokens.org/tr/2025.10/color/)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [React Aria](https://react-aria.adobe.com/)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [MDN Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [DTCG 2025.10](https://www.designtokens.org/tr/2025.10/)
- [DTCG Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/)
- [Figma2Code 논문](https://arxiv.org/abs/2604.13648)

## 위키화 후보
- Figma2Code 디자인-투-코드 검증 기준 - Figma 메타데이터·자산 활용, 반응형 레이아웃, 코드 유지보수성 리뷰 기준.

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-gutter-*`, `@container-size`, stacked/compound `@variant`를 스크롤 패널·컴포넌트 CSS 점검어로 유지.
- Figma 기반 코드 생성물은 반응형 레이아웃과 유지보수성 수동 리뷰를 기본 점검어로 추가.

## 승인 필요 (고위험)
- shadcn 신규 프로젝트의 기본 primitive를 React Aria로 고정하는 행동규칙 변경은 별도 승인 필요.
- Base UI Toast를 기존 Radix 기반 프로젝트에 전면 도입하는 변경은 stack 혼합 위험 검토 후 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] design-to-code-review — Figma 기반 생성 코드의 반응형 레이아웃, 접근성, 유지보수성 체크리스트 검증.
