---
date: 2026-08-08
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-08

## 오늘 배운 것
- `contrast-color()`는 2026-04 Chrome 147/Firefox 146/Safari 26.0 3대 엔진 동시 안정화로 Baseline Newly Available 도달 — 기존 프로필 인사이트(2026-07-16, 2026-04-10) 및 위키 `contrast.md`와 일치, 재확인 완료.
- WCAG 3.0은 여전히 Working Draft이며 Candidate Recommendation은 2027년 4분기 예상, 최종 Recommendation은 2028년 이전 불가 — 위키 `wcag-3-0-로드맵-메모를-cr-2027...` 노트와 동일 사실, 재확인 완료(신규 아님).
- DTCG Format Module v2025.10(2025-10-28) 첫 안정판 — 위키 `dtcg-v2025-10-안정판-확정...` 노트와 일치. 단 이번 리서치에서 **"안정판=표준 명세 확정"일 뿐 툴체인(Style Dictionary v5)은 아직 전체 구현 미완**이라는 뉘앙스가 새로 확인됨 — 기존 노트에 없던 세분화 정보.
- scroll-driven animations의 Firefox 미지원(플래그 뒤)은 위키 `반응형-레이아웃-원칙에-scroll.md`(2026-07-30)에서 이미 동일 출처(MDN)로 확정 반영됨 — 프로필 인사이트의 "검토" 항목은 이미 처리 완료 상태이므로 추가 조치 불필요.
- CSS `if()` 프로덕션 미적용 상태는 위키 `css-if-브라우저별-로드맵...`, `css-if-baseline-미달성-폴백-필수-원칙.md`에 이미 반영·확정됨 — 재확인, 신규 아님.
- **불일치 발견**: 위키 `base-ui-공식-전환-정확-일자-2026.md`(2026-08-05)는 "전환 확정 일자 2026-07-03"을 공식 changelog 근거로 명시하나, 이번 리서치는 동일 changelog URL에서 "월 단위(2026년 7월)만 확인 가능, 일 단위 미검증"이라고 보고 — 두 세션 간 사실관계 상충. 이번 세션은 WebFetch 권한이 없어 원문 직접 재확인 불가하므로 **어느 쪽도 확정하지 않고 상충 상태로 플래그만 남김**.

## 출처
- [MDN: Scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [MDN: contrast-color()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/contrast-color)
- [W3C WAI: WCAG 3.0 뉴스 (2026-03-03)](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [W3C Design Tokens CG: v2025.10 첫 안정판](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [shadcn/ui changelog: Base UI default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default) — 일자 상충, 재검증 필요
- [MDN: CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)

## 위키화 후보
- DTCG "표준 안정판 vs 툴체인(Style Dictionary v5) 구현 지연" 구분 — `dtcg-v2025-10-안정판-확정...` 노트에 보강 항목으로 추가 가치 있음(신규 노트보다는 기존 노트 갱신 권장).

## 프로필 반영 후보 (저위험)
- (신규 없음 — 이번 리서치는 대부분 기존 확정 사실의 재확인이며, 프로필에 이미 반영된 상태)

## 승인 필요 (고위험)
- Base UI shadcn 기본 전환 "2026-07-03" 표기: 위키 노트 간 상충(일자 근거 vs 월 단위만 확인) 발견. WebFetch 권한 부여 후 원문 재검증하여 어느 쪽이 맞는지 확정 필요 — 임의 정정 보류.

## 신규 도구 후보 (에이전트/스킬)
- (없음)
