---
date: 2026-08-05
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-05

## 오늘 배운 것
- **WCAG 3.0 로드맵**: CR(Candidate Recommendation) 2027년 4분기 예상, 정식 Recommendation은 2028년 이전 불가 — 기존 메모와 일치, 소스만 최신화(W3C WAI 2026-03 공지).
- **APCA**: 2023년 WCAG3 초안 제외 이후에도 여전히 대비 알고리즘 미확정, WCAG3 전체가 2030년 이전 완성 어려움 — 기존 판단 재확인.
- **`contrast-color()`**: 2026-04 Baseline "Newly Available" 도달(Chrome 147/Firefox 146/Safari 26.0), "Widely Available" 예정일 2028-10-10 — 기존 인사이트 수치와 일치, 소스 보강.
- **Base UI**: shadcn/ui 신규 설치 기본값 전환 확정일이 2026-07-03(공식 changelog)로 특정됨 — 기존 "공식 확정" 메모에 날짜만 보강.
- **scroll-driven animations**: Firefox 미지원 지속(flag 뒤), Interop 2026 우선순위 지정 — Mozilla Connect(1차 소스)로 신뢰도 보강, 기존 폴백 원칙 재확인.
- **light-dark()**: Widely Available 도달 예정일 2026-11-13 — 다크모드 토큰 전략 메모에 추가할 신규 수치.

**정정(폐기)**: ①"Tailwind v4.3에 팔레트(mauve/olive/mist/taupe)·webpack 플러그인 신규 추가"는 오류 — 공식 블로그(tailwindcss.com/blog/tailwindcss-v4-3) 직접 확인 결과 두 항목은 v4.2 기능이며 v4.3 신규는 scrollbar 유틸리티·`@container-size`·`zoom-*`·`@variant` 개선(이미 위키 `tailwind-v4-3-스크롤바-container.md`에 정확히 기록됨). ②CSS Anchor Positioning 브라우저 버전(Firefox 132+/Safari 18.2+)은 testmuai.com 단일 출처로 기존 위키(caniuse/MDN 1차 소스, Firefox 147+/Safari 26+)와 상충 — 기존 노트가 더 신뢰도 높아 폐기. ③DTCG Resolver, `contrast-color()` 자가보정 페어링 등은 이미 위키에 노트 존재 — 신규 아님.

## 출처
- [W3C WAI: WCAG 3.0 갱신](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [AbilityNet: WCAG 3.0 전망](https://abilitynet.org.uk/resources/digital-accessibility/what-expect-wcag-30-web-content-accessibility-guidelines)
- [yatil.net: WCAG 3 is not ready yet](https://yatil.net/blog/wcag-3-is-not-ready-yet)
- [web-features-explorer: contrast-color()](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [shadcn/ui changelog: Base UI default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [Mozilla Connect: scroll-driven animations](https://connect.mozilla.org/t5/ideas/implement-css-scroll-driven-animations-animation-.../idi-p/116931)
- [web-features-explorer: light-dark()](https://web-platform-dx.github.io/web-features-explorer/features/light-dark/)
- [Tailwind CSS 공식 블로그: v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3) — 정정용 직접 검증 소스

## 위키화 후보
- 신규 노트 불필요 — 전부 기존 노트(`tailwind-v4-3-스크롤바-container.md`, `css-anchor-positioning-브라우저별-지원-현황...md`, `dtcg-resolver-2025-10.md` 등) 갱신 대상.

## 프로필 반영 후보 (저위험)
- `light-dark()` Widely Available 도달 예정일(2026-11-13)을 다크모드 토큰 전략 메모에 추가
- Base UI 공식 전환 정확 일자(2026-07-03)를 공용 컴포넌트 스택 메모에 보강

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 후보로 충분, 이번 정정 사례가 그 필요성을 재확인시킴)
