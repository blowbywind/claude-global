---
date: 2026-08-06
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-06

웹리서치 산출물을 위키 기존 노트와 대조하고, 접근 가능한 범위에서 교차검증했습니다. WebSearch/WebFetch가 이번 턴 권한 문제로 대부분 차단되어(MDN 1건만 성공) 나머지는 기존 위키 축적 지식과의 정합성·출처 신뢰도로 판단했습니다.

**검증 메모**: CSS `if()` Baseline 미달성 주장은 MDN 공식 문서 직접 fetch로 확인(실험적 기능, 폴백 필요 — 일치). JPEG XL "약 12%, 대부분 Safari" 주장은 기존 위키 노트(2026-07-28, "Chrome 145 이후 85~90% 전망")와 모순이 아니라 상호보완 — 기존 노트는 "H2 2026 기본활성화 이후 전망치", 이번 수치는 "아직 플래그 뒤에 숨어있는 현재 시점 실측치"로 일관됨. "Adobe 2026 디자인 트렌드 리포트 78%" 손그림 통계는 출처(craftwork.design 블로그)가 1차 자료가 아니라 재인용이라 신뢰도 낮아 폐기했습니다.

## 오늘 배운 것
- CSS `if()` 함수는 Baseline 미달성(MDN 확인: Limited availability, Firefox/Safari 미지원) — 자산 CSS에서 조건부 로직에 구조적으로 의존 말고 반드시 폴백값 병기.
- SVGO 4.0.2가 최신 안정판(v3→v4 공식 마이그레이션 가이드 존재) — 기존 위키의 v4 접근성 기본값 노트(`removeViewBox`/`removeTitle` 비활성 등)와 함께 참조.
- JPEG XL은 Chrome 145에 디코더 재도입됐으나 여전히 플래그 뒤(기본 비활성), 현재 실지원율 약 12%(대부분 Safari) — 기존 "AVIF+WebP 폴백 유지" 결론 그대로 유효, "H2 2026 기본활성화 전망"은 아직 도래 전 단계임을 재확인.
- SVG 2.0 사양은 Proposed Recommendation 미도달(W3C 마일스톤 진행률 46%) — mesh gradient 등 SVG2 전용 기능은 프로덕션 의존 시기상조로 재확인.
- `<picture>` 이미지 서빙 순서(AVIF→WebP→JPEG/PNG)와 `width`/`height` 속성(CLS 방지)·`fetchpriority="high"`(LCP 히어로)는 이미 알려진 표준 관행이나 실무 체크리스트 항목으로 재확인.
- 아이콘셋 후보(Lucide/Tabler)와 Iconify 경유 비교는 기존 위키 노트(2026-07-12, 2026-08-01)와 중복 — 신규 정보 없음, 갱신 불필요.

## 출처
- [CSS if() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if) (직접 검증 완료)
- [SVGO v3→v4 Migration Guide](https://svgo.dev/docs/migrations/migration-from-v3-to-v4/)
- [SVG 2 Working Group Milestone](https://github.com/w3c/svgwg/milestone/4)
- [JPEG XL Returns to Chrome — reezo.ai](https://reezo.ai/blog/jpeg-xl-returns-to-chrome-what-it-means-for-web-images-in-2026)

## 위키화 후보
- SVG 2.0 사양 지연 현황(Proposed Rec 미도달, 진행률 46%) — mesh gradient 등 신기능 프로덕션 배제 근거로 신규 노트 가치 있음.
- CSS `if()` Baseline 미달성 + 폴백 필수 원칙 — 아이콘/자산 CSS 조건부 스타일링 시 참고할 신규 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- SVGO 4.0.2 최신판 인지(기존 v4 노트에 패치버전 갱신).
- JPEG XL 지원율 최신 실측치(약 12%, 여전히 플래그 뒤) — 기존 "H2 전망" 노트에 현재 시점 데이터 보강.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
