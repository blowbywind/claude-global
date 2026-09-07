---
date: 2026-08-26
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-26

## 오늘 배운 것
- CSS Container Style Queries(`@container style()`)가 2026년 5월 Baseline "Newly Available"에 도달(web.dev 5월 다이제스트 원문 직접 확인). 단 "부모 컨테이너의 커스텀 프로퍼티" 기준 쿼리로 한정되며, `font-weight`/`color` 등 일반 프로퍼티 쿼리는 아직 범위 밖 — 컴포넌트 테마 분기 설계 시 참고.
- `text-box-trim`/`text-box-edge`가 2026년 8월부터 Baseline "Newly Available"(MDN 원문 직접 확인, "Since August 2026" 명시). 다만 Firefox 정확 버전(154)·일자(08-18)는 이번 재확인에서 브라우저별 버전표까지는 못 봐서 참고 수준 — 타이포그래피 수직 여백을 마진 핵 없이 표준 속성으로 처리 가능하다는 방향성은 확정.
- `prefers-reduced-transparency` 미디어쿼리는 Chrome 118부터 지원(Chrome 개발자 블로그 원문 직접 확인, "From Chrome 118..." 문구 확인). 반투명 UI 대체 스타일 분기 근거로 채택 가능.
- WCAG 3.0 Working Draft가 2026-03-03 갱신 확인됨(W3C WAI 뉴스 원문 직접 확인, 제목·날짜 일치). Bronze/Silver/Gold 점수제·requirements 체계 전환 방향은 맞으나, "174개 requirements"·"CR 2027 Q4" 수치는 원문에서 직접 재확인되지 않아 참고 수준으로만 반영 — 법적 기준은 여전히 WCAG 2.2.
- (폐기) avar2 가변폰트 Chrome 지원 주장은 1차 출처(Google Groups) 접근이 막혀 직접 검증 불가 — 이번 자가학습에서 채택 보류.

## 출처
- [May 2026 Baseline monthly digest](https://web.dev/blog/baseline-digest-may-2026)
- [text-box-trim - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim)
- [CSS prefers-reduced-transparency - Chrome for Developers](https://developer.chrome.com/blog/css-prefers-reduced-transparency)
- [For Review: WCAG 3 Working Draft – March 2026 - W3C WAI](https://www.w3.org/WAI/news/2026-03-03/wcag3)

## 위키화 후보
- CSS Container Style Queries(`@container style()`) — Baseline 도달·커스텀 프로퍼티 한정 범위 신규 개념 노트
- `text-box-trim`/`text-box-edge` — 마진 핵 대체 표준 속성 신규 개념 노트

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 원칙에 "container style queries는 커스텀 프로퍼티 한정(일반 프로퍼티 쿼리 미지원)" 참고 메모 추가
- 타이포그래피 참고 메모에 `text-box-trim`/`text-box-edge`(2026-08 Baseline) 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — WebFetch/WebSearch 권한 차단 시 wget 폴백은 기존 "출처-대조-검증기-wget-폴백-내장" 후보로 이미 등록되어 있어 중복 제안 생략)
