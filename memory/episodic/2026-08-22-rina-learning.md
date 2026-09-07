---
date: 2026-08-22
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-22

## 오늘 배운 것
- `light-dark()`: Newly Available(2024-05-13)에 이어 **Widely Available 도달일이 2026-11-13**로 확정됨(직접 fetch 검증 완료) — 기존 `light.md`/`css-light.md` 메모에 Baseline 단계 표기가 없었으므로 갱신 가치 있음.
- **CUBE CSS**("Composition Utility Block Exception")는 프레임워크 비종속 CSS 방법론으로, Progressive Enhancement를 핵심 원칙으로 하는 flat·저추상 구조(cube.fyi 원문 직접 확인, 위키에 기존 노트 없음 — 신규).
- WCAG 대비 검증 시 **default 상태만이 아니라 hover·focus·active·disabled 등 상태별 개별 검증**이 필요하다는 실무 체크리스트(출처 페이지에서 hover 상태 대비 예시 확인) — 기존 `contrast.md`/`prefers.md`와 결합해 검토 항목으로 추가할 가치 있음.

※ 나머지 항목(text-wrap:pretty Firefox 미지원, DTCG v2025.10 안정판, color-mix()/OKLCH 87%, Interop 2026 contrast-color(), 가변폰트 optical-sizing·rem 권장)은 위키(`text.md`, `dtcg-*.md`, `color.md`, `interop.md`, `가변-폰트-축*.md`)에 이미 동일 내용이 검증·반영되어 있어 **중복으로 폐기**했습니다.

## 출처
- [web-features-explorer: light-dark](https://web-platform-dx.github.io/web-features-explorer/features/light-dark/) — Widely Available 2026-11-13 (직접 확인)
- [CUBE CSS Principles](https://cube.fyi/principles.html) — 직접 확인
- [Color Accessibility Guide (WCAG)](https://humbldesign.io/blog-posts/color-accessibility-guide-wcag)

## 위키화 후보
- CUBE CSS(Composition Utility Block Exception) 신규 개념 노트 — Tailwind v4·Open Props와 나란히 거론되는 대안 아키텍처로 향후 비교 참조 가치 있음.

## 프로필 반영 후보 (저위험)
- `light-dark()` 참고 메모에 "Widely Available 도달일 2026-11-13" 수치 갱신.
- 공용 컴포넌트 가이드라인 대비 체크리스트에 "상태별(hover/focus/active/disabled) 개별 대비 검증 필요" 1줄 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
