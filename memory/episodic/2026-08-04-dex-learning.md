---
date: 2026-08-04
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-04

## 오늘 배운 것
- **keyv/cacheable npm 공급망 공격(2026-08-04 발생)**: keyv 메인테이너 계정 탈취 → `keyv@6.0.0` 등에 악성 preinstall 훅(`setup.mjs`) 배포, Bun 런타임으로 자격증명 탈취·재유포. 3개 독립 보안 매체(TheHackerNews·Aikido·Socket.dev)가 동시 보도해 신빙성 높음. 단, 이번 세션은 WebFetch/WebSearch 권한이 미승인 상태라 원문 직접 대조는 못 했습니다(정황상 신뢰하되 출처 등급은 "3중보도, 미fetch"로 표기).
- **ai-ops 직접 점검 결과(제가 Bash로 재확인 완료)**: `autobots/frontend/pnpm-lock.yaml`에 `keyv@4.5.4`만 존재 확인(악성 `6.0.0` 미만 → 안전), `/home/bbw/ai-ops/.claude/settings.json`에 `SessionStart` 훅 없음 확인 — 덱스 주장과 일치, 직접 재검증 완료.
- **Node.js 24.19.0(LTS)/26.6.0(Current) 출시(2026-08-03)**: crypto 모듈 3분할, streams 성능 개편. 단일 매체(LinuxCompatible) 출처라 참고용.
- **Fastify 최신 5.10.0**: npm/GitHub Releases 공식 출처라 신뢰도 높음, ai-ops 백엔드 Fastify 버전 대조 시 참고.
- **Prisma 8 CipherStash 필드 암호화 + S3 호환 Object Store**: Prisma 공식 Changelog 출처라 신뢰도 높음.
- **Next.js 16 함정(`route.ts`+`page.tsx` 공존 시 라우트 우선, App Router에서 `next/router` 오용)**: 출처가 비공식 블로그(tech-insider.org) 단일건이라 확정 사실보다 참고 수준으로 분류.

## 출처
- [The Hacker News](https://thehackernews.com/2026/08/keyv-linked-npm-worm-poisons-hundreds.html)
- [Aikido](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack)
- [Socket.dev](https://socket.dev/blog/popular-npm-packages-in-the-keyv-and-cacheable-namespaces-compromised-in-active-supply-chain)
- [LinuxCompatible](https://www.linuxcompatible.org/story/nodejs-24190-and-2660-released-crypto-backend-split-and-streams-overhaul)
- [Prisma Changelog](https://www.prisma.io/changelog)
- [npm fastify](https://www.npmjs.com/package/fastify?activeTab=versions)

## 위키화 후보
- `wiki/concepts/keyv-cacheable-npm-supply-chain-2026-08.md` — 공급망 공격 개요 + ai-ops 영향 없음(안전버전 확인) 결과 기록, 향후 유사 공격 대응 체크리스트 시드로 가치 있음.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "postinstall/preinstall 라이프사이클 훅을 갖는 신규/업데이트 의존성 발견 시 pnpm quarantine 여부 + 메인테이너 계정 탈취 공급망 공격 이력 확인" 항목 추가(기존 pnpm 빌드 스크립트 차단 인사이트 계열에 축적).

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — "출처-대조-검증기" 유형 에이전트는 이미 후보로 존재. 단, 이번 세션에서도 WebFetch/WebSearch 권한 미승인으로 검증이 막힌 사례가 반복 확인됐습니다. 2026-07-16/07-22/07-29에 이어 2026-08-04에도 재발 — "리서치-검증-권한-정합기" 후보의 설정(`settings.json`) 점검을 사용자께 재상신 드립니다.)
