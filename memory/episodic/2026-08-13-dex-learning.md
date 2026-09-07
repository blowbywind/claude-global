---
date: 2026-08-13
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-13

## 오늘 배운 것
- Prisma 7(2025-11 GA) 마이그레이션 세부 변경 3건을 원문 fetch로 교차검증 완료: `$use` 미들웨어 완전 제거→Client Extensions(`$extends`)로 대체, `Prisma.validator`→TypeScript `satisfies`로 대체, 자동 시딩(auto-seeding) 제거(명시적 `db seed`만 유지). 기존 위키 체크리스트(`prisma-orm-v7-업그레이드-체크리스트-보강.md`, `prisma-v7-마이그레이션-점검-항목에-rust.md`)엔 `output`/`prisma.config.ts` 필드 정리만 있고 이 3건은 누락 확인 — 신규 보강 가치 있음.
- TanStack npm 공급망 공격(2026-05-13 게시 원문 fetch로 시점 확인: pnpm 11 출시 4-28 → 공격 약 13일 후)은 이미 위키(`2026-상반기-npm-공급망-사고-타임라인-axios-shai.md`)에 별도 출처(orca.security)로 기록되어 있어 신규 아님. "pnpm 11 minimumReleaseAge가 이 공격을 막았을 것"이라는 인과 프레이밍만 미기재 상태.
- pnpm 11 `minimumReleaseAge`/`blockExoticSubdeps`, TS7(tsgo) 프로그래매틱 API 부재 항목은 기존 위키와 일치 확인 — 중복이므로 신규 기록 불필요.
- Fastify v5 `reply.send()`/스키마 생략 관련 주장은 원문 URL이 제시되지 않아("검색결과 종합, 재검증 필요") 교차검증 불가 → 폐기, 채택하지 않음.

## 출처
- [Prisma v6 → v7 migration guide](https://tomodahinata.com/en/blog/prisma-orm-v6-to-v7-migration-guide) — fetch로 본문 직접 확인(2026-06-26 게시)
- [How TanStack's Supply Chain Attack Makes pnpm 11's Security Defaults Essential](https://chyshkala.com/blog/how-tanstack-s-supply-chain-attack-makes-pnpm-11-s-security-defaults-essential) — fetch로 본문 직접 확인(2026-05-13 게시)

## 위키화 후보
- 기존 `prisma-orm-v7-업그레이드-체크리스트-보강.md` 계열 노트에 "`$use`→Client Extensions, `Prisma.validator`→`satisfies`, 자동 시딩 제거" 보강 섹션 추가(신규 노트 난립 대신 기존 concept 보강 권장)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "Prisma 7에서 `$use` 미들웨어 발견 시 Client Extensions(`$extends`) 전환 권고" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 등록 후보(출처-대조-검증기 계열)로 충분, 추가 제안 없음)
