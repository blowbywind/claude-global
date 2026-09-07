---
date: 2026-07-23
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-23

## 오늘 배운 것
- Node.js 26은 2026년 7월 23일 기준 `Current` 릴리스이며, 운영 런타임은 공식 권고대로 Active LTS 또는 Maintenance LTS만 기본값으로 둔다.
- Node.js 26은 Temporal API가 기본 활성화되어 시간대, 기간, 예약 로직이 많은 API는 `Date` 의존 테스트를 보강한 뒤 전환한다.
- PostgreSQL 18은 `md5` 비밀번호 인증을 deprecated 처리했으므로 신규 DB 인증은 SCRAM을 기본으로 보고, SSO 요구가 있으면 OAuth 2.0 인증 확장을 별도 검토한다.
- PostgreSQL 18 신규 클러스터는 page checksums가 기본 활성화되므로 기존 non-checksum 클러스터 업그레이드 전에 `--no-data-checksums` 필요 여부를 결정한다.
- Prisma ORM 7 검토는 Rust-free Client, 필수 `output`, driver adapter, query compilation cache, partial indexes preview, nested transaction savepoints 회귀 테스트를 함께 본다.
- OpenTelemetry HTTP/DB semantic conventions 전환은 `OTEL_SEMCONV_STABILITY_OPT_IN`과 `db.system.name`, `db.namespace`, `db.client.operation.duration` 변경 때문에 대시보드와 알림 쿼리 스키마 테스트가 필요하다.

## 출처
- [Node.js 26.0.0 Current](https://nodejs.org/en/blog/release/v26.0.0)
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- [Prisma ORM v7.0.0](https://www.prisma.io/changelog/2025-11-19)
- [Prisma ORM v7.4.0](https://www.prisma.io/changelog/2026-02-11)
- [Prisma ORM v7.5.0](https://www.prisma.io/changelog/2026-03-11)
- [OpenTelemetry HTTP Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/http/)
- [OpenTelemetry Database Semantic Convention Migration](https://opentelemetry.io/docs/specs/semconv/non-normative/db-migration/)
- [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html)

## 위키화 후보
- Node.js 26 Temporal API 전환 체크리스트
- OpenTelemetry DB semantic convention migration

## 프로필 반영 후보 (저위험)
- OpenTelemetry semantic convention 전환 시 `OTEL_SEMCONV_STABILITY_OPT_IN`과 대시보드 스키마 회귀 검증을 포함
- PostgreSQL 18 업그레이드 검토 용어에 SCRAM, OAuth 인증 확장, page checksums, EXPLAIN ANALYZE buffer 통계를 포함

## 승인 필요 (고위험)
- PostgreSQL 접속 인증 정책에서 `md5` 금지와 SCRAM 기본 사용을 전역 규칙으로 반영할지 승인 필요
- Prisma ORM 7을 신규 백엔드 기본 ORM 기준으로 올릴지 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] otel-semconv-migration-check - OpenTelemetry HTTP/DB 필드 변경, 대시보드, 알림 쿼리 회귀 점검
- [agent] db-upgrade-reviewer - PostgreSQL major upgrade의 인증, checksum, 쿼리 관찰성 점검
