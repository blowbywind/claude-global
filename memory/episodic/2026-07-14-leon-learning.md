---
date: 2026-07-14
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-14

WebFetch 도구 권한이 이 세션에서 승인되지 않아 URL 실재 여부를 직접 열람 확인하지는 못했습니다. 대신 각 주장의 사실 정합성(기존 위키 지식·업계에 널리 알려진 사실과의 일치 여부)을 기준으로 교차검증했으며, 지나치게 정밀한 수치(예: "25배 빠름", "16배 대중적")처럼 근거 확인이 어려운 항목은 제외했습니다. OKLCH 관련 항목은 위키에 이미 다수 노트(`oklch.md`, `oklch-색공간-디자인-토큰-색상-페어링.md` 등)로 존재해 중복 제외했습니다.

## 오늘 배운 것
- COLRv1 컬러 폰트는 Chrome/Edge/Firefox는 지원하나 Safari는 미지원 — 다색 아이콘 폰트를 쓸 경우 단색 SVG/폰트 폴백 병행 필요(브라우저 지원 파편화는 잘 알려진 사실).
- AVIF는 사진성 콘텐츠에서 WebP보다 압축률이 우수하지만 인코딩 비용이 훨씬 큼 — 기존 정책(AVIF+WebP 폴백)은 유지하되, 인코딩은 빌드 파이프라인에서 사전 처리하는 방향이 안전.
- JPEG XL은 아직 브라우저 지원이 Safari 위주로 제한적 — 단독 채택은 시기상조, AVIF/WebP 폴백 정책 유지.
- unDraw 등 오픈소스 일러스트는 accent 컬러만 브랜드색 반영 가능하고 배경·라인·피부톤은 고정 — 완전한 브랜드 일치가 필요하면 Storyset 등 대안 병행 검토.
- SVG 애니메이션은 `transform`/`opacity`만 GPU 컴포지팅되고 `fill` 애니메이션은 리페인트를 유발 — 아이콘 모션 제작 시 transform 기반 설계 우선.
- Sharp(libvips 기반)가 Node 이미지 처리 파이프라인의 사실상 표준으로 자리잡음 — 향후 리사이즈/포맷 변환 스크립트 도입 시 1순위 후보로 인지(정확한 성능 배수는 출처 신뢰도 낮아 제외).

## 출처
- [Color Fonts in 2026](https://blog.fontlab.com/2026/05/03/color-fonts-in-2026/)
- [WebP vs AVIF 2026 가이드](https://www.dunetools.com/guides/webp-vs-avif-2026/) (수치는 참고용, 재검증 권장)
- [JPEG XL Browser Support 2026](https://fastedit.net/blog/jpeg-xl-browser-support-2026) (수치는 참고용, 재검증 권장)
- [unDraw Review & Alternatives](https://pixels.market/blog/undraw-review-alternatives)
- [CSS Animations Performance](https://css-zone.com/blog/css-animations-performance)

## 위키화 후보
- SVG/CSS 애니메이션 성능 원칙(transform·opacity GPU 컴포지팅 vs fill 리페인트) — 신규 concepts 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 이미지 포맷 정책에 "JPEG XL은 아직 시기상조, AVIF+WebP 폴백 유지" 단서 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
