---
date: 2026-07-09
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-09

**검증 메모** — 제공된 출처 6개 중 URL이 도메인 루트만 기재된 항목 점검:
- `medium.com` (AX 패러다임, WCAG 3.0): 기사 경로 없음 → AX 항목 버림. WCAG 3.0은 W3C 공식 초안으로 교차 확인 가능하므로 부분 수용.
- `uxdesign.cc` (Liquid Glass): 경로 없으나 Apple WWDC 2025 공개 사실로 독립 확인 → 수용.
- `supernova.io` (Semantic Intelligence): 플랫폼 자사 마케팅 주장, 독립 검증 불가 → 버림.
- `shadcn.com`, `tailwindcss.com`: 공식 도메인, 내용 검증 가능 → 수용.

기존 인사이트 중복 체크: Tailwind v4 `@theme`, `starting:` 트랜지션, shadcn CLI v4 — 이미 [2026-06-25] 기록. 해당 내용 제외.

---

## 오늘 배운 것

- **shadcn/ui `data-slot` 속성 (React 19 대응)**: 컴포넌트에 `data-slot="icon"` 등 마킹 후 부모에서 `[&_[data-slot=icon]]:size-4` 패턴으로 깊은 자식 스타일을 직접 제어. shadcn v4 공식 컴포넌트에 기본 내장되어 있어 커스텀 변형 시 활용 필수.
- **Tailwind v4 Lightning CSS 빌드 엔진**: Rust 기반 증분 빌드로 기존 PostCSS 대비 성능 대폭 향상. 브라우저 네이티브 `@layer`, `@property`, 컨테이너 쿼리를 별도 플러그인 없이 처리. `npx @tailwindcss/upgrade` 마이그레이션 도구 공식 제공.
- **WCAG 3.0 Working Draft 방향성 (아직 확정 아님)**: 기존 합격/불합격 이분법 → 0~4점 척도 + 브론즈/실버/골드 등급 체계로 전환 예정. VR/AR 다차원 채널까지 범위 확장. 현 시점 기준 설계에 즉시 적용 금지 — 방향 파악 용도.
- **Apple Liquid Glass (WWDC 2025, iOS 26/macOS 26)**: 반투명 동적 유리 효과 디자인 언어 공식 적용. 웹에서 `backdrop-filter: blur()` + 배경 투명도 조합으로 유사 패턴 구현 가능. 공간 컴퓨팅 환경과 2D 웹 간 시각 연속성 고려 필요성 대두.

## 출처

- [shadcn/ui Components — data-slot](https://ui.shadcn.com/docs/components)
- [Tailwind CSS v4.0 Release — Lightning CSS](https://tailwindcss.com/blog/tailwindcss-v4)
- [W3C WCAG 3.0 Working Draft](https://www.w3.org/TR/wcag-3.0/)
- [Apple WWDC 2025 — Liquid Glass Design Language](https://developer.apple.com/wwdc25/)

## 위키화 후보

- `WCAG 3.0 등급 체계` — 0~4점 척도·브론즈/실버/골드 등급 개요 및 현 초안 상태 정리 노트

## 프로필 반영 후보 (저위험)

- `data-slot` 속성 기반 shadcn 컴포넌트 깊은 자식 스타일 제어 역량
- WCAG 3.0 등급제 전환 방향 인식 및 현행 WCAG 2.2 기준 병행 적용 원칙

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
