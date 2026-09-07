---
date: 2026-08-30
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-30

## 오늘 배운 것
- Docker Compose **v5.4.0**(2026-08-03)·**v5.5.0**(2026-08-17) 릴리스를 GitHub Releases API로 직접 대조·확인. v5.4.0=volume/network 라이프사이클 재조정(reconcile) 모델링 도입, v5.5.0=image digest 재조정 로직 전면 개편으로 `compose up` 시 불필요한 컨테이너 재생성 방지(단, 업그레이드 직후 1회성 재생성 발생 가능 — 릴리스노트 원문 확인).
- 기존 위키의 Caddy CVE-2026-27585~27588 노트에 **CVE-2026-27589**(로컬 admin API `/load` 크로스오리진 설정 적용 취약점)이 누락돼 있었음을 GitHub Security Advisories API 대조로 확인. 5건 모두 2026-02-23 공개, **v2.11.0에서 이미 패치 완료** — 현재 추적 버전 v2.11.4는 영향 없다는 기존 결론은 그대로 유지, CVE 목록만 5건으로 보강 필요.
- GitHub Actions 2026-08 변경사항 3건을 github.blog changelog 원문 대조로 검증: ①코드 스캐닝 경고에 "Mitigated"(완화됨) 해제 사유 추가 ②CodeQL 2.26.3 — Actions 쿼리·JavaScript 모델링 개선 ③크리덴셜 자체 회수가 토큰 유형별(token type) 무효화로 확장.
- `checkout` `pull_request_target` 안전 기본값·Trivy 공급망 공격·OTel v0.159.0 항목은 대조 결과 **기존 위키에 이미 반영된 동일 사건**으로 확인돼 신규성 없음(중복 폐기, 리서치 산출물의 해당 3건은 채택 안 함).

## 출처
- [Docker Compose Releases API](https://github.com/docker/compose/releases)
- [Caddy Security Advisories API](https://api.github.com/repos/caddyserver/caddy/security-advisories) (CVE-2026-27589 = GHSA-879p-475x-rqh2)
- [GitHub Changelog 2026-08](https://github.blog/changelog/month/08-2026/)

## 위키화 후보
- "Docker Compose v5.5.0 image digest 재조정" — 업그레이드 후 1회성 컨테이너 재생성 발생 가능성을 배포 체크리스트 주의사항으로 신규 노트화.

## 프로필 반영 후보 (저위험)
- 기존 "Caddy CVE-27585~27588" 인사이트에 CVE-2026-27589 추가해 5건 배치로 갱신(모두 v2.11.0 기패치, 라이브 무영향 결론 유지).
- GitHub Actions 감사 체크리스트에 "Mitigated 해제 사유"·"CodeQL 2.26.3"·"토큰 유형별 크리덴셜 회수" 3항목 보강.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 후보로 충분히 커버됨, 이번 세션에서 수동 검증으로 실효성 재확인)
