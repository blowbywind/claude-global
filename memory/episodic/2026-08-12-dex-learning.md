---
date: 2026-08-12
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-12

## 오늘 배운 것
- **npm v12(2026-07-08 출시)가 postinstall/preinstall 등 lifecycle script를 기본 차단** — npm registry 직접조회(`dist-tags.latest=12.0.2`, 최초 12.0.0 릴리스일 2026-07-08)로 확정, techtimes 원문에서도 동일 내용 확인. pnpm quarantine(minimumReleaseAge) 원칙과 같은 방향으로 npm 생태계 전체가 수렴 중 — 기존 pnpm quarantine 인사이트에 "npm 자체도 v12부터 네이티브 차단" 사실 추가.
- **Fastify는 여전히 v5 계열이 stable** — registry 직접조회로 `latest=5.11.3`, `next=6.0.0-alpha.0` 확인(리서치가 보고한 5.10.0은 구버전, 5.11.3으로 갱신). v6는 아직 alpha, 정식 릴리스 아님 — 기존 "fastify v5 유지" 체크리스트 인사이트와 일치, 버전 숫자만 갱신.
- **Prisma latest는 7.9.1** — registry 직접조회로 확인(리서치가 보고한 7.8.0은 구버전). 단 "mapped enum이 v6 동작으로 revert됐다"는 주장은 원문(prisma.io 블로그) WebFetch가 권한 거부로 확인 불가해 **폐기**.
- **Next.js 16 브레이킹 체인지 5개 전부 공식문서로 확인**: ①async params/searchParams(sitemap id 포함) ②`middleware.ts`→`proxy.ts` 리네임(edge 런타임 미지원) ③`next/image` 다수 기본값 변경(minimumCacheTTL 60초→4시간, qualities 기본 [75]만, imageSizes에서 16 제거, 로컬 IP 최적화 차단) ④`next lint` 명령 완전 제거(Biome/ESLint 직접 사용) ⑤AMP 전면 제거. 기존 "next-js-16-x-변경-요약" 노트와 중복이라 신규 노트는 불필요, 세부 항목 보강 대상.
- **npm 공급망 공격 사실관계 일부 검증 성공/일부 폐기**: Axios(2026-03, postinstall RAT dropper)·Keyv(Shai-Hulud 계열 웜)는 zscaler·aikido 원문에서 확인. 단 "5월 Tanstack 84개 악성버전"은 제시된 두 출처 어디에도 없어 **폐기**(미검증). 이 주제도 기존 "2026-상반기-npm-공급망-사고-타임라인" 노트와 중복.
- **Biome 채택 확대 주장 중 "Discord/Slack/Vercel/Coinbase" 구체 채택 리스트는 폐기** — reintech 원문에 해당 키워드 전무, byteiota는 JS 렌더링으로 본문 확보 자체 불가. "ESLint 대비 빠른 대안으로 부상"이라는 일반 트렌드 서술은 근거 박약이라 채택 보류.

## 출처
- [npm registry(fastify)](https://registry.npmjs.org/fastify) — 직접 조회, latest 5.11.3
- [npm registry(npm)](https://registry.npmjs.org/npm) — 직접 조회, latest 12.0.2 (2026-07-08 첫 릴리스)
- [npm registry(prisma)](https://registry.npmjs.org/prisma) — 직접 조회, latest 7.9.1
- [npm v12 ships install-script blocking](https://www.techtimes.com/articles/319890/20260708/npm-v12-ships-this-month-blocking-install-scripts-that-enabled-year-supply-chain-attacks.htm) — 본문 확인
- [Axios/LiteLLM 공급망 공격](https://www.zscaler.com/blogs/security-research/supply-chain-attacks-surge-march-2026) — 본문 확인(Tanstack 언급 없음)
- [Keyv 공급망 공격](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack) — 본문 확인
- [Next.js 16 업그레이드 가이드](https://nextjs.org/docs/app/guides/upgrading/version-16) — 공식문서 원문 확인

## 위키화 후보
- npm v12 install-script 기본차단(2026-07-08) — 신규 주제(기존 quarantine/공급망 타임라인 노트와 별개, registry로 실사실 확인됨), `npm-v12-install-script-기본-차단.md` 신규 노트 가치 있음(1건만 제안).

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트 버전 숫자 갱신: Fastify latest 5.11.3, Prisma latest 7.9.1(정확한 출처는 npm registry 직접조회로 대체, 리서치 원안 수치는 폐기).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 후보가 이번에도 유효함을 재확인: nextjs.org는 WebFetch 성공했으나 prisma.io/techtimes/aikido/byteiota는 거부되어 Bash+wget 폴백으로 우회 검증, 신규 에이전트 추가 제안은 보류하고 기존 후보 유효성만 기록)
