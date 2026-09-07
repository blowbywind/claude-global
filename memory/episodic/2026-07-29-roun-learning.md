---
date: 2026-07-29
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-29

## 오늘 배운 것
- RFC 9728 기반 OAuth 보호 리소스 API는 리소스별 메타데이터를 설계 대상으로 보고, `authorization_servers`는 allowlist와 상호 검증 없이 신뢰하지 않는다. 출처: [RFC 9728](https://datatracker.ietf.org/doc/rfc9728/)
- OpenAPI 3.2.0은 2025-09-19 릴리스됐고, `additionalOperations`로 고정 HTTP 메서드 외 작업을 명세화할 수 있다. 출처: [OpenAPI 3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- OpenAPI 3.2.0의 `itemSchema`는 SSE, JSONL, NDJSON, multipart 같은 스트리밍 순차 미디어 타입을 항목 단위로 검증하는 계약에 유용하다. 출처: [OpenAPI 3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- OpenAPI 설명의 Markdown은 HTML과 script를 포함할 수 있으므로 문서 포털, 코드 생성기, 내부 뷰어에서 sanitization을 필수 점검한다. 출처: [OpenAPI 3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- Node.js Permission Model은 v22.13.0, v23.5.0부터 stable이지만 악성 코드 sandbox가 아니라 신뢰한 코드의 실수 방지 장치로 봐야 한다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- Ajv는 JSON Schema를 애플리케이션 코드 수준으로 신뢰하므로 사용자 제공 schema에는 길이, 깊이, 느린 정규식, `allErrors` 운영 사용 제한을 둔다. 출처: [Ajv Security considerations](https://ajv.js.org/security.html)

## 출처
- [RFC 9728: OAuth 2.0 Protected Resource Metadata](https://datatracker.ietf.org/doc/rfc9728/)
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Ajv Security considerations](https://ajv.js.org/security.html)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- [PostgreSQL Generated Columns](https://www.postgresql.org/docs/current/ddl-generated-columns.html)

## 위키화 후보
- OpenAPI 3.2 스트리밍 계약 패턴 — `itemSchema`, SSE, JSONL, NDJSON, multipart 검증 기준
- Ajv untrusted schema hardening — 사용자 제공 JSON Schema의 길이, 깊이, ReDoS 제한

## 프로필 반영 후보 (저위험)
- API 계약 검토 항목에 OpenAPI Markdown sanitization과 external reference cycle 처리를 추가
- JSON Schema 검증 설계 용어에 Ajv untrusted schema, schema depth limit, regex ReDoS 방어 추가

## 승인 필요 (고위험)
- OAuth 보호 리소스 API에 RFC 9728 discovery 문서와 `authorization_servers` 상호 검증을 기본 설계 규칙으로 격상
- Node.js 백엔드 실행 기본값에 `--permission` 적용 여부 검토

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-security-review — OpenAPI 문서 보안, 스트리밍 계약, schema 검증 위험 점검
- [agent] oauth-resource-security-reviewer — RFC 9728, DPoP, audience token, issuer allowlist 점검
