---
date: 2026-07-24
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-24

늦게 도착한 배경 검증 에이전트가 실제로 wget+grep 방식으로 16개 URL 본문 대조를 완료했습니다. 실질적 검증 데이터이므로 앞서 드린 보고를 다음과 같이 수정·확정합니다(오탐 2건 제거, 검증 확인 3건 추가 반영).

## 오늘 배운 것
- **SVG 업로드 XSS 위험**: 인라인 렌더링 대신 `<img>` 태그로 삽입하는 것이 가장 안전. 인라인이 꼭 필요하면 DOMPurify `USE_PROFILES: { svg: true, svgFilters: true }`로 새니타이징.
- **무료 일러스트 라이선스**: Open Peeps=CC0(크레딧 불필요), unDraw=오픈소스 라이선스(무료 상업이용, 크레딧 불필요), Storyset=Freepik 종속(무료 티어는 크레딧 표기+일일 다운로드 제한이며 포맷 제한은 없음).
- **WCAG 2.5.8 타겟 크기(AA)**: 클릭 히트 영역 최소 24×24 CSS px, AAA/권장 수준은 44×44.
- **W3C 디자인 토큰(DTCG) 포맷 첫 안정 버전 공식 발표(2025-10-28)**: 브랜드 컬러 등 디자인 토큰을 Figma Variables↔Style Dictionary 등 도구 간 이식하는 표준으로 확정.
- **이미지 포맷 정책 재확인**: JPEG XL 디코더가 Chrome 145에 복귀했으나 기본 비활성(플래그 게이트), 실질 지원은 Safari뿐(약 13.6%) — 기존 "AVIF+WebP 폴백 유지" 결론 재확인.
- **이미지 최적화 툴체인**: Sharp가 Squoosh-cli보다 약 25배 빠름(실시간 변환에 적합), Squoosh는 유지보수는 저조하나 코덱 품질 통제력이 강점(빌드타임 1회성 정적 압축에 병행 권장).

## 출처
- [SVG XSS 새니타이징 가이드](https://www.svggenie.com/blog/svg-xss-sanitize-guide)
- [unDraw 리뷰·대안](https://pixels.market/blog/undraw-review-alternatives)
- [Storyset 리뷰·대안](https://pixels.market/blog/storyset-review-alternatives)
- [WCAG 2.5.8 Target Size](https://silktide.com/accessibility-guide/the-wcag-standard/2-5/input-modalities/2-5-8-target-size-minimum/)
- [W3C DTCG 첫 안정 버전 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [Chrome 145 Released — Phoronix](https://www.phoronix.com/news/Chrome-145-Released)
- [Sharp vs Jimp vs Squoosh 2026](https://www.pkgpulse.com/guides/sharp-vs-jimp-vs-squoosh-2026)
- [Lottie vs SVG 애니메이션](https://www.carmenansio.com/articles/animated-icon-libraries)

## 위키화 후보
- SVG 업로드 보안 체크리스트(XSS/DOMPurify SVG 프로필) — 신규 개념 노트 가치.
- DTCG 디자인 토큰 포맷(2025-10 stable) — 브랜드 컬러 토큰 이식 표준, 신규 개념 노트 가치.

## 프로필 반영 후보 (저위험)
- 무료 일러스트 라이선스 3종(Open Peeps/unDraw/Storyset) 판단기준을 웹리서치 1단계 소싱 기준에 추가.
- 이미지 최적화 툴체인 역할분리(Sharp=런타임 실시간, Squoosh=빌드타임 정적·코덱품질) 병행 전략 인지.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — "출처-대조-검증기" 에이전트가 이번에 지연되긴 했으나 실제로 유효하게 작동함을 확인)
