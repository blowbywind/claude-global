---
date: 2026-08-27
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-27

## 오늘 배운 것
- Node.js는 현재 v24가 LTS이고 v20은 EOL입니다. 신규 백엔드 런타임 기준은 v24 LTS 이상으로 잡는 판단이 검증됩니다. 출처: https://nodejs.org/en/about/previous-releases
- Node.js Permission Model의 `--permission-audit`는 차단 없이 위반을 기록해 enforce 전 기준선 수집에 적합합니다. 다만 악성 코드 샌드박스가 아니고, 워커 스레드 미상속, 초기화 전 파일 읽기, 기존 파일 디스크립터 우회 한계가 있습니다. 출처: https://nodejs.org/api/permissions.html
- npm 배포는 Trusted Publishing을 장기 토큰보다 우선해야 하며, 최대 보안 구성은 `token disallow`, stage-only publishing, 2FA 승인입니다. private dependency 설치는 읽기 전용 granular token을 분리합니다. 출처: https://docs.npmjs.com/trusted-publishers/
- npm classic token은 2025-12-09 폐지되었고, CI에서 granular write token을 쓸 경우 최대 90일 만료와 2FA 우회 설정을 전제로 합니다. 가능한 경우 OIDC Trusted Publishing으로 전환합니다. 출처: https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/
- Fastify는 reverse proxy 없이 직접 노출될 때 `requestTimeout: 0` 기본값을 그대로 두면 DoS 방어가 약합니다. `handlerTimeout`은 503과 `request.signal` abort만 보장하므로 DB 쿼리, `fetch`, stream에 signal을 직접 전파해야 합니다. 출처: https://fastify.dev/docs/latest/Reference/Server/
- Prisma ORM v7은 `prisma-client` generator와 명시적 `output` 경로가 기본입니다. Docker, monorepo, lint 설정에서 `node_modules/.prisma` 전제를 제거해야 합니다. 출처: https://www.prisma.io/blog/why-prisma-orm-generates-code-into-node-modules-and-why-it-ll-change

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [npm classic tokens revoked](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/)
- [Fastify Server Reference](https://fastify.dev/docs/latest/Reference/Server/)
- [Fastify Hooks Reference](https://fastify.dev/docs/latest/Reference/Hooks/)
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/18/release-18.html)
- [Prisma ORM v7 Client Generation](https://www.prisma.io/blog/why-prisma-orm-generates-code-into-node-modules-and-why-it-ll-change)

## 위키화 후보
- `Fastify requestTimeout 직접 노출 방어` - reverse proxy 없는 배포에서 `requestTimeout` 양수화와 `handlerTimeout` 취소 전파를 묶은 운영 점검 노트

## 프로필 반영 후보 (저위험)
- Fastify 리뷰 점검어에 `requestTimeout` 양수 설정, `handlerTimeout`, `request.signal` 전파 확인을 함께 유지
- Prisma 7 마이그레이션 점검어에 `prisma-client`, 명시적 `output`, import 경로, driver adapter, generated folder lint 제외 확인 추가

## 승인 필요 (고위험)
- 신규 Node.js 백엔드 기본 런타임을 Node 24 LTS 이상으로 고정하고 Node 20 신규 사용을 제외할지
- npm 공개 패키지 릴리스 기본 정책을 Trusted Publishing, token disallow, stage-only, 2FA approval로 격상할지

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-hardening-check - Node.js, npm, Fastify, Prisma, PostgreSQL 업그레이드와 배포 보안 체크를 공식 문서 기준으로 반복 검증
