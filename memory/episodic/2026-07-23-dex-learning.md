---
date: 2026-07-23
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-23

웹리서치 산출물 교차검증 결과입니다. WebFetch 권한이 미승인 상태라 직접 재요청(fetch)은 불가했으나, 기존 위키 데이터 및 알려진 사실과의 정합성 대조로 검증했습니다.

**검증 처리**
- 출처 저신뢰(아그리게이터 사이트) → 폐기: Fastify v5.8.0 라우트 timeout(releasebot.io는 비공식 요약 사이트, fastify.dev/CHANGELOG 재확인 전 미채택)
- 세부 수치 과다·확인 불가 → 폐기: TypeScript 6.0 tsconfig 기본값 일괄 변경(strict/types/module/target). 기존 위키는 5.9까지만 검증됨(`concepts-typescript.md`), MS 공식 로드맵상 6.0 존재 여부 자체가 미확인 → 다음 세션 공식 출처 재확인 전까지 보류
- 이미 위키 반영됨(중복) → 신규 채택 제외: Prisma ORM 7 Rust-free(`prisma-v7-마이그레이션-점검-항목에-rust.md`에 이미 등재)
- 공신력 있는 출처 + 기존 사실과 정합 → 채택: Next.js 미들웨어 보안경계 아님(CVE-2025-29927 사례와 정합), Prisma 7.2.0 Studio 신기능, Node.js 보안릴리스 예정 공지, Next.js 15+ 캐싱 기본값 반전(공지 사실은 널리 확인됨, 기존 `next-js-16-x-변경-요약.md`와 보완관계)

## 오늘 배운 것
- Next.js: 미들웨어는 보안 경계가 아니며, 실제 인증/인가는 Route Handler·Server Action·Data Access Layer에서 수행해야 함(CVE-2025-29927 미들웨어 우회 사고 이후 공식 권고)
- Next.js 15+부터 `fetch()`/Route Handler 기본값이 캐시→비캐시로 반전됨. "데이터가 계속 최신으로 보임"의 흔한 원인이므로 캐싱 전략 명시 확인 필요(기존 Next.js 16 `use cache` 노트와 보완)
- Prisma ORM 7.2.0: Studio에 마이그레이션 타임라인·비주얼 diff·실행 SQL 뷰 추가, Prisma Compute는 빌드 실패 시 이메일 알림+스텝별 타임아웃 지원
- Node.js 22/24/26 보안 릴리스 예정 공지(2026-07-27) — ai-ops 백엔드가 Node 22 사용 중이므로 릴리스 후 패치 적용 여부 확인 필요(구체 CVE 내용은 미검증, 예정 사실만 채택)
- (참고, 신규 아님) Prisma ORM 7 Rust-free 엔진 제거는 기존 위키에 이미 반영된 사실로 재확인만 됨

## 출처
- [Prisma ORM 7.2.0 발표](https://www.prisma.io/blog/announcing-prisma-orm-7-2-0)
- [Next.js 보안 모범사례 — 미들웨어는 보안경계 아님](https://www.authgear.com/post/nextjs-security-best-practices/)
- [Node.js 2026년 7월 보안 릴리스 공지](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- [Next.js 15/16 캐싱 기본값 변경 가이드](https://jishulabs.com/blog/nextjs-15-16-features-migration-guide-2026)

## 위키화 후보
- `Next.js 미들웨어=보안 경계 아님`(concepts/) — CVE-2025-29927 계열 실사고 배경 포함해 신규 노트 가치 있음

## 프로필 반영 후보 (저위험)
- Next.js 리뷰 체크리스트에 "인증/인가가 미들웨어에만 있는지" 확인 항목 추가(기존 TS/Zod 체크리스트와 같은 계열)
- Prisma 7.x 리뷰 시 Studio 마이그레이션 diff 뷰 활용 인지(선택적 참고)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 유사 목적의 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재함, 이번 검증도 그 역할로 향후 자동화 가능)

**미해결 사항**: 원 리서치(dex)가 episodic 로그 파일 Write 권한 미승인으로 저장에 실패했다고 보고했습니다. 위 검증 결과를 승인하시면 `episodic/2026-07-23-dex-learning.md` 및 위키화 후보 노트 생성을 진행하겠습니다.
