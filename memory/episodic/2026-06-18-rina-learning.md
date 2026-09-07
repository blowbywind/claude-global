---
date: 2026-06-18
bot: rina
type: web-research
tags: [self-learning, ]
---

# 리나 자가학습 — 2026-06-18

---

## 오늘 배운 것

- **Tailwind v4 CSS-First 설정**: `tailwind.config.js` 삭제, `@theme` 디렉티브로 CSS 파일 안에서 디자인 토큰(색상·간격·폰트·브레이크포인트) 직접 정의. JS 설정 파일 의존성 제거.
- **`@layer components` 패턴**: 재사용 컴포넌트 클래스(`.card`, `.btn`)를 `@layer components`에 정의하면 유틸리티 클래스로 오버라이드 가능한 구조가 자동 보장됨. 기존 `@apply` 남발 대비 명확한 우선순위.
- **`@utility` 디렉티브**: Tailwind에 없는 CSS 기능(예: `tab-size`, `content-visibility`)을 반응형·변형·임의값 지원 포함 커스텀 유틸리티로 등록 가능.
- **v4 빌드 성능**: 전체 빌드 3.78배, 증분 빌드 8.8배 향상. 가상 프로토타이핑 반복 속도 직접 수혜.
- **브레이크포인트 변수화**: `@theme { --breakpoint-3xl: 120rem; }` 방식으로 커스텀 bp 추가·기본값 제거 가능. 기존 `min-[...]` arbitrary 방식보다 토큰 일관성 유지에 유리.

## 출처

