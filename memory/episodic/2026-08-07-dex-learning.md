---
date: 2026-08-07
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-07

## 오늘 배운 것
- 이번 리서치 산출물 6개 핵심 주장을 실제 fetch 대조한 결과 **완전 확인 0건**, 불일치 4건, 확인불가 2건으로 검증 실패율이 매우 높아 대부분 위키 반영을 보류합니다.
- pnpm v11 `minimumReleaseAge` 기본값 1440분(1일)만 socket.dev 원문에서 실제 확인됨 — 단 기존 위키 노트(`pnpm-minimumreleaseage-기본값-1440분...md`, 2026-07-31)에 이미 반영되어 있어 신규 사항 아님.
- Fastify GHSA-247c-9743-5963 재확인 결과, 실제 내용은 "HTTP smuggling"이 아니라 **Content-Type 헤더 앞 공백을 이용한 body schema 검증 우회**(CVE-2026-33806)이며 패치 버전도 v5.8.5(리서치 보고서의 v5.7.2는 오류) — 기존 위키 노트(`fastify-cve-4건-cve.md`)는 이 사실을 이미 정확히 담고 있어 정정 불필요.
- Prisma "Compute" 퍼블릭 베타 주장은 인용된 Prisma 공식 블로그 본문에 해당 용어가 아예 등장하지 않음(실제로는 "Prisma Next" 리브랜딩 글) — 폐기.
- Next.js standalone 메모리 누수 + `NEXT_PRIVATE_DEBUG_CACHE` 주장은 인용된 pockit.tools 글 본문에 관련 단어가 전혀 없음 — 폐기. Next.js 4계층 캐시 모델(Medium)과 Prisma v7.4/7.5/7.7 세부기능(공식 changelog)은 각각 접근 차단·SPA 렌더링으로 대조 자체가 불가해 미확인 상태로 폐기.

## 출처
- [pnpm — Mitigating supply chain attacks](https://pnpm.io/supply-chain-security) (기존 위키 노트 근거, 재확인만)
- [Fastify GHSA-247c-9743-5963](https://github.com/advisories/GHSA-247c-9743-5963) (내용 정정 재확인)
- ※ 그 외 리서치 보고서 인용 4건은 대조 결과 불일치/확인불가로 출처 채택 보류

## 위키화 후보
- 없음 — 제안된 "Next.js 4계층 캐시 모델" 신규 노트, "Prisma 7.4~7.7 버전별 신기능" 보강 2건 모두 출처 대조 실패로 반려.

## 프로필 반영 후보 (저위험)
- 없음

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서 6건 중 5건(83%)이 불일치/확인불가로 드러나 리서치 산출물 신뢰도가 매우 낮았음. 기존 후보 제안(9건 중 2건 폐기 사례)보다 실패율이 훨씬 높아, 웹리서치 산출물의 상시 자동 대조 필요성이 재확인됨(기존 후보 유지, 우선순위 상향 권고).
