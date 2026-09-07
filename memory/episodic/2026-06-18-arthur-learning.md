---
date: 2026-06-18
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-06-18

## 오늘 배운 것

- **Calm UI / 인지 부하 감소**: 2026 트렌드는 "과시적 애니메이션 제거". 모션은 사용자를 안내할 때만 사용하고, 중지 옵션(prefers-reduced-motion)을 반드시 제공. ([출처](https://elements.envato.com/learn/ux-ui-design-trends))
- **shadcn/ui 토큰 계층**: Primitive(raw값) → Semantic(역할 매핑) 2단계로 분리. 컴포넌트는 Semantic 변수만 참조 → 다크모드/멀티브랜드를 데이터 변경으로 처리. ([출처](https://shadcnspace.com/blog/shadcn-ui-handbook))
- **폼 분리 원칙**: React Hook Form이 상태 관리, shadcn/ui는 렌더링만. 폼 로직을 UI 컴포넌트 내부에 넣지 않는다. ([출처](https://medium.com/write-a-catalyst/shadcn-ui-best-practices-for-2026-444efd204f44))
- **Tailwind v4 CSS-first 설정**: `tailwind.config.js` 삭제, `@import "tailwindcss"` + `@theme` 디렉티브로 전환. Lightning CSS(Rust) 기반으로 incremental 빌드 100x 향상. 클래스명 변경 주의: `flex-shrink-0` → `shrink-0`, `bg-gradient-to-*` → `bg-linear-to-*`. ([출처](https://tailwindcss.com/blog/tailwindcss-v4))
- **WCAG 2.2 실무 핵심**: `outline: none` 대신 `:focus-visible` 사용, 텍스트 대비 4.5:1 이상, ARIA 남용 금지("no ARIA > bad ARIA"). 자동화 도구는 접근성 이슈의 30~40%만 탐지. ([출처](https://www.codewithseb.com/blog/web-accessibility-2026-eaa-ada-wcag-guide))
- **Container Queries 기본 탑재**: Tailwind v4에서 `@min-*`, `@max-*` 컨테이너 쿼리 variants 코어 포함 → 부모 컴포넌트 크기 기반 반응형이 별도 플러그인 없이 가능. ([출처](https://www.digitalapplied.com/blog/tailwind-css-v4-migration-new-features-guide))

## 출처

- [UX/UI design trends for 2026 — Envato](https://elements.envato.com/learn/ux-ui-design-trends)
- [The Ultimate shadcn/ui Handbook (2026 Edition)](https://shadcnspace.com/blog/shadcn-ui-handbook)
- [Shadcn UI Best Practices for 2026 — Medium](https://medium.com/write-a-catalyst/shadcn-ui-best-practices-for-2026-444efd204f44)
- [Tailwind CSS v4.0 공식 릴리즈 노트](https://tailwindcss.com/blog/tailwindcss-v4)
- [Tailwind CSS v4 Migration Guide 2026](https://www.digitalapplied.com/blog/tailwind-css-v4-migration-new-features-guide)
- [Web Accessibility 2026 — Frontend Survival Guide](https://www.codewithseb.com/blog/web-accessibility-2026-eaa-ada-wcag-guide)

## 위키화 후보

- **Tailwind v4 마이그레이션 체크리스트** — v3→v4 클래스명 변경 목록, CSS-first 설정 방법, `@tailwindcss/upgrade` CLI 활용 정리
- **shadcn/ui 토큰 계층 패턴** — Primitive/Semantic 2단계 변수 구조, 다크모드·멀티브랜드 적용 방법

## 프로필 반영 후보 (저위험)

- shadcn/ui 컴포넌트 설계 시 Primitive → Semantic 토큰 2단계 계층 적용 (멀티테마 대응)
- WCAG 2.2 AA(대비 4.5:1, `:focus-visible`, ARIA 최소화)를 접근성 구현 기준으로 사용

## 승인 필요 (고위험)

_(없음)_
