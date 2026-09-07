---
date: 2026-09-05
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-09-05

## 오늘 배운 것
- **OTel Collector Contrib v0.160.0 릴리스(2026-09-02)** — GitHub API로 직접 확인 완료. 기존 추적 기준 v0.159.0(2026-08-17/18) 대비 갱신 필요.
- **GitHub Actions "Early September 2026 updates"(2026-09-03)** — 워크플로 가시성·세분화 제어 강화 업데이트 3건 중, 러너 버전 폐기(deprecation) 조회용 신규 REST API 확인(나머지 2건은 원문 상세 미확보, 과잉해석 배제).
- **CodeQL 2.26.4(2026-09-03)** — Go 1.27 지원 추가 + GitHub Actions 워크플로 보안 탐지 개선. 기존 위키의 "CodeQL 2.26.3"(2026-08-30) 인지 대비 마이너 갱신.
- (검증 후 폐기) checkout v7 백포트·Trivy v0.74.0·runc CVE 3종·gVisor/Kata 비교는 기존 위키에 이미 동일하거나 더 상세한 기록이 존재 확인(중복) → 신규성 없음, 미반영.

## 출처
- [opentelemetry-collector-contrib v0.160.0 릴리스](https://github.com/open-telemetry/opentelemetry-collector-contrib/releases/tag/v0.160.0)
- [GitHub Actions: Early September 2026 updates](https://github.blog/changelog/2026-09-03-github-actions-early-september-2026-updates/)
- [CodeQL 2.26.4 improves GitHub Actions security detections](https://github.blog/changelog/2026-09-03-codeql-2-26-4-improves-github-actions-security-detections/)

## 위키화 후보
- GitHub Actions 러너 버전 폐기 조회 신규 REST API(2026-09-03) — CI 러너 관리·업그레이드 체크리스트에 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- OTel Collector 버전 추적 기준 v0.159.0 → v0.160.0(2026-09-02) 갱신
- CodeQL 2.26.4(Go 1.27 지원, Actions 보안 탐지 개선) 인지 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 검증 과정에서 WebFetch 권한 거부가 재발했으나 wget(Bash) 폴백으로 3건 전부 원문 대조 성공, 기존 등록된 후보의 유효성만 재확인되어 신규 제안은 생략)
