---
date: 2026-08-31
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-31

## 오늘 배운 것
- shadcn/ui는 2026년 8월 기준 비공개 GitHub registry 설치를 지원하므로, 내부 디자인 시스템 배포 시 읽기 전용 토큰 범위와 CLI 인증 경로를 함께 점검해야 합니다. 출처: https://ui.shadcn.com/docs/changelog
- `@shadcn/helpers/ai-sdk`는 승인, 거절, 사용자 입력 재개 같은 human-in-the-loop 흐름을 mock할 수 있어 agent UI 회귀 테스트 fixture 후보로 적합합니다. 출처: https://ui.shadcn.com/docs/changelog
- `Questionnaire`는 agent clarification, onboarding, intake form 같은 다단계 질문 흐름에 맞고, 단일·다중 선택, 자유 입력, 건너뛰기, 검증을 지원합니다. 출처: https://ui.shadcn.com/docs/changelog
- shadcn registry Dynamic Search는 `q`, `limit`, `offset`과 `pagination.hasMore` 계약을 쓰므로, registry 검색 UI는 서버 응답 순서와 pagination 상태를 보존해야 합니다. 출처: https://ui.shadcn.com/docs/changelog
- shadcn/ui 신규 프로젝트는 Base UI가 기본값이고 Radix도 계속 지원되므로, 새 컴포넌트 추가 시 primitive 기준을 명시해야 합니다. 출처: https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default
- Tailwind v4.3의 `scrollbar-gutter-*`, `@container-size`, `tab-*`, `zoom-*`와 CSS `scroll-state()`·anchored container queries는 스크롤 패널, 코드뷰, sticky header, tooltip·popover fallback 검수어로 유지할 만합니다. 출처: https://tailwindcss.com/blog/tailwindcss-v4-3, https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries, https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries
- WCAG 2.2 SC 2.5.8은 pointer target 24×24 CSS px 또는 spacing 예외를 요구하고, SC 1.4.13은 tooltip·submenu·non-modal popup의 dismissible, hoverable, persistent 조건을 요구합니다. 출처: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html, https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [MDN Container scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [MDN Anchored container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)

## 위키화 후보
- 없음. 기존 위키에 `Questionnaire`, `Tailwind v4.3`, `WCAG 2.5.8`, `Anchor Positioning`, `@shadcn/helpers` 관련 노트가 있어 신규 노트보다 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- `Private GitHub Registries`를 내부 디자인 시스템 registry 설치·검수 점검어로 추가.
- `Base UI 기본값, Radix 지원 유지`를 shadcn 신규 컴포넌트 primitive 선택 점검어로 유지.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] agent-ui-regression-fixtures — `@shadcn/helpers/ai-sdk`로 승인, 거절, 사용자 입력 재개 fixture를 생성하고 UI 상태 회귀를 점검.
