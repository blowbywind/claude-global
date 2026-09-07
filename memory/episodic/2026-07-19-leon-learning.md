---
date: 2026-07-19
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-19

## 오늘 배운 것

- **SVG 아이콘 배포 툴체인**: 아이콘셋 규모 임계치(50개 미만=인라인/컴포넌트, 100개 초과=sprite)는 기존 위키 노트와 일치 확인(중복 아님, 재검증됨). 신규 정보로 Vite 환경은 `vite-plugin-svg-icons`(핫리로드), 비Vite/SSR 환경은 `svg-sprite` CLI로 정적 `sprite.svg` 생성 — 둘 다 실재하는 표준 오픈소스 툴체인.
- **접근성 대비 이중 기준**: 법적 감사 기준은 여전히 WCAG 2.2 AA(2026-04 미국 ADA Title II 공공기관 1차 준수 마감 발효, DOJ 2024 확정 규칙), 실무 가독성 보조 설계지표로 APCA 병행 — 기존 위키 노트(rina, 2026-07-12: "APCA는 2023년 WCAG3 초안에서 제외, 현재도 미확정 → WCAG 2.x가 실제 적용 기준")와 상충 없이 정합.
- **AVIF 인코딩 권장값**: 사진 quality 70-80(4:2:0 서브샘플링), 텍스트 포함 그래픽 80-85(4:4:4), Sharp `speed: 6`이 프로덕션 균형점 — 브랜드 자산 이미지 저장 시 콘텐츠 유형별 quality 분리 적용 필요.
- **브랜드 색상→자산 파이프라인**: OKLCH를 캐노니컬 디자인 토큰으로 저장하고 빌드 시 HEX 변환하는 흐름이 표준화 중 — SVG fill/stroke 값 산출 시 리나의 OKLCH 토큰 결정을 그대로 이어받아 변환하는 인터페이스로 적용 가능(적용 원칙에 부합).
- **일러스트레이션 시스템 원칙**: 폼·선 굵기·모서리 반경·원근법 규칙을 사전 정의해 아이콘~대형 일러스트까지 일관성 확보하는 접근은 유효(단, 원문의 "브랜드 인지도 80% 상승·가시성 3.5배" 등 구체 수치는 1차 출처 불명확한 마케팅 블로그성 통계라 폐기).
- **⚠ 검증 불일치 발견**: 이번 리서치의 "SVG2 `d` 속성 path morphing — Firefox 97+ 지원, WebKit(Safari) 미지원" 주장은 기존 위키 노트(leon, 2026-07-18 "`d` 프로퍼티는 Chrome/Firefox/Safari 15.4+ 지원")와 정면 상충. 어느 쪽도 이번 세션에서 재확인(WebFetch 권한 미승인으로 접근 실패)하지 못해 신규 주장은 폐기하고, 기존 노트도 재검증 보류 상태로 플래그만 남김 — 다음 리서치 사이클에서 caniuse 기준으로 재확인 요청.

## 출처
- [SVG Sprite: The Modern Guide](https://www.svggenie.com/blog/svg-sprite-modern-guide)
- [WCAG3 Contrast as of April 2026 (Adrian Roselli)](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Color Accessibility Guide: WCAG & APCA](https://humbldesign.io/blog-posts/color-accessibility-guide-wcag)
- [Best Settings for AVIF Encoding](https://openaviffile.com/best-settings-for-avif-encoding/)
- [sharp AVIF quality issue #4227](https://github.com/lovell/sharp/issues/4227)
- [OKLCH and Consistent, Accessible Color Palettes](https://blog.logrocket.com/oklch-css-consistent-accessible-color-palettes)
- [Building an Illustration System](https://www.rmcad.edu/blog/building-an-illustration-system-shapes-strokes-and-scale-rules/)

## 위키화 후보
- SVG 스프라이트 배포 툴체인(Vite: vite-plugin-svg-icons / 비Vite: svg-sprite CLI) — 아이콘셋 임계치 노트에 실행 도구 보강
- AVIF 인코딩 quality 권장표(사진 70-80 vs 텍스트/그래픽 80-85, speed:6) — 이미지 최적화 체크리스트 신규 노트

## 프로필 반영 후보 (저위험)
- 이미지 저장 워크플로에 "콘텐츠 유형별 AVIF quality 분리(사진 70-80 / 그래픽·텍스트 80-85)" 세부 기준 추가
- 브랜드 색상 자산화 시 "OKLCH 토큰→HEX 빌드 변환" 파이프라인을 리나 색상 결정과의 표준 인터페이스로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 발견은 기존 제작 체크리스트/프로필 보강 수준으로, 별도 자동화 도구는 불필요)
