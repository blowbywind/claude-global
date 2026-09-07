---
date: 2026-08-15
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-15

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`는 공식 추가가 확인됐다. 스크롤 패널, 코드뷰, 컨테이너 반응형 UI에서 우선 검토한다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui `Toast`의 `actions`, `status types`, `promises`, `stacking`, `swipe dismissal`는 Base UI 프로젝트용으로 확인됐다. API 피드백 후보로 유지하되 전 프로젝트 기본값으로 일반화하지 않는다. [출처](https://ui.shadcn.com/docs/changelog)
- shadcn registry Dynamic Search는 `q`, `type`, `limit`, `offset`을 받고, 응답의 `pagination` 존재로 서버 검색 처리를 판별한다. 내부 컴포넌트 레지스트리 점검어로 유효하다. [출처](https://ui.shadcn.com/docs/registry/dynamic-search)
- shadcn `Questionnaire`는 단일 선택, 다중 선택, 자유 입력, 건너뛰기 질문을 지원한다. React Aria `Button` 링크형 구현은 `<Button>`이 아니라 `<a>`와 `buttonVariants`를 써야 한다. [출처](https://ui.shadcn.com/docs/components/base/questionnaire), [출처](https://ui.shadcn.com/docs/components/aria/button)
- WCAG 2.2는 포인터 대상 최소 크기 24x24 CSS 픽셀을 요구하되 예외가 있다. 포커스 표시는 2px 두께 둘레가 가장 단순한 충족 방식이다. WCAG2ICT는 비웹 문서·소프트웨어용 비규범 참고자료다. [출처](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [출처](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html), [출처](https://www.w3.org/TR/wcag2ict-22/)
- CSS Anchor Positioning은 툴팁·드롭다운을 기준 요소에 선언적으로 배치한다. `anchor-scope`는 Baseline 2026 기능으로 앵커 범위를 하위 트리로 제한한다. [출처](https://web.dev/learn/css/anchor-positioning), [출처](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/anchor-scope)
- M3 Expressive 연구는 큰 버튼과 고대비 containment가 핵심 행동 탐색성을 높일 수 있음을 보이지만, 제품 맥락과 익숙한 패턴을 깨면 사용성이 떨어질 수 있다고 경고한다. [출처](https://design.google/library/expressive-material-design-google-research)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui Dynamic Search](https://ui.shadcn.com/docs/registry/dynamic-search)
- [shadcn/ui Questionnaire](https://ui.shadcn.com/docs/components/base/questionnaire)
- [shadcn/ui React Aria Button](https://ui.shadcn.com/docs/components/aria/button)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.2 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [WCAG2ICT 2.2](https://www.w3.org/TR/wcag2ict-22/)
- [web.dev CSS Anchor Positioning](https://web.dev/learn/css/anchor-positioning)
- [MDN anchor-scope](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/anchor-scope)
- [Google Design M3 Expressive Research](https://design.google/library/expressive-material-design-google-research)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn, WCAG, Anchor Positioning, M3 Expressive 관련 노트가 이미 있어 신규 노트보다 기존 노트 보강이 적합하다.

## 프로필 반영 후보 (저위험)
- Anchor Positioning 점검어에 `anchor-scope` 범위 제한과 구형 브라우저 폴백 확인을 추가.
- M3 Expressive 적용 시 큰 버튼·강한 containment를 주요 행동에 한정하고, 제품 도메인과 기존 패턴 유지 여부를 함께 점검.

## 승인 필요 (고위험)
- Tailwind v4.3 업그레이드나 shadcn Base UI 전환은 의존성·디자인 시스템 변경이므로 프로젝트별 승인 필요.
- M3 Expressive를 모든 업무형 UI 기본 스타일로 강제하는 규칙은 제품 맥락별 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] 프런트 접근성 회귀 점검 — 대상 크기, 포커스 표시, 링크 의미, 키보드 흐름을 스크린샷과 테스트 기준으로 검수.
- [agent] design-system-auditor — Tailwind, shadcn, M3 Expressive 적용 범위와 컴포넌트 일관성을 검토.
