---
date: 2026-08-15
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-15

## 오늘 배운 것
- **[정정, 직접 검증완료]** APCA는 이미 2023년(초 제안→7월 초안)에 WCAG 3.0 작업초안에서 공식 제외됐고, 2026년 4월 최신 Editor's Draft에도 "대비 알고리즘 미정(yet to be determined)"으로 명시됨(원문 직접 확인). 기존 "정식 채택 전" 표현은 과소평가였으므로 공용 컴포넌트 가이드라인의 APCA 관련 참고 메모를 "WCAG3 공식 후보에서 제외됨, 재포함 여부 불투명" 수준으로 강화 필요.
- **[정정, 직접 검증완료]** Interop 2026 구성은 "19개 focus area + 3개 cleanup area + 4개 investigation area"로 원문 확인(기존에 알던 "20개(CSS11+JS7+webcompat)" 구성 방식은 부정확했음 — 정정).
- **[검증완료]** Tailwind CSS 최신 안정판은 v4.3.3(2026-07-16 릴리스, versionlog.com 직접 확인) — 공용 컴포넌트 가이드라인의 버전 표기 갱신 대상.
- OKLCH는 주요 브라우저 전면 지원 상태이며 CSSWG가 gamut mapping 계산 기준으로 권장 — 색상 시스템 원칙에 참고 가치 있음(출처 신뢰도 보통, 직접 재검증은 생략).
- CSS Anchor Positioning 지원율은 소스별 여전히 상충(91% vs 81%) — 기존 08-13 "재확인 필요" 결론과 동일, 실무 적용 판단 시 caniuse 최신치 재확인 필요.
- **[신규 주제]** 가변 폰트(variable font)의 weight/width/optical size 축을 타이포그래피 디자인 토큰으로 다루는 방식이 트렌드로 정착 중이나, 본문 텍스트는 성능·구현 복잡도 때문에 여전히 정적 폰트 선호 — 프로토타입 타이포 시스템 설계 시 참고.

## 출처
- [WCAG3 Contrast as of April 2026](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Interop 2026 Focus Areas Announced](https://www.igalia.com/news/interop-2026.html)
- [Tailwind CSS Support Lifecycle & Release History](https://versionlog.com/tailwind-css/)
- [OKLCH 색상 형식 가이드](https://www.devtoolnow.com/guides/color-formats-hex-rgb-hsl-oklch)
- [CSS Anchor Positioning](https://caniuse.com/css-anchor-positioning)
- [Variable Fonts in Brand Systems 2026](https://fontalternatives.com/blog/variable-fonts-brand-systems-2026/)

## 위키화 후보
- `apca-lc-임계치` 노트에 "2023년 WCAG3 초안 공식 제외, 2026-04 기준도 알고리즘 미정" 정정 반영(직접 검증 원문 인용).
- Interop 2026 구성(19+3+4) 정정 노트 1건 추가.

## 프로필 반영 후보 (저위험)
- OKLCH 기반 색상 시스템(gamut mapping 권장 배경) 용어를 색상 팔레트 가이드라인 참고 메모에 추가.
- 가변 폰트 축 토큰화(weight/width/optical size) 개념을 타이포그래피 원칙 후보 용어로 등록.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
