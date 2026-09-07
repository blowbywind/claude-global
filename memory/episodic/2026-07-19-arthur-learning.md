---
date: 2026-07-19
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-19

## 오늘 배운 것
- shadcn/ui는 React Aria를 `--base aria`로 선택 가능한 공식 base로 추가했으며, 신규 기본값은 Base UI이고 Radix도 계속 지원됩니다.
- `MessageScroller`는 스트리밍 채팅의 anchoring, auto-follow, prepend preservation, jump, visibility tracking을 분리한 headless 스크롤 primitive로 검토 가치가 있습니다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`는 ai-ops식 스크롤 패널·코드뷰·높이 기반 컨테이너 UI에 직접 유용합니다.
- CSS `@container scroll-state()`는 `scrollable`, `scrolled`, `snapped`, `stuck` 상태 기반 스타일링을 지원하므로 sticky header나 snapped card에서 일부 JS 의존을 줄일 수 있습니다.
- `animation-timeline`은 아직 일부 주요 브라우저에서 제한이 있으므로 `animation` shorthand 뒤 재선언과 `@supports` 폴백을 함께 둬야 합니다.
- React Compiler는 수동 `useMemo`, `useCallback`, `React.memo` 의존을 줄이는 방향이지만, 기존 메모화 제거는 테스트 없이 진행하면 안 됩니다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [MDN: Container scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [Chrome for Developers: Make accessible carousels](https://developer.chrome.com/blog/accessible-carousel)
- [MDN: animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline)
- [DTCG Design Tokens Resolver Module 2025.10](https://www.designtokens.org/tr/2025.10/resolver/)
- [React Compiler](https://react.dev/learn/react-compiler)

## 위키화 후보
- CSS `scroll-state()` container queries — sticky/snapped/scroll direction 상태 기반 UI 패턴.
- DTCG Resolver 2025.10 — light/dark, high contrast, size 같은 다중 컨텍스트 토큰 해석 레이어.

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-gutter-*`와 `@container-size`를 스크롤 패널·코드뷰 레이아웃 점검어로 추가.
- `animation-timeline` 사용 시 shorthand 재선언 순서와 `@supports` 폴백을 기본 검토 항목으로 추가.

## 승인 필요 (고위험)
- React Compiler 적용 프로젝트에서 신규 코드 리뷰 기준을 “수동 메모화의 근거가 명확한가”로 바꾸는 규칙.
- shadcn/ui 신규 프로젝트의 base 선택을 Base UI 또는 React Aria로 자동 고정하는 행동 규칙.

## 신규 도구 후보 (에이전트/스킬)
- [skill] frontend-research-verifier — shadcn, Tailwind, MDN, React 공식 문서 기반으로 프론트엔드 리서치 claims 검증과 위키 중복 확인 자동화.
