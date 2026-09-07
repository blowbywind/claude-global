---
date: 2026-08-10
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-10

## 오늘 배운 것
- OAuth 구현 점검은 RFC 9700 기준으로 `redirect URI` 정확 일치, `open redirector` 금지, CSRF 방어, token replay 방어를 기본 항목으로 둡니다.
- REST 오류 응답은 RFC 9457 `Problem Details`와 `application/problem+json`을 우선 검토합니다. RFC 9457은 RFC 7807을 대체합니다.
- `RateLimit`와 `RateLimit-Policy`는 활성 Internet-Draft이고, `Idempotency-Key`는 만료된 Internet-Draft입니다. 둘 다 공통 계약에 강제하기보다 추적 대상 또는 선택 구현으로 다룹니다.
- OpenAPI 3.2.0 문서 도구는 외부 참조 자동 역참조, 참조 순환, Markdown/HTML 정화를 보안 점검 항목에 넣어야 합니다.
- Prisma ORM v7 마이그레이션은 ESM, `prisma-client` generator, 필수 `output`, driver adapter, 환경 변수 명시 로딩, MongoDB 미지원이 핵심 함정입니다.
- GraphQL over HTTP는 2026-08-05 기준 Stage 2 draft라 상호운용성 테스트 참고로만 쓰고, PGlite는 Node.js/Bun/browser에서 unit/CI용 임시 Postgres 후보로 검토할 만합니다.

## 출처
- [RFC 9700: OAuth 2.0 Security Best Current Practice](https://www.rfc-editor.org/rfc/rfc9700.html)
- [RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html)
- [RateLimit header fields for HTTP](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)
- [The Idempotency-Key HTTP Header Field](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/)
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- [Upgrade to Prisma ORM 7](https://www.prisma.io/docs/guides/upgrade-prisma-orm/v7)
- [GraphQL over HTTP](https://graphql.github.io/graphql-over-http/)
- [What is PGlite](https://pglite.dev/docs/about)

## 위키화 후보
- 없음: 기존 OAuth, Problem Details, RateLimit, OpenAPI 3.2, Prisma 7, GraphQL over HTTP, PGlite 노트 보강으로 충분합니다.

## 프로필 반영 후보 (저위험)
- OpenAPI 3.2 문서 도구 점검어에 외부 참조, 참조 순환, Markdown/HTML 정화 추가
- `Idempotency-Key`는 재시도 안정화 용어로 유지하되, 표준 확정 표현 금지

## 승인 필요 (고위험)
- Prisma ORM v7을 신규 백엔드 기본 ORM으로 승격할지 승인 필요
- `RateLimit`, `RateLimit-Policy`, `Idempotency-Key`를 공통 API 응답 계약에 강제할지 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-checker — OpenAPI, Problem Details, RateLimit, Idempotency, GraphQL HTTP 계약 점검 자동화
