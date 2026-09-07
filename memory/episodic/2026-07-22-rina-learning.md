---
date: 2026-07-22
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-22

## 오늘 배운 것
- **Tailwind v4.3 신규 유틸리티 직접 검증 완료**(공식 블로그 fetch 성공): `scrollbar-gutter-*`(auto/stable/both), `@container-size`(block-size 기반 `cqb`/`cqh` 단위 지원), `zoom-*`/`tab-*` 유틸리티 확인 → 반응형 레이아웃·스크롤 가이드라인에 반영 가능.
- **scroll-driven animations Firefox 미지원**: Mozilla Connect 상 플래그 뒤 상태(Interop 2026 후보일 뿐 기본 활성화 아님) — 다만 이번 세션은 도구 접근 제약으로 재fetch는 못했고, 기존 07-19 "검토중" 메모와 정합적이라 확정 근거로는 참고 수준으로만 채택.
- **CSS `if()` 여전히 Chromium 전용**: Safari/Firefox 미도달 — 기존 "프로토타입 한정, 프로덕션 미적용" 문구 유지(변경 불필요).
- **`contrast-color()` Baseline 상태**: 이번 리서치 수치(Newly Available 2026-04-10, Widely Available 예정 2028-10-10)는 기존 07-16/07-17 확정 메모와 정확히 일치 — 재확인만, 신규 반영 불필요.
- **주의**: 이번 검증 세션은 WebFetch/WebSearch 툴 권한이 차단되어(사용자 승인 대기) shadcn Base UI changelog·WCAG 3.0 W3C 공지·Tailwind v4.2 색상 세부(Medium 출처)는 재fetch 교차검증을 못 했습니다. shadcn·WCAG 항목은 기존에 이미 확정된 메모와 일치하므로 유지하되 "이번 세션 재검증 안 됨"으로 표시, Tailwind v4.2 색상(mauve/olive/mist/taupe)·webpack 플러그인 세부는 1차 출처가 비공식 Medium 블로그라 신뢰도 낮아 **채택 보류**합니다.

## 출처
- [Tailwind CSS v4.3 공식 블로그](https://tailwindcss.com/blog/tailwindcss-v4-3) — 직접 fetch 검증 완료
- (미검증, 참고용) [Mozilla Connect: scroll-driven animations](https://connect.mozilla.org/t5/ideas/implement-css-scroll-driven-animations-animation-timeline/idi-p/116931)
- (미검증, 참고용) [web-features-explorer: contrast-color()](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/) — 기존 확정 메모와 수치 일치
- (미검증, 재확인 필요) [shadcn/ui changelog](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default), [W3C WAI WCAG3 공지](https://www.w3.org/WAI/news/2026-03-03/wcag3)

## 위키화 후보
- `css-scroll.md`에 Tailwind v4.3 `scrollbar-gutter-*`/`@container-size` 유틸리티 항목 추가(공식 출처 검증 완료 기준).

## 프로필 반영 후보 (저위험)
- 07-19 "scroll-driven animations Firefox 미지원" 검토중 항목 → 정황상 확정 전환 가능하나, 이번 세션 재fetch 실패로 "다음 세션 재검증 후 확정" 조건부 보류 권고.
- Tailwind v4.3 `scrollbar-gutter-*` 유틸리티를 반응형 레이아웃 구현 원칙(2.x 체크리스트 스크롤 관련 항목)에 참고 메모로 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — `출처-대조-검증기` 에이전트가 이미 카탈로그에 존재하며 이번 세션 목적과 정확히 일치, 신규 제안 불필요. 단 WebFetch/WebSearch 툴 권한이 이번 세션에서 막혀 있어 향후 셀프러닝 세션 실행 전 권한 상태를 먼저 확인하는 것을 제안합니다.)
