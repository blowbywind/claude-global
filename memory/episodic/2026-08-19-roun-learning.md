---
date: 2026-08-19
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-19

## 오늘 배운 것
- Node.js 운영 기본값은 `Node.js 24 LTS` 기준으로 갱신할 근거가 충분하며, `Node.js 26`은 `Current`라 운영 기본값으로 두면 안 됩니다.
- `Node.js 24.19.0 LTS`는 `child_process` 권한 모델 전파, EdDSA 검증, SQLite 3.53.3 업데이트가 포함된 런타임 하드닝 성격의 패치입니다.
- Fastify는 `v5.12.1`이 최신 안정 보안 릴리스이며 `GHSA-w2qp-rph6-63g4`, `GHSA-3m5p-2c4r-xxw2`를 수정합니다. `v6.0.0-alpha.*`는 운영 기본값 후보가 아닙니다.
- Prisma 8은 expression, partial, unique index를 스키마로 관리할 수 있지만 Release Candidate이고 `@db.*` 제거가 깨지는 변경이라 전역 기본 ORM 승격은 보류해야 합니다.
- PostgreSQL 18.6, 17.11, 16.15, 15.19, 14.24 업데이트 후에는 GIN `reltuples`, `btree_gist`, `ltree` 관련 재분석 또는 재색인 점검이 필요합니다.
- `RateLimit`/`RateLimit-Policy`는 Active Internet-Draft, `Idempotency-Key`는 Expired Internet-Draft라 API 계약에서 확정 표준처럼 표현하면 안 됩니다.

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js 24.19.0 LTS](https://nodejs.org/en/blog/release/v24.19.0)
- [Fastify Releases](https://github.com/fastify/fastify/releases)
- [Prisma 8 changelog 2026-08-02](https://www.prisma.io/changelog/2026-08-02)
- [PostgreSQL 18.6, 17.11, 16.15, 15.19, 14.24 release](https://www.postgresql.org/about/news/postgresql-186-1711-1615-1519-1424-and-19-beta-3-released-3365/)
- [OpenTelemetry metric cardinality limits](https://opentelemetry.io/blog/2026/cardinality-limits-in-opentelemetry/)
- [OpenTelemetry entity events](https://opentelemetry.io/blog/2026/consuming-opentelemetry-entity-events/)
- [OpenTelemetry OTTL lambda functions](https://opentelemetry.io/blog/2026/lambda-powered-function-land-in-ottl/)
- [IETF RateLimit header fields draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)
- [IETF Idempotency-Key draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/)

## 위키화 후보
- OpenTelemetry metric cardinality overflow - 총합은 유지되지만 attribute 필터와 그룹화가 과소 집계되는 운영 함정
- OpenTelemetry entity events 소비 모델 - event stream, bi-temporal timestamp, immutable identity 기반 인벤토리 그래프

## 프로필 반영 후보 (저위험)
- Node.js 백엔드 런타임 점검어에 `Node.js 24 LTS`, `permission model propagation`, `EdDSA verify`, `SQLite 3.53.3` 추가
- OpenTelemetry 점검어에 `cardinality limit 2000`, `otel.metric.overflow=true`, `OTTL lambda experimental feature gate` 추가

## 승인 필요 (고위험)
- 전역 Stack Defaults의 `Node.js 20 LTS`를 `Node.js 24 LTS`로 교체하고 `Node.js 26 Current` 운영 기본값 금지를 명시할지 승인 필요
- Prisma 8 RC를 전역 기본 ORM으로 승격하지 않고, Prisma 7 GA 유지와 프로젝트별 승인 대상으로 둘지 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-watch - Node.js, Fastify, PostgreSQL, Prisma 공식 릴리스와 보안 패치만 검증해 백엔드 점검어로 요약
- [skill] api-draft-status-check - IETF API 헤더 초안의 Active, Expired, RFC 여부를 확인해 문서의 표준성 표현을 교정
