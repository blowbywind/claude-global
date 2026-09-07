---
date: 2026-08-22
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-22

## 오늘 배운 것
- Node.js 26은 Current이고 Node.js 24는 LTS입니다. 프로덕션 신규 백엔드는 Current가 아니라 Active 또는 Maintenance LTS만 기준으로 잡아야 합니다. 출처: [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- Node.js 24.19.0에는 `child_process`의 Permission Model 전파 수정이 포함됐습니다. 권한 제한과 자식 프로세스를 함께 쓰는 백엔드는 배포 전 회귀 테스트가 필요합니다. 출처: [Node.js 24.19.0](https://nodejs.org/en/blog/release/v24.19.0)
- Fastify의 `params`, `query`, `headers`, `body`는 신뢰할 수 없는 네트워크 입력입니다. 특히 percent-decoded route params와 `trustProxy` 기반 메타데이터는 파일 경로, 인가, 리다이렉트 판단 전에 별도 검증해야 합니다. 출처: [Fastify Request](https://fastify.dev/docs/latest/Reference/Request/)
- Fastify `handlerTimeout`은 `request.signal`을 중단하지만 비동기 작업은 자동 종료되지 않습니다. `fetch()`, DB 드라이버, `stream.pipeline()`에 `signal`을 전달하는 취소 전파 패턴을 점검해야 합니다. 출처: [Fastify Server](https://fastify.dev/docs/latest/Reference/Server/)
- PostgreSQL 18은 `WITHOUT OVERLAPS`, `PERIOD` 기반 temporal constraints를 추가했고, `pg_upgrade` 뒤 full text search와 `pg_trgm` 인덱스 재색인이 필요할 수 있습니다. 출처: [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- Prisma 8 벤치마크의 87퍼센트 수치는 공식 블로그 기준으로 확인되지만 단일 워크로드와 단일 장비 결과입니다. 프로덕션 기본값 승격 근거가 아니라 후보군 검증 항목으로만 유지하는 편이 안전합니다. 출처: [Prisma 8 Is About 90 Percent As Fast As Raw PG](https://www.prisma.io/blog/prisma-next-performance-benchmark)

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js 24.19.0](https://nodejs.org/en/blog/release/v24.19.0)
- [Fastify Request](https://fastify.dev/docs/latest/Reference/Request/)
- [Fastify Server](https://fastify.dev/docs/latest/Reference/Server/)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- [GraphQL over HTTP Draft](https://graphql.github.io/graphql-over-http/draft/)
- [OpenTelemetry Database Spans](https://opentelemetry.io/docs/specs/semconv/db/database-spans/)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [Prisma 8 Benchmark](https://www.prisma.io/blog/prisma-next-performance-benchmark)

## 위키화 후보
- `Fastify handlerTimeout 취소 전파` — `request.signal`을 HTTP, DB, 스트림 작업까지 전달하는 회귀 테스트 패턴.
- `PostgreSQL 18 pg_upgrade 검색 인덱스 점검` — full text search와 `pg_trgm` 재색인 확인 런북.

## 프로필 반영 후보 (저위험)
- Fastify 리뷰 점검어에 `handlerTimeout`과 `request.signal` 취소 전파 확인 추가.
- PostgreSQL 18 업그레이드 점검어에 full text search와 `pg_trgm` 인덱스 재색인 검증 추가.

## 승인 필요 (고위험)
- 전역 Stack Defaults의 `Node.js 20 LTS` 문구 폐기 및 신규 백엔드 기본 런타임을 `Node.js 24 LTS`로 고정.
- Prisma 8을 프로덕션 기본 ORM으로 승격할지 여부는 GA 상태와 자체 워크로드 벤치마크 확인 전까지 보류.

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-upgrade-runbook-checker — Node.js, Fastify, PostgreSQL, Prisma 릴리스 노트와 기존 런북의 누락 항목을 대조.
