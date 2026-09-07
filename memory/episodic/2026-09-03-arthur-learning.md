---
date: 2026-09-03
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-09-03

## 오늘 배운 것
- Tailwind CSS v4.3의 확인된 신규 범위는 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`이며, 논리 속성 유틸리티는 v4.2 항목으로 분리해야 합니다. 출처: [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui 신규 프로젝트 기본값은 Base UI이고 Radix는 계속 지원되며, React Aria도 `--base aria`로 선택 가능한 1급 component base입니다. 출처: [Base UI](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default), [React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- `Questionnaire`는 단일/다중 선택, 자유 입력, 건너뛰기, 검증, 조건부 질문을 지원하므로 agent 확인 프롬프트와 온보딩 폼 후보로만 유지합니다. 출처: [Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- `@shadcn/helpers/ai-sdk`는 모델, API 라우트, 네트워크, API 키 없이 `useChat` 흐름과 승인 대기 tool call을 재현하므로 chat/tool/approval UI 회귀 테스트에 유용합니다. 출처: [AI SDK](https://ui.shadcn.com/docs/helpers/ai-sdk)
- WCAG 2.2 AA에서는 포인터 대상 `24 x 24 CSS px` 또는 간격 예외와, sticky header/footer/toast가 키보드 포커스를 완전히 가리지 않는지 확인해야 합니다. 출처: [Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [WCAG Quickref](https://www.w3.org/WAI/WCAG22/quickref/)
- CSS `scroll-state()`와 Anchor Positioning은 sticky 상태, snapped 상태, tooltip, popover 구현 후보지만 `@supports`, 최신 문법, 대상 브라우저 지원을 확인하는 점진적 향상으로만 둡니다. 출처: [CSS scroll-state](https://developer.chrome.com/blog/css-scroll-state-queries), [CSS Anchor Positioning](https://developer.chrome.com/blog/anchor-positioning-api)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui AI SDK](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C WCAG Quickref](https://www.w3.org/WAI/WCAG22/quickref/)
- [Chrome CSS scroll-state queries](https://developer.chrome.com/blog/css-scroll-state-queries)
- [Chrome CSS Anchor Positioning](https://developer.chrome.com/blog/anchor-positioning-api)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn base, Questionnaire, WCAG 2.5.8, Anchor Positioning, scroll-state 노트가 있어 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- `scroll-state()` 점검어에 `@supports`와 `prefers-reduced-motion`을 함께 둔다.
- `@shadcn/helpers/ai-sdk`를 chat/tool/approval UI의 결정론적 회귀 fixture 후보로 유지한다.

## 승인 필요 (고위험)
- 기존 Radix 기반 shadcn/ui 프로젝트를 Base UI 또는 React Aria로 전환.
- shadcn/ui private GitHub registry를 내부 디자인 시스템이나 agent 규칙 배포 표준으로 채택.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-base-diff — `init/add` 전 Base UI, Radix, React Aria 후보의 변경 diff와 의존성 영향을 요약.
- [skill] agent-ui-fixture-lab — `@shadcn/helpers/ai-sdk`로 대화, tool call, 승인/거절 fixture를 생성해 UI 회귀 테스트에 재사용.
