---
date: 2026-07-27
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-27

## 오늘 배운 것
- CSS `if()`는 2026-07 현재도 Chromium 전용(Firefox 구현 중, **Safari는 2026~2027 로드맵에만 등재·미구현**)이라 "프로토타입 한정, 프로덕션 미적용" 기존 방침을 유지해야 함(신규 세부사항, 기존 메모 재확인).
- CSS Anchor Positioning이 **Baseline 2026**으로 전환(Firefox 132+/147 안정판, Safari 26 `@position-try` 포함 완전지원, 전역 트래픽 약 91%) — 팝오버·툴팁류에 프로덕션 적용 가능 단계로 격상(기존 draft 다수 확인, 갱신 가치 있음).
- `text-wrap: pretty`는 Safari 26 지원 추가됐지만 **Firefox 여전히 미지원**(`balance`는 3대 브라우저 지원) — 유동 타이포그래피 구현 시 기본값은 `balance` 권장, `pretty`는 `@supports` 폴백 필요(기존 위키 노트와 일치 재확인).
- Tailwind CSS v4.2(2026-05)는 기존에 알던 논리속성 유틸리티 외에 신규 색상 팔레트(mauve/olive/mist/taupe), `font-features-*`(리거처·스몰캡·표 숫자), `@tailwindcss/webpack` 플러그인이 추가됨(세부사항 보강).
- shadcn/ui가 2026-07 공식적으로 Base UI를 기본값 전환(Radix는 병행 지원) — 기존 "확인됨→공식 확정" 인사이트의 최종 재확인, 신규 아님.
- WCAG 3.0은 2026-03 Working Draft가 최신판, CR 2027 Q4·최종 RC 2028년 이전 아님 — 기존 로드맵 메모와 일치, 갱신 불필요.

※ 이번 턴은 WebFetch 권한이 승인되지 않아 URL 원문 직접 대조는 못 했습니다. 위키(`base-ui-shadcn-2026.md`, `2026-07-26-rina-wiki-text.md`, WCAG3 로드맵 노트 등)와의 교차 대조로 사실관계 일치를 확인했으며, 신규 세부항목(`if()` Safari 로드맵, Anchor Positioning 브라우저 표, Tailwind v4.2 세부기능)은 출처 표기는 있으나 미대조 상태이므로 참고치로만 반영합니다.

## 출처
- [MDN: CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/if)
- [Can I Use: css-if](https://caniuse.com/css-if)
- [LogRocket: text-wrap balance vs pretty](https://blog.logrocket.com/css-text-wrap-balance-vs-text-wrap-pretty/)
- [TestmuAI: CSS Anchor Positioning 브라우저 지원](https://www.testmuai.com/learning-hub/css-anchor-positioning-browser-support/)
- [Laravel News: Tailwind CSS v4.2.0](https://laravel-news.com/tailwindcss-4-2-0)
- [shadcn/ui changelog 2026-07 Base UI Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [Accessibility.org.au: WCAG 3.0 2026 업데이트](https://www.accessibility.org.au/new-2026-update-for-the-wcag-3-0-working-draft/)

## 위키화 후보
- CSS `if()` 브라우저별 로드맵(Safari 2026~2027 등재·미구현) 정리 노트 — 기존 위키에 `if()` 전용 노트 없음 확인.

## 프로필 반영 후보 (저위험)
- Tailwind v4.2 `font-features-*` 유틸리티 용어를 공용 컴포넌트 가이드라인 참고 메모에 추가.
- Anchor Positioning Baseline 2026 도달을 반응형 레이아웃 원칙에 "실무 적용 가능 단계"로 갱신.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보
- 없음
