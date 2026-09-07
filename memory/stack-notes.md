---
name: stack-notes
description: 기술 스택 버전, 선택 이유, 컨벤션 — 라이브러리 추가/변경 전 반드시 확인
metadata:
  type: reference
---

# 기술 스택

## 프론트엔드

- **Next.js 15** (App Router) — Pages Router 전환 금지
- **Tailwind CSS** + **shadcn/ui** — 컴포넌트는 shadcn 우선, ui/ 직접 수정 금지
- **Zustand** — 전역 상태 (Redux/Recoil/Context API 남용 금지)

## 백엔드

- **Node.js 20 LTS** — 짝수 버전 고정 (홀수 버전 금지)
- **Fastify v4+** — Express 마이그레이션 계획 없음
- **Zod** — 입력 검증 (Joi, Yup 사용 금지)

## 데이터베이스

- **PostgreSQL 15+**
- **Prisma 5+** — `prisma migrate dev` (개발), `prisma migrate deploy` (프로덕션)
- `db push` 명령은 개발 초기 스키마 탐색 외 금지

## 도구

- **Package Manager**: pnpm — npm/yarn 사용 금지, `pnpm-lock.yaml` 커밋 필수
- **Linter**: ESLint + Prettier
- **Test**: Vitest (Jest 전환 계획 없음)
- **CI**: GitHub Actions

## 컨벤션

- 커밋: Conventional Commits, 영어
- 브랜치: `feat/`, `fix/`, `chore/`, `refactor/` 접두사
- PR: 기능 단위 분리, squash merge
- ID: `cuid()` 기본 (UUID는 외부 연동 시만)

## 라이브러리 추가 원칙

새 라이브러리 추가 전 반드시 사용자에게 보고. 기존 스택으로 해결 불가한 경우만 추가.
