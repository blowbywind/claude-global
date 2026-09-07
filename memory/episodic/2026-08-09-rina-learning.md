---
date: 2026-08-09
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-09

## 오늘 배운 것
- WCAG 3.0(2026-03 Working Draft: outcomes→174 requirements, Bronze/Silver/Gold 등급, CR 2027 Q4·RC 2028년 이전 불가)은 기존 위키(`wcag-3-0-outcomes-174-requirements...md`, `wcag-3-0-로드맵-메모를-cr-2027년...md`)에 이미 동일 사실로 검증·기록되어 있음 — **재확인**.
- `contrast-color()` Baseline "Newly Available"(2026-04, Chrome/Firefox/Safari 안정판 지원)은 MDN 직접 fetch로 재검증 완료, 기존 프로필 인사이트(2026-07-16)와 일치.
- scroll-driven animations의 Firefox 미지원(2026-06 기준 플래그 뒤)도 기존 위키(`반응형-레이아웃-구현-원칙에-scroll.md`, 2026-07-20)와 일치 — 다만 이번 리서치의 "Firefox 152, `layout.css.scroll-driven-animations.enabled` 플래그명" 은 기존 노트에 없던 세부 정보로 보강 가치 있음.
- CSS `if()`(Chrome 전용, Safari 2026~2027 로드맵), Base UI shadcn 기본화(2026-07-03 확정), DTCG v2025.10 안정판(2025-10-28, 24개+ 조직), Tailwind v4.2 `start-*`/`end-*` deprecated, Tailwind v4.3 scrollbar 유틸 — **전부 기존 위키에 동일 출처·동일 사실로 이미 기록된 중복 항목**. 리서치가 "신규 발견"으로 표기했으나 실제로는 재확인일 뿐, 오탐 표기임.

## 출처
- [WCAG 3.0 Working Draft](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [MDN: contrast-color()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/contrast-color) (직접 fetch 검증)
- [MDN: Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [W3C Design Tokens CG: 2025.10 stable](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [shadcn/ui changelog: Base UI default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)

## 위키화 후보
(없음 — 모두 기존 노트 갱신 대상, 신규 개념 없음)

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 원칙의 scroll-driven animations 참고 메모에 "Firefox 152(2026-06)까지도 플래그 비활성" 구체 버전 정보만 보강(기존 "미지원" 결론은 불변, 세부치 추가일 뿐)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 카탈로그의 "출처-대조-검증기" 류가 이미 이런 중복탐지 역할을 커버함)
