---
date: 2026-07-26
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-26

## 오늘 배운 것
- CSS `corner-shape`(스퀴클 등)는 아직 Chromium 계열에서만 실험적으로 지원되는 신규 프로퍼티로 Baseline이 아님 — 카드/아이콘 모서리에 적용 시 SVG `clip-path` 등 폴백 병행 필요.
- `corner-shape`는 `round/scoop/bevel/notch/square/squircle` 키워드나 `superellipse()` 함수로 지정하며 배경·테두리·아웃라인·그림자·overflow에 함께 적용됨.
- PWA maskable 아이콘은 캔버스 중심 약 80% 안전영역(사방 약 10% 패딩)에 핵심 콘텐츠를 배치해야 함 — 아이콘 제작 여백 기준으로 적용 가능.
- manifest.json은 `purpose: "any"`와 `"maskable"` 아이콘 파일을 분리 제공하는 편이 권장되며, 결합형(`"any maskable"`) 사용은 지양.
- CSS Houdini Paint API는 MDN 기준 "Limited availability / Experimental" 상태(자체 검증 완료) — 벡터 패턴·텍스처 생성 실무 채택은 아직 이르며 기존 SVG 패턴 방식 유지가 안전.
- AVIF는 주요 브라우저에서 폭넓게 지원되는 사실상 표준 포맷이고 JPEG XL은 여전히 제한적(주로 Safari) — 기존 "AVIF+WebP 폴백" 정책 유지가 타당함(기존 위키 결론 재확인).

※ 검증 참고: 이번 세션에서 출처-대조-검증기 및 자체 WebFetch 시도 결과 네트워크 접근이 대부분 차단되어(MDN 1건만 재확인 성공), 원 리서치의 세부 수치(코너쉐이프 브라우저 점유율 65~66%, AVIF 커버리지 93%, JPEG XL 15%, Iconify 정확한 버전·아이콘 개수 등)는 독립 재확인이 불가했습니다. 미확인 수치는 아래 출처에서 제외하고 큰 방향성만 채택했습니다. Iconify 2026 업데이트 주장은 검증 근거가 가장 약해 이번 출력에서 전부 제외했습니다.

## 출처
- [Beyond Border-Radius: CSS corner-shape](https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui/) — 재검증 미완료(원 인용)
- [Corner Shapes: Beyond Rounded Borders](https://modern-css.com/corner-shapes-beyond-rounded-borders/) — 재검증 미완료(원 인용)
- [PWA Icon Requirements & Safe Areas](https://logofoundry.app/blog/pwa-icon-requirements-safe-areas) — 재검증 미완료(원 인용, 통상적 PWA 가이드와 부합)
- [PWA Icons Guide](https://iconello.com/blog/pwa-icons-guide) — 재검증 미완료(원 인용)
- [CSS Painting API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API) — 자체 WebFetch로 재확인 완료
- [AVIF vs JPEG Comparison](https://uploadcare.com/blog/avif-vs-jpeg-comparison/) — 재검증 미완료(원 인용)
- [JPEG XL vs AVIF](https://blog.openreplay.com/jpeg-xl-vs-avif/) — 재검증 미완료(원 인용)

## 위키화 후보
- PWA maskable 아이콘 안전영역 제작 가이드(캔버스 80%/패딩 10% 기준) 신규 개념 노트
- CSS `corner-shape`/squircle 신규 프로퍼티 개념 노트(Baseline 아님 명시, 적용 시점 재검토용)

## 프로필 반영 후보 (저위험)
- `corner-shape`/`superellipse()` 용어를 신규 트렌드로 인지(실적용은 Baseline 전환 전까지 보류)
- 신규 단독 SVG/PWA 아이콘 제작 체크리스트에 "maskable 안전영역 80%/10% 패딩" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
