---
date: 2026-07-26
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-26

※ 원문 인용 대조용 WebFetch가 권한 미승인으로 차단되어, 출처 신뢰도(매체 성격·1차/2차 출처 여부)를 기준으로 교차검증했습니다.

## 오늘 배운 것
- WCAG 3.0 대비 알고리즘은 2026-04 시점에도 "미확정"이 재확인됨. 완성 예상 시점 "2030년경"은 Adrian Roselli 개인 블로그의 단일 출처 추정치라 확정 사실이 아닌 **전망치**로만 취급 필요.
- CSS `if()` 함수는 2026년 기준 Chrome/Edge만 지원, Firefox 구현 중·Safari 2026~2027 예정 → **Baseline 미달**. 기존 "프로토타입 한정" 메모와 일치, 구조적 사용 금지·`@supports` 가드 원칙 유지.
- `text-wrap: balance`는 Baseline 2024(Chrome/Edge/Firefox/Safari 폭넓게 지원)로 실무 적용 가능하나, `text-wrap: pretty`는 Firefox 미지원이라 본문 문단에는 폴백 필요.
- Base UI는 2025-12 v1.0 정식 출시 후 성장 중이며, shadcn/ui 2026-07 기본값 전환은 공식 changelog(1차 출처)로 재확인됨 — 기존 노트와 일치, 변경 없음.
- Tailwind v5 로드맵은 2026-07 기준 공식 발표 없음(v4 계열 유지) — 신규 액션 불필요.

## 출처
- [Adrian Roselli, WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Techzine, CSS if() function](https://www.techzine.eu/news/devops/135681/css-finally-gets-support-for-if-function/)
- [MDN, if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- [Savvy, CSS text-wrap: pretty and balance](https://savvy.co.il/en/blog/css/css-text-wrap-pretty-balance/)
- [ui.shadcn.com, July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)

## 위키화 후보
- `text-wrap: balance`(Baseline 2024) vs `pretty`(Firefox 미지원) 구분 개념 노트 — 유동 타이포그래피 실무 적용 시 혼동 방지

## 프로필 반영 후보 (저위험)
- WCAG 3.0 로드맵 메모에 "완성 시점 미확정, 2030년경은 단일 출처 전망치" 문구로 소폭 보수화 갱신(기존 "2028년 이전 아님" 대체)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 카탈로그의 "출처-대조-검증기" 에이전트가 이미 이 역할을 커버함)
