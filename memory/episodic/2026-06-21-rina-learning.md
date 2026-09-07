---
date: 2026-06-21
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-06-21

## 오늘 배운 것

- **Glassmorphism 2.0**: 무거운 frosted-blur 전면 적용은 퇴출. 2026 표준은 오버레이·모달·플로팅 네비게이션에 한정해 subtle translucency + noise texture + gradient border 조합으로 깊이 표현. 강한 명암비 유지 필수.

- **Bento Grid 레이아웃 정착**: 비대칭 비율 카드 모듈로 밀도 높은 정보를 시각적 과부하 없이 표현. 큰 카드 = 주 계층, 작은 카드 = 보조 정보. 대형 테크 제품 UI의 사실상 표준 패턴.

- **Tailwind v4.3 (2026-05-08) 신규 기능**: 퍼스트파티 `scrollbar-*` 유틸리티(스크롤바 커스텀 이제 CSS 수동 불필요), 논리적 프로퍼티 유틸리티 확장, `zoom`·`tab-size` 유틸리티 추가, `@variant` 개선. `not-*` 변형·`color-mix()` 내장도 v4 핵심.

- **shadcn/ui Luma 테마 (2026-03)**: 소프트 서피스·넓은 spacing·차분한 visual rhythm. Radix·Base UI 양쪽 지원. `registry:base` 타입 등장 → 컴포넌트+CSS변수+폰트+의존성 전체를 단일 페이로드로 배포 가능. 폰트가 first-class 레지스트리 타입으로 승격.

- **CSS Scroll-Driven Animations 2026**: `animation-timeline: scroll()` / `view()` 조합으로 JS 없이 스크롤 연동 애니메이션 구현. Chrome 145에서 scroll-triggered(시간 기반, 특정 오프셋 교차 시 발화) 추가 상륙. 컴포지터 스레드에서 실행 → 메인 스레드 블로킹 무관하게 부드러움. Firefox는 Nightly 기본 활성.

- **CSS `@property` 2026 주류화**: 95%+ 브라우저 지원. 등록된 커스텀 프로퍼티는 타입 안전·smooth interpolation 애니메이션·`inherits: false`로 컴포넌트 스코프 토큰 누수 차단 가능. 미등록 변수는 애니메이션이 snap(중간값 없음)하므로 토큰 애니메이션 시 반드시 `@property` 등록 필요.

## 출처

