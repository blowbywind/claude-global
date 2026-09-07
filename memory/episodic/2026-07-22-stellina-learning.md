---
date: 2026-07-22
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-22

## 오늘 배운 것
- **GitHub Actions 2026 보안 로드맵**: 결정론적 워크플로 의존성, 중앙집중식 실행 정책, 시크릿 스코프 강화, 호스티드 러너 아웃바운드 네트워크 제어 예고 — 원문 확인 완료
- **CI 보안 체크리스트 재확인**: 액션 SHA 고정, OIDC로 정적 크리덴셜 대체, job 단위 최소권한, `pull_request_target` 미신뢰 코드 실행 금지 — 기존 위키 항목과 일치, 신규 아님
- **Kubescape 4.0**: 런타임 위협 탐지 + AI 시대 보안 기능 추가 — k8s 전제 도구라 현재 Docker Compose 인프라엔 비적용, k8s 전환 시 재검토 후보(기존 2026-07-05 CADR 메모와 동일 성격)
- **OTel Collector v0.157.0**(2026-07-22) 릴리스, contrib 일부 exporter의 trace 기능 2026-12 제거 예정(deprecated) — GitHub 공식 릴리스 페이지로 확인
- **Docker Compose 보안 권고**(비root 실행, distroless 멀티스테이지, secrets 파일 마운트, cap drop+read-only fs) — 출처가 개인 블로그(Gaulton Lab, 2026-02-05 게시)라 권위성은 낮으나, 내용 자체는 기존 위키 컨테이너 보안 체크리스트와 일치해 참고용으로만 채택

**검증 후 폐기한 항목**:
- "Intuit이 Argo Rollouts로 47개 메트릭·3윈도우 기준 자동승격, 배포발 장애 74% 감소" — 원문(oneuptime.com) 직접 fetch 결과 "Intuit"·"74%" 텍스트가 본문에 없음. 환각으로 판단해 폐기
- "EU Cyber Resilience Act 2026-09 SBOM 의무화" — 출처(techsaas.cloud)가 HTTP 530(오리진 응답 없음)으로 접근 불가. 규정 자체는 실재하나 이 출처로는 시한을 검증 불가하여 폐기

## 출처
- [GitHub Actions 2026 보안 로드맵](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [GitHub Actions Security Best Practices](https://www.stepsecurity.io/blog/github-actions-security-best-practices)
- [GitHub Actions Security Guide](https://www.wiz.io/blog/github-actions-security-guide)
- [Kubescape 4.0 관련 - Best Open Source Kubernetes Security Tools](https://www.armosec.io/blog/best-open-source-kubernetes-security-tools/)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)
- [Trivy Security Advisory GHSA-69fq-xp46-6x23](https://github.com/aquasecurity/trivy/security/advisories/GHSA-69fq-xp46-6x23)
- [Docker Compose in 2026: best practices](https://www.gaultonlab.org/posts/docker-compose-best-practices/) (개인 블로그, 참고용)

## 위키화 후보
- GitHub Actions 2026 보안 로드맵(결정론적 의존성·아웃바운드 네트워크 제어) — 기존 CI 체크리스트에 없는 신규 축이라 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- CI 체크리스트에 "GitHub Actions 2026 로드맵 대비 항목(러너 아웃바운드 네트워크 제어, job 단위 시크릿 스코프 강화)" 사전 검토 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 유사 목적의 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재함을 이번 검증 과정에서 확인)
