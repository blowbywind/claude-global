---
date: 2026-08-21
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-21

## 오늘 배운 것
- Node.js v24.19.0 LTS는 `child_process`의 `NODE_OPTIONS` 기반 Permission Model 전파 수정을 포함합니다. 권한 모델 하드닝 테스트에는 자식 프로세스 전파 케이스를 유지해야 합니다.
- PostgreSQL 18은 AIO로 순차 스캔, bitmap heap scan, vacuum의 I/O를 개선하고, `pg_upgrade`의 통계 보존, `--jobs`, `--swap`을 제공합니다. 단, extended statistics는 보존되지 않아 재측정이 필요합니다.
- PostgreSQL 18은 OAuth 인증, FIPS 검증, TLS 1.3 cipher 설정을 추가했고 `md5` password authentication을 deprecated 처리했습니다. 신규·마이그레이션 DB는 SCRAM 전환 감사를 기본으로 보는 판단이 유효합니다.
- PostgreSQL 18.6 계열 업데이트는 28개 보안 취약점과 110개 이상 버그를 수정했습니다. 업데이트 후 GIN `reltuples`, `btree_gist`, `ltree` 인덱스 후속 점검이 필요합니다.
- Prisma 8 RC 벤치마크는 단일 Postgres workload 기준 raw `pg` peak의 약 87%, gzip 148.5 KB client를 보였지만, 공식 글 기준 production 권장은 여전히 Prisma 7입니다.
- GraphQL over HTTP는 POST `Content-Type: application/json`, `Accept: application/graphql-response+json`, resolver 단계 field-level authorization, 긴 GET query의 persisted/trusted documents 축약을 점검어로 유지할 근거가 있습니다. 단, HTTP 명세는 아직 draft입니다.

## 출처
- [Node.js 24.19.0 (LTS)](https://nodejs.org/en/blog/release/v24.19.0)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/current/release-18.html)
- [PostgreSQL 18.6, 17.11, 16.15, 15.19, 14.24 and 19 Beta 3 Released](https://www.postgresql.org/about/news/postgresql-186-1711-1615-1519-1424-and-19-beta-3-released-3365/)
- [Prisma 8 Is About 90% As Fast as Raw PG](https://www.prisma.io/blog/prisma-next-performance-benchmark)
- [Search encrypted data with Prisma 8 and CipherStash](https://www.prisma.io/blog/search-encrypted-data-with-prisma-next-and-cipherstash)
- [Serving over HTTP | GraphQL](https://graphql.org/learn/serving-over-http/)

## 위키화 후보
- Prisma 8 + CipherStash searchable field-level encryption — 민감 필드 검색, 명시적 복호화, 키 접근 경계 설계 노트

## 프로필 반영 후보 (저위험)
- GraphQL over HTTP transport 리뷰 점검어에 `Accept`, `Content-Type`, resolver authorization, persisted/trusted documents 유지
- Prisma 8은 RC watchlist로 추적하고 production 기본값은 Prisma 7 유지

## 승인 필요 (고위험)
- Node.js Permission Model 사용 백엔드의 최소 런타임을 v24.19.0 이상으로 고정할지
- PostgreSQL minor update 후 GIN `reltuples`, `btree_gist`, `ltree` 점검을 DB 패치 체크리스트에 강제할지

## 신규 도구 후보 (에이전트/스킬)
- [skill] db-patch-postcheck — PostgreSQL 릴리스 노트에서 후속 점검 쿼리와 reindex 조건을 추출해 패치 런북으로 구조화
