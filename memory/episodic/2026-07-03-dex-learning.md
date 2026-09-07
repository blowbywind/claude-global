---
date: 2026-07-03
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-03

교차검증 완료. 항목별 판정:

| 주장 | 판정 | 근거 |
|---|---|---|
| AI 코드 취약성 45% / 2.74배 (CSA) | ⚠️ 방향성만 수용 | CSA는 신뢰 기관이나 정확한 URL 미제공·WebSearch 차단으로 수치 미검증 |
| "Vibe & Verify" 이중검증 | ❌ 폐기 | daily.dev(커뮤니티 집계) = 비공식 출처. vibe.md 중복 |
| MCP Tool Poisoning / SSRF / RCE | ❌ 폐기 | owasp-mcp-top-10.md(MCP03) + mcp.md(SSRF 섹션) 중복 |
| 에이전트 동적 비인간 신원(NHI) | ✅ 수용 | CSA 신뢰 기관. 에이전틱-개발-보안-ads.md와 관점 차별화(모니터링 ≠ ID 관리) |
| Durable Skills 인재상 | ❌ 폐기 | 출처 = "youtube.com" (URL 없음, 검증 불가) |
| 메타 프레임워크 / Composable Primitives | ❌ 폐기 | 출처 = "medium.com" (URL 없음). next-js-16-x 기존 노트 중복 |
| Green Software / Bun / Valkey | ❌ 폐기 | 출처 = theknowledgeacademy.com (교육 플랫폼, 비공식) |

---

## 오늘 배운 것

- **AI 생성 코드는 구조적으로 보안 취약 — 코드리뷰 단계에서 특별 취급 필요**: Cloud Security Alliance(CSA) AI Safety 보고서는 AI 생성 코드에서 인간 코드 대비 더 높은 OWASP 취약점 발생률을 보고한다. 정확한 수치(45%, 2.74배)는 WebSearch 차단으로 직접 확인 불가이나, 방향성은 보안 커뮤니티에서 폭넓게 인정된다. 에이전트가 코드를 생성할 때 code-reviewer 호출은 선택이 아닌 필수다.
- **에이전트 권한 = 동적 비인간 신원(NHI, Non-Human Identity)으로 설계해야 한다**: CSA는 AI 에이전트를 정적 서비스 계정이 아닌 동적 비인간 신원으로 취급하고, 런타임에 단명 토큰(ephemeral token)을 발급·폐기하는 방식으로 권한 누적(Privilege Drift)을 차단할 것을 권고한다. SPIFFE/OIDC workload identity 패턴이 실현 수단. 기존 에이전틱-개발-보안-ads.md(모니터링 관점)와 구분되는 **ID 관리 관점**의 신규 개념.

## 출처

- [Cloud Security Alliance — AI Safety Initiative](https://cloudsecurityalliance.org)

## 위키화 후보

- `에이전트-비인간-신원-nhi` — NHI 개념, Privilege Drift 문제, SPIFFE/ephemeral token 패턴을 독립 노트로 정리. 기존 ADS 노트와 wikilink 상호 연결.

## 프로필 반영 후보 (저위험)

- **AI 생성 코드 보안 리뷰 필수화 원칙**: 에이전트가 작성한 코드는 `code-reviewer` 호출을 "2파일+ 대형 변경" 기준과 무관하게 항상 적용 — 기존 에이전트 품질 게이트 CLAUDE.md에 한 줄 추가.

## 승인 필요 (고위험)

없음.

## 신규 도구 후보 (에이전트/스킬)

없음 (검증된 신규 자동화 패턴 부재).
