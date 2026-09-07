---
date: 2026-09-04
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-09-04

## 오늘 배운 것
- **SVGO v4.1.0** 확인(GitHub 릴리스 원문 대조 완료): sax 1.5.0→1.6.1 업그레이드로 XML 검증 강화, `removeScripts` 보안 하드닝 포함. 기존 노트(v4.0.2) 갱신.
- **Lucide v1.0 정식 출시** 확인(InfoQ 원문 대조): 상표 브랜드 아이콘 전면 제거 + UMD 빌드 제거로 lucide-react 11.4MB→약 1MB gzip(32.3% 감량). 브랜드 아이콘 참조 중인 기존 자산 있으면 마이그레이션 필요.
- **CSS `d: path()` 모핑 — 기존 리서치 오류 정정**: MDN 원문은 "Limited availability(Baseline 미충족)"로 명시하고, caniuse도 Safari(데스크톱·iOS) 전 버전 미지원으로 표기. "Chrome/Firefox/Safari 18 모두 지원"은 사실과 다름 → **Chrome·Firefox만 지원, Safari 제외**로 정정.
- **AVIF/WebP 브라우저 지원율**만 원문 확인됨(WebP 약 97%, AVIF 약 93~94%, 격차는 구형 Safari·미갱신 기기). **이미지 바이트 점유율 수치(WebP 35~40%, AVIF 8~10%, JPG 40%)는 원문에 없어 폐기**.
- **그레인/노이즈 일러스트 트렌드(2026)** 자체는 원문 확인되나, "AI 생성 티 배제" 프레이밍은 출처와 반대(원문은 오히려 AI 이미지 생성기를 그레인 블러 트렌드 구현 도구로 소개) → **정정: "그레인/노이즈 오버레이 트렌드, 단 AI 생성 도구 활용이 전제"**.
- **Figma 토큰 3-Layer 구조**(Primitives → Semantic(Light/Dark 모드) → Brand override) 원문 확인. 단 "컴포넌트=계약" 프레이밍은 해당 출처에 없어 폐기.
- WCAG 3.0 APCA는 여전히 exploratory 상태 확인. 단 "2028~2030년" 표현은 부정확 — 원문은 "빨라도 2030년"만 명시, 실무 기준은 여전히 WCAG 2.2 AA.

## 출처
- [SVGO v4.1.0 Release](https://github.com/svg/svgo/releases/tag/v4.1.0)
- [Lucide Releases Version 1.0 - InfoQ](https://www.infoq.com/news/2026/06/lucide-v1-icons/)
- [d - CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/d)
- [path() basic-shape 지원 - caniuse](https://caniuse.com/mdn-css_types_basic-shape_path_d)
- [AVIF vs WebP 2026 - ModPageSpeed](https://modpagespeed.com/blog/avif-vs-webp-2026/)
- [Grainy Blur Design 2026 - Kittl Blog](https://www.kittl.com/blogs/grainy-blur-effect-stl/)
- [Figma Variables Guide - Supik](https://supik.digital/figma-variables-guide)
- [WCAG3 Contrast as of April 2026 - Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)

## 위키화 후보
- CSS `d: path()` 아이콘 모핑 — Safari 미지원(Baseline 미달) 현황을 개념 노트로 기록(애니메이션 아이콘 설계 시 폴백 필요)

## 프로필 반영 후보 (저위험)
- SVGO 4.1.0(보안 하드닝 반영), Lucide v1.0(브랜드 아이콘 제거 영향) 최신판 인지 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
