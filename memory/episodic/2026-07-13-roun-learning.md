---
date: 2026-07-13
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-13

## 오늘 배운 것
- REST 오류 응답은 신규 포맷을 만들기 전에 RFC 9457의 `application/problem+json` 기반 Problem Details를 우선 검토합니다. RFC 9457은 RFC 7807을 대체합니다.
- 생성·수정 요청 재시도는 `Idempotency-Key`를 받아 최초 처리 결과를 재사용하는 정책으로 중복 실행을 줄일 수 있습니다. 다만 Stripe 문서는 표준이 아니라 검증된 구현 사례로만 반영합니다.
- OpenAPI로 단일 요청 계약을 잡고, Arazzo로 여러 API 호출의 순서·입출력 의존성을 별도 워크플로 계약으로 표현할 수 있습니다.
- 이벤트 기반 API 계약은 AsyncAPI v3의 `channel`, `operation`, `message` 분리와 `send`·`receive` 모델을 기준으로 잡으면 발행·구독 관점 혼동을 줄일 수 있습니다.
- GraphQL HTTP 서버는 `application/graphql-response+json` 응답을 지원하고, 클라이언트는 `Accept`에서 이를 우선 요청해야 오류 시 HTTP 상태 코드 의미가 더 명확해집니다.
- Express 5 마이그레이션에서는 기존 라우트 패턴이 깨질 수 있습니다. `/*`는 `/*splat` 또는 `/{*splat}`, `?` 선택 문법은 중괄호 문법으로 바꿔야 합니다.

## 출처
- [RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html)
- [Stripe API: Idempotent requests](https://docs.stripe.com/api/idempotent_requests)
- [Arazzo Specification](https://spec.openapis.org/arazzo/latest.html)
- [AsyncAPI: Migrating to v3](https://www.asyncapi.com/docs/migration/migrating-to-v3)
- [GraphQL over HTTP draft](https://graphql.github.io/graphql-over-http/draft/)
- [Express: Migrating to 5](https://expressjs.com/en/guide/migrating-5/)
- [Zod: JSON Schema](https://zod.dev/json-schema)
- [OpenTelemetry: JavaScript zero-code instrumentation](https://opentelemetry.io/docs/zero-code/js/)

## 위키화 후보
- `problem-details-rfc9457` — REST 오류 응답 표준 포맷과 확장 필드 설계 원칙
- `arazzo-api-workflows` — OpenAPI 이후의 다단계 API 워크플로 계약화

## 프로필 반영 후보 (저위험)
- REST 오류 응답 설계 용어에 `Problem Details`, `application/problem+json`, RFC 9457 반영
- 재시도 안전성 설계 용어에 `Idempotency-Key` 기반 중복 실행 방지 반영

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-review — OpenAPI, Arazzo, AsyncAPI, GraphQL HTTP 계약을 검토하고 오류·재시도·인가 누락을 점검하는 스킬
