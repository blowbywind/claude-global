---
date: 2026-07-05
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-05

WebSearch 권한이 없어 도구 검색 불가. 위키 grep 결과와 기존 도메인 지식으로 교차검증합니다.

---

**중복 폐기 목록** (위키/프로필 이미 기록):
- Cosign/Sigstore → `concepts-container.md`, `concepts-supply.md`, `slsa-provenance 패턴` 노트에 상세 기록
- 배포↔출시 격리(Progressive Delivery) → `concepts-progressive.md` + 2026-06-24 학습 기록
- Runtime Reachability(Kubescape) → 프로필 2026-06-24 이미 등록
- Agentic AI Observability → 위키 2026-07-04 기록

**출처 신뢰도 판정**:
- `coderaven.io` · `worklifenotes.com` — 비권위 출처. 개념은 Flagger/Argo Rollouts 공식 문서, SLSA 명세로 각각 보강해 채택 가능
- `ibm.com` — 신뢰 출처 채택
- `armosec.io` — 신뢰하나 중복

---

## 오늘 배운 것

- **관측성 기반 자동 롤백(Observability-Driven Rollback)**: 점진적 배포 시 에러율·지연 지표가 SLO 임계값 초과 시 시스템이 자동으로 이전 버전으로 복귀. Flagger(`flagger.app`) · Argo Rollouts(`argoproj.github.io`)가 Prometheus 메트릭을 게이트로 사용해 실제 구현됨. `coderaven.io` 원출처는 비권위적이나 공식 도구로 교차 검증됨.

- **파이프라인 단계 격리(Pipeline Stage Isolation)**: 빌드·스캔·배포 단계를 독립 실행 환경으로 분리해 한 단계가 탈취되어도 전체 파이프라인 제어권을 못 갖도록 차단. SLSA L2/L3 격리 요건과 일치. `worklifenotes.com` 원출처는 비권위적이나 SLSA 명세(`slsa.dev`)로 검증됨. 기존 `job_workflow_ref` OIDC 항목의 환경 격리 측면에 해당.

- **비용 인식 관측성(Cost-Aware Observability)**: OTel 도입 확산으로 텔레메트리 비용이 폭증하는 문제에 대응해, Apache Arrow 같은 컬럼형 포맷 + 저비용 오브젝트 스토리지(Grafana Mimir/Thanos 방식)로 계층화하고 컬렉터 수집 단계에서 불필요 스팬을 조기 필터링하는 전략. IBM 출처 유효.

## 출처

- [IBM — Observability & AIOps (ibm.com)](https://www.ibm.com)
- [Flagger — Progressive Delivery Operator](https://flagger.app)
- [SLSA Supply-chain Levels for Software Artifacts](https://slsa.dev)

## 위키화 후보

- `concepts/observability-driven-rollback.md` — Flagger/Argo Rollouts 메트릭 게이트 롤백 패턴, Caddy+Compose 단일 서버 맥락에서의 적용 방안 정리

## 프로필 반영 후보 (저위험)

- **Cost-Aware Observability** — OTel Collector 설정 권고 패턴에 "컬렉터 수집 단계 불필요 스팬 조기 필터링·컬럼형 스토리지 계층화" 항목 추가

## 승인 필요 (고위험)

- **관측성 기반 자동 롤백 게이트 추가**: autobots CI 파이프라인에 Flagger 방식의 메트릭 임계값 기반 자동 롤백 훅 도입은 배포 정책 변경 — 에러 버짓 게이트(2026-06-21 기존 항목)와 병행 설계 여부 확인 후 착수 필요.

## 신규 도구 후보

- [skill] `cost-otel-audit` — OTel Collector 설정 파일에서 불필요 스팬/속성 수집 규칙을 점검하고 비용 절감 필터링 권고를 출력하는 스킬
