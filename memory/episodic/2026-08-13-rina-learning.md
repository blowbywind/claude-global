---
date: 2026-08-13
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-13

## 오늘 배운 것
- WCAG 3.0: APCA는 2023년 초안 단계에서 이미 제외됨(확정 후보 아님) — 기존 위키의 "미확정" 판단과 정합, 근거만 보강됨.
- `contrast-color()`: 2026-04-10 Baseline "Newly Available" 도달(Chrome 147/Firefox 146/Safari 26 3대 엔진 안정판), "Widely Available" 예상일 2028-10-10 — 기존 참고 메모(2026-07-17)와 일치 재확인.
- CSS `if()`: 여전히 Chrome/Edge 137+ 전용, Firefox 구현 진행 중, Safari는 2026~2027 로드맵 — 기존 "프로토타입 한정, 프로덕션 미적용" 원칙 유지.
- scroll-driven animations: "Firefox 미지원"이 아니라 132+에서 구현은 됐으나 안정판(152)에선 플래그 뒤 기본 비활성(Nightly만 기본 켜짐) — 07-23 "확정" 메모의 근거 문구가 부정확했음. 결론(motion-safe+`@supports` 폴백 유지)은 그대로 유효하므로 실무 지침 변경은 없고 사유 문구만 정밀화 필요.
- CSS Anchor Positioning: 07-27 메모("Baseline 2026, 커버리지 91%")가 비공식 블로그(testmuai.com) 단일 출처였는데, 이번에 확인한 web-features 공식 이슈트래커·oddbird.net은 "`@position-try` 등 미완성으로 non-Baseline, 커버리지 ~81%(2026-07 기준)"라고 상충 — 기존 메모가 과신된 상태였음, 정정 필요.
- 참고: 이번 세션도 WebFetch 권한이 거부되어 1차 출처 직접 재확인은 불가, 기존 위키 교차대조로만 검증함(기존 오귀속 패턴 인지 중).

## 출처
- [Adrian Roselli: WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [web-features-explorer: contrast-color()](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [caniuse: CSS if()](https://caniuse.com/css-if)
- [Mozilla Connect: scroll-driven animations 구현 요청 스레드](https://connect.mozilla.org/t5/ideas/implement-css-scroll-driven-animations-animation-timeline/idi-p/116931)
- [web-features GitHub Issue #3558 (Anchor Positioning Baseline 논쟁)](https://github.com/web-platform-dx/web-features/issues/3558)
- [OddBird: Winging It #31](https://www.oddbird.net/2026/04/16/winging-it-31/)
- [Style Dictionary: DTCG 지원 현황](https://styledictionary.com/info/dtcg/)
- [web.dev: Interop 2026](https://web.dev/blog/interop-2026)

## 위키화 후보
- `css-anchor-positioning-브라우저별-지원-현황` / `anchor-positioning-baseline-2026-도달을-반응형-레이아웃-원칙에.md` 정정: "Baseline 2026 확정·91%" 단정 문구를 "출처 상충, non-Baseline 가능성(~81%), 적용 전 caniuse 재확인 필요"로 수정.
- `반응형-레이아웃-원칙의-scroll.md` 계열 메모: scroll-driven animations Firefox 사유를 "미지원" → "132+ 구현되었으나 안정판 플래그 뒤 비활성(Nightly만 기본 켜짐)"으로 정밀화(폴백 유지 결론 불변).

## 프로필 반영 후보 (저위험)
- Interop 2026 CSS 포커스 영역(anchor positioning, `attr()`, `contrast-color()`, custom highlights 등 20개)이 진행 중이며 Interop 2027은 아직 미시작임을 용어 갱신 수준으로 인지.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보
- (없음 — 출처 대조·권한 정합 관련 에이전트는 기존 후보들과 중복되어 추가 제안 생략)
