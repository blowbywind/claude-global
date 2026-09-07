---
date: 2026-08-14
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-14

## 오늘 배운 것 (검증 완료)

- **Chrome 145 JPEG XL 재도입 확인** — phoronix.com 원문 대조 결과, Rust 기반 `jxl-rs` 디코더로 재도입된 것은 사실이나 `enable-jxl-image-format` 플래그 뒤에 있다는 것까지만 원문에 있고, "2026년 하반기 기본 활성화 예상"은 원문에 없는 추측이라 **폐기**. 릴리스일도 2026-02-10(EST)로 레온 기록(02-11)과 하루 오차. → JPEG XL은 여전히 실서비스 반영 대상 아님, AVIF/WebP 우선 전략 유지.
- **sharp 0.35.0(2026-06-10) 세부 기능 전량 확인** — 공식 changelog 원문 대조로 AVIF/HEIF `tune` 옵션(SSIMULACRA2 품질지표 기반), HDR JPEG gain map용 `keepGainMap`/`withGainMap`, libvips 8.18.3 업그레이드 모두 사실 확인. 런타임 최적화 툴체인 노트에 반영 가치 있음.
- **Unsplash API 표기 규칙 정정 확인** — API 연동 시 Unsplash와 포토그래퍼 양쪽 표기가 API ToS상 의무(위반 시 API 접근 취소 가능)이고, 사이트에서 직접 다운로드하는 일반 이용은 표기 불요라는 구분은 원문 확인됨. 다만 레온의 "Unsplash+포토그래퍼 이중표기" 표현은 유료 티어명(Unsplash+)과 혼동되는 서술이라 "API 경유 시 Unsplash+포토그래퍼 모두 표기"로 정정.
- **Unsplash+ 유료 티어 제약 확인** — 표기 불요는 동일, 대신 AI 학습 금지·템플릿 재판매 금지·생체인식 활용 금지 제약 및 파일당 1만 달러 배상(indemnification, 무료 티어엔 없음) 포함 — 원문 확인.
- **Squoosh CLI 정체 확인(부분)** — npm 레지스트리 조회 결과 `@squoosh/cli` 최종 배포일 2023-01-03, 이후 갱신 없음(3년+ 정체) 확인. 다만 "인력 이슈로 중단"이라는 사유는 출처에서 확인 안 돼 **제외**, "장기 미업데이트"로만 기록.
- **SVG 2.0 목표일 오류 정정(중요)** — github.com/w3c/svgwg 마일스톤 원문 확인 결과, 목표일은 "2026-09-19"가 아니라 **2019-09-19이며 이미 7년 초과 지연 상태**. 진행률 46%(closed 77 / total 164, 2026-04-23 기준)는 근사치로 일치하나 목표일 주장은 **폐기·정정**.

폐기(미검증/오류):
- Figma Config 2026 "Make an Image/Expand Image/Shader Fills" 개별 기능명 — TechCrunch 원문 본문에 접근 불가(정적 fetch에서 메타 설명만 확인됨: "code layer, motion, shaders, AI 플러그인" 수준의 일반 언급뿐), 구체적 기능명 3종은 출처 대조 불가로 전량 폐기.

## 출처
- [Google Chrome 145 Released With JPEG-XL Image Support](https://www.phoronix.com/news/Chrome-145-Released)
- [sharp v0.35.0 changelog](https://sharp.pixelplumbing.com/changelog/v0.35.0/)
- [Unsplash License: Is Attribution Required in 2026?](https://www.licenseorg.com/blog/unsplash-license-attribution-required)
- [@squoosh/cli — npm registry](https://registry.npmjs.org/@squoosh/cli)
- [SVG 2.0 Proposed Recommendation milestone — w3c/svgwg](https://github.com/w3c/svgwg/milestone/4)

## 위키화 후보
- "SVG 2.0 진행 현황" 기존 노트에 목표일 오류 정정(2019-09-19, 7년 초과 지연) 반영 — 잘못된 날짜가 이미 위키에 있다면 시급 수정 대상

## 프로필 반영 후보 (저위험)
- sharp AVIF/HEIF `tune` + HDR JPEG gain map(`keepGainMap`/`withGainMap`) 지원을 이미지 최적화 툴체인 세부 지식으로 인지
- Unsplash API vs 일반 다운로드 표기 규칙 구분(API=필수, 직접 다운로드=불요)을 1단계 소싱 체크리스트 세부 기준으로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 산출물에서 반복 자동화로 명확히 가치 있는 신규 항목 미발견)
