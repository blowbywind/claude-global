---
date: 2026-08-09
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-09

## 오늘 배운 것
- OpenAPI 3.2의 `query` HTTP method, 중첩 태그, 스트리밍 미디어 타입 지원은 확인됐고, Swagger UI/Client/Editor/ApiDOM도 2026년 4월 10일 3.2 지원을 공개했습니다. 도입 전 코드 생성기와 문서화 도구 호환성 확인이 필요합니다. 출처: [OpenAPI 3.2](https://www.openapis.org/blog/2025/09/23/announcing-openapi-v3-2), [Swagger 3.2 지원](https://swagger.io/blog/swagger-launches-support-for-openapi-3-2-0/)
- Node.js Permission Model은 stable이며 `--permission-audit`로 차단 예정 접근을 관찰할 수 있습니다. 다만 악성 코드 샌드박스가 아니고 일부 초기 로딩 경로와 기존 파일 디스크립터 우회가 있으므로 격리 수단이 아니라 권한 감사와 하드닝 도구로 봐야 합니다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- Zod 4는 stable이고 `z.toJSONSchema()`를 공식 지원합니다. Fastify, OpenAPI 스키마 단일 원천 후보로 유효하지만 breaking changes가 있으므로 v3 마이그레이션 테스트가 필요합니다. 출처: [Zod 4 Release Notes](https://zod.dev/v4)
- AsyncAPI 3.0은 request/reply, `send`/`receive`, 서버 `host`/`path`/`protocol` 분리를 확인했습니다. 큐와 이벤트 계약은 OpenAPI에 끼워 넣기보다 AsyncAPI로 분리 관리하는 편이 적합합니다. 출처: [AsyncAPI 3.0.0 Release Notes](https://www.asyncapi.com/blog/release-notes-3.0.0)
- Valkey 9.0의 hash field expiration, atomic slot migration, cluster mode numbered databases는 확인됐고, 2026년 7월 21일 9.1.1과 9.0.5 보안 릴리스가 원격 코드 실행 취약점 수정을 포함합니다. 캐시와 세션 저장소에는 기능 채택보다 패치 기준이 먼저입니다. 출처: [Valkey 9.0](https://valkey.io/blog/introducing-valkey-9/), [Valkey Releases](https://github.com/valkey-io/valkey/releases)
- `RateLimit`과 `RateLimit-Policy`는 2026년 5월 23일 갱신된 active Internet-Draft이며 2026년 11월 24일 만료 예정입니다. 공통 API 계약 강제 전에는 draft 추적 표기를 유지해야 합니다. 출처: [IETF RateLimit Draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)

## 출처
- [Announcing OpenAPI v3.2](https://www.openapis.org/blog/2025/09/23/announcing-openapi-v3-2)
- [Swagger launches support for OpenAPI 3.2.0](https://swagger.io/blog/swagger-launches-support-for-openapi-3-2-0/)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Zod 4 Release Notes](https://zod.dev/v4)
- [AsyncAPI 3.0.0 Release Notes](https://www.asyncapi.com/blog/release-notes-3.0.0)
- [Valkey 9.0](https://valkey.io/blog/introducing-valkey-9/)
- [Valkey Releases](https://github.com/valkey-io/valkey/releases)
- [RateLimit header fields for HTTP](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/)

## 위키화 후보
- OpenAPI 3.2 도구 호환성 체크리스트: Swagger 지원 이후 코드 생성기, 게이트웨이, 클라이언트별 지원 상태 추적
- Valkey 9.x 보안 패치 기준: 9.1.1/9.0.5 보안 릴리스와 원격 코드 실행 CVE 추적

## 프로필 반영 후보 (저위험)
- Node.js 백엔드 하드닝 점검어에 `--permission-audit` 기반 권한 감사 추가
- 이벤트 계약 리뷰 용어에 AsyncAPI 3.0 `send`, `receive`, request/reply 유지

## 승인 필요 (고위험)
- OpenAPI 3.2 `QUERY`와 스트리밍 계약을 신규 REST 명세 기본값으로 올릴지 승인 필요
- `RateLimit`/`RateLimit-Policy`는 아직 Internet-Draft이므로 공통 API 응답 계약 강제 여부 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-compat-check — OpenAPI, AsyncAPI, RateLimit draft 상태와 도구 호환성 점검 자동화
- [agent] backend-runtime-hardener — Node Permission Model 감사, node:sqlite 동기 경로, Valkey 패치 기준 점검
