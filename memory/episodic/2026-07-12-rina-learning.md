---
date: 2026-07-12
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-12

웹서치 툴 권한이 없어 추가 검증은 위키 기존 축적 자료(주로 arthur의 WCAG3 관련 선행 리서치, 2026-07-06·07-09)와 출처 신뢰도(MDN·W3C 공식문서·Adrian Roselli 등 접근성 전문가)로 교차검증했습니다. `maviklabs.com`발 "토큰 채택 74%" 통계는 출처 신뢰도가 낮은 마케팅 블로그 단독 주장이라 폐기했습니다.

## 오늘 배운 것
- `color-mix()`·relative color syntax(`rgb(from ...)` 등)는 Baseline Widely Available 상태로, OKLCH 베이스 토큰 하나에서 hover/focus/disabled 변형을 CSS 네이티브로 파생시키는 방식이 표준 관행. Tailwind 등 토큰 시스템에서 파생 토큰 수를 줄이는 데 즉시 적용 가능 (MDN·W3C)
- `light-dark()` 함수는 Baseline Newly Available(2024-05~, Widely Available 전환은 2026-11경 예정)로 `prefers-color-scheme` 미디어쿼리 없이 라이트/다크 색을 한 줄로 선언 가능 (MDN)
- WCAG 3.0은 2026-03 W3C 업데이트 Working Draft에서 174개 아웃컴 기반 채점제(Bronze/Silver, Pass/Fail 폐지)로 재편됐으나, Candidate Recommendation은 2027 Q4, 정식 Recommendation은 2028년 이후로 아직 멀었음 → 실무는 당분간 WCAG 2.2 AA 유지 (W3C)
- **APCA는 2023년 초안 단계에서 이미 WCAG3 후보군에서 제외**됐고 2026년 현재도 WCAG3 대비 알고리즘은 미확정 상태 — APCA를 WCAG3 "공식 기준"처럼 표기하면 부정확(법적 리스크). 기존 WCAG3 로드맵 메모에 이 점 명시적 갱신 필요 (Adrian Roselli, yatil.net) — 위키 기존 arthur 메모(2026-07-06/07-09)와 방향 일치, 교차검증됨
- W3C Design Tokens Community Group(DTCG) 스펙 2025.10 버전이 최초 안정판 도달, `$value`/`$type` 구조 유지하며 structured values 지원 추가 (W3C 커뮤니티그룹 공식 발표)
- Tailwind v4의 `@theme` 블록은 네이티브 CSS 커스텀 프로퍼티로 컴파일되어 DTCG 포맷과 구조적으로 수렴 중 (기술적 사실만 채택, 동반된 "74% 채택률" 통계는 저신뢰 출처라 폐기)

## 출처
- [color-mix() - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix)
- [CSS Color Module Level 5 - W3C](https://www.w3.org/TR/css-color-5/)
- [Using relative colors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [light-dark() - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)
- [WCAG 3.0 Working Draft 안내 - W3C WAI](https://www.w3.org/WAI/news/2026-03-03/wcag3/)
- [WCAG3 Working Draft March 2026, 174 outcomes](https://adaquickscan.com/blog/wcag-3-working-draft-march-2026-174-outcomes)
- [WCAG3 Contrast as of April 2026 - Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [WCAG 3 is not ready yet - yatil.net](https://yatil.net/blog/wcag-3-is-not-ready-yet)
- [Design Tokens Specification 첫 안정판 - W3C](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

## 위키화 후보
- `wcag-3-0-apca-미확정-상태-최신화...` 개념 노트가 이미 draft 상태로 존재하나 본문에 AI 메타발언("저는 권한 요청 없이...")이 섞여 정제 필요 — 신규 노트 대신 **기존 노트 본문 정리·병합**(arthur의 wcag-3-0-등급-체계 계열과 통합) 권고
- `color.md`(제목 파싱 오류 "\`color" 상태) 노트에 relative color syntax·`light-dark()` 항목 보강 필요 — 신규 생성보다 **기존 노트 title/본문 수정**

## 프로필 반영 후보 (저위험)
- `color-mix()`/relative color syntax 용어를 프로필 스택 설명에 반영(이미 인사이트 항목으로 존재, 웹검증 완료 상태로 확정)
- WCAG 3.0 로드맵 메모를 "APCA 2023년 제외·2026년까지도 미확정, WCAG 2.2 AA 병행 유지" 문구로 최신화(기존 항목 갱신, 신규 아님)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
