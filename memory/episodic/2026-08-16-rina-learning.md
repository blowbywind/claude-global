---
date: 2026-08-16
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-16

## 오늘 배운 것
- **교차검증 결과, 리서치 결과 대부분은 이미 위키에 기존재하는 중복 항목입니다**: APCA WCAG3 제외(`apca.md`, 2026-08-16 curated), WCAG3 완성시점 미확정(`wcag-3-0-로드맵` 계열 다수), `prefers-contrast` 2022 Baseline(`prefers.md`, 2026-08-01), `text-wrap: pretty` Firefox 미지원(`text.md`, 2026-07-16) — 신규 학습으로 채택하지 않습니다.
- **상충 발견 → 기존 정보 유지**: 오늘 리서치는 "Tailwind 최신판이 v4.3.2(2026-06-26)"라고 주장하나, 위키(`tailwind-v4-3-3-버전-참고치-갱신.md`, 공식 Changelog 출처)에는 이미 v4.3.3(2026-07-16)이 검증돼 있습니다. 오늘 출처(releases.sh, 3rd-party 집계 사이트)가 공식 Changelog보다 낡은 정보이므로 **이 항목은 폐기**, 기존 v4.3.3 기준 유지합니다.
- **검증 통과(보강 가치 있음)**: `color-mix()` / `oklch(from ...)` 상대색상구문이 2026년 기준 Chrome·Safari·Firefox·Edge 전체에서 Baseline Widely Available 도달 — 기존 `color.md`(2026-07-12, "권장 기법") 메모에 "폴백 불필요·프로덕션 즉시 사용 가능" 상태 갱신 가치 있음(Chrome 공식 블로그 출처).
- **참고용(출처 신뢰도 보통)**: 가변 폰트 접근성 가드레일 — 본문용 굵기·폭 축 허용범위를 디자인 시스템 문서·코드리뷰로 명시 강제, 본문 최소 16px(1rem)+rem 단위 권장. 1차 표준 문서가 아닌 기업 블로그 출처라 확정 규칙이 아닌 참고 메모로만 채택.
- `text-wrap` 지원 매트릭스 세부치(pretty: Chrome/Edge 117+·Safari 26+, balance: Chromium 6줄/Firefox 10줄 제한)는 기존 `text.md`보다 구체적이라 세부 보강 가치는 있으나 핵심 결론(Firefox `pretty` 미지원)은 동일.

## 출처
- [Adrian Roselli – WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html) (기존재 확인용)
- [Chrome Developers – CSS Relative Color Syntax](https://developer.chrome.com/blog/css-relative-color-syntax)
- [MDN – prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) (기존재 확인용)
- [LogRocket – text-wrap: balance vs pretty](https://blog.logrocket.com/css-text-wrap-balance-vs-text-wrap-pretty/)
- [webability.io – Accessible Fonts for Devices](https://www.webability.io/blog/accessible-fonts-for-devices) (참고용, 신뢰도 보통)

## 위키화 후보
- 가변 폰트 접근성 가드레일(굵기·폭 축 허용범위 문서화+코드리뷰 강제, 본문 16px 최소) — 기존 `가변-폰트-*` 노트군과 별개 관점(정적 폰트 선호 vs 축 범위 가드레일)이라 신규 노트 가치 있음, 출처 신뢰도는 낮게 표기.

## 프로필 반영 후보 (저위험)
- `color.md` 메모에 "2026년 기준 4대 브라우저 Baseline Widely Available, 폴백 불필요" 상태 갱신 문구 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 오늘도 리서치 결과 5건 중 4건이 기존 위키와 중복, 1건은 최신 버전 정보 상충이 수동 grep으로만 적발됨. 리서치→위키 반영 전 자동 중복·상충 체크 단계 도입 가치 재확인(기존 제안 유지).
