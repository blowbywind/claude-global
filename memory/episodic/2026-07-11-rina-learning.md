---
date: 2026-07-11
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-11

## 오늘 배운 것
- DTCG(Design Tokens Community Group) 포맷이 2025년 10월 첫 안정 버전(v2025.10) 출시 — `$value`/`$type` JSON 스키마가 통일되어, Tailwind 토큰 체계와 연동한 공용 컴포넌트 가이드라인 표준화에 활용 가능
- WCAG 3.0의 대비 알고리즘 후보였던 APCA는 2023년 초안에서 제외된 이후 여전히 미확정 상태 — 프로토타입 접근성 검증은 당분간 WCAG 2.x 기준(본문 4.5:1 / 큰 글자 3:1)을 그대로 적용해야 함
- 유동 타이포그래피는 `clamp()`에 px가 아닌 rem 단위를 써야 사용자의 브라우저 폰트 설정을 존중함 — 5~8단계 타입 스케일을 CSS 커스텀 프로퍼티로 정의하는 방식 권장
- CSS Cascade Layers(`@layer`)로 reset→tokens→layouts→components→utilities→overrides 순 계층을 나누면 명시성 충돌 없이 공용 컴포넌트를 안전하게 오버라이드 가능(기술 사실은 W3C 명세 기준과 일치, 채택)
- CSS Color Level 5의 `color-mix()`·relative color syntax로 소수의 베이스 토큰만 정의해도 호버·다크모드 변형을 네이티브 CSS만으로 파생 가능 — 토큰 수 최소화 전략에 참고

※ 원 리서치의 지원율·채택률 수치(87%/96%/97%/78%/100% 등)와 CSS-in-JS 트렌드, 색상 팔레트 도구 2건은 출처 신뢰도(무명·미확인 도메인, 단일 소스의 과도하게 구체적인 통계)를 확인할 수 없어 제외했습니다.

## 출처
- [DTCG Format 초안](https://www.designtokens.org/tr/drafts/format/)
- [Design Tokens Specification Reaches First Stable Version](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [WCAG3 Contrast as of April 2026 (Adrian Roselli)](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Fluid Typography Guide](https://moderncsstools.com/guides/fluid-typography/)
- [CSS Cascade Layers Complete Guide](https://devtoolbox.dedyn.io/blog/css-cascade-layers-complete-guide)
- [CSS Color Level 5: color-mix & Relative Color Syntax](https://dopelycolors.com/blog/css-color-level-5-mastering-color-mix-and-relative-color-syntax)

## 위키화 후보
- DTCG 개념 노트 신규 작성 — 기존 `dtcg.md`가 권한요청 메시지만 저장된 깨진 노트라 이번 검증 내용으로 재작성 가치 있음
- CSS Cascade Layers 계층 설계 패턴 — 공용 컴포넌트 가이드라인에 바로 적용 가능한 신규 개념

## 프로필 반영 후보 (저위험)
- `color-mix()`/relative color syntax 기반 토큰 파생 기법 용어 반영
- WCAG 3.0/APCA 미확정 상태 최신화(기존 WCAG3 로드맵 메모가 있다면 갱신)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
