---
date: 2026-07-13
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-13

## 오늘 배운 것
- OKLCH 색공간이 브랜드 컬러 램프 설계에 유리(동일 명도 스텝이 색상과 무관하게 균일) — 단 Figma/Sketch는 네이티브 미지원이라 서드파티 플러그인으로 RGB 변환 필요. 실무 적용 시 코드-디자인 툴 간 색상 검증 단계를 추가해야 함.
- JPEG XL은 아직 주력 포맷 부적합(Safari만 기본지원, Chrome은 플래그 필요) — 기존에 채택한 "AVIF 주력 + WebP 폴백" 전략을 그대로 유지.
- 아이콘 전달 방식은 규모 기준으로 분기: 50개 미만은 인라인/컴포넌트 SVG(트리쉐이킹), 100개 초과는 sprite(`<symbol>`+`<use>`)가 효율적.
- 다색 아이콘은 `fill="currentColor"` 단일색 한계 대신 CSS 커스텀 프로퍼티(`var(--icon-fg)`)로 색상별 제어 권장.
- SVG 접근성 규칙 보강: 기본 암묵 role은 `graphics-document`이며 임의 변경 지양 — 단일 이미지형은 `role="img"`, 아이콘형은 `role="graphics-symbol"`로 재정의. 장식용은 `role="presentation"`이 아닌 `aria-hidden="true"` 사용(presentation은 하위요소가 여전히 스크린리더에 읽힐 수 있음) — 기존 접근성 체크리스트 인사이트를 구체화.
- 애니메이션은 `transform`/`opacity` 기반이 컴포지터 스레드에서 저비용 60fps, `stroke-dasharray`+`stroke-dashoffset`으로 드로잉 효과 구현, 피드백성 트랜지션은 500ms 이내 권장. 반응형 이미지는 크기변형=`srcset`+`sizes`, 아트디렉션(크롭·구도 상이)=`<picture>`+`media` 구분 사용.

*(제외: "이미지 사이트 60%가 동일 크기 서빙" 통계와 "AI 에이전트 브랜드 토큰" 트렌드 항목은 1차 출처 없이 블로그 인용에만 의존해 신뢰도 부족으로 폐기)*

## 출처
- [W3C SVG Accessibility - ARIA roles for graphics](https://www.w3.org/wiki/SVG_Accessibility/ARIA_roles_for_graphics)
- [TPGI - Using ARIA to Enhance SVG Accessibility](https://www.tpgi.com/using-aria-enhance-svg-accessibility/)
- [devtoolnow - Color Formats HEX/RGB/HSL/OKLCH](https://www.devtoolnow.com/guides/color-formats-hex-rgb-hsl-oklch)
- [fastedit.net - JPEG XL Browser Support 2026](https://fastedit.net/blog/jpeg-xl-browser-support-2026)
- [allsvgicons - Icon Fonts vs SVG Sprites vs Inline SVGs](https://allsvgicons.com/blog/icon-fonts-vs-svg-sprites-vs-inline-svgs/)
- [nucleoapp blog - Icon Systems Integration Guide](https://blog.nucleoapp.com/the-guide-to-integrating-and-styling-icon-systems-svg-sprites-svg-symbols-and-icon-fonts-da7c424dac1b)
- [LogRocket - How to Animate SVG](https://blog.logrocket.com/how-to-animate-svg-css-tutorial-examples/)
- [mariohernandez.io - Art Direction using picture element](https://mariohernandez.io/blog/art-direction-using-the-picture-html-element/)

## 위키화 후보
- SVG ARIA role 체계 노트(기존 접근성 체크리스트 항목 보강: 기본 role=graphics-document 유지 원칙 + presentation vs aria-hidden 구분 명시)

## 프로필 반영 후보 (저위험)
- 다색 아이콘 색상 제어는 `currentColor` 대신 CSS 커스텀 프로퍼티(`var(--icon-fg)`) 우선 검토
- 아이콘셋 규모 임계치(50개 미만=인라인/컴포넌트, 100개 초과=sprite) 제작 판단 기준으로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
