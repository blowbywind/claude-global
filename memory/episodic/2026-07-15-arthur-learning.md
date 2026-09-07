---
date: 2026-07-15
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-15

## 오늘 배운 것
- shadcn/ui는 2026년 7월부터 신규 프로젝트 기본값을 Base UI로 바꿨지만, Radix는 계속 지원되며 기존 Radix 앱은 즉시 마이그레이션 대상이 아니다.
- shadcn/cli v4의 `registry:base`, `registry:font`, `include`, `registry validate`는 모노레포 디자인 시스템을 패키징하고 배포 전 검증하는 실무 축으로 쓸 수 있다.
- `@shadcn/helpers`는 AI SDK와 TanStack AI 채팅 UI를 모델, API 라우트, 네트워크, API 키 없이 실제 `useChat` 흐름처럼 프리뷰·테스트하게 해준다.
- Tailwind v4.1의 `@source not`, `@source inline()`은 레거시 경로 제외와 동적 클래스 보장을 CSS 안에서 처리하는 새 스캔·safelist 패턴이다.
- WCAG 2.5.7/2.5.8 기준으로 드래그 UI에는 단일 포인터 대안이 필요하고, 포인터 타깃은 24x24 CSS px 이상 또는 충분한 간격을 확보해야 한다.
- Material 3 Expressive 연구는 큰 버튼·고대비 containment가 핵심 조작 발견성을 높일 수 있지만, 레이블 제거와 익숙한 패턴 파괴는 사용성을 낮춘다고 확인한다.

## 출처
- [July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [March 2026 - shadcn/cli v4](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [May 2026 - Registry Include and Validate](https://ui.shadcn.com/docs/changelog/2026-05-registry-include)
- [July 2026 - Introducing @shadcn/helpers](https://ui.shadcn.com/docs/changelog/2026-07-helpers)
- [Tailwind CSS v4.1](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [WCAG 2.5.7 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [WCAG 2.5.8 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Expressive Design: Google UX Research](https://design.google/library/expressive-material-design-google-research)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)
- [Design Tokens Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/)

## 위키화 후보
- `@shadcn/helpers` — 백엔드 없이 AI 채팅 UI 스트리밍 상태를 결정론적으로 프리뷰·테스트하는 패턴
- `Tailwind v4.1 @source 제어` — `@source not`과 `@source inline()` 기반 스캔 제외·safelist 관리 패턴

## 프로필 반영 후보 (저위험)
- `@shadcn/helpers`를 AI 채팅 UI 프리뷰·테스트 도구 후보로 추가
- Tailwind v4.1 `@source not`/`@source inline()`을 동적 클래스·레거시 경로 점검어로 추가

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 Base UI로 고정하는 행동 규칙은 기존 Radix 운영과 충돌 가능성이 있어 별도 승인 필요
- Material 3 Expressive식 큰 버튼·강한 containment를 제품 UI 기본 방향으로 채택하는 것은 도메인별 사용성 검증 후 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-registry-검증 — `registry validate`, `include`, `--dry-run`, `--diff` 기준으로 사내 registry 변경 전 점검 자동화
