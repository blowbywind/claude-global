---
date: 2026-07-18
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-18

## 오늘 배운 것
- Node.js 24가 2025-10-28부터 LTS 전환 완료(2028-04까지 지원). 22→24 전환 시 native addon·fetch/Undici·TLS·CI 이미지 재검증 필요(WebFetch로 공식 릴리스 노트 직접 재확인).
- Fastify v5 브레이킹 변경 중 기존 위키(logger/hijack/constraints/socket)에 없던 항목: querystring 세미콜론 구분자 폐지, `.listen()` variadic 시그니처 제거, params 객체 prototype 제거(`toString` 등 상속 불가), `hasRoute()` 정확 문자열 매칭만 지원, Node 20+ 필수.
- Next.js 16: PPR(Partial Prerendering)과 React Compiler가 정식 stable, Node 20.9+/TypeScript 5.1+ 필수 — 기존 위키 노트(Turbopack/`use cache`/DevTools MCP)에 없던 버전 요구사항 보완.
- TypeScript 5.9: `import defer` 구문(네임스페이스 import만 허용, `--module preserve/esnext`에서만 동작), `--module node20` 안정화(`target: es2023` 내포), `tsc --init` 기본값이 `module: nodenext` + `target: esnext`로 변경(WebFetch로 공식 문서 직접 재확인 완료).
- Prisma 7 WASM 쿼리 컴파일러 캐싱 레이어 도입 + `compilerBuild: fast|small` 옵션(v7.3.0) — 공식 도메인 출처지만 이번 세션 도메인 접근 제한으로 직접 재확인은 못함, 낮은 확신도로 채택.

**검증 후 폐기한 항목**
- "TypeScript 6.0 릴리스(`strictInference` 기본화, `moduleResolution: node` deprecated)" — 출처가 비공식 저신뢰 블로그(webnuz.com) 1건뿐이고, 공식 5.9 문서 재확인 결과 이를 뒷받침할 근거 없음. TS팀이 차기 메이저를 네이티브 포트 "7.0"으로 명명한다고 공표한 바 있어 신뢰도 낮음 → 폐기.
- "Prisma 7.5.0 savepoint 기반 nested transaction rollback / 7.7.0 `prisma bootstrap`" — 버전 앵커 없는 범용 changelog URL 1건으로 두 개의 구체적 버전 주장을 뒷받침, 도메인 접근 제한으로 검증 불가 → 폐기(재검증 대상으로만 보류).
- "서버리스 `new PrismaClient()` 반복 생성 안티패턴" — 신규 정보 아님(기존 위키 `PrismaClient 프로세스당 1개 재사용` 원칙과 중복) → 제외.

## 출처
- [Node.js v24.11.0 릴리스 노트](https://nodejs.org/en/blog/release/v24.11.0)
- [Fastify V5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Next.js 16 업그레이드 가이드](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [TypeScript 5.9 릴리스 노트](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html)
- [Prisma ORM 7.0.0 발표](https://www.prisma.io/blog/announcing-prisma-orm-7-0-0)（캐싱 레이어 항목, 저확신도）

## 위키화 후보
- `fastify.md`에 v5 브레이킹 변경 보강 섹션 추가(querystring/listen/params prototype/hasRoute/Node20+) — 기존 노트와 동일 출처(공식 Migration Guide), 누락분만 보충.
- `next-js-16-x-변경-요약.md`에 PPR/React Compiler stable + Node/TS 버전 요구사항 보강.

## 프로필 반영 후보 (저위험)
- TypeScript `import defer`, `--module node20`을 코드 리뷰 시 구버전 패턴 감지 체크리스트에 추가(기존 Zod v4 체크리스트와 같은 계열로 축적).
- Node.js 24가 현재 LTS라는 사실 갱신(과거 "22 고정 추정" 오해 방지용 참고 사실).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
