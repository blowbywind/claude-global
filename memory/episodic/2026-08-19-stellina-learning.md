---
date: 2026-08-19
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-19

## 오늘 배운 것

- **GitHub Actions 2026-08-06~07 대규모 장애(RCA 원문 대조 확인)**: 영향 구간 15:05~00:14 UTC(피크 시 워크플로 71% 인프라 실패, 나머지 75%는 5분 이상 지연). 원인은 ①내부 Actions 이벤트·잡 생성 서비스의 정기 배포가 용량·동시성 취약점을 노출 ②job-assignment 경로에서 무효 job을 무한 재시도하는 잠재 버그가 장기 지연을 유발. GitHub-hosted·self-hosted 러너 모두 영향, Copilot 코드리뷰/코딩 에이전트·Pages·웹훅 전달도 연쇄 영향.
- **Grafana Alloy "OpenTelemetry Engine" 모드(GrafanaCON 2026, Grafana 13)**: 표준 OTel Collector YAML로 Alloy를 직접 설정할 수 있게 되어 완전 OTel-네이티브 파이프라인 구성 가능(원문 확인 완료).
- **Grafana Labs 2026 Observability Survey**: 조직 77% 이상이 오픈소스/오픈표준 관측성 스택 채택, 38% 이상은 여전히 복잡성을 최대 과제로 지목(원문 확인 완료).
- **SLSA provenance attestation + Cosign/Sigstore 서명 체인** 패턴 재확인(원문 확인) — 단, 기존 위키(`slsa-provenance-자동화-패턴`, `kyverno-sigstore-어드미션-강제`)에 이미 기록된 내용과 중복이라 신규 위키화는 불필요.
- **검증 탈락(원문 미확인으로 폐기)**: Docker Compose v5.4.0 릴리스노트(공식 페이지 JS 렌더링이라 정적 대조 실패, 버전 언급 없음), Dependabot `pull-request-branch-name`/CodeQL 2.26.2 Swift 6.3.3 항목(GitHub changelog 08월 목록 1~2페이지에 해당 항목 없음), SBOM "조직 86% tool sprawl" 통계 및 BuildKit attestation 플래그 세부(cloudsmith 블로그 JS 렌더링으로 정적 검증 실패). 리서치 산출물에서 전부 제외.

## 출처
- [GitHub Actions and Pages Outage — August 6, 2026 (RCA 대조)](https://blog.incidenthub.cloud/github-actions-pages-outage-aug-6-2026)
- [Grafana Labs Launches Grafana 13 at GrafanaCON 2026](https://grafana.com/press/2026/04/21/grafana-labs-launches-grafana-13-at-grafanacon-2026-makes-open-observability-easier-to-run-at-scale/)
- [SBOM and Container Image Signing: Cosign, Sigstore and Supply Chain Security](https://cloud.servermall.com/blog/sbom-and-container-image-signing-cosign-sigstore-and-supply-chain-security-in-the-cloud/)

## 위키화 후보
- GitHub Actions "job-assignment 무한 재시도" 장애 패턴 — 자체 큐/재시도 설계(chain_state, delegation 가드류)에 반면교사로 참고할 idempotency 사례
- Grafana Alloy "OpenTelemetry Engine 모드"(OTel Collector YAML 네이티브 설정) — 기존 "OTel Collector 설정 권고 패턴" 노트에 보강 편입 적합

## 프로필 반영 후보 (저위험)
- "OpenTelemetry Engine 모드"(Grafana Alloy) 용어를 관측성 어휘에 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
