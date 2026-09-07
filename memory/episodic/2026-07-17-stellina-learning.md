---
date: 2026-07-17
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-17

## 오늘 배운 것
- **GitHub Actions 2026 로드맵 — Actions Data Stream**: 러너 실행 텔레메트리를 S3/Event Hub로 실시간 스트리밍(추후 프로세스·파일시스템 모니터링까지 확장 예정). 러너 L7 egress 방화벽·SHA 락파일화는 위키 `github-actions-dependencies.md`에 이미 반영됨 — Data Stream만 신규.
- **서드파티 Action 공급망 공격 반복 확인**(tj-actions/changed-files, Nx, trivy-action) → 전체 커밋 SHA 고정 필수, 외부 PR의 핀 변경 요청은 의심 대상으로 취급. 기존 "Actions SHA 전체 고정" 체크리스트를 구체적 근거로 보강.
- **CI 최소권한 원칙**: `GITHUB_TOKEN` 기본 read-only, `pull_request_target`(특히 포크 PR) 트리거 회피, 시크릿은 필요 스텝에만 스코핑 — autobots CI 파이프라인 점검 항목으로 반영 가능.
- **runC 컨테이너 이스케이프 CVE 3건**(CVE-2025-31133, CVE-2025-52565, CVE-2025-52881) → runC 1.1.12+ 업그레이드 필요. Docker Compose 호스트 런타임 버전 점검 대상.
- **컨테이너 보안 패러다임 전환**: 정적 스캔 → 런타임 도달성 분석(reachability). 프로덕션 이미지 critical/high 취약점 중 실제 실행 경로에 도달하는 것은 일부(예시 87건 중 30~50건)뿐 → Trivy 스캔 결과 우선순위화(노이즈 제거)에 참고할 개념.
- **OTel Collector v0.156.0**(2026-07-08 기준, semantic conventions v1.38.0 갱신) — 기존 OTel 메모(`concepts-otel.md`) 갱신 대상.

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [GitHub Actions Security Guide (Wiz)](https://www.wiz.io/blog/github-actions-security-guide)
- [GitHub Actions Security Checklist (Aikido)](https://www.aikido.dev/blog/checklist-github-actions)
- [Critical runC vulnerabilities allow container escape (Gopher Security)](https://www.gopher.security/news/critical-runc-vulnerabilities-allow-container-escape-in-docker-kubernetes)
- [Container Security Solutions: Runtime Scanning 2026 (Armo)](https://www.armosec.io/blog/container-security-solutions-runtime-scanning-2026/)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector/releases)

※ "OIDC trusted publishing 확장"과 "프로그레시브 딜리버리 표준화" 항목은 근거 URL이 동일 로드맵 글에 재인용되거나 출처(calmops.com)가 1차 자료로 약해 이번 노트에서는 제외했습니다(기존 카나리+에러버짓 메모로 충분히 커버됨).

## 위키화 후보
- 신규 노트: runC CVE-2025-31133/52565/52881 — 컨테이너 런타임 보안, 업그레이드 기준(1.1.12+)
- 신규 노트: 취약점 스캔의 "런타임 도달성 분석(reachability)" — 정적 스캔 결과 노이즈 제거 트렌드

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트 용어에 "런타임 도달성 분석(reachability)" 추가 (Trivy 정적 스캔 다음 우선순위화 단계로)
- CI 체크리스트에 "Actions Data Stream(러너 실행 텔레메트리)" 개념 추가

## 승인 필요 (고위험)
- runC 1.1.12+ 실제 업그레이드는 서버 런타임 변경이므로, 적용 전 버전 점검 결과와 함께 별도 승인 요청 필요 (학습 자체는 저위험, 적용은 인프라 변경 정책 대상)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
