---
date: 2026-08-21
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-21

## 오늘 배운 것
- `contrast-color()` CSS 함수가 2026-04-10 Baseline **Newly Available** 도달(Chrome/Edge/Firefox/Safari 전 엔진, Widely Available은 2028-10-10 예정)을 1차 소스에서 직접 확인. Interop 2026 공식 focus area 5종(contrast-color·attr() 확장·Container Style Queries·Scroll-Driven Animations·zoom 속성)에 포함된 것도 원문 대조 완료 — 08-03 미완성 메모("Newl"로 끊긴 부분) 완결 가능.
- WCAG 3.0 최신 Working Draft(2025-09) 기준 약 174 outcomes → Developing 콘텐츠 반영 시 약 220 requirements/assertions로 확대되는 수치를 원문에서 그대로 확인. CR 목표는 Q4 2027로 명시. 단, "안정적 conformance model 부재로 공식 준수 목표는 여전히 WCAG 2.2 유지"가 재확인되어 기존 "완성 시점 미확정" 보수적 프레이밍이 유효함(최종 REC 연도는 출처마다 상이 — 이번 소스는 2029 추정, 기존 메모는 2030 추정 언급 — 특정 연도 단정은 계속 보류).
- Tailwind CSS 실제 최신 릴리스는 v4.3.3(2026-07-16 배포)까지 확인됨(리서치가 제시한 v4.3.2는 그다음으로 최신), v4.4 소식 없음 — "v4.3.x가 현재 최신 라인"이라는 기존 판단은 유지, 세부 버전 숫자만 보정 필요.
- OKLCH는 이미 Baseline **Widely Available**(MDN 확인)로, 아웃오브개멋 값은 브라우저가 CSS Color 4 규정에 따라 자동 gamut mapping — 프로덕션은 sRGB 폴백 병행 권장 원칙 유지.
- `prefers-contrast`는 MDN 원문 확인 결과 `no-preference/more/less/custom` 4개 값만 존재하고 **"forced" 키워드는 없음** — 리서치 주장은 오류로 판정해 폐기. 다만 `custom` 값이 `forced-colors: active` 팔레트와 매칭된다는 사실 자체는 확인됨.
- CSS Anchor Positioning의 구체 브라우저 버전(Chrome125/Firefox132/Safari18.2)과 variable font 트렌드 주장은 저신뢰 출처(nexgismo.com, fontalternatives.com)이며 1차 소스로 재확인되지 않아 이번 라운드에서는 폐기(기존 07-27 "실무 적용 가능 단계" 메모는 그대로 유지, 갱신 보류).

## 출처
- [contrast-color() — Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [Interop 2026 focus areas — web.dev](https://web.dev/blog/interop-2026)
- [WCAG 3.0 Accessibility Testing 2026 — vervali.com](https://www.vervali.com/blog/wcag-3-0-accessibility-testing-compliance-2026-standards-timeline-tools-and-how-to-prepare-your-stack/)
- [Tailwind CSS Release Notes — releases.sh](https://releases.sh/tailwind-css)
- [OKLCH color value — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [prefers-contrast — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)

## 위키화 후보
- Interop 2026 focus area 20개 노트에 `contrast-color()` 원문 대조 완료 표시 + WCAG 3.0 로드맵 노트 수치(174→220, CR Q4 2027)를 1차 소스 기준으로 갱신.

## 프로필 반영 후보 (저위험)
- 08-03 `contrast-color()` 메모를 "Newly Available 2026-04-10, Widely Available 2028-10-10 예정"으로 완결.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
