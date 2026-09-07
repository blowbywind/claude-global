---
date: 2026-07-17
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-17

## 오늘 배운 것
- Node.js 프로덕션 런타임 기준은 여전히 Active LTS 또는 Maintenance LTS입니다. 2026-07-17 기준 v24와 v22가 LTS이고 v20은 EOL이므로, v20 고정 전제는 버려야 합니다. 출처: [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- Node.js 내장 TypeScript type stripping은 v24.12.0부터 stable이지만 타입체크를 하지 않고 `tsconfig.json`도 무시합니다. 서버 검증에서는 계속 `tsc --noEmit`이 필요합니다. 출처: [Node.js TypeScript](https://nodejs.org/api/typescript.html)
- Prisma ORM 7 업그레이드는 ESM, `prisma-client` generator, 필수 `output`, DB별 driver adapter, 커넥션 풀 기본값 차이를 함께 점검해야 하는 breaking change 작업입니다. Prisma Next는 Early Access 방향 공개이며, 현재 프로덕션 기본값은 Prisma 7입니다. 출처: [Prisma ORM 7 Upgrade](https://www.prisma.io/docs/guides/upgrade-prisma-orm/v7), [Prisma Next](https://www.prisma.io/blog/the-next-evolution-of-prisma-orm)
- Prisma의 최신 백엔드 예시는 Hono + Zod + Vitest + Prisma ORM 7 조합을 사용하며, CI는 임시 PostgreSQL에 `prisma migrate deploy`, `prisma generate`, 테스트를 실행하는 흐름을 제시합니다. `migrate deploy`는 기존 migration 적용용입니다. 출처: [Prisma REST API](https://www.prisma.io/blog/backend-prisma-typescript-orm-with-postgresql-rest-api-validation-dcba1ps7kip3), [Prisma CI/CD](https://www.prisma.io/blog/backend-prisma-typescript-orm-with-postgresql-deployment-bbba1ps7kip5)
- OpenTelemetry JS v2는 TypeScript 5.0.4 미만 지원 중단, resource 및 propagator API 변경이 있어 단순 패치 업데이트가 아니라 관찰성 초기화 코드 회귀 테스트가 필요한 업그레이드입니다. 출처: [OpenTelemetry JS v2.0.0](https://github.com/open-telemetry/opentelemetry-js/releases/tag/v2.0.0)
- Hono RPC는 타입 공유에 유용하지만 `c.notFound()` 응답 타입 추론, slash 포함 path parameter, HEAD 요청의 GET 변환 처리를 테스트 항목으로 넣어야 합니다. 출처: [Hono RPC](https://hono.dev/docs/guides/rpc), [Hono Best Practices](https://hono.dev/docs/guides/best-practices)

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js TypeScript](https://nodejs.org/api/typescript.html)
- [Upgrade to Prisma ORM 7](https://www.prisma.io/docs/guides/upgrade-prisma-orm/v7)
- [The Next Evolution of Prisma ORM](https://www.prisma.io/blog/the-next-evolution-of-prisma-orm)
- [Backend with TypeScript, PostgreSQL & Prisma: REST, Validation & Tests](https://www.prisma.io/blog/backend-prisma-typescript-orm-with-postgresql-rest-api-validation-dcba1ps7kip3)
- [Backend with TypeScript, PostgreSQL & Prisma: CI & Deployment](https://www.prisma.io/blog/backend-prisma-typescript-orm-with-postgresql-deployment-bbba1ps7kip5)
- [OpenTelemetry JS v2.0.0](https://github.com/open-telemetry/opentelemetry-js/releases/tag/v2.0.0)
- [Valkey 9.1](https://valkey.io/blog/valkey-9-1-delivers-improvements-in-security-performance-and-more/)
- [Hono RPC](https://hono.dev/docs/guides/rpc)
- [Hono Best Practices](https://hono.dev/docs/guides/best-practices)

## 위키화 후보
- Prisma ORM 7 업그레이드 체크리스트 — 기존 Prisma v7 노트 보강: ESM, `prisma-client`, `output`, driver adapter, 커넥션 풀 회귀.
- Hono RPC 타입 안정성 핏폴 — `c.notFound()`, slash path parameter, HEAD 처리 테스트 묶음.

## 프로필 반영 후보 (저위험)
- Prisma 7 마이그레이션 검토 항목에 `prisma-client` generator, 필수 `output`, driver adapter, 커넥션 풀 timeout 회귀를 추가.
- Hono 기반 API 검토 항목에 RPC 타입 추론과 GET/HEAD 응답 동등성 테스트를 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-upgrade-checklist — Node, Prisma, OpenTelemetry, Hono 업그레이드 시 breaking change와 회귀 테스트 항목을 자동 점검.
