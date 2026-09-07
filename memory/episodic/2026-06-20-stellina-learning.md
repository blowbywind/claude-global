---
date: 2026-06-20
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-06-20

---

## 오늘 배운 것

- **GitHub Actions: 액션은 반드시 SHA 고정** — 2026년 Q1에 `tj-actions/changed-files` 등 태그 참조 액션이 공급망 공격으로 23,000+ 레포를 침해. `uses: actions/checkout@v4` 대신 `uses: actions/checkout@<full-sha>`로 고정해야 함. ([Wiz Blog](https://www.wiz.io/blog/github-actions-security-guide))

- **OIDC로 정적 시크릿 제거** — GitHub Actions에서 AWS/GCP 인증 시 long-lived credentials 대신 OIDC 단기 토큰 사용. `permissions: id-token: write` 한 줄로 교체 가능. ([GitHub Blog](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/))

- **컨테이너 이미지: distroless + Cosign 서명** — distroless 이미지는 셸·패키지매니저를 제거해 공격 표면을 최소화. 빌드 후 `cosign sign`으로 서명 → 배포 전 `cosign verify`로 검증하는 파이프라인이 2026년 표준. ([Orca Security](https://orca.security/resources/blog/container-security-best-practices/))

- **OTel docker_stats 리시버로 컨테이너 메트릭 통합** — OTel Collector에 `docker_stats` receiver를 추가하면 CPU·메모리·네트워크 I/O를 OTLP 메트릭으로 수집 가능. `filelog` receiver로 컨테이너 로그까지 통합하면 단일 파이프라인으로 logs+metrics+traces 완성. ([SigNoz](https://signoz.io/guides/container-observability/))

- **배포 전략 선택 기준** — Blue-Green: 즉시 롤백 가능, 비용 2배. Canary: 트래픽 2%→25%→75%→100% 단계적 릴리즈, 위험 최소화. Docker Compose 환경에선 Blue-Green이 구현이 단순함 (서비스 이름 전환). ([Calmops](https://calmops.com/software-engineering/continuous-deployment-strategies-blue-green-canary/))

- **SBOM이 배포 산출물로 필수화** — 2026년 주요 기업/정부기관은 CycloneDX 또는 SPDX 형식 SBOM을 릴리즈마다 요구. GitHub Actions에서 `anchore/sbom-action`으로 자동 생성 가능. ([DEV Community](https://dev.to/dev_narratives_023afd008e/secure-cicd-pipelines-7-essential-2026-best-practices-55mk))

---

## 출처

- [Securing CI Pipelines: GitHub Actions Security Best Practices (Medium, 2026-03)](https://medium.com/@sharathkumarlokesh/securing-ci-pipelines-github-actions-security-best-practices-4ed72762d1fc)
- [GitHub Actions 2026 Security Roadmap (GitHub Blog)](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Hardening GitHub Actions: Lessons from Recent Attacks (Wiz)](https://www.wiz.io/blog/github-actions-security-guide)
- [Container Security Best Practices 2026 (Orca Security)](https://orca.security/resources/blog/container-security-best-practices/)
- [Container Observability with OpenTelemetry (SigNoz)](https://signoz.io/guides/container-observability/)
- [Continuous Deployment Strategies: Blue-Green, Canary (Calmops)](https://calmops.com/software-engineering/continuous-deployment-strategies-blue-green-canary/)
- [Secure CI/CD Pipelines 7 Best Practices 2026 (DEV Community)](https://dev.to/dev_narratives_023afd008e/secure-cicd-pipelines-7-essential-2026-best-practices-55mk)

---

## 위키화 후보

- `concepts/supply-chain-security.md` — 소프트웨어 공급망 공격 벡터(mutable action refs, 타사 패키지), SHA 고정·SBOM·Cosign 대응책 정리
- `concepts/otel-docker-observability.md` — OTel Collector docker_stats + filelog 리시버로 컨테이너 logs/metrics/traces 통합 파이프라인 구성

---

## 프로필 반영 후보 (저위험)

- GitHub Actions 워크플로 작성 시 타사 액션은 반드시 전체 SHA로 고정 (`@<sha>` 형식)
- Docker Compose 서비스 배포 시 Blue-Green 패턴(서비스 이름 전환) 기본 전략으로 채택 검토

---

## 승인 필요 (고위험)

(없음)

---

## 신규 도구 후보 (에이전트/스킬)

- `[skill] sbom-gen` — GitHub Actions 워크플로에 `anchore/sbom-action` 단계를 자동 삽입하고 CycloneDX 아티팩트 업로드까지 설정해 주는 스킬


## 추가 학습 (19:05 UTC)
## 오늘 배운 것
- **SBOM/SLSA가 엔터프라이즈 표준화 진행 중**: 규제 압력으로 SBOM 강제와 SLSA(공급망 레벨)가 표준이 되어가는 중. Docker Engine 25+는 `--sbom=true`로 빌드 시 SBOM을 attestation으로 생성 가능 → 우리 GitHub Actions 빌드에 바로 적용 가능. ([Aikido](https://www.aikido.dev/blog/container-security-best-practices), [GitNexa](https://www.gitnexa.com/blogs/modern-cicd-pipeline-architecture))
- **이미지 스캔을 레지스트리 진입 전 차단 게이트로**: Trivy/Grype를 CI에 넣어 push 전·promote 시 스캔하면 알려진 CVE의 80%+를 배포 전 차단. Trivy는 OS패키지·언어 의존성·IaC·K8s 모두 커버. ([vucense](https://vucense.com/dev-corner/container-vulnerability-scanning-2026/), [Orca](https://orca.security/resources/blog/container-security-best-practices/))
- **distroless/alpine 최소 베이스 이미지 = 공격 표면 최소화**: 베이스의 모든 패키지가 잠재 CVE. 런타임 의존성만 담은 distroless로 전환 권장. Compose 서비스 이미지에 적용 검토 가치. ([TechSaaS](https://www.techsaas.cloud/blog/docker-container-security-best-practices-2026/))
- **로그에 trace_id/span_id 주입 = 옵저버빌리티 핵심**: 2026년 OTel로 수렴(모든 주요 벤더 네이티브 지원). 로그·트레이스·메트릭 상관관계 연결로 MTTR 단축. 노이즈 로그는 소스에서 조기 필터링해 비용 절감. ([calmops](https://calmops.com/devops/opentelemetry-observability-2026-complete-guide/), [cloudraft](https://www.cloudraft.io/blog/opentelemetry-observability-guide-optimization))
- **배포와 릴리스 분리 (feature flag) + 메트릭 게이트 롤백**: 점진 배포는 작은 트래픽 슬라이스에서 이상 신호를 먼저 잡아 MTTD·MTTR 단축, 롤백 = 트래픽 가중치 조정. K8s 아니어도 Caddy 라우팅 + 플래그로 원리 적용 가능. ([Argo Rollouts](https://argo-rollouts.readthedocs.io/en/stable/concepts/), [CircleCI](https://circleci.com/blog/deployment-strategies-types-trade-offs-and-how-to-choose/))
- **DORA 4지표 월간 측정 + 파이프라인 10분 이하 목표**: 배포빈도·변경 리드타임·변경실패율·MTTR로 성숙도 정량화. 표준 빌드 10분 초과 시 생산성 저하. ([Refonte](https://www.refontelearning.com/blog/devops-engineering-in-2026-top-ci-cd-tools-trends-and-best-practices-github-actions-vs-jenkins))

## 출처
- [Container Security Best Practices — Aikido](https://www.aikido.dev/blog/container-security-best-practices)
- [Container Vulnerability Scanning 2026: Trivy, Grype & SBOM — vucense](https://vucense.com/dev-corner/container-vulnerability-scanning-2026/)
- [Modern CI/CD Pipelines 2026 — GitNexa](https://www.gitnexa.com/blogs/modern-cicd-pipeline-architecture)
- [OpenTelemetry Observability 2026 — calmops](https://calmops.com/devops/opentelemetry-observability-2026-complete-guide/)
- [Argo Rollouts Concepts](https://argo-rollouts.readthedocs.io/en/stable/concepts/)
- [DevOps Engineering in 2026 — Refonte](https://www.refontelearning.com/blog/devops-engineering-in-2026-top-ci-cd-tools-trends-and-best-practices-github-actions-vs-jenkins)

## 위키화 후보
- `concepts/container-supply-chain-security.md` — SBOM·SLSA·Cosign 서명·Trivy 스캔 게이트를 묶은 컨테이너 공급망 보안 개념 노트
- `concepts/progressive-delivery.md` — blue-green/canary/feature flag·메트릭 게이트 롤백을 우리 Caddy+Compose 단일서버 맥락으로 정리

## 프로필 반영 후보 (저위험)
- CI 빌드에 Trivy 이미지 스캔 단계를 추가하고 HIGH/CRITICAL CVE 발견 시 배포 차단하는 것을 기본 권고로 삼는다.
- 컨테이너 로그에 trace_id 주입 및 distroless 베이스 전환을 인프라 개선 제안 시 우선 항목으로 검토한다.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] container-scan — Compose/Dockerfile 대상 Trivy 스캔 + SBOM 생성 + 결과 요약을 자동 실행하는 스킬
- [skill] dora-report — GitHub Actions 배포 이력에서 DORA 4지표를 월간 집계·리포트하는 스킬
