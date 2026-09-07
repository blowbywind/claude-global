---
date: 2026-07-18
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-18

## 오늘 배운 것
- Tailwind CSS v4.2: `@tailwindcss/webpack` 플러그인, 기본 팔레트 4종(mauve/olive/mist/taupe) 추가, block-방향 논리속성 유틸리티(`inset-s-*`, `inline-*`, `block-*`), `font-features-*` 유틸리티 신설 — 공용 컴포넌트 가이드라인 갱신 대상.
- Container **Style** Queries(일반 컨테이너 쿼리와 별개)가 2026-05-19 Firefox 151 지원으로 Baseline Newly Available 도달. 단 커스텀 프로퍼티 쿼리만 지원되고 `font-weight`/`color` 등 일반 속성 쿼리는 아직 불가 — 반응형 컴포넌트 설계 시 이 제약을 전제해야 함.
- CSS Anchor Positioning은 Chrome 125+/Firefox 132+/Safari 18.2+로 Baseline 2026(전역 커버리지 약 91%) 도달했지만, `@position-try` 자동 플립은 Safari 26+/Firefox 147+가 필요 — 팝오버/툴팁 프로토타입에 자동 플립을 쓰려면 폴백 필요.
- CSS `if()` 함수는 Chrome(Chromium) 137+ 전용 실험 기능, Safari·Firefox 미구현 — 프로덕션 컴포넌트에 바로 적용 금지, 실험적 프로토타입에 한정.
- WCAG 3.0 일정 갱신: 2026년 3월 Working Draft가 최신, CR은 2027년 4분기, 정식 Recommendation은 2028년 이후(공동의장 목표는 2029년 말) — 기존 "미확정" 메모를 구체 일정으로 보강.
- (재확인, 신규 아님) Base UI의 shadcn 공식 기본값 전환과 `contrast-color()` Baseline Newly Available은 기존 인사이트(07-16)와 일치, 공식 changelog 출처로 재확인됨.

## 출처
- [shadcn/ui changelog: Base UI 기본값 전환](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [web.dev Baseline digest: April 2026 (contrast-color)](https://web.dev/blog/baseline-digest-apr-2026)
- [web.dev Baseline digest: May 2026 (Container Style Queries)](https://web.dev/blog/baseline-digest-may-2026)
- [caniuse: CSS Anchor Positioning](https://caniuse.com/css-anchor-positioning)
- [Oddbird: Anchor Position Area Update](https://www.oddbird.net/2025/10/13/anchor-position-area-update/)
- [web.dev: Interop 2026](https://web.dev/blog/interop-2026)
- [WebKit: Announcing Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026/)
- [Chrome Developers: CSS if()](https://developer.chrome.com/blog/if-article)
- [caniuse: CSS if()](https://caniuse.com/css-if)
- [InfoQ: Tailwind CSS 4.2 + webpack](https://www.infoq.com/news/2026/04/tailwind-css-4-2-webpack/)
- [Laravel News: Tailwind CSS 4.2.0](https://laravel-news.com/tailwindcss-4-2-0)
- [W3C WAI: WCAG 3.0 news 2026-03-03](https://www.w3.org/WAI/news/2026-03-03/wcag3/)

## 위키화 후보
- Container Style Queries(커스텀 프로퍼티 전용, 일반 컨테이너 쿼리와 구분되는 신규 Baseline 항목) 개념 노트 신설 가치 있음.

## 프로필 반영 후보 (저위험)
- Tailwind v4.2 논리속성 유틸리티(`inset-s-*`/`inline-*`/`block-*`)를 반응형 레이아웃 구현 원칙에 참고 메모로 추가.
- CSS `if()` 실험단계(Chrome전용) 주의 문구를 공용 컴포넌트 가이드라인에 "프로토타입 한정, 프로덕션 미적용" 참고치로 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
