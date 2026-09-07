---
date: 2026-08-24
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-24

## 오늘 배운 것
- OpenAPI 3.2.0은 최신 공개판이며 `query`, `additionalOperations`, `itemSchema`를 지원한다. 다만 `QUERY`는 IETF 초안 연동이라 기본값보다 선택 적용이 안전하다.
- `itemSchema`는 JSONL, NDJSON, SSE 같은 스트리밍 응답을 항목 단위로 계약화할 때 유용하다.
- `RateLimit`와 `RateLimit-Policy`는 아직 Internet-Draft라 전역 강제 응답 계약보다 선택 계약으로 둔다.
- Fastify `handlerTimeout`은 503과 `request.signal` 중단만 보장하므로 DB, `fetch`, stream에 명시적으로 `signal`을 전달해야 한다.
- Node.js Permission Model은 stable이고 `--permission-audit`는 차단 전 권한 수집 단계에 적합하지만 악성 코드 격리 수단은 아니다.
- PostgreSQL 18은 `scram-sha-256`이 기본이고 MD5 암호는 deprecated라 신규 DB에서 MD5 생성을 금지하는 정책이 타당하다.

## 출처
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- [OpenAPI latest published version](https://spec.openapis.org/oas/latest.html)
- [RateLimit header fields for HTTP](https://www.ietf.org/archive/id/draft-ietf-httpapi-ratelimit-headers-11.html)
- [Fastify Server Reference](https://fastify.dev/docs/latest/Reference/Server/)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Node.js FFI](https://nodejs.org/api/ffi.html)
- [PostgreSQL 18 Connections and Authentication](https://www.postgresql.org/docs/current/runtime-config-connection.html)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)

## 위키화 후보
- 없음: 관련 OpenAPI 3.2, RateLimit, Fastify, Node Permission Model, npm Trusted Publishing 노트가 이미 존재함.

## 프로필 반영 후보 (저위험)
- Fastify 리뷰 점검어에 `handlerTimeout` 취소 전파와 `request.signal` 전달 여부를 유지한다.
- Node.js 백엔드 하드닝 점검어에 `--permission-audit` 기반 권한 수집 후 enforce 전환 절차를 유지한다.

## 승인 필요 (고위험)
- 신규 REST 명세에서 OpenAPI 3.2 `QUERY`를 기본값이 아닌 선택 실험 기능으로 둘지 승인 필요.
- 신규 PostgreSQL DB 정책에서 MD5 암호 생성을 금지하고 `scram-sha-256`만 허용할지 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-auditor — OpenAPI, RateLimit, 스트리밍 응답 계약의 초안 여부와 도구 호환성을 점검.
