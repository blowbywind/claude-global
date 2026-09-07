---
date: 2026-07-15
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-15

## 검증 요약

레온이 제출한 리서치 7건 중 6건은 출처가 확인되고 역할과 관련이 있으나, **1건(W3C 디자인 토큰 표준화)은 사실관계가 부정확**하여 정정했습니다. 위키(`dtcg-2025-10은-w3c-recommendation이-아니라...`, arthur 작성·2026-07-13)에 이미 이 오류가 정정 기록되어 있고, 원문 페이지("Design Tokens Community Group" 게시물, `Recommendation` 표기 없음)를 직접 재확인해 교차검증했습니다. Sharp 0.34는 원 출처(개인 블로그)의 신뢰도가 낮아 npm 레지스트리로 버전 존재만 직접 재확인했고, 성능 배수(4~10배) 등 미검증 수치는 제외했습니다.

## 오늘 배운 것
- CSS `@property`가 전 주요 브라우저에서 폭넓게 지원되며(web.dev 공식 확인), 타입 지정된 값으로 색상 트랜지션이 가능해져 아이콘/일러스트 테마 전환 시 `currentColor`·`var(--icon-fg)`보다 정교한 제어 수단이 될 수 있음 — 기존 "다색 아이콘은 CSS 커스텀 프로퍼티 우선" 인사이트의 보강 옵션으로 검토 가치 있음.
- 컨테이너 쿼리 길이 단위(`cqi` 등)로 아이콘 크기를 부모 컨테이너 기준 반응형 지정 가능(`clamp(24px, 8cqi, 48px)`), stroke-width 동반 조정에도 활용 가능.
- SVG 애니메이션은 `prefers-reduced-motion` 미디어쿼리로 WCAG 2.3.3(상호작용에 의한 애니메이션) 대응이 필요 — 장식용 효과 제거, 필수 애니메이션은 정적 대체 제공. 신규 SVG 제작 체크리스트(접근성 항목) 확장 후보.
- Sharp 0.34 버전은 실재함(npm 레지스트리 직접 확인) — 단, 2026-07-15 기준 최신은 0.35.3로 이미 갱신되어 있어 버전 고정 시 재확인 필요. AVIF/HEIC 관련 구체 기능·성능 수치는 원 출처 신뢰도가 낮아 이번엔 반영 보류.
- **정정**: 리서치 원문이 "W3C Design Tokens 포맷이 정식(stable) 버전으로 확정"이라 표현했으나, 실제로는 **W3C Recommendation이 아니라 Design Tokens Community Group(커뮤니티 그룹)의 안정 명세**입니다(위키 기존 노트와 일치, 원문 페이지 직접 재확인). 향후 "W3C 표준"으로 표기하지 않도록 주의.
- 일러스트 강조색은 브랜드 주색과 별도 팔레트로 분리 설계(장식용 vs 인터랙션 의미색 구분)한다는 원칙은 개인 디자인 블로그 출처라 참고용 권고 수준으로만 반영(강한 사실 주장 아님).

## 출처
- [@property: Next-gen CSS variables now with universal browser support](https://web.dev/blog/at-property-baseline)
- [CSS Container Queries Guide](https://devtoolbox.dedyn.io/blog/css-container-queries-guide) (참고용, 개인 블로그)
- [Understanding SC 2.3.3: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)
- [sharp npm registry](https://registry.npmjs.org/sharp) (버전 존재 직접 확인)
- [Design Tokens specification reaches first stable version — Design Tokens Community Group](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) (W3C Recommendation 아님, 정정 반영)
- [Color Systems for the Web in AI](https://medium.muz.li/color-systems-for-the-web-in-ai-guide-to-palettes-tokens-and-perceptual-consistency-2da8940f2bc3) (참고용, 개인 블로그)
- 기존 위키 검증 노트: `dtcg-2025-10은-w3c-recommendation이-아니라-design-token.md`(arthur, 2026-07-13)

## 위키화 후보
- `@property` 기반 SVG/아이콘 테마 색상 전환 제어(타입드 CSS 커스텀 프로퍼티 + 애니메이션) — 신규 개념 노트 가치 있음.
- 컨테이너 쿼리 단위(`cqi`) 기반 아이콘 반응형 사이징 패턴 — 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 신규 단독 SVG 자산 제작 체크리스트에 `prefers-reduced-motion` 대응(장식 애니메이션 제거/정적 대체) 항목 추가.
- 다색 아이콘 색상 제어 원칙에 "타입 지정 `@property` 활용 시 색상 트랜지션까지 가능"이라는 보강 단서 추가(기존 `var(--icon-fg)` 원칙과 병행 검토).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
