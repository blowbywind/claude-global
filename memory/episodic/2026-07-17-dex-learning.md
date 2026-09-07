---
date: 2026-07-17
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-17

## 오늘 배운 것
- Prisma 6.2.0에서 `omit` API가 정식(GA) 전환, 6.18.0부터 `prisma init` 시 `prisma.config.ts`가 자동 생성되어 v7(Rust 엔진 폐지) 전환 준비 단계에 들어감 — 위키의 "Prisma v7 TypeScript 엔진" 노트가 실제로 빈 스텁(원문 부재로 작성 불가 상태) 상태임을 확인, 이번 리서치로 보강 가능.
- Zod v4 `z.record()`는 key+value 스키마 둘 다 필수(단일 인자 폐지), `ZodError.errors`/`.formErrors` 제거됨 — 위키의 기존 "Zod v4 마이그레이션 노트"(에러맵·uuid·최상위 검증자)에 없는 신규 변경점이라 보강 가치 있음. 다만 출처가 zod.dev 공식 문서가 아닌 커뮤니티 저장소(`github.com/anivar/zod-skill`)라 신뢰도는 중간 수준으로 표시 필요.
- PostgreSQL 18의 `initdb` 기본 checksums 활성화는 기존 "PostgreSQL 18 신규 기능" 노트(uuidv7·virtual column·OAuth 이미 기록됨)에 없는 항목 — 신규 노트보다는 기존 노트 보강 대상.
- Fastify 팀이 프로세스 관리 등 배포 관심사를 앱 내부 처리하는 것을 공식 문서에서 안티패턴으로 명시(수평 확장성 저해) — 출처가 공식 Fastify docs라 신뢰도 높음, 신규 개념.
- Node.js 24 Active LTS 전환 시 OpenSSL 3.5 기본 보안레벨2로 약한 키(2048bit 미만 RSA/DSA/DH, 224bit 미만 ECC) 차단 — 다만 리서치 원문의 "2027.4까지 22 지원" 표기는 Node 22 유지보수 종료일(2027-04)과 혼동된 것으로 의심되어 해당 날짜는 제외하고 반영.
- WebFetch 권한 미부여로 이번 세션에서 1차 출처 직접 검증은 불가했음 — 공식 도메인(prisma.io, postgresql.org, fastify.dev) 출처는 신뢰도 높음으로 채택, 비공식 블로그/개인 저장소(digitalapplied.com, pkgpulse.com, github.com/anivar) 출처는 중간 신뢰도로 표시.

## 출처
- [The next evolution of Prisma ORM](https://www.prisma.io/blog/the-next-evolution-of-prisma-orm)
- [Prisma 7 Migration Playbook](https://www.digitalapplied.com/blog/prisma-7-migration-playbook-from-6-typed-sql-rust-deprecation)
- [zod-skill (커뮤니티, 중간 신뢰도)](https://github.com/anivar/zod-skill)
- [Node.js 24 LTS Upgrade Guide (커뮤니티 블로그, 중간 신뢰도)](https://www.pkgpulse.com/guides/nodejs-24-lts-upgrade-from-node-22-2026)
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/18/release-18.html)
- [Fastify Recommendations](https://fastify.dev/docs/latest/Guides/Recommendations/)

## 위키화 후보
- 기존 빈 스텁 `concepts/prisma-v7-typescript-엔진.md` 보강: omit GA(6.2.0)·prisma.config.ts 자동생성(6.18.0)·Rust 엔진 폐지 예고 반영(신규 노트 생성이 아닌 스텁 보완, 사용자 승인 후 진행).
- `concepts/fastify` 계열 노트에 "배포 관심사(프로세스 관리)는 앱 내부 처리 금지" 안티패턴 항목 추가.

## 프로필 반영 후보 (저위험)
- `z.record()` 2인자 필수·`ZodError.errors` 제거 등 Zod v4 세부 변경점(코드 검토 시 구버전 패턴 감지용 체크리스트에 추가).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
