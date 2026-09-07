---
date: 2026-09-05
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-09-05

## 오늘 배운 것
- npm 슬롭스쿼팅(slopsquatting) 대규모 캠페인 확인 — AI가 환각으로 지어낼 법한 패키지명을 선점 등록, sonatype-2026-005660("Flooding Dropper"/"WEL1DROPPER") 기준 확정 846~850개, 1,000개+로 확산 보도(2026-08-05~06). 원문 직접 대조로 검증 완료.
- unpkg CDN 미러 신뢰경계 악용 신규 벡터 — npm 패키지 24개가 unpkg를 통해 가짜 Cloudflare CAPTCHA 페이지 호스팅(2026-08). 원문 대조 완료, 위키에 없던 신규 항목.
- Fastify 6.0.0 아직 GA 아님(마일스톤 76% 진행, 2026-08-16 기준) — GitHub 마일스톤 페이지 직접 대조로 76% 확인. 기존 위키 "Fastify latest 5.11.3" 기록 계속 유효.
- TypeScript 7.0(tsgo) 2026-07-08 GA 출시 — 위키 기존 노트와 일치, 중복 없음(재작성 불필요).
- **[정정]** dex 리서치는 "Node.js 최신 보안 릴리스 2026-06-18 이후 공지 없음"이라 했으나, nodejs.org 원문 직접 대조 결과 **2026-07-29 "July 2026 Security Releases"**가 실제 존재함(최신 릴리스는 이쪽). 리서치 원안 문구는 폐기하고 이 사실로 대체.
- 일반 공급망 동향(axios 계정탈취, Red Hat 32패키지 침해)은 URL 로딩만 확인, 기존 위키 인사이트와 중복이라 신규 반영 없음.

## 출처
- [CSA Research Note — npm AI Slopsquatting](https://labs.cloudsecurityalliance.org/research/csa-research-note-npm-ai-slopsquatting-rat-infostealer-20260/)
- [Cloudsmith — Slopsquatting and Typosquatting](https://cloudsmith.com/blog/slopsquatting-and-typosquatting-how-to-detect-ai-hallucinated-malicious-packages)
- [The Hacker News — 24 npm Packages Abuse unpkg Mirrors](https://thehackernews.com/2026/08/24-npm-packages-abuse-unpkg-mirrors-to.html)
- [Fastify Milestone 6 (GitHub)](https://github.com/fastify/fastify/milestone/6)
- [Node.js Vulnerability Blog (July 2026 Security Releases 확인)](https://nodejs.org/en/blog/vulnerability)

## 위키화 후보
- npm 슬롭스쿼팅 캠페인(WEL1DROPPER/Flooding Dropper, 2026-08) — 기존 "2026-상반기 npm 공급망 사고 타임라인" 노트 후속 사건으로 추가.
- CDN 미러(unpkg 등) 신뢰경계 악용 — 기존 공급망 체크리스트에 없던 신규 공격벡터 개념.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "신규 의존성명이 실제 존재/사용 이력 있는 패키지인지 확인(AI 환각 패키지명 선점 슬롭스쿼팅 경계)" 항목 추가
- 코드 리뷰 체크리스트에 "정적 자산을 unpkg 등 서드파티 CDN 미러로 로드 시 콘텐츠 무결성(SRI)·신뢰 경계 별도 검토" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번에도 원문 직접 대조로 dex 리서치의 노후 정보(Node.js 최신 보안 릴리스일 오기재, 2026-07-29 누락) 1건 정정 확인. 반복 가치 재확인, 기존 후보 유효.
