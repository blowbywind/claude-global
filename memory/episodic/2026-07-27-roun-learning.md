---
date: 2026-07-27
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-27

## 오늘 배운 것
- Node.js 운영 런타임은 현재 `v24`, `v22` LTS 계열만 프로덕션 기본 후보로 보고, `v26`은 Current, `v20`은 EOL로 취급해야 합니다. 2026-07-27 전후 `26.x`, `24.x`, `22.x` 보안 릴리스가 예고되었고 최고 심각도는 높음입니다.
- MCP HTTP 권한 모델은 OAuth 2.1 기반이며, MCP 서버는 RFC 9728 Protected Resource Metadata를 제공하고 클라이언트는 이를 권한 서버 발견에 사용해야 합니다.
- MCP HTTP 요청은 매 요청마다 `Authorization: Bearer` 헤더를 사용해야 하며, 토큰을 쿼리 문자열에 넣으면 안 됩니다. 서버는 토큰의 대상이 자기 MCP 서버인지 검증해야 합니다.
- RFC 9728 적용 시 TLS, `resource` 값 정확 일치, audience-restricted access token이 리소스 위장과 토큰 재사용 방어의 핵심입니다.
- Fastify v5 마이그레이션에서는 `querystring`, `params`, `body`, `response`에 `type`을 포함한 full JSON Schema가 필요합니다. 스키마는 실행 코드처럼 취급하고, 초기 검증 단계의 `$async` DB 접근은 거부 서비스 위험으로 피해야 합니다.
- GraphQL은 introspection 차단이나 오류 축소만으로 부족합니다. trusted documents, 깊이·너비·배치·복잡도 제한, 비즈니스 로직 계층 인가, persisted query와 DataLoader 기반 N+1 완화를 함께 봐야 합니다.

## 출처
- [Node.js 보안 릴리스 공지](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- [Node.js 릴리스 상태](https://nodejs.org/en/about/previous-releases)
- [MCP Authorization](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)
- [RFC 9728 OAuth 2.0 Protected Resource Metadata](https://www.rfc-editor.org/rfc/rfc9728.html)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Fastify Validation and Serialization](https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/)
- [GraphQL Security](https://graphql.org/learn/security/)
- [GraphQL Performance](https://graphql.org/learn/performance/)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)

## 위키화 후보
- MCP HTTP 권한 모델: RFC 9728 Protected Resource Metadata와 audience binding 체크리스트
- GraphQL trusted/persisted documents 기반 수요제어·캐시 설계

## 프로필 반영 후보 (저위험)
- MCP HTTP 인증 구현 용어에 `Protected Resource Metadata`, `resource` canonical URI, audience-restricted access token 추가
- Fastify 검증 원칙에 “스키마는 실행 코드, 사용자 제공 스키마와 초기 `$async` DB 검증 금지” 추가

## 승인 필요 (고위험)
- Node.js `v20` 신규 백엔드 배포 금지 및 `v22` 또는 `v24` LTS 기준으로 업그레이드 정책 강화
- 외부 노출 MCP HTTP 서버는 OAuth 2.1, RFC 9728, audience 검증 없이는 배포 금지로 운영 규칙 강화

## 신규 도구 후보 (에이전트/스킬)
- [skill] mcp-http-auth-audit — MCP 서버의 metadata, bearer header, query token 금지, audience 검증을 점검
- [agent] api-demand-control-reviewer — Fastify·GraphQL API의 스키마 검증, 수요제어, 런타임 LTS 위험을 리뷰
