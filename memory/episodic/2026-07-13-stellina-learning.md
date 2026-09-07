---
date: 2026-07-13
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-13

## 오늘 배운 것
- GitHub Actions 2026 보안 로드맵: 워크플로 `lockfile`(액션 SHA 전이의존성까지 고정), 액터/이벤트 기반 실행 제한, 워크플로·브랜치·환경 단위 scoped secrets 예고 — 기존 "Actions SHA 고정+Renovate" 항목의 향후 확장 방향으로 유효.
- 신규 액션 버전 채택 전 7~14일 지연(delay-adoption) 정책이 공급망 공격 탐지창(대부분 1주 미만) 특성상 유효한 방어책 — Renovate 자동PR 머지 타이밍 정책에 반영 검토 가치.
- Caddy 2.11.2: 파일 변경분만 반영하는 `SIGUSR1` 무중단 재로드, 신규 Caddyfile 파싱 실패 시 커넥션 끊김 없이 기존 설정 유지(자동 롤백형 동작) — 2026-06-28 근접사고 이후 확립한 라이브 반영 5단계 절차 보완 근거로 직접 관련.
- Caddy HTTP/3 컨테이너 튜닝: `cap_add: NET_ADMIN` 부여 시 호스트 sysctl 변경 없이 quic-go가 UDP 버퍼 확장 가능 — Docker Compose Caddy 서비스 정의에 반영 가능한 실무 팁.
- 컨테이너 공급망 검증은 SBOM+provenance를 이미지 다이제스트 OCI attestation으로 만들고 admission(Kyverno 등)에서 일괄 검증하는 구조가 표준화 — 기존 Kyverno/Sigstore 노트와 정합, 신규 정보는 아니고 강화 확인 수준.
- OpenTelemetry 프로덕션 채택률 상승(2025년 6%→2026년 11%, Grafana 자체 설문 기준) 및 Collector 단 샘플링/필터링이 관측성 비용 통제 핵심 지점으로 부상 — 단일 벤더(Grafana) 설문이라 수치는 참고용으로만 취급.

※ "reachability 기반 취약점 필터링(Orca 블로그)"과 "OTel GenAI 95% 채택 전망(devx.com)"은 벤더/단일 출처 마케팅성 블로그로 수치가 과장됐을 가능성이 있어 핵심 학습에서 제외하고 참고 수준에만 남김.

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [GitGuardian: The Future of GitHub Actions Security](https://blog.gitguardian.com/future-of-github-actions-security/)
- [Caddy 공식 Docker 이미지 문서](https://hub.docker.com/_/caddy)
- [Cloudsmith: 2026 Guide to Software Supply Chain Security](https://cloudsmith.com/blog/the-2026-guide-to-software-supply-chain-security-from-static-sboms-to-agentic-governance)
- [Grafana Labs: 2026 Observability Trends](https://grafana.com/blog/2026-observability-trends-predictions-from-grafana-labs-unified-intelligent-and-open/)

## 위키화 후보
- Caddy SIGUSR1 무중단 재로드 + 실패 시 자동 롤백 동작 — 기존 `caddyfile.md`에 신규 절 추가 가치 있음.

## 프로필 반영 후보 (저위험)
- Caddy Compose 튜닝 지식(`cap_add: NET_ADMIN`, HTTP/3 UDP 버퍼) — Caddy 라우팅 전문성 항목에 추가.
- GitHub Actions scoped secrets(워크플로·브랜치·환경 단위) 개념 — 환경변수·시크릿 관리 전문성 항목에 추가.

## 승인 필요 (고위험)
- 기존 라이브 Caddyfile 안전 반영 절차(2026-06-28)에 `caddy validate` 후 `caddy reload` 대신/추가로 `SIGUSR1` 무중단 재로드를 도입하는 것은 근접사고 재발방지용 확정 절차의 변경이므로 실제 적용 전 사용자 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] caddy-safe-apply — 기존 5단계 라이브 Caddyfile 반영 절차(후보본 수정→validate→백업확인→반영→curl 검증)를 스크립트화하고 `SIGUSR1` 재로드 옵션을 통합하는 스킬.
