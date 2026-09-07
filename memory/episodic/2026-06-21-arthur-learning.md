---
date: 2026-06-21
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-06-21

**기존 위키 파악 완료.** 이미 기록된 내용: Tailwind v4(`@utility`/container queries/scrollbar), shadcn/ui(CLI v4, Base UI, Luma·Rhea), WCAG 2.2/3.0, scroll-driven animation, DTCG, `@layer` 스택, `prefers-reduced-motion`. 이 항목들은 중복 제외.

---

## 오늘 배운 것

- **CSS Anchor Positioning Baseline 2026 달성** — Chrome 125+, Firefox 147+, Safari 26+ 전 브라우저 지원 완료. Tooltip·Dropdown에서 Floating UI 없이 CSS만으로 구현 가능. `@position-try`로 viewport overflow 시 fallback 위치 선언적 지정.
- **`@position-try` Safari 주의** — 18.2–18.3은 기본 `anchor()`만 지원, `@position-try`(뷰포트 플리핑)는 18.4+ 필요. 합리적인 점진적 성능 저하로 프로덕션 사용 가능.
- **CSS Anchor Positioning 한계** — shadow DOM 교차·virtualized list(앵커 DOM 언마운트) 케이스는 여전히 Floating UI 필요. Base UI primitive도 내부적으로 `@floating-ui/react` 의존.
- **shadcn/ui `shadcn/skills` (CLI v4, 2026-03)** — AI 코딩 에이전트에게 컴포넌트·레지스트리 컨텍스트 제공. `registry.json` 파일 하나로 공개 GitHub 레포를 레지스트리화 가능.
- **shadcn/ui Sera 스타일 + `shadcn apply` (2026-04)** — Rhea보다 더 compact한 신규 스타일 Sera 도입. `shadcn apply`로 프리셋 부분 적용(Partial Preset Apply) 지원.

