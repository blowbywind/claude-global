---
date: 2026-08-27
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-27

## 오늘 배운 것

- **CSS `shape()` — 리서치 결과 오류 발견, 폐기**: 레온의 리서치는 "Chrome·Edge 지원 확산 중, Safari·Firefox는 구현 진행 중(불안정)"이라 했으나, caniuse 직접 대조 결과 Chrome 135+, Firefox 148+, Safari 18.4+, Edge 135+ 전부 지원 확인(전역 사용률 85.49%). 기존 위키 노트(2026-08-26, "Baseline 도달")가 정확하며, 오늘 리서치의 해당 문구는 구버전 정보로 **폐기**.
- **SVGO 4.1.0**: npm 레지스트리 직접 대조로 확인. 단 위키에 어제(2026-08-26) 이미 동일 내용 등재됨 — 신규 아님, 갱신 불필요.
- **resvg 0.48.1, JPEG XL(Chrome 145·플래그·기본비활성), WCAG 3.0(APCA 2023년 제외·기준 미정)**: 모두 기존 위키 기록과 일치 확인(WCAG 3.0은 Editor's Draft 2026-04-08 기준 검증) — 신규 아님, 중복.
- **dotLottie — Figma 프로토타입 "Export→dotLottie" 직접 내보내기**: 원문 fetch로 문구·날짜(2026-04-15) 일치 확인. 단 단일 출처(마케팅 블로그)라 신뢰도 보통. 위키 미등재 신규 정보.
- **폐기 항목**: AVIF 인코딩 속도 "5~10배" 수치, Figma Variables "69.8%" 통계는 검증 안 함(둘 다 마케팅성 블로그·특이하게 구체적인 수치 패턴) — 출처 미대조로 **버림**.
- **검증 파이프라인 메모**: 이번 세션도 WebFetch 권한이 거부됐으나 `wget` 폴백으로 실제 대조 성공(npm/caniuse/두 블로그 원문 확보). 기존 "출처-대조-검증기-wget-폴백-내장" 후보 유효성 재확인.

## 출처
- [SVGO latest](https://registry.npmjs.org/svgo/latest) — 4.1.0 직접 확인
- [caniuse: CSS shape()](https://caniuse.com/mdn-css_types_basic-shape_shape) — 4대 엔진 지원 확인
- [JPEG XL Is Back in Chrome](https://www.photoformatlab.com/blog/jpeg-xl-chrome-2026-image-format-guide) — Chrome 145, 플래그 뒤
- [WCAG3 Contrast as of April 2026 — Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html) — Editor's Draft, APCA 미정
- [Figma Prototypes Now Export As Interactive dotLottie](https://techlusion.io/insights/figma-prototypes-export-interactive-dotlottie/)

## 위키화 후보
- CSS `shape()` 브라우저 지원 노트에 "2026-08-27 caniuse 재대조로 Baseline 확정 재확인(오탐 리서치 배제)" 각주 추가
- dotLottie 노트에 "Figma 프로토타입 Export→dotLottie 직접 내보내기(2026-04-15, 단일출처)" 항목 추가

## 프로필 반영 후보 (저위험)
- dotLottie 워크플로에 "Figma 프로토타입 직접 export" 옵션 인지(플러그인/수동변환 불필요 가능성)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 후보로 이번 세션 유효성 재확인됨, 신규 제안 불요)
