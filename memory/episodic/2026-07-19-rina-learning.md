---
date: 2026-07-19
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-19

## 오늘 배운 것
- **Scroll-driven Animations (`animation-timeline`/`scroll-timeline`/`view-timeline`)**: Chrome·Safari 26에서는 Baseline급이나 Firefox는 2026-06(v152) 기준까지도 플래그 뒤에 있어 완전한 Baseline 미도달 — 프로토타입에 스크롤 연동 모션(진행바·리빌 애니메이션) 적용 시 Firefox `@supports` 폴백 필수. 기존 위키에 여러 차례 "후보"로만 남아있고 실제 개념 노트가 없던 항목이라 신규 확정.
- **Interop 2026 CSS 포커스 11개 영역 확정**: anchor positioning, container style queries, `contrast-color()`, `shape()`/`attr()`, cross-document view transitions 포함 scroll/view-timeline 확장, `<dialog closedby>`/`:open`/`popover="hint"`, `zoom` 등 — 공용 컴포넌트·반응형 스택 로드맵 참고용 신규 정보.
- **CSS Anchor Positioning 브라우저 버전 상충 발견**: 이번 리서치는 "Chrome 125+/Firefox 132+/Safari 18.2+, Baseline 2026, 커버리지 약 91%"로 보고했으나, 기존 위키 노트(`css-anchor-positioning-브라우저별-지원-현황...md`, 2026-07-16)는 "Safari 26+ 필요"로 기록되어 있어 상충함. 둘 다 원출처(MDN/caniuse) 인용이라 이번 라운드에서 재검증 못함 → 프로필 반영 보류, 위키 노트 정정은 사람 검토 필요.
- **WCAG 3.0 / CSS `if()`**: 이번 검색은 기존 프로필 메모(APCA 미확정·WCAG 2.2 AA 병행, `if()` 프로토타입 한정)를 재확인만 함 — 문구 변경 불필요.

## 출처
- [MDN - Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [web.dev - Interop 2026](https://web.dev/blog/interop-2026)
- [MDN - position-anchor](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position-anchor)
- [W3C - WCAG 3.0 뉴스(2026-03)](https://www.w3.org/WAI/news/2026-03-03/wcag3/)
- [Chrome Developers - CSS if()](https://developer.chrome.com/blog/if-article)

## 위키화 후보
- `scroll-driven-animations` 신규 개념 노트 — Chrome/Safari 26 지원, Firefox 플래그 상태, `@supports` 폴백 패턴 (기존 후보로만 3회 이상 언급됐으나 실작성 없었음).
- `interop-2026-css-포커스-영역` 신규 로드맵 노트 — 11개 영역 목록, 공용 컴포넌트 스택 참고용.

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 구현 원칙에 "scroll-driven animations는 Firefox 미지원이므로 motion-safe·`@supports` 폴백 필수" 참고 메모 추가 검토.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
