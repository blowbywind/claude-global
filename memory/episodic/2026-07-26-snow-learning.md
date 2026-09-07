---
date: 2026-07-26
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-26

## 오늘 배운 것
- Microsoft Agent Framework "Declarative Workflows 1.0"(Python·.NET 양쪽 SDK, 2026-07-23) — YAML로 에이전트 조정·상태변화·분기·human-in-the-loop를 코드 밖에 명시, 오케스트레이션/로직 분리 어휘로 확인.
- ROMA(Recursive Open Meta-Agent Framework, arXiv 2602.01848, 2026-02) — Atomizer/Planner/Executor/Aggregator 4모듈이 목표를 의존성 인식 서브태스크 트리로 분해·병렬실행. 장기수행 멀티에이전트 설계 어휘로 확인.
- WebSwarm(arXiv 2607.08662, 2026-07) — 재귀적 멀티에이전트로 웹 검색을 깊이+너비 동시 탐색.
- ORCH(arXiv 2602.01797) — 다수 LLM의 독립 분석 후 병합 에이전트가 최선답을 선택하는 결정론적(학습 불필요) 오케스트레이터.
- "Position: agentic AI orchestration should be Bayes-consistent"(arXiv 2605.00742, 2026-05) — 오케스트레이터가 베이지안 방식으로 신념을 유지·갱신해야 한다는 입장논문.
- Claude Opus 5 공식 출시(anthropic.com 확인) — 프론티어급 지능, 이전 프론티어 대비 반값, Frontier-Bench·GDPval-AA 최고성능.
- 검증 결과: 원 리서치 10건 중 4건(Alibaba Agent Native Cloud 세부, Sonnet 5 스펙 일부, Anthropic "Reflect" 대시보드, DeepSeek Coder V3 수치) 인용 URL 본문 불일치로 폐기함. 코딩에이전트 시장점유(70%+, Claude Code $2.5B/Cursor $2B ARR)는 출처 확인되었으나 리포트 자체가 "단일 출처 추정치, 주의 필요"라고 명시함.

## 출처
- [Move Agent Orchestration/Workflows out of Code — Declarative Workflows 1.0](https://devblogs.microsoft.com/agent-framework/move-agent-orchestration-workflows-out-of-code-with-agent-framework-declarative-workflows-1-0/)
- [ROMA: Recursive Open Meta-Agent Framework](https://arxiv.org/abs/2602.01848)
- [WebSwarm: Recursive Multi-Agent Orchestration for Deep-and-Wide Web Search](https://arxiv.org/pdf/2607.08662)
- [ORCH](https://arxiv.org/abs/2602.01797)
- [Position: agentic AI orchestration should be Bayes-consistent](https://arxiv.org/abs/2605.00742)
- [Claude Opus 5](https://anthropic.com/news/claude-opus-5)
- [The State of AI Coding Agents 2026](https://sourceryintel.com/reports/the-state-of-ai-coding-agents-2026) (수치는 참고용, 단일출처 주의)

## 위키화 후보
- ROMA(Atomizer/Planner/Executor/Aggregator 4모듈 재귀 분해) — 장기수행 멀티에이전트 오케스트레이션 개념노트 가치 있음.

## 프로필 반영 후보 (저위험)
- "Declarative Workflows"(YAML 기반 오케스트레이션-로직 분리), "ROMA/WebSwarm(재귀 분해형)", "ORCH(결정론적 병합 오케스트레이터)"를 오케스트레이션 설계 어휘로 참고 추가.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (출처-대조-검증기는 기존 에이전트로 이번 턴 실제 사용·유효성 재확인함)
