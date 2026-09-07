---
date: 2026-07-25
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-25

## 오늘 배운 것

- `contrast-color()`: Baseline **Newly Available** 도달일(2026-04-10)과 **Widely Available** 예정일(2028-10-10)을 웹리서치가 아닌 실제 fetch로 재검증 완료(사실 확인). 기존 프로필 메모와 일치.
- WCAG 3.0 로드맵 일부 정정 필요: Candidate Recommendation "2027년 4분기 예상"은 원문 확인됨. 다만 "outcome 요구사항 약 174개", "pass/fail 완전 폐지 확정", "최종 Recommendation 2028~2030년"은 원문에 근거 없음(원문은 "not earlier than 2028"까지만 언급, pass/fail 대체 방식도 "아직 불확실"로 서술) → 해당 구체 수치·확정 표현은 폐기.
- DTCG Design Tokens Format Module v2025.10이 2025-10-28 첫 안정판(Stable v1)으로 확정, Adobe·Google·Meta·Figma 등 24개+ 조직 지지 — 원문 대조 확인.
- shadcn/ui `npx shadcn init` 기본값의 Base UI 전환 및 "Radix 폐기 아님, 병행 유지" — changelog 원문 대조 확인.
- Tailwind CSS v4.2(2026-02 릴리스): 논리속성 유틸리티 확장, 신규 `@tailwindcss/webpack` 플러그인, 팔레트 4종(mauve/olive/mist/taupe) — 원문 대조 확인.
- CSS `if()` 여전히 Baseline 미도달·실험 단계(MDN에 "Limited availability/Experimental" 배지 명시) — 기존 "프로토타입 한정, 프로덕션 미적용" 메모와 부합 재확인.
- 검증 보류(도메인 접근 권한 제한으로 이번 턴 fetch 실패): color-mix()의 "Widely Available 격상", APCA 2023년 제외 재확인, scroll-driven animations Firefox 152 플래그 상태 → 신규 사실로 반영하지 않고 기존 메모 그대로 유지.

## 출처
- [web-features-explorer: contrast-color()](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [AbilityNet: What to expect from WCAG 3.0](https://abilitynet.org.uk/resources/digital-accessibility/what-expect-wcag-30-web-content-accessibility-guidelines)
- [W3C Design Tokens CG: Format Module reaches first stable version](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [shadcn/ui changelog: Base UI default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [Laravel News: Tailwind CSS v4.2.0](https://laravel-news.com/tailwindcss-4-2-0)
- [MDN: CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/if)

## 위키화 후보
- DTCG v2025.10 안정판 확정+24개 조직(Adobe/Google/Meta/Figma) 지지 현황 — 토큰 생태계 표준화 근거 노트로 가치 있음.

## 프로필 반영 후보 (저위험)
- WCAG 3.0 로드맵 메모를 "CR 2027년 4분기 예상, 최종 RC는 2028년 이전은 아님(구체 시기·요건 수는 미확정)"으로 과장 없이 완화 갱신.
- Tailwind v4.2 참고 메모에 팔레트(mauve/olive/mist/taupe)·`@tailwindcss/webpack` 세부사항 보강.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — 카탈로그에 이미 "출처-대조-검증기" 에이전트가 등록돼 있어 이번에 그 역할을 수동으로 대체 수행함. 향후 웹리서치 종합 시 신규 제안 대신 해당 에이전트 활용 권장.)
