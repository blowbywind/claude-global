---
date: 2026-08-17
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-17

## 오늘 배운 것
- **WCAG 3.0 로드맵**: CR 2027년 4분기 예상·정식 Recommendation 2028년 이전 아님 — 위키 기존 메모(07-25/07-26)와 일치, 갱신 불필요.
- **CSS Anchor Positioning**: "Baseline 도달" 주장과 "일부 브라우저 미지원" 주장이 여전히 상충 — 위키에 이미 기록된 정정 메모("출처 상충, 단정 금지")와 동일한 결론, 재확인만 되고 신규 정보 없음.
- **scroll-driven animations / `color-mix()` / CSS `if()`**: 위키에 각각 어제(08-16)·기존 다회 확정된 내용과 완전히 일치(재확인). 추가 반영 불필요 — 동일 주제 재검증은 다음부터 생략 권고.
- **컨테이너 쿼리 단위(cqw/cqi 등) 채택률 수치**: 전역 지원 93%+, 2026년 프로덕션 78% 사용 — 기존 `css-container-queries.md`에 없던 정량 데이터로, 컴포넌트 반응형 타이포그래피 근거 보강에 유용.
- **Fluid Typography 확장 패턴**: `clamp(MIN, vw+rem, MAX)`을 폰트뿐 아니라 padding/margin/gap/border-radius에도 동일하게 적용 가능 — 기존 `clamp()+cqi` 노트에 없던 확장 포인트, 공용 컴포넌트 spacer 설계(CLAUDE.md §2.1)에 직접 참고 가치.
- **Cascade Layers**: 전역 96%+로 사실상 보편화, `:has()`+컨테이너 쿼리+네이티브 nesting과 결합 시 특이도 제어 표준 도구로 자리잡는 추세 — 기존 노트에 트렌드 문구만 보강할 수준.

## 출처
- [WCAG 3.0 news](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [MDN — CSS Anchor positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)
- [MDN — Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [MDN — CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- [caniuse — CSS container query units](https://caniuse.com/css-container-query-units)
- [MDN — Cascade layers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Fluid Typography guide](https://moderncsstools.com/guides/fluid-typography/)

## 위키화 후보
- 없음 — 컨테이너 쿼리 채택률 수치·spacing 확장 패턴은 기존 `css-container-queries.md`/`clamp()+cqi` 노트에 짧은 보강 문구로 추가하는 편이 신규 노트보다 적절.

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 구현 원칙에 "`clamp()` 패턴을 padding/margin/gap/border-radius로도 확장 적용 가능" 참고 메모 1줄 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 백로그의 WebFetch 권한 정합 이슈는 이번 세션엔 재발하지 않아 추가 제안 생략)