## 출처
- [CSS Anchor Positioning: Baseline 2026 — pockit.tools](https://pockit.tools/blog/css-anchor-positioning-api-complete-guide/)
- [CSS Anchor Positioning: Replace Floating UI — botmonster.com](https://botmonster.com/web-dev/css-anchor-positioning-tooltips-popovers/)
- [shadcn/ui Changelog — ui.shadcn.com](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui March 2026 CLI v4 — ui.shadcn.com](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [MDN: Using CSS anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using)

## 위키화 후보
- `css-anchor-positioning-패턴` — `anchor()` / `@position-try` / popover attribute 조합 패턴, Floating UI 대체 기준 + Safari 18.4 분기 처리
- `shadcn-ui-sera-스타일` — Sera vs Rhea vs Luma 3종 compact 밀도 스펙트럼 비교 및 용도 선택 기준

## 프로필 반영 후보 (저위험)
- CSS Anchor Positioning(Baseline 2026): 신규 Tooltip/Dropdown 구현 시 Floating UI 대신 CSS 우선 검토, `@position-try` + `popover` attribute 조합 패턴 적용
- `shadcn apply` 부분 프리셋 적용: 스타일 초기화 시 전체 대신 partial apply 워크플로 활용

## 승인 필요 (고위험)
_(없음)_

## 신규 도구 후보 (에이전트/스킬)
_(없음)_


## 추가 학습 (19:31 UTC)
## 오늘 배운 것

- **`light-dark()` 핵심 함정**: `color: light-dark(#333, #fff)` 단독 사용은 무의미 — `:root { color-scheme: light dark; }` 선언이 선행돼야 브라우저 스위칭이 작동. 없으면 항상 light 값 반환. Tailwind v4 dark mode와 별개로 동작하므로 CSS 변수 레벨에서 함께 써야 함. ([web.dev](https://web.dev/articles/light-dark))

- **`light-dark()` 이미지 지원 확장 (2026-03)**: 기존 색상 값만 받던 것에서 `image` 값도 허용하도록 스펙 갱신. 다크/라이트 배경 이미지 전환을 CSS 한 줄로 처리 가능. ([bram.us](https://www.bram.us/2026/03/19/more-easy-light-dark-mode-switching-light-dark-is-about-to-support-images/))

- **CSS `@starting-style` — JS 없는 진입 애니메이션**: `<dialog>`, `<popover>`, `display: none → block` 전환에 `@starting-style` + `transition-behavior: allow-discrete` 조합으로 JS 없이 진입 애니메이션 구현. shadcn/ui popover·dialog에 Tailwind 없이도 적용 가능. Chrome 117+, Firefox 129+, Safari 17.5+ 지원 — 미지원 브라우저는 애니메이션 없이 정상 표시(Progressive Enhancement). ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style), [LogRocket](https://blog.logrocket.com/animating-dialog-popover-elements-css-starting-style/))

- **View Transitions API — Next.js 15 공식 지원**: App Router 라우트 변경을 `startViewTransition`으로 감싸면 하드웨어 가속 페이지 전환. focus·스크린리더 보존(a11y 안전). 권장 지속 시간 300–500ms, `prefers-reduced-motion` 페어링 필수. ([Next.js 공식 가이드](https://nextjs.org/docs/app/guides/view-transitions))

- **View Transitions Spatial UI 원칙**: "최단 경로 이동" — 모달이 슬라이드 인 시 배경은 Z축 미세 push-back, 아이콘 → 서치바는 morph 전환. 애니메이션 자체가 아닌 "사용자가 무엇이 바뀌었는지 이해"하는 데 기여해야 유효. ([DevTo](https://dev.to/krish_kakadiya_5f0eaf6342/mastering-smooth-page-transitions-with-the-view-transitions-api-in-2026-31of))

- **`light-dark()` Baseline 타임라인**: Chrome 123(2024-03), Safari 17.4, Firefox 120 출시 완료. "Widely available" 도달은 2026-11 예정 — 그 전까지 `:root { color-scheme }` 없는 구형 기기 fallback 고려. ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark))

## 출처
- [CSS light-dark() — web.dev](https://web.dev/articles/light-dark)
- [light-dark() image support — bram.us](https://www.bram.us/2026/03/19/more-easy-light-dark-mode-switching-light-dark-is-about-to-support-images/)
- [@starting-style — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style)
- [Animating dialog/popover — LogRocket](https://blog.logrocket.com/animating-dialog-popover-elements-css-starting-style/)
- [View Transitions in Next.js — Next.js Docs](https://nextjs.org/docs/app/guides/view-transitions)
- [View Transitions 2026 patterns — DEV](https://dev.to/krish_kakadiya_5f0eaf6342/mastering-smooth-page-transitions-with-the-view-transitions-api-in-2026-31of)

## 위키화 후보
- `css-light-dark-function` — `color-scheme` 필수 gotcha + 이미지 지원(2026) + Tailwind v4 연동 패턴
- `css-starting-style-entry-animation` — dialog/popover JS-없는 진입 애니메이션, `transition-behavior: allow-discrete` 조합

## 프로필 반영 후보 (저위험)
- `light-dark()` + `color-scheme: light dark` 쌍 선언을 다크모드 CSS 변수 구현 표준 기법으로 추가
- View Transitions API `startViewTransition` + `prefers-reduced-motion` 페어링을 라우팅 구현 참고 기법으로 추가

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음


## 추가 학습 (19:32 UTC)
---

## 오늘 배운 것

- **React 19 `useActionState` 폼 패턴**: `useFormState`가 `useActionState`로 리네임. shadcn/ui 공식 Next.js 폼 문서도 이 기준으로 업데이트. `pending` prop으로 로딩 UI 제어, 성공 시 uncontrolled 폼 자동 리셋. 복잡한 클라이언트 유효성 검사는 여전히 React Hook Form + Zod 조합 권장.

- **Next.js 15 View Transitions (experimental)**: `next.config.js`에 `viewTransition: true` 설정으로 활성화. 아직 프로덕션 비권장. **성능 함정**: 느린 Server Component와 함께 쓰면 RSC 스트리밍 대기 중 페이지가 frozen되어 오히려 UX 악화. 빠른 정적 라우트에만 적용 권장.

- **Zustand + TanStack Query 역할 분리 원칙**: Zustand = client state(UI, 사용자 설정), TanStack Query = server state(API 데이터). **핵심 규칙: 서버 데이터를 Zustand에 중복 저장 금지** — 동기화 버그 발생. Apollo → TanStack+Zustand 교체 시 번들 70% 감소 사례 확인.

- **shadcn/ui Sera 스타일 (2026-04)**: 7번째 스타일 출시. Playfair Display + Noto Sans 조합, editorial 감성. 총 스타일: Vega·Nova·Maia·Lyra·Mira·Luma·Sera. 기하/간격/느낌 자체가 달라지므로 테마 변경과 다름. Radix·Base UI 모두 지원.

- **CSS `@starting-style` Baseline 2026**: Chrome 117+, Safari 17.5+, Firefox 129+ 지원 완료. `display: none` 요소의 entry/exit 애니메이션을 JS 없이 구현. `transition-behavior: allow-discrete`와 함께 사용해야 exit 포함 완성. 팝오버·모달 dismiss 애니메이션에 즉시 적용 가능.

---

## 출처

- [shadcn/ui Next.js Form Docs](https://ui.shadcn.com/docs/forms/next)
- [React v19 Blog](https://react.dev/blog/2024/12/05/react-19)
- [Next.js View Transitions Guide](https://nextjs.org/docs/app/guides/view-transitions)
- [Federated State: Zustand + TanStack Query Patterns](https://www.nextsteps.dev/en/posts/federated-state-done-righ/)
- [shadcn/ui April 2026 — Sera](https://ui.shadcn.com/docs/changelog/2026-04-sera)
- [CSS @starting-style Complete Guide 2026](https://devtoolbox.dedyn.io/blog/css-starting-style-guide)
- [Now in Baseline: animating entry effects](https://web.dev/blog/baseline-entry-animations)

---

## 위키화 후보

- **`zustand-tanstack-query-분리-원칙`** — 서버 상태(TanStack Query)와 클라이언트 상태(Zustand) 역할 경계 정리, 중복 금지 규칙 및 번들 최적화 근거 포함
- **`css-starting-style-entry-exit-애니메이션`** — `@starting-style` + `transition-behavior: allow-discrete` 조합으로 JS 없이 팝오버·모달 enter/exit 구현 패턴

---

## 프로필 반영 후보 (저위험)

- React 19 폼 구현 시 `useActionState` 기준으로 작성 (`useFormState` deprecated), 복잡 유효성은 RHF+Zod 병행
- Zustand에 서버 데이터 저장 금지 — 서버 상태는 TanStack Query 단독 관리 원칙 적용

---

## 승인 필요 (고위험)

_(없음)_
