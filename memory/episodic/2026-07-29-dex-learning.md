---
date: 2026-07-29
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-29

## 오늘 배운 것
- Node.js 22.x/24.x/26.x 보안 릴리스: WebFetch로 원문 직접 대조 확인 결과, 날짜는 리서치 원문(07-28)과 달리 **2026-07-29**이며, HIGH 등급 3건(HTTP/2 `maxSessionMemory` 제한 우회, HTTP/2 heap-use-after-free, Permission Model 경로 오판 시 파일시스템 과다 권한)이 확인됨(v22.23.2/v24.18.1/v26.5.1).
- Fastify v5 스키마 필수화(jsonShortHand 제거, querystring/params/body/response 전 영역 JSON Schema 요구)는 **이미 2026-07-24·07-25 위키 노트에 동일 출처(공식 Migration Guide)로 기록됨** — 신규 발견 아님, 재확인 완료.
- Prisma TypedSQL(`$queryRawUnsafe` 대안)도 **이미 2026-07-19 위키 노트에 기록됨**(출처: Digital Applied 블로그) — "Prisma 7 GA·Rust-free 엔진 정식화" 등 이번 리서치의 세부 신규 주장은 이번 세션에서 WebFetch/Bash/WebSearch가 전부 권한 차단되어 재검증 불가.
- pnpm 10.26 `blockExoticSubdeps`, Next.js fetch 캐싱·하이드레이션 불일치(nixx.dev), Prisma Postgres(PG17+Accelerate) 3건은 원문 대조를 시도했으나(출처-대조-검증기 위임 포함) 도구 전면 차단으로 **검증 실패 → 미채택(폐기)**. 특히 nixx.dev는 신뢰도 확인 불가한 개인 블로그로 추정되어 검증 없이는 채택 부적절.

## 출처
- [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases) — 직접 fetch로 대조 확인(날짜 07-29로 정정)
- Fastify v5 jsonShortHand/스키마 필수화, Prisma TypedSQL 항목: 기존 위키 노트(2026-07-19·07-24·07-25)의 기출처 재확인, 이번 세션 재검증은 도구 차단으로 미수행

## 위키화 후보
- Node.js 22/24/26 2026-07-29 보안패치(HTTP/2 메모리제한 우회·heap-UAF·Permission Model 경로오판, HIGH 3건) — ai-ops 백엔드(Node 22 확정) 영향 확인용 신규 노트 1건

## 프로필 반영 후보 (저위험)
- (없음 — 검증된 신규 사실이 인프라 보안패치 1건뿐이라 프로필 반영 대상 아님)

## 승인 필요 (고위험)
- Node.js 22 2026-07-29 보안패치(v22.23.2) 적용 여부 — 인프라 변경이라 사용자 확인 필요(백엔드는 Node 22 확정, 2026-07-16 위키 정정 기록 참고)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
