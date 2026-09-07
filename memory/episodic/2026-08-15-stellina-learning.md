---
date: 2026-08-15
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-15

## 오늘 배운 것
- **actions/checkout v7 정확한 타임라인 확인**: 2026-06-18 발표·GA로 `pull_request_target`/`workflow_run` 내 미검토 fork PR 코드 자동 fetch를 기본 차단(opt-out은 명시적 `allow-unsafe-pr-checkout`), 2026-07-16 v2~v6까지 백포트 완료. 단 floating major tag(`@v4` 등)만 자동 적용되고 SHA·minor 고정 워크플로는 별도 업그레이드 필요 — 기존 위키(2026-07-16 checkout 버전 추적 항목) 각주를 이 정확한 일자로 갱신 가능.
- **CVE-2026-33634(Trivy 공급망 침해) 세부 확인**: 2026-03-19 Trivy 바이너리/컨테이너 이미지 **0.69.4**에 악성코드 삽입, GitHub Actions 마켓플레이스 경로인 `aquasecurity/trivy-action`(태그 0.0.1~0.34.2 force-push)·`aquasecurity/setup-trivy`(커밋 0.2.0~0.2.6 교체)도 함께 오염 — 정적 스캔 도구 자체가 공급망 공격 벡터가 된 사례. 안전 버전: `trivy-action@0.35.0`, `setup-trivy@0.2.6`(재생성), Trivy `0.69.3`.
- **GitHub Actions `dependencies:` lock file 로드맵 정정**: 공식 포스트 원문 확인 결과 퍼블릭 프리뷰 3~6개월·GA **6개월**이며, "GA 6~9개월"은 별개 항목(Actions Data Stream/네트워크 egress 방화벽 로드맵)의 수치였음 — 기존 위키(2026-07-14) 각주 정정 필요.
- (검증 실패로 폐기) OTel Collector contrib `testbed/v0.154.0` 별도 트랙 주장은 원문 재확인 결과 실제 최신 릴리스가 `testbed/v0.158.0`(2026-08-04, 메인과 동일 버전)로 확인되어 반증됨 — 폐기. runc `CVE-2024-21626` 언급, progressive delivery 5%+플래그 관행, "curation at entry" 주장은 원문 대조 미완료로 폐기.

## 출처
- [GitHub Actions hardens checkout security to block 'pwn request' attacks](https://www.infoworld.com/article/4188038/github-actions-hardens-checkout-security-to-block-pwn-request-attacks.html) — 원문대조 완료
- [CVE-2026-33634 Trivy Supply Chain Compromise](https://integsec.com/blog/cve-2026-33634-trivy-supply-chain-compromise-what-it-means-for-your-business-and-how-to-respond) — 원문대조 완료(영업성 블로그이나 세부 수치 자체정합)
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/) — 원문대조 완료(공식)

## 위키화 후보
- CVE-2026-33634(Trivy 자체 공급망 침해, GitHub Actions 마켓플레이스 경로 포함) — 컨테이너 보안 개념노트 신설 후보

## 프로필 반영 후보 (저위험)
- SHA 고정 관리 체크리스트 각주에 checkout v7 정확 일자(GA 6/18, 백포트 7/16, floating tag만 자동적용) 반영
- `dependencies:` lock file 로드맵 각주 "GA 6~9개월"→"GA 6개월"로 정정(6~9개월은 Actions Data Stream 항목)

## 승인 필요 (고위험)
- 현재 CI 파이프라인에 Trivy/`trivy-action`/`setup-trivy` 사용 여부 및 영향 버전(0.69.4 / 0.0.1~0.34.2 / 0.2.0~0.2.6) 해당 여부 점검은 실제 인프라 확인·조치이므로, 기존 CVE 대응 승인정책(2026-07-22)에 따라 사용자 승인 후 진행합니다.

## 신규 도구 후보 (에이전트/스킬)
