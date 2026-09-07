---
date: 2026-07-18
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-18

## 오늘 배운 것
- shadcn/ui는 Base UI를 신규 프로젝트 기본값으로 바꾸었고, React Aria도 `--base aria`로 선택 가능한 정식 base가 됐다. Radix 기반 자동화는 `-b radix` 고정이 필요하다.
- `@shadcn/helpers`는 실제 모델, API 라우트, 네트워크 요청, API 키 없이 `useChat` 생명주기와 스트리밍 상태를 재현해 채팅 UI 프리뷰와 테스트에 쓸 수 있다.
- `@shadcn/react/message-scroller`는 채팅 스크롤의 anchoring, auto-follow, prepend preservation, scroll commands, visibility를 headless primitive로 분리한다.
- `shadcn/typeset`은 HTML·렌더링된 Markdown을 한 CSS 파일로 표준화하고, streaming append 중 기존 블록 스타일이 흔들리지 않도록 설계됐다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 컨테이너 기반 UI 구현 점검어로 유효하다.
- WCAG 2.2는 W3C Recommendation이며, DTCG v2025.10은 첫 stable design tokens 명세지만 W3C Standards Track은 아니므로 토큰 파이프라인은 버전 고정과 변경 추적이 필요하다.

## 출처
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui Introducing @shadcn/helpers](https://ui.shadcn.com/docs/changelog/2026-07-helpers)
- [shadcn/typeset](https://ui.shadcn.com/docs/typeset)
- [shadcn/ui Components for Chat Interfaces](https://ui.shadcn.com/docs/changelog/2026-06-chat-components)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Tailwind CSS v4.1](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [MDN Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [DTCG FAQ](https://www.designtokens.org/faq/)

## 위키화 후보
- `@shadcn/react/message-scroller` — 채팅 스크롤 상태 관리 primitive로 독립 노트 가치 있음
- `Tailwind v4.3 scrollbar/@container-size` — 기존 Tailwind 노트 보강 후보

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`를 프론트 UI 점검어로 추가
- `@shadcn/helpers`와 `MessageScroller`를 AI 채팅 UI 프리뷰·회귀 테스트 후보로 유지

## 승인 필요 (고위험)
- `shadcn init` 자동화의 기본 base를 Base UI로 바꾸는 행동 규칙은 기존 Radix 운영과 충돌 가능성이 있어 승인 필요
- 기존 프로젝트의 Radix/Base UI/React Aria 마이그레이션은 컴포넌트별 검증 계획과 별도 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] chat-ui-streaming-harness — `@shadcn/helpers`와 `MessageScroller`로 스트리밍 채팅 UI 상태를 재현·검증
- [agent] accessibility-ui-reviewer — WCAG 2.2와 Tailwind 입력장치·safe alignment 유틸 기준으로 컴포넌트 접근성 리뷰
