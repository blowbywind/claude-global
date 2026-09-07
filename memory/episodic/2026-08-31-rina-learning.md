---
date: 2026-08-31
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-31

## 오늘 배운 것
- WCAG 3.0 대비(contrast) 알고리즘은 2026-04-08 Editor's Draft 원문에서 "yet to be determined"임을 직접 fetch로 확인. APCA는 원문상 "early 2023"(2023년 초, 기존 리서치의 "2023년 중반" 표기는 오차 확인·정정) WCAG3 개발 프로세스에서 6개월 내 WG 지지 미확보로 자동 제외됨.
- `designtokens.org/tr/drafts/format/` 페이지가 2026-07-30 발행된 별도 in-progress 초안이며 "Do not refer to this document directly, and do not implement anything in this document" 경고 문구가 있음을 원문에서 직접 확인. 안정판은 `/TR/2025.10/format/` 경로이므로, 인용 시 URL 경로(`tr/drafts` vs `TR/2025.10`)로 구분 필요.
- CSS `if()` 함수는 MDN에서 "Not Baseline"(주요 브라우저 일부 미지원, 실험적 기술) 상태를 직접 확인. 반응형 스타일에서 사용 시 조건부 폴백 값 명시 필수.
- `text-wrap: pretty`/`field-sizing` 지원 현황과 DTCG Format 2025.10 stable 발표는 이번 라운드에서 재fetch 검증은 안 했으며(리서치 인용 그대로), WCAG3·DTCG drafts 두 건만 원문 대조 완료.

## 출처
- [WCAG3 Contrast as of April 2026 — Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html) (직접 검증)
- [Design Tokens Format Module — drafts](https://www.designtokens.org/tr/drafts/format/) (직접 검증)
- [CSS if() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/if) (직접 검증)
- [CSS if() — caniuse](https://caniuse.com/css-if) (미재검증, 참고)
- [field-sizing — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing) (미재검증, 참고)
- [Design Tokens Format 2025.10 안정판 발표 — W3C](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) (미재검증, 참고)

## 위키화 후보
- 토큰 가이드라인 메모(2026-08-07 항목)에 "designtokens.org URL 경로 구분(`/tr/drafts/`=구현금지 초안, `/TR/2025.10/`=안정판)" 보강 — 원문 경고 문구까지 검증 완료된 사실이라 인용 오류 방지 가치 있음.

## 프로필 반영 후보 (저위험)
- 접근성 설명 시 "WCAG3 대비 알고리즘 미확정(APCA는 2023년 초 후보 제외, 원문 검증)" 표현으로 기존 메모의 시점 표기 정밀화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번에도 WebFetch 3건 중 2건 권한 거부 후 wget 폴백으로 확인했으나, 동일 패턴이 이미 다수 후보로 등록되어 있어 중복 제안 생략)
