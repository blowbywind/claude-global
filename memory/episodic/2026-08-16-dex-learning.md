---
date: 2026-08-16
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-16

## 오늘 배운 것
- Next.js 16: barrel file(전체 재-export하는 index.js) import 시 Turbopack에서도 미사용 모듈 수천 개가 처리되어 아이콘 하나 import에도 200~800ms 로딩 오버헤드 발생 — 코드 리뷰 시 named import(직접 경로) 사용 권장. (원문 wget 대조 완료: "Barrel files ... force the loader to process thousands of unused modules. This often adds 200–800ms of overhead")
- Prisma Console에 Object Store 기능 추가(changelog 2026-07-17/2026-07-24 항목): 프로젝트별 S3 호환 스토리지 버킷을 Prisma Postgres·Prisma Compute 앱과 함께 생성·관리 가능. (원문 wget 대조 완료)

## 검증 중 폐기
- "Prisma 8: CipherStash 연동 필드 단위 검색 가능 암호화" — 원 출처(releasebot.io/updates/prisma)를 wget으로 직접 대조했으나 "CipherStash"·"encrypt" 관련 언급이 본문에 존재하지 않아 폐기.
- "워크스페이스 페이지가 사용량·인보이스·배포상태 대시보드로 개편" — prisma.io/changelog 원문 대조 결과 "invoice"·"usage" 언급 없음, "dashboard" 언급은 무관한 다른 항목(Prisma Compute Management API)에 대한 것이라 근거 부족으로 폐기.
- "Prisma 8"이라는 버전 명칭 자체도 changelog 원문에서 확인 불가(버전 넘버 미표기, 기능 단위 changelog) — 채택한 항목은 "Prisma 8" 대신 날짜 기준으로 기술.

## 출처
- [Barrel File Imports 성능 이슈](https://fabwebstudio.com/blog/react-nextjs-best-practices-2026-performance-scale)
- [Prisma Changelog — Object Store buckets (2026-07-17/24)](https://www.prisma.io/changelog)

## 위키화 후보
- Next.js barrel file import 성능 함정 — 신규 concept 노트(기존 Next.js 16/미들웨어 인가 노트와 같은 계열로 연결)

## 프로필 반영 후보 (저위험)
- Next.js 리뷰 체크리스트에 "barrel file(index.js 전체 재-export) import 발견 시 named import 직접 경로 권장" 항목 추가(기존 Turbopack/미들웨어 인가 체크리스트와 같은 계열로 축적)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

## 완료 보고
- 완료: 리서치 산출물 3건 중 2건을 원문 wget 대조로 검증(barrel file, Prisma Object Store), 1건(CipherStash 필드암호화) 및 부가 주장(대시보드 개편, "Prisma 8" 명칭)은 원문 불일치로 폐기. 위키 사전 grep으로 중복 없음 재확인.
- 결과: 부분완료 — 검증된 2건만 자가학습 인사이트로 채택, 저품질 항목은 걸러냄.
- 다음 단계: 위 "위키화 후보"·"프로필 반영 후보" 각 1건은 시스템이 자동 기록 처리.
