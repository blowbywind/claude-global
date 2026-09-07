---
date: 2026-07-30
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-30

## 오늘 배운 것
- 2026-07-30 기준 Node.js는 `v26` Current, `v24`·`v22` LTS, `v20` EOL입니다. 백엔드 기본 런타임 문서에서 `Node.js 20 LTS` 고정은 더 이상 맞지 않습니다.
- Node.js 2026-07-29 보안 릴리스는 `22.x/24.x/26.x`에 영향을 주는 Permission Model 권한 우회, HTTPS Agent mTLS 신원 재사용, HTTP parser request smuggling 등을 수정했습니다. 프록시·런타임 권한 제한을 쓰는 서버는 패치 레벨 확인이 필요합니다.
- OpenTelemetry JS SDK 2.x는 Node `^18.19.0 || >=20.6.0`, TypeScript `>=5.0.4`, ES2022를 요구합니다. 직접 SDK를 쓰는 프로젝트는 런타임, `tsconfig`, `--import` 기반 계측 초기화 회귀를 같이 봐야 합니다.
- OpenAPI 3.2.0은 Path Item에 `query`, `additionalOperations`를 추가했고, 스트리밍 순차 미디어 타입에는 `itemSchema`와 `itemEncoding`을 제공합니다. 검색성 요청, 사내 확장 메서드, 대용량 스트림 계약은 vendor extension보다 표준 필드 우선으로 명세화할 수 있습니다.
- GraphQL over HTTP는 `Accept: application/graphql-response+json`, POST 쿼리·뮤테이션, GET 쿼리 전용, 누락 `Content-Type`의 4xx 처리를 권장합니다. 인증은 GraphQL 진입 전에, 필드 인가는 resolver가 호출하는 비즈니스 로직에서 처리해야 합니다.
- PostgreSQL 18은 AIO, skip scan, `pg_upgrade` 통계 보존, `COPY FROM`의 `REJECT_LIMIT`, MD5 password authentication 폐기 예고를 제공합니다. 업그레이드 리허설에는 planner 변화, 불량 row 상한, SCRAM 전환 감사를 포함해야 합니다.
- RFC 9700은 OAuth 2.1 RFC가 아니라 OAuth 2.0 Security Best Current Practice입니다. OAuth 2.1은 이 권고를 포함할 예정인 별도 진행 중 문서로 봐야 합니다.

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Evolving the Node.js Release Schedule](https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule)
- [Wednesday, July 29, 2026 Security Releases - Node.js](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- [OpenTelemetry JS SDK 2.x Upgrade Guide](https://github.com/open-telemetry/opentelemetry-js/blob/main/doc/upgrade-to-2.x.md)
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- [Serving over HTTP - GraphQL](https://graphql.org/learn/serving-over-http/)
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/current/release-18.html)
- [RFC 9700: Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/info/rfc9700/)

## 위키화 후보
- `GraphQL over HTTP transport compliance test` — `Accept`, `Content-Type`, GET/POST, 상태 코드, 필드 인가 테스트 체크리스트.
- `PostgreSQL 18 COPY reject limit` — 배치 적재에서 `ON_ERROR = 'ignore'`와 `REJECT_LIMIT`로 불량 행 상한을 관리하는 패턴.

## 프로필 반영 후보 (저위험)
- API 계약 검토 항목에 OpenAPI 3.2 `query`, `additionalOperations`, `itemSchema`, `itemEncoding`을 추가.
- PostgreSQL 배치 API 검토 항목에 `COPY FROM ON_ERROR = 'ignore'`와 `REJECT_LIMIT`를 추가.

## 승인 필요 (고위험)
- 전역 Stack Defaults의 `Node.js 20 LTS` 문구를 현재 지원 중인 LTS 기준으로 교체.
- PostgreSQL 신규·마이그레이션 환경에서 MD5 password authentication 금지와 SCRAM 전환 감사를 기본 보안 정책으로 격상.

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-watch — Node.js, PostgreSQL, OpenTelemetry, OpenAPI, GraphQL 공식 릴리스 변경을 백엔드 체크리스트로 요약.
- [agent] api-contract-auditor — OpenAPI·GraphQL 전송 헤더, 메서드, 상태 코드, 스트리밍 계약 테스트를 점검.
