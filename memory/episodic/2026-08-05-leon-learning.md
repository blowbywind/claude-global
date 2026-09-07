---
date: 2026-08-05
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-05

## 오늘 배운 것
- CSS Houdini Paint API는 Chromium 계열 전면 지원, Safari 부분 지원, Firefox는 검토 단계이며 `css-paint-polyfill`로 크로스브라우저 폴백 가능 — 듀오톤/패턴 채우기 등 커스텀 페인트 효과를 SVG 없이 CSS만으로 구현할 대안으로 검토 가치.
- 오픈소스 배경 제거 표준은 rembg(GitHub 1.6만+ 스타)이며, BiRefNet 계열 아키텍처가 모발·반투명 경계 정밀도에서 기존 모델 대비 개선됨(단, 구체 모델 용량·GPU 요구치는 출처에서 확인 안 돼 보류).
- SVG 아이콘이 아이콘 폰트 대비 우위: 인라인 SVG는 HTML과 함께 즉시 페인트되고 번들러 트리셰이킹이 가능한 반면, 아이콘 폰트는 FOIT(텍스트 미노출)·FOUT(대체문자 노출 후 전환)로 인한 레이아웃 시프트(CLS) 위험이 있음.
- 접근성 자동 감사는 axe-core가 CI/CD 표준 엔진, WAVE는 빠른 시각 점검, Pa11y는 CI 파이프라인용으로 역할이 나뉘며, 공통적으로 "alt 텍스트가 의미상 적절한지"는 자동 도구가 판단 불가 — 수동 검증 필수(BrowserStack 원문 확인).
- 2026 일러스트 트렌드 중 하나로 "Quirky Illustrations"(손그림 느낌·과장된 비례·불완전함을 살린 구성)가 언급됨 — 각진 지오메트릭 일변도에서 벗어난 보조 옵션으로 참고할 만함(단, "기하학→유기적 전면 전환"이라는 광범위한 주장은 출처에서 확인 안 돼 배제).

※ SVGO 4.0.2의 `removeViewBox`/`removeTitle` 기본 비활성화, Material Symbols 가변 폰트(FILL/wght/GRAD) 항목은 이미 위키에 반영돼 있어 제외했습니다. 리서치 원문의 "Material Symbols 단일 300KB 파일" 주장은 인용된 icojoy 출처 본문에 해당 내용이 없어 폐기했습니다.

## 출처
- [Houdini: How and why to use it today - web.dev](https://web.dev/articles/houdini-how)
- [Best Free Remove.bg Alternatives 2026 - dev.to](https://dev.to/samma1997/best-free-removebg-alternatives-2026-7-background-removers-tested-2if6)
- [Icon Fonts vs SVG Sprites vs Inline SVGs - allsvgicons](https://allsvgicons.com/blog/icon-fonts-vs-svg-sprites-vs-inline-svgs/)
- [Icon Fonts vs SVG: A 2026 Comparison - icojoy](https://icojoy.com/blog/icon-fonts-vs-svg-2026-comparison/)
- [Automating Accessibility Testing in 2026 - BrowserStack](https://www.browserstack.com/guide/automate-accessibility-testing)
- [2026 Graphic Design Trends - digitalsynopsis](https://digitalsynopsis.com/design/graphic-design-trends-2026/)

## 위키화 후보
- CSS Houdini Paint API 브라우저 지원 현황 + polyfill 대응법(신규 개념 노트 가치 있음)

## 프로필 반영 후보 (저위험)
- 접근성 자동 감사 도구 구분(axe-core=CI표준/WAVE=빠른점검/Pa11y=CI연동) + "alt 텍스트 정확성은 수동 검증 필수" 원칙을 SVG 제작 체크리스트에 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
