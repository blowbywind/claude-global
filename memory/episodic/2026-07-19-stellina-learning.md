---
date: 2026-07-19
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-19

## 오늘 배운 것
- GitOps가 클라우드 네이티브 배포관리 표준으로 정착 확인 — 기존 위키의 카나리/Kargo/Argo Rollouts 노트 흐름과 일치, 별도 개념 노트는 아직 부재
- Falco eBPF 모드가 기존 에이전트 방식 런타임 보안을 대체하는 추세 — concepts-falco/tetragon 노트 연장선에서 확인. 단, "CPU 오버헤드 1~5%" 수치는 벤더 블로그(oneuptime, decryptiondigest) 단독 출처라 검증 보류·미채택
- seccomp + Pod Security Standards + eBPF 런타임 탐지 3계층 결합 권고 — 단일 계층만으론 부족하다는 원칙 재확인. 다만 K8s(Pod Security Standards) 전제라 현재 Docker Compose 인프라엔 직접 적용 불가, 참고용으로만 기록
- Progressive Delivery는 다크런치+카나리+점진적 확대+A/B를 SLO 게이트로 오케스트레이션하는 방향, OpenFeature API로 벤더 종속(feature flag) 회피 권고 — concepts-progressive 노트와 연결되는 실무 지침으로 신뢰 가능
- 공급망 보안이 "SBOM 가시성" 단계에서 "SLSA Level 3 프로베넌스 목표 + 거버넌스" 단계로 이동 — 기존 slsa-provenance-자동화-패턴 노트(actions/attest-build-provenance) 확장 근거로 유효
- "신규 계측 85%가 OTel 사용", "배포실패율 68% 감소·MTTR 85% 단축", "AIOps 자율 조치 전환" 등 정량 수치·단정적 주장은 단일 벤더 블로그(elastic, azati, rootly) 출처뿐이라 교차검증 불가 — 채택 보류(폐기)

## 출처
- [GitOps 2026 Complete Guide](https://calmops.com/devops/gitops-2026-complete-guide/)
- [2026-01-07 eBPF Container Runtime Security](https://oneuptime.com/blog/post/2026-01-07-ebpf-container-runtime-security/view)
- [Implementing eBPF Runtime Security Monitoring](https://www.progressiverobot.com/2026/06/04/implementing-ebpf-runtime-security-monitoring-kubernetes-kernel-threat-detection/)
- [Learn the Four Shades of Progressive Delivery](https://www.harness.io/blog/learn-the-four-shades-of-progressive-delivery)
- [Feature Flag Rollout Strategies 2026 Playbook](https://www.digitalapplied.com/blog/feature-flag-rollout-strategies-2026-engineering-playbook)
- [2026 Guide to Software Supply Chain Security](https://cloudsmith.com/blog/the-2026-guide-to-software-supply-chain-security-from-static-sboms-to-agentic-governance)
- [SLSA Framework Guide](https://www.practical-devsecops.com/slsa-framework-guide-software-supply-chain-security/)

## 위키화 후보
- GitOps 개념 정리 노트 신설 — 현재 카나리/Kargo 노트에 산재된 GitOps 언급을 concepts-gitops.md로 통합할 가치 있음

## 프로필 반영 후보 (저위험)
- OpenFeature API(피처 플래그 벤더 중립 표준) 용어를 배포 전략 어휘에 추가

## 승인 필요 (고위험)
(없음 — 이번 리서치 항목은 기존 인사이트의 연장·보강 수준이며, Docker Compose 인프라에 즉시 적용할 정책 변경 제안 없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
