---
date: 2026-09-06
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-09-06

## 오늘 배운 것
- Node.js `AsyncLocalStorage.snapshot()`은 안정 API이며, Node 24 이상에서는 `defaultValue`와 `name`으로 요청 컨텍스트 저장소의 기본값과 식별명을 명시할 수 있다.
- `node:sqlite`의 `SQLTagStore`는 LRU prepared statement 캐시와 템플릿 값 파라미터 바인딩을 제공하지만, `DatabaseSync` 기반 API는 동기 실행이고 `node:sqlite` 자체도 릴리스 후보라 API 핫패스 도입 전 블로킹 검토가 필요하다.
- Node.js Permission Model은 안정 기능이지만 악성 코드 샌드박스가 아니며, `permission.drop()`은 이후 권한 검사에만 영향을 주고 이미 열린 파일 디스크립터, 소켓, 자식 프로세스, 워커 스레드는 닫지 않는다.
- Fastify `handlerTimeout`은 라우트별 재정의가 가능하고 만료 시 503과 `request.signal` 중단을 발생시키지만, 비동기 작업은 협력적으로만 멈추므로 DB·HTTP·스트림에 신호를 직접 전달해야 한다. `bodyLimit` 기본값은 1 MiB다.
- GraphQL.js v17은 Node.js 22, 24, 25, 26 이상을 요구하므로 Node 20 백엔드는 런타임 업그레이드를 먼저 분리해야 한다. `AbortSignal`은 리졸버 공유 신호이며 `info.getAbortSignal()`로 하위 작업에 전달해야 실제 취소된다.
- Prisma v7 문서 기준으로 기본 동작에서는 `undefined`가 쿼리에서 생략되며, `strictUndefinedChecks`를 켠 경우에만 명시적 `undefined`가 런타임 오류가 된다. PATCH·GraphQL 입력은 `null`, 생략, `Prisma.skip` 의미를 분리해야 한다.

## 출처
- [Node.js Async Context](https://nodejs.org/api/async_context.html)
- [Node.js SQLite](https://nodejs.org/api/sqlite.html)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Fastify Server Reference](https://fastify.dev/docs/latest/Reference/Server/)
- [Fastify Routes Reference](https://fastify.dev/docs/latest/Reference/Routes/)
- [GraphQL.js v16 to v17 Upgrade Guide](https://www.graphql-js.org/upgrade-guides/v16-v17/)
- [GraphQL.js Handling Abort Signals](https://www.graphql-js.org/docs/abort-signals/)
- [Prisma Null and Undefined](https://www.prisma.io/docs/orm/v7/prisma-client/special-fields-and-types/null-and-undefined)

## 위키화 후보
- `node:sqlite SQLTagStore 핫패스 적용 기준` — LRU 캐시, 파라미터 바인딩, 동기 API 블로킹 검토.
- `Prisma strictUndefinedChecks와 Prisma.skip 입력 계약` — PATCH·GraphQL 선택 입력의 생략 의미 분리.

## 프로필 반영 후보 (저위험)
- Node.js 점검어에 `SQLTagStore`, LRU prepared statement cache, 동기 API 블로킹 검토 추가.
- Prisma 입력 계약 점검어에 `strictUndefinedChecks`, `Prisma.skip`, `exactOptionalPropertyTypes` 추가.

## 승인 필요 (고위험)
- GraphQL.js v17 도입 기준을 Node.js 22 이상으로 고정하고 Node 20 백엔드 신규 사용을 중단할지 승인 필요.
- Prisma `strictUndefinedChecks` 기본 활성화는 기존 `undefined` 생략 의존 쿼리를 깨뜨릴 수 있어 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-cancellation-audit — Fastify `request.signal`과 GraphQL `info.getAbortSignal()`의 하위 DB·HTTP 전파를 점검.
- [agent] api-input-contract-reviewer — PATCH·GraphQL·Prisma 입력에서 `null`, `undefined`, 생략 의미를 검토.
