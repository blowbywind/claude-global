---
date: 2026-08-01
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-01

## 오늘 배운 것
- `field-sizing` 속성이 2026-06 기준 Baseline **Newly Available** 도달 확인(WebFetch로 MDN 직접 재확인) — `textarea`/`input`/`select`를 CSS만으로 콘텐츠 크기에 맞춰 자동 리사이즈 가능, 폼 컴포넌트 가이드라인에 실무 반영 가능
- CSS 네이티브 Nesting이 2026-06경 Baseline **Widely Available** 도달(2023-12 Newly Available 기준 Baseline 30개월 규칙과 날짜가 정합적으로 부합) — Sass 전처리기 없이 프로덕션 중첩 셀렉터 사용 가능 단계
- `:has()` 선택자는 2023년 이후 이미 전 주요 브라우저 완전 지원 상태(신규 사실 아님, 재확인 수준) — "부모 선택자" 패턴으로 토큰 기반 컴포넌트 설계에 활용 가능
- scroll-driven animations의 Firefox 미지원(플래그 뒤) 이슈는 기존 위키 노트(`반응형-레이아웃-원칙에-scroll`, `반응형-레이아웃-구현-원칙에-scroll`)에 이미 사실로 확정·기록되어 있음 — 이번 리서치는 동일 내용 재확인이며 신규 인사이트 아님

**검증 과정에서 제외한 항목**: `@scope` "2025-12 Baseline Newly Available 도달" 주장은 Firefox가 실제로는 2024-07(v128)에 `@scope`를 지원 시작한 것으로 알려져 있어 날짜가 상충하고, 이번 세션에서 WebFetch/WebSearch 권한 문제로 재검증이 불가해 폐기함. Mozilla Connect 링크(`idi-p/...`)는 공식 Intent to Ship 발표가 아니라 커뮤니티 아이디어 제안 게시판 글이므로 "Mozilla가 정식 출시 의사를 밝혔다"는 주장은 출처 신뢰도 부족으로 폐기함.

## 출처
- [MDN - field-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/field-sizing)
- [web-features-explorer - CSS Nesting](https://web-platform-dx.github.io/web-features-explorer/features/nesting/)

## 위키화 후보
- `field-sizing`: CSS만으로 폼 요소 자동 리사이즈(Baseline Newly Available) — 공용 컴포넌트 가이드라인 신규 개념 노트 후보

## 프로필 반영 후보 (저위험)
- `field-sizing` 기반 자동 리사이즈 폼 요소 패턴을 공용 컴포넌트 가이드라인 참고 메모로 반영
- CSS 네이티브 Nesting Widely Available(2026-06경) 동향을 반응형 레이아웃 구현 원칙에 참고 메모로 반영(전처리기 즉시 대체 결정 아님)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
