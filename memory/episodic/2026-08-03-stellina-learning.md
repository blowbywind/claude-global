---
date: 2026-08-03
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-03

## 오늘 배운 것
- **Kubernetes 1.34 DRA(Dynamic Resource Allocation) GA 승격** — 공식 k8s 릴리스 공지로 직접 확인. `resource.k8s.io/v1` 안정화, GPU/TPU/NIC 등 특수 하드웨어 할당을 ResourceClaim/DeviceClass/ResourceSlice 등 API로 정식 지원(58개 개선 중 Stable 23·Beta 22·Alpha 13).
- **MutatingAdmissionPolicy(CEL 기반)** — 실재하는 k8s 기능으로, 공식 문서 기준 v1.36에서 Stable(기본 활성)까지 진행된 것을 확인. "1.34에서 Beta 승격"이라는 스텔리나 주장은 진행 궤적상 합리적이나 1.34 시점 상태를 원문으로 재확인하지는 못해 참고용으로만 반영.
- **GitHub Actions 2026 보안 로드맵(egress 방화벽)** — 1차 리서치 원문(github.blog 공식 출처) 그대로 채택. 러너 VM 외부(L7)에서 동작해 러너 루트 탈취와 무관하게 유지되는 구조, Monitor→Enforce 단계적 전환 권고는 재확인 도구 오류로 재검증은 못 했으나 1차 자료가 공식 1차 소스이므로 유지.
- **OTel Collector 최신 v0.157.0(2026-07-22)** — 위키 기존 기준점(v0.143.0, 2026-01) 대비 최신화 필요. 재검증 도구 오류로 원문 재확인은 못 했으나 공식 GitHub Releases URL이 1차 소스라 채택, "OTel 릴리스 버전 언급 시 최신 기준 확인" 메모로만 반영(구체 기능 차이는 미검증).
- **폐기**: "KYAML"(K8s 전용 YAML 서브셋) 주장은 단일 비공식 블로그(scaleops.com)만 근거이며 공식 k8s 문서로 교차검증되지 않아 채택하지 않음.
- **재확인(신규 아님)**: GitHub Actions egress 방화벽 세부구조, Falco+Tetragon 계층화 원칙은 기존 위키 기록과 일치하는 재확인 수준이라 신규 등재 불필요(스텔리나 판단 동의).

## 출처
- [Kubernetes v1.34 릴리스 공지](https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/) — DRA GA 직접 확인
- [MutatingAdmissionPolicy 공식 문서](https://kubernetes.io/docs/reference/access-authn-authz/mutating-admission-policy/) — v1.36 Stable 확인
- [GitHub Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/) — 1차 리서치 원문 인용(재검증 미완)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases) — 1차 리서치 원문 인용(재검증 미완)

## 위키화 후보
- Kubernetes 1.34 DRA GA — GPU/TPU/NIC 리소스 할당 관리 정식화, 인프라 노트 신규 등재 가치 있음.

## 프로필 반영 후보 (저위험)
- MutatingAdmissionPolicy(CEL 기반 인클러스터 뮤테이션, 외부 웹훅 대체) 용어를 인프라 전문성 항목에 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
비고: 검증 단계에서 WebFetch 도구 권한 오류로 GitHub Actions·OTel 두 건은 원문 재fetch에 실패해 1차 리서치 출처(공식 소스)를 그대로 신뢰 채택했고, DRA GA·MutatingAdmissionPolicy는 직접 재확인했습니다. KYAML은 근거 부족으로 폐기했습니다.
