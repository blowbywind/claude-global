---
date: 2026-08-10
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-10

## 오늘 배운 것

- **scroll-driven animations Firefox 미지원 — 07-22 보류 항목 확정 전환**: 기존 위키 노트(`반응형-레이아웃-구현-원칙에-scroll`, 2026-07-20, MDN/web.dev 출처)와 오늘 리서치가 일치. 07-22에 "재검증 후 확정" 조건으로 보류했던 항목을 이번 세션 교차검증으로 **확정** 처리 가능.
- **`text-wrap: pretty` Firefox 미지원, `contrast-color()` Newly Available(2026-04-10)+Widely Available 목표(2028-10-10)**: 기존 위키 노트(`text.md`, `contrast.md`)와 정확히 일치. 신규 정보 아닌 기존 인사이트 재확인.
- **CSS Anchor Positioning Baseline 2026 도달**: 이미 위키에 상세 문서화됨(`anchor-positioning-baseline-2026-도달을-반응형-레이아웃-원칙에.md`, 2026-07-28). 오늘 리서치는 중복 — 신규 반영 대상 아님.
- **WCAG 3.0 2026-03-03 Working Draft 세부(174 requirements, Bronze/Silver/Gold)**: 기존 로드맵(CR 2027 Q4, RC 2028+ 미확정)과 방향은 일치하나, 이번 세션 WebFetch 권한 차단으로 1차 출처 직접 재검증 불가 — **조건부 채택**(다음 세션 W3C 원문 재검증 권고).
- **Tailwind CSS v4.3.3(2026-07-16) 최신판**: 기존 v4.3 계열 노트(`tailwind-v4-3-scrollbar.md` 등)의 버전 참고치 갱신용 정보로 채택.
- **DTCG→Style Dictionary v5 마이그레이션, 구 export 포맷 2026-09 종료**: 기존 노트(`dtcg-표준-안정판-vs-툴체인...`, 2026-08-09)에 보강 가능한 신규 세부사항.

## 출처
- [MDN - Scroll-driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) (기존 위키 노트 출처, 재확인)
- [web.dev - Baseline Digest Apr 2026](https://web.dev/blog/baseline-digest-apr-2026?hl=en)
- [W3C WAI News - WCAG 3.0 (2026-03-03)](https://www.w3.org/WAI/news/2026-03-03/wcag3) — 이번 세션 미직접검증(WebFetch 차단), 다음 세션 재확인 필요
- [Tailwind CSS Changelog](https://github.com/tailwindlabs/tailwindcss/blob/main/CHANGELOG.md)
- [Style Dictionary v5 Migration](https://styledictionary.com/versions/v5/migration/)

## 위키화 후보
- DTCG 기존 노트에 "Style Dictionary v5 구 export 포맷 2026-09 종료" 세부사항 보강(신규 노트 아닌 기존 노트 업데이트)

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 구현 원칙 "scroll-driven animations Firefox 미지원" 메모 → 조건부 보류에서 확정 문구로 전환
- Tailwind v4.3.3 버전 참고치 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — WebFetch 권한 비일관성 문제는 기존 "리서치-검증-권한-정합기" 후보로 이미 추적 중, 이번 세션도 재현되어 그 후보 우선순위만 재확인됨)
