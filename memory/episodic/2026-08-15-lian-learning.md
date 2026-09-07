---
date: 2026-08-15
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-15

## 오늘 배운 것
- **MCP 2026-07-28 stateless 스펙 확정** — 1차 소스 2건 직접 확인(blog.modelcontextprotocol.io, claude.com/blog) 교차검증 완료: `initialize` 핸드셰이크·`Mcp-Session-Id` 제거, Multi Round-Trip Requests, header 기반 라우팅, OAuth/OIDC 강화, formal extensions framework.
- **Claude Code v2.1.231**: MCP OAuth 로그인이 사전등록 OAuth 클라이언트(Slack 등)에서 redirect URI mismatch로 실패하던 버그 수정 — GitHub 공식 changelog(anthropics/claude-code) 1차 확인, 리서치 원문 정확.
- **Claude Code v2.1.229**: SSE keepalive 추가로 장시간 thinking 중 idle-timeout 연결끊김 방지(Vertex/Bedrock 게이트웨이) — 공식 changelog로 확인, "연결 유지" 표현은 정확하나 "세션 재개"는 부수적 항목(`remote-control --continue` 문서화)이었음.
- **[정정] Write 툴 덮어쓰기 허용 변경 버전 오류**: 신규 모델에 한해 미독(未讀) 기존 파일도 Write로 덮어쓰기 허용(Edit 툴과 규칙 통일)하는 변경은 공식 changelog상 **v2.1.228**에 반영됨. 리서치가 인용한 v2.1.227은 gradually.ai의 버전 오귀속(실제 v2.1.227은 feature flag·Bash 버그 수정 내용)으로 확인돼 폐기·정정.
- **Antigravity v1.1.11/v1.1.12, Codex "Version 3 미출시" 주장은 미검증 폐기**: 공식 changelog(antigravity.google) 접근 실패, gradually.ai가 Claude Code 건에서 오귀속을 낸 전례가 있어 신뢰도 하향 — 다음 세션 재확인 필요.
- GPT-5.6 라인업 가격/Ultrafast 티어/Astra 3건은 리서치 단계에서 이미 채택보류(집계 블로그 단일출처) 처리한 판단이 타당 — 이번 검증에서도 폐기 유지.

## 출처
- [MCP 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [MCP 2026-07-28 spec: stateless core, coming to Claude](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)
- [Claude Code CHANGELOG (GitHub, anthropics/claude-code)](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)

## 위키화 후보
- MCP stateless 전환은 위키에 이미 다수 노트(mcp-stateless-core-전환-2026 등)로 충분히 반영돼 신규 노트 불필요.

## 프로필 반영 후보 (저위험)
- 3rd-party 체인지로그 아그리게이터(gradually.ai, releasebot.io) 인용 시, 버전 번호·귀속은 `raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md` 등 1차 공식 changelog로 반드시 대조하는 절차를 검증 루틴에 고정.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 유사 취지 후보(출처-대조-검증기 계열)가 이미 다수 등록돼 있어 중복 제안 보류)
