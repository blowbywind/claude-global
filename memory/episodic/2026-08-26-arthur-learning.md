---
date: 2026-08-26
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-26

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, 복합 `@variant`는 스크롤 패널과 코드뷰 점검어로 유지할 근거가 확인됨.
- shadcn/ui는 신규 프로젝트 기본 primitive를 Base UI로 바꿨지만 Radix를 계속 지원하며, 기존 Radix 앱은 자동 마이그레이션하지 않는 판단이 맞음.
- `@shadcn/helpers`는 `useChat` 생명주기 기반으로 승인 대기, 거절, 이어쓰기 흐름을 mock할 수 있어 agent 승인 UI 회귀 테스트에 적합함.
- shadcn/ui Toast는 Base UI 프로젝트 한정으로 action, status, promise, stacking, swipe dismissal을 지원하므로 API 요청 피드백 UI 후보로 유지 가능함.
- WCAG-EM 2.0은 평가 범위, 샘플, 평가, 보고 절차를 주는 방법론이며 새 WCAG 요구사항은 아님. WCAG2Mobile은 타깃 크기 24 x 24 CSS px 기준을 모바일에도 직접 참고하도록 설명함.
- Interop 2026과 Chrome Web UI 업데이트 기준으로 Anchor Positioning, container style queries, dialog, popover, scroll-state queries, anchored container queries는 tooltip, popover, sticky bar 구현 시 지원표와 폴백 검증이 필요함.

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui Human in the Loop](https://ui.shadcn.com/docs/changelog/2026-08-helpers-human-in-the-loop)
- [shadcn/ui Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [W3C WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/)
- [W3C WCAG2Mobile](https://www.w3.org/TR/wcag2mobile-22/)
- [web.dev Interop 2026](https://web.dev/blog/interop-2026)
- [Chrome for Developers: What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)
- [Figma MCP: What the MCP sends vs. what the agent does](https://developers.figma.com/docs/figma-mcp-server/mcp-vs-agent/)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn Base UI, Toast, helpers, WCAG2Mobile, Interop 2026, Figma MCP, Anchor Positioning 노트가 있어 신규보다 보강 범위.

## 프로필 반영 후보 (저위험)
- `scroll-state` queries와 anchored container queries를 sticky bar, tooltip arrow, fallback-aware popover 점검어로 유지.
- WCAG-EM 2.0의 범위 정의, 대표 샘플, 평가 보고 절차를 접근성 검수 체크리스트 용어로 유지.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 Base UI로 고정하거나 기존 Radix 앱을 마이그레이션하는 결정.
- Chrome 중심 신규 CSS 기능을 production 기본 구현으로 채택하는 결정.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-compat-gate — Anchor Positioning, Popover API, `scroll-state`, `@container-size` 지원표와 폴백을 점검.
- [skill] shadcn-private-registry-audit — private registry 설치 전 토큰 범위, 저장소 권한, 설치 파일 영향을 검토.
