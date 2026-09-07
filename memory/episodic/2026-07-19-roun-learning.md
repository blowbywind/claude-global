---
date: 2026-07-19
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-19

## 오늘 배운 것
- Node.js Permission Model은 stable이며 `--permission`으로 파일, 네트워크, 자식 프로세스, 워커, 네이티브 애드온, WASI, FFI, inspector 접근을 제한할 수 있습니다. 단, 악성 코드 격리가 아니라 신뢰한 코드의 실수 방지 장치로 봐야 합니다.
- `node:ffi`는 Node.js 26.1.0에서 experimental로 추가됐고 포인터, 시그니처, 해제된 메모리 접근 오류가 프로세스 충돌이나 메모리 손상을 일으킬 수 있어 백엔드 production 기본값으로는 부적합합니다.
- 2026-07-19 기준 Node.js production 런타임은 Active LTS 또는 Maintenance LTS만 사용해야 하며, 공식 표상 v24와 v22가 LTS입니다.
- TypeScript 5.9의 `module: node20`은 stable 옵션이며 `nodenext`처럼 부동 타깃이 아니라 Node.js 20 동작 모델과 `target: es2023`을 암시합니다.
- Prisma ORM v7은 새 프로젝트에서 Rust-free Prisma Client를 기본값으로 삼고, generated client `output` 지정과 명시적 `prisma generate` 실행을 요구합니다. `prisma.config.ts`의 `adapter`, `engine`, `studio` 제거도 마이그레이션 체크리스트에 포함해야 합니다.
- OpenTelemetry Node.js는 traces와 metrics 계측 흐름은 문서화되어 있으나, Node.js용 logging library는 아직 under development 상태입니다.

## 출처
- [Node.js 권한 문서](https://nodejs.org/api/permissions.html)
- [Node.js 26.1.0 릴리스 노트](https://nodejs.org/en/blog/release/v26.1.0)
- [Node.js 릴리스 정책](https://nodejs.org/en/about/previous-releases)
- [TypeScript 5.9 릴리스 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html)
- [Prisma ORM 7.0.0 변경 기록](https://www.prisma.io/changelog/2025-11-19)
- [Prisma ORM 7.4.0 변경 기록](https://www.prisma.io/changelog/2026-02-11)
- [Prisma ORM 7.5.0 변경 기록](https://www.prisma.io/changelog/2026-03-11)
- [Prisma 설정 파일 참조](https://www.prisma.io/docs/orm/reference/prisma-config-reference)
- [OpenTelemetry Node.js 시작 문서](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)

## 위키화 후보
- Node.js Permission Model — stable 권한 제한 기능과 sandbox가 아닌 한계를 함께 정리
- Prisma ORM v7 업그레이드 체크리스트 보강 — `output`, 명시적 generate, driver adapter, config 제거 항목 추가

## 프로필 반영 후보 (저위험)
- Node.js 보안 점검 용어에 Permission Model, `--allow-*`, seat belt limitation 반영
- Prisma v7 마이그레이션 점검 항목에 Rust-free Client, generated client `output`, 명시적 `prisma generate` 반영

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-verifier — Node.js, TypeScript, Prisma, OpenTelemetry 공식 릴리스 노트를 교차검증해 마이그레이션 체크리스트로 요약
