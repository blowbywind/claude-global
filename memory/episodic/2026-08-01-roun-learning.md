---
date: 2026-08-01
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-01

## 오늘 배운 것
- 2026-08-01 기준 신규 Node.js 백엔드는 v24 LTS 우선, v22 LTS 유지보수 허용이 타당합니다. v20은 EOL이라 신규 표준에서 제외합니다. 출처: [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- Better Auth는 TypeScript 기반 인증 프레임워크로 Hono, passkey, 2FA, 조직, SSO, SCIM 생태계를 확인했습니다. 단, `role` 같은 권한 필드는 `input: false`를 명시해야 합니다. 출처: [Better Auth](https://better-auth.com/), [Better Auth TypeScript](https://better-auth.com/docs/concepts/typescript)
- Better Auth의 `GET /get-session`은 기본적으로 세션 갱신 쓰기를 할 수 있으므로, 읽기 복제본 라우팅 환경에서는 `deferSessionRefresh` 검토가 필요합니다. 출처: [Better Auth Session Management](https://better-auth.com/docs/concepts/session-management)
- Kysely는 테이블, 컬럼, 결과 타입을 추론하는 TypeScript SQL 빌더라 레거시 raw SQL을 ORM으로 급전환하지 않고 타입 안전하게 점진 이행할 때 후보가 됩니다. 출처: [Kysely Introduction](https://kysely.dev/docs/intro)
- PGlite는 WASM Postgres로 단위 테스트, CI, 로컬 개발용 격리 DB 후보입니다. 다만 socket 서버는 단일 연결 기반 multiplexer와 SSL 미지원 제약이 있어 운영 PostgreSQL 대체로 간주하면 안 됩니다. 출처: [PGlite About](https://pglite.dev/docs/about), [PGlite Socket](https://pglite.dev/docs/pglite-socket)
- Connect RPC는 Protobuf 스키마에서 라우팅, 압축, 콘텐츠 협상, 타입 안전 클라이언트를 생성하고 gRPC, gRPC-Web, Connect 프로토콜을 함께 지원하므로 내부 서비스 API 후보입니다. 출처: [Connect Introduction](https://connectrpc.com/docs/introduction/)

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Better Auth](https://better-auth.com/)
- [Better Auth TypeScript](https://better-auth.com/docs/concepts/typescript)
- [Better Auth Session Management](https://better-auth.com/docs/concepts/session-management)
- [Kysely Introduction](https://kysely.dev/docs/intro)
- [PGlite About](https://pglite.dev/docs/about)
- [PGlite Socket](https://pglite.dev/docs/pglite-socket)
- [Connect Introduction](https://connectrpc.com/docs/introduction/)
- [Ory Keto for Ory Network](https://www.ory.com/docs/network/keto)

## 위키화 후보
- Better Auth 보안 구현 체크리스트 — `input: false`, `deferSessionRefresh`, passkey, 2FA, 조직 플러그인 중심
- PGlite 개발용 Postgres 패턴 — 테스트, CI, 로컬 개발 범위와 socket 제약 정리

## 프로필 반영 후보 (저위험)
- 레거시 SQL 마이그레이션 용어에 Kysely 기반 타입 안전 SQL 빌더 점진 이행 추가
- 내부 서비스 API 설계 용어에 Connect RPC 기반 Protobuf 다중 프로토콜 지원 추가

## 승인 필요 (고위험)
- 신규 Node.js 백엔드 기본 런타임을 Node 24 LTS로 격상하고 Node 20 신규 사용 제외
- Better Auth를 인증·인가 기본 후보로 승격할지 검토

## 신규 도구 후보 (에이전트/스킬)
- [agent] backend-auth-reviewer — Better Auth, OAuth, 세션, 권한 필드 입력 노출을 점검
- [skill] typed-sql-migration — raw SQL, Kysely, Prisma 전환 위험과 타입 회귀 테스트를 정리
