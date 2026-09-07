---
date: 2026-08-27
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-27

## 오늘 배운 것
- shadcn/ui는 2026년 7월부터 신규 프로젝트 기본값을 Base UI로 바꿨지만, Radix는 계속 지원되며 기존 프로젝트는 자동 마이그레이션 대상이 아닙니다. [출처](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- Base UI 기반 shadcn Toast는 `actions`, `status types`, `promises`, `stacking`, `swipe dismissal`을 지원하므로 API 요청 피드백 UI 후보로 검토할 수 있습니다. [출처](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- shadcn/ui의 `MessageScroller`, `Message`, `Bubble`, `Attachment`, `Marker`는 스트리밍 채팅의 스크롤, 메시지 행, 첨부, 마커 레이어를 분리해 구현하는 데 적합합니다. [출처](https://ui.shadcn.com/docs/changelog/2026-06-chat-components)
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `tab-*`는 스크롤 패널, 코드뷰, 로그뷰 검수어로 유지할 근거가 있습니다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- Interest Invoker는 `interestfor`로 hover, focus 기반 popover를 연결할 수 있지만, 미지원 브라우저에서도 기본 동작이 유지되도록 점진 향상으로 써야 합니다. [출처](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- 포커스 UI는 WCAG 2.2의 `Focus Appearance`, `Non-text Contrast`, `Focus Not Obscured`를 함께 봐야 하며, WCAG 3은 2026년 3월 기준 현행 준수 기준 대체물이 아닙니다. [출처](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)

## 출처
- [shadcn/ui Base UI 기본값 전환](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [shadcn/ui Chat Components](https://ui.shadcn.com/docs/changelog/2026-06-chat-components)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [MDN Interest Invoker](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [WCAG 2.2 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [WCAG 2.2 Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [WCAG 3 소개](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/)
- [DTCG 2025.10 stable version](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [Figma Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)

## 위키화 후보
- 없음. 기존 위키에 Base UI, Toast, Tailwind v4.3, WCAG, DTCG, Figma Code Connect 노트가 이미 있어 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- `Focus Not Obscured`를 sticky 영역, toast, popover 탭 순회 접근성 회귀 점검어로 유지.

## 승인 필요 (고위험)
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 전환하는 결정.
- Figma Code Connect로 저장소 컴포넌트와 Figma MCP 컨텍스트를 연결하는 작업.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-source-verifier — shadcn, Tailwind, WCAG, Figma 공식 문서를 기존 위키 노트와 대조해 중복과 날짜 오류를 검출.
