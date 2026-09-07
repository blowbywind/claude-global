---
date: 2026-07-14
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-14

웹리서치 산출물을 위키 기존 노트와 교차검증했습니다(WebFetch/WebSearch 도구는 이번 세션에 권한이 없어 위키 크로스체크로 대체). 결과 요약:

- WCAG 3.0(CR 2027Q4·REC 2028+, 174 outcomes Bronze/Silver, APCA 2023년 제외)은 기존 위키 `wcag-3-0-로드맵-메모를-apca-...md`(2026-07-13, rina)에 이미 동일 출처·동일 수치로 정리되어 있어 **중복 확인, 신규 반영 불필요**.
- DTCG v2025.10 / `color-mix()`·relative color / `clamp()+cqi`도 기존 노트(`dtcg.md`, `oklch-색공간.md`, `clamp-cqi-...md`)에 이미 반영 확인됨.
- `contrast-color()` 자가보정 색상 시스템, 가변 폰트의 디자인 토큰화는 위키에 노트 없음 — 신규.
- CSS Anchor Positioning은 노트가 있으나(`css-anchor-positioning.md`) 본문이 권한 오류로 깨진 채 저장돼 있어 Baseline 2026 갱신과 함께 재작성 필요.
- CSS Cascade Layers 계층 순서는 기존 노트(`reset→tokens→layouts→components→utilities→overrides`)와 이번 리서치(`reset→base→theme→components→utilities`)가 표현이 달라 용어 통일 필요(내용 자체는 상충 아님).

## 오늘 배운 것
- WCAG 3.0은 2026-03 Working Draft(174 outcomes, Bronze/Silver 등급제)이며 대비 알고리즘 미정 지속, APCA는 2023년에 이미 WCAG3 초안에서 제외됨 — 색상 시스템은 당분간 WCAG 2.x 대비율(4.5:1/3:1) 기본 유지, APCA 이탈 시 법무 검토 필요(기존 위키 노트와 정합 확인).
- CSS `contrast-color()` 기반 "자가보정형" 전경/배경 페어링 패턴(2026-05 Smashing Magazine) — 공용 컴포넌트 가이드라인에 대비 자동보장 토큰 파생 기법으로 참고 가치 있음.
- CSS Cascade Layers(`@layer`)는 전 브라우저 지원 완료, 디자인 시스템 레이어 순서 권장안 확인(기존 위키 노트와 용어만 상이, 내용은 일치) — `@scope`는 아직 지원 제한적이라 레이어와 역할 혼동 주의.
- CSS Anchor Positioning이 Baseline 2026 도달(Chrome 125+/Firefox 132+/Safari 18.2+, 전역 ~91%), 단 `@position-try` 플립은 Safari 18.4+ 필요 — 기존 위키 노트 갱신 필요.
- CSS `if()` 조건부 함수는 2026년 중반 기준 Chrome/Edge 137+만 지원(Safari·Firefox 미지원) — 프로덕션 프로토타이핑에는 아직 부적합, fallback 필수.
- 가변 폰트(variable fonts)의 weight/width/optical-size 축을 디자인 토큰으로 취급하는 패턴이 2026년 브랜드 시스템 기본값으로 성숙 — breakpoint별 폰트 파일 교체 없이 유동 타이포그래피 구현 가능.

## 출처
- [WCAG 3.0 Working Draft 안내 — W3C WAI](https://www.w3.org/WAI/news/2026-03-03/wcag3/)
- [WCAG 3 is not ready yet — yatil.net](https://yatil.net/blog/wcag-3-is-not-ready-yet)
- [WCAG3 Contrast as of April 2026 — Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Building Self-Correcting Color Systems With contrast-color() — Smashing Magazine](https://www.smashingmagazine.com/2026/05/building-self-correcting-color-systems-contrast-color/)
- [Organizing Design System Component Patterns With CSS Cascade Layers — CSS-Tricks](https://css-tricks.com/organizing-design-system-component-patterns-with-css-cascade-layers/)
- [The if() function is coming to CSS — Chrome Developers](https://developer.chrome.com/blog/if-article)
- [CSS Anchor Positioning — caniuse](https://caniuse.com/css-anchor-positioning)
- [Variable Fonts in Brand Systems 2026 — Font Alternatives](https://fontalternatives.com/blog/variable-fonts-brand-systems-2026/)

## 위키화 후보
- `contrast-color()` 자가보정 색상 시스템 패턴 — 신규 개념 노트(현재 위키에 없음).
- 가변 폰트 디자인 토큰화(weight/width/optical-size 축) 패턴 — 신규 개념 노트. 겸사겸사 `css-anchor-positioning.md`(권한오류로 본문 깨짐) 재작성 및 Baseline 2026 수치 갱신 필요(memory-agent 위임 권장).

## 프로필 반영 후보 (저위험)
- `contrast-color()` 자가보정 색상 페어링 용어를 공용 컴포넌트 가이드라인 설명에 반영
- 가변 폰트 축(weight/width/optical-size)=디자인 토큰 개념을 유동 타이포그래피 원칙에 반영

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
