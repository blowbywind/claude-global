---
date: 2026-08-17
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-17

## 오늘 배운 것
- **Trivy v0.74.0 실존 확인**: GitHub API 직접 조회로 2026-08-14 정식 릴리스(published_at) 확인 완료 — 기존 위키의 `0.69.4~0.69.6` 공급망 침해 이후 최신 버전으로 SHA/버전 고정 체크리스트 참고용.
- **`actions/checkout` v7 백포트 관련 중요 정정**: GitHub 공식 changelog(2026-06-18 게시)를 직접 확인한 결과, "editor's note (2026-07-15): 백포트 버전 enforcement 날짜를 2026-07-16에서 [연기된 날짜]로 재조정"이라는 문구가 존재합니다. 기존 위키 노트(`sha-고정-체크리스트의...ga-v7-백포트-각주를-예정-완료.md`)는 "7/16 백포트 완료"로 기록돼 있으나, 실제로는 enforcement 시점이 연기된 상태였을 가능성이 있어 **재검증 필요**.
- **OTel Collector 후속 버전 일정(v0.159.0 8/31 예정, v0.160.0 9/14 예정)**: 리서치 인용 출처(release.md)는 이번 세션에서 직접 fetch로 검증하지 못했음(WebFetch 권한 거부, wget 대상에서 제외) — 미확정 정보로만 참고, 확정 반영 보류.
- **Falco/Tetragon 오버헤드 "1~3%" 수치**: 출처(decryptiondigest.com)가 이번 검증에서 직접 확인되지 않은 2차 블로그라 **폐기** — 기존 위키의 "1% 미만"(1337skills.com 출처, 기 검증) 표기 유지.
- **Progressive delivery/카나리 5% 권고**: 기존 위키 `argo-rollouts-slo-자동-롤백-패턴.md`와 내용 중복 확인 — 신규 반영 불필요.
- **InfoQ "GitHub npm/Actions 기본값 안전화 전환" 보도**: 원문 미검증(구체적 사실관계 없이 "종합 보도"로만 서술) — **폐기**.

## 출처
- [Trivy v0.74.0 릴리스 (GitHub API 직접 확인)](https://github.com/aquasecurity/trivy/releases/tag/v0.74.0)
- [Safer pull_request_target defaults for GitHub Actions checkout (GitHub 공식 changelog, 직접 확인)](https://github.blog/changelog/2026-06-18-safer-pull_request_target-defaults-for-github-actions-checkout/)

## 위키화 후보
- `checkout v7 백포트 enforcement 날짜 재조정` — 기존 "완료" 각주를 "enforcement 날짜 연기(정확한 신규 일자는 원문 재확인 필요)"로 정정하는 각주 갱신.

## 프로필 반영 후보 (저위험)
- Trivy 최신 버전 v0.74.0 인지(SHA/버전 고정 관리 체크리스트 참고용).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — 기존 "출처-대조-검증기" 후보의 필요성이 이번 검증에서도 재확인됨: WebFetch 권한 거부로 wget 폴백 사용, 리서치 원문 9건 중 3건 미검증·폐기. 신규 제안 아님, 기존 후보 참고용 언급.)
