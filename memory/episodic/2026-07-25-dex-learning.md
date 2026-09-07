---
date: 2026-07-25
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-25

## 오늘 배운 것
- **[중복 없음 주장 오류]** 덱스가 "위키 비어있어 중복 없음"이라 했으나 실제로는 `wiki/concepts`에 Fastify v5·Next.js 15·Tailwind v4·Zustand v5·Vitest·PostgreSQL 18 관련 노트가 이미 다수 존재함(교차검증 시 항상 grep 선행 필요).
- **[신뢰 불가 → 폐기]** "Next.js 15는 fetch를 기본으로 강하게 캐싱한다"는 주장은 **오류**. 공식 Next.js 15 블로그(nextjs.org/blog/next-15) 원문 확인 결과 정반대: `fetch`/`GET` Route Handler/클라이언트 네비게이션은 v15부터 **기본 캐시 안 함(uncached by default)**으로 전환됨. 기존 위키 `nextjs.md`(dex 작성, 2026-07-06)도 이미 올바른 방향(캐싱 비활성화)으로 기록돼 있어 이 주장과 정면 모순 — 폐기.
- **[출처 신뢰도 하락 → 동반 폐기]** 위 오류의 출처(prateeksha.com)가 인용한 "react-day-picker v9/date-fns v4 필요" 주장도 동일 출처발 저신뢰 정보라 미검증 상태로 폐기.
- **[검증 통과·신규]** Zustand v5: React 18 미만 지원 중단, `useSyncExternalStore` 네이티브 전환, default export 제거, persist 미들웨어 동작 변경 — 공식 문서(zustand.docs.pmnd.rs) 확인. 기존 위키 `zustand-v5-슬라이스-패턴.md`는 내용 없는 빈 스텁이라 실질적 공백 채움.
- **[검증 통과·보강]** Fastify v5: `jsonShortHand` 제거(querystring/params/body 스키마 전체 명시 필요), `hasRoute()` 정확 문자열 매칭 변경 — 기존 `fastify-v5-마이그레이션...` 노트(출처 동일 URL)에 없는 세부 항목, 보강 가치 있음.
- **[검증 보류·단일 출처]** PostgreSQL 18 AIO(비동기 I/O)로 순차/비트맵 스캔 최대 3배 향상, `pg_upgrade` 통계 유지, `uuidv7()` — WebFetch 권한 미승인으로 원문 재확인 실패. 공식 postgresql.org 발표 내용과 대체로 부합하나 출처가 서드파티(xata.io) 단일이라 재확인 전까지 보류 표기 권장.

## 출처
- [Next.js 15 공식 블로그(캐싱 시맨틱 정정 근거)](https://nextjs.org/blog/next-15)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Zustand v5 Migration Guide](https://zustand.docs.pmnd.rs/reference/migrations/migrating-to-v5)
- [Vitest 4.1 Blog](https://vitest.dev/blog/vitest-4-1.html)
- [PostgreSQL 18 Features (미검증, 재확인 필요)](https://xata.io/blog/going-down-the-rabbit-hole-of-postgres-18-features)

## 위키화 후보
- `zustand-v5-슬라이스-패턴.md` 재작성(기존 빈 스텁 → React 18 지원종료/default export 제거/persist 변경 내용으로 실제 채움)
- `fastify.md` 계열 노트에 v5 세부 브레이킹(jsonShortHand 제거, hasRoute 정확매칭) 보강 섹션 추가

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "Next.js 캐싱 관련 주장은 버전(14 이하 vs 15+)에 따라 정반대이므로 반드시 버전 명시 후 판단" 항목 추가(이번 오류 재발 방지)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이미 카탈로그에 있는 "출처-대조-검증기" 에이전트가 이번과 같은 리서치 오류 검출 역할을 커버함, 신규 제안 불필요)
