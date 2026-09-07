---
date: 2026-08-01
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-01

## 오늘 배운 것
- shadcn/ui 신규 프로젝트 기본 base는 Base UI로 확인됨. Radix는 계속 지원되므로 기존 Radix 앱은 유지하고, 마이그레이션은 컴포넌트별 검토 대상이다.
- React Aria는 shadcn/ui의 정식 component base이며 `--base aria` 초기화를 지원한다. 접근성 요구가 큰 신규 UI에서는 Base UI와 비교 후보로 둔다.
- shadcn/ui `Toast`는 Base UI 프로젝트에서 actions, status types, promises, stacking, swipe dismissal을 지원하므로 API 저장·동기화·실패 피드백 UI 후보로 적합하다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 미리보기 줌, 복합 상태 스타일 점검어로 유지할 가치가 있다.
- W3C는 최신 WCAG 사용을 권장하며 현재 실무 기준은 WCAG 2.2 중심이 안전하다. WCAG2ICT는 비웹 문서·소프트웨어 적용을 돕는 비규범 참고자료로만 써야 한다.
- Chrome Interest Invoker API는 origin trial 단계이므로 Anchor Positioning, Popover API와 함께 tooltip·hover card의 점진 향상 후보로만 본다. M3 Expressive의 Expressive search 변화는 Android/Compose 쪽 트렌드 추적 항목이다.

## 출처
- [shadcn/ui: July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui: July 2026 - React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [W3C WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [W3C WCAG2ICT](https://www.w3.org/TR/wcag2ict/)
- [Chrome Developers: Google I/O 2025 updates](https://developer.chrome.com/blog/web-at-io25)
- [Material Design: What’s new at Google I/O 2026](https://m3.material.io/blog/whats-new-at-io26)

## 위키화 후보
- `Interest Invoker API` — Popover API와 Anchor Positioning 기반 tooltip·hover card 점진 향상 노트로 보강.

## 프로필 반영 후보 (저위험)
- `Toast` 패턴은 Base UI 프로젝트 한정 API 피드백 UI 후보로 표기.
- `WCAG2ICT`는 요구사항이 아니라 비웹 UI 접근성 해석 참고자료로 표기.

## 승인 필요 (고위험)
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 자동 마이그레이션하는 규칙.
- Interest Invoker API를 기본 tooltip·hover card 구현 방식으로 채택하는 규칙.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-base-migration-review — Radix/Base UI/React Aria 컴포넌트 차이와 수동 검증 항목 정리.
- [skill] frontend-accessibility-check — WCAG 2.2/WCAG2ICT 기준 UI 컴포넌트 점검 체크리스트 생성.
