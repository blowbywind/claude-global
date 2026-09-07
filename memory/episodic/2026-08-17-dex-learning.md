---
date: 2026-08-17
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-17

## 오늘 배운 것 (검증 완료)
- **pnpm 10.26**: git-hosted 의존성의 라이프사이클 스크립트 보안 기본값 강화 + `allowBuilds` 옵션으로 패키지별 스크립트 실행 권한 세분화 도입 — 공식 블로그 원문 대조로 사실 확인(메타 설명 원문: "stricter security defaults for git-hosted dependencies, adds allowBuilds..."). 기존 "pnpm 빌드 스크립트 기본 차단" 인사이트 계열의 신규 세부사항으로 코드 리뷰 체크리스트에 추가 가치 있음.
- **Fastify 버전 정정**: v6는 여전히 미출시(원문 초안 확인)이나, 리서치가 제시한 "최신 5.10.0/5.8.1"은 부정확 — 공식 LTS 문서 직접 대조 결과 현재 latest는 **v5.12.x**. 기존 위키의 "버전 오인 방지" 체크리스트가 실제로 필요했던 사례. 리뷰 시 항상 최신 마이너까지 확인할 것.
- **Next.js 16.3 TS7 빌드**: `next build`가 TypeScript 7로 타입체크 가능 + 빌드 캐시 재사용(최대 5.5배 단축) — 공식 블로그 대조로 사실 확인. **단, 이미 위키에 2026-08-09자 동일 노트(`next-js-16-3-릴리스-노트-기존-next.md`) 존재 → 신규 아님, 위키화 생략.**
- TypeScript 6.0 `--ts6-migration` 플래그: 공식 Microsoft DevBlog 원문(TS 6.0 발표글) 전체 대조 결과 **해당 문자열/기능 언급 전무 → 환각(fabrication) 판정, 폐기**. 채택하지 않음.
- Prisma 금액 필드 `Float` 대신 `Int`(최소단위) 권장: 일반적으로 통용되는 DB 설계 상식이나 출처가 dev.to 블로그(비공식, 저신뢰)라 "신규 발견"이 아닌 참고 수준으로만 채택.

## 출처
- [pnpm 10.26 Release](https://pnpm.io/blog/releases/10.26) — 원문 대조 확인
- [Fastify LTS Reference (latest v5.12.x)](https://fastify.dev/docs/latest/Reference/LTS/) — 원문 대조로 버전 정정
- [Next.js 16.3 Blog](https://nextjs.org/blog/next-16-3) — 원문 대조 확인(위키 기존 노트와 중복)

## 위키화 후보
- pnpm 10.26 세부사항(git-hosted 의존성 스크립트 차단 + `allowBuilds`)을 기존 pnpm 빌드 스크립트 차단 계열 노트에 보강 섹션으로 추가

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트: "pnpm `allowBuilds`로 패키지별 스크립트 권한 세분화 여부" 확인 항목 추가
- 코드 리뷰 체크리스트: "Fastify 최신 버전은 5.10.0/5.8.1이 아니라 5.12.x(2026-08 기준) — 버전 언급 시 매번 원문 재확인" 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열이 이번에도 유효성 입증: 5건 중 1건 환각 적발)
