---
date: 2026-08-23
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-23

검증 완료(WebFetch/WebSearch 권한 거부 재발 → wget 폴백으로 5건 원문 직접 확인, 1건 완전 폐기).

## 오늘 배운 것
- CSS relative color syntax(`oklch(from ...)`)의 Baseline "Newly Available" 도달일은 실제로 **2024-09-16**이며(리서치 주장의 "2026년 도달"은 오류), 아직 "Widely Available"에는 미도달(caniuse `highDate: null`). 전역 사용률은 실측 약 89~91% 수준으로 "89.64%" 주장과 대체로 부합. Safari 폴백(`@supports`) 권장 원칙 자체는 유효.
- CSS `reading-flow`는 Chrome/Edge 137·Opera 121부터 지원(`experimental: true`), Firefox·Safari 미지원 확인 — Baseline 미도달 상태 재검증(기존 위키 내용과 일치, 신선도만 갱신).
- Tailwind CSS 최신 안정판은 리서치가 보고한 v4.3.2(2026-06-26)가 아니라 **v4.3.3(2026-07-16 릴리스)**가 이미 존재함(releases.sh 원문 확인). 단 v4.3.3 세부 변경사항은 미확인.
- WCAG 3.0 관련 "174 requirements 확정·CR 2027Q4·Recommendation 2028 이전 아님" 주장은 인용 URL(W3C 2026-03-03 공지) 원문에 해당 수치가 전혀 없음(단순 "Working Draft 갱신" 발표문) → **검증 실패, 폐기**. 기존 위키의 보수적 문구("완성 시점 미확정, 2030년경은 단일 출처 전망치")를 그대로 유지해야 함.
- shadcn/ui "Default 스타일 deprecated, New York이 신규 기본값" 주장은 원문(개인 블로그 튜토리얼)에 해당 서술 자체가 없음(CLI 예시에서 New York을 "선택"하는 안내뿐) → **근거 없음, 완전 폐기**.
- APCA WCAG3 배제, text-wrap 관련 사항, CUBE CSS 정의는 이미 위키에 검증된 상태로 존재해 신규 반영 불필요(리서치 자체 확인사항과 일치).

## 출처
- [CSS Relative color syntax – Can I use](https://caniuse.com/css-relative-colors)
- [CSS property: reading-flow – Can I use](https://caniuse.com/mdn-css_properties_reading-flow)
- [Tailwind CSS Releases – releases.sh](https://releases.sh/tailwind-css)
- [For Review: WCAG 3 Working Draft – March 2026 (W3C WAI)](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [shadcn/ui theme customization 블로그(검증 결과 근거 부족 확인용)](https://eastondev.com/blog/en/posts/dev/20260326-shadcn-ui-theme-customization/)

## 위키화 후보
- (없음 — 기존 노트 정정 수준이라 신규 개념 노트 불필요)

## 프로필 반영 후보 (저위험)
- Tailwind 버전 참고 메모를 v4.3.3(2026-07-16)로 갱신(세부 체인지로그는 미확인 명시).
- relative color syntax 참고 메모의 baseline 도달일을 "2026년"→"2024-09-16(Newly), Widely 아직 미도달"로 정정.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 오늘도 WebFetch/WebSearch 권한 거부가 재발했으나 wget 수동 폴백으로 5건 원문 확인·2건(WCAG3 타임라인, shadcn deprecated 주장) 완전 폐기에 성공. 기존 제안(2026-07-16/22/29/07-30) 유효성 재확인됨.
