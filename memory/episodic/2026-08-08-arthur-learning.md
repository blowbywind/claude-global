---
date: 2026-08-08
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-08

## 오늘 배운 것
- React Compiler 적용 프로젝트에서는 신규 `useMemo`를 기본값처럼 추가하지 말고, 느린 계산·`memo` 전달값·Hook 의존값 안정화처럼 성능 근거가 있을 때만 허용한다. 출처: [React `useMemo` 공식 문서](https://react.dev/reference/react/useMemo)
- Tailwind v4.3 점검어는 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`로 검증된다. v4.2의 logical property 유틸리티와 `font-features-*`도 다국어 레이아웃·코드뷰 typography 점검어로 유효하다. 출처: [Tailwind CSS v4.3 발표](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn `Questionnaire`는 agent 확인 프롬프트, 온보딩, 설정 폼을 조건부 질문과 native form serialization으로 구성할 때 후보가 된다. 출처: [shadcn/ui 변경 기록](https://ui.shadcn.com/docs/changelog)
- shadcn registry Dynamic Search는 `q`, `limit`, `offset`, `pagination` 기반 서버 검색을 지원하므로 대형 내부 컴포넌트 registry에서는 전체 카탈로그 다운로드 대신 서버 검색 설계를 검토한다. 출처: [shadcn/ui 변경 기록](https://ui.shadcn.com/docs/changelog)
- 중첩 스크롤 패널에서는 `scrollIntoView({ container: "nearest" })`로 페이지 전체 스크롤 전파를 줄일 수 있고, programmatic scrolling의 Promise 완료 후 하이라이트·포커스 이동을 동기화하는 패턴을 점검한다. 출처: [Chrome 웹 UI 업데이트](https://developer.chrome.com/blog/new-in-web-ui-io26)
- Popover 위치 구현은 UA 기본 `inset: 0`, `margin: auto`를 리셋하고, anchored container queries의 `@container anchored(fallback: ...)`로 fallback 위치별 화살표·애니메이션을 CSS에서 처리할 수 있다. 출처: [MDN `:popover-open`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:popover-open), [Chrome anchored container queries](https://developer.chrome.com/blog/anchored-container-queries)

## 출처
- [React `useMemo` 공식 문서](https://react.dev/reference/react/useMemo)
- [Tailwind CSS v4.3 발표](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui 변경 기록](https://ui.shadcn.com/docs/changelog)
- [Chrome 웹 UI 업데이트](https://developer.chrome.com/blog/new-in-web-ui-io26)
- [Chrome anchored container queries](https://developer.chrome.com/blog/anchored-container-queries)
- [MDN `:popover-open`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:popover-open)
- [WCAG-EM 2.0](https://www.w3.org/TR/WCAG-EM/)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, shadcn registry/helpers/Questionnaire, Popover, WCAG-EM 노트 보강 범위.

## 프로필 반영 후보 (저위험)
- 중첩 스크롤 패널 점검어에 `scrollIntoView({ container: "nearest" })`와 Promise 기반 programmatic scrolling 추가.
- 대형 내부 컴포넌트 registry 설계 점검어에 shadcn Dynamic Search의 `q`, `limit`, `offset`, `pagination` 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] streaming-ui-preview — `@shadcn/helpers`로 AI 채팅 UI의 로딩·스트리밍·에러 상태 프리뷰와 회귀 테스트를 자동화.
