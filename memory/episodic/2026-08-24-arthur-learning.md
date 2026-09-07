---
date: 2026-08-24
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-24

## 오늘 배운 것
- shadcn/ui는 2026년 7월부터 신규 프로젝트 기본값을 `Base UI`로 바꿨지만 `Radix`는 계속 지원됩니다. 기존 `Radix` 프로젝트 전환은 자동화하면 안 되고 승인 대상입니다.
- shadcn/cli v4의 `--dry-run`, `--diff`, `--view`, `--base radix`는 에이전트가 컴포넌트 추가 전 변경 범위와 프리미티브를 확인하는 안전장치로 쓸 수 있습니다.
- `shadcn apply`는 기존 프로젝트의 theme, colors, CSS variables, fonts, icons를 갱신하지만 현재 base와 RTL 설정은 유지합니다. 그래도 디자인 시스템 영향 범위가 커서 diff 검토가 필요합니다.
- `MessageScroller`, `Message`, `Bubble`, `Attachment`, `Marker`와 `@shadcn/helpers/ai-sdk`는 AI 채팅 UI를 모델, API route, network, API key 없이 `useChat` 흐름으로 재현하고 승인 대기 흐름까지 테스트하는 데 유용합니다.
- Tailwind CSS v4.3 확인 항목은 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`입니다. 단, logical property utilities는 같은 글의 v4.2 항목이므로 v4.3 추가 기능으로 기록하면 안 됩니다.
- WCAG 2.2는 9개 성공 기준을 추가했고, `Target Size Minimum`은 기본 24x24 CSS pixels와 예외 조건을 둡니다. hover/focus popup은 dismissible, hoverable, persistent 조건을 만족해야 합니다.

## 출처
- [July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [March 2026 - shadcn/cli v4](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [April 2026 - shadcn apply](https://ui.shadcn.com/docs/changelog/2026-04-shadcn-apply)
- [June 2026 - Components for Chat Interfaces](https://ui.shadcn.com/docs/changelog/2026-06-chat-components)
- [AI SDK - shadcn/ui](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [July 2026 - Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [The Benefits of Code Connect in MCP](https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/)

## 위키화 후보
- `WCAG 1.4.13 Content on Hover or Focus` — tooltip, submenu, nonmodal popup의 dismissible, hoverable, persistent 체크리스트.

## 프로필 반영 후보 (저위험)
- shadcn 작업 전 `--dry-run`, `--diff`, `--view`로 변경 미리보기 후 적용.
- Tailwind v4.3 점검어에서 logical property utilities는 v4.2 항목으로 구분.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 `Base UI`로 강제하거나 기존 `Radix` 프로젝트를 자동 마이그레이션하는 규칙.
- 기존 프로젝트에 `shadcn apply`를 자동 적용해 theme, colors, fonts, icons를 바꾸는 규칙.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-change-preview — `shadcn` CLI 변경 미리보기, base 확인, diff 요약 자동화.
- [agent] popup-accessibility-reviewer — tooltip, hover card, submenu의 WCAG 1.4.13과 24x24 타깃 크기 검수.
