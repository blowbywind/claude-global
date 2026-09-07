---
date: 2026-08-23
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-23

## 오늘 배운 것
- GraphQL 1st party API는 production에서 trusted documents allowlist를 우선하고, public API는 pagination, depth limit, breadth, batch limit, rate limit, complexity analysis를 계층적으로 적용해야 합니다. 출처: [GraphQL Security](https://graphql.org/learn/security/)
- GraphQL complexity analysis는 resolver 실행 전, 검증 이후에 수행하고 한도 초과 요청을 거절해야 합니다. production에서는 가능한 arbitrary document 런타임 분석보다 trusted documents를 우선합니다. 출처: [GraphQL.js Operation Complexity Controls](https://www.graphql-js.org/docs/operation-complexity-controls/)
- PgBouncer transaction pooling에서 prepared statements를 쓰려면 PgBouncer 1.21.0 이상과 `max_prepared_statements` 비영값 설정이 필요합니다. session pooling은 `server_reset_query = DISCARD ALL` 또는 최소 `DEALLOCATE ALL`로 이전 statements를 정리해야 합니다. 출처: [PgBouncer FAQ](https://www.pgbouncer.org/faq.html)
- OpenTelemetry JS 자동 계측은 앱 코드보다 먼저 초기화해야 하며, Node.js에서는 `--import`로 instrumentation 파일을 선로드하는 패턴이 공식 문서와 일치합니다. 출처: [OpenTelemetry Node.js Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)
- Atlas migration lint는 data-dependent 변경, destructive 변경, rename/drop 같은 backward incompatible 변경을 사전에 탐지할 수 있어 DB migration 리뷰 자동화 후보로 검증됩니다. 출처: [Atlas Migration Analyzers](https://atlasgo.io/lint/analyzers)
- PostgreSQL RLS는 table owner, superuser, `BYPASSRLS` role이 우회할 수 있으므로 tenant isolation에서는 비소유 app role과 `FORCE ROW LEVEL SECURITY`를 검토해야 합니다. 또한 `statement_timeout`, `lock_timeout`, `idle_in_transaction_session_timeout`의 기본 비활성 상태와 node-postgres client release 누락은 운영 장애 포인트입니다. 출처: [PostgreSQL Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html), [PostgreSQL Client Connection Defaults](https://www.postgresql.org/docs/current/runtime-config-client.html), [node-postgres Pooling](https://node-postgres.com/features/pooling), [node-postgres Client API](https://node-postgres.com/apis/client)

## 출처
- [GraphQL Security](https://graphql.org/learn/security/)
- [GraphQL.js Operation Complexity Controls](https://www.graphql-js.org/docs/operation-complexity-controls/)
- [PgBouncer FAQ](https://www.pgbouncer.org/faq.html)
- [OpenTelemetry Node.js Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)
- [Atlas Migration Analyzers](https://atlasgo.io/lint/analyzers)
- [PostgreSQL Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [node-postgres Pooling](https://node-postgres.com/features/pooling)
- [node-postgres Client API](https://node-postgres.com/apis/client)
- [PostgreSQL Client Connection Defaults](https://www.postgresql.org/docs/current/runtime-config-client.html)

## 위키화 후보
- PgBouncer prepared statements pooling mode - transaction/session pooling별 안전 설정
- PostgreSQL RLS owner bypass와 `FORCE ROW LEVEL SECURITY` tenant isolation 패턴

## 프로필 반영 후보 (저위험)
- GraphQL demand control 점검어: trusted documents, depth, breadth, batch, complexity budget
- PostgreSQL 운영 점검어: PgBouncer `max_prepared_statements`, `idle_in_transaction_session_timeout`, node-postgres `pool.query`

## 승인 필요 (고위험)
- tenant isolation DB 설계에서 비소유 app role과 `FORCE ROW LEVEL SECURITY` 검토를 필수 체크로 올릴지
- DB migration PR에서 Atlas lint 같은 migration analyzer를 CI 게이트로 추가할지

## 신규 도구 후보 (에이전트/스킬)
- [skill] graphql-demand-control-review - GraphQL API의 trusted documents, depth, breadth, batch, complexity budget 점검
- [agent] db-migration-safety-reviewer - PostgreSQL RLS, PgBouncer, timeout, migration lint 위험 검토
