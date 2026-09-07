---
date: 2026-08-19
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-19

## 오늘 배운 것
- shadcn/ui `Questionnaire`는 고정 선택, 자유입력, 다중선택, 건너뛰기, 검증, 조건부 질문을 지원하며 Base UI, React Aria, Radix 전반에서 제공된다. agent 확인 프롬프트 후보로는 검증됨. [출처](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- Tailwind CSS v4.3의 검증된 신규 축은 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`, `--default()` 기반 functional utility다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- 내부 스크롤 패널과 코드뷰는 `scrollbar-gutter-stable`로 레이아웃 흔들림을 줄이고, 높이 기반 반응형이 필요한 컴포넌트는 `@container-size`를 점검어로 유지한다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- WCAG 2.5.8은 타깃 크기 24 x 24 CSS px 기준과 예외를 함께 정의한다. 주요 버튼, 아이콘 액션, 행 액션은 예외 통과보다 최소 크기 충족을 기본 목표로 둔다. [출처](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- WCAG 1.4.13에 따라 tooltip, hover card, popover는 hover 또는 focus로 열린 콘텐츠가 닫을 수 있고, hover 가능하며, 충분히 유지되는지 회귀 점검해야 한다. [출처](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- 최신 폼 점검어로 `field-sizing: content`, `:user-invalid`, 접근 가능한 오류 알림, 키보드 포커스 관리를 추가하고, Anchor Positioning UI는 fallback 위치에 따른 화살표와 애니메이션 방향도 확인한다. [출처](https://developer.chrome.com/docs/modern-web-guidance/get-started), [출처](https://developer.chrome.com/blog/new-in-web-ui-io26)

## 출처
- [shadcn/ui 2026년 8월 Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [WCAG 2.5.8 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 1.4.13 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [Chrome Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance/get-started)
- [Chrome What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)

## 위키화 후보
- 없음. 기존 위키에 `Questionnaire`, Tailwind v4.3, WCAG 2.5.8, Anchor Positioning 관련 노트가 있어 신규 노트보다 보강 범위.

## 프로필 반영 후보 (저위험)
- agent 확인 프롬프트 UI 점검어에 `Questionnaire`의 fixed, freeform, multiple, skippable 답변 계약을 유지.
- 폼과 popover 회귀 점검어에 `field-sizing: content`, `:user-invalid`, `dismissible/hoverable/persistent`, anchored container queries를 추가.

## 승인 필요 (고위험)
- `Questionnaire`를 모든 agent 확인 프롬프트의 단일 기본 컴포넌트로 고정하는 행동규칙 변경.
- Tailwind `--default()` 기반 내부 디자인 시스템 유틸리티 API 도입.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-accessibility-regression — WCAG 2.5.8, WCAG 1.4.13, focus, target, tooltip, popover 회귀 점검 체크리스트 생성.
