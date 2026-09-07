---
date: 2026-06-21
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-06-21

## 오늘 배운 것

- **Fastify v5 response schema 필수화** — response schema 미지정 시 `fast-json-stringify` 대신 `JSON.stringify()` 폴백되어 직렬화 느리고 민감 필드 누출 위험. 모든 라우트에 `response: { 200: { type: 'object', ... } }` 필수.
  
- **Fastify v5 주요 브레이킹 4종** — ① `logger` → `loggerInstance` (커스텀 로거 주입 방식 변경), ② `reply.sent = true` → `reply.hijack()` (응답 가로채기), ③ `version`/`versioning` → `constraints` (라우트 버전 제약), ④ `request.connection` → `request.socket`. querystring·params·body 스키마에 `type` 필드 완전 필수화(jsonShortHand 제거). [출처](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)

- **Node.js 24 (2025.10 LTS 전환 예정) 핵심 3가지** — ① `node index.ts` 직접 실행(ts-node·tsc 빌드 불필요), ② Undici 7.0에서 **HTTP/3 stable** 지원 + 요청 30% 빠름, ③ V8 13.6으로 JS 실행 16.8% 향상·메모리 13.6% 감소. [출처](https://blog.logrocket.com/node-js-24-new/)

- **BullMQ v5 Worker 분리 원칙** — Worker를 API 서버와 **별도 프로세스/컨테이너**로 분리해야 큐 백로그가 API 응답에 영향 안 줌. `removeOnComplete: true` 미설정 시 완료 잡이 Redis에 무한 누적 → 일 10K 잡 기준 수 주면 GB 단위 낭비. [출처](https://1xapi.com/blog/bullmq-5-background-job-queues-nodejs-2026-guide)

- **BullMQ Flow Producers (DAG 잡)** — v5에서 부모-자식 잡 의존성 그래프 구성 가능. 자식 잡 병렬 실행 후 전체 완료 시 부모 트리거. 이메일 발송·PDF 생성 등 단계별 비동기 파이프라인에 적합. OpenTelemetry 텔레메트리 내장 지원. [출처](https://dev.to/young_gao/bullmq-job-queues-background-processing-in-nodejs-done-right-5306)

- **BullMQ 잡 멱등성** — 잡이 타임아웃 후 재시도될 때 이중 처리(이메일 2회 발송·중복 결제) 방지 필수. 잡 ID를 비즈니스 키로 사용하거나 DB `ON CONFLICT` upsert로 멱등 보장.

## 출처
- [V5 Migration Guide | Fastify](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Fastify v5 breaking changes: worth the upgrade? – Encore Blog](https://encore.dev/blog/fastify-v5)
- [Node.js 24 is here: What's new and what to expect - LogRocket Blog](https://blog.logrocket.com/node-js-24-new/)
- [BullMQ 5 Background Jobs in Node.js (2026 Guide) | 1xAPI](https://1xapi.com/blog/bullmq-5-background-job-queues-nodejs-2026-guide)
- [BullMQ Job Queues in Node.js: Background Processing Done Right (2026) - DEV Community](https://dev.to/young_gao/bullmq-job-queues-background-processing-in-nodejs-done-right-5306)

## 위키화 후보
- `bullmq-v5-patterns.md` — BullMQ v5 Worker 분리, removeOnComplete, Flow Producer(DAG), 멱등성 패턴 정리
- `fastify-v5-migration-checklist.md` — v4→v5 브레이킹 변경 4종 + response schema 필수화 체크리스트

## 프로필 반영 후보 (저위험)
- Node.js 24 native `.ts` 실행 — ts-node 없이 `node index.ts` 가능, 신규 프로젝트 세팅 시 빌드 단계 간소화 고려
- BullMQ v5 Flow Producers — DAG 잡 의존성 패턴, 비동기 파이프라인 설계 시 활용

## 승인 필요 (고위험)
_(없음)_

## 신규 도구 후보 (에이전트/스킬)
- `[skill] fastify-v5-audit` — 기존 Fastify v4 코드에서 v5 브레이킹 변경(loggerInstance·hijack·constraints·schema type) 자동 탐지 후 마이그레이션 diff 제안


## 추가 학습 (19:01 UTC)
---

## 오늘 배운 것

- **BullMQ 5.71 FlowProducer**: 잡 간 DAG 의존성 정의 가능 — 부모 잡은 모든 자식 잡 완료 후 자동 실행. 멀티스텝 파이프라인(예: 파일업로드 → 변환 → 알림)을 큐 레벨에서 표현. OpenTelemetry 내장 지원도 포함됨. [(출처)](https://1xapi.com/blog/bullmq-5-background-job-queues-nodejs-2026-guide)

- **BullMQ `removeOnComplete` 미설정 = Redis 메모리 폭탄**: 완료된 잡이 영구 축적 → 10k jobs/day 기준 수 주 내 수 GB. `removeOnComplete: { count: 1000, age: 86400 }` 패턴으로 TTL 강제 설정 필수. [(출처)](https://dev.to/young_gao/bullmq-job-queues-background-processing-in-nodejs-done-right-5306)

- **pg-boss: Redis 없는 PostgreSQL 전용 큐 옵션**: `SELECT ... FOR UPDATE SKIP LOCKED`로 원자적 잡 획득 + ACID 보장. 단 처리량 상한 ~100-200 jobs/sec. 스택에 Redis 없고 처리량이 낮다면 pg-boss가 BullMQ보다 운영 단순. [(출처)](https://www.pkgpulse.com/guides/bullmq-vs-bee-queue-vs-pg-boss-job-queues-nodejs-2026)

- **Fastify rate-limit 키잉 전략**: 인증 엔드포인트 → user ID / API key로 키잉 (IP 기반은 NAT 공유 환경에서 오탐). 멀티인스턴스 → Redis 스토어 필수. 슬라이딩 윈도우 카운터(O(1)) 권장. 429 응답에 `Retry-After` 헤더 포함 여부 테스트로 검증. [(출처)](https://dev.to/ansman58/stopping-api-abuse-building-a-high-performance-rate-limiter-with-redis-fastify-44e5)

- **AsyncLocalStorage (Node.js 22 LTS): 요청 컨텍스트 전파 표준**: requestId·tenantId·userId를 함수 인자로 드릴링 없이 전파. 오버헤드 < 4% (I/O 바운드 워크로드에서 사실상 0). OpenTelemetry·Sentry 기본 채택 메커니즘. [(출처)](https://1xapi.com/blog/node-asynclocalstorage-request-context-2026)

- **Fastify TypeBox 타입 프로바이더**: `@fastify/type-provider-typebox` — 라우트 스키마 정의 한 번으로 TypeScript 타입 추론 + Ajv v8 런타임 검증 동시 처리. 별도 타입 파일 관리 불필요. [(출처)](https://github.com/fastify/fastify-type-provider-typebox)

---

## 출처
- [BullMQ 5 Guide (1xAPI)](https://1xapi.com/blog/bullmq-5-background-job-queues-nodejs-2026-guide)
- [BullMQ Job Queues Done Right (DEV)](https://dev.to/young_gao/bullmq-job-queues-background-processing-in-nodejs-done-right-5306)
- [BullMQ vs pg-boss 2026 (PkgPulse)](https://www.pkgpulse.com/guides/bullmq-vs-bee-queue-vs-pg-boss-job-queues-nodejs-2026)
- [High-Performance Rate Limiter with Redis & Fastify (DEV)](https://dev.to/ansman58/stopping-api-abuse-building-a-high-performance-rate-limiter-with-redis-fastify-44e5)
- [AsyncLocalStorage 2026 (1xAPI)](https://1xapi.com/blog/node-asynclocalstorage-request-context-2026)
- [fastify-type-provider-typebox (GitHub)](https://github.com/fastify/fastify-type-provider-typebox)

---

## 위키화 후보
- **BullMQ 프로덕션 패턴** — FlowProducer DAG, removeOnComplete TTL, sandboxed worker 분리, failed 잡 알림 파이프라인 구성 종합
- **AsyncLocalStorage 요청 컨텍스트 패턴** — requestId/tenantId 전파, Fastify 훅 연동, 로깅·오텔 통합 구현 패턴

---

## 프로필 반영 후보 (저위험)
- BullMQ 잡 등록 시 `removeOnComplete`/`removeOnFail` TTL 설정 필수 (미설정 = Redis 메모리 누수)
- Fastify `@fastify/rate-limit`: 인증 엔드포인트는 `keyGenerator`로 userId 기반 키잉, 미인증은 IP+User-Agent 조합

---

## 승인 필요 (고위험)
(없음)

---

## 신규 도구 후보 (에이전트/스킬)
(없음)


## 추가 학습 (19:01 UTC)
---

## 오늘 배운 것

- **Fastify v5: `request.socket` 필수** — `request.connection`은 v5에서 완전 제거. 소켓 정보 접근 시 `request.socket` 사용. 또한 Logger 옵션이 `loggerInstance` 직접 주입 불가 → Pino 옵션 객체 또는 `true`만 허용. DELETE + 빈 body + `Content-Type: application/json` 조합도 v5부터 거부.
- **Fastify v5: querystring/body 풀 JSON Schema 필수** — `jsonShortHand`(축약형 `{ type: 'string' }`) 제거됨. TypeBox `t.Object({...})` 패턴이 이미 풀 스키마 형식이라 사실상 영향 없음.
- **Prisma v7 (2025-11 출시): Rust → TypeScript 엔진** — 크로스 언어 직렬화 제거로 쿼리 최대 **3.4× 빠름**, 번들 90% 감소(14MB → 1.6MB). 네이티브 바이너리 의존성 사라짐 → Docker 이미지 경량화 및 Cold Start 개선.
- **DPoP (RFC 9449): Bearer 토큰 탈취 무력화** — 클라이언트가 요청마다 `DPoP` 헤더에 단발성 JWT 첨부. 서버는 `cnf.jkt`(공개키 썸프린트)를 Access Token에 바인딩 → 토큰 탈취 후 재사용 불가. OAuth 2.1·MCP 모두 공개 클라이언트에 DPoP 권장. Node.js 구현은 `jose` 라이브러리 사용.
- **DPoP 재전송 방지**: 서버가 허용 시간 창 내 `jti`를 Redis에 저장해 proof 중복 사용 차단. 공개 클라이언트 대상 서버 발급 nonce(RFC 9449 §8) 추가 시 캡처-재전송 공격도 방어.

---

## 출처

- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Fastify v5 Breaking Changes — Encore Blog](https://encore.dev/blog/fastify-v5)
- [Prisma 7 Release: Rust-Free, Faster, and More Compatible](https://www.prisma.io/blog/announcing-prisma-orm-7-0-0)
- [Prisma ORM Without Rust: Latest Performance Benchmarks](https://www.prisma.io/blog/prisma-orm-without-rust-latest-performance-benchmarks)
- [DPoP RFC 9449 Explained — WorkOS](https://workos.com/blog/dpop-rfc-9449-explained)
- [RFC 9449 공식 문서](https://datatracker.ietf.org/doc/html/rfc9449)

---

## 위키화 후보

- **Prisma v7 TypeScript 엔진** — Rust 제거, 3.4× 빠름, 번들 90% 감소, 배포 단순화 포인트 정리
- **DPoP (RFC 9449) 구현 패턴** — proof JWT 구조(`jwk/htm/htu/jti/ath`), `jose` 라이브러리 코드 예시, nonce 처리, Redis jti 블랙리스트 패턴

---

## 프로필 반영 후보 (저위험)

- Fastify v5: `request.connection` 제거 → `request.socket` 사용; Logger는 Pino 옵션만 허용
- Prisma v7: Rust 엔진 → TypeScript 엔진, 신규 프로젝트에서 v7 기본 채택 권장 (번들·속도 동시 개선)

---

## 승인 필요 (고위험)

_(없음)_
