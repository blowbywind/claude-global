---
date: 2026-08-04
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-04

## 오늘 배운 것
- **위키 기존 지식과 대부분 중복 확인**: 오늘 리서치 6건 중 5건(SVGO v4/AVIF·JPEG XL 정책/Squoosh deprecated/Figma Variables Enterprise 제약/SVG 아이콘 구현 원칙)은 이미 위키에 leon 명의로 등재되어 있어 신규성 없음(중복 확인 완료).
- **SVGO 4.0.2 패치 릴리스 확인**: 기존 위키 노트(`svgo-v4-접근성-우선-기본값-변경`)의 v4 기본값 정책이 유지된 채 Node.js ≥16 요구로 상향된 마이너 패치. 빌드 환경 Node 버전 점검 시 참고. — 출처: https://github.com/svg/svgo/releases/tag/v4.0.0
- **AVIF 프로덕션 표준 재확인(수치 갱신)**: 4대 브라우저 기본 지원·글로벌 커버리지 약 93%로, 기존 "AVIF+WebP 폴백" 권고안과 일치. JPEG XL은 Chrome 145에서 jxl-rs(Rust 디코더) 실험 플래그 재도입 단계이며 Safari만 기본 활성 — 기존 위키의 "재부상 추적" 노트가 예측한 로드맵과 방향은 같으나, 오늘 시점 실제 상태는 아직 "실험 플래그"에 머물러 있어 시기상조 판단 유지가 맞음. — 출처: https://fastedit.net/blog/jpeg-xl-browser-support-2026
- **CSS `if()` 아이콘 토글 구체 사례**: `display: if(style(--icon-family): inline-block; else: none)` 형태로 아이콘 패밀리 조건부 표시가 가능하나 Chrome/Edge(v137+) 전용, caniuse 65.31%. 기존 위키의 "css-if 브라우저 로드맵" 노트(Safari 미구현)와 정합 — 프로토타입 전용 결론 유지. — 출처: https://developer.chrome.com/blog/if-article , https://caniuse.com/css-if

## 출처
- [SVGO v4.0.0 Release](https://github.com/svg/svgo/releases/tag/v4.0.0)
- [Chrome Developers — CSS if()](https://developer.chrome.com/blog/if-article)
- [Can I Use — css-if](https://caniuse.com/css-if)
- [JPEG XL Browser Support 2026 — FastEdit](https://fastedit.net/blog/jpeg-xl-browser-support-2026)

## 위키화 후보
(신규 개념 노트 가치 없음 — 오늘 발견 전부 기존 노트로 커버됨)

## 프로필 반영 후보 (저위험)
- AVIF 커버리지 수치를 "약 93%(2026 중반)"로 갱신, JPEG XL은 "Chrome 145 jxl-rs 실험 플래그 단계, 아직 시기상조 유지"로 인사이트 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
