---
date: 2026-07-12
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-12

## 오늘 배운 것
- 2026-07-12 기준 Node.js v20은 EOL이고 v24/v22가 LTS, v26은 Current라 새 백엔드 기본 런타임은 고정값보다 지원 상태 기준으로 재검토해야 합니다. [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- Fastify v5는 Node.js v20+를 요구하고, `querystring`, `params`, `body`, `response` 스키마에 축약형이 아닌 전체 JSON Schema를 요구하므로 v4 마이그레이션의 핵심 실패 지점은 스키마입니다. [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- 객체 ID를 받는 API는 객체 단위 권한 검사를 해야 하며, JWT의 사용자 ID 비교만으로 BOLA 방어가 충분하지 않습니다. [OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)
- GraphQL은 인증 뒤에 두되, 필드 단위 인가는 resolver 자체보다 비즈니스 로직 계층에 위임하는 편이 중복과 우회 위험을 줄입니다. [GraphQL Authorization](https://graphql.org/learn/authorization/)
- GraphQL HTTP는 `application/graphql-response+json`을 우선하고, 검증 실패는 보통 400으로 처리하므로 모든 응답을 200으로 고정하는 관성은 피해야 합니다. [GraphQL Serving over HTTP](https://graphql.org/learn/serving-over-http/)
- OpenAPI v3.2.0은 `webhooks`를 1급 필드로 다루고 Schema Object가 JSON Schema Draft 2020-12의 상위 집합이라, REST 요청과 외부 이벤트 수신 계약을 한 명세에서 관리할 수 있습니다. [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/latest.html)

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [OWASP API1:2023 Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)
- [GraphQL Serving over HTTP](https://graphql.org/learn/serving-over-http/)
- [GraphQL Authorization](https://graphql.org/learn/authorization/)
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/latest.html)
- [RFC 9700: Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700.html)
- [OpenTelemetry HTTP Span Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)

## 위키화 후보
- `graphql-over-http-response-semantics` — `application/graphql-response+json`, 검증 실패 400, 부분 성공 2xx 기준 정리
- `openapi-3-2-webhooks-contract` — REST 호출과 외부 이벤트 수신 계약을 한 OpenAPI 문서에서 관리하는 패턴

## 프로필 반영 후보 (저위험)
- API 인가 구현 원칙에 BOLA 객체 단위 권한 검사와 GraphQL 비즈니스 로직 인가를 포함
- OpenAPI 3.2와 JSON Schema 2020-12 기반 계약 우선 설계를 백엔드 설계 용어로 반영

## 승인 필요 (고위험)
- 백엔드 기본 Node.js 버전을 Node 20 고정에서 현재 LTS 기준으로 재검토하도록 프로필 또는 프로젝트 지침 변경
- Fastify v5 신규 기본값 채택 또는 v4에서 v5로의 마이그레이션 규칙을 공식 작업 기준으로 추가

## 신규 도구 후보 (에이전트/스킬)
- [agent] api-contract-reviewer — OpenAPI/GraphQL 명세, 상태 코드, 인증/인가 경계 검토 전담
- [skill] oauth-api-security-checklist — BOLA, PKCE, refresh token rotation, DPoP 적용 여부를 반복 점검