- [Tailwind CSS v4 블로그](https://tailwindcss.com/blog/tailwindcss-v4)
- [Tailwind CSS — Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Tailwind CSS — Responsive Design](https://tailwindcss.com/docs/responsive-design)

## 위키화 후보

- **Tailwind v4 CSS-First 설정 패턴** — `@theme` / `@layer components` / `@utility` 3개 디렉티브 사용법 및 v3 대비 차이점 정리 노트

## 프로필 반영 후보 (저위험)

- 컴포넌트 공용 클래스는 `@layer components`에 정의 → 유틸리티 오버라이드 가능하게 설계 (`.card rounded-none` 패턴 준수)


## 추가 학습 (16:20 UTC)
## 오늘 배운 것

- **Tailwind v4 CSS-First 설정**: `tailwind.config.js` 폐기 → `@theme {}` 블록에 CSS 변수로 디자인 토큰 선언. `--color-*`, `--font-*` 등이 자동 노출되어 디자인 시스템 연동이 단순해짐.  
  출처: https://tailwindcss.com/blog/tailwindcss-v4

- **`@layer components` 사용 기준 재정립**: v4 공식 입장은 유틸리티 우선, 컴포넌트 클래스는 **동일 패턴이 5회 이상 반복**될 때만 생성. `@apply`는 비권장, CSS 변수(`var(--spacing-2)`) 참조로 대체.  
  출처: https://tailwindcss.com/docs/adding-custom-styles

- **Container Queries 빌트인**: v3에서는 `@tailwindcss/container-queries` 플러그인 별도 필요 → v4부터 `@container` 기본 내장. Named Container(`@container/sidebar`) + Container Query Units(`50cqw`) 지원.  
  출처: https://tailwindcss.com/docs/responsive-design

- **JS 대체 유틸리티 2종**: `@starting-style`(첫 렌더링 CSS 애니메이션, JS transition 코드 제거), `field-sizing-content`(textarea 자동 높이, JS auto-resize 제거). 컴포넌트 구현 시 JS 의존도 줄일 수 있음.  
  출처: https://tailwindcss.com/blog/tailwindcss-v4

- **커스텀 브레이크포인트 CSS 선언**: `@theme { --breakpoint-xs: 30rem; }` 으로 JS config 없이 `xs:` 접두사 즉시 사용 가능.  
  출처: https://tailwindcss.com/docs/responsive-design

- **미디어 쿼리 출력 문법 변경**: v3 `@media (min-width: 768px)` → v4 `@media (width >= 48rem)`. 동작은 동일, 생성 CSS 문법만 다름 — 디버깅 시 주의.

---

## 출처

- [Tailwind CSS v4.0 공식 블로그](https://tailwindcss.com/blog/tailwindcss-v4)
- [Tailwind CSS - Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Tailwind CSS - Responsive Design (v4)](https://tailwindcss.com/docs/responsive-design)

---

## 위키화 후보

- **Tailwind v4 마이그레이션 체크리스트** — `tailwind.config.js` → `@theme {}` 전환, 플러그인 제거, 미디어 쿼리 문법 변경 등 v3→v4 주의 사항 정리 노트
- **Container Query Units 패턴** — `cqw`/`cqh` 단위로 컴포넌트 내부 유체 크기 지정하는 실전 패턴 (viewport 기반 `vw` 대체)

---

## 프로필 반영 후보 (저위험)

- `@layer components`는 동일 유틸리티 패턴 5회 이상 반복 시에만 생성; 그 미만은 인라인 유틸리티 유지
- Tailwind v4 커스텀 토큰은 `@theme {}` CSS 변수로 선언 (`tailwind.config.js` 미사용)

---

## 승인 필요 (고위험)

_(없음)_


## 추가 학습 (18:30 UTC)
## 오늘 배운 것

- **Design token 3계층 아키텍처 표준화**: Primitive(raw 값) → Semantic(의도 이름) → Component(요소별 특정) 순서. 컴포넌트 토큰은 반드시 semantic을 참조, primitive 직접 참조 금지. W3C Design Tokens Format Module v2025.10 확정(Adobe·Google·Meta·Figma 24개+ 조직 지지).
  출처: [Mavik Labs](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026/)

- **Tailwind v4 primitive 색상 = OKLCH 권장**: perceptual evenness(색지각 균등성) 보장. `@theme { --color-blue-500: oklch(0.6 0.15 250); }` 형태로 선언.
  출처: [Mavik Labs](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026/)

- **shadcn/ui Combobox 기본 예시 a11y 결함 3종**: `aria-haspopup="listbox"` 누락, `aria-expanded` 토글 누락, `aria-controls` 링크 누락 → 커스텀 구현 시 반드시 보완 필요.
  출처: [TheFrontKit a11y audit](https://thefrontkit.com/blogs/shadcn-ui-accessibility-audit-2026)

- **2026 핵심 UX 방향 = Calm UI**: 시각적 화려함 대신 인지 부하 감소. 애니메이션은 엔터테인먼트 목적이 아닌 **명확성(clarity)** 목적으로만 사용. NNG 보고서: "Design Deeper to Differentiate".
  출처: [Envato](https://elements.envato.com/learn/ux-ui-design-trends), [NNG](https://www.nngroup.com/articles/state-of-ux-2026/)

- **shadcn Data Table `<caption>` 누락**: `@tanstack/react-table` 기반 테이블에 `<caption>` 없으면 스크린리더 사용자가 테이블 맥락 파악 불가 → 필수 추가.
  출처: [TheFrontKit a11y audit](https://thefrontkit.com/blogs/shadcn-ui-accessibility-audit-2026)

---

## 출처

- [Design Tokens That Scale in 2026 (Tailwind v4 + CSS Variables) — Mavik Labs](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026/)
- [shadcn/ui Accessibility Audit 2026 — TheFrontKit](https://thefrontkit.com/blogs/shadcn-ui-accessibility-audit-2026)
- [UX/UI design trends for 2026: calm interfaces — Envato](https://elements.envato.com/learn/ux-ui-design-trends)
- [State of UX 2026 — Nielsen Norman Group](https://www.nngroup.com/articles/state-of-ux-2026/)
- [3 layer of design token matter — DEV Community](https://dev.to/harsh_dev_01/3-layer-of-design-token-matter-44f6)

---

## 위키화 후보

- **design-token-3-layer**: Primitive→Semantic→Component 3계층 토큰 구조 개념 노트 (W3C 표준 v2025.10 포함)
- **calm-ui-2026**: Calm Interface 패턴 — 인지 부하 감소 원칙, motion 사용 기준, 관련 NNG 자료 모음

---

## 프로필 반영 후보 (저위험)

- 디자인 토큰 선언 시 3계층(primitive→semantic→component) 준수; 컴포넌트 토큰은 항상 semantic 토큰을 참조 (primitive 직접 참조 금지)
- shadcn/ui 컴포넌트 커스텀 시 Radix 기본 ARIA(`aria-expanded`, `aria-haspopup`, `aria-controls`) 보존 여부 체크리스트 적용

---

## 승인 필요 (고위험)

_(없음)_
