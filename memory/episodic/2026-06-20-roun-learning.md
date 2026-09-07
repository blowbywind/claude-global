---
date: 2026-06-20
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-06-20

## 오늘 배운 것

- **Fastify + TypeBox 우선**: Fastify는 내부적으로 JSON Schema + Ajv JIT를 사용하므로 TypeBox가 Zod보다 ~22배 빠름. TypeBox는 타입 추론과 OpenAPI 스펙을 동시에 뽑아내 별도 변환 계층 불필요. Zod는 tRPC·React Hook Form 연동 시에만 선택.
- **PostgreSQL Partial Index**: `WHERE is_active = true` 같은 조건부 인덱스로 인덱스 크기를 극적으로 축소 가능 (사례: 1026 MB → 96 KB). 삽입/수정/삭제 비용은 전체 인덱스 대비 낮음.
- **복합 인덱스 컬럼 순서**: 첫 번째 컬럼으로 쿼리가 시작되지 않으면 인덱스를 타지 못함. 고쓰기 테이블에서 인덱스 5개 추가 시 INSERT 2~3배 저하 → 선별적으로 추가할 것.
- **API Rate Limiting 알고리즘 선택**: 일반 API → **Sliding Window Counter** (정확도+단순성 균형), 버스트 허용 필요 시 → **Token Bucket** (Redis 기반). Fastify는 `@fastify/rate-limit` 플러그인으로 레이어 추가 가능.
- **PostgreSQL 성능 문제 원인 분포**: 누락 인덱스 80%, 쿼리 설계 15%, 커넥션 관리 5% → 인덱스 점검이 첫 번째 조치.

