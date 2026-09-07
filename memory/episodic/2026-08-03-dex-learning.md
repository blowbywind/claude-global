---
date: 2026-08-03
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-03

## 오늘 배운 것
- 위키 사전 grep 결과, 이번 리서치 항목 대부분(Fastify v5 브레이킹 변경, Prisma 7 체크리스트, TypeScript 6.0 특징, pnpm quarantine/minimumReleaseAge)이 **이미 위키에 기록된 내용과 중복**입니다. 덱스의 "중복 없이 신규 수집" 진술은 부정확합니다(1단계 리서치 시 위키 검색이 충분치 않았던 것으로 보임).
- Next.js 16: Turbopack이 **dev 모드만** 안정화, 프로덕션 빌드는 아직 Webpack — 다만 기존 위키 노트(`next-js-16-x-변경-요약.md`, lian 작성)는 "Turbopack 기본 번들러 안정화"로 더 넓게 서술해 **상충**합니다. 원문(nextjs.org/blog/next-16) 재확인 전까지는 신뢰도 보류 처리합니다.
- Prisma ORM 7.4.2(2026-02-27) 패치와 `compilerBuild`(fast/small) 옵션은 위키에 없는 **신규 정보**이며 출처가 prisma.io 공식 changelog로 신뢰도 양호합니다.
- TypeScript 6.0 관련 tsgo(네이티브 프리뷰) VSCode 코드베이스 77.8초→7.5초 벤치마크는 devblogs.microsoft.com(기존에도 인용된 공식 출처)의 신규 구체 수치로, 기존 `typescript-6-0...md` 노트를 보강할 가치가 있습니다.
- pnpm 공급망 보안 항목(`--ignore-scripts` CI 기본화, `trustPolicy: no-downgrade` 등)은 **개인 블로그(blog.ogwilliam.com) 단일 출처**뿐이고 공식 pnpm.io 문서와 교차확인이 안 돼 신뢰도 미흡 — 채택 보류.
- "Prisma Next(순수 TypeScript 재작성)" 항목은 인용 URL이 기존 위키에 이미 등록된 것과 동일한 블로그(prisma.io/blog/the-next-evolution-of-prisma-orm)라 신규성 없음(중복).

## 출처
- [Prisma ORM Changelog 2026-02-27](https://www.prisma.io/changelog/2026-02-27) — compilerBuild 신규 확인용(공식, 채택)
- [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) — tsgo 벤치마크 보강용(공식, 채택)
- [Fastify V5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/) — 기존 노트와 전량 중복 확인용
- [Next.js 16 Blog](https://nextjs.org/blog/next-16) — Turbopack 범위 상충 확인 필요(재검증 보류)
- ~~[pnpm 11 Supply Chain Security](https://blog.ogwilliam.com/post/pnpm-11-supply-chain-security)~~ — 비공식 단일 출처, 공식 문서 미대조로 폐기

## 위키화 후보
- `prisma.md` 계열에 "7.4.2 패치 + compilerBuild(fast/small) 옵션" 보강 섹션 1건(신규·공식 출처)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 Prisma `compilerBuild` 옵션 인지(성능/크기 트레이드오프 선택지) 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 후보가 이번 사례로 재확인됨: 실제로 9건 중 다수가 이미 위키 중복이었고 1건은 단일 비공식 출처라 폐기됨. 별도 신규 제안 대신 기존 후보 유효성만 재확인)
