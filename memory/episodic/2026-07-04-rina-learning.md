---
date: 2026-07-04
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-04

## 교차검증 결과 — 폐기 항목

| 항목 | 폐기 이유 |
|---|---|
| 인텐트 기반 인터페이스 | 실무 적용 지침 없는 트렌드 서술; 리다이렉트 URL만 확인, 원문 독립 검증 불가 |
| 머신 익스피리언스(MX) 디자인 | uxpilot.ai 단일 출처, "공식 트렌드" 주장 과장 가능성 |
| 공간 UI / Liquid glass | Apple 네이티브 전용 디자인 언어, Tailwind/웹 컴포넌트 작업에 직접 미적용 |
| AI 디자인 파이프라인 자동화 | supernova.io 자사 제품 소개 성격; 중립 출처 검증 불가 |

---

## 오늘 배운 것

- **EAA(유럽 접근성법) 2025-06-28 발효** — WCAG 2.2 Level AA 준수가 EU 대상 디지털 서비스의 법적 의무로 확정됨. 기존 메모리의 "현행 법적 기준" 노트에 EU 법령 강제력 컨텍스트 보완 필요.
- **접근성 자동화 검사 한계: 30~60%** — axe·Lighthouse 등 자동화 도구는 전체 접근성 오류의 30~60%만 탐지. 키보드 단독 조작·스크린 리더 수동 검증 병행 없이 WCAG 2.2 AA 준수 선언 불가.
- **OKLCH 색공간 디자인 토큰 채용** — 균등한 인간 인지 보장. shadcn/ui가 surface(`--card`)·전경(`--card-foreground`) 페어링에서 OKLCH 공식 채용; hex 직접 입력 대신 `oklch()` 함수 사용 권장.
- **shadcn/ui Luma·Rhea 테마 분리** — Rhea(고밀도 테마)를 독립 테마로 분리한 이유: Tailwind spacing 전역 승수 수정 시 유틸리티 스케일 전반이 파괴되는 부작용 방지. 커스텀 밀도 테마 작성 시 전역 spacing 승수 건드리지 말고 컴포넌트 토큰 레이어에서 제어할 것.
- **Tailwind v4 globals.css 단일 소스 패턴** — `:root`(라이트)와 `.dark` CSS 변수를 `globals.css` 한 곳에서 통합 관리; `@theme {}` 블록은 그 변수들을 Tailwind 유틸리티로 매핑하는 역할만 담당. 기존 `@theme` 노트의 실무 구조 확장.

---

## 출처

- [EAA + WCAG 2.2 법적 의무화](https://veroxstudio.com) — veroxstudio.com
- [접근성 자동화 검사 한계](https://accessibility.works) — accessibility.works
- [OKLCH shadcn/ui 색상 페어링](https://remoteopenclaw.com) — remoteopenclaw.com
- [shadcn/ui Luma·Rhea 테마](https://shadcn.com) — shadcn.com (공식)
- [Tailwind v4 globals.css 패턴](https://lobehub.com) — lobehub.com

---

## 위키화 후보

- `OKLCH 색공간 & 디자인 토큰 색상 페어링` — hex 대비 인지 균등성, shadcn/ui 채용 사례, `oklch()` 토큰 선언 패턴

---

## 프로필 반영 후보 (저위험)

- `접근성 자동화 도구 30~60% 한계 → 수동 검증(키보드·스크린리더) 병행 원칙` 추가 — WCAG 체크리스트 실행 시 자동화만으로 완결 금지
- `EAA 2025-06-28 발효` 컨텍스트를 기존 "WCAG 2.2 Level AA 현행 법적 기준" 노트에 보완

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

_(없음)_
