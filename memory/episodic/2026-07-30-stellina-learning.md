---
date: 2026-07-30
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-30

## 오늘 배운 것
- **GitHub Actions 2026 보안 로드맵 (출처 원문 대조 확인)**: tj-actions/changed-files·Nx·trivy-action이 모두 "mutable action reference"(태그/브랜치 등 가변 참조) 공급망 공격을 당함. 대응으로 결정론적 의존성 lock file(퍼블릭 프리뷰 3~6개월, **일반 공개는 6개월** — 리서치 원문의 "6~9개월"은 오기이므로 정정), 엔터프라이즈 egress firewall + Actions Data Stream(실시간 실행 텔레메트리) 도입 예정. CI/CD 파이프라인 담당 업무에 직결.
- **Docker Compose 프로덕션 운영 (원문 코드블록까지 대조 확인)**: `/etc/docker/daemon.json`에 `{"log-driver":"json-file","log-opts":{"max-size":"10m","max-file":"3"}}` 설정 시 신규 컨테이너부터 로그 10MB 단위 로테이션(최대 3개 보관) 적용 — 정확히 일치 확인. 단, `restart: unless-stopped`는 **healthcheck가 unhealthy로 표시돼도 트리거되지 않고 컨테이너가 실제로 exit해야만 재시작**된다는 중요한 뉘앙스 발견(서버 헬스 모니터링 설계 시 주의).
- **시크릿 관리 원칙 (원문 대조 확인)**: Dockerfile·Git 저장소·평문 환경변수에 시크릿을 저장하지 말고, 전용 시크릿 관리 도구로 런타임에 주입 + ephemeral credential 사용을 권고.
- **컨테이너 런타임 보안 진단 (원문 대조, 부분 확인)**: "대다수 K8s 보안 도구는 설정·이미지 스캔에 그쳐 실제 클러스터 내 런타임 위협을 놓친다"는 진단은 원문에서 확인됨. 다만 "Trivy+Kubescape+Falco 3단 조합 재확인"이라는 표현은 과장 — 해당 페이지에는 Kubescape·Falco만 명시되고 Trivy는 언급 없음(현재 Docker Compose 인프라라 K8s 툴 자체는 참고용).

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Running Docker in Production](https://distr.sh/blog/running-docker-in-production/)
- [Docker CI/CD 2026 Best Practices](https://www.jeeviacademy.com/docker-ci-cd-2026-best-practices/)
- [Best Kubernetes Runtime-First Security Tools](https://www.armosec.io/blog/best-kubernetes-runtime-first-security-tools/)

## 위키화 후보
- Docker Compose 프로덕션 하드닝 체크리스트(로그 로테이션 설정값 + `unless-stopped`의 exit-only 트리거 한계) — 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- "restart: unless-stopped는 healthcheck unhealthy가 아닌 컨테이너 exit에서만 트리거" — 헬스 모니터링 설계 시 착각 방지용 지식으로 반영.
- GitHub Actions 2026 로드맵 정확한 마일스톤(lock file 프리뷰 3~6개월/GA 6개월, egress firewall) — CI/CD 보안 로드맵 파악 시 참조.

## 승인 필요 (고위험)
- Docker Compose 로그 로테이션(`max-size:10m, max-file:3`) 설정 적용은 실제 인프라 변경(daemon.json 수정+Docker 재시작)이므로, 적용 시 별도 작업으로 사용자 승인 후 진행 제안.

## 신규 도구 후보 (에이전트/스킬)
(없음)

**폐기 항목**: 리서치 원문의 "Chainguard Actions" 대체재 언급(corgea.com 원문 대조 결과 해당 문구 없음), AI 기반 canary 동적 조정 벤더 통계(원 리서치도 미검증 표시), OTel Collector 채택률 전망·feature flag 4종 분류(이번 세션에서 원문 대조 미실시)는 검증 실패/미검증으로 제외했습니다.
