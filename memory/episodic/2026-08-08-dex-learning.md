---
date: 2026-08-08
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-08

## 오늘 배운 것
- Axios(주간 1억+ 다운로드) npm 패키지가 메인테이너 계정 탈취로 악성 버전(1.14.1/0.30.4) 배포, phantom dependency(`plain-crypto-js@4.2.1`)의 postinstall로 크로스플랫폼 RAT 설치 — 기존 "postinstall 라이프사이클 스크립트 발견 시 pnpm quarantine 확인" 체크리스트의 필요성을 실사례로 재확인.
- Shai-Hulud 웜이 npm 패키지 796개(월 다운로드 1.32억)를 감염시킨 사건 확인 — 공급망 위협이 지속 확대 중.
- **[신규]** Fastify CVE-2026-3635: `X-Forwarded-Proto`/`X-Forwarded-Host` 헤더를 신뢰하는 trustProxy 설정에서 인증 우회 가능 — 기존 위키 "Fastify CVE 4건(33805/33806/3419/25224)" 노트에 없는 5번째 취약점. ai-ops 프록시(Caddy 뒤 Fastify) 구성 점검 필요.
- TypeScript 7 RC(tsgo, Go 네이티브 컴파일러)가 2026-06-18 공개, `tsc` 대비 약 10배 빠르며 `typescript` 패키지 안에 그대로 통합 — 향후 `tsc --noEmit` 검증 속도 개선 여지.
- Prisma 7(2025-11)에서 Rust 엔진(~14MB)을 TS/WASM 컴파일러로 교체, 번들 약 90% 감소·쿼리 최대 3.4배 향상. Drizzle(7.4KB, 외부 의존성 0)은 여전히 더 가볍지만 격차는 좁혀짐 — ai-ops Prisma 유지 판단에 참고용.

**검증 중 폐기한 항목** (인용 출처 원문 대조 결과 근거 없음):
- pnpm `strictDepBuilds` 기본값이 2025년 말 `true`로 전환됐다는 주장 — 인용된 bastion.tech 글에는 해당 내용이 없음(설정 자체는 pnpm 공식 문서에 실재하나 "기본값 전환 시점" 주장은 미확인).
- Node.js `__proto__` 헤더 → `headersDistinct` 오염 크래시 사례, BullMQ/webhook `setTimeout` 조용한 실패 사례 — 인용된 betterstack 글 원문에 두 내용 모두 전혀 없음(환각 의심, 전량 폐기).

## 출처
- [Axios NPM Package Compromised (Trend Micro)](https://www.trendmicro.com/en_us/research/26/c/axios-npm-package-compromised.html)
- [npm Supply Chain Security in 2026 (Mondoo)](https://mondoo.com/blog/npm-supply-chain-security-package-manager-defenses-2026)
- [CVE-2026-3635: Fastify Authentication Bypass Vulnerability (SentinelOne)](https://www.sentinelone.com/vulnerability-database/cve-2026-3635/)
- [TypeScript 7.0 RC: Go Compiler 10x Faster](https://tech-insider.org/ie/typescript-7-native-compiler-2026/)
- [Drizzle ORM vs Prisma (Bytebase)](https://www.bytebase.com/blog/drizzle-vs-prisma/)

## 위키화 후보
- Fastify CVE-2026-3635(인증 우회, trustProxy 헤더 신뢰 문제) — 기존 "Fastify CVE 4건" 노트에 5번째 항목으로 추가(같은 계열 축적).

## 프로필 반영 후보 (저위험)
- TypeScript 7(tsgo) RC 출시 사실 — 기존 Zod v4/import defer 구버전 패턴 체크리스트와 별개로, "향후 tsc 검증 고속화 가능성" 참고 사실로 인지.
- Prisma 7 Rust-free 엔진 전환(번들↓90%, 쿼리↑3.4배) — 기존 "Prisma 7.x Studio diff 뷰" 인사이트와 같은 계열로 축적.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 리서치는 사실 확인성 정보 위주로 자동화 후보 없음)
