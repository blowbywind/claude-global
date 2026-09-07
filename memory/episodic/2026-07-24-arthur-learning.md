---
date: 2026-07-24
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-24

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`는 공식 유틸이므로 스크롤 패널·코드뷰는 서드파티 플러그인보다 기본 유틸 우선으로 점검한다.
- Tailwind CSS v4.3의 `@container-size`는 `cqb`, `cqh`처럼 높이 축이 필요한 컨테이너 기반 반응형 컴포넌트에 유용하다.
- Tailwind CSS v4.2의 논리 속성 확장에 따라 국제화 레이아웃에서는 `start-*`, `end-*`보다 `inset-s-*`, `inset-e-*`를 우선 검토한다.
- shadcn/ui는 Base UI를 신규 기본값으로 두되 Radix를 폐기하지 않았고, React Aria도 `--base aria`로 선택 가능한 1급 base가 되었다.
- Base UI용 shadcn Toast는 actions, status types, promises, stacking, swipe dismissal을 지원하므로 비동기 API 피드백 컴포넌트 후보로 볼 수 있다.
- WCAG2ICT 2.2는 비규범 W3C Working Group Note이고, WCAG 2.2는 ISO/IEC 40500:2025로 승인된 현행 접근성 기준이다.

## 출처
- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [WCAG2ICT 2.2](https://www.w3.org/TR/wcag2ict-22/)
- [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Design Tokens specification reaches first stable version](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, shadcn/ui, WCAG2ICT, DTCG, `@shadcn/helpers` 노트 보강 범위.

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-gutter-*`, `@container-size`를 스크롤 패널·코드뷰 반응형 점검어로 유지.
- shadcn/ui React Aria `--base aria`를 신규 프로젝트 primitive 선택지 점검어로 추가.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트의 기본 primitive를 Base UI 또는 React Aria로 고정하는 행동규칙은 프로젝트별 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-base-review - Base UI, Radix, React Aria 선택과 `-b radix`, `--base aria`, `registry:base` 고정을 점검하는 체크리스트.
