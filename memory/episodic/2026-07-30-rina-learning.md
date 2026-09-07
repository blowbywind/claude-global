---
date: 2026-07-30
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-30

## 오늘 배운 것
- WCAG 3.0: 2026-03 Working Draft가 outcome 기반 ~174개 항목 + Bronze/Silver/Gold 등급제로 재편, CR 2027년 4분기·최종 Recommendation 2028년 이전 아님 — 기존 위키 기록(07-11~07-26 다수 노트)과 일치, 재확인 완료.
- APCA: 2023년 WCAG3 초안에서 제외된 이후 대비 알고리즘 자체가 여전히 미확정 — 기존 기록과 일치.
- `contrast-color()`: 2026-04-10 Baseline "Newly Available" 도달(Chrome/Firefox/Safari 전체 구현), "Widely Available"은 2028-10-10 예정 — 기존 프로필 인사이트(07-16, 07-17)와 일치.
- Tailwind v4.2 논리속성 유틸리티: 기존 위키 노트(`inset-s-*`/`inline-*`/`block-*`)에 없던 세부사항 확인 — `inset-e-*`/`inset-bs-*`/`inset-be-*`, `pbs-*`/`pbe-*`, `border-bs`/`be` 추가, 기존 `start-*`/`end-*`는 `inline-s-*`/`inline-e-*`로 대체(deprecated). 기존 노트 보강 가치 있음.
- Base UI: shadcn/ui 공식 changelog(2026-07)로 "신규 프로젝트 기본값" 확정 — 기존 위키 노트(`base-ui-shadcn-2026.md`, 07-16 큐레이션)가 이미 동일 출처를 인용해 기록하고 있어 사실관계 재확인됨. Radix 폐기 아님·병행 지원 유지도 일치.
- scroll-driven animations: Firefox 152(2026-06)도 여전히 플래그 뒤 — 07-19부터 07-29까지 매번 "검토" 상태로만 반복 기록되고 확정되지 않은 패턴 확인. 이번 근거로 "확정" 처리 가능.

## 출처
- [WCAG 3.0 소식](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [Adrian Roselli — WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [web-features-explorer — contrast-color](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [Tailwind v4.2 정리 (Medium)](https://medium.com/codex/tailwindcss-v4-2-is-out-4-new-colors-official-webpack-plugin-and-complete-logical-properties-9116753d6c7e)
- [MDN — CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- [Firefox 152 릴리스 노트](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/152)
- [shadcn/ui changelog — Base UI Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [DTCG v2025.10 안정판 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

※ 주의: 이번 세션에서 WebFetch 권한이 거부되어 URL 원문 직접 대조는 불가했음. 대신 기존 위키(`concepts/`)에 동일 사실이 여러 독립 리서치 회차(2026-06-20~07-29)에 걸쳐 반복 확인·기록되어 있어 그 내적 일관성으로 교차검증함. 신규 단독 출처(Tailwind v4.2 세부, Firefox 152)는 검증 강도가 상대적으로 낮음.

## 위키화 후보
- (신규 노트 대상 없음 — 전부 기존 노트 갱신 대상)

## 프로필 반영 후보 (저위험)
- Tailwind v4.2 논리속성 유틸리티 메모에 `inset-e-*/inset-bs-*/inset-be-*`, `pbs-*/pbe-*`, `border-bs/be` 및 `start-*/end-*` deprecated 사실 보강.
- scroll-driven animations 참고 메모를 07-19 "검토" 상태에서 "확정"(Firefox 미기본화 지속, motion-safe·`@supports` 폴백 필수)으로 전환.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 리나-검증-권한-정합기 — 이번 세션에서도 WebFetch 권한 거부 재발(07-16/07-22/07-29에 이어 07-30 4번째). 기존 제안된 "리서치-검증-권한-정합기" 에이전트 도입을 사용자 확인 후 실제 적용 검토 필요.
