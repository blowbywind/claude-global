---
date: 2026-08-16
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-16

## 오늘 배운 것
- **corner-shape는 여전히 Baseline 미도달** — MDN 원문 직접 확인 결과 "Limited availability"로 명시, 주요 브라우저 일부 미지원. `@supports` 폴백 없이는 프로덕션 부적합 → 실적용 보류 유지가 타당함을 재확인.
- **JPEG XL, Chrome에 복귀했으나 기본 비활성** — 플래그 뒤에서만 디코딩 가능하고 Safari만 기본 지원 상태(원문 재검증은 WebFetch 권한 차단으로 실패, 다만 "Chrome이 JPEG XL 지원을 재도입했으나 기본값은 꺼짐"이라는 큰 흐름은 통상 알려진 사실과 정합적). AVIF/WebP 이중 폴백 전략을 유지하고, JXL 편입은 시기상조로 판단.
- **color-mix() + oklch()는 에버그린 브라우저에서 사실상 전면 지원** — Chrome/Edge 111+, Firefox 113+에서 지원. 단, 원 리서치의 "Safari 15.4+" 표기는 부정확 — oklch() 색상 문법 자체는 Safari 15.4부터지만 color-mix() 함수는 Safari 16.2+부터임(교차검증 중 정정). SVG 인라인 색상의 hover/active 상태를 런타임 CSS로 파생시키는 패턴은 검토 가치 있음.
- **SVGO 4.0.2 최신 유지, Figma Variables REST API Enterprise 전용 제약 유지** — 기존 위키 노트(08-06, 07-25)와 정합, 별도 조치 불필요.
- **Figma Vectorize 세부 제약(Professional+ 플랜·AI 크레딧 소모·단방향)** — 원문 재확인은 이번 세션 WebFetch 권한 차단으로 실패했으나 기존 07-27 결론과 상충하지 않아 참고로 유지, 크레딧 비용 감안 필요.

※ Iconify "30만 개 돌파·사이트 개편 세부사항", Recraft V4의 구체 수치(ELO 1172·승률 72%·평가 82%)는 원문 재확인이 불가했고 후자는 출처 신뢰도도 낮아 이번 종합에서 **폐기**했습니다.

## 출처
- [MDN corner-shape](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) — 직접 확인 완료
- [SVGO GitHub Releases](https://github.com/svg/svgo/releases) — 기존 노트 정합
- [Figma Forum](https://forum.figma.com/suggest-a-feature-11/why-s-the-variables-api-only-available-on-enterprise-plans-36426) — 기존 노트 정합
- 나머지(JPEG XL, Iconify, Recraft, Figma Vectorize, color-mix 지원표) 출처는 이번 세션 WebFetch 권한 차단으로 재확인 실패 — 채택 여부는 위 판단대로 반영

## 위키화 후보
- color-mix() 기반 SVG 인라인 색상 상태(hover/active) 런타임 파생 패턴 — 신규 개념노트 후보

## 프로필 반영 후보 (저위험)
- JPEG XL 여전히 비활성 상태 인지(AVIF/WebP 이중 폴백 전략 유지 근거로 갱신)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번에도 WebFetch 권한 차단으로 8건 중 1건만 직접검증 성공. 기존 제안된 "출처-대조-검증기(wget 폴백 내장)"가 이번에도 필요성이 재확인됐으나 이미 후보 등록돼 있어 중복 제안 생략)
