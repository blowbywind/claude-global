---
date: 2026-08-27
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-27

## 오늘 배운 것
- **GitHub Actions 8/26 재차 다운타임(원인 확인)**: DB primary 장애 발생 → replica 페일오버했으나 GitHub 공식 인시던트 리포트에 "완전히 해소되지 않음(did not fully mitigate)"으로 명시, 이후 inbound 트래픽 스로틀링. CI/CD 가용성 리스크 인지용으로 반영.
- **[신규] CVE-2026-72971 확인**: Windows Container Isolation FS Filter Driver(`unionfs.sys`) tampering 취약점(Important), 8월 패치 시점 이미 공개 상태(Publicly disclosed: Yes / Exploited: No). Windows 컨테이너 워크로드 사용 시 우선 패치 대상.
- **OTel Collector v0.159.0(2026-08-18) 릴리스 재확인** — 기존 버전 추적 갱신(Latest 태그 확인).
- **Caddy 최신판 v2.11.4(변동 없음) 재확인** — 기존 버전 기준점 유효.
- **GitHub Actions 2026 보안 로드맵(secure-by-default, workflow lock file, 중앙집중 실행정책) 공식 재확인** — 기존 위키 마일스톤 기록과 일치.

※ 리서치 결과 중 "카나리 1% 시작→70% 자동롤백 단축(Harness CD)", "컨테이너 침해율 82%" 두 항목은 인용된 출처(calmops, iterasec) 본문을 직접 대조한 결과 해당 수치가 확인되지 않아 폐기했습니다.

## 출처
- [GitHub Actions was down yet again](https://www.theregister.com/devops/2026/08/26/github-actions-was-down-yet-again/5292679)
- [Microsoft Patch Tuesday August 2026](https://cybersecuritynews.com/microsoft-patch-tuesday-update-august-2026/)
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)
- [Caddy Releases](https://github.com/caddyserver/caddy/releases)

## 위키화 후보
- CVE-2026-72971(Windows Container Isolation `unionfs.sys`) — 신규 concept 노트 가치 있음(우리 스택은 Linux 컨테이너 중심이라 참고용 표기 필요)

## 프로필 반영 후보 (저위험)
- "DB primary 장애→replica 페일오버가 완전한 해소를 보장하지 않는다"는 GitHub Actions 사례를 CI/CD 가용성 리스크 인지 항목으로 반영

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
