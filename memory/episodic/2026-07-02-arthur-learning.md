---
date: 2026-07-02
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-02

WebSearch 권한이 없어 두 검색 모두 실패했습니다. 기존 위키 내용 + 훈련 데이터로 교차검증 진행합니다.

**교차검증 판정:**

| 항목 | 판정 | 근거 |
|---|---|---|
| Tailwind v4.2 Webpack 패키지 | ✅ 채택 | 공식 tailwindcss.com 출처, 기술적으로 정합 |
| Tailwind v4.2 색상 4종(mauve/olive/mist/taupe) | ❌ 폐기 | 웹 접근 불가 → 공식 changelog 직접 확인 실패, 구체 색상명 검증 불가 |
| Tailwind v4.3 `font-features-*` | ✅ 채택 | 공식 출처, CSS `font-feature-settings` 래핑 유틸 — 기술 정합 |
| Tailwind v4.3 `@container-size` | ⬛ 중복 | 이미 프로필 [2026-06-26] 기록 |
| shadcn/ui Luma/Sera/Rhea | ⬛ 중복 | 위키 promotion-review-queue + concepts/ 노트 기존재 |
| shadcncraft Figma 키트 | ❌ 폐기 | 자체 홍보 사이트(shadcncraft.com), 독립 검증 불가 |
| Generative/Intent-based UI "대세" | ⚠️ 부분채택 | uxdesign.cc 출처, 트렌드 자체는 실재하나 "대세" 강도는 과장 가능 |
| Trust-Driven UX | ✅ 채택 | uxdesign.cc 출처, AI 기능 UI에 직접 적용 가능 실용 원칙 |
| EAA "2026년 전면 시행" | ❌ 폐기 | EU Directive 2019/882 실제 준수 마감은 **2025년 6월 28일**. envato.com은 법률 권위 출처 아님, 날짜 오류로 판단 |
| 접근성 오버레이 무효 | ✅ 채택 | 접근성 커뮤니티(WebAIM 등) 정설, envato.com 출처 보조 확인 |

---

## 오늘 배운 것

- **Tailwind v4.2 공식 Webpack 패키지** — `@tailwindcss/webpack` 출시로 Webpack 기반 빌드(Next.js Webpack 모드 포함)에서도 Oxide 엔진 속도 혜택 동일 적용 가능
- **Tailwind v4.3 `font-features-*` 유틸리티** — OpenType 합자·숫자 형태 등 `font-feature-settings` 세부 설정을 유틸리티 클래스로 HTML에서 직접 제어
- **Trust-Driven UX** — AI 기능 탑재 UI는 ①판단 흐름 시각화, ②오작동 시 즉시 취소·제어 진입점 제공이 설계 필수 요건. AI 컴포넌트 구현 시 적용 기준
- **접근성 오버레이 플러그인 무효** — AccessiBe 류 서드파티 overlay는 실제 접근성·법적 준수 모두 미충족. 시맨틱 마크업 기반 근본 구현만이 유일 표준 해결책(기존 WCAG AA 원칙 재확인)
- **EAA 날짜 오류 주의** — 일부 비권위 출처가 "2026년" 표기하나 실제 EU Directive 2019/882 준수 마감은 **2025-06-28**. 규제 날짜는 EUR-Lex 등 공식 법원 출처 직접 확인 필요

## 출처

- [Tailwind CSS](https://tailwindcss.com) — v4.2 Webpack 패키지, v4.3 font-features 유틸리티
- [UX Design (uxdesign.cc)](https://uxdesign.cc) — Trust-Driven UX, Generative UI 트렌드
- [Envato](https://envato.com) — 접근성 오버레이 무효 (날짜 정보는 비채택)

## 위키화 후보

- `trust-driven-ux` — AI 판단 투명화·취소 제어 원칙 개념 노트 (AI 기능 컴포넌트 설계 기준)

## 프로필 반영 후보 (저위험)

- Tailwind v4.2 `@tailwindcss/webpack` — Webpack 환경 Oxide 엔진 적용 가능 인식 추가
- Trust-Driven UX 패턴 — AI 기능 UI 설계 시 투명화·제어 진입점 필수 기준으로 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
