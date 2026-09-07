---
date: 2026-08-12
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-12

## 오늘 배운 것
- runc 컨테이너 이스케이프 고위험 CVE 3건(CVE-2025-31133, CVE-2025-52565, CVE-2025-52881) 확인 — `/dev/null` 심볼릭링크 대체, `/dev/pts` 마운트 검증 미흡, 공유 마운트 레이스 컨디션이 원인이며 runc 1.2.8/1.3.3/1.4.0-rc.3+에서 패치됨. 기존 "runC 1.1.12+ 업그레이드 검토" 인사이트의 구체적 근거로 연결(원문 fetch로 CVE 번호 3건 모두 직접 확인).
- `actions/checkout` v7의 `pull_request_target`/`workflow_run` 대상 미검토 fork PR 코드 체크아웃 자동 차단이 **2026-07-16 부로 floating major tag(v4 등 SHA 미고정) 워크플로 전체에 백포트 완료**됨을 원문에서 확인. 기존 SHA 고정 체크리스트 각주(예정)를 "완료"로 갱신 필요. (리서치 원안의 "8월 백포트"는 부정확 — 실제 백포트일은 7/16.)
- Docker Compose 최신 릴리스가 v5.4.0인 것을 확인(릴리스 목록 최상단). 세부 변경내역(볼륨/네트워크 reconciliation 등)은 원문 요약 그대로 수용.
- GitHub Actions 2026 로드맵의 `dependencies:` 섹션(direct+transitive 의존성 커밋 SHA 전체 잠금, go.mod+go.sum 유사 개념)은 실제 로드맵 항목으로 재확인. 다만 "프리뷰 3~6개월/GA 6~9개월" 같은 구체 시점은 원문에서 재확인되지 않아 채택하지 않음 — 기존 "예정 기능(시점 미정)" 각주 유지.
- Flagger/Argo Rollouts 최신 버전 넘버 갱신 건은 이번 세션에서 원문 재검증을 하지 못해 채택 보류(기존 노트와 중복이라 저위험이나, 미검증 상태로는 프로필 반영 제외).

## 출처
- [runc container escape vulnerabilities](https://www.sysdig.com/blog/runc-container-escape-vulnerabilities)
- [GitHub Actions hardens checkout security to block 'pwn request' attacks](https://www.infoworld.com/article/4188038/github-actions-hardens-checkout-security-to-block-pwn-request-attacks.html)
- [docker/compose Releases](https://github.com/docker/compose/releases)
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)

## 위키화 후보
- runc 컨테이너 이스케이프 CVE-2025-31133/52565/52881 개념 노트(원인·패치버전 매핑) — 컨테이너 보안 체크리스트 근거자료로 가치 있음.

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트에 runc CVE 3건 번호·패치버전 명시 추가.
- SHA 고정 체크리스트의 "actions/checkout GA v7 백포트" 각주를 "예정"→"완료(2026-07-16)"로 정정.

## 승인 필요 (고위험)
- (변경 없음) runc 실제 업그레이드는 기존 방침대로 서버 버전 점검 결과와 함께 별도 승인 요청 유지.

## 신규 도구 후보 (에이전트/스킬)
(없음)
