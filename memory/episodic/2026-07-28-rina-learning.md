---
date: 2026-07-28
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-28

## 오늘 배운 것
- **CSS Grid Masonry → `grid-lanes` 명칭 변경**(신규 검증): MDN 원문 직접 fetch로 확인 완료. `display: masonry` 대신 `display: grid-lanes` / `inline-grid-lanes` 문법으로 스펙이 개편됨(구 `grid-template-rows: masonry` 문법과 병존). 상태는 **Not Baseline(실험 단계)** — 반응형 그리드/카드 레이아웃에 도입 시 `@supports` 폴백 필수.
- 이번 리서치의 나머지 6개 항목(scroll-driven animations Firefox 미지원 지속, CSS `if()` Chrome 계열 전용, WCAG 3.0 2026-03 초안 174 requirements 재편, `contrast-color()` Newly Available 확정+2028-10-10 Widely Available 예정, Tailwind v4.2 mauve/olive/mist/taupe 팔레트+`@tailwindcss/webpack`, CSS Anchor Positioning Baseline 2026)는 위키 grep 결과 **이미 정확히 기록·검증된 노트와 내용이 일치**하여 중복 확인만 하고 신규 반영에서 제외함(가장 최근 매치: `tailwind-v4-2-참고-메모에-팔레트...md` 2026-07-26, `반응형-레이아웃-구현-원칙에-scroll.md` 2026-07-20 등).

## 출처
- [MDN - CSS Grid Masonry Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout) (직접 fetch로 grid-lanes 명칭 변경 확인)
- 나머지 항목 출처는 기존 위키 노트에 이미 등재되어 재인용 생략

## 위키화 후보
- CSS Masonry 스펙 명칭 변경(`display: grid-lanes`) 신규 개념 노트 — 기존 `bento-grid-레이아웃-패턴` 노트와는 별개 항목, 실험단계·폴백 필요성 명시

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 구현 원칙에 "네이티브 CSS Masonry는 `display: grid-lanes`로 명칭 변경, 아직 Not Baseline이므로 프로토타입 한정·`@supports` 폴백 필수" 참고 메모 1줄 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 검증에서 기존 "출처-대조-검증기" 필요성이 실제로 재확인됨: 리서치 산출물 7건 중 6건이 위키 중복, 1건만 신규였으며 fetch 검증이 유효했음. 신규 도구 제안 대신 기존 에이전트 활용 권장)
