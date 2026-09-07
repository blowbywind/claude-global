---
date: 2026-07-12
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-12

## 오늘 배운 것
- SVGO v4는 `removeViewBox`·`removeTitle` 플러그인을 기본 비활성화로 전환 — 접근성(제목·뷰박스 보존)을 최적화보다 우선하는 방향. 기존 위키 접근성 체크리스트(`role="img"`+`<title>`)와 정합하므로 SVGO 실행 시 두 옵션이 꺼져 있는지 확인만 하면 됨.
- OKLCH가 컬러 토큰 표준으로 자리잡음(Tailwind v4 기본 채택) — evilmartians 출처로 신뢰도 높고, 기존 위키의 "듀오톤 팔레트 검증에 OKLCH 적합" 기록과 일치. 별도 반영 불필요, 기존 방침 유지.
- AVIF(~93~94% 지원) vs JPEG XL(~12%, Safari만 네이티브) — 기존 "AVIF+WebP 폴백" 권고안이 2026년 기준으로도 유효함을 재확인. JPEG XL은 아직 시기상조.
- SVG 스프라이트/인라인이 아이콘 폰트 대비 렌더링·접근성·번들 크기 전 영역 우위 — 업계 일반 컨센서스와 일치, 현재 인라인 SVG 방식 변경 불필요.
- Lucide(1,500+, 단일 아웃라인)·Phosphor(9,000+, 6 weight)·Tabler(5,900+, 24×24·2px stroke) 3대 오픈소스 아이콘셋 특성 — 신규 아이콘셋 도입 검토 시 참고 가능한 수치이나 출처가 개인 블로그(mantlr.com)라 참고용으로만 취급.
- unDraw는 "단일 accent 컬러"로 브랜드 컬러를 입히지만 배경·선화·스킨톤은 고정이라 완전한 브랜드 일치엔 한계 — 참조 일러스트로 쓸 때 한계 인지 필요.

※ AI 벡터화 도구 소개(vectosolve.com)와 Figma 디자인 토큰 W3C 표준 확정 날짜(atomize.tools) 항목은 출처가 신뢰도 낮은 블로그이고 구체적 사실 주장(표준 확정 시점 등) 검증이 불가해 이번 기록에서 제외함.

## 출처
- [svgo/svgo (GitHub releases)](https://github.com/svgo/svgo)
- [OKLCH in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [JPEG XL vs AVIF](https://blog.openreplay.com/jpeg-xl-vs-avif/)
- [Icon Fonts vs SVG Sprites vs Inline SVGs](https://allsvgicons.com/blog/icon-fonts-vs-svg-sprites-vs-inline-svgs/)
- [Best Open Source Icon Libraries Compared](https://mantlr.com/blog/best-open-source-icon-libraries-compared)
- [unDraw Review & Alternatives](https://pixels.market/blog/undraw-review-alternatives)

## 위키화 후보
- SVGO v4 접근성 우선 기본값 변경(removeViewBox·removeTitle 비활성) — 기존 SVGO 최적화 노트에 갱신 항목으로 추가할 가치 있음.

## 프로필 반영 후보 (저위험)
- 신규 아이콘셋 도입 검토 시 "Tabler(24×24, 2px stroke)" 옵션을 후보 용어로 인지.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
