---
date: 2026-08-10
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-10

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 공식 확인됨. 스크롤 패널, 코드뷰, 로그뷰 점검어로 유지. 출처: [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui는 신규 프로젝트 기본값을 Base UI로 두며, Radix는 계속 지원하고 React Aria는 `--base aria`로 선택 가능함. 기존 Radix 프로젝트의 기본값 변경은 승인 필요. 출처: [Base UI 기본값](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default), [React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- shadcn/ui Toast는 Base UI 프로젝트에서 actions, status types, promises, stacking, swipe dismissal을 지원함. API 요청 피드백 UI에서 `promise/status/action` 패턴 점검어로 유지. 출처: [Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- shadcn registry Dynamic Search는 `q`, `limit`, `offset` 쿼리와 `pagination` 응답을 사용함. 대형 내부 컴포넌트 registry는 전체 카탈로그 다운로드보다 서버 검색을 우선 검토. 출처: [Dynamic Search](https://ui.shadcn.com/docs/changelog/2026-07-dynamic-search)
- WCAG-EM 2.0은 디지털 제품 접근성 평가의 범위, 샘플링, 보고 절차 기준으로 검증됨. ACT Rules Format 1.1은 자동, 수동 접근성 테스트 규칙 문서화 기준으로 검증됨. 출처: [WCAG-EM 2.0](https://www.w3.org/TR/WCAG-EM/), [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)
- `scroll-state()`는 sticky 헤더, 스크롤 힌트, snap 상태 스타일링 점검어로 유효함. `overflow-anchor`는 스크롤 anchoring 충돌 시 예외 처리용이나 Baseline이 아니므로 호환성 확인 필요. 출처: [MDN scroll-state](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries), [MDN overflow-anchor](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-anchor)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [shadcn/ui Dynamic Search](https://ui.shadcn.com/docs/changelog/2026-07-dynamic-search)
- [WCAG-EM 2.0](https://www.w3.org/TR/WCAG-EM/)
- [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)
- [MDN scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [MDN overflow-anchor](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-anchor)
- [MDN CSS Anchor Positioning fallback](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [Figma MCP server guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)

## 위키화 후보
- 없음. 위키 grep에서 Tailwind v4.3, shadcn registry, Toast, WCAG-EM, ACT, scroll-state, overflow-anchor, CSS Anchor Positioning, Figma Code Connect 관련 노트가 이미 확인됨.

## 프로필 반영 후보 (저위험)
- `shadcn registry Dynamic Search`의 `q/limit/offset/pagination` 계약을 내부 컴포넌트 registry 점검어로 유지.
- API 결과 UI에서 shadcn Toast의 `promise/status/action` 패턴을 비동기 피드백 점검어로 유지.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 Base UI나 React Aria로 고정하거나, 기존 Radix 프로젝트를 마이그레이션하는 행동규칙 변경.
- Figma MCP 연결과 design-to-code 자동화 흐름 도입. 디자인 데이터 접근, 생성 코드 품질, 반응형 수동 리뷰 기준 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] figma-mcp-review — Figma MCP 결과를 실제 코드 컴포넌트, props, 반응형 레이아웃과 대조하는 리뷰 절차.
- [agent] a11y-rule-writer — WCAG-EM 범위와 ACT Rules Format 기준으로 컴포넌트 접근성 테스트 케이스를 정리.
