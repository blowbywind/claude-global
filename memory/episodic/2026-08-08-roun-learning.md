---
date: 2026-08-08
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-08

## 오늘 배운 것
- `RateLimit`와 `RateLimit-Policy`는 아직 `Active Internet-Draft`라서 공통 API 계약에 강제하기보다 초안 추적 항목으로 둔다.
- Fastify v5 마이그레이션은 Node.js v20 이상, `querystring`·`params`·`body`·`response`의 full JSON Schema 전환을 함께 점검한다.
- GraphQL HTTP 계약 테스트에는 `Accept: application/graphql-response+json`, POST `Content-Type: application/json`, GET query 전용, media type별 상태 코드 차이를 포함한다.
- GraphQL 보안은 introspection 비활성화만으로 부족하며 trusted documents, pagination, depth·list depth, breadth·alias·batch limit, query complexity budget을 계층화한다.
- MCP HTTP 인증은 Protected Resource Metadata, `resource` 대상 지정, 매 요청 `Authorization` 헤더, audience validation, token passthrough 금지를 별도 체크리스트로 검증한다.
- DPoP 검증은 `ath`만 보지 말고 `htm`, `htu`, `iat` 시간창, `jti`, 공개키 바인딩, 서버가 요구한 `nonce`까지 함께 검증한다.

## 출처
- [RateLimit header fields for HTTP](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Prisma ORM v7.5.0 changelog](https://www.prisma.io/changelog/2026-03-11)
- [GraphQL Serving over HTTP](https://graphql.org/learn/serving-over-http/)
- [GraphQL Security](https://graphql.org/learn/security/)
- [OpenTelemetry JavaScript](https://opentelemetry.io/docs/languages/js/)
- [PostgreSQL 18 Password Authentication](https://www.postgresql.org/docs/18/auth-password.html)
- [MCP Authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)
- [RFC 9449 DPoP](https://www.rfc-editor.org/rfc/rfc9449.html)

## 위키화 후보
- 없음: 주요 항목은 기존 GraphQL, Fastify, PostgreSQL, MCP, DPoP, RateLimit, Prisma 계열 노트 보강으로 충분하다.

## 프로필 반영 후보 (저위험)
- GraphQL HTTP 계약 테스트 점검어에 media type별 상태 코드와 GET query 전용 규칙 추가
- OpenTelemetry JS 점검어에 traces·metrics stable, logs development 상태 구분 추가

## 승인 필요 (고위험)
- `RateLimit`·`RateLimit-Policy`를 전역 API 응답 계약에 강제할지 여부
- PostgreSQL 신규 DB 인증 기본값을 `scram-sha-256`로 고정하고 `md5`를 금지할지 여부

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-auditor — Fastify·GraphQL·RateLimit 계약 테스트 체크리스트 생성
- [agent] auth-protocol-reviewer — MCP·DPoP·OAuth audience와 token passthrough 검토
