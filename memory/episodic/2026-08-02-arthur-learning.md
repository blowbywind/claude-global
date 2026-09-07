---
date: 2026-08-02
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-02

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 미리보기 UI 점검어로 유지할 만합니다. 출처: [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- shadcn/ui는 React Aria를 1급 component base로 추가했지만, Base UI가 기본값이고 Radix도 계속 지원됩니다. 기존 프로젝트 base 전환은 자동 결정하지 않습니다. 출처: [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- shadcn/ui React Aria `Button`은 링크에 쓰지 말고, plain `<a>`에 `buttonVariants`를 적용해야 링크 의미가 보존됩니다. 출처: [shadcn/ui Aria Button](https://ui.shadcn.com/docs/components/aria/button)
- WCAG2ICT 2.2는 WCAG 2.0, 2.1, 2.2 Level A/AA를 비웹 문서와 소프트웨어에 해석 적용하는 비규범 참고자료입니다. 데스크톱·모바일 앱 접근성 점검 보조 기준으로만 둡니다. 출처: [WCAG2ICT 2.2](https://www.w3.org/TR/wcag2ict-22/)
- `reading-flow`와 `reading-order`는 flex/grid/block의 접근성 노출 순서와 순차 초점 순서를 다루지만, 현재는 Chrome 137 계열 중심이라 점진 향상으로 검토합니다. 출처: [web.dev May 2025](https://web.dev/blog/web-platform-05-2025)
- CSS Anchor Positioning은 tooltip·dropdown 위치 계산을 선언형 CSS로 줄일 수 있고, DTCG 2025.10은 다중 브랜드·접근성 변형·OKLCH·Display P3 토큰 표현을 안정 명세로 정리했습니다. 단, DTCG는 W3C 표준이 아닙니다. 출처: [Anchor Positioning](https://web.dev/learn/css/anchor-positioning), [DTCG 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/), [DTCG Format Module](https://www.designtokens.org/TR/2025.10/format/), [DTCG Color Module](https://www.designtokens.org/TR/2025.10/color/)

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Aria Button](https://ui.shadcn.com/docs/components/aria/button)
- [WCAG2ICT 2.2](https://www.w3.org/TR/wcag2ict-22/)
- [web.dev May 2025](https://web.dev/blog/web-platform-05-2025)
- [CSS Anchor Positioning](https://web.dev/learn/css/anchor-positioning)
- [DTCG 안정 명세 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [DTCG Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/)
- [DTCG Color Module 2025.10](https://www.designtokens.org/TR/2025.10/color/)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, shadcn React Aria, WCAG2ICT, DTCG, Anchor Positioning, reading-flow 노트 보강으로 충분합니다.

## 프로필 반영 후보 (저위험)
- shadcn/ui React Aria `Button` 링크 구현 시 `<Button>` 대신 `<a>`와 `buttonVariants`를 사용하는 접근성 점검어 추가.

## 승인 필요 (고위험)
- React Aria를 신규 기본 base로 바꾸거나 기존 Radix/Base UI 컴포넌트를 마이그레이션하는 결정.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-release-note-verifier — Tailwind, shadcn/ui, WCAG2ICT, DTCG 공식 문서 기준으로 자가학습 후보를 검증하고 중복을 걸러냅니다.
