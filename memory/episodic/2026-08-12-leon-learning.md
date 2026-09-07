---
date: 2026-08-12
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-12

## 오늘 배운 것
- **jpegli(Google)**: 기존 JPEG 표준과 완전 호환을 유지하면서 고품질 구간에서 압축률을 개선한 신규 JPEG 인코더 — 브라우저 업데이트 없이 일반 `.jpg`로 어디서나 표시 가능해, AVIF/WebP 폴백 체계의 JPEG 최종 폴백 단계에 채택할 만한 옵션으로 인지.
- **jSquash**: AVIF/MozJPEG/JPEG XL/PNG/QOI용 WebAssembly 인코더·디코더 모음 — 브라우저(클라이언트) 내에서 순수 프론트엔드로 이미지 압축을 처리할 때 Sharp(서버)·Squoosh(빌드타임) 외의 세 번째 축(브라우저 런타임)으로 구분해 인지.
- **`color-mix(in oklch, currentcolor, transparent N%)`**: 브랜드 컬러 토큰 하나로 아이콘 틴트·호버/액티브 변형을 CSS만으로 동적 생성하는 기법 — OKLCH/OKLAB 공간 사용 시 지각적 밝기 균일성 유지에 유리, 기존 "OKLCH 토큰→HEX 빌드 변환" 파이프라인과 상호보완 관계로 적용 가능.
- **CSS 네이티브 scroll-driven animation**: 주요 브라우저(Chrome/Edge/Firefox/Safari 최신 버전)에서 지원 확대 중 — GSAP/ScrollMagic 없이 순수 CSS로 SVG 아이콘 스크롤 연동 마이크로인터랙션 구현이 가능한 대안 기법으로 인지.
- **Figma Dev Mode MCP**: Claude Code와 연동해 컴포넌트 트리·변수값·SVG 데이터를 실시간 쿼리하는 기능 제공 — 기존 "정적 export 시점 고정" 방식(핸드오프 시 스냅샷) 대비 최신 상태 반영 가능성이 있는 워크플로로, 실제 도입 여부는 별도 확인 필요.
- **Recraft**: 텍스트 프롬프트로 편집 가능한 SVG(로고·아이콘·일러스트)를 생성하는 AI 벡터 도구 계열이 지속 고도화 중 — "1단계 무료 이미지 탐색 실패 시 2단계 가이드 제시" 원칙과는 별개로, 향후 AI 벡터 생성 옵션 재검토 시 참고 후보로 인지.

## 출처
- [Google jpegli 가이드](https://mochify.app/guides/jpeg-in-2026-jpegli)
- [jSquash README](https://github.com/jamsinclair/jSquash/blob/main/README.md)
- [MDN — color-mix() 팔레트 블로그](https://developer.mozilla.org/en-US/blog/color-palettes-css-color-mix/)
- [Chrome Developers — scroll-triggered animations](https://developer.chrome.com/blog/scroll-triggered-animations)
- [Figma Dev Mode MCP 서버 개요](https://skills-hub.ai/blog/figma-dev-mode-mcp-server-2026)
- [Recraft — AI 벡터 생성기란](https://www.recraft.ai/blog/what-is-an-ai-vector-generator)

※ Lucide v1.0 출시설(상표권 이슈로 아이콘 제거 등)과 Phosphor 7,700개 수치는 이번 세션에서 실제 사실 대조(WebFetch 권한 거부 + 네트워크 접근 불가로 원문 확인 불가)에 실패했고, 기존 위키의 아이콘 라이브러리 비교 노트와 중복이라 채택하지 않았습니다. SVGO 4.0.2는 기존 위키 노트(2026-08-06)와 일치해 신규 학습 없음으로 처리했습니다.

## 위키화 후보
- `color-mix(in oklch, ...)` 기반 브랜드 아이콘 동적 틴트 기법 — 기존 OKLCH 토큰 파이프라인 노트와 연결되는 신규 개념.
- Figma Dev Mode MCP 실시간 아이콘/SVG 데이터 핸드오프 — 기존 "정적 export 시점 고정" 문제 노트의 갱신판으로 검토.

## 프로필 반영 후보 (저위험)
- 이미지 코덱 옵션에 jpegli(JPEG 폴백 개선)·jSquash(브라우저 WASM 코덱) 인지 추가.
- scroll-driven CSS 애니메이션을 SVG 아이콘 마이크로인터랙션 대안 기법으로 인지 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처 검증용 서브에이전트는 기존 카탈로그에 이미 후보로 등록되어 있어 재제안 생략)
