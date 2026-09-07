---
date: 2026-08-10
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-10

## 오늘 배운 것
- Next.js App Router 미들웨어 인가우회 CVE 2건, NVD 공식 데이터베이스 대조로 실존·내용 일치 확인: **CVE-2026-44575**(`.rsc`/segment-prefetch URL로 미들웨어 인가 우회, 15.2.0~15.5.15 및 16.0.0~16.2.4 영향, 15.5.16/16.2.5에서 수정) — 미들웨어만으로 인가 처리 금지, Route Handler/Server Action/DAL 이중검증 필요.
- **CVE-2026-64642**: Turbopack + `config.i18n.locales` 단일 엔트리 구성 시 미들웨어/프록시 기반 인증 우회(16.0.0~16.2.10, 16.2.11에서 수정) — 위와 동일 계열.
- **Prisma 7.1.0** 공식 X 게시물 원문 대조 확인: read replica 확장 지원 + SQL Comments(관측성) 기능 추가.
- **Fastify v5**: querystring 세미콜론 구분자 기본 비활성(`useSemicolonDelimiter: false`), `jsonShortHand` 제거로 schema에 `type` 명시 필수 — 공식 GitHub 마이그레이션 가이드 원문 대조로 확인. 단, 기존 위키 노트 2건(`fastify-md-에-v5-브레이킹-변경-보강...`, `fastify-md-계열-노트에-v5-세부-브레이킹...`)에 이미 동일 내용 있음 → **신규 아님, 중복**.
- **[정정]** "npm 12·pnpm 10·yarn 4.14·bun 모두 라이프사이클 스크립트 기본 차단 전환" 주장은 원문(mondoo.com)과 불일치 — 원문은 오히려 "npm CLI는 여전히 뒤처짐(기본 미차단)"이라 명시. 확인된 것은 pnpm(2025년 말~v11 유지, 기존 인사이트와 일치)과 Yarn Berry(v2부터 `enableScripts:false` 기본, v4.14 특정 아님) 뿐. npm·bun "전환" 부분은 폐기.
- **[폐기]** "Prisma 8 로드맵에 CipherStash 연동 검색가능 암호화 + Object Store 추가" — 원문(prisma.io 공식 블로그) 직접 대조 결과 CipherStash·Object Store 언급이 전혀 없음(MongoDB 지원 맥락의 일반적 "field-level encryption" 언급만 존재). 환각으로 판단해 폐기.
- z.record() OpenAPI(`propertyNames`) 비호환 세부사항은 출처가 GitHub 이슈 목록 페이지(특정 이슈 링크 아님, JS 렌더링이라 직접 대조 불가)로 근거 약함 → 채택 보류.

## 출처
- [CVE-2026-44575 (NVD)](https://nvd.nist.gov/vuln/detail/CVE-2026-44575)
- [CVE-2026-64642 (NVD)](https://nvd.nist.gov/vuln/detail/CVE-2026-64642)
- [Prisma 공식 X 게시물](https://x.com/prisma/status/1996228052733632911)
- [Fastify V5 Migration Guide (공식)](https://github.com/fastify/fastify/blob/main/docs/Guides/Migration-Guide-V5.md)
- [mondoo.com 원문 대조 결과 — npm 기본차단 아님](https://mondoo.com/blog/npm-supply-chain-security-package-manager-defenses-2026)
- [Prisma 8 로드맵 원문 — CipherStash/Object Store 미언급 확인](https://www.prisma.io/blog/the-next-evolution-of-prisma-orm)

## 위키화 후보
- CVE-2026-44575/64642 신규 개념 노트: "Next.js 미들웨어=보안경계 아님, 인가는 Route Handler/Server Action/DAL에도" 원칙(코드 리뷰 체크리스트 계열과 별개로 축적 가치)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "Next.js 미들웨어 단독 인가 의존 여부 확인(.rsc/segment-prefetch 우회 사례 존재)" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
- [agent] 출처-대조-검증기 — 이번 검증에서 실제 2건(Prisma8 CipherStash, npm 기본차단 주장) 환각 폐기·1건 근거약함 보류가 발생해 기존 제안(2026-07-16 이후 반복 제기)의 유효성이 재확인됨. 신규 제안 아님, 기존 대기건 유지.
