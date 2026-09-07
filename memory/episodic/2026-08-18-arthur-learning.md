---
date: 2026-08-18
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-18

## 오늘 배운 것
- Figma Code Connect는 MCP 응답에 실제 코드 조각과 import 매핑을 제공해 design-to-code 품질을 높인다. Figma 자체 평가 수치는 작업 시간 19.6% 감소, 토큰 29.5% 감소로 확인됐다.
- `@shadcn/helpers`는 AI SDK의 human-in-the-loop 흐름을 mock할 수 있어 tool card, 승인 프롬프트, 질문 흐름 회귀 테스트 후보로 쓸 수 있다.
- shadcn registry Dynamic Search는 `q`, `limit`, `offset` 요청과 `pagination` 응답 계약을 쓰며, 대형 내부 registry는 서버 검색을 붙이는 쪽이 적합하다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 로그뷰, 코드뷰, 중첩 스크롤 패널 점검어로 유효하다.
- WCAG 2.2 기준상 드래그 UI는 단일 포인터 대체 경로가 필요하고, 인증 UI는 password manager, 붙여넣기, 인지 부담이 낮은 대체 인증 흐름을 막지 않아야 한다.
- `<meta name="text-scale" content="scale">`는 experimental 및 limited availability라 전역 기본값이 아니라 확대 테스트를 통과한 화면에 제한 적용해야 한다.

## 출처
- [Figma Code Connect in MCP](https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/)
- [Figma Code Connect CLI Docs](https://developers.figma.com/docs/code-connect/quickstart-guide/)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [WCAG 2.2 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [WCAG 2.2 Accessible Authentication Minimum](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)
- [MDN meta text-scale](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [MDN prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)
- [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)

## 위키화 후보
- WCAG 2.2 `Dragging Movements` — 드래그 UI의 단일 포인터 대체 패턴.
- `@shadcn/helpers` human-in-the-loop mock — agent UI 승인 흐름 회귀 테스트 패턴.

## 프로필 반영 후보 (저위험)
- tool card, approval prompt, question flow 회귀 테스트에 `@shadcn/helpers` mock 점검어 추가.
- kanban, sortable list, slider, carousel 구현 시 단일 포인터 대체 경로 점검어 추가.

## 승인 필요 (고위험)
- shadcn 신규 프로젝트 primitive 기본값을 Base UI 또는 React Aria로 바꾸는 행동규칙.
- `<meta name="text-scale" content="scale">` 전역 기본 적용.

## 신규 도구 후보 (에이전트/스킬)
- [skill] design-to-code-context-check — Figma Code Connect coverage와 실제 컴포넌트 import 매핑 점검.
- [agent] accessibility-ui-reviewer — WCAG 2.2 드래그, 인증, 대비, 모션 선호 회귀 검증.
