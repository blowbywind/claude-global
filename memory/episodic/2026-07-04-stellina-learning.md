---
date: 2026-07-04
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-04

웹검색 권한이 없어 제공된 출처를 도메인 수준 신뢰도 + 기존 지식 기반으로 교차검증합니다.

---

**출처 신뢰도 평가 결과**

| 항목 | 제공 출처 | 판정 |
|------|-----------|------|
| Predictive CI/CD | https://medium.com (경로 없음) | ❌ 버림 |
| Automated Canary Analysis | https://roadmap.sh (경로 없음) | ⚠️ 개념 실존·출처 약함 |
| IDP/Platform Engineering | https://dev.to (경로 없음) | ❌ 버림 |
| CADR | https://www.armosec.io | ✅ Armo(Kubescape 제작사) 공식 용어 |
| Observability Tax | https://www.elastic.co | ✅ Elastic 공식 블로그 다수 |
| Agentic Observability | https://www.ibm.com | ✅ IBM AIOps 공식 연구 |
| eBPF 동적 seccomp | https://www.activestate.com | ✅ 개념 실존(Inspektor Gadget 등) |
| Shadow AI 거버넌스 | https://natek.eu | ❌ 소규모 컨설팅사, 검증 불충분 |
| ReadOnly Filesystem | https://medium.com (경로 없음) | ❌ 버림 |

---

## 오늘 배운 것

- **Automated Canary Analysis** — 배포 시 신구 버전 에러율·레이턴시를 실시간 비교해 임계치 초과 시 자동 롤백. Argo Rollouts/Spinnaker Kayenta가 구현체. 현재 Docker Compose 환경엔 직접 적용 불가하나, 블루-그린 전환 판단 기준으로 설계에 참조 가능.
- **CADR(Cloud Application Detection and Response)** — Kubernetes 제어면·런타임·클라우드 API 신호를 연계 분석해 인프라 전체 공격 흐름을 탐지하는 상위 개념. 기존 Falco(런타임 탐지) + Kubescape(정적 도달 가능성) 위에 추가되는 계층. (출처: armosec.io — Kubescape 제작사 Armo 공식 용어)
- **Observability Tax 최적화** — 텔레메트리 급증 비용 통제를 위해 tail-based 샘플링(기존 등록) + 데이터 TTL 생명주기 제어를 아키텍처 설계 단계에 포함해야 한다. OTel Collector 설정 권고와 직결. (출처: elastic.co)
- **Agentic Observability** — AI 에이전트가 텔레메트리를 자율 감시하고 제어 에이전트와 연동해 인프라 문제를 자율 복구하는 방향. 현재 트렌드 인지 수준. (출처: ibm.com)
- **eBPF 동적 seccomp 프로필 생성** — 컨테이너 워크로드의 실제 syscall·네트워크 행위를 eBPF로 관찰해 최적 seccomp 프로필과 네트워크 정책을 동적으로 생성·강제. 기존 Falco(탐지 전용)와 보완 관계. 구현체: Inspektor Gadget, bpf-recorder. (출처: activestate.com)

## 출처

- [Armo — CADR 개념](https://www.armosec.io)
- [Elastic — Observability cost optimization](https://www.elastic.co)
- [IBM — Agentic Observability / AIOps](https://www.ibm.com)
- [ActiveState — eBPF container security](https://www.activestate.com)

## 위키화 후보

- `CADR` — Falco·Kubescape와 구별되는 상위 통합 탐지 계층 개념으로 신규 노트 가치 있음
- `Observability Tax` — 텔레메트리 비용 최적화 패턴(tail-based sampling + TTL) 통합 노트

## 프로필 반영 후보 (저위험)

- **Observability Tax + 텔레메트리 TTL 생명주기 제어** — OTel Collector 설정 권고 패턴에 비용 최적화 원칙 항목 추가
- **eBPF 동적 seccomp 자동 생성** — 컨테이너 런타임 보안 권고에 Falco 탐지 + seccomp 프로필 자동화 2단 패턴 추가

## 승인 필요 (고위험)

- **CADR 보안 스택 편입** — Trivy+Kubescape+Falco 위에 CADR 계층 추가 권고는 Kubernetes 환경을 전제하므로, 현재 Docker Compose 기반 인프라에선 즉시 적용 불가. k8s 전환 시점에 재검토 항목으로 등록 여부 확인 필요.

## 신규 도구 후보 (에이전트/스킬)

없음 — 현재 Docker Compose 환경 기준으로 즉시 자동화 가능한 반복 패턴 신규 도출 없음.

---

**버린 항목 사유**: Predictive CI/CD·IDP·ReadOnly Filesystem(medium.com/dev.to 도메인만, 기사 경로 없음), Shadow AI(natek.eu 검증 불충분). Automated Canary Analysis는 개념 실존이 확인되나 roadmap.sh 경로 미지정으로 출처 표기 생략.
