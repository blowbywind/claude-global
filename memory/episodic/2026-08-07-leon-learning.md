---
date: 2026-08-07
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-07

## 오늘 배운 것
- **Sharp 최신 안정판 0.35.3** — npm 레지스트리 직접 조회로 확인(1차 출처, 최신). Sharp 0.34(2026 Q1)부터 libavif 백엔드 AVIF 네이티브 인코딩, 별도 라이선스키 없는 HEIC 디코드, 서버리스 cold-start용 WASM 하드닝 지원 확인.
- **AVIF vs WebP 실무 분기 기준**: AVIF가 사진 콘텐츠에서 WebP보다 30~50% 더 작지만 인코딩이 5~7배 느림 → 캐시 가능한 히어로/제품 이미지는 AVIF, 온디맨드 변환·UGC 썸네일은 WebP로 분리하는 게 합리적(hirenodejs 본문 원문 대조 확인).
- **포맷 커버리지 재확인**: WebP 브라우저 지원 97%+, AVIF 93%+, JPEG XL은 Safari만 기본 활성·Chrome은 여전히 플래그 뒤(`chrome://flags/#enable-jxl-image-format`) — 기존 위키 방침(AVIF+WebP 폴백 유지)과 일치, "Chrome 145" 같은 구체 버전 숫자는 원문에서 확인 안 돼 제외.
- **아이콘 라이브러리 구체 스펙**: Lucide ~1,500+(단일 stroke weight), Tabler ~5,500+(단일 stroke weight), Phosphor ~1,200+/weight × 6 weight(thin/light/regular/bold/fill/duotone, 6가지 무료 제공은 Phosphor가 유일) — sveltekitui 원문 표 대조 확인.

## 출처
- [sharp — npm registry (latest: 0.35.3)](https://registry.npmjs.org/sharp/latest)
- [Node.js Sharp Image Processing 2026](https://www.hirenodejs.com/blog/nodejs-sharp-image-processing-2026)
- [JPEG XL Browser Support 2026: JXL vs AVIF and WebP](https://fastedit.net/blog/jpeg-xl-browser-support-2026)
- [Lucide vs Tabler vs Phosphor: Svelte Icon Libraries Compared (2026)](https://sveltekitui.com/blog/svelte-icon-libraries-compared/)

**폐기**: Figma Variables(atomize.tools), FontAwesome duotone `mix-blend-mode` 패턴 — 이번 턴에서 원문 fetch로 대조하지 못해 제외(레온 기존 방침인 CSS 커스텀 프로퍼티 duotone 제어는 이미 검증된 과거 인사이트로 유지, 신규 주장만 배제).

## 위키화 후보
- 아이콘 라이브러리 비교표(Lucide/Tabler/Phosphor 개수·weight) — 기존 "아이콘셋 후보" 노트들에 구체 수치 보강용, 신규 노트보다는 기존 노트 업데이트 성격.

## 프로필 반영 후보 (저위험)
- AVIF/WebP 선택 기준을 "인코딩 5~7배 느림 → 캐시 가능(히어로/제품 이미지)=AVIF, 온디맨드 변환·UGC 썸네일=WebP"로 구체화해 기존 이중 포맷 전략 노트에 추가.
- 아이콘셋 선정 시 "무료 6-weight(thin~duotone) 제공은 Phosphor가 유일" 참고 기준으로 인지.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
