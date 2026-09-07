---
date: 2026-08-31
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-31

## 오늘 배운 것
- Node.js 24.20.0 LTS는 2026-08-26 릴리스되었고, `--permission-audit`, `permission.drop`, `AsyncLocalStorage` using scope가 백엔드 런타임 점검어에 들어갈 만합니다. [출처](https://nodejs.org/en/blog/release/v24.20.0)
- Node HTTP 서버의 `keepAliveTimeoutBuffer`는 실제 소켓 타임아웃을 keep-alive 값보다 기본 1000ms 늘려 `ECONNRESET`을 줄입니다. 내장 프록시는 익명화 기능이 아니므로 `HTTP_PROXY`, `NO_PROXY`는 신뢰된 배포 프록시에서만 켜야 합니다. [출처](https://nodejs.org/api/http.html)
- Fastify v5.12.1은 `trustProxy: number` 기반 `X-Forwarded-*` 우회와 root primitive body schema 검증 우회를 함께 막는 보안 릴리스입니다. 숫자형 `trustProxy` 대신 IP, CIDR, custom 함수 검증을 쓰고, primitive body는 객체로 감싸거나 핸들러에서 재검증해야 합니다. [출처](https://github.com/fastify/fastify/releases)
- Prisma 7.10.0은 Prisma 7과 8 병행 실행용 `@prisma/prisma7`과 Prisma Studio 로컬 서버 하드닝을 추가했습니다. Prisma 8 RC8은 기존 migration이 있는 프로젝트에서 빈 DB 기준 전체 생성 계획을 조용히 만들지 않도록 막아, baseline 명시 여부를 리뷰해야 합니다. [출처](https://github.com/prisma/orm/releases)
- PostgreSQL 18은 CSV `COPY FROM`의 `\.` 처리와 `AFTER` trigger 실행 role 기준이 바뀌므로, 오래된 `psql`의 `\copy` 흐름과 트랜잭션 중 role 변경 보안 로직을 업그레이드 리허설에 넣어야 합니다. [출처](https://www.postgresql.org/docs/18/release-18.html)
- Express 5 마이그레이션은 Node.js 18 이상, codemod, async handler 오류 전달, `express.urlencoded`의 `extended: false` 기본값 변경을 같이 회귀 테스트해야 합니다. [출처](https://expressjs.com/en/guide/migrating-5/)

## 출처
- [Node.js 24.20.0 LTS](https://nodejs.org/en/blog/release/v24.20.0)
- [Node.js HTTP API](https://nodejs.org/api/http.html)
- [Fastify trustProxy 보안 권고](https://github.com/fastify/fastify/security/advisories/GHSA-3m5p-2c4r-xxw2)
- [Fastify root primitive schema 보안 권고](https://github.com/fastify/fastify/security/advisories/GHSA-w2qp-rph6-63g4)
- [Fastify releases](https://github.com/fastify/fastify/releases)
- [Prisma ORM releases](https://github.com/prisma/orm/releases)
- [PostgreSQL 18 release notes](https://www.postgresql.org/docs/18/release-18.html)
- [Express 5 migration guide](https://expressjs.com/en/guide/migrating-5/)

## 위키화 후보
- Node.js 내장 프록시와 `keepAliveTimeoutBuffer` 운영 점검어
- Fastify v5.12.1 `trustProxy`, root primitive body schema 보안 점검어

## 프로필 반영 후보 (저위험)
- Fastify 리뷰 점검어에 `trustProxy` 숫자형 금지와 root primitive body schema 회피 확인 추가
- Node.js HTTP 점검어에 `keepAliveTimeoutBuffer`, `NODE_USE_ENV_PROXY`, `HTTP_PROXY`, `NO_PROXY` 신뢰 경계 확인 추가

## 승인 필요 (고위험)
- Node.js 24.20.0을 운영 백엔드 런타임 기준선으로 승격
- Fastify v5 서비스 최소 버전을 5.12.1 이상으로 고정

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-watch — Node.js, Fastify, Prisma, PostgreSQL, Express 공식 릴리스와 보안 권고를 대조해 백엔드 리뷰 점검어를 생성
