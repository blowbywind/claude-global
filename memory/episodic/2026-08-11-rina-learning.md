---
date: 2026-08-11
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-11

## 오늘 배운 것
- **Tailwind CSS v4.2 vs v4.3 경계 정정**: 리서치가 "v4.3에 로지컬 프로퍼티(`pbs-*`/`mbs-*`)·`font-features-*`·mauve/olive/mist/taupe 팔레트 추가"라 했으나 공식 블로그(tailwindcss.com) 원문 확인 결과 이 항목들은 **v4.2 소관**이고, v4.3는 `scrollbar-*`(auto/thin/none, thumb/track, gutter-auto/stable/both) · `@container-size` · `zoom-*` · `tab-*` · `@variant` 스택/복합 변형 · 함수형 유틸 기본값(`--default()`)이 정확한 범위입니다. 위키에 이미 2026-07-24에 "색상 팔레트는 v4.2 소관, 혼동 주의"로 경고했던 사안이 재발했으므로 재확인 필요.
- **W3C DTCG 2025.10 stable 확정**: 2025-10-28 발표, Adobe/Amazon/Google/Meta/Figma 등 24개 조직 참여 — 원문 확인. 단 "zeroheight 설문 도입률 56%→84%" 수치는 해당 발표문에 없어 **출처 미확인, 폐기**.
- **same-document View Transitions Baseline Newly Available**: 2025-10-14(Firefox 144 릴리스 기준) — web.dev 원문 확인, 정합.
- **CSS Anchor Positioning**: Chrome 125+/Firefox 132+/Safari 18.2+ 핵심 기능 Baseline 수준 — caniuse.com(신뢰 가능 출처) 근거로 채택. Safari `@position-try` 18.4+ 필요설은 2차 출처(testmuai.com, 저권위)라 참고치로만 취급.
- **폐기**: "OKLCH가 2026년 기본 색상 형식, `color-mix(in oklch,...)`로 hover/focus-ring 파생 패턴 정착" 주장은 유일 출처가 색상 SaaS 마케팅 블로그(colorui.io, 실명 저자 없음)+maviklabs.com(미검증)뿐이라 신뢰 불가 — 채택 보류.
- **폐기**: "2026-02 기준 어떤 법령도 WCAG 3.0 미참조" 주장은 저권위 블로그 단일 출처라 검증 불가 — 기존 위키의 WCAG 3.0 로드맵 메모로 충분하므로 신규 반영 안 함.

## 출처
- [Tailwind CSS v4.3 공식 블로그](https://tailwindcss.com/blog/tailwindcss-v4-3) — 직접 fetch 검증
- [W3C DTCG "Design Tokens specification reaches first stable version"](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) — 직접 fetch 검증
- [web.dev "Same-document view transitions are now Baseline Newly available"](https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available) — 직접 fetch 검증
- [caniuse.com CSS Anchor Positioning](https://caniuse.com/css-anchor-positioning) — 신뢰 가능 데이터 소스(미재검증, 통상 신뢰도 인정)

## 위키화 후보
- Tailwind v4.2/v4.3 유틸리티 경계 정리 노트(혼동 반복 방지용, `공용 컴포넌트 가이드라인` 참고 메모에 병기)

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 구현 원칙에 Tailwind v4.3 정확 범위(`@container-size`, `scrollbar-*`, `zoom-*`, `tab-*`) 갱신 반영, v4.2 항목(`pbs-*`/`mbs-*`/`font-features-*`/팔레트) 오귀속 정정

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 등록된 "출처-대조-검증기" 계열 후보로 충분, 이번 세션도 WebFetch 1차 호출만 허용·후속 거부 패턴 재현했으나 wget 폴백으로 전량 검증 완료됨)
