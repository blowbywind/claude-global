---
date: 2026-07-22
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-22

## 오늘 배운 것
- Node.js 릴리스 주기 대개편: v27(2026-10 alpha 시작, 2027-04 정식)부터 반기 홀짝 LTS 구분 폐지 → 연 1회 메이저 + 전 릴리스 LTS화(공식 출처 직접 fetch 검증 완료)
- 2026-07-27 예정 Node.js 보안 릴리스: 26.x/24.x/22.x 전 라인 HIGH 등급 취약점 포함(공식 출처 fetch 검증 완료) — 배포 전 stack-notes.md 버전 대조 후 패치 여부 확인 필요
- TypeScript 5.9: `--strictInference`가 `--strict`에 흡수돼 기본 활성화(공식 devblogs, 도메인 신뢰도 기반 잠정 채택) — 제네릭/조건부 타입 추론발 신규 타입에러 가능성, 리뷰 체크리스트 추가 가치
- pnpm 11(2026-04): Node 22+ 요구·ESM 전환·SQLite 단일 저장소(공식 pnpm.io, fetch 재검증은 이번 세션 미완료) — 실제 적용 전 `pnpm --version` 직접 확인 필수
- Prisma ORM 7.2.0: migrate-reset MCP 서버 제거, typedSql 프리뷰 노출(공식 prisma.io, 기존 "TypedSQL 대안 제시" 원칙과 정합) — 기존 인사이트 보강용

## 출처
- 채택(공식 1차 출처, 직접 fetch 검증):
  - [Evolving the Node.js release schedule](https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule)
  - [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- 채택(공식 도메인, 도메인 신뢰도 기준 잠정 — 이번 세션 fetch 재검증 실패):
  - [Announcing TypeScript 5.9](https://devblogs.microsoft.com/typescript/announcing-typescript-5-9/)
  - [Prisma ORM 7.2.0](https://www.prisma.io/blog/announcing-prisma-orm-7-2-0)
  - [pnpm 11.0 release](https://pnpm.io/blog/releases/11.0)
- **폐기**(출처 신뢰도 미달·미확인):
  - `eosl.date`(Node 26.5.0 / v24 EOL 주장) — 공인 endoflife.date와 무관한 미상 도메인, 검증 불가로 폐기
  - `releasebot.io`(Prisma "Next"/7.9.0-dev 주장) — 비공식 애그리게이터, 폐기
  - dev.to "top 10 pitfalls"(Fastify 이벤트루프 블로킹/console.log) — 비공식·범용 출처, 기존 지식 대비 신규성 없어 폐기

## 위키화 후보
- Node.js 릴리스 모델 개편(v27~ 연1회+전LTS화) — `concepts/node.md` "최근 변화" 섹션에 추가(기존 노트 미반영 확인됨)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 TypeScript 5.9 `--strictInference` 항목 추가(기존 Zod v4/import defer 체크리스트와 같은 계열로 축적)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 동일 역할의 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재, 신규 제안 불필요)
