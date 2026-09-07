---
date: 2026-08-05
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-05

## 오늘 배운 것
- **npm v12(2026-07)가 postinstall 등 라이프사이클 스크립트·Git 의존성·원격 소스 설치를 기본 차단** — ai-ops 프론트엔드는 npm 기반(`npm run build`)이라 sharp 등 postinstall 의존 빌드 도구 영향 여부를 배포 전 확인 필요. 다만 출처가 techtimes.com 1건(2차 매체)뿐이고, 이번 세션은 WebFetch/WebSearch 권한이 없어 npm 공식 블로그/GitHub changelog로 직접 대조하지 못했습니다(기존 인사이트 `[2026-07-16]`류 권한 비일관성 문제가 오늘도 재현 — `리서치-검증-권한-정합기` 카탈로그 항목과 동일 패턴).
- **Mastra AI npm 스코프 140개+ 패키지 공급망 침해(2026-06-17, Sapphire Sleet/BlueNoroff, postinstall 훅 매개)** — 출처는 Microsoft Security Blog로 신뢰도 높음. 위키의 기존 "2026 상반기 npm 공급망 사고 타임라인" 노트에 Axios·Shai-Hulud·Mini Shai-Hulud만 있고 Mastra 건은 누락 확인 → 추가 가치 있음.
- Fastify v6 미출시(v5.10.x 최신), pnpm 11 quarantine 기본값 승격, Next.js 16 cacheComponents, TypeScript 7.0 GA, Axios postinstall RAT(2026-03-30)는 **위키에 이미 상세 기록됨** — grep 대조 결과 중복이라 신규 반영 대상 아님(리서치 결과의 "위키 대조 결과" 진술과 일치).

## 출처
- [Postinstall Payload Inside Mastra npm Supply Chain Compromise](https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/) — Mastra 침해 (신규, 신뢰도 높음)
- [npm v12 Ships This Month, Blocking Install Scripts](https://www.techtimes.com/articles/319890/20260708/npm-v12-ships-this-month-blocking-install-scripts-that-enabled-year-supply-chain-attacks.htm) — npm v12 (신규, 미검증·2차 매체 단일 출처)

## 위키화 후보
- 기존 노트 `concepts/2026-상반기-npm-공급망-사고-타임라인-axios-shai.md`에 Mastra AI 사건(2026-06-17, 140+ 패키지, 19분, postinstall) 절 추가

## 프로필 반영 후보 (저위험)
- (없음 — npm v12는 단일 2차 출처·미검증 상태라 체크리스트 반영은 보류, 공식 출처 확인 후 재제안 권고)

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
