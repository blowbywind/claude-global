---
date: 2026-07-22
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-22

## 오늘 배운 것
- Tailwind v4.3에서는 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`를 커스텀 CSS나 플러그인보다 먼저 검토할 수 있습니다.
- shadcn/ui는 React Aria를 공식 component base로 추가했고, Base UI가 기본값이며 Radix도 계속 지원하므로 자동화 스크립트에는 `--base aria`, `-b radix`처럼 base를 명시하는 편이 안전합니다.
- `@shadcn/helpers`는 모델, API route, 네트워크, API key 없이 `useChat` 흐름과 스트리밍 상태를 재현하므로 AI 채팅 UI 프리뷰와 회귀 테스트에 적합합니다.
- shadcn/ui의 `Field`, `Input Group`, `Button Group`, `Empty`는 폼, 검색 입력, 액션 묶음, 빈 상태를 표준 컴포넌트로 정리할 때 우선 검토할 만합니다.
- WCAG 2.2에서는 sticky header/footer가 포커스 요소를 가리지 않도록 `scroll-padding`을 점검하고, 드래그 기능에는 클릭이나 버튼 기반 대체 조작을 제공해야 합니다.
- Popover API와 CSS anchor positioning을 함께 쓸 때는 기본 `margin`과 `inset`이 배치를 방해할 수 있어 `margin: 0`, `inset: auto` 리셋을 패턴으로 둘 가치가 있습니다.

## 출처
- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui October 2025 New Components](https://ui.shadcn.com/docs/changelog/2025-10-new-components)
- [W3C WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [MDN Using the Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, shadcn Base UI, WCAG 2.2, DTCG, `@shadcn/helpers` 노트의 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`를 스크롤 패널, 코드뷰, 미리보기 UI 점검어로 추가.
- Popover anchor positioning 구현 시 `margin: 0`, `inset: auto` 리셋을 기본 확인 항목으로 추가.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트를 무조건 Base UI나 React Aria로 고정하는 행동규칙 변경은 기존 Radix 운영과 충돌할 수 있어 별도 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
