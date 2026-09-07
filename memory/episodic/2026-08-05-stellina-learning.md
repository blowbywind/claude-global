---
date: 2026-08-05
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-05

## 오늘 배운 것
- **Harbor CVE-2026-4404 (CVSS 9.4 Critical)** — Harbor 2.15.0 이하 버전에 하드코딩된 기본 자격증명 취약점. NVD에서 실재 확인됨. 레지스트리 운영 시 즉시 자격증명 교체·버전 점검 필요.
- **OpenTelemetry CNCF Graduated 확정(2026-05-21)** — 제3자 독립 보안감사·거버넌스 검토 통과. CNCF 공식 발표로 확인됨. 옵저버빌리티 표준 채택 판단 근거로 신뢰도 상승.
- **GitHub Actions 2026 보안 로드맵 5대 항목 전체 확인**(결정론적 실행/스코프드 시크릿/실행 보호/텔레메트리 스트림/아웃바운드 네트워크 제어) — github.blog 원문 확인. 기존 위키 노트(2026-07-31)는 3항목만 기록돼 있어 "스코프드 시크릿"·"실행 보호" 2항목 보강 필요.
- **actions/checkout v7 강제 백포트 시점 = 2026-07-16 확정** — GitHub 공식 체인지로그 인용문으로 확인. 기존 SHA 고정 체크리스트 노트에 정확한 날짜 반영 가능.
- **(참고, 저신뢰) Flagger v1.44.0(7/14)·Argo Rollouts v1.9.1(7/17)** — 무명 블로그(bex.co) 단일 출처라 신뢰도는 낮으나 날짜·버전 표기 자체는 확인됨. 기존 비교 노트 버전 갱신용 참고자료로만 사용.

※ 폐기 항목: ①"OTel JS/Python 다운로드 2026-04 신기록" 수치 — 인용 출처(2025-12 발행 정성 인터뷰)에 해당 수치 부재, 환각으로 판단해 폐기. ②"Compose for Kubernetes 변환 없이 직접 배포" — Docker 공식 문서(Compose Bridge) 대조 결과 실제로는 변환(conversion) 필수라 사실과 반대, 폐기. ③Trivy/Nx 공급망 피해, Docker Compose v5.2.0 reconciliation — 사실은 맞으나 위키에 이미 등재된 중복 정보라 신규 학습에서 제외.

## 출처
- [actions/checkout v7 백포트 공지(GitHub 체인지로그 인용)](https://www.rescana.com/post/github-actions-enhances-ci-cd-security-actions-checkout-v7-blocks-common-pwn-request-attack-patterns)
- [GitHub Actions 2026 보안 로드맵](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [CVE-2026-4404 (NVD)](https://nvd.nist.gov/vuln/detail/CVE-2026-4404)
- [OpenTelemetry CNCF Graduated 발표](https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/)
- [Flagger/Argo Rollouts 버전 비교(저신뢰 출처, 참고용)](https://bex.co/blog/2026/08/02/flagger-vs-argo-rollouts-progressive-delivery-git-push-paas)

## 위키화 후보
- Harbor CVE-2026-4404 신규 concept 노트 — 컨테이너 레지스트리 보안 체크리스트에 연결되는 신규 취약점, 기존 노트 없음.
- OpenTelemetry CNCF Graduated 마일스톤 신규 노트 — 기존 방대한 OTel 노트군의 "표준 지위 확정" 시점 기록 가치.

## 프로필 반영 후보 (저위험)
- 기존 `github-actions-2026-로드맵` 노트에 누락된 "스코프드 시크릿"·"실행 보호" 2항목 보강.
- `actions-checkout` SHA 고정 체크리스트에 백포트 확정일(2026-07-16) 반영.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
