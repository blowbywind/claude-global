---
date: 2026-08-29
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-29

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-gutter-stable`, `@container-size`, `tab-*`는 스크롤 패널, 컨테이너 기반 레이아웃, 코드뷰 검수어로 계속 유지할 근거가 확인됨.
- shadcn/ui는 2026년 7월부터 신규 프로젝트 기본 primitive를 Base UI로 전환했지만, Radix는 계속 지원되며 기존 프로젝트는 마이그레이션 필수가 아님.
- shadcn Toast는 Base UI 프로젝트에서 작업 버튼, 상태 유형, Promise 처리, 쌓임 표시, 스와이프 닫기를 지원하므로 API 요청 피드백 UI 후보로 적합함.
- `@shadcn/helpers/ai-sdk`는 모델, API route, 네트워크 요청, API key 없이 실제 `useChat` 생명주기를 재현하며, `needsApproval` 기반 승인 흐름과 사용자 입력 재개까지 mock 가능함.
- Interest Invoker는 hover, focus, long-press 기반 popover를 JavaScript 없이 선언적으로 다루는 점진 향상 후보지만, Popover API 자체는 비모달 전용이고 모달은 `<dialog>`를 우선해야 함.
- WCAG 2.2에서 `Target Size (Minimum)`은 AA 기준으로 24 by 24 CSS pixels 또는 간격 예외를 확인해야 하며, `Focus Appearance`는 AAA 기준이므로 포커스 링 고강도 검수 항목으로 분리해 봐야 함.

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [shadcn/ui AI SDK helpers](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [MDN Using interest invokers](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [MDN Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [W3C Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Figma Code Connect](https://developers.figma.com/docs/code-connect/)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, Base UI, Toast, `@shadcn/helpers`, Popover, WCAG, Figma Code Connect 노트가 있어 보강 범위.

## 프로필 반영 후보 (저위험)
- `Focus Appearance`는 WCAG 2.2 AAA 검수어로 두고, AA 필수 기준인 `Target Size (Minimum)`과 구분한다.
- agent UI 회귀 테스트 점검어에 `@shadcn/helpers/ai-sdk`의 사용자 입력 재개와 승인 응답 흐름을 함께 둔다.

## 승인 필요 (고위험)
- 기존 Radix 기반 shadcn/ui 프로젝트를 Base UI로 전환하는 작업.
- Figma Code Connect와 Figma MCP를 실제 디자인 시스템 source of truth로 연결하는 작업.

## 신규 도구 후보 (에이전트/스킬)
- [skill] agent-ui-regression-fixtures — `@shadcn/helpers/ai-sdk`로 `useChat`, tool card, 승인 대기, 사용자 입력 재개 fixture를 표준화.
