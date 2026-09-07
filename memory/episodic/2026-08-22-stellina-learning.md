---
date: 2026-08-22
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-22

## 오늘 배운 것
- GitHub Actions 스크립트 인젝션 실사고(2026-08, Snowflake `snowflakedb/snowflake-connector-net` `.github/workflows/jira_issue.yml`): PR #1218(2026-06-18 병합)에서 안전한 `env:`+`jq -n --arg` 방식을 `${{ github.event.issue.title }}`를 `sed`로 직접 셸 문자열에 보간하는 방식으로 되돌려 취약점 발생 → 무인증 이슈 제목만으로 러너에서 임의 명령 실행 + Jira 크리덴셜(JIRA_BASE_URL/USER_EMAIL/API_TOKEN) 노출. Wiz Red Agent가 5일 만에 독립 발견. 원문 직접 대조로 상세(파일명·커밋·지연일수) 확인 완료. → CI 보안 체크리스트에 "이벤트 컨텍스트 값(`github.event.*`)을 `run:` 블록에 직접 문자열 보간 금지, env var 경유 필수" 항목 추가.
- GitHub, 크리덴셜 유형별(PAT/SSH키/OAuth App/GitHub App 토큰) 폐기·탈인증 기능을 조직 단위로 확장(2026-08-18 공식 changelog, 메타데이터로 날짜·내용 확인). 시크릿 유출 대응 시 유형 단위 일괄 무효화 가능 — 인프라 시크릿 관리 대응 절차에 반영 가치 있음.
- OpenTelemetry Collector Contrib v0.159.0 릴리스 확인(GitHub API 직접 조회, 2026-08-17 게시). 기존 위키 추적 버전(v0.158.0)보다 최신 — 버전 갱신 필요.

※ 검증 중 2건 폐기: "프로그레시브 딜리버리 2026 권고"(terrateam.io) 원문은 2025-06-16 게시 일반 가이드로, 인용된 "Argo Rollouts/Flagger", "reader-first→dual write→backfill" 문구가 본문에 없어 출처 불일치 → 폐기. "GitHub 2026-08-17 전세계 장애"(bleepingcomputer)는 접근 차단(403)으로 원문 대조 불가 → 미검증 폐기.

## 출처
- [Snowflake GitHub Actions Flaw Lets Crafted Issues Trigger Command Injection](https://thehackernews.com/2026/08/snowflake-github-actions-flaw-lets_0330881554.html)
- [Wiz Red Agent Finds Its Way Into Snowflake's Internal Jira](https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug)
- [Credential revocation and deauthorization by token type](https://github.blog/changelog/2026-08-18-credential-revocation-and-deauthorization-by-token-type/)
- [opentelemetry-collector-contrib Releases](https://github.com/open-telemetry/opentelemetry-collector-contrib/releases)

## 위키화 후보
- Snowflake GitHub Actions 스크립트 인젝션 실사고 — "안전해 보이는 수정 PR이 오히려 취약점 도입" 반례로 CI 보안 개념 노트 신설 가치 있음.

## 프로필 반영 후보 (저위험)
- CI 체크리스트에 "이벤트 컨텍스트 값 직접 셸 보간 금지(env var 경유 필수)" 항목 추가
- OTel Collector 추적 버전을 v0.159.0(2026-08-17)으로 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
