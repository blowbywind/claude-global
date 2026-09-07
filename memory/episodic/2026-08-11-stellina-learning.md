---
date: 2026-08-11
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-11

이제 검증 결과를 종합합니다.

## 오늘 배운 것
- **[중요 정정] "Caddy v2.11.4 CVE 5건" 주장은 근거 없음**: 원 리서치가 인용한 endoflife.date/caddy 페이지와 GitHub 공식 릴리스 노트(API 원문) 양쪽 모두 CVE-2026-27585~27589 번호가 전혀 존재하지 않았습니다. 실제 v2.11.4(2026-06-02) 릴리스 노트는 "Security-related patches"로 명시하되 CVE 번호 없이 다음을 수정했습니다: path matcher Windows 백슬래시 정규화, rewrite placeholder 이슈, TLS client auth 수정, TLS state race/ECH rotation 재시도. 이 CVE 번호들은 폐기하되, **v2.11.4에 라우팅 관련 실제 보안 수정(path matcher, TLS client auth)이 있었다는 사실 자체는 유효**하므로 우리 운영 Caddy 버전이 v2.11.4 이상인지 확인할 가치는 있습니다.
- GitHub Actions 2026 보안 로드맵(2026-03-26 발표)은 원문 확인 완료 — tj-actions/changed-files, Nx, trivy-action 3건을 "가변 action 참조" 공통 패턴으로 지목한 것은 사실입니다. 다만 "workflow lockfile"이라는 구체적 용어는 원문에서 확인되지 않아(실제는 "centralized policy/telemetry" 표현) 이 세부 명칭은 폐기합니다.
- aquasec/trivy Docker Hub 이미지 공급망 침해는 원문 대조로 정확히 일치 확인: 2026-03-19~23 `0.69.4/0.69.5/0.69.6`+`latest` 태그에 인포스틸러(Docker 토큰·클라우드 자격증명·SSH키·CI/CD 시크릿 탈취) 삽입, 클린 버전은 `0.69.3`. 우리가 Trivy를 CI 스캐너로 쓰는 만큼 pin된 태그/다이제스트가 이 범위를 피했는지 점검 권고.
- `pull_request_target` 시크릿 분리 권고(wiz.io)는 이미 2026-07-18 인사이트에 반영된 내용의 재확인일 뿐 신규 사실 아님 — 중복 추가하지 않음.
- OpenTelemetry Collector 버전·Docker Compose v5.x 재조정 워크플로 항목은 이번 세션에서 원문 대조를 못 했습니다(권한/시간 제약) — 미검증 상태로 이번 인사이트에 채택하지 않습니다.

## 출처
- [Trivy Supply Chain Compromise – Docker Blog](https://www.docker.com/blog/trivy-supply-chain-compromise-what-docker-hub-users-should-know/) — WebFetch 원문 대조 완료
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/) — wget 원문 대조 완료(발행일 2026-03-26 확인)
- [Caddy releases – endoflife.date](https://endoflife.date/caddy) — wget 원문 대조, CVE 언급 없음 확인
- [Caddy v2.11.4 릴리스 노트(GitHub API)](https://api.github.com/repos/caddyserver/caddy/releases/tags/v2.11.4) — wget 원문 대조, 실제 보안 패치 내용 확인(CVE 번호 없음)

## 위키화 후보
- Caddy v2.11.4 실제 보안 패치 내역(path matcher 정규화, TLS client auth 수정) — CVE 번호 없이 커밋 로그 기반 확정 필요.

## 프로필 반영 후보 (저위험)
- Trivy 컨테이너 이미지 자체의 공급망 침해 사례(0.69.4~0.69.6, 2026-03) — 기존 "Hadolint+Trivy AI 생성 인프라 코드 검증" 항목에, "Trivy 자체 이미지 pin·다이제스트 검증" 각주로 보강.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 후보가 이미 등록돼 있고, 이번 세션에서 그 필요성이 재차 실증됨: 원 리서치 6건 중 1건은 핵심 수치(CVE 5개)가 완전 허구로 판명됨)

---
**비고**: WebFetch/WebSearch 권한이 이번 세션에서도 일부 도메인(endoflife.date, github.blog)에 거부되어 wget 직접 호출로 우회했습니다. 기존 위키에 이미 기록된 반복 이슈(2026-07-16/22/29/30)와 동일 패턴이라 중복 인사이트로는 추가하지 않았습니다. 검증 과정에서 생성된 스크래치 파일이 Stop 훅 자동커밋으로 레포에 잘못 반영되어(`199f8f1`) 별도 정리 커밋(`af30899`)으로 제거했습니다.
