---
date: 2026-07-24
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-24

## 오늘 배운 것
- Node.js 프로덕션 기준은 `Active LTS` 또는 `Maintenance LTS`입니다. 2026-07-24 기준 `v24`, `v22`가 LTS이고 `v26`은 `Current`라 신규 백엔드 기본값으로 고정하지 않습니다. [출처](https://nodejs.org/en/about/previous-releases)
- Fastify v5는 Node.js v20 이상만 지원하지만, 현재 Node.js v20은 EOL입니다. 신규 Fastify v5 서버는 Node.js v22 또는 v24 위에서 잡고, v5 마이그레이션 시 `querystring`, `params`, `body`, `response`에 full JSON Schema를 둬야 합니다. [출처](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- OAuth 2.1은 아직 `Active Internet-Draft v15`입니다. 안정 기준은 RFC 9700으로 두고, public client PKCE, redirect URI exact match, implicit grant 회피, password grant 금지를 구현 원칙으로 유지합니다. [출처](https://datatracker.ietf.org/doc/rfc9700/)
- OAuth 보안 업데이트 초안의 Audience Injection 방어는 client assertion의 `audience`를 전송 대상 endpoint URI 하나로 정확히 제한하는 방향입니다. 아직 초안이므로 추적 항목으로만 둡니다. [출처](https://datatracker.ietf.org/doc/draft-ietf-oauth-security-topics-update/)
- OpenAPI 3.2.0의 Schema Object는 JSON Schema Draft 2020-12 기반이며, 검증용 예시는 Schema Object의 `examples` 배열 사용이 우선입니다. [출처](https://spec.openapis.org/oas/latest.html)
- GraphQL over HTTP는 Stage 2 Draft입니다. `application/graphql-response+json`, POST `Content-Type`, GET mutation 금지와 별개로, 인가는 GraphQL 계층보다 비즈니스 로직 계층에 위임하는 원칙을 유지합니다. [출처](https://graphql.github.io/graphql-over-http/draft/)

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Evolving the Node.js Release Schedule](https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [OAuth 2.1 Authorization Framework Draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/)
- [RFC 9700 OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/rfc9700/)
- [OAuth Security Topics Update Draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-security-topics-update/)
- [RateLimit Header Fields Draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/latest.html)
- [GraphQL over HTTP Draft](https://graphql.github.io/graphql-over-http/draft/)
- [GraphQL Authorization](https://graphql.org/learn/authorization/)
- [RFC 9457 Problem Details](https://datatracker.ietf.org/doc/rfc9457/)
- [OpenTelemetry Node.js Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)

## 위키화 후보
- OAuth client assertion audience exact endpoint URI - Audience Injection 방어 초안 추적 노트
- OpenTelemetry Node.js bootstrap order - 앱 코드보다 먼저 계측 초기화하는 패턴

## 프로필 반영 후보 (저위험)
- OpenTelemetry Node.js 계측 용어에 `NodeSDK`, `getNodeAutoInstrumentations`, `--import` 선초기화 반영
- Fastify v5 마이그레이션 점검어에 full JSON Schema와 response schema 필수화를 추가

## 승인 필요 (고위험)
- 전역 백엔드 기본 런타임을 2026-07-24 기준 `Node.js v24 LTS 우선, v22 유지보수 허용, v26 프로덕션 제외`로 구체화할지 검토
- `RateLimit`와 `RateLimit-Policy`를 공통 API 응답 계약에 강제할지 검토. 아직 Internet-Draft라 변경 가능성 있음

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-standards-watch - Node.js, Fastify, OAuth, OpenAPI, GraphQL, RateLimit 공식 상태를 날짜와 함께 재검증하고 초안과 RFC를 분리하는 루틴
