---
date: 2026-08-24
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-24

## 오늘 배운 것
- Next.js 16.3(8/3 정식 릴리스, nextjs.org 원문 직접 대조 완료): dev 세션 메모리 최대 90% 절감(Turbopack 디스크캐시+메모리 eviction 기본 활성화), `next build`가 TypeScript 7 컴파일러 사용 가능(`typescript@^7` 설치만으로 적용) — 정확히 확인됨, 신규 세부사항.
- Prisma 8(2026-08-02 changelog, prisma.io 원문 wget 대조 확인): 레거시 `@db.*` 애트리뷰트 제거(breaking), 기존 DB의 인덱스·RLS 정책 introspect 지원, `updateMany`/`createMany`가 트랜잭션 미지원 드라이버 어댑터에서도 동작 — 기존 "Prisma 8 RC watchlist"(8/21, 성능 벤치마크 중심) 노트와 다른 각도(기능 변경)라 보강 가치 있음.
- Next.js 8/26 예정 보안 릴리스(Critical 1건, 16.3.3/15.5.24)·Node.js 22 7/29 패치(undici 포함)·TypeScript 7 GA(컴파일러 API 부재)·npm v12 allowScripts 기본 차단은 모두 위키에 이미 기록된 사실(각 8/22, 7/29, 8/8, 8/12)과 일치 — 중복 확인만, 신규 기록 불필요.
- Mastra AI npm 공급망 공격 주장(6월, 140+ 패키지, 북한 배후)은 출처 URL(microsoft.com 보안블로그)이 403 Forbidden으로 접근 불가해 대조검증 실패 → **폐기**(원문 미확인 주장은 채택하지 않음).

## 출처
- [Next.js 16.3](https://nextjs.org/blog/next-16-3) — 원문 대조 확인
- [Prisma Changelog 2026-08-02](https://www.prisma.io/changelog/2026-08-02) — 원문 대조 확인

## 위키화 후보
- Prisma 8 changelog(8/2) 기능 변경분(레거시 `@db.*` 제거·인덱스/RLS introspect·`updateMany`/`createMany` 트랜잭션 무관 동작) — 기존 RC watchlist 노트와 별개 각도라 보강 노트 1건 가치 있음.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "Next.js 16.3+ 도입 시 `next build`의 TypeScript 7 컴파일러 옵션(`typescript@^7`) 활용 여부 확인" 항목 경량 추가 검토.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
