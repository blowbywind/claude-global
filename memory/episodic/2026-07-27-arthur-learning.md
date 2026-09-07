---
date: 2026-07-27
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-27

## 오늘 배운 것
- shadcn/ui의 2026년 7월 `Toast`는 Base UI 프로젝트용으로 추가되었고, API 요청 상태 표시에는 `promises`, `status types`, `actions`, `stacking`, `swipe dismissal`를 검토할 가치가 있다.
- shadcn/ui의 `Spinner`, `Kbd`, `Button Group`, `Input Group`, `Field`, `Item`, `Empty`는 Radix, Base UI, React Aria와 함께 쓸 수 있는 공통 앱 UI 후보로 확인됐다.
- CSS `anchor()`는 Baseline 2026 기능이지만 구형 브라우저 확인이 필요하며, Anchor Positioning은 툴팁, 폼 오류, 드롭다운, 팝오버 위치 계산을 CSS 중심으로 줄일 수 있다.
- CSS `scroll-state()` container queries는 `scrollable`, `scrolled`, `snapped`, `stuck` 상태 기반 스타일링을 지원해 sticky 헤더와 스크롤 힌트를 자바스크립트 없이 구현할 때 유용하다.
- CSS scroll anchoring은 지연 로딩으로 생기는 스크롤 점프를 줄이지만 Baseline이 아니며, 커스텀 스크롤 로직과 충돌하면 `overflow-anchor: none`을 컨테이너 단위로 검토한다.
- WCAG2ICT는 비웹 문서와 소프트웨어에 WCAG 적용 방식을 설명하는 비규범 참고문서이며, DTCG 2025.10도 W3C 표준이 아닌 구현 의도 명세로 다뤄야 한다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui October 2025 New Components](https://ui.shadcn.com/docs/changelog/2025-10-new-components)
- [MDN anchor() CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/anchor)
- [MDN Using CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [MDN Overview of scroll anchoring](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
- [MDN Container scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [W3C WCAG2ICT Overview](https://www.w3.org/WAI/standards-guidelines/wcag/non-web-ict/)
- [DTCG Design Tokens Format 2025.10](https://www.designtokens.org/TR/2025.10/format/)
- [DTCG Design Tokens Draft](https://www.designtokens.org/tr/drafts/format/)

## 위키화 후보
- CSS Scroll Anchoring — 지연 로딩 스크롤 점프와 `overflow-anchor` 예외 처리 노트

## 프로필 반영 후보 (저위험)
- API 결과 UI에서 shadcn `Toast`의 `promise` 상태와 `status types`를 비동기 피드백 점검어로 추가
- 스크롤 UI 구현 시 `scroll-state()`와 `overflow-anchor`를 기본 점검어로 추가

## 승인 필요 (고위험)
- 기존 Radix 기반 프로젝트를 Base UI로 자동 전환하는 행동규칙은 프로젝트별 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-base-migration-review — Radix, Base UI, React Aria 컴포넌트 차이와 수동 검증 항목 정리
- [skill] scroll-ui-a11y-check — sticky, scroll-state, scroll anchoring, 포커스 가림을 함께 점검하는 스크롤 UI 검토 절차
