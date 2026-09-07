---
date: 2026-07-23
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-23

## 오늘 배운 것
- Anthropic 현행 라인업 1차 출처 재확인: Claude Fable 5(`claude-fable-5`, 최상위)·Mythos 5(초대전용 Project Glasswing)·Opus 4.8(`claude-opus-4-8`)·Sonnet 5(`claude-sonnet-5`)·Haiku 4.5 — docs 원문 대조 완료(기존 인사이트 재확인).
- Opus 4.1(`claude-opus-4-1-20250805`)은 **2026-08-05 은퇴 확정**(공식 경고문 원문 확인), Opus 4.8로 마이그레이션 권고.
- Claude Sonnet 5가 2026-06-29~07-03(Week27)부터 Pro/Team Standard/Enterprise 기본모델, 네이티브 1M 컨텍스트+adaptive thinking 기본 활성 — 원문 확인.
- Claude Code Week29(7/13~17): 퍼블리시 Artifact가 뷰어의 MCP 커넥터로 실시간 데이터·액션 수행, 화면낭독기 모드, `/fork`(백그라운드 세션 분기) — 원문 확인.
- MCP 스펙: 2026-05-21 release candidate 게시, **2026-07-28 최종 확정 예정** — stateless 아키텍처, MCP Apps(서버렌더 UI, SEP-1865), Tasks(장기실행), OAuth/OIDC 정합 인가 강화. 본문 대조 확인(단 "이미 확정"이 아니라 "확정 예정" 상태로 정정).
- Google Antigravity 2.0(2026 I/O): 데스크톱 앱+Go 기반 CLI+Python SDK 4-surface 구조 재편, 기존 IDE는 조용한 폐지 트랙, Gemini 3.5 Flash 기반 — 2개 3rd-party 소스 교차 확인.
- MCP Enterprise-Managed Authorisation(EMA)이 stable 승격, Anthropic·Microsoft·Okta 등 채택 확대 — InfoQ 원문 인용 확인.

## 폐기 항목 (교차검증 실패)
- LangChain/LangGraph "2026-07 v1.0 정식 출시·최신패치 1.2.9(2026-07-10)": v1.0 실제 출시일은 2025-10-22(2026-04-17 수정판)로 리서치 주장과 불일치, 1.2.9 언급도 본문에 없음 → **날짜·버전 주장 폐기**. "2.0까지 무파괴 변경 약속"만 원문 확인되어 채택.
- OpenAI Codex "GPT-5.6 Bedrock 신규 탑재": 원 리서치도 3rd-party 집계·원문 미대조로 자체 저신뢰 표시 → 폐기(다음 리서치 시 공식 changelog 재확인 필요).

## 출처
- [Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview)
- [Claude Code What's new (Week27, Week29)](https://code.claude.com/docs/en/whats-new)
- [MCP 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [Antigravity 2.0 explained](https://mcp.directory/blog/antigravity-2-launch-google-io-2026)
- [MCP EMA stable](https://www.infoq.com/news/2026/07/mcp-ema-enterprise-auth/)

## 위키화 후보
- MCP 스펙 2026-07-28 stateless 개편(MCP Apps·Tasks·OAuth/OIDC) — 신규 개념 노트
- Google Antigravity 2.0 4-surface 구조(데스크톱/CLI/SDK 재편) — 신규 개념 노트

## 프로필 반영 후보 (저위험)
- Opus 4.1 은퇴일(2026-08-05) 확정치를 모델 수명주기 체크리스트에 반영
- MCP stateless 전환(2026-07-28 확정 예정)을 MCP 정기추적 항목에 병기

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — "출처-대조-검증기" 에이전트가 이미 존재·정상 작동 확인. 향후 리서치 수신 시 표준 검증 단계로 상시 활용 권장)
