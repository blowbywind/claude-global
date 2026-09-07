---
date: 2026-08-14
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-14

## 오늘 배운 것
- MCP 2026-07-28 스펙: stateless 코어 전환, OAuth/OIDC 강화, MCP Apps/Tasks 버전 확장, 월간 SDK 다운로드 4억 돌파(연초 대비 4배) — releasebot.io 원문 확인.
- Claude Code: Opus 5가 신규 기본 Opus 모델(1M 컨텍스트)로 전환, 서브에이전트 포킹 기본 활성화(중첩 깊이 3, `fork` 타입은 대화·프롬프트캐시 상속), Claude Security 플러그인(멀티에이전트 취약점 스캔·`CLAUDE-SECURITY-` 디렉터리 산출) — 원문 확인.
- Anthropic이 Claude Agent SDK 구독 과금방식 변경을 시행 당일 전격 중단 — 기사 제목·요지 확인, 과금정책 변동성 시사(파이프라인 예산설계 시 참고).
- 학술: VMAO(Plan-Execute-Verify-Replan, arXiv:2603.11445), 이벤트기반 멀티에이전트 오케스트레이션(arXiv:2606.20058) — 논문 실존·제목 확인.
- Meta가 코딩에이전트 "Muse Code"+모델 "Muse Spark 1.2" 출시(저가 경쟁 포지셔닝) — devops.com 원문 확인.
- 검증메모: 눈꽃 리서치 중 "Bedrock Agents Classic 개명·EOL", "EU AI Act 고위험조항 8월 시행"(실제 원문은 Article 50 챗봇 투명성 건), "Gartner 40%/76~81% 통계", xpander.ai 벤더목록 중 GlobalLogic/Capgemini(실제 원문엔 OneReach.ai)는 인용 URL 원문 대조 결과 불일치·확인불가 → 전부 폐기. 출처-내용 오귀속 패턴 반복 확인.

## 출처
- [MCP 2026-07-28 스펙 업데이트](https://releasebot.io/updates/anthropic/claude)
- [Claude Code 릴리스노트(Opus 5·서브에이전트 포킹·Security 플러그인)](https://releasebot.io/updates/anthropic/claude-code)
- [Anthropic pauses Claude Agent SDK subscription change](https://thenewstack.io/anthropic-pauses-claude-agent-sdk-subscription-change/)
- [arXiv:2606.20058 — Autonomous Event-Driven Multi-Agent Orchestration](https://arxiv.org/abs/2606.20058)
- [arXiv:2603.11445 — Verified Multi-Agent Orchestration](https://arxiv.org/abs/2603.11445)
- [Meta Launches AI Coding Agent (Muse Code)](https://devops.com/meta-launches-ai-coding-agent-to-challenge-openai-and-anthropic/)

## 위키화 후보
- MCP 2026-07-28 "stateless core" 전환(서버리스/엣지 배포 가능) — 오케스트레이션-MCP 연동 설계 시 참고할 신규 개념.

## 프로필 반영 후보 (저위험)
- "서브에이전트 포킹(`subagent_type: fork`, 대화·캐시 상속)" 용어 — 오케스트레이션 설계 어휘로 참고.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 오늘도 리서치 산출물 인용 URL 6건 중 3건(Bedrock 개명설·EU AI Act 고위험조항·Gartner 통계/벤더목록)이 원문과 불일치로 폐기됨. WebFetch 권한 거부 시 wget 폴백 필요성도 재확인(기존 후보와 동일 패턴 반복).
