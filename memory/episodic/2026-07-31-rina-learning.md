---
date: 2026-07-31
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-31

## 오늘 배운 것
- `prefers-contrast: more/less` 미디어쿼리(2022-05 Baseline Widely Available)로 WCAG 1.4.6(AAA 대비 강화) 팔레트를 토큰 변형으로 제공하는 패턴 — **신규 확인**, 공용 컴포넌트 가이드라인에 반영 가치 있음(WebFetch로 MDN 원문 직접 대조 검증 완료).
- 나머지 9건(WCAG 3.0 로드맵, scroll-driven animations Firefox 플래그, CSS `if()` 로드맵, Anchor Positioning Baseline 2026, Interop 2026, Tailwind v4.2/4.3, Base UI shadcn 기본화, `contrast-color()` Baseline 일정, 가변 폰트 축)은 위키 grep 결과 기존 노트(2026-07-11~30 사이 이미 curated)와 사실관계·수치까지 전부 일치 — **신규 아님, 중복 재확인**. 프로필 인사이트에 추가 반영 불필요.
- 향후 리서치 위임 시 위키 사전 grep을 1단계에서 더 철저히 거치도록 안내 필요(이번 리서치 20회 중 다수가 이미 확정된 사실 재조사에 소모됨).

## 출처
- [prefers-contrast — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) (직접 fetch 검증)

## 위키화 후보
- `prefers-contrast: more/less` 기반 고대비 토큰 변형 패턴 — 신규 개념 노트 가치 있음(기존 위키에 부재 확인).

## 프로필 반영 후보 (저위험)
- 공용 컴포넌트 가이드라인에 `prefers-contrast` 미디어쿼리 패턴을 WCAG 1.4.6 강화 대비 팔레트 참고치로 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] 위키-사전중복체크 — 자가학습 리서치 착수 전 주제 키워드로 위키 grep 자동 실행 후 "이미 확정된 사실" 목록을 리서치 프롬프트에 주입해 중복 웹검색 방지(이번 회차 10건 중 9건 중복 확인됨).
