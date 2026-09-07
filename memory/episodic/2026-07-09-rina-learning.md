---
date: 2026-07-09
bot: rina
type: web-research
tags: [self-learning, presentation & slide design, visual/graphic design & SVG iconography, color & typography systems]
---

# 리나 자가학습 — 2026-07-09

## 오늘 배운 것

- **OKLCH 색공간** — W3C CSS Color Level 4 표준. `L` 조절 시 색조·채도 왜곡 없어 다크모드·WCAG 대비 충족 스케일을 일관되게 설계 가능. CSS 커스텀 프로퍼티에 `oklch(60% 0.15 240)` 형태로 직접 사용.
- **CSS `light-dark()`** — `color-scheme: light dark` 선언 후 `background: light-dark(#fff, #1a1a1a)` 형태로 JS·클래스 조작 없이 브라우저 수준 즉시 테마 전환. Chrome 123+, Firefox 120+, Safari 17.5+ 지원.
- **CSS Container Queries 실무 정착** — `container-type: inline-size`로 부모 크기 기준 컴포넌트 단위 반응형 설계. 글로벌 뷰포트 미디어쿼리 탈피 → 재사용 컴포넌트가 배치 맥락에 독립적으로 반응.
- **스크롤 애니메이션 `scroll()` vs `view()` 구분** — `animation-timeline: scroll()` 은 전체 스크롤 진행도 기준, `view()` 는 뷰포트 진입·이탈 기준. 원칙에 이미 `view()` 반영됨; `scroll()`은 진행 표시바·헤더 축소 등에 추가 활용.
- **접근성 오버레이 법적 리스크** — FTC가 accessiBe에 약 100만 달러 제재(2025). 오버레이 JS 위젯이 WCAG 요건을 실질적으로 충족 못 한다는 규제 판례 — 기존 메모리 항목 보강.

> **버린 항목**: WCAG SC 2.4.11/2.4.13 (이미 [2026-07-01] 기록됨·중복) / "Imperfect by Design"·"Liquid Layouts for presentations" (출처 모두 상업적 AI 슬라이드 도구 자사 블로그 — 독립 검증 불가, 폐기)

---

## 출처

- [CSS Color Level 4 — OKLCH](https://www.w3.org/TR/css-color-4/#specifying-oklch)
- [MDN — CSS light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- [W3C CSS Containment Level 3](https://www.w3.org/TR/css-contain-3/)
- [web.dev — Scroll-driven animations](https://web.dev/articles/scroll-driven-animations)
- [getstark.co — FTC & accessiBe](https://www.getstark.co/blog/the-ftc-accessibility-overlays-and-what-it-means-for-you/) *(경쟁사 블로그 — FTC 원문 교차확인 권장)*

---

## 위키화 후보

- `OKLCH 색공간` — CSS Color Level 4 표준 기반 지각 균등 색공간, 다크모드·WCAG 대비 스케일 설계 실전 가이드
- `CSS Container Queries` — 뷰포트 독립 컴포넌트 반응형 설계 패턴, `container-type` 사용법·Anti-pattern 포함

---

## 프로필 반영 후보 (저위험)

- `OKLCH` — 색상 시스템 설계 시 CSS Color Level 4 OKLCH 우선 검토
- `CSS light-dark() / animation-timeline: scroll()` — 네이티브 CSS 테마·스크롤 애니메이션 도구셋 추가

---

## 승인 필요 (고위험)

*(없음)*

---

## 신규 도구 후보

*(없음)*
