---
date: 2026-09-04
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-09-04

## 오늘 배운 것
- **fast-uri(Fastify 핵심 의존성) SSRF/host confusion CVE 4건, 원문 대조 검증 완료(진짜)**: CVE-2026-16221(백슬래시 authority 구분자 혼동, ~4.1.0), CVE-2026-18446(백슬래시 authority 도입자, ~4.1.1), CVE-2026-76172(퍼센트인코딩 스킴 정규화 혼동, ~4.1.2), CVE-2026-75899(이중 퍼센트디코딩 SSRF, ~4.1.2, 2026-09-02 공표된 최신건이자 CVE-2026-6322의 불완전수정 변종). npm 레지스트리 확인 결과 최신판 4.1.4가 4건 모두 포함 패치.
- Next.js 2026년 8월 보안 릴리스는 nextjs.org 원문 대조 결과 실제 존재하며 "critical severity 2건"을 다룸(리서치 원안의 "5월 12개+8월 후속" 총계는 원문에서 직접 확인 못함, 8월 릴리스 존재 자체만 검증).
- (참고, 원문 미대조·트렌드성 정보) React 19/Next.js 2026 권장 패턴: React Compiler 우선 적용, Server Components 기본+필요시만 클라이언트 컴포넌트, 폼은 Server Actions, `use()` 훅. 클라이언트 상태관리는 Redux 과잉설계 평가·Zustand/Jotai로 이동 추세.
- npm v12 설치스크립트 기본차단 주장과 "2026년 북한 배후 npm 공급망 공격 2건(Axios·Mastra AI)" 주장은 출처(techtimes.com, tech-insider.org) 원문에서 해당 내용을 직접 확인하지 못해 **폐기**(비authoritative 소스 + 렌더링/1차출처 부재).

## 출처
- [GHSA-v2hh-gcrm-f6hx — CVE-2026-16221](https://github.com/advisories/GHSA-v2hh-gcrm-f6hx)
- [CVE-2026-18446 (opencve)](https://app.opencve.io/cve/CVE-2026-18446)
- [CVE-2026-76172 (opencve)](https://app.opencve.io/cve/CVE-2026-76172)
- [CVE-2026-75899 (GitLab Advisory Database)](https://advisories.gitlab.com/npm/fast-uri/CVE-2026-75899/)
- [fast-uri npm registry(latest 4.1.4 확인)](https://registry.npmjs.org/fast-uri/latest)
- [Next.js 8월 보안 릴리스(원문 대조)](https://nextjs.org/blog/nextjs-security-release-august-2026-update)

## 위키화 후보
- `fast-uri SSRF/host-confusion CVE 클러스터(2026)` 신규 개념 노트 — 기존 2026-08-23 CVE 초안(Next.js WebSocket SSRF)과 별개 항목, 4건 CVE 번호·패치버전·근본원인(WHATWG URL과의 백슬래시/퍼센트디코딩 파서 불일치) 정리 가치 있음.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 어휘에 "host confusion"(파서 간 URL 해석 불일치로 인한 SSRF/allowlist 우회) 용어 추가.

## 승인 필요 (고위험)
- 코드 리뷰 체크리스트에 "Fastify 프로젝트의 `fast-uri`(직접/간접) 버전이 4.1.4 미만이면 SSRF/host-confusion CVE 4건(2026-16221/18446/76172/75899) 노출 — 업그레이드 확인" 항목 추가 제안(리서치 원안 그대로, 원문 대조 완료).

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 "출처-대조-검증기" 계열 후보의 유효성이 이번 검증(4건 CVE 확인+2건 폐기)으로 재입증됨. 신규 제안 아님, 기존 후보 참고.)
