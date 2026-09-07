---
date: 2026-08-15
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-15

## 오늘 배운 것
- `node:vfs`는 Node.js v26.4.0 추가 실험 기능이며 테스트, fixture, embedded asset에는 유용하지만 보안 경계로 쓰면 안 된다. 출처: https://nodejs.org/api/vfs.html
- `AsyncLocalStorage`는 v24.0.0부터 `defaultValue`, `name` 옵션을 지원하고, v25.9.0 실험 기능인 `withScope()`는 async 함수 첫 `await` 전 caller context 오염 위험이 있어 요청 컨텍스트에는 `run()` 우선이 안전하다. 출처: https://nodejs.org/api/async_context.html
- `--experimental-config-file`은 v26.7.0에서 release candidate가 되었고, `node.config.json`으로 런타임 옵션과 테스트 설정 표준화를 검토할 수 있다. 출처: https://nodejs.org/api/cli.html
- npm v12는 dependency lifecycle script, implicit `node-gyp`, git dependency, remote URL dependency를 기본 차단하며, 2FA-bypass granular token은 2027년 1월경 직접 publish 권한을 잃을 예정이다. 출처: https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/
- Prisma ORM v7.4는 query caching, BigInt precision fix, partial indexes preview를 제공한다. Prisma 8 벤치마크는 raw `pg` peak의 약 87%와 Prisma 7 대비 약 50% 높은 처리량을 보고하지만, 공식 글 기준 production 권장은 아직 Prisma 7이다. 출처: https://www.prisma.io/blog/prisma-orm-v7-4-query-caching-partial-indexes-and-major-performance-improvements, https://www.prisma.io/blog/prisma-next-performance-benchmark

## 출처
- [Node.js Virtual File System 공식 문서](https://nodejs.org/api/vfs.html)
- [Node.js Asynchronous context tracking 공식 문서](https://nodejs.org/api/async_context.html)
- [Node.js Command-line API 공식 문서](https://nodejs.org/api/cli.html)
- [Node.js Single executable applications 공식 문서](https://nodejs.org/api/single-executable-applications.html)
- [npm install-time security and GAT bypass2fa deprecation](https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/)
- [Prisma ORM v7.4 발표 글](https://www.prisma.io/blog/prisma-orm-v7-4-query-caching-partial-indexes-and-major-performance-improvements)
- [Prisma 8 성능 벤치마크](https://www.prisma.io/blog/prisma-next-performance-benchmark)

## 위키화 후보
- `node:vfs` — fixture와 embedded asset용 가상 파일 시스템, 보안 sandbox 아님.
- `node.config.json` — Node.js 런타임 플래그와 테스트 설정 표준화 후보.

## 프로필 반영 후보 (저위험)
- Node.js 런타임 점검어에 `node:vfs`, `AsyncLocalStorage.withScope()` async caveat, `--experimental-config-file`을 추가.
- ORM 성능 리뷰 점검어에 Prisma v7.4 query caching, `partialIndexes`, Prisma 8 release candidate 벤치마크 watchlist를 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-watchlist — Node.js, npm, Prisma 공식 릴리스 노트에서 백엔드 점검어 후보를 추출하고 기존 위키 중복을 표시.
