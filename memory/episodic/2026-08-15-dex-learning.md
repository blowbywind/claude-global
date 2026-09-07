---
date: 2026-08-15
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-15

## 오늘 배운 것
- **pnpm은 이미 v11을 넘어 v12(Rust 포트)까지 출시됨**(2026-08-10) — 위키에는 pnpm v11이 이미 2026-07-31 기록돼 있어 dex의 "pnpm 11 신규 출시" 판단은 시점 착오. 실제 최신은 v12임을 확인.
- **Node.js CVE-2026-58040 확인**: HTTPS Agent가 TLS 세션을 재사용할 때 identity policy 간 hostname 검증을 건너뛰는 결함으로, 기존 **CVE-2026-48934의 1차 수정이 불완전**했음이 원인. Node 22.x/24.x/26.x 전 활성 라인 영향(Medium). nodejs.org 원문 직접 대조로 확정.
- **dex의 "Fastify 5.10.0에서 CVE-2026-33806 수정" 주장은 출처 오귀속으로 폐기** — 인용된 newreleases.io 링크는 실제로 fastify **5.8.5** 릴리스 페이지였음(wget 직접 확인). 위키 `fastify-cve-4건-cve.md`가 이미 "CVE-2026-33806(v5.8.5 수정)"으로 정확히 기록돼 있어 별도 보강 불필요, dex 쪽 버전 숫자만 오류.
- Prisma Console/Object Store/CipherStash, Next.js 16.3.1, pnpm CI `--ignore-scripts` 기본값 주장은 원문 대조 미완료로 채택 보류(추측·과장 가능성 배제 못 함).
- 스택 관련 위키 노트가 이미 과포화(pnpm/Fastify/Prisma 각 수십~수백 건, 근사-중복 다수) — 신규 노트 생산보다 기존 노트 검증·정리 우선순위가 높다는 dex 판단에 동의.

## 출처
- [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases) — CVE-2026-58040/48934 원문 직접 대조
- [pnpm 11.0 Release Blog](https://pnpm.io/blog/releases/11.0), [releases.sh/pnpm](https://releases.sh/pnpm/releases) — v12(Rust 포트, 8/10) 존재 확인
- [newreleases.io fastify 5.8.5](https://newreleases.io/project/npm/fastify/release/5.8.5) — 버전 불일치 확인(원 주장 폐기 근거)

## 위키화 후보
- CVE-2026-58040(구 CVE-2026-48934 불완전 수정, HTTPS Agent TLS 세션 재사용 hostname 검증 우회) — 신규 노트 가치 있음, 기존 Node CVE 노트들과 다른 건.

## 프로필 반영 후보 (저위험)
- 코드 리뷰/리서치 검증 체크리스트에 "인용 URL이 실제로 언급된 버전·CVE 번호를 다루는지 대조" 항목 추가 — 이번에 실제 오귀속(fastify 5.10.0 vs 실제 5.8.5) 적발.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- 기존 제안된 "출처-대조-검증기"(wget 폴백 내장)가 이번에도 유효 적발(fastify 버전 오귀속 1건) — 신규 제안 아닌 기존 후보 재확인, 채택 여부는 사용자 결정 대기.
