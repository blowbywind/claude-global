---
date: 2026-09-05
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-09-05

## 오늘 배운 것
- OpenAPI 3.2.0은 현재 최신 공개 사양이며, 다중 문서 `$ref`는 대상 문서에 `$self`가 있으면 그 URI 기준으로 참조해야 상호운용성이 깨지지 않습니다.
- OpenAPI 3.2.0의 `itemSchema`는 JSONL, NDJSON 같은 순차 스트리밍 응답의 항목 단위 계약에 적합합니다. `itemEncoding`은 JSONL보다 streaming multipart 쪽 근거가 강합니다.
- 외부 API 응답은 사용자 입력처럼 검증해야 합니다. OWASP API10 기준으로 응답 검증, redirect allowlist, timeout, 리소스 제한을 함께 봐야 합니다.
- Prisma는 매핑되지 않은 DB 드라이버 오류를 `P2039`로 잡을 수 있게 했으므로, 오류 계약 테스트에 추가할 가치가 있습니다.
- Prisma 7.4의 query cache와 Prisma 7.5의 savepoint 기반 nested transaction rollback은 성능 회귀와 트랜잭션 실패 경로 테스트 항목으로 유지해야 합니다.
- npm staged publishing은 npm CLI 11.15.0 이상, Node.js 22.14.0 이상, 기존 패키지, 2FA 승인을 요구합니다. npm v12의 install script 기본 차단과 git/remote URL 의존성 차단은 공급망 리뷰 항목입니다.

## 출처
- [OpenAPI Specification v3.2.0](https://spec.openapis.org/oas/latest.html)
- [OWASP API10:2023 Unsafe Consumption of APIs](https://owasp.org/API-Security/editions/2023/en/0xaa-unsafe-consumption-of-apis/)
- [Prisma ORM P2039 changelog](https://www.prisma.io/changelog/2026-04-27)
- [Prisma ORM v7.4.0 query caching](https://www.prisma.io/changelog/2026-02-11)
- [Prisma ORM v7.5.0 nested transaction savepoints](https://www.prisma.io/changelog/2026-03-11)
- [npm staged publishing docs](https://docs.npmjs.com/staged-publishing/)
- [GitHub Blog: Disrupting supply chain attacks on npm and GitHub Actions](https://github.blog/security/supply-chain-security/disrupting-supply-chain-attacks-on-npm-and-github-actions/)
- [Node.js SQLite documentation](https://nodejs.org/api/sqlite.html)

## 위키화 후보
- `Prisma P2039 unmapped driver error` — DB 드라이버 원시 오류를 API 오류 계약으로 흡수하는 회귀 테스트 패턴.
- `Prisma Client query plan cache` — 같은 쿼리 형태 재사용과 이벤트 루프 블로킹 관찰 기준.

## 프로필 반영 후보 (저위험)
- Prisma 오류 계약 리뷰에 `P2039`, query cache, savepoint nested transaction 실패 경로 점검 추가.
- 외부 API 연동 리뷰에 응답 스키마 검증, redirect allowlist, timeout, 리소스 제한 점검 유지.

## 승인 필요 (고위험)
- npm v12의 install script 기본 차단과 git/remote URL 의존성 차단을 프로젝트 기본 정책으로 적용할지.
- `node:sqlite`를 테스트·관리 도구 범위를 넘어 서비스 저장소 후보로 확대할지.

## 신규 도구 후보 (에이전트/스킬)
- [skill] external-api-consumption-review — 외부 API 응답 검증, redirect allowlist, timeout, 리소스 제한 점검 자동화.
- [skill] prisma-error-contract-audit — Prisma 오류 코드, nested transaction, query cache 회귀 테스트 점검 자동화.