- [UI Design Trends for 2026 — Midrocket](https://midrocket.com/en/guides/ui-design-trends-2026/)
- [21 Web Design Trends 2026 — UI UX Showcase](https://uiuxshowcase.com/blog/21-web-design-trends-2026-design-for-humans-ai-first-web/)
- [Tailwind CSS v4.3 Blog](https://tailwindcss.com/blog)
- [Tailwind CSS v4 Complete Guide 2026 — DevToolbox](https://devtoolbox.dedyn.io/blog/tailwind-css-v4-complete-guide)
- [March 2026 - Introducing Luma — shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-03-luma)
- [CSS Scroll-Driven Animations — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Creating Complex Scroll-driven Animations 2026 — DEV Community](https://dev.to/nickbenksim/creating-complex-scroll-driven-animations-with-pure-css-in-2026-17l)
- [CSS @property Goes Mainstream 2026 — giorgiosaud.io](https://www.giorgiosaud.io/notebook/css-custom-properties-2026)
- [Providing Type Definitions with @property — Modern CSS Solutions](https://moderncss.dev/providing-type-definitions-for-css-with-at-property/)

## 위키화 후보

- `css-scroll-driven-animations` — `animation-timeline: scroll()/view()` 2종 비교·디자인 패턴(progress bar, parallax, reveal)·Firefox 지원 현황·`motion-safe:` 래핑 규칙 연계
- `css-at-property-등록-커스텀-프로퍼티` — 타입 선언·smooth 애니메이션·`inherits: false` 스코프 토큰 패턴, DTCG 3계층 토큰 노트와 연결

## 프로필 반영 후보 (저위험)

- `animation-timeline: view()` — 스크롤 연동 reveal 애니메이션 구현 시 JS 라이브러리 대신 CSS 우선 검토 원칙으로 추가
- Tailwind v4.3 `scrollbar-*` 유틸리티 — 스크롤바 커스텀 시 `scrollbar-thin/color-*` 유틸리티 우선 사용 원칙 추가

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

- [skill] `bento-layout-gen` — 기획 카드 목록을 입력받아 비대칭 Bento Grid CSS Grid 템플릿 코드 자동 생성 (반복되는 대시보드 레이아웃 프로토타이핑 자동화)


## 추가 학습 (18:31 UTC)
위키 검색 완료 — 기존 보유 지식(v4 container queries, 3계층 토큰, Rhea 스타일, Base UI vs Radix, DTCG, motion-safe, Anchor Positioning, Invoker Commands, WCAG 3.0 로드맵)은 제외하고 순수 신규 항목만 정리.

---

## 오늘 배운 것

- **Tailwind v4.3 first-party 스크롤바 유틸리티** (2026-05-08 출시): `scrollbar-auto / scrollbar-thin / scrollbar-none`으로 scrollbar-width 제어, 색상 유틸리티와 gutter 예약 지원 — JS 없이 브라우저 호환 가능. 기존 써드파티 플러그인(`tailwind-scrollbar`) 대체 가능.
- **Tailwind v4.3 `@container-size`**: inline-size 기반 기존 `@container`와 달리 **size(너비+높이) 기반** 컨테이너 쿼리 지원. 정사각 컨테이너 조건 분기에 활용 가능.
- **Tailwind v4 `not-*` variant**: 특정 variant·selector·미디어 쿼리와 **매치되지 않을 때만** 스타일 적용. 예: `not-hover:opacity-50`(호버 아닐 때만 반투명).
- **WCAG 2.2 SC 2.4.11 Focus Appearance (AA)**: 포커스 인디케이터 최소 면적 — 테두리 1 CSS px 이상(둘레 기준) 또는 최단 변 4 CSS px 이상 + 인접 비포커스 색 대비 **3:1** 필수. `:focus-visible` 사용이 현행 베스트 프랙티스 (마우스 클릭 시 링 제거, 키보드 탐색 시 유지).
- **shadcn `apply` 커맨드** (2026-04): 기존 프로젝트에서 `shadcn apply`로 preset 교체 시 컴포넌트·테마·CSS 변수·폰트·아이콘 일괄 갱신. Rhea/Luma 스타일 전환에 사용.
- **디자인 시스템 → 거버넌스 플랫폼**: 2026 업계 화두. 문서화 목적에서 AI 생성·인간 생성 UI 모두 검증하는 **능동적 정책 집행 레이어**로 역할 진화. 토큰·린트룰·컴포넌트 제약을 빌드 파이프라인에 통합.

---

## 출처

- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Scrollbar Styling and Container Size Utilities in Tailwind CSS v4.3.0 — Laravel News](https://laravel-news.com/scrollbar-styling-and-container-size-utilities-in-tailwind-css-v430)
- [April 2026 — shadcn apply — shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-04-shadcn-apply)
- [WCAG 2.2 for Brand Sites: The 2026 Fix List — Monotonomo](https://www.monotonomo.com/journal/wcag-2-2-brand-sites-2026/)
- [Understanding SC 2.4.11: Focus Not Obscured — W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)
- [12 UX/UI Design Trends Defining Product Design in 2026 — UXPin](https://www.uxpin.com/studio/blog/ui-ux-design-trends/)

---

## 위키화 후보

- `tailwind-v4-3-scrollbar-utilities` — first-party `scrollbar-thin/none/auto` + 색상 + gutter 예약 패턴 (플러그인 대체 기준 포함)
- `wcag-2-2-sc-2-4-11-focus-appearance` — 포커스 인디케이터 최소 면적·대비 요건 + `:focus-visible` 구현 패턴

---

## 프로필 반영 후보 (저위험)

- Tailwind v4.3 스크롤바 스타일링은 `scrollbar-thin / scrollbar-none / scrollbar-auto` 유틸리티 사용 (플러그인·JS 불필요); gutter 예약으로 레이아웃 시프트 방지
- WCAG 2.2 SC 2.4.11 포커스 인디케이터: `:focus-visible` + 인접 색 대비 3:1 + 최소 면적(테두리 1px 이상) 준수

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

_(없음)_


## 추가 학습 (18:31 UTC)
## 오늘 배운 것

- **shadcn/ui Luma (2026-03)**: 둥근 기하, 소프트 elevation, 넉넉한 간격이 특징인 새 스타일. macOS Tahoe 영감. Radix·Base UI 모두 지원. Rhea (2026-05)는 Luma의 compact 버전으로 정보 밀도 높은 product UI 전용.
- **CSS Anchor Positioning (Baseline 2026)**: Chrome 125+·Firefox 147+·Safari 26 전 브라우저 지원 확정. `anchor-name` / `position-anchor` / `position-area` 세 속성으로 툴팁·팝오버·드롭다운을 JS 라이브러리 없이 구현. Floating UI·Popper.js 대체 가능.
- **Tailwind CSS v4.3 (2026-05)**: 퍼스트파티 스크롤바 스타일링 유틸리티 추가 — 서드파티 플러그인(`tailwind-scrollbar`) 불필요. logical property 유틸리티 확장, `zoom`·`tab-size` 유틸리티 신규.
- **2026 UI 트렌드 — Calm Interface**: "비주얼 극장의 종말". 장식적 애니메이션·게이미피케이션 → 인지 부하 감소, 전략적 마이크로인터랙션으로 전환. `state-aware motion`(사용자 입력·시스템 로직 연동 애니메이션)이 핵심 패턴.
- **Generative UI (GenUI)**: 사용자 intent 기반 실시간 인터페이스 재구성. AI가 autopilot이 아닌 copilot으로 설계 — 선택적·비개입적 존재로 포지셔닝해야 UX 신뢰 확보.

## 출처

- [March 2026 - Introducing Luma - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-03-luma)
- [May 2026 - Introducing Rhea - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-05-rhea)
- [CSS Anchor Positioning: The End of JavaScript Tooltip Libraries - Pockit Blog](https://pockit.tools/blog/css-anchor-positioning-api-complete-guide/)
- [Tailwind CSS v4.0 - Tailwind CSS](https://tailwindcss.com/blog/tailwindcss-v4)
- [UX/UI design trends for 2026: calm interfaces, transparent AI - Envato](https://elements.envato.com/learn/ux-ui-design-trends)
- [12 UX/UI Design Trends That Are Defining Product Design in 2026 - UXPin](https://www.uxpin.com/studio/blog/ui-ux-design-trends/)

## 위키화 후보

- **CSS Anchor Positioning 패턴** — Baseline 2026 브라우저 지원 현황, 핵심 속성 3개(`anchor-name`·`position-anchor`·`position-area`), `@position-try` fallback 패턴, JS 라이브러리 대비 장점 정리
- **shadcn/ui Luma vs Rhea 스타일 비교** — 용도 기준(Luma=브랜드형 소프트 UI, Rhea=밀도 높은 product UI), Tailwind v4 `@theme` 토큰과의 연동 패턴

## 프로필 반영 후보 (저위험)

- 툴팁·팝오버·드롭다운 작업 시 CSS Anchor Positioning (Baseline 2026) 우선 검토 후 JS 포지셔닝 라이브러리 도입 결정
- Tailwind v4.3 커스텀 스크롤바 작업 시 서드파티 플러그인 대신 내장 scrollbar 유틸리티 우선 적용

## 승인 필요 (고위험)

_(없음)_
