---
date: 2026-07-09
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-09

## 교차검증 결과

**중복·제거 항목:**
- eBPF 연속 프로파일링 → 메모리(2026-06-26/28) + 위키(`concepts.md` OBI 항목, `tetragon`, `cloud-application-detection-and-response-cadr.md`) 이미 다중 기록. **버림**
- Artifact Attestations / SLSA → `slsa-provenance-자동화-패턴.md`가 `actions/attest` + Sigstore Fulcio/Rekor keyless 서명까지 이미 상세 커버. **버림**
- Chainguard 이미지 → 메모리 2026-06-29 항목에 이미 등록. **버림**
- OTel+Prometheus 협업 모델 → 관측성 모범 사례로 기확립된 내용, 신규 기술 아님. **버림**

---

## 오늘 배운 것

- **EU Cyber Resilience Act(CRA) SBOM 의무화**: EU CRA가 2024-10 공식 채택됨. 2027년 전후 의무화 시행 예정으로 SBOM이 단순 생성(--sbom=true)을 넘어 취약점 분석·패치 우선순위 선정에 실질 사용되는 컴플라이언스 요건으로 전환. 기존 `concepts-supply.md`의 기술적 SBOM 항목에 규제 의무 계층을 추가로 인식할 것. (출처: anchore.com)
- **동적 런타임 분석 기반 custom seccomp 프로필**: 런타임에서 애플리케이션이 실제 호출하는 syscall만 추출해 서비스별 맞춤 seccomp 프로필 생성. 기본 seccomp 프로필 대비 공유 커널 취약점 노출 면적을 더 좁힘. Kubescape(ARMO)에서 자동 프로필 생성 지원. (출처: armosec.io)
- **OIDC 토큰 리포지토리 커스텀 속성**: GitHub Actions OIDC 클레임에 repo custom properties 추가. 수십 개 리포마다 별도 클라우드 IAM 역할을 만들지 않고, 속성 기반으로 신뢰 정책을 일괄 관리 가능. 기존 `job_workflow_ref` 항목의 보완 기법. (출처: github.blog)
- **Gateway API — Ingress 대체 표준**: Kubernetes Gateway API가 헤더 기반 라우팅·가중치 트래픽 제어 내장. 인프라 운영자(GatewayClass)와 앱 개발자(HTTPRoute) 설정을 분리하여 Caddy 같은 외부 리버스 프록시와의 역할 경계 설계에 직접 참고 가능. (출처: kubernetes.io)
- **Kargo — GitOps 릴리즈 프로모션 오케스트레이션**: Akuity의 Kargo는 dev→staging→prod 단계 간 Freight(가상 산출물 단위) 프로모션을 ArgoCD 위에서 자동화. 수동 kustomize 편집 및 승인 스크립트 없이 단계 전환 정책을 코드로 선언. Docker Compose 기반 배포에서 멀티 환경 전환 시 참고 후보. (출처: kargo.io)

## 출처

- [GitHub Artifact Attestations](https://github.com/actions/attest) — SLSA 기존 위키 교차확인용
- [Anchore — SBOM & CRA Compliance](https://anchore.com) — EU CRA SBOM 의무화
- [ARMO / Kubescape seccomp](https://armosec.io) — 동적 seccomp 프로필
- [GitHub Blog — OIDC Custom Properties](https://github.blog) — OIDC 토큰 리포 속성 클레임
- [Kubernetes Gateway API](https://kubernetes.io) — Gateway API Ingress 대체 표준
- [Kargo](https://kargo.io) — GitOps 릴리즈 프로모션

## 위키화 후보

- `kargo-gitops-promotion.md` — GitOps 릴리즈 프로모션 오케스트레이션: Freight 단위 dev→prod 자동 전환 패턴, ArgoCD 연동 구조
- `seccomp-dynamic-profiling.md` — 런타임 syscall 추출 기반 custom seccomp 프로필 생성 패턴 (Kubescape 자동화 포함)

## 프로필 반영 후보 (저위험)

- EU CRA SBOM 의무화 일정(2027년)을 컨테이너 보안 체크리스트 — 기존 `SBOM 생성` 항목에 "컴플라이언스 준수 필수" 계층 추가
- 동적 런타임 분석 기반 custom seccomp 프로필 — 기존 "distroless/Chainguard + Cosign 서명" 컨테이너 하드닝 권고에 seccomp 자동 프로파일링 항목 추가

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

_(없음 — Kargo·Kubescape seccomp 모두 기존 인프라 체크리스트 확장 수준, 전용 에이전트 신설 불필요)_
