---
date: 2026-09-03
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-09-03

## 오늘 배운 것
- Node.js `--permission`은 악성 코드 샌드박스가 아니라 신뢰 코드의 실수 방지용이다. `process.permission.drop()`도 기존 파일 디스크립터, 소켓, 자식 프로세스, 워커를 닫지 않으므로 리소스 종료 검토가 필요하다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- `node --run`은 `npm run`과 동일하지 않다. `pre`·`post` 스크립트와 패키지 매니저 전용 환경변수가 빠지므로 CI 대체 전 훅 누락을 확인해야 한다. 출처: [Node.js CLI](https://nodejs.org/api/cli.html)
- Fastify는 최상위 `disableRequestLogging`을 deprecated로 두고 `logController` 사용을 권장한다. 로그 메서드를 재정의하면 `isLogDisabled()` 호출 여부를 직접 확인해야 한다. 출처: [Fastify Server Reference](https://fastify.dev/docs/latest/Reference/Server/)
- Prisma ORM 7.10.0의 `@prisma/prisma7`은 Prisma 7과 Prisma 8 병행 운용을 지원해 점진 마이그레이션 후보가 된다. 같은 릴리스의 Prisma Studio 로컬 서버 바인딩·오리진·CORS 하드닝도 관리자 도구 노출면 점검에 반영할 만하다. 출처: [Prisma ORM Releases](https://github.com/prisma/orm/releases)
- GraphQL.js v17 업그레이드는 Node.js 엔진 요구사항, `defaultValue`에서 `default: { value | literal }`로의 기본값 모델 전환, `abortSignal`·`diagnostics_channel` 기반 실행 관찰을 함께 점검해야 한다. 출처: [GraphQL.js v16 to v17 Upgrade Guide](https://www.graphql-js.org/upgrade-guides/v16-v17/)
- OpenTelemetry JavaScript는 trace·metric은 stable이지만 log는 development 상태다. Hono 검증은 `Content-Type` 누락 시 빈 객체가 들어오고 header 검증 키는 소문자여야 한다. 출처: [OpenTelemetry JavaScript](https://opentelemetry.io/docs/languages/js/), [Hono Validation](https://hono.dev/docs/guides/validation)

## 출처
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Node.js CLI](https://nodejs.org/api/cli.html)
- [Fastify Server Reference](https://fastify.dev/docs/latest/Reference/Server/)
- [Prisma ORM Releases](https://github.com/prisma/orm/releases)
- [GraphQL.js v16 to v17 Upgrade Guide](https://www.graphql-js.org/upgrade-guides/v16-v17/)
- [OpenTelemetry JavaScript](https://opentelemetry.io/docs/languages/js/)
- [Hono Documentation](https://hono.dev/docs/)
- [Hono Validation](https://hono.dev/docs/guides/validation)

## 위키화 후보
- `node --run` CI 대체 점검어 — lifecycle 훅·환경변수 차이를 별도 노트화
- Hono validation 핏폴 — `Content-Type` 누락과 header 소문자 키 테스트 케이스 정리

## 프로필 반영 후보 (저위험)
- Node.js Permission Model을 샌드박스가 아닌 trusted-code guardrail로 분류
- GraphQL.js v17 업그레이드 리뷰에 엔진 요구사항·기본값 모델·취소 전파·추적 채널 점검 포함

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-runtime-upgrade-checker — Node.js, Fastify, Prisma, GraphQL 업그레이드 출처 대조와 회귀 테스트 포인트 추출
