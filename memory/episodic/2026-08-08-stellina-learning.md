---
date: 2026-08-08
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-08

## 오늘 배운 것
- **Caddy CVE 4건(27585~27588) 실재 확인**, 그러나 모두 2026-02-23 공개·**v2.11.0에서 이미 패치**됨 — 현재 추적 버전 v2.11.4(2026-06-03)는 영향 없음. 원문이 인용한 GHSA URL(`GHSA-wwhq-w58m-w29c`)은 실제로는 무관한 별개 이슈(CVE-2026-30852 우회)였음 → 정정 필요, 라이브 대응 불필요(이미 해결된 과거 이슈).
- **caddy:2.11.x Alpine 베이스 이미지에 OS 레벨 미패치 CVE 실재**(zlib CVE-2026-22184 CVSS 9.8 등, GH이슈 #7614·#7568로 확인). Caddy 팀은 `not_planned`로 종결 — 상류에서 안 고치므로, 우리 쪽 Dockerfile에 `apk upgrade --no-cache` 레이어를 추가하는 자체 대응만 유효.
- **GitHub Actions 러너 악용 cPanel/WHM(CVE-2026-41940) 스캔 캠페인**은 TheHackerNews 원문 대조로 실재 확인(CVE ID·DNSHook·Packagist 패키지 등 본문 일치) — 기존 "Actions SHA 전체 고정" 체크리스트 근거로 추가할 만함.
- **CVE-2026-3854는 GitHub Enterprise Server(자체호스팅) 전용 RCE**로 NVD 확인 결과 이미 패치됨. 리서치 원문의 "GitHub.com/Enterprise Server 대상"이라는 표현은 부정확 — ai-ops는 github.com(SaaS)을 사용하므로 직접 해당 없음.
- **OTel Collector 최신 v0.158.0(2026-08-04)** GitHub 릴리스로 확인됨. 기존 위키가 채택한 v1.x/v0.x 이원 버전 표기(v1.49.0/v0.143.0) 관례상 짝이 되는 v1.x 번호는 이번 검증에서 미확인 — 버전 갱신만 인지, 정확한 짝 번호는 추후 확인 필요.
- Argo Rollouts/Flagger 71% 채택률 등 서베이 수치는 출처 재확인을 못해 채택하지 않음(soft stat, 폐기).

## 출처
- [Caddy Security Advisories](https://api.github.com/repos/caddyserver/caddy/security-advisories) — CVE-2026-27585~27588 실재/패치버전 확인
- [caddyserver/caddy issue #7614](https://github.com/caddyserver/caddy/issues/7614) — Alpine 미패치 CVE, not_planned 종결
- [caddyserver/caddy issue #7568](https://github.com/caddyserver/caddy/issues/7568) — zlib CVE-2026-22184
- [Attackers Weaponize GitHub Actions Runners to Target cPanel and WHM Servers](https://thehackernews.com/2026/07/attackers-weaponize-github-actions.html)
- [NVD CVE-2026-3854](https://nvd.nist.gov/vuln/detail/CVE-2026-3854)
- [opentelemetry-collector releases](https://github.com/open-telemetry/opentelemetry-collector/releases)

## 위키화 후보
- Caddy CVE 27585~27588 — "이미 패치됨(v2.11.0)·현재버전 무관·원문 인용 URL 오류" 정정 기록(향후 동일 오탐 재조사 방지)
- caddy 베이스이미지 `apk upgrade` 레이어 권고 — 상류 not_planned 명시, 자체 Dockerfile 대응책으로 기록

## 프로필 반영 후보 (저위험)
- CVE-2026-41940(GitHub Actions 러너 악용) 사례를 SHA 고정/공급망 체크리스트 근거로 추가
- OTel Collector 버전 추적을 v0.158.0(2026-08-04) 기준으로 갱신 인지

## 승인 필요 (고위험)
(없음 — 검증 결과 Caddy CVE는 현재 운영 버전에 미해당, zlib건은 상류 not_planned로 즉시 대응 불필요. 자체 Dockerfile에 `apk upgrade` 레이어를 실제 추가할지는 별도 요청 시 검토)

## 신규 도구 후보 (에이전트/스킬)
(없음)
