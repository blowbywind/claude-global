---
date: 2026-08-26
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-26

## 오늘 배운 것
- Node.js 기준선은 `v24.20.0 LTS`가 맞고, `v20`은 종료 상태라 신규 백엔드 런타임 후보에서 제외하는 것이 타당하다.
- Node.js Permission Model은 안정 기능이며 `--permission-audit`로 차단 없이 권한 위반을 관찰할 수 있지만, 악성 코드 샌드박스가 아니므로 운영체제 격리와 함께 봐야 한다.
- Fastify 운영 기본값은 `v5.12.1` 최신 보안 릴리스 유지가 맞고, `v6.0.0-alpha.*`는 프리릴리스라 운영 기본값으로 고정하기 어렵다.
- npm 배포는 장기 토큰보다 OIDC 기반 Trusted Publishing을 우선 검토해야 한다. 지원 범위는 GitHub-hosted Actions, GitLab.com shared runners, CircleCI cloud이며 self-hosted runner는 아직 미지원이다.
- PostgreSQL 18 업그레이드는 AIO, multicolumn B-tree skip scan, OR 인덱스 최적화, `EXPLAIN ANALYZE` 관찰성, OAuth 인증, `md5` 폐기와 SCRAM 전환, wire protocol 3.2 호환성을 함께 재측정해야 한다.
- 브라우저 기반 OAuth는 RFC 10017 BCP 기준으로 Implicit Grant를 금지하고 Authorization Code + PKCE를 사용해야 하며, SPA 인증은 BFF 또는 token-mediating backend 우선 검토가 안전하다.

## 출처
- [Node.js Download](https://nodejs.org/en/download/current)
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js v24.20.0 Permissions](https://nodejs.org/docs/latest-v24.x/api/permissions.html)
- [Fastify Releases](https://github.com/fastify/fastify/releases)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [npm CI/CD Workflow](https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow/)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
- [RFC 10017 OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/rfc10017/)
- [GraphQL.js v16 to v17 Upgrade Guide](https://www.graphql-js.org/upgrade-guides/v16-v17/)
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/v3.2.0.html)

## 위키화 후보
- `RFC 10017 브라우저 기반 OAuth BCP` — SPA 인증에서 Implicit Grant 금지, Authorization Code + PKCE, BFF 우선 패턴 정리
- `GraphQL.js v17 취소 전파와 부분 응답 테스트` — `abortSignal`, `info.getAbortSignal()`, `@defer`/`@stream` 검증 항목 정리

## 프로필 반영 후보 (저위험)
- API 리뷰 점검어에 Node.js `--permission-audit` 관찰 후 `--permission` 전환 절차 유지
- OpenAPI 문서 도구 리뷰에 외부 참조 제한, 참조 순환 감지, Markdown HTML 살균 점검 추가

## 승인 필요 (고위험)
- 신규 Node.js 백엔드 기본 런타임을 Node 24 LTS로 고정하고 Node 20 신규 사용을 중단할지 승인 필요
- 브라우저 기반 OAuth 설계에서 BFF 또는 token-mediating backend 우선 검토를 기본 아키텍처 기준으로 격상할지 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-security-release-gate — Node.js, Fastify, npm, PostgreSQL, OAuth 보안 기준을 공식 출처와 대조하는 릴리스 게이트
- [agent] api-spec-hardening-reviewer — GraphQL/OpenAPI 명세의 취소 전파, 부분 응답, 외부 참조, 순환, 문서 렌더링 보안 검토
