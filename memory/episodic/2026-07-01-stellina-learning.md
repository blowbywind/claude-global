---
date: 2026-07-01
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-01

기존 위키 확인 완료. 교차검증 결과 정리한다.

---

**[중복 제거]** 아래 항목은 위키에 이미 승격된 노트가 있어 제외:
- Actions SHA 고정 → `concepts/actions-sha-고정-renovate.md` 존재
- 피처 플래그 배포/출시 분리 → `concepts/openfeature.md` 존재
- OTel 단일 텔레메트리 평면 → OTel 항목 다수 존재
- Expand-then-contract → `concepts/expand.md` 존재

---

## 오늘 배운 것

- **카나리 배포 자동 메트릭 게이트** — 에러율·지연 시간 임계치를 CI 파이프라인에 직접 연동, 기준 이탈 시 자동 롤백(Argo Rollouts / Flagger 패턴). 기존 프로필의 에러 버짓 배포 게이트를 파이프라인 단에서 구현하는 구체적 방법론이다.
- **관측성 비용 통제** — 수집 전단(OTel Collector)에서 필터링+샘플링을 먼저 수행해 불필요한 메트릭·로그 전송량을 줄임. 기존 프로필의 tail-based sampling과 직접 연결되는 비용 제어 레이어다.
- **PR 프리뷰 환경 자동화** — PR마다 독립 임시 환경을 파이프라인에서 자동 구동해 메인 병합 전 프로덕션 수준 검증. Docker Compose 기반 단일 서버에서도 포트/네트워크 분리로 구현 가능하다.
- **읽기 전용 컨테이너 파일시스템** — `readOnlyRootFilesystem: true` + `capabilities: drop: ALL` + `allowPrivilegeEscalation: false` 조합으로 런타임 영속성 공격·악성 스크립트 실행을 차단. 기존 Trivy 정적 스캔의 상호 보완 런타임 레이어다.
- **AI 에이전트 전용 관측성 계측** — 다중 에이전트 협업·LLM 호출 체인을 OTel 스팬으로 계측해 블랙박스 장애 지점 추적. 기존 `service.name`/`container.id` Semantic Conventions 항목을 AI 에이전트 콘텍스트로 확장 적용한다.

## 출처

- [Continuous Delivery Best Practices 2026 — coderaven.io](https://coderaven.io)
- [Observability Cost Control Strategies — motadata.com](https://motadata.com)
- [AI Observability & LLM Monitoring — ibm.com](https://ibm.com)
- [PR Preview Environments in CI/CD — railway.com](https://railway.com)
- [Container Runtime Security: Read-Only FS — orca.security](https://orca.security)

## 위키화 후보

- `concepts/ephemeral-preview-env.md` — PR 프리뷰 환경 자동화: 파이프라인 트리거·포트 격리·정리(cleanup) 전략을 Compose 단일 서버 맥락으로 정리
- `concepts/canary-metric-gate.md` — 카나리 자동 롤백 게이트: Argo Rollouts/Flagger 패턴과 에러 버짓 연계 구현 방법 정리

## 프로필 반영 후보 (저위험)

- `readOnlyRootFilesystem: true` + `drop: ALL` 조합 — 컨테이너 보안 체크리스트에 Trivy 스캔 다음 단계 항목으로 추가
- OTel Collector 전단 필터링·샘플링 — 관측성 비용 통제를 OTel Collector 설정 권고 패턴에 항목 추가

## 승인 필요 (고위험)

*(없음)*

## 신규 도구 후보 (에이전트/스킬)

*(없음)*
