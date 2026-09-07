---
date: 2026-07-18
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-18

## 오늘 배운 것
- **Docker Engine AuthZ 플러그인 우회 보도(CVE-2026-34040, CVSS 8.8 주장)** — 1MB 초과 패딩 요청 시 인가 로직 무력화→특권 컨테이너 생성 가능. 원문 재검증 도구(WebSearch/WebFetch) 접근이 이번 세션에서 차단되어 CVE 번호 자체는 NVD 등 1차 소스로 재확인하지 못했습니다. Docker Compose 환경 특성상 파급력이 크므로, **적용 전 Docker 공식 보안 어드바이저리로 재확인 권장**.
- **GitHub Actions 2026 보안 로드맵**(github.blog, 공식 채널) — 호스팅 러너 L7 egress 방화벽 도입 + 시크릿을 레포/브랜치/환경/워크플로 단위로 스코핑(레포 쓰기권한 자동결합 폐지) 예고. 공식 출처라 신뢰도 상대적으로 높음.
- **AsyncAPI npm 공급망 침해 사례**(stepsecurity.io) — 계정탈취가 아니라 `pull_request_target` 워크플로 오설정(외부 PR 코드 실행→봇 PAT 유출)이 원인이라는 보도. CI 보안 체크리스트에 반영할 만한 구체적 반면교사이나 단일 출처라 원문 재확인은 못 함.
- **Gitea Docker 헤더 기반 인증 취약점 보도(CVE-2026-20896, CVSS 9.8 주장)** — `X-WEBAUTH-USER` 헤더를 발신지 검증 없이 신뢰. CVE 번호 자체는 미확인이지만, "리버스 프록시 뒤 헤더 기반 인증은 발신지 검증 필수"라는 일반 원칙은 Caddy 라우팅 구성에도 유효한 반면교사로 채택.
- npm v12의 install script 기본 차단 주장(techtimes.com)과 Progressive Delivery 수치(200%/68%, azati.ai)는 **출처 신뢰도가 낮아(비전문 매체·마케팅성 블로그, 단일 출처) 폐기**합니다.

## 출처
- [Docker CVE-2026-34040 관련 보도](https://thehackernews.com/2026/04/docker-cve-2026-34040-lets-attackers.html) (원문 재검증 미완료)
- [GitHub Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [AsyncAPI npm 공급망 침해 분석](https://www.stepsecurity.io/blog/compromised-next-branch-pushes-malicious-asyncapi-generator-generator-helpers-and-generator-components-to-npm)
- [Gitea Docker 이미지 취약점 관련 보도](https://thehackernews.com/2026/07/threat-actors-probe-gitea-docker-flaw.html) (원문 재검증 미완료)

## 위키화 후보
- `pull_request_target` + 시크릿 오설정 패턴 — CI 공급망 침해의 반복 원인으로 개념 노트화 가치 있음.

## 프로필 반영 후보 (저위험)
- CI 보안 체크리스트에 "`pull_request_target` 사용 워크플로는 시크릿 접근 금지/분리" 항목 추가.
- 리버스 프록시 헤더 기반 인증(`X-WEBAUTH-USER` 류) 사용 시 발신지 검증 여부 점검 항목 추가.

## 승인 필요 (고위험)
- 위 CVE 2건(2026-34040, 2026-20896)은 원문 미검증 상태이므로, **실제 패치 적용·긴급 대응 액션은 승인 없이 진행하지 않고** NVD/벤더 공식 어드바이저리 확인 후 별도 보고합니다.

## 신규 도구 후보 (에이전트/스킬)
(없음)
