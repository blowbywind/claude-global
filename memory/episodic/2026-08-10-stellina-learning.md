---
date: 2026-08-10
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-10

## 검증 결과 요약

리서치 8건 중 6건은 원문 fetch로 사실관계 일치 확인, 2건은 출처 불일치로 폐기했습니다.

- **Trivy Docker Hub 공급망 침해**: docker.com 공식 블로그 재확인 — 2026-03-19~23 오염(`0.69.4/0.69.5/0.69.6`+`latest`), 클린버전 `0.69.3`, 유출대상은 레지스트리 토큰·클라우드 자격증명(AWS/GCP/Azure)·SSH키·K8s 토큰·CI/CD 시크릿·`.env`까지 확인(리서치 주장보다 범위가 넓음).
- **Argo Rollouts/Flagger 버전·로드맵**: bex.co 원문 재확인 — Flagger `v1.44.0`(7/14), Argo Rollouts `v1.9.1`(7/17)·`v1.10.0-rc1`(7/3), `RolloutPlugin` CRD(ArgoCon 발표, StatefulSet/DaemonSet 확장) 모두 일치.
- **Trivy `v0.71.0`**: tech-insider.org 원문 재확인 — 2026-06-01 릴리스, .NET 탐지·CycloneDX 1.6 지원 일치.
- **폐기 1**: Docker Compose 시크릿 `/run/secrets` 파일마운트 권고 — 인용 출처(last9.io) 원문에 해당 내용 자체가 없음(`run/secrets` 0건 매치). 일반론으로는 맞으나 출처 미검증이라 이번엔 채택하지 않음.
- **폐기 2**: 헬스체크 "10~15초 간격 권장" 수치 — 같은 출처 원문에 없는 숫자. `depends_on: condition: service_healthy` 자체는 원문에서 확인되어 그 부분만 채택.

---

## 오늘 배운 것
- Trivy Docker Hub 이미지 공급망 침해(2026-03-19~23, 4일 12시간) 사고의 정확한 타임라인·오염 태그(`0.69.4~0.69.6`+`latest`)·클린 버전(`0.69.3`)·유출 대상(레지스트리 토큰/클라우드 자격증명/SSH키/K8s 토큰/CI-CD 시크릿/`.env`)을 원문으로 재확인 — 기존 사고사례 근거를 구체화
- Trivy 최신 안정판 `v0.71.0`(2026-06-01) — .NET 취약점 탐지·CycloneDX 1.6 SBOM 포맷 지원 추가, SBOM 생성 도구체인 최신화 근거로 사용 가능
- Argo Rollouts `v1.9.1`(7/17)·`v1.10.0-rc1`(7/3, `RolloutPlugin` CRD로 Deployment 외 StatefulSet/DaemonSet까지 확장 예정), Flagger `v1.44.0`(7/14) — CNCF 상태 차이(Flagger=Graduated/Flux 계열, Argo Rollouts=Incubating/Argo 계열)가 도구 선정 축임을 원문으로 재확인
- Docker Compose `depends_on: condition: service_healthy`는 healthcheck 통과 전까지 하위 서비스 시작을 보류시켜 기동 순서를 보장하는 표준 패턴(원문 확인) — 단, 구체적 체크 간격 수치는 출처 미확인으로 제외

## 출처
- [Trivy supply chain compromise: What Docker Hub users should know](https://www.docker.com/blog/trivy-supply-chain-compromise-what-docker-hub-users-should-know/)
- [Flagger vs Argo Rollouts in 2026](https://bex.co/blog/2026/08/02/flagger-vs-argo-rollouts-progressive-delivery-git-push-paas)
- [Trivy Tutorial 2026](https://tech-insider.org/trivy-tutorial-2026/)
- [Docker Compose Health Checks Guide](https://last9.io/blog/docker-compose-health-checks/) (healthcheck 개념만 채택, 시크릿·간격 수치는 미확인으로 제외)

## 위키화 후보
- Argo Rollouts `RolloutPlugin` CRD 로드맵(ArgoCon, StatefulSet/DaemonSet 확장) — 카나리 도구선정 노트 갱신용 신규 개념

## 프로필 반영 후보 (저위험)
- 카나리 배포 도구선정 가이드에 버전 각주 갱신(Argo Rollouts `v1.9.1`/Flagger `v1.44.0`, RolloutPlugin 로드맵)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
비고: 검증 과정에서 생성한 임시 fetch 파일(`/home/bbw/ai-ops/.tmp_verify/`)이 남아 있습니다. 삭제는 확인 후 진행하겠습니다 — 삭제해도 될까요?
