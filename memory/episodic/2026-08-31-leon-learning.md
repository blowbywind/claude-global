---
date: 2026-08-31
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-31

## 오늘 배운 것
- **SVG 업로드 보안**: SVG는 스크립트 실행 가능한 XML이므로 서버측 허용목록(allowlist) sanitize + 클라이언트 DOMPurify + 엄격한 CSP + 쿠키리스 서브도메인/`text/plain` 서빙의 다층 방어가 필요(블랙리스트 방식은 우회 취약점 다수). 원문 대조로 내용 일치 확인.
- **PNG 최적화 도구 특성**: oxipng=무손실 재압축(테스트 이미지 기준 약 44% 절감), pngquant=손실 팔레트 양자화(같은 이미지 약 65% 절감, 색상 손실 발생). 단 "로고는 pngquant→oxipng 조합, 사진은 oxipng 단독"이라는 처방은 원출처(개인 TIL, oxipng 공식 README)에 없어 채택하지 않음 — 손실 허용 여부로만 도구를 구분해 적용.
- **아이콘 폰트 레거시화 재확인**: FOUT/빈 사각형 노출, 미사용 글리프까지 전량 로드되는 번들 비대 문제로 "신규 프로젝트에 비권장(Legacy)" 명시 확인. 기존 SVG 스프라이트/인라인 SVG 정책 유지가 타당함.
- **CSS Anchor Positioning 수치 정정**: 원 리서치의 "Safari 18.2+/Firefox 132+/글로벌 88~91%"는 caniuse 원문 대조 결과 부정확함. 실제는 Chrome 125+, Firefox 147+, Safari는 신버전 체계 26+부터 지원 시작(구버전 18.x대는 전혀 미지원), 글로벌 지원율 약 84.12%. 3대 엔진 동시 지원 시점이 알려진 것보다 늦으므로, 툴팁/배지 SVG 앵커 배치에는 당분간 JS 폴백 유지 필요.
- **COLRv1 컬러 폰트**: Chrome 98+/Firefox 107+ 지원, Safari는 2026-05 시점 기준으로도 여전히 미지원 확인(공식 소스 원문 일치). 컬러 아이콘 폰트 실험 시 "WOFF2 COLRv1 + 단색 폴백" 조합 유지.
- **AI SVG 생성 도구 동향**: Recraft V4(2026-02)/V4.1(2026-05)가 편집 가능한 순수 SVG를 직접 출력, V4.1은 2배 속도·13~16% 비용 절감 확인. 결제 미연결로 현재 프로젝트 사용 불가, 참고 트렌드로만 기록.

## 출처
- [SVG XSS: How to Sanitize SVG Files](https://www.svggenie.com/blog/svg-xss-sanitize-guide)
- [TIL: oxipng and pngquant to compress PNGs](https://ryangreenberg.com/til/compress-pngs/)
- [oxipng GitHub](https://github.com/oxipng/oxipng)
- [Icon Fonts vs SVG Sprites vs Inline SVGs](https://allsvgicons.com/blog/icon-fonts-vs-svg-sprites-vs-inline-svgs/)
- [CSS Anchor Positioning – Can I Use](https://caniuse.com/css-anchor-positioning)
- [Color Fonts in 2026 – FontLab Blog](https://blog.fontlab.com/2026/05/03/color-fonts-in-2026/)
- [Recraft V4 and V4.1 – invideo Blog](https://invideo.io/blog/recraft-ai-image-generator/)

※ Figma Variables/DTCG 관련 항목("Enterprise 플랜 전용" 서술)은 원문 재확인 시 해당 세부 내용이 본문에 없어 채택 보류.

## 위키화 후보
- SVG 업로드 XSS 다층 방어 체크리스트(허용목록 sanitize + DOMPurify + CSP + 서빙 격리) — 신규 concept 노트.
- CSS Anchor Positioning 실제 브라우저 지원표(Chrome 125/Firefox 147/Safari 26+, 약 84%) — 잘못된 수치 유통 방지용 정정 기록.

## 프로필 반영 후보 (저위험)
- SVG 업로드 처리 체크리스트에 "허용목록 sanitize + DOMPurify + CSP 다층 방어" 원칙 추가.
- PNG 압축 기준을 "손실 허용=pngquant, 무손실 필요=oxipng"으로 구분(기존 Sharp 표준 도구 원칙과 병기, 신규 도구 도입 아님).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
