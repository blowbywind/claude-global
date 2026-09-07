---
date: 2026-08-20
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-20

## 오늘 배운 것
- GitHub Actions 2026 보안 로드맵에 실제로 "workflow execution protections"(ruleset 프레임워크 기반 실행 제어)와 "evaluate mode"(정책 미강제 시뮬레이션 롤아웃) 항목이 원문에 존재함을 직접 대조로 확인 — 기존 egress firewall/Actions Data Stream 인사이트에 추가할 신규 항목.
- CVE-2026-41940(cPanel/WHM 인증우회)을 침해된 GitHub 저장소·호스팅 러너로 악용해 583개 워크플로가 외부 서버를 스캔·공격한 사례를 원문(TheHackerNews)으로 확인 — 러너를 공급망 공격 인프라로 전용하는 신종 패턴, 워크플로 감사 체크리스트 참고 대상.
- NIST가 2026-04-15부터 NVD 큐레이션을 "우선순위 보강 모델"로 축소(2025년 연 4.2만건 처리에도 적체 심화)했음을 Docker 공식 블로그로 확인 — 컨테이너 이미지의 전이 의존성 CVE가 미보강 상태로 하위 이미지에 전파되는 리스크, 기존 "최소화 베이스 이미지 CVE 저감" 인사이트의 전제(NVD 완전성)를 보강할 필요.
- OTel Collector 공식 릴리스 최신판은 v0.159.0(GitHub Releases 원문 확인, v1.x 릴리스 자체가 존재하지 않음) — 기존 기록(2026-07-27 "v1.49.0")과 버전 체계 불일치, 오기 가능성 확인.
- 프로그레시브 딜리버리 위험도별 전략 매핑(저위험=rolling, 중위험=blue-green, 고위험=canary+soak)은 원문(Rackspace 가이드)에서 유사 프레임 확인. 단 "AI 리스크 산정 자동선택" 부분과 feature flag 시장규모 수치는 원문 대조 미실시·근거 약함으로 제외.
- Wiz의 "Snowflake 레포 workflow injection·Jira 크리덴셜 유출" 주장은 인용된 원문(wiz.io/blog/github-actions-security-guide)에 "Snowflake"/"Jira" 언급 자체가 없어 오귀속으로 판단, 폐기. CVE-2026-72971도 출처가 검색 스니펫뿐(원문 URL 미제시)이라 폐기.

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Attackers Weaponize GitHub Actions Runners to Target cPanel and WHM Servers](https://thehackernews.com/2026/07/attackers-weaponize-github-actions.html)
- [NIST Narrows the NVD: What Container Security Programs Should Reassess](https://www.docker.com/blog/nist-narrows-the-nvd-what-container-security-programs-should-reassess/)
- [opentelemetry-collector-releases Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)
- [Deployment Strategies Guide](https://spot.rackspace.com/blog/deployment-strategies)

## 위키화 후보
- "NIST NVD 큐레이션 축소(2026-04-15~)와 컨테이너 전이 의존성 CVE 미보강 리스크" — 기존 컨테이너 보안 체크리스트 근거 수치와 직결되는 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- CI 보안 체크리스트에 "GitHub Actions workflow execution protections(ruleset 기반)/evaluate mode(시뮬레이션 롤아웃)" 사전 검토 항목 추가.

## 승인 필요 (고위험)
- 기존 인사이트(2026-07-27자 "OTel Collector v1.49.0")가 실제 공식 릴리스 버전체계(v0.x대, 최신 v0.159.0)와 불일치함을 원문 대조로 확인했습니다. 오기로 판단되나, 기존 기록 정정은 사용자 확인 후 진행을 요청합니다.

## 신규 도구 후보 (에이전트/스킬)
(없음)
