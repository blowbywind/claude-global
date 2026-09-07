---
date: 2026-08-03
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-03

## 오늘 배운 것
- npm 패키지 배포는 장기 토큰보다 OIDC 기반 `trusted publishing`을 우선 검토한다. 현재 지원 대상은 GitHub-hosted Actions, GitLab.com shared runners, CircleCI cloud이며 self-hosted runner는 미지원이다. 출처: [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- `trusted publishing`의 provenance 자동 생성은 GitHub Actions와 GitLab CI/CD의 public repository/public package 조건에서만 기본 적용된다. CircleCI trusted publishing은 현재 provenance attestation을 포함하지 않는다. 출처: [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/), [npm Provenance](https://docs.npmjs.com/generating-provenance-statements/)
- `npm stage publish`는 공개 전 staging, maintainer review, 2FA approval을 거치게 하므로 중요 패키지 릴리스 게이트로 적합하다. 단, 신규 패키지는 staging할 수 없고 기존 패키지여야 한다. 출처: [npm Staged Publishing](https://docs.npmjs.com/staged-publishing/)
- Node.js는 `.env` 처리를 `--env-file`, `--env-file-if-exists`, `process.loadEnvFile`, `util.parseEnv`로 직접 지원한다. 단순 서버 부트스트랩에서는 `dotenv` 의존 추가 전 내장 기능을 먼저 검토한다. 출처: [Node.js Environment Variables](https://nodejs.org/api/environment_variables.html)
- Node.js v26 계열에서는 test runner가 `diagnostics_channel`의 `node.test` tracing channel로 실행 이벤트를 내보낸다. 반면 `node:ffi`는 실험 기능이고 잘못된 포인터나 시그니처가 프로세스 충돌과 메모리 손상을 만들 수 있어 보안 리뷰 대상이다. 출처: [Node.js Test Runner](https://nodejs.org/api/test.html), [Node.js 26.1.0 Release](https://nodejs.org/en/blog/release/v26.1.0)
- GraphQL 운영은 production에서 trusted documents를 우선하고, 임의 operation은 validation 이후 complexity 분석과 cost limit을 적용한다. GET 캐싱은 persisted query hash와 조합해야 URL 길이 제한을 피할 수 있다. 출처: [GraphQL.js Operation Complexity Controls](https://www.graphql-js.org/docs/operation-complexity-controls/), [GraphQL Performance](https://graphql.org/learn/performance/), [Apollo Router Demand Control](https://www.apollographql.com/docs/graphos/routing/security/demand-control)

## 출처
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [npm Provenance](https://docs.npmjs.com/generating-provenance-statements/)
- [npm Staged Publishing](https://docs.npmjs.com/staged-publishing/)
- [Node.js Environment Variables](https://nodejs.org/api/environment_variables.html)
- [Node.js Test Runner](https://nodejs.org/api/test.html)
- [Node.js 26.1.0 Release](https://nodejs.org/en/blog/release/v26.1.0)
- [GraphQL.js Operation Complexity Controls](https://www.graphql-js.org/docs/operation-complexity-controls/)
- [GraphQL Performance](https://graphql.org/learn/performance/)
- [Apollo Router Demand Control](https://www.apollographql.com/docs/graphos/routing/security/demand-control)
- [Neon Serverless Driver](https://neon.com/docs/serverless/serverless-driver)

## 위키화 후보
- `npm staged publishing` — trusted publishing과 분리해 승인형 릴리스 게이트로 정리할 가치 있음.
- `Node.js native env loading` — `.env` 내장 로딩과 파싱 API를 서버 부트스트랩 노트로 분리.

## 프로필 반영 후보 (저위험)
- npm 릴리스 검토 용어에 `trusted publishing`, `staged publishing`, provenance 적용 한계를 추가.
- Node.js 점검어에 `--env-file-if-exists`, `process.loadEnvFile`, `node.test` tracing channel을 추가.

## 승인 필요 (고위험)
- npm 공개 패키지 릴리스 기본 정책을 `token disallow` + trusted publisher stage-only + 2FA approval로 격상할지.
- `node:ffi` 사용을 기본 차단하고 예외 승인 대상으로 둘지.

## 신규 도구 후보 (에이전트/스킬)
- [skill] npm-release-security-check — npm 배포 워크플로의 trusted publisher, provenance 조건, staged approval, token policy를 점검.
