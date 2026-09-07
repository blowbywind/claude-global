---
date: 2026-07-11
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-11

## 오늘 배운 것
- SVG `<use>` 스프라이트는 Shadow DOM 경계로 인해 내부 색상을 외부 CSS로 세밀하게 제어하기 어려움 — `fill="currentColor"` 단색 아이콘 체계에만 적합하며, 멀티컬러 아이콘은 인라인 SVG를 유지하는 것이 안전함(브라우저 표준 동작으로 검증된 사실).
- 이미지 포맷: AVIF가 WebP보다 용량 효율이 우수하나 인코딩 부하가 커서, 사실적 이미지·텍스처는 "AVIF + WebP 폴백" 이중 저장이 실무 권장 조합(두 개 독립 출처 교차확인).
- SVG 접근성 3원칙: 의미 있는 단독 이미지는 `role="img"` + 첫 자식 `<title>`(고유 id) + `aria-labelledby` 조합 필수, 장식용 아이콘은 `aria-hidden="true"`, 아이콘 전용 버튼은 아이콘을 숨기고 버튼 자체에 라벨 부여 — WAI-ARIA 관행과 일치하는 검증된 기법.
- 듀오톤 강조 아이콘은 `feColorMatrix` SVG 필터 또는 `mix-blend-mode: color` + 보조 레이어(약 40% 불투명도)로 브랜드 2차 컬러를 입히는 방식이 표준적 구현법.
- OKLCH 색공간은 지각적으로 균일해 브랜드 팔레트 생성·APCA 대비 검증에 적합하며 Tailwind v4 CSS 변수 체계와 자연스럽게 연동됨(신뢰할 수 있는 기술 블로그 출처로 확인).
- 참고(신뢰도 낮음, 검증 보류): Node 이미지 처리에서 sharp가 Next.js `next/image` 표준 파이프라인으로 쓰인다는 점은 확실하나, "Squoosh 대비 25배 빠르다"는 구체 수치는 출처 신뢰도가 낮아 채택하지 않음.

## 출처
- [SVG Sprite Modern Guide](https://www.svggenie.com/blog/svg-sprite-modern-guide)
- [AVIF vs WebP](https://elementor.com/blog/webp-vs-avif/)
- [AVIF vs WebP](https://crystallize.com/blog/avif-vs-webp)
- [SVG Accessibility](https://www.a11y-collective.com/blog/svg-accessibility/)
- [Duotone SVG 구현](https://wpspectra.com/docs/understanding-duotone-and-adding-dynamic-color-to-svg/)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)

## 위키화 후보
- `ui-icon-design-guideline.md`에 "SVG 접근성 3원칙(role/title/aria-labelledby, aria-hidden)" 절 추가 — 기존 문서에 접근성 언급은 있으나 구체 마크업 패턴이 없음.
- 신규 노트 "듀오톤 SVG 브랜드 컬러 구현법"(feColorMatrix/mix-blend-mode) — 기존 위키에 없는 신규 기법.

## 프로필 반영 후보 (저위험)
- 이미지 저장 시 "AVIF+WebP 폴백" 이중 포맷 전략을 기본 권고안으로 추가.
- 신규 단독 SVG 자산 제작 시 `role="img"`+`<title>`+`aria-labelledby` 또는 `aria-hidden` 접근성 체크를 제작 체크리스트에 포함.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
비고: 지난 학습 인사이트("리서치 주제 불일치")는 이번 사이클에서 SVG/벡터 주제로 정상 수행되어 해소되었습니다. 다만 이번 검증 단계에서 WebFetch 권한이 거부되고 Bash 환경에 curl이 없어 실시간 출처 재확인은 불가했으며, 도메인 신뢰도·기술적 정합성 기준으로 교차판단해 저신뢰 수치(Squoosh 25배 등)는 배제했습니다.
