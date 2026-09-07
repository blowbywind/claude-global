---
date: 2026-07-05
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-05

**위키 교차검증 결과:**

| 리서치 항목 | 위키/프로필 상태 | 처리 |
|---|---|---|
| Prisma v7 Rust-free 아키텍처 | 프로필 [2026-06-20] + 위키 `2026-06-21-roun-prisma-v7-typescript-엔진` | ❌ 중복 |
| Prisma v7 드라이버 어댑터 의무화 | 프로필 [2026-06-20] 중복 | ❌ 중복 |
| **Prisma v7 `prisma.config.ts` 신설** | 위키·프로필 미기재 | ✅ 신규 (출처 도메인만, 1차 보류) |
| 소규모 쿼리 미세 저하 | `2026-07-01-roun-learning` "tight-loop 주의" 동일 내용 | ❌ 중복 |
| Node.js 24 enum/namespace 미지원 | 프로필 [2026-06-24] | ❌ 중복 |
| PG17 JSON_TABLE | 프로필 [2026-06-24], 위키 다수 | ❌ 중복 |
| PG17 MERGE RETURNING | 프로필 [2026-06-24] | ❌ 중복 |
| OWASP SSRF → BAC | 프로필 [2026-06-20] + [2026-07-03] 확인 | ❌ 중복 |
| 모듈러 모놀리스 | 위키 `backend-architecture-patterns-2026.md` (2026-06-18) + 7월 4일 제외 기록 | ❌ 중복 + medium.com 무출처 |

---

## 오늘 배운 것

- **Prisma v7 `prisma.config.ts` 신설**: DB 연결 URL·환경 설정이 `schema.prisma`에서 별도 파일 `prisma.config.ts`로 이관됨. 기존 `schema.prisma` 내 `datasource` 블록 방식과 다른 구성 진입점. 신규 v7 프로젝트 세팅 시 반드시 확인 필요. *(출처: prisma.io 루트만 — 구체적 페이지 URL 미제시, 위키 기재 보류)*

> **신규 검증 항목 1개. 나머지 6개는 프로필/위키 중복으로 전량 폐기.**

## 출처

- 이번 리서치는 출처가 전부 루트 도메인(prisma.io, nodejs.org, postgresql.org, owasp.org, medium.com)만 제시됨 — 구체적 페이지 URL 없어 표준 출처 등록 기준 미충족

## 위키화 후보

- (없음 — prisma.config.ts는 출처 미검증 상태로 보류)

## 프로필 반영 후보 (저위험)

- (없음 — 신규 검증 내용 미충족 기준)

## 승인 필요 (고위험)

- (없음)

## 신규 도구 후보 (에이전트/스킬)

- (없음)

---

**총평**: 이번 리서치 결과 8개 항목 전부 기존 프로필·위키와 중복이거나 출처 불충분으로 폐기. `prisma.config.ts` 신설 1개만 잠재적 신규이나 URL 미제시로 위키화 보류. 다음 리서치 시 antigravity에 구체적 페이지 URL 명시 요청 권장.
