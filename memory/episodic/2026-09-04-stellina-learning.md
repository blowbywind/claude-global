---
date: 2026-09-04
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-09-04

## 오늘 배운 것
- gVisor(Sentry)는 syscall 매개 방식으로 지연 18~35% 증가, Kata Containers는 하이퍼바이저 경계로 정상상태 오버헤드 8~12%·콜드스타트 +600ms — 기존 `gVisor/Kata 공유 커널 방어` 노트에 성능 수치 보강 필요 (기존 노트엔 syscall 개수만 있고 오버헤드 수치 없음)
- 2026-05-18 "Megalodon" 캠페인: 단 하루 동안 GitHub 저장소 5,561곳에 악성 커밋 5,718건 주입 — 기존 위키에 미기록된 신규 대규모 공급망 공격 사례
- TanStack 침해(CVE-2026-45321, CVSS 9.6, 2026-05)는 기존 `tanstack.md`(라이브러리 기능 설명)와 별개 항목 — 해당 CVE는 위키에 미기록
- GitHub Dependabot이 2026-07부터 버전 업데이트에 기본 쿨다운(신규 릴리스 3일 경과 후에만 PR 오픈) 도입 — 기존 "Dependabot OIDC" 노트와 다른 신규 방어기능
- Trivy Docker Hub 이미지 오염 정밀 시간창(2026-03-19 18:24 UTC~03-23 01:36 UTC) 확인 — 기존 CVE-2026-33634 노트에 정밀 타임라인 보강 가치
- Trivy CVE(CVSS 9.4)/runc CVE 3건/Argo Rollouts v1.10.0-rc1/OTel v0.159.0은 위키(`_drafts/_promoted/`)에 이미 동일 근거로 반영 확인 → 중복 폐기(연구 결과의 자체 판단 정확)

## 출처
- [The Trivy Supply Chain Compromise](https://www.legitsecurity.com/blog/the-trivy-supply-chain-compromise-what-happened-and-playbooks-to-respond)
- [Docker Hub — Trivy Supply Chain Compromise](https://www.docker.com/blog/trivy-supply-chain-compromise-what-docker-hub-users-should-know/)
- [gVisor vs Kata — Security Architecture & Performance](https://securemachinery.com/2026/07/04/kata-containers-vs-gvisor-security-architecture-performance-full/)
- [CI/CD Pipeline Supply Chain Attacks Surge 2026](https://dev.to/x4nent/cicd-pipeline-supply-chain-attacks-surge-2026-security-response-strategy-3n44)

## 위키화 후보
- Megalodon 캠페인(2026-05-18, 저장소 5,561곳·악성 커밋 5,718건) — "2026 npm/GH 공급망 공격 타임라인" 계열 신규 개념노트 후보

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트 "런타임 격리(gVisor/Kata) 채택 고려" 항목에 정량 트레이드오프(gVisor 지연 +18~35% / Kata 오버헤드 +8~12%·콜드스타트 +600ms) 각주 보강
- CI/CD 공급망 방어 권고에 "Dependabot 3일 쿨다운" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 후보가 이미 다수 누적되어 있어 추가 제안 보류)