## 출처
- [TypeBox vs Zod 2026 — PkgPulse](https://www.pkgpulse.com/guides/zod-vs-typebox-2026)
- [Why val.town uses TypeBox alongside Zod](https://blog.val.town/blog/typebox/)
- [PostgreSQL Performance Tuning 2026 — ZeonEdge](https://zeonedge.com/blog/postgresql-performance-tuning-2026-indexes-query-optimization)
- [Optimizing PostgreSQL with Composite and Partial Indexes — Stormatics](https://stormatics.tech/blogs/optimizing-postgresql-with-composite-and-partial-indexes)
- [Rate Limiting with Redis: Algorithm Comparison — Redis.io](https://redis.io/tutorials/howtos/ratelimiting/)

## 위키화 후보
- **PostgreSQL Partial & Composite Index 패턴**: 조건부 인덱스 설계 기준, 컬럼 순서 규칙, 쓰기 성능 트레이드오프 정리

## 프로필 반영 후보 (저위험)
- Fastify 프로젝트에서 스키마 검증 라이브러리는 TypeBox 우선 (Zod 대비 ~22배 빠름, JSON Schema + OpenAPI 자동 생성)
- API Rate Limiting 기본 전략: Sliding Window Counter (Redis) + `@fastify/rate-limit`; 버스트 허용 필요 시 Token Bucket 전환

## 승인 필요 (고위험)
- (없음)


## 추가 학습 (19:01 UTC)
## 오늘 배운 것

- **JWT 알고리즘 혼동 공격 (2026 활성 CVE)**: CVE-2026-22817(Hono, CVSS 8.2) 등 공격자가 JWKS에서 공개키를 가져와 `alg: HS256`으로 서명한 토큰을 RS256 서버에 전송. 서버가 공개키를 HMAC 시크릿으로 검증해 우회됨. 방어: `verify()` 호출 시 `algorithms: ['RS256']` 명시 필수, 토큰의 alg 헤더 신뢰 금지.
  - 출처: [DEV Community — CVE Fix Guide](https://dev.to/iamdevbox/jwt-algorithm-confusion-attacks-cve-2026-22817-cve-2026-27804-and-cve-2026-23552-fix-guide-4ac4)

- **GraphQL DataLoader는 요청당 새 인스턴스**: 싱글턴으로 재사용하면 캐시가 사용자 간 누출됨. `context` 생성 시점에 `new DataLoader(...)` 호출. 배치로 N+1 → 쿼리 2회로 감소.
  - 출처: [DataLoader N+1 — oneuptime](https://oneuptime.com/blog/post/2026-02-02-graphql-dataloader-n-plus-1/view)

- **Prisma 기본 트랜잭션이 `CREATE INDEX CONCURRENTLY` 차단**: Prisma는 마이그레이션을 트랜잭션으로 감쌈 → CONCURRENTLY 불가. 프로덕션 배포 전 `prisma migrate diff`로 SQL 미리 검토 후 수동 실행.
  - 출처: [Prisma Migrations Zero-Downtime — DEV](https://dev.to/whoffagents/prisma-migrations-in-production-zero-downtime-strategies-and-rollback-patterns-3nf1)

- **Expand-Contract 패턴**: 무중단 스키마 마이그레이션 3단계 — ① 새 컬럼 추가(Expand) → ② 앱이 구/신 컬럼 병행 처리 → ③ 구 컬럼 제거(Contract). `ALTER COLUMN TYPE`은 테이블 전체 잠금 발생하므로 이 패턴으로 우회.
  - 출처: [Zero-Downtime PostgreSQL — DEV](https://dev.to/software_mvp-factory/zero-downtime-schema-migrations-in-production-postgresql-b29)

- **PostgreSQL 인덱스**: `CREATE/REINDEX CONCURRENTLY`로 프로덕션 잠금 방지. 부분 인덱스(`WHERE`)·표현식 인덱스로 크기 절감. `ALTER COLUMN TYPE`은 전체 재작성 → ghost table swap 또는 Expand-Contract로 대체.
  - 출처: [PostgreSQL Indexing Playbook 2026](https://www.sachith.co.uk/postgresql-indexing-playbook-practical-guide-feb-12-2026/)

---

## 출처

- [JWT Algorithm Confusion Attacks: CVE-2026-22817 Fix Guide](https://dev.to/iamdevbox/jwt-algorithm-confusion-attacks-cve-2026-22817-cve-2026-27804-and-cve-2026-23552-fix-guide-4ac4)
- [GraphQL DataLoader N+1 — oneuptime (2026-02)](https://oneuptime.com/blog/post/2026-02-02-graphql-dataloader-n-plus-1/view)
- [Prisma Migrations: Zero-Downtime Expand-Contract](https://dev.to/whoffagents/prisma-migrations-in-production-zero-downtime-deployments-with-expand-contract-2l1p)
- [Zero-Downtime Schema Migrations in Production PostgreSQL](https://dev.to/software_mvp-factory/zero-downtime-schema-migrations-in-production-postgresql-b29)
- [PostgreSQL Indexing Playbook — sachith.co.uk (2026-02)](https://www.sachith.co.uk/postgresql-indexing-playbook-practical-guide-feb-12-2026/)

---

## 위키화 후보

- **JWT 알고리즘 혼동 공격** — RS256 서버에 HS256 위조 토큰 전송 공격 원리·방어 패턴 (2026 CVE 포함)
- **Expand-Contract 마이그레이션 패턴** — 무중단 스키마 변경 3단계 절차, Prisma CONCURRENTLY 우회법

---

## 프로필 반영 후보 (저위험)

- GraphQL DataLoader는 요청당 새 인스턴스 생성 필수 (싱글턴 → 사용자 간 캐시 누출)
- Prisma 프로덕션 마이그레이션 전 `prisma migrate diff` SQL dry-run 검토 후 인덱스는 수동 실행

---

## 승인 필요 (고위험)

_없음_

---

## 신규 도구 후보 (에이전트/스킬)

- `[skill] db-migrate-safe` — Expand-Contract 체크리스트 + `prisma migrate diff` SQL 검토 → 프로덕션 무중단 마이그레이션 가이드 자동화


## 추가 학습 (19:01 UTC)
## 오늘 배운 것
- **Prisma 7 Rust-free 전환(2026)**: Rust 쿼리엔진 제거 → TypeScript `queryCompiler`가 기본. findMany 25k건 185ms→55ms(약 3.4배), 번들 ~90% 축소. 단 `driverAdapters`+`queryCompiler` generator 플래그 필수, DB 드라이버를 코드에서 명시적으로 주입해야 함. 생성 코드도 `node_modules` 밖으로 이동. → 마이그레이션 시 어댑터 설정 점검 필요.
- **OWASP Top 10:2025(현 공식판)**: Broken Access Control 여전히 #1이며 **SSRF가 이 카테고리로 편입**. Security Misconfiguration #5→#2 상승. API는 별도 Top10에서 **BOLA(객체 수준 인가)·Broken Auth·Unrestricted Resource Consumption**가 핵심. → 라우트마다 객체 소유권 검증(IDOR 방지)과 rate limit 기본 적용.
- **Hono+Drizzle+Neon 스택 부상**: Hono가 Express 대비 2~4배 RPS, Fastify와 동급/우위 + 낮은 메모리·빠른 콜드스타트. 동일 코드가 Node/Bun/Deno/CF Workers/Vercel Edge에 무수정 배포(엣지 이식성). JWT/CORS/rate-limit/OpenAPI 공식 미들웨어 보유. → 서버리스·엣지 타깃 신규 API는 후보 스택.
- **레거시→TS 마이그레이션(Strangler Fig)**: 전면 재작성보다 느려 보여도 위험이 훨씬 낮음. 1개 모듈을 레퍼런스로 먼저 마이그레이션해 공유 패턴 확립 후 확장. 가장 비싼 버그는 "중복처럼 보여 지운 코드가 실은 2014년 세법·계약 규칙을 인코딩"한 경우 → **테스트 없는 리팩토링 금지**가 1순위 원칙.

## 출처
- [Prisma ORM v7.0.0 changelog](https://www.prisma.io/changelog/2025-11-19)
- [Prisma 7: Rust-Free Architecture and Performance Gains (InfoQ)](https://www.infoq.com/news/2026/01/prisma-7-performance/)
- [OWASP Top 10:2025 Introduction](https://owasp.org/Top10/2025/0x00_2025-Introduction/)
- [OWASP API Security Top 10 (2026) — AppSecMaster](https://www.appsecmaster.net/blog/owasp-api-security-top-10-every-risk-explained/)
- [NestJS vs Fastify vs Hono: 2026 Comparison (Encore)](https://encore.dev/articles/nestjs-vs-fastify-vs-hono)
- [Modernizing Legacy with Strangler Fig (Curotec)](https://www.curotec.com/insights/modernizing-a-legacy-application-using-the-strangler-fig-pattern/)

## 위키화 후보
- `prisma-7-rust-free-queryCompiler.md` — Rust 엔진 제거·driverAdapters 필수·성능/번들 변화 (기존 prisma-n-1 노트와 별개)
- `owasp-top10-2025.md` — BAC#1(SSRF 편입)·Misconfig#2·API BOLA 정리 (기존 web-security-basics 보강)

## 프로필 반영 후보 (저위험)
- Prisma 7부터 Rust 엔진 제거 → `queryCompiler`+`driverAdapters` 플래그 및 명시적 드라이버 주입이 기본 (성능 ~3배, 번들 ~90%↓)
- API 라우트마다 BOLA/IDOR 방지를 위해 객체 소유권 인가 검증 + SSRF 가드(OWASP 2025: SSRF는 BAC 범주)를 기본 체크리스트화

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
