---
date: 2026-08-24
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-24

## 오늘 배운 것
- `color-mix()` Baseline **Widely Available 도달일 2025-11-09** 확정 수치 검증 완료(web-features-explorer 원문 직접 확인) — 프리프로세서 없이 런타임 색상 파생에 안전 사용 가능.
- CSS `if()` 조건부 함수는 **Chrome/Edge만 지원, Firefox·Safari 미지원** 확정(MDN 원문 확인) — Baseline 아님, 크로미움 전용 타깃이 아니면 폴백 필수.
- Interop 2026 "Accessibility testing"은 CSS 포커스 영역 표가 아니라 별도 **"Investigation areas"(조사 영역)** 소속으로 확정(igalia.com 원문 확인) — 기존 위키 `interop.md`의 8개 CSS 포커스 목록에는 없던 사실이라 보강 가치 있음.
- WCAG 3.0은 여전히 W3C Working Draft, APCA는 2026년까지도 규범 미포함(exploratory) 상태 — 기존 `wcag-3-0-로드맵.md`·`apca.md`와 출처·내용 일치 재확인.
- `text-wrap: pretty`는 Firefox 미지원으로 Baseline 미도달 — 기존 `text.md`와 일치 재확인(`balance`는 안전).
- Utopia(utopia.fyi)의 유동 스케일 모델은 "뷰포트 간 보간(interpolation)" 방식이며 특정 프레임워크에 종속되지 않음을 원문에서 재확인.

**폐기**: 가변 폰트 접근성 드리프트 주장(typeyeah.com 원문에서 해당 구체 주장을 직접 확인하지 못해 미검증 폐기), WCAG 3.0 Recommendation 2028~2030 추정(단일 출처 전망치 — 기존 위키에 이미 동일 주의 문구 존재, 재기재 불필요.

## 출처
- [web-features-explorer: color-mix()](https://web-platform-dx.github.io/web-features-explorer/features/color-mix/)
- [Interop 2026 Focus Areas Announced — Igalia](https://www.igalia.com/news/interop-2026.html)
- [CSS if() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/if)
- [Adrian Roselli — WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Utopia](https://utopia.fyi/)

## 위키화 후보
- `interop.md`에 "Accessibility testing = Investigation areas 소속(Focus area 아님)" 정정 메모 1건 추가
- `color.md`에 `color-mix()` Baseline Widely Available 도달일(2025-11-09) 보강

## 프로필 반영 후보 (저위험)
- CSS `if()` Firefox·Safari 미지원 상태를 반응형 레이아웃 원칙 참고 메모로 추가
- `color-mix()` Baseline 도달일을 공용 컴포넌트 색상 토큰 가이드라인에 수치 보강

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 후보(출처-대조-검증기 계열) 이미 등록돼 있어 중복 제안 지양)
