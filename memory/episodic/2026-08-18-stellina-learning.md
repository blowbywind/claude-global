---
date: 2026-08-18
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-18

## 오늘 배운 것
- GitHub Actions 보안 실무 권고에 "정적 크리덴셜 대신 OIDC 전면 채택" 원칙이 확인됨 — 기존 `pull_request_target` 시크릿 분리(7-18)·SHA 고정(7-16) 인사이트와 결합해 CI 시크릿 체크리스트를 보강할 근거로 사용.
- Caddy 2.11.x 계열(최신 2.11.4, 2026-06-03) 신기능: ECH 키 자동회전, 리버스프록시 동적 upstream + passive health check, 로그 압축이 `roll_gzip`→`roll_compression`(zstd) 전환 예정 — 단일 벤더 블로그 출처라 공식 Caddy 릴리스노트 재확인 전까지는 참고용으로만 보유.
- 프로그레시브 딜리버리(카나리아) 모범사례: Argo Rollouts/Flagger로 5% 트래픽부터 시작 + 핵심 기능은 feature flag로 즉시 롤백 경로 확보, 트래픽 분할은 서비스메시(Istio) 또는 Argo Rollouts weighted routing으로 수행.
- CVE-2026-20896: 이번 검색에서 결과 자체가 없어 실존 여부가 불확실함(오기재 가능성) — 7-22 기록의 "원문 미검증" 상태를 넘어 "번호 자체 재확인 필요" 단계로 격상.
- CVE-2026-34040: NVD 페이지는 존재하나 상세 미확인, 계속 미검증 상태 유지(변동 없음).
- runc 관련으로 제시된 CVE 목록(2025-61726 등 다수)은 출처가 osv.dev 단일 링크뿐이고 번호가 다수·구체적이라 오류/환각 위험이 있어 이번엔 채택하지 않음(추가 검증 없이는 폐기).

## 출처
- [GitHub Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Future of GitHub Actions Security](https://blog.gitguardian.com/future-of-github-actions-security/)
- [Tetragon vs Falco Runtime Security 2026](https://safeguard.sh/resources/blog/tetragon-vs-falco-runtime-security-2026)
- [Caddy 2.11.4 announcement](https://hatchbox.io/announcements/101-caddy-2-11-4)
- [Deployment Strategies](https://spot.rackspace.com/blog/deployment-strategies)
- [CVE-2026-34040 — NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-34040)

## 위키화 후보
- Caddy 2.11 신기능(ECH 자동회전/passive health check/zstd 로그압축) 개념 노트 — 공식 릴리스노트 대조 후 작성 권장.
- 프로그레시브 딜리버리(카나리아 5%+feature flag 롤백) 개념 노트.

## 프로필 반영 후보 (저위험)
- CI 보안 어휘에 "OIDC 전면 채택(정적 크리덴셜 대체)" 용어 추가.
- 배포 전략 어휘에 "프로그레시브 딜리버리(카나리아 5%→feature flag 롤백)" 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
