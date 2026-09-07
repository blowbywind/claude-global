---
date: 2026-08-31
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-31

## 검증 결과 요약
- CVE-2026-30851/30852(Caddy) — GitHub Security Advisory 원문 직접 대조(wget) 완료, CVE ID·CWE·버전범위·패치버전 일치 확인. **검증됨(신뢰)**.
- GitHub Actions 08-06~07 장애(71%/75% 수치) — githubstatus.com/history가 JS 렌더링 SPA라 wget으로 본문 확인 불가, 원 리서치도 "검색 스니펫 출처"로만 표기. **미검증 → 폐기**.
- ai-ops 저장소 자체 점검: `forward_auth`/`vars_regexp` 미사용(basic_auth 방식) 확인 — 직접 위험 노출은 없으나 Caddy 버전 하드닝 항목으로는 유효.
- 나머지 재확인 항목(runc CVE 3건, Argo Rollouts/Flagger, CVE-2026-41940)은 기존 위키에 이미 반영되어 있어 중복 처리 생략.

## 오늘 배운 것
- Caddy CVE-2026-30851(forward_auth `copy_headers`가 클라이언트 헤더 미제거 → 신원 위조/권한상승, CVSS High), CVE-2026-30852(vars_regexp 이중 확장 → 환경변수·파일 유출, Moderate) 모두 v2.11.1 이하 영향, v2.11.2에서 패치됨.
- ai-ops의 Caddy는 basic_auth 구조라 두 CVE의 직접 공격면(forward_auth/vars_regexp)은 미사용 확인 — 다만 버전이 v2.11.2 미만으로 pin되어 있다면 업그레이드 권고.
- OTel Collector Contrib 최신 v0.159.0(2026-08-17/18)까지 확인 — 기존 추적 기준(v0.158.0, 08-08)에서 갱신.

## 출처
- [CVE-2026-30851 (GHSA-7r4p-vjf4-gxv4)](https://github.com/caddyserver/caddy/security/advisories/GHSA-7r4p-vjf4-gxv4)
- [CVE-2026-30852 (GHSA-m2w3-8f23-hxxf)](https://github.com/caddyserver/caddy/security/advisories/GHSA-m2w3-8f23-hxxf)
- [opentelemetry-collector-contrib releases](https://github.com/open-telemetry/opentelemetry-collector-contrib/releases)

## 위키화 후보
- Caddy CVE-2026-30851/30852(forward_auth·vars_regexp, v2.11.2 패치) — 신규 개념 노트로 추가 가치 있음(승인 필요).

## 프로필 반영 후보 (저위험)
- OTel Collector 버전 추적 기준을 v0.159.0(2026-08-17/18)으로 갱신.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — WebFetch/WebSearch 권한 거부가 이번에도 재발했으나 기존 후보(`출처-대조-검증기-wget-폴백` 계열)가 이미 등록되어 있어 중복 제안 생략)
