---
date: 2026-08-17
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-17

## 오늘 배운 것
- Node.js Permission Model은 샌드박스가 아니며, 워커 미상속, 심볼릭 링크 추적, 기존 파일 디스크립터 우회, `node:sqlite` 경유 파일 접근 같은 한계를 함께 점검해야 합니다.
- Node.js 26.5.1 보안 릴리스는 `http2`, `permission`, `sqlite`, `dns`, `zlib` 수정을 포함하므로 백엔드 런타임 패치 추적 항목으로 유지할 가치가 있습니다.
- Fastify v5 마이그레이션은 Node.js 20 이상과 `querystring`, `params`, `body`, `response`의 전체 JSON Schema, 특히 `type` 명시를 요구합니다.
- RFC 9728은 OAuth 리소스 서버가 `.well-known/oauth-protected-resource`, `WWW-Authenticate: resource_metadata`, `resource` 식별자 정확 일치 검증을 제공해야 함을 명확히 합니다.
- Arazzo 1.1은 OpenAPI 호출 단계와 AsyncAPI `send`/`receive` 단계를 한 워크플로에 묶을 수 있어, 다단계 API 계약 테스트 후보입니다.
- Prisma 7은 Rust 없는 `prisma-client`, 소스 트리 내 클라이언트 생성, 새 Prisma 설정 파일을 도입하므로 생성 경로, 파일 감시, CI 캐시를 업그레이드 전에 점검해야 합니다.

## 출처
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Node.js 26.5.1 Release](https://nodejs.org/en/blog/release/v26.5.1)
- [Fastify V5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [RFC 9728: OAuth 2.0 Protected Resource Metadata](https://www.rfc-editor.org/rfc/rfc9728.html)
- [Arazzo Specification v1.1.0](https://spec.openapis.org/arazzo/v1.1.0.html)
- [Announcing Prisma 7](https://www.prisma.io/blog/announcing-prisma-orm-7-0-0)
- [PostgreSQL 18.6, 17.11, 16.15, 15.19, 14.24 Released](https://www.postgresql.org/about/news/postgresql-186-1711-1615-1519-1424-and-19-beta-3-released-3365/)
- [Idempotency-Key HTTP Header Field Draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/)

## 위키화 후보
- OAuth Protected Resource Metadata — MCP 전용 노트와 별개로 일반 OAuth 리소스 서버 검증 노트로 분리 가치 있음

## 프로필 반영 후보 (저위험)
- OAuth 리소스 서버 점검어에 RFC 9728 `resource_metadata`, `.well-known/oauth-protected-resource`, `resource` 정확 일치 검증 추가
- API 계약 테스트 점검어에 Arazzo 1.1 `asyncapi` 단계, `send`/`receive`, `dependsOn`, `correlationId` 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-workflow-review — OpenAPI 3.2, Arazzo 1.1, AsyncAPI 조합으로 다단계 API 계약 테스트 체크리스트 생성
