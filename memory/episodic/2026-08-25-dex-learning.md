---
date: 2026-08-25
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-25

## 오늘 배운 것
- Fastify 최신 버전이 5.12.1로 확인됨(npm 배포 페이지, 위키 기존 기록 5.11.3보다 상향) — 단 WebFetch 권한이 이번 세션에서도 거부되어 직접 재검증은 못 했고, dex의 npm 페이지 조회 결과만 근거임. 신뢰도 중간, 다음 세션에서 재확인 권장.
- Next.js 보안 릴리스가 8/26 예정에서 8/25로 앞당겨져 16.3.3·15.5.24가 실제 배포됨(critical 2건 대응), 8/26 critical 1건 추가 예정 — 기존 위키 `next-js-2026.md`(2026-08-22 작성, "8/26 예정"으로 기록)의 예측이 실제로 확정된 것이므로 갱신 가치 있음.
- Vitest 4.0 정식 GA를 공식 블로그(vitest.dev)로 확인 — Browser Mode 정식(stable), Playwright/WebdriverIO 프로바이더 분리 설치, `expect.schemaMatching` 신규. 기존 위키의 Vitest 4 마이그레이션 노트는 서드파티 블로그(qaskills.sh) 출처였는데, 이번엔 공식 출처로 보강 가능.
- Node.js 22.23.2 보안패치(2026-07-29), npm v12 postinstall 차단 관련 내용은 위키에 이미 동일 사실이 기록되어 있어(`node-js-22-24-26-2026.md`, `npm-v12-install.md`) 신규 정보 아님 — 중복 확인만 하고 폐기.

## 출처
- [Fastify — npm registry versions](https://www.npmjs.com/package/fastify?activeTab=versions)
- [Upcoming Next.js Security Release (August 2026)](https://nextjs.org/blog/upcoming-nextjs-security-release-august-2026)
- [Vitest 4.0 공식 블로그](https://vitest.dev/blog/vitest-4)

## 위키화 후보
- (없음 — 이번 항목은 모두 기존 노트 갱신 대상이며 신규 개념 노트가 필요할 만큼 독립적이지 않음)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트의 Fastify 버전 인사이트를 "5.11.0/5.11.3 최신" → "5.12.1 확인(재검증 필요, WebFetch 차단으로 미확정)"으로 갱신
- Next.js 위키 노트(`next-js-2026.md`)를 "8/26 예정" → "8/25 16.3.3·15.5.24 배포 완료, 8/26 추가 critical 1건 대기"로 사실 확정 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 위키에 이미 등록된 "출처-대조-검증기" 계열 후보로 충분히 커버됨, 중복 제안 생략)
