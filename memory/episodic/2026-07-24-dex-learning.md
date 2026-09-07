---
date: 2026-07-24
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-24

## 오늘 배운 것
- TypeScript 7.0이 **2026-07-08 GA**로 확정 출시(덱스 보고 7/10은 오차, typescriptpro.com 원문 기준 정정). 네이티브 Go 포팅으로 빌드 8~12배 가속(VS Code 실측 125.7초→10.6초, 11.9배), 단 **공개 컴파일러 API는 아직 없음**(7.1에서 신규 API 예정) — Vue/Svelte/Astro 등 템플릿 툴체인은 여전히 미지원.
- 2026년 상반기 npm 공급망 공격 다변화 확인: Axios 악성 배포(1.14.1/0.30.4, postinstall로 RAT 유포), Shai-Hulud 웜(796개 패키지·월 1.32억 다운로드), TanStack 등 160+ npm/PyPI 패키지를 노린 **별도 공격**("Mini Shai-Hulud", 5/12) — 이름이 비슷해도 서로 다른 사건이므로 혼동 주의.
- pnpm v10부터 postinstall 등 라이프사이클 스크립트 기본 차단(strictDepBuilds)에 더해 **신규 릴리스 quarantine(minimumReleaseAge)** 기능도 확인 — 기존 "pnpm 빌드 스크립트 기본 차단" 인사이트에 이어 축적할 근거.
- Fastify는 2026-03 기준 5.8.0(핸들러 레벨 타임아웃 지원)까지 나왔고, v6 로드맵은 GitHub milestone이 열려있을 뿐 날짜·범위 미확정.
- Node.js 26/24/22 라인에 2026-07-27 정기 보안 릴리스 예정(HIGH 심각도, 세부 개수는 미공개) — 배포 일정 참고용.

※ 검증 중 폐기: "@redhat-cloud-services 32개 패키지 침해", "Node.js 2026-05 메이저 릴리스 18개 취약점", "Next.js 16 route.ts/page.tsx 충돌·next/router 혼용 런타임 에러" — 인용 출처에 해당 문구 자체가 없어 근거 부족으로 제외(원 리서치자 dex에게 별도 피드백 불필요, 이번 위키화에서만 배제).

## 출처
- [TypeScript 7.0 GA(2026-07-08) — 성능·컴파일러 API 상세](https://typescriptpro.com/blog/typescript-version-7-2026-07-08)
- [2026 상반기 OSS 공급망 사고 정리(Axios 등)](https://dev.to/trknhr/lessons-from-the-spring-2026-oss-incidents-hardening-npm-pnpm-and-github-actions-against-1jnp)
- [TanStack 등 160+ 패키지 침해("Mini Shai-Hulud")](https://orca.security/resources/blog/tanstack-npm-supply-chain-worm/)
- [npm/pnpm 패키지 매니저 방어 체계(Shai-Hulud 수치, pnpm v10 quarantine)](https://mondoo.com/blog/npm-supply-chain-security-package-manager-defenses-2026)
- [Fastify Releases](https://github.com/fastify/fastify/releases)
- [Node.js 2026-07 보안 릴리스 공지](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)

## 위키화 후보
- "TypeScript 7.0 GA 세부(성능수치·컴파일러 API 부재)" — 기존 TS 5.9/Zod v4 체크리스트 계열에 신규 노트로 축적 가치 있음.
- "2026 상반기 npm 공급망 사고 타임라인(Axios/Shai-Hulud/Mini Shai-Hulud 구분)" — 기존 `concepts-supply.md`/`trivy 공급망 오염 사건` 노트와 연계해 사건 구분 정리 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "postinstall 등 라이프사이클 스크립트 사용 패키지 발견 시 pnpm quarantine(minimumReleaseAge) 설정 여부 확인" 항목 추가(기존 pnpm 빌드 스크립트 차단 인사이트와 같은 계열로 축적).
- TypeScript 리뷰 체크리스트에 "TS7 도입 검토 시 컴파일러 API 의존 툴체인(Vue/Svelte 등) 유무 우선 확인" 참고사항 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
