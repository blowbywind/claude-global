---
date: 2026-08-30
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-30

## 오늘 배운 것

- **sharp 0.35.4 확인** — npm 레지스트리 직접 대조 결과 최신판 0.35.4(배포 2026-08-26) 확정. 기존 위키 기록(0.35.3, 08-13)은 갱신 필요.
- **resvg 0.48.0/0.48.1은 2026-08-02 동시 배포** — GitHub Releases API로 대조 확인. 다만 기존 위키(2026-08-21 기록)에 이미 v0.48.1로 반영돼 있어 신규 정보 아님.
- **SVG 2.0 목표일 재확인·리서치 표기 오류 정정**: GitHub 마일스톤 API 직접 조회 결과 `due_on: 2019-09-19`, 진행률 77/164=47%(≈46%). 리서치 원문의 "목표일 9월 19일"(연도 누락 표기)은 과거 이미 정정한 "2026-09-19 오독" 이슈를 재유발할 소지가 있어 **채택하지 않음** — 기존 위키 기록(2019-09-19, 7년+ 초과 지연) 그대로 유지.
- **Iconify 수치 검증 실패**: Iconify API 실시간 조회 결과 336,272개/237셋으로, 리서치 주장치(327,061개/221셋)와 불일치. 변동성 큰 수치라 정밀치는 채택 보류, 기존 "30만 개 돌파"(08-29 기록) 수준의 정성적 표현만 유효.
- **JPEG XL "Chrome 151까지 플래그" 주장은 출처 접근 제약(WebFetch 권한 거부, phoronix/theimagecdn 직접 대조 불가)으로 미검증** — 채택 보류, 기존 기록(~12%, 여전히 플래그 뒤) 유지.
- **OKLCH 브랜드 컬러 폴백 실무 패턴**: `@media (color-gamut: p3)` + HEX/RGB 캐스케이드 폴백은 표준 CSS 기법이며 기존 위키 OKLCH 계열 노트에는 이 구체적 폴백 캐스케이드 패턴이 없어 신규 실무 팁으로 판단.
- SVGO 4.1.0 / Unsplash 비-API 표기 불요 / Figma Variables API Enterprise 전용 — 3건 모두 기존 위키에 이미 정확히 기록됨(중복), 갱신 불필요.
- 아이콘 트렌드(하이퍼미니멀 라인·마이크로 일러스트) 주장은 단일 저신뢰 블로그(icojoy.com) 출처뿐이라 교차검증 불가 → **폐기**.

## 출처
- [sharp — npm registry](https://registry.npmjs.org/sharp/latest)
- [resvg Releases — GitHub](https://github.com/linebender/resvg/releases)
- [SVG 2.0 Proposed Recommendation Milestone — GitHub API](https://github.com/w3c/svgwg/milestone/4)
- [Iconify Collections API](https://api.iconify.design/collections)

## 위키화 후보
- 기존 "Sharp 최신판 0.35.3" 노트를 0.35.4(2026-08-26)로 버전 갱신

## 프로필 반영 후보 (저위험)
- 브랜드 컬러 OKLCH 적용 시 `@media (color-gamut: p3)` + HEX/RGB 캐스케이드 폴백 패턴을 표준 절차로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 제안은 이미 후보 등록돼 있어 중복 제안 생략)
