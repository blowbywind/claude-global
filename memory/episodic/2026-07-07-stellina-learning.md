---
date: 2026-07-07
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-07

리서치 항목별 사실관계 교차검증 결과를 정리한다.

**버림 항목:**
- "CADR(Cloud Application Detection and Response)" — 업계 표준 용어가 아님. ARMO(armosec.io)의 자사 마케팅 약어로 판단; 실질 개념은 기존 **CDR(Cloud Detection and Response)** 와 동일. 비표준 용어는 기록 제외.
- IDP/Backstage 골든 패스(plainenglish.io 출처) — 개념 자체는 실존하나 출처가 미디엄 일반 기고 블로그로 권위 부족; 구체 수치·신규 사실 없음. 제외.

---

## 오늘 배운 것

- **Argo Rollouts / Flagger SLO 자동 롤백** — 카나리 배포 진행 중 에러율·레이턴시 등 SLO 메트릭 이탈 시 GitOps 시스템이 즉시 자동 롤백 실행. 기존 Prometheus 에러 버짓 게이트(배포 전 차단)의 *배포 후* 보완책으로 병행 검토 가치.
- **GitOps 코드/설정 레포 물리 분리** — 앱 소스 레포와 배포 선언(Helm chart·Kustomize 매니페스트) 레포를 완전 격리. 빌드 주기와 배포 주기의 상호 간섭 차단; 현재 단일 레포 구조에서 Docker Compose 설정 분리 시 동일 원칙 적용 가능.
- **Kustomize 오버레이 기반 환경 격리** — 브랜치별 환경 관리 → 설정 드리프트 문제를 `base/` + `overlays/dev|staging|prod/` 디렉터리 구조로 해결. 브랜치 간 충돌 없이 환경별 설정 독립 유지.
- **ClickHouse 관측성 백엔드** — OTel Collector 수집량 급증 시 ClickHouse 컬럼형 DB를 분석 백엔드로 연결해 쿼리 성능 향상 및 인프라 비용 통제. SigNoz·Uptrace 등 OSS 스택이 이미 채용 중; tail-based sampling 기존 권고와 연계 가능.
- **에이전틱 시스템 전용 관측성(LLM Observability)** — 생성형 AI 파이프라인 특이 오류(토큰 소진·모델 드리프트·레이턴시 급등)와 처리 비용을 전용 메트릭으로 추적. AI-ops 플랫폼 운영 직접 해당; OTel span에 `gen_ai.*` Semantic Convention 속성 태깅 권고.

---

## 출처

- [SLO-based Progressive Delivery with Argo Rollouts/Flagger](https://keploy.io)
- [ClickHouse for Observability](https://clickhouse.com)
- [KSPM & Kubernetes Security](https://accuknox.com)
- [GitOps Config Separation & Kustomize Overlays](https://devopstales.com)
- [LLM Observability Trends](https://rootly.com)

---

## 위키화 후보

- **Argo Rollouts SLO 자동 롤백 패턴** — 카나리 + 메트릭 분석 게이트 + 자동 롤백 3단 구조; 에러 버짓 게이트(배포 전)와의 레이어 관계 도식 포함 노트

---

## 프로필 반영 후보 (저위험)

- **ClickHouse** — OTel Collector 설정 권고 패턴에 분석 백엔드 옵션으로 추가 (기존 tail-based sampling 항목 확장)
- **`gen_ai.*` OTel Semantic Convention** — LLM 워크로드 span 속성 표준화 항목으로 OTel 권고 패턴에 반영

---

## 승인 필요 (고위험)

*(없음 — Argo Rollouts·Kustomize는 현재 Docker Compose 단일 호스트 환경에서 직접 도입 대상이 아님; 학습·미래 이관 대비 기록으로 한정)*

---

## 신규 도구 후보 (에이전트/스킬)

*(없음)*
