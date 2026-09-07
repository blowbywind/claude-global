---
date: 2026-07-28
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-28

## 오늘 배운 것
- Tailwind v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `tab-*`, `zoom-*`, `@container-size`는 코드뷰, 로그뷰, 채팅 패널, 분할 뷰의 커스텀 CSS를 줄이는 검토 대상이다. 출처: [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui는 Base UI를 신규 기본값으로 바꿨지만 Radix를 계속 지원하며, React Aria도 `--base aria`로 선택 가능한 1급 base가 됐다. 기존 Radix 자동화는 필요 시 `-b radix`를 명시해야 한다. 출처: [Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default), [React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- `@shadcn/react/message-scroller`는 스트리밍 채팅의 자동 추적, 앵커링, 이전 메시지 prepend 위치 보존, 키보드 스크롤 가능한 transcript를 headless로 제공한다. 출처: [Message Scroller](https://ui.shadcn.com/docs/react/message-scroller)
- `@shadcn/helpers/ai-sdk`는 모델, API route, 네트워크 요청, API key 없이 `useChat` 흐름을 결정적으로 재현하므로 채팅 UI 프리뷰와 테스트에 적합하다. 출처: [AI SDK](https://ui.shadcn.com/docs/helpers/ai-sdk)
- 모바일 접근성에서는 `<meta name="text-scale" content="scale">`와 루트 글자 크기 하드코딩 여부를 함께 점검할 가치가 있다. WCAG2ICT는 비웹 문서와 소프트웨어에 WCAG 2.0, 2.1, 2.2를 적용하는 비규범 참고문서로만 다룬다. 출처: [MDN text-scale](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/text-scale), [WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/)
- 비모달 transient UI는 Popover API, 페이지 차단 모달은 `<dialog>`를 우선 기준으로 두고, `closedby="any"`와 `command`/`commandfor`는 선언형 동작 후보로 검토한다. 출처: [Chrome Web UI I/O 2025 Recap](https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui July 2026 - React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Message Scroller](https://ui.shadcn.com/docs/react/message-scroller)
- [shadcn/ui AI SDK helpers](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [shadcn/ui Registry MCP Server](https://ui.shadcn.com/docs/registry/mcp)
- [Chrome for Developers - What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)
- [MDN - meta name text-scale](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [Chrome for Developers - Web UI I/O 2025 Recap](https://developer.chrome.com/blog/new-in-web-ui-io-2025-recap)
- [W3C WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/)

## 위키화 후보
- `<meta name="text-scale" content="scale">` — 모바일 운영체제 텍스트 확대 반영과 `rem` 기반 설계 점검.
- `shadcn registry MCP 품질 기준` — registry 설명, dependencies, registryDependencies, kebab-case 검증 체크리스트.

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-gutter-*`, `tab-*`, `@container-size`를 로그, 코드뷰, 채팅 패널 점검어로 추가.
- `<meta name="text-scale" content="scale">`와 루트 글자 크기 미고정 여부를 모바일 접근성 체크에 추가.

## 승인 필요 (고위험)
- 기존 Radix 기반 프로젝트를 Base UI 또는 React Aria로 마이그레이션하는 행동 규칙.
- 프로젝트 생성 자동화에서 shadcn base 기본값을 변경하거나 `-b radix` 고정을 제거하는 결정.

## 신규 도구 후보 (에이전트/스킬)
- [skill] chat-transcript-a11y — `MessageScroller` 기반 자동 추적, prepend 보존, 키보드 스크롤, live region 점검.
- [skill] shadcn-registry-mcp-audit — registry 설명, dependencies, registryDependencies, kebab-case, registry index 검증.
