---
date: 2026-07-17
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-17

## 오늘 배운 것
- Sharp(libvips 기반, `next/image` 표준)는 프로덕션용, Squoosh(WebP/AVIF/JPEG XL 정밀 제어)는 코덱 실험용으로 도구를 분리해 사용 — 이미지 최적화 작업 시 파이프라인 선택 기준으로 반영 가능.
- AVIF는 WebP 대비 압축률은 우수하나 인코딩이 3~5배 느려, 실시간 업로드보다 빌드타임 생성에 적합 — 기존 "AVIF+WebP 폴백" 정책(2026-07-11/07-14 확정)의 실행 방식(빌드타임 처리)에 대한 근거 보강.
- 2026년 기준 브라우저 지원율 AVIF~94.9%/WebP~96.4%(추정치, 변동 가능) — `<picture>` AVIF→WebP→JPEG 폴백 체인 유지가 여전히 타당함을 재확인.
- Material Symbols 가변 폰트는 opsz(20~48)·wght(100~700)·GRAD(-50~200)·FILL(0~100) 4축을 `font-variation-settings`로 제어, `icon_names` 쿼리로 서브셋팅 가능 — 신규 아이콘셋 검토 시 Tabler 외 대안으로 고려 가능.
- Rive(WASM/Canvas 상태머신, 약 200KB, 인터랙션용) vs Lottie(디자이너 제작 애니메이션, 신규 dotLottie 포맷이 ZIP압축으로 40~70% 경량화)는 용도가 다르므로 인터랙티브 요소는 Rive, 정적 모션 애니메이션은 Lottie로 분리 검토.
- CSS `d` 프로퍼티 네이티브 path morphing이 Chrome/Firefox/Safari 15.4+에서 지원 — 단순 아이콘 전환 모션은 JS 라이브러리 없이 CSS만으로 구현 가능(단, morph 대상 path는 노드 수를 단순화할수록 유리, 이는 사양이 아닌 실무 권고).

※ SVGO 단독 ~60%/gzip 추가 ~70% 절감 수치는 원본 파일 상태에 따라 편차가 크다는 단서를 달아 참고용으로만 채택.

## 출처
- [SVG Sprite Modern Guide](https://www.svggenie.com/blog/svg-sprite-modern-guide)
- [Sharp vs Jimp vs Squoosh 2026](https://www.pkgpulse.com/guides/sharp-vs-jimp-vs-squoosh-2026)
- [AVIF Image Format Complete Guide](https://kitmul.com/en/blog/avif-image-format-complete-guide)
- [Image Optimization Website Speed 2026](https://logoswebdesigns.com/blog/image-optimization-website-speed-2026/)
- [Material Symbols — Google Fonts Docs](https://developers.google.com/fonts/docs/material_symbols)
- [Lottie vs Rive vs CSS Animations 2026](https://www.pkgpulse.com/guides/lottie-vs-rive-vs-css-animations-web-animation-formats-2026)
- [JS SVG Path Morphing Tutorial](https://motion.dev/tutorials/js-svg-path-morphing)

## 위키화 후보
- Rive vs Lottie(dotLottie) 용도별 선택 기준 — 인터랙션형 vs 디자이너 제작 애니메이션 구분 신규 노트
- CSS 네이티브 `d` 프로퍼티 path morphing 구현 가이드 — 브라우저 지원범위·노드 단순화 실무 팁

## 프로필 반영 후보 (저위험)
- 이미지 처리 도구 분리 원칙: Sharp(프로덕션)/Squoosh(코덱 실험) 구분 인지
- Material Symbols 가변 폰트 4축 제어 기법을 아이콘셋 대안 옵션으로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음)
