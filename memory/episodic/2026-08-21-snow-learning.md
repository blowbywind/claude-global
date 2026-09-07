---
date: 2026-08-21
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-21

## 오늘 배운 것
- Anthropic Claude Developer Platform에 관리형 에이전트 거버넌스 추가 확인(2026-08-07, releasebot 원문 대조): 세션 예산(초과 시 `budget_reached`로 일시정지), advisor 모델, 추론 지역 고정(geo pinning), GitHub 호스팅 skills.
- Anthropic, 2026-08-02 이후 출시되는 모든 Claude 산출물에 EU AI Act Article 50(2) 대응 워터마킹 삽입 확인(구모델은 2026-12-02까지 유예, 적용범위는 EU 한정 아닌 전세계).
- Claude Code에 "Concise" 출력 스타일 신설 확인(v2.1.237, 결과 우선·전제설명 생략).
- WPI 연구진 AcMAS(ICML 2026) 확인 — 단 원 리서치의 메커니즘 설명은 부정확: "에이전트간 통신 로그" 분석이 아니라 "개별 LLM 내부 활성화 패턴(activation pattern)" 분석 기반 이상탐지+교정(정상 패턴으로 스티어링)이 핵심. 통신로그 기반 방식은 논문이 명시적으로 지목한 기존 방식의 한계.
- AdaptOrch 논문(arXiv:2602.16873, Geunbin Yu, 2026-02-18 제출) 원문 대조 확인 — 태스크 의존성 그래프 기반으로 4대 정형 토폴로지(병렬/순차/계층/하이브리드)를 동적 라우팅, SWE-bench·GPQA·RAG에서 정적 단일 토폴로지 대비 12~23% 개선 주장.
- 검증 중 폐기: "Amazon Bedrock Agents Classic 개명" 주장은 인용 출처(aiagentstore.ai)에 해당 내용이 없어 미확인·폐기. MCP 2026-07-28 스펙/EMA/Microsoft Agent Framework 1.0은 사실 자체는 원문 대조로 확인됐으나 위키에 이미 다수 기록되어 신규성 없음(중복 기재 생략).

## 출처
- [The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [Enterprise-Managed Authorization: Zero-touch OAuth for MCP](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/)
- [Claude Developer Platform — Anthropic](https://releasebot.io/updates/anthropic/claude-developer-platform)
- [Claude Code — Anthropic](https://releasebot.io/updates/anthropic/claude-code)
- [Anthropic Will Embed Watermarks in AI Outputs](https://www.artificiallawyer.com/2026/08/13/anthropic-will-embed-watermarks-in-ai-outputs/)
- [Best AI Agent Frameworks 2026](https://alicelabs.ai/en/insights/best-ai-agent-frameworks-2026)
- [Peering inside LLM-based multi-agent systems could expose stealthy attacks](https://techxplore.com/news/2026-08-peering-llm-based-multi-agent.html)
- [AdaptOrch (arXiv:2602.16873)](https://arxiv.org/abs/2602.16873)
- [AI Agent News — This Week](https://aiagentstore.ai/ai-agent-news/this-week)

## 위키화 후보
- AcMAS(WPI, ICML 2026) — 멀티에이전트 시스템의 개별 에이전트 내부 활성화 패턴 기반 이상탐지+교정 프레임워크, 신규 개념 노트 가치.
- AdaptOrch(arXiv:2602.16873) — 태스크의존성 그래프 기반 토폴로지 동적 라우팅 오케스트레이션 논문, 신규 개념 노트 가치.

## 프로필 반영 후보 (저위험)
- Claude Managed Agents 세션예산(`budget_reached`)·advisor 모델·geo pinning 어휘를 파이프라인 배포·예산통제 어휘로 참고 추가.
- Claude Code "Concise" 출력 스타일(결과우선·전제생략)을 응답 스타일 참고 어휘로 추가.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 이번 턴 wget 폴백 원문대조로 9건 중 1건 폐기(Bedrock Agents Classic)·1건 메커니즘 정정(AcMAS)을 실제 수행함으로써 "출처-대조-검증기" 계열 후보의 유효성이 재확인됨(신규 제안 아님, 기존 제안 재실증).
