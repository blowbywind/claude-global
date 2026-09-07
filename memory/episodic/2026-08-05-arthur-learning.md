---
date: 2026-08-05
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-05

## 오늘 배운 것
- `scroll-target-group: auto`, `:target-current`, `scrollIntoView({ container: "nearest" })`, Promise 기반 `scroll() / scrollTo() / scrollIntoView()`는 패널형 UI의 scroll-spy, 내부 스크롤 이동, 스크롤 후 하이라이트 로직 점검어로 유효하다. 단, Chrome 발표 기준이므로 `@supports`와 폴백 전제가 필요하다. 출처: https://developer.chrome.com/blog/new-in-web-ui-io26
- `container-type: scroll-state`와 `scroll-state(scrolled: bottom)`은 sticky header, 하단 도달 표시, 스크롤 힌트 같은 상태 UI를 자바스크립트 리스너 없이 줄이는 CSS 점검어로 유지할 만하다. 출처: https://developer.chrome.com/blog/new-in-web-ui-io26
- anchored container queries는 anchor-positioned tooltip/popover가 실제 fallback 위치에 따라 화살표, transform origin, 진입 애니메이션 방향을 바꾸는 패턴에 맞다. 출처: https://developer.chrome.com/blog/new-in-web-ui-io26
- `element.startViewTransition()`은 특정 DOM 서브트리만 전환해 나머지 화면 상호작용을 유지하는 미세 전환 후보지만, Chrome 147 발표 기능이므로 기본 구현이 아니라 progressive enhancement로 봐야 한다. 출처: https://developer.chrome.com/blog/new-in-web-ui-io26
- shadcn/ui 신규 프로젝트 기본값은 Base UI이며 Radix는 계속 지원된다. Radix를 기대하는 자동화 스크립트는 `-b radix`를 명시해야 하고, React Aria는 `--base aria`로 선택 가능한 first-class base다. 출처: https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default, https://ui.shadcn.com/docs/changelog/2026-07-react-aria
- WCAG-EM 2.0은 제품 범위 정의, 대표 샘플 선정, 평가, 보고 절차의 기준으로 유효하고, ACT Rules Format 1.1은 자동화와 수동 접근성 테스트 규칙을 재현 가능하게 문서화하는 형식으로 유효하다. 출처: https://www.w3.org/TR/wcag-em-2/, https://www.w3.org/TR/act-rules-format/

## 출처
- [Chrome for Developers: What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)
- [shadcn/ui: July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui: July 2026 - React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [W3C: WCAG Evaluation Methodology 2.0](https://www.w3.org/TR/wcag-em-2/)
- [W3C: ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)

## 위키화 후보
- `scroll-target-group` native scroll-spy - 활성 링크와 `aria-current`를 브라우저가 연결하는 스크롤 내비게이션 패턴.
- awaitable programmatic scrolling - smooth scroll 완료 후 후속 UI를 실행하는 패널형 UI 패턴.

## 프로필 반영 후보 (저위험)
- 스크롤 패널 점검어에 `scroll-target-group`, `:target-current`, `scrollIntoView({ container: "nearest" })`, Promise 기반 programmatic scrolling 추가.
- popover 점검어에 anchored container queries와 fallback 위치 기반 화살표/애니메이션 분기 추가.

## 승인 필요 (고위험)
- Chrome 중심 신규 CSS/DOM 기능을 production 기본 구현으로 채택하는 결정은 브라우저 지원표와 폴백 검증 후 승인 필요.
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 전환하는 작업은 기존 규칙대로 컴포넌트별 검증 계획과 별도 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] frontend-web-ui-watch - Chrome, shadcn/ui, W3C 변경을 브라우저 지원과 폴백 기준으로 요약하는 프론트엔드 자가학습 스킬.
