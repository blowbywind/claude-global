---
date: 2026-07-31
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-31

## 오늘 배운 것
- pnpm v11(공식 문서 원문 확인, pnpm.io/supply-chain-security) `minimumReleaseAge` 기본값이 **1440분(1일)**로 명시 확정. `minimumReleaseAgeExclude`(패키지명·스코프·특정버전 예외), `minimumReleaseAgeStrict` 옵션도 pnpm.io/settings에서 확인됨 — 기존 인사이트(pnpm quarantine)의 구체적 기본값 보강.
- **정정**: `strictDepBuilds`(v10.3.0~)·`blockExoticSubdeps`(v10.26.0~)는 v11 신규가 아니라 이미 이전 v10 마이너부터 기본 `true`였음(공식 settings 페이지 확인). 리서치 원문의 "pnpm 11이 전환" 표현은 부정확 — 채택 시 정정 필요.
- Prisma 프로덕션 실무 팁(신규): 관계 필드 `@@index` 누락이 최다빈도 성능 버그, 서버리스 환경에서 `PrismaClient` 싱글턴 미사용 시 커넥션 폭증 → PgBouncer/Prisma Accelerate/Neon 풀러 권장. `migrate deploy`(프로덕션) vs `migrate dev` 구분은 기존 위키(prisma-orm-7-업그레이드-체크리스트)와 중복이나 원칙 재확인.
- Next.js 16 프로덕션 흔한 실수(신규, 기존 위키에 없음): 전 컴포넌트 `'use client'` 남용, `useEffect` 기반 라우트 전환 처리 오류.
- Zod는 2026-07 기준 v5 미출시(v4 계열 유지), Fastify도 여전히 v5 계열(v6 공식 로드맵 미확인) — 코드 리뷰 시 버전 오인 방지용으로 유효.
- **폐기**: "Shai-Hulud 탐지까지 약 12시간, 1일 쿨다운으로 두 사고 모두 차단 가능" 주장은 인용 출처(nodejs-security.com) 본문을 직접 확인한 결과 해당 수치·분석이 없어 미검증 → 제외. 796개 패키지/월 1.32억 다운로드 통계 자체는 기존 위키(2026-상반기-npm-공급망-사고-타임라인, 2026-07-24)에 이미 기록된 중복 내용.

## 출처
- [pnpm - Mitigating supply chain attacks](https://pnpm.io/supply-chain-security)
- [pnpm - Settings](https://pnpm.io/settings)
- [Prisma in Production: Patterns and Pitfalls](https://dev.to/whoffagents/prisma-in-production-patterns-and-pitfalls-after-a-dozen-projects-2ep8)
- [Prisma 7 Migration Playbook](https://www.digitalapplied.com/blog/prisma-7-migration-playbook-from-6-typed-sql-rust-deprecation)
- [Next.js 16 App Router Production](https://ecosire.com/blog/nextjs-16-app-router-production)
- [Zod 4 Release and Migration (DeepWiki)](https://deepwiki.com/colinhacks/zod/5.3-zod-4-release-and-migration)
- [Fastify Releases (GitHub)](https://github.com/fastify/fastify/releases)

## 위키화 후보
- Prisma `@@index` 누락 + 서버리스 `PrismaClient` 커넥션 폭증(PgBouncer/Accelerate/Neon 풀러) 신규 노트
- Next.js 16 `'use client'` 과다사용·`useEffect` 라우팅 안티패턴 신규 노트

## 프로필 반영 후보 (저위험)
- pnpm `minimumReleaseAge` 기본값 1440분 확정 반영(기존 quarantine 인사이트 구체화 + "v11 전환" 오표현 정정)
- Zod v4 유지/Fastify v5 유지(버전 오인 방지 체크리스트에 추가)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 후보 목록의 "출처-대조-검증기"가 오늘도 유효성 재확인됨, 신규 제안 아님)
