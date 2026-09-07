---
date: 2026-08-12
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-12

## 오늘 배운 것
- **scroll-driown animations 정정 필요**: 2026-07-23 위키가 "확정"으로 갱신했으나 원본 근거 노트(반응형-레이아웃-원칙의-scroll.md)를 재확인한 결과 실제 콘텐츠가 미작성 상태(권한요청 텍스트만 존재)이고, 이번 리서치에서도 2026-06 기준 Firefox 안정판은 여전히 플래그 뒤(`layout.css.scroll-driven-animations.enabled`)에 있음이 확인됨 → **"확정" 상태를 "검토중"으로 되돌리고 재검증 필요**(Interop 2026 우선순위 지정 자체는 사실이나 unflagged 출시는 아직).
- `contrast-color()`: Newly Available 유지, Widely Available 예정일 2028-10-10 재확인(기존 메모와 일치, 3대 엔진 WPT 통과).
- `light-dark()`: 신규 확인 — Newly Available(전 엔진), Widely Available 예정일 2026-11-13. 공용 컴포넌트 다크모드 토큰 가이드라인에 참고 가치 있음.
- CSS `if()`: Chrome/Edge/Opera만 지원, Firefox 구현중·Safari 로드맵 단계 — 기존 "프로토타입 한정" 권고 유효, 변경 불필요.
- Tailwind v4.3 scrollbar 유틸리티: 2026-04 정식 출시(v4.3.2는 6월) 확인, 기존 위키 메모와 정합.
- DTCG Design Tokens Format 2025.10판이 2025-10-28 정식 Stable 확정, 업계 채택률 84%(전년 56%) — 디자인 토큰 체계 도입 논의 시 근거자료로 활용 가능.

## 출처
- [web.dev Baseline digest Apr 2026](https://web.dev/blog/baseline-digest-apr-2026?hl=en)
- [web-features-explorer: contrast-color](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [web-features-explorer: light-dark](https://web-platform-dx.github.io/web-features-explorer/features/light-dark/)
- [W3C WAI news 2026-03-03 WCAG3](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [adrianroselli.com WCAG3 Contrast Apr 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [frontendhorizon.com scroll-driven animations](https://www.frontendhorizon.com/blog/view-transitions-api-and-css-scroll-driven-animations-the-browser-wins-of-2026)
- [testmuai.com CSS if() Firefox](https://www.testmuai.com/web-technologies/css-if-firefox/)
- [W3C DTCG Stable 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

## 위키화 후보
- `light-dark()` 함수 Baseline 현황(Newly Available, Widely 예정 2026-11-13) 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- DTCG Design Tokens Format 2025.10 Stable 채택률(84%) — 공용 컴포넌트 가이드라인 참고치로 병기.

## 승인 필요 (고위험)
- 반응형 레이아웃 원칙의 scroll-driven animations 메모 상태를 "확정"→"검토중(다음 세션 재검증)"으로 되돌리는 정정. 기존 "확정" 판단 자체가 근거 노트 미작성 상태에서 내려진 것이라 사용자 확인 후 정정 권고.

## 신규 도구 후보 (에이전트/스킬)
(없음)
