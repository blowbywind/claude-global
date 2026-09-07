---
date: 2026-08-01
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-01

[검증 메모] 이번 세션에서 WebFetch/WebSearch 실행 권한이 없어(승인 대기 상태) 인용 URL을 직접 재요청(fetch)하지 못했습니다. 따라서 1차 출처(공식 npm/GitHub/W3C)에 기반한 항목은 유지하고, 2차 출처(개인 블로그)만 근거로 한 항목·기존 프로젝트 이력(이미지 생성 능력 관련 과거 과장 사례)과 충돌하는 항목은 신뢰도를 낮추거나 제외했습니다.

## 오늘 배운 것
- Sharp 0.34대(2026 Q1)에서 AVIF 인코딩이 libavif 백엔드로 1급 지원되고 라이선스 키 없는 HEIC 디코드·WASM 빌드가 추가됨 — 이미지 최적화 파이프라인 도구 선택 시 참고
- Iconify가 200개+ 아이콘셋·30만개+ 아이콘을 통합 제공하며 사용된 아이콘만 로드해 번들을 10KB 이하로 유지 — 기존에 인지 중인 Tabler(24×24, 2px stroke) 후보와 병행 검토 대상으로 추가
- PWA/파비콘 2026 표준 파일셋: `favicon.svg`(무한확대)+`favicon.ico`(멀티사이즈)+`apple-touch-icon.png`(180×180, iOS는 SVG 미지원)+192/512px PNG(매니페스트용) — 신규 자산 제작 체크리스트에 추가 가치 있음
- SVG2 사양은 여전히 Candidate Recommendation 단계이며, Safari에서 SVG2 신규 CSS 기하 속성(calc·커스텀 프로퍼티 연동)에 제약 존재 — SVG2 전용 기능 사용 시 프로그레시브 인핸스먼트 원칙 유지 필요
- JPEG XL의 Chrome 재도입 논의가 2026년 진행 중이라는 보도가 있으나 근거가 2차 출처(블로그)뿐이라 버전·시기는 미확정으로 처리 — 기존 "AVIF+WebP 폴백 유지" 판단은 그대로 유지, 공식 Chrome Platform Status 등 1차 출처로 재확인 필요
- Recraft V4의 "실제 벡터 SVG 생성(래스터 트레이싱 아님)" 주장은 이번 세션에서 재검증하지 못해 채택 보류(기존 위키 메모 `presentation-design-bots-image-workflow.md`의 과거 과장 이력과 동일 리스크 패턴이라 추가 확인 전까지는 신뢰도 격상 보류)

## 출처
- [npm sharp](https://www.npmjs.com/package/sharp)
- [Iconify GitHub](https://github.com/iconify/iconify)
- [Iconify 뉴스](https://iconify.design/news/)
- [SVGWG SVG2 Draft](https://svgwg.org/svg2-draft/)
- [UseToolSuite — Favicon/PWA 가이드](https://usetoolsuite.com/blog/favicon-pwa-setup-guide/)

## 위키화 후보
- "PWA/파비콘 2026 표준 파일셋" 체크리스트 신규 개념 노트(1차 출처 기반, 제작 체크리스트에 바로 연결 가능)

## 프로필 반영 후보 (저위험)
- 아이콘셋 후보 목록에 "Iconify(통합 프레임워크, 사용분만 로드)"를 Tabler와 병기

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
