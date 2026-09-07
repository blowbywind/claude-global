---
date: 2026-08-06
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-06

## 오늘 배운 것
- **Tailwind CSS v4.3 출시 확인**: 스크롤바 유틸리티(`scrollbar-thin`, `scrollbar-thumb-*`, `scrollbar-track-*`, `scrollbar-gutter-stable`), `@container-size`, `zoom-*` 신규 — 직접 fetch로 본문 대조 재확인 완료(신뢰도 높음).
- **scroll-driven animations, Firefox 여전히 플래그 필요**: Chrome/Edge/Safari는 정식 지원, Firefox는 stable에서 플래그 켜야 함(Interop 2026 우선순위로 정식화 예정) — 이번 라운드 도구 권한 제약으로 MDN 직접 재검증은 미완(원문 발췌에서 명시적 확인 실패), 다만 기존 Baseline 패턴과 부합. 프로필의 "검토 예정" 메모는 **확정 대신 유지**를 권장.
- **`contrast-color()` 일정 재확인**: Newly Available 2026-04-10 도달, Widely Available 2028-10-10 예정 — 기존 프로필 메모(2026-07-17)와 일치.
- **WCAG 3.0 / APCA 상태 재확인**: 2026-08 기준도 Working Draft(최신초안 2026-03-03), APCA는 대비 알고리즘 미정으로 계속 제외 — 기존 원칙("WCAG 2.2 AA 병행 유지") 그대로 유효.
- **CSS `if()` 지원 현황**: Chromium 전용 유지, Firefox는 구현 진행중 — 기존 "프로토타입 한정, 프로덕션 미적용" 메모 유지(격상 아님).
- **DTCG v2025.10 도구 생태계 확산 주장은 보류**: Style Dictionary v4/Figma Variables 지원 언급은 W3C 공식 발표와 일치하나, "채택률 56%→84%(약 300명 설문)" 수치는 출처가 개인 블로그이고 이번 라운드 원문 대조가 불가해 **미채택**.

## 출처
- [Tailwind CSS v4.3 블로그](https://tailwindcss.com/blog/tailwindcss-v4-3) — 직접 대조 확인
- [MDN Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) — 부분 확인(Firefox 세부사항 미확정)
- [WCAG 3.0 Working Draft 2026-03-03](https://www.w3.org/TR/2026/WD-wcag-3.0-20260303/)
- [web.dev Baseline Digest Apr 2026](https://web.dev/blog/baseline-digest-apr-2026)

## 위키화 후보
- Tailwind v4.3 스크롤바 유틸리티: 신규 개념 노트 가치는 낮음(기존 v4.2 논리속성 노트에 갱신 병합 권장)

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 구현 원칙 참고 메모에 Tailwind v4.3 스크롤바 유틸리티(`scrollbar-thin`/`scrollbar-gutter-stable`) 용어 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
비고: 이번 검증 라운드에서 WebSearch/일부 WebFetch 도구 권한이 막혀 `contrast-color()` 일정·Firefox scroll-driven 플래그 세부내역·CSS `if()` 지원표는 원문 재대조를 완료하지 못했습니다(기존 확정 메모와의 정합성만 확인). 따라서 프로필의 "scroll-driven animations Firefox 미지원 → motion-safe·`@supports` 폴백 필수" 항목은 **확정으로 격상하지 않고 기존 상태 유지**를 권장합니다.
