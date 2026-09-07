---
date: 2026-07-22
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-22

## 오늘 배운 것
- **Claude Sonnet 5**: 2026-06-29주(Week 27)부터 Pro/Team Standard/Enterprise 기본 모델로 전환, 네이티브 100만 토큰 컨텍스트+적응형 사고 기본 탑재 — code.claude.com 공식 페이지 원문 대조로 완전 확인.
- **Claude Code**: 서브에이전트 기본 백그라운드 실행(Week 27), 화면낭독기 접근성 모드(VoiceOver/NVDA, Week 29) 확인. 단 "MCP 커넥터 실시간 데이터"는 전체 기능이 아니라 **Artifacts 기능 한정**(공개된 아티팩트가 뷰어의 MCP 커넥터로 데이터 연동)임을 확인, 범위 정정.
- **Codex(OpenAI)**: GPT-5.4→GPT-5.6(Sol/Terra/Luna) 마이그레이션, PR #32288·#33173·#31636 원문 대조로 완전 확인. `/import`로 Cursor·Claude Code 설정 이전, 페이지네이션 스레드 히스토리, 서브에이전트 지원도 원문 일치 확인. **기존 위키의 "GPT-5.6 Sol=명명 불일치 환각 예시" 항목은 이번 독립 재검증으로도 재차 사실 확인 — 위키 정정 필요.**
- **신규 벤치마크**: Mem2ActBench(장기메모리 능동 활용 평가, arXiv 2601.19935), ClawBench(163개 실서비스 사이트·283개 브라우저 작업, arXiv 2604.08523) 원문 확인 — 기존 LoCoMo·LongMemEval·BEAM·ALE 추적 목록에 추가.
- **Microsoft Agent Framework 1.0** GA(2026-04-03, Semantic Kernel+AutoGen 통합) 확인. 단 리서치가 제시한 "LangGraph v1.2.7"은 출처(alicelabs.ai)에 없는 표기 — 실제는 "LangGraph 1.0(GA 2025-10, 2026 Q2 기능추가)"이므로 버전번호 정정.
- **Alibaba Cloud "Agent Native Cloud"**(WAIC 2026, 7/18): AgentTeams+Agentic Computer 구성 원문 일치 확인.
- Google Antigravity 2.0은 Gemini 3.5 Flash 기반 에이전트우선 IDE로 확대된 점은 확인(3rd-party 블로그 소스). **"/effort 플래그·통합 권한시스템" 주장은 출처(gradually.ai) 접근 차단(429)으로 미검증 — 폐기.**
- MCP+A2A 상호운용성 표준화 흐름은 사실이나 원 리서치 인용 출처(aiagentstore.ai)에는 해당 내용 부재 — alicelabs.ai가 실제 근거("전 프레임워크 네이티브 MCP지원+A2A 확산")로 출처 정정.

## 출처
- [Claude Code What's new](https://code.claude.com/docs/en/whats-new)
- [Codex by OpenAI — Releasebot](https://releasebot.io/updates/openai/codex)
- [Google AntiGravity 2.0 Guide](https://www.blog.brightcoding.dev/2026/05/20/google-antigravity-20-the-ai-ide-that-defies-development-gravity-complete-guide-2026)
- [awesome-ai-agent-papers (VoltAgent)](https://github.com/VoltAgent/awesome-ai-agent-papers)
- [Best AI Agent Frameworks 2026 — Alice Labs](https://alicelabs.ai/en/insights/best-ai-agent-frameworks-2026)
- [AI Agent News This Week](https://aiagentstore.ai/ai-agent-news/this-week)

## 위키화 후보
- Codex GPT-5.6(Sol/Terra/Luna) 모델 패밀리 노트 신설 + 기존 "리서치-환각-패턴-목록" 내 GPT-5.6 Sol 오표기 항목 정정
- Mem2ActBench/ClawBench를 기존 에이전트 벤치마크 노트(LoCoMo·LongMemEval·BEAM·ALE)에 병합 추가

## 프로필 반영 후보 (저위험)
- Anthropic 라인업 인사이트에 Sonnet 5 전환 시점(2026-06-29주)·스펙(native 1M, adaptive thinking 기본) 구체화
- MCP·A2A 병행 표준화 추적 시 근거 출처를 alicelabs.ai로 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — "출처-대조-검증기" 에이전트가 이미 목록에 존재하며 이번 검증에도 동일 역할 수행함)
