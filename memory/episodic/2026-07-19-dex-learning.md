---
date: 2026-07-19
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-19

## 오늘 배운 것
- TypeScript 컴파일러 Go 재작성(TS7) 로드맵 진행 중 — 현행 JS 기반 컴파일러 계열은 조만간 마지막 세대. 코드 리뷰 시 레거시 컴파일 옵션(`--target es5` 등) 제거 방향성 인지용.
- Prisma ORM TypedSQL — `sql/` 디렉터리의 raw SQL 파일을 `prisma generate`가 파라미터·결과행까지 타입화된 TS 함수로 컴파일. `$queryRawUnsafe` 의존 코드 발견 시 대안으로 제안 가능(기존 위키 `Prisma ORM 7 업그레이드 체크리스트`에 미기재된 보강 항목).
- Node.js 24: OpenSSL 3.5 적용으로 기본 보안레벨이 상향되어 RSA/DSA/DH 2048비트 미만, ECC 224비트 미만 키가 거부되는 브레이킹 체인지(기존 위키 `Node.js 24 LTS` 노트는 LTS 전환 사실만 기록, 신규 보강 필요).
- npm/pnpm 공급망 보안 강화 흐름: pnpm은 v10부터 postinstall 등 빌드 스크립트를 기본 차단(신뢰 패키지만 명시적 허용 필요) — ai-ops가 pnpm 사용 중이라 향후 "의존성 설치 후 동작 안 함" 이슈 시 최우선 의심 지점으로 추가.
- **재확인(중복)**: Fastify v5 `logger`→`loggerInstance`, querystring/params/body `type` 필드 필수화는 이미 위키 `fastify.md`에 정확히 반영되어 있음을 교차검증으로 재확인. 신규 항목 아님.
- 검증 불가·근거 부족으로 제외: TS 5.9 `strictInference` 플래그, Prisma 7.4/7.5/7.7 마이너 릴리스별 기능 매핑(단일 포괄 URL만 제시), npm v12·pnpm `minimumReleaseAge` 구체 수치 — WebFetch 도구 권한 미승인으로 원문 대조 불가해 보수적으로 배제.

## 출처
- [Fastify V5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Prisma 7 Migration Playbook — Digital Applied](https://www.digitalapplied.com/blog/prisma-7-migration-playbook-from-6-typed-sql-rust-deprecation)
- [Node.js 24 새 기능 — LogRocket](https://blog.logrocket.com/node-js-24-new/)
- [pnpm Supply Chain Security](https://pnpm.io/supply-chain-security)

## 위키화 후보
- `Prisma ORM 7 업그레이드 체크리스트` 노트에 TypedSQL 보강 섹션 추가(신규 노트 아닌 기존 노트 업데이트)
- `Node.js 24가 현재 LTS...` 노트에 OpenSSL 3.5 보안레벨 브레이킹 체인지 보강 섹션 추가

## 프로필 반영 후보 (저위험)
- 코드 리뷰 시 `$queryRawUnsafe` 발견하면 Prisma TypedSQL 대안 제시하는 체크리스트 항목 추가
- pnpm 의존성 설치 이상 시 "빌드 스크립트 기본 차단" 우선 의심 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
**메모**: 이번 검증 단계에서 WebFetch 도구 사용 승인이 나지 않아 원문 직접 대조는 못 했습니다. 대신 기존 위키 노트(`fastify.md`, `prisma-orm-7-업그레이드-체크리스트.md`, `node.md`, `node-js-24가-현재-lts...md`, `pnpm-catalogs...md`)와 교차검증해 중복 항목(Fastify loggerInstance 등)을 걸러내고, 근거가 빈약한 세부 수치(Prisma 마이너 릴리스별 기능, npm/pnpm 정확한 날짜·수치)는 배제했습니다. 위키 파일 수정은 아직 수행하지 않았으며, 반영 여부는 승인 후 진행하겠습니다.
