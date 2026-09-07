---
date: 2026-08-20
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-20

## 오늘 배운 것
- `corner-shape`/`superellipse()`: MDN 원문을 직접 재확인 — 2026-08-20 시점에도 "Not Baseline · Experimental · Limited availability" 상태 유지. `border-radius` 폴백 필수, 실적용 보류 판단이 여전히 타당함(기존 인사이트 강화).
- OKLCH가 Tailwind v4·Radix Colors 등 웹 디자인 토큰의 사실상 표준으로 정착 — HSL 대비 지각적으로 균일한 명도(L)로 밝기 램프 설계 가능. 브랜드 컬러를 SVG/이미지 자산 색상값으로 번역할 때(적용 원칙) HSL이 아닌 OKLCH 기준 램프를 참고 대상으로 삼는 것이 유리.
- SVG 접근성 텍스트 대안 원칙 재확인(WCAG 1.1.1 기준, 표준 SVG-AAM 매핑과 일치): 의미전달용 아이콘 = `title`+`desc`+`aria-labelledby`, 인터랙티브 컨트롤용 아이콘 = 이미지 설명이 아닌 "동작 목적"을 대체텍스트로, 순수 장식용 = `role` 제거 + `aria-hidden="true"`.
- 검증 한계: Sharp AVIF 인코딩 속도 수치, Recraft Vectorize 기능, 2026 일러스트 트렌드 항목은 이번 세션 WebFetch 권한 거부로 원문 대조 실패(4/5건) → 출처 신뢰도 미확인 상태로 채택하지 않음.

## 출처
- [corner-shape - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/corner-shape) — 직접 fetch로 재검증 완료

## 위키화 후보
- OKLCH 기반 브랜드 컬러→SVG/이미지 자산 색상값 번역 가이드(명도 램프 설계 시 HSL 대비 이점 정리)

## 프로필 반영 후보 (저위험)
- SVG 접근성 3분류 원칙(의미전달/컨트롤/장식용) 용어 숙지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처 대조 검증 자동화 후보는 기존에 이미 제안되어 있음)
