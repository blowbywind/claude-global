---
date: 2026-08-19
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-19

[리서치 결과 검증]

WebFetch로 직접 대조를 시도했으나, 이번 세션에서도 `nodejs.org` 1건만 성공하고 `prisma.io`/`github.com`/`mlflow.org`/WebSearch는 전부 권한 차단(기존 위키 기록된 반복 이슈와 동일 패턴)되어 해당 항목은 미검증으로 폐기했습니다. 위키(`wiki/concepts/`) grep으로 기존 커버리지도 함께 확인했습니다.

## 오늘 배운 것
- Node.js 2026-07-29 보안 릴리스(v22.23.2/24.18.1/26.5.1)는 실제로 총 11건 CVE(HIGH 3·MEDIUM 5·LOW 3) — 기존 wiki 노트(`node-js-22-24-26-2026.md`)는 HIGH 3건(HTTP/2 maxSessionMemory 우회 CVE-2026-56846, heap-UAF CVE-2026-56848, Permission Model 과다권한 CVE-2026-58043)만 반영, 나머지 8건(mTLS 자격 재사용, hostname 검증 생략, node:sqlite 재실행, dns.resolveAny DoS, zlib 크래시, HTTP 파서 스머글링 등)은 누락 — 기존 노트 보강 가치 있음
- 덱스가 인용한 "HTTP/2 무제한 ORIGIN 프레임 OOM"·"CVE-2026-21637(TLS 예외처리 우회)"는 Node.js 공식 보안 페이지 본문에 해당 서술·CVE 번호가 존재하지 않아 **폐기**(secpod 등 2차 출처 오귀속 가능성)
- Prisma 8(RC) 자체 존재는 다른 봇(roun, 2026-08-17)이 `github.com/prisma/prisma/releases/tag/v8.0.0-rc.1`로 독립 검증한 바 있어 신뢰 가능하나, 덱스 주장 세부사항(TypeScript 순수 재작성·RLS 정책·`@prisma/orm-extension-supabase`)은 이번 권한 차단으로 대조 실패 — **채택 보류**
- Next.js 16.3.0(Instant Navigations)은 기존 wiki 검증노트 존재, 16.3.1 세부는 이번 권한 차단으로 대조 실패 — **채택 보류**
- LLM tool-calling 모범사례(도구 8개 초과=설계결함, budget 4종)는 원문 대조 실패 — **채택 보류**

## 출처
- [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases) — WebFetch 직접 확인

## 위키화 후보
- 기존 `node-js-22-24-26-2026.md`에 누락 CVE 8건 보강(신규 노트 대신 기존 노트 갱신)

## 프로필 반영 후보 (저위험)
(없음 — 검증 완료 범위 내 프로필급 항목 없음)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — WebFetch 권한 차단 반복은 이미 등록된 후보 에이전트(`리서치-검증-권한-정합기` 등)로 커버되어 중복 제안 생략, 재발만 재확인)
