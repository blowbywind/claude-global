---
date: 2026-07-27
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-27

## 오늘 배운 것
- TypeScript 6.0(2026-03-23 출시) 공식 확인: JS 기반 컴파일러의 **마지막 릴리스**이며 `strict` 기본 true, `module` 기본 `esnext`, `target` 기본값이 연도별 최신 ES로 자동 전환됨. 이후 Go 네이티브 TypeScript 7.0(위키 기존 노트: 2026-07-08 GA)으로 이어지는 전환 단계로, 기존 위키의 TS 7.0 GA 노트와 시기적으로 정합함을 확인.
- 이번 리서치의 **Next.js 16**(Turbopack 기본화, Cache Components, DevTools MCP)과 **Fastify v5 세부 브레이킹**(jsonShortHand 제거, hasRoute 정확일치, listen() 가변인자 제거 등)은 원문 대조 결과 사실관계는 맞으나, **이미 위키에 기존 노트로 존재**(각 2026-06-24, 2026-06-21/07-25 학습분) — 완전 중복이라 신규 반영 없음.
- **pnpm 10.26/10.29** 관련 출처(`releases.sh/pnpm`)는 pnpm 공식 사이트가 아닌 제3자 요약 애그리게이터로, "git 호스팅 보안 강화"는 실제로 v10.26이 아닌 v11.11~11.14 항목과 혼동·결합된 오류로 확인 — **전체 폐기**. 비공식 애그리게이터는 버전별 사실 혼동 위험이 있어 향후 pnpm 리서치는 `pnpm.io`/공식 GitHub 릴리스로 교차검증 필요.
- **Prisma Studio Migrations 뷰**(2026-07-17, 타임라인+diff+SQL 통합) 주장은 `prisma.io/changelog` 원문에 "Migrations" 관련 언급 자체가 전무해 환각으로 판정 — **폐기**.

## 출처
- [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) — 검증됨(공식)
- [Next.js 16](https://nextjs.org/blog/next-16) — 검증됨(공식, 단 위키 중복)
- [Fastify V5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/) — 검증됨(공식, 단 위키 중복)

## 위키화 후보
- TypeScript 6.0(JS 기반 마지막 릴리스, strict/ESM/ES 타깃 기본값 전환) — 신규 개념 노트 가치 있음, 기존 `typescript-7-0-ga-...` 노트와 연계해 타임라인 보강.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "TypeScript 6.0+ 프로젝트에서 tsconfig가 `strict: false`/구식 `target`을 명시적으로 덮어쓰고 있는지" 확인 항목 추가(기존 Zod v4/import defer 체크리스트와 같은 계열).

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 출처-대조-검증기는 이미 카탈로그에 있고 이번 턴에 실사용해 폐기 2건 확인, 신규 제안 불요)
