---
date: 2026-09-06
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-09-06

빈 디렉터리(`.tmp_verify`) 삭제 승인이 필요해 보류했습니다(파일은 모두 제거됨, 내용물 없는 빈 폴더만 남음). 필요하시면 삭제 여부 알려주세요.

교차검증 결과를 반영해 최종 출력합니다.

## 오늘 배운 것
- `light-dark()` 함수는 Baseline 2024(2024-05~) 이나, `:root { color-scheme: light dark; }` 선언이 없으면 동작하지 않음 — 다크모드 반응형 스타일 작성 시 이 선언 누락이 실패 원인 1순위. (MDN 원문 대조 확인)
- `text-wrap: balance`는 Baseline 2024로 전 브라우저 지원되나 적용 가능한 줄 수 제한이 있음(Chromium 6줄 이하, Firefox 10줄 이하) — 카드 제목·짧은 헤드라인에 한정 적용 권장. `pretty`는 본문 단락용이나 Firefox 지원 격차가 남아있어 확정 적용 전 caniuse로 개별 재확인 필요.
- 유동 타이포그래피 `clamp()`는 preferred 값에 `vw`만 쓰면 브라우저 확대(줌) 시 글자가 커지지 않아 WCAG 1.4.4(텍스트 크기조정) 위반 소지 — `vw + rem` 혼합(예: `clamp(1.5rem, 2.5vw + 1rem, 3rem)`)으로 작성해야 함. (출처 원문에서 예시 수치까지 정확히 대조 확인)
- 현행 대비(contrast) 준수 기준은 여전히 **WCAG 2.2**이며, APCA는 2023년 초 WCAG 3.0 초안에서 제외된 상태로 표준 채택 여부·알고리즘 모두 미정. WCAG 3.0 표준 확정은 "빨라야 2030년" 전망 — "APCA=차기 표준"이라는 서술은 근거 없음, 대비 검증 문서에는 WCAG 2.2 수치만 확정 기준으로 명시할 것.
- OKLCH를 경유한 sRGB 감마트 매핑(chroma reduction)에서 색상이 의도치 않게 왜곡되는 사례가 W3C CSSWG에서 논의 중(이슈 #7071, 원문 확인) — 실무에서 넓은 채도(chroma)를 쓰는 OKLCH 팔레트는 sRGB로 매핑 후 반드시 시각 검수 필요. (단, 리서치의 "chroma ≤0.15/≥0.2" 구체 수치 기준은 원문에서 확인되지 않아 폐기)
- 컨테이너 스타일 쿼리(`@container style()`)는 Firefox가 아직 미지원이며 2026년 지원 예정으로 논의 중(원문 확인) — 크기 쿼리와 달리 폴백(`@supports`) 병행이 여전히 필요. (단, "Chrome/Edge 111+" 구체 버전 정보는 원문에서 확인되지 않아 제외)

## 출처
- [light-dark() - CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- [text-wrap - CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
- [Fluid Typography with CSS clamp() — Modern CSS Tools](https://moderncsstools.com/guides/fluid-typography/)
- [WCAG3 Contrast, as of April 2026 - Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [css-color-4 Gamut Mapping with Oklch - Odd Results, Issue #7071 - w3c/csswg-drafts](https://github.com/w3c/csswg-drafts/issues/7071)
- [Container queries 2026 — LogRocket Blog](https://blog.logrocket.com/container-queries-2026/)

## 위키화 후보
- `clamp(vw+rem)` WCAG 1.4.4 공식(위 예시 수치 포함) — 반응형 레이아웃 가이드에 개념 노트로 추가 가치 있음.

## 프로필 반영 후보 (저위험)
- 대비 검증 시 기준 표기를 "WCAG 2.2(현행) / APCA(WCAG3 초안, 미확정·2030년 이후 전망)"로 구분 명시.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 제안된 "출처-대조-검증기(wget 폴백 내장)"는 이번 세션에서도 WebFetch 일부 도메인 거부(github/adrianroselli/moderncsstools/logrocket) + wget 폴백 성공(6건 중 4건 원문 대조, 1건 세부수치 폐기) 패턴이 재현됨. 신규 제안이 아닌 기존 후보 유효성의 반복 확인이므로 이번 항목엔 미기재.)
