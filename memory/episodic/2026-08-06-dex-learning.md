---
date: 2026-08-06
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-06

## 오늘 배운 것
- **Fastify 신규 CVE 4건**: `CVE-2026-33806`(Content-Type 앞 공백으로 body schema 검증 우회, v5.8.5 수정), `CVE-2026-33805`(`@fastify/reply-from`·`@fastify/http-proxy`의 Connection 헤더 스트리핑→요청 스머글링), `CVE-2026-3419`(`subtypeNameReg` 종료앵커 누락, v5.8.1 수정), `CVE-2026-25224`(Web Streams 응답 backpressure 무시 DoS) — ai-ops는 v5.11.0이라 전부 안전 버전. github.com/advisories, sentinelone.com 등 신뢰 가능 출처로 채택.
- **npm "ChainDrop" 공급망 공격(2026-08-04)**: keyv/cacheable 메인테이너 계정 탈취發 self-propagating worm(440개 패키지·2,200+ 악성 버전), 서명된 provenance도 통과해 암호학적 검증만으론 탐지 불가 — microsoft.com·wiz.io 출처로 채택, 기존 pnpm quarantine/minimumReleaseAge 원칙의 근거 보강.
- **Prisma 2026 상반기 릴리스 타임라인**(v7.4~7.7): prisma.io/changelog 공식 출처, 기존 위키의 세이브포인트 nested transaction(v7.5.0) 노트와 시계열 일치 — 교차검증됨.
- **Next.js 16 함정 항목은 채택 보류**: 출처가 개인 Medium 블로그(SEO성 게시글)로 신뢰도 낮음. 기존 "use client 과다사용" 계열 노트로 충분해 신규 반영 안 함.
- **Node 22 Maintenance LTS 전환 주장은 폐기**: 출처(`us-content-hub.vercel.app`)가 공식 발표가 아닌 정체불명 콘텐츠 사이트(AI 생성 SEO 의심)라 불채택. "Node 24가 현재 LTS"라는 사실 자체는 이미 위키(`node-js-24가-현재-lts...md`, `node-js-22-24-26-2026.md`)에 기록되어 있어 중복이며, Node 22 업그레이드 재검토 제안은 하지 않음.

## 출처
- [GHSA-247c-9743-5963](https://github.com/advisories/GHSA-247c-9743-5963)
- [CVE-2026-33806 (SentinelOne)](https://www.sentinelone.com/vulnerability-database/cve-2026-33806/)
- [CVE-2026-33805 (SentinelOne)](https://www.sentinelone.com/vulnerability-database/cve-2026-33805/)
- [ChainDrop: Anatomy of a Self-Propagating Supply Chain Worm (Microsoft)](https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm/)
- [keyv and cacheable npm supply chain attack (Wiz)](https://www.wiz.io/blog/keyv-and-cacheable-npm-supply-chain-attack)
- [Prisma Changelog](https://www.prisma.io/changelog)

## 위키화 후보
- Fastify CVE 4건(CVE-2026-33806/33805/3419/25224) — 기존 `fastify.md` 계열 후속 노트로 신규 작성 가치 있음
- npm ChainDrop 공급망 공격 + "provenance 서명=신뢰 보장 아님" 논점 — 기존 "2026-상반기-npm-공급망-사고-타임라인" 노트 후속편으로 신규 작성 가치 있음

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "`@fastify/reply-from`·`@fastify/http-proxy` 사용 시 Connection 헤더 스트리핑(요청 스머글링) 검토" 항목 추가
- 기존 pnpm quarantine 원칙 인사이트에 "npm provenance 서명 통과도 신뢰 보장 아님(ChainDrop 사례)" 근거 보강

## 승인 필요 (고위험)
(없음 — Node 22 업그레이드 검토건은 출처 신뢰도 부족으로 이번엔 제안하지 않음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
