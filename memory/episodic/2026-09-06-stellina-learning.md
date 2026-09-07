---
date: 2026-09-06
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-09-06

## 오늘 배운 것
- runC 이스케이프 3종(CVE-2025-31133/52565/52881) 패치 버전 **1.2.8 / 1.3.3 / 1.4.0-rc.3**을 원문 대조로 재확인(기존 위키 `runc-이스케이프-3종-cve-상세` 노트와 완전 일치, 신규 사실 아님).
- gVisor 격리 구조(Sentry=유저스페이스 Go 기반 커널이 syscall을 가로채 호스트 커널 직접 접근 차단)를 원문 대조로 재확인(기존 위키 `gvisor-kata-공유커널-방어아키텍처` 노트와 일치, 신규 사실 아님).
- Trivy 공급망 침해(CVE-2026-33634), OTel Collector 최신판, Argo Rollouts/Flagger 버전, GitHub Actions Dependabot 3일 쿨다운 — 모두 기존 위키에 이미 반영된 항목으로 중복 확인.
- 이번 라운드는 검증 결과 **완전 신규 사실 없음**: 기존 인사이트의 출처만 상이한 재확인 수준.

## 출처
- [Critical runC Vulnerabilities Allow Container Escape in Docker/Kubernetes](https://www.gopher.security/news/critical-runc-vulnerabilities-allow-container-escape-in-docker-kubernetes) — runc 패치버전 대조 완료
- [Container Runtime: runc vs crun vs gVisor 2026](https://safeguard.sh/resources/blog/container-runtime-runc-vs-crun-vs-gvisor-2026) — gVisor Sentry 구조 대조 완료
- (기존 위키 노트) `runc-이스케이프-3종-cve-상세-번호-기법-패치버전.md`, `gvisor-kata-공유-커널-방어-아키텍처-sentry-syscall-축소-vm.md`

## 위키화 후보
(없음 — 모두 기존 노트와 중복 확인)

## 프로필 반영 후보 (저위험)
(없음 — 신규 사실 없음)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
