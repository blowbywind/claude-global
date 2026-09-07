---
date: 2026-07-22
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-22

## 오늘 배운 것
- **AVIF+WebP 폴백 정책 재확인**: JPEG XL이 Chrome 145(2026년 초)에서 메모리 안전 Rust 디코더(jxl-rs)와 함께 실험적 플래그로 부분 복귀했으나 기본 비활성 상태이며, Safari만 기본 지원. 글로벌 지원률은 AVIF ~93% vs JPEG XL ~14%로 격차가 커, 기존 "AVIF+WebP 폴백 유지, JPEG XL 시기상조" 판단이 유효함(검증 완료).
- **COLRv1 컬러 폰트 Safari 미지원 갭 재확인**: Chrome 98+/Firefox 107+/Edge 98+는 지원하나 macOS·iOS Safari는 전혀 렌더링하지 않음. 다색 아이콘 폰트(팔레트 전환) 채택 시 Safari 폴백 설계가 필수(검증 완료).
- **CSS `shape()` 함수, Chromium+WebKit 양쪽 지원 확보**: `path()`의 CSS 단위(%, rem 등) 친화 버전으로, 향후 `clip-path`/`offset-path` 기반 비-사각형 배지·클립 영역을 순수 CSS로 대체할 수 있는 옵션으로 인지(단, "2026년 2월 기준"·"Interop 2026 과제" 프레이밍은 출처에 없어 제외).
- **W3C Design Tokens Format Module 안정판 확정(2025-10-28)**: Adobe·Google·Meta·Figma 등 24개 이상 기관이 지지. 브랜드 컬러 토큰을 벡터/이미지 자산 스택에 매핑할 때 참고할 표준 포맷으로 등록(채택률 수치는 출처 근거 없어 폐기).
- **SVGO v4.0.2가 현재 최신 릴리스**: v4 계열 유지·업데이트 기준으로 인지(SVGOMG 버전 대응, v2 공식 지원 종료 여부는 출처 근거 부족으로 보류).
- **Lottie vs Rive는 우열이 아닌 역할 분담**: Lottie(dotLottie)는 상태 머신을 추가했지만 여전히 재생(선형 애니메이션) 중심, Rive는 상태 기반 인터랙션에 특화된 별도 도구. "2026년 신규 프로젝트는 Rive 권장"이라는 단정은 출처 상충(판매 사이트 vs 니치 도구 서술)으로 폐기, 필요 시 선택지로만 인지.

## 출처
- [JPEG XL Returns to Chrome](https://reezo.ai/blog/jpeg-xl-returns-to-chrome-what-it-means-for-web-images)
- [AVIF vs JPEG Comparison (Uploadcare)](https://uploadcare.com/blog/avif-vs-jpeg-comparison/)
- [COLRv1 Browser Support](https://www.testmuai.com/learning-hub/colrv1-browser-support/)
- [Color Fonts in 2026 (FontLab)](https://blog.fontlab.com/2026/05/03/color-fonts-in-2026/)
- [CSS shape() (Chrome for Developers)](https://developer.chrome.com/blog/css-shape)
- [CSS Shape Commands (CSS-Tricks)](https://css-tricks.com/css-shape-commands/)
- [Design Tokens Format 첫 stable 버전 (W3C)](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [SVGO Releases (GitHub)](https://github.com/svg/svgo/releases)
- [Rive vs Lottie](https://www.rivemasterclass.com/blog/rive-vs-lottie)
- [Animated Icon Libraries](https://www.carmenansio.com/articles/animated-icon-libraries)

## 위키화 후보
- CSS `shape()` — SVG `clip-path`/`offset-path` 대체 옵션으로 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- W3C Design Tokens Format Module(안정판)을 브랜드 컬러 토큰 매핑 표준 참고 용어로 인지.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처 대조 검증은 기존 "출처-대조-검증기" 에이전트로 이미 처리됨)

---
※ 이번 검증에서 Sharp 0.34 "2026 Q1 릴리스" 및 관련 AVIF 인코딩 세부 주장은 GitHub 공식 릴리스 기록과 모순(실제 배포 2025-04, 2026년 초 시점엔 이미 0.35.x)되어 전체 폐기했습니다. 원 출처(hirenodejs.com)의 날짜 오류를 그대로 인용한 것으로 확인되어, 해당 출처는 이후 리서치에서 신뢰도 하향 참고 바랍니다.
