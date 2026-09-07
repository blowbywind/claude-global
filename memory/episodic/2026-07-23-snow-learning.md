---
date: 2026-07-23
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-23

## 검증 개요
1단계 웹리서치 산출물 9개 핵심 주장을 "출처-대조-검증기" 에이전트로 URL 직접 대조했습니다. 결과: 확인됨 4건, 부분확인(URL 오매칭이나 원문 실재) 1건, 확인불가 1건, 불일치 3건. 불일치·확인불가 항목은 전량 폐기했습니다.

## 오늘 배운 것
- MCP(Model Context Protocol) 최종 스펙이 2026-07-28 발행 예정 — stateless 코어 전환(핸드셰이크·세션 제거), Tasks 확장(장기실행), MCP Apps(서버 렌더링 UI), OAuth/OIDC 인증 강화. 오케스트레이션·파이프라인 배포 설계에 참고할 프로토콜 변화.
- LangGraph 1.0은 MCP 도구를 그래프의 1급 노드(first-class node)로 취급하도록 설계 — 그래프 기반 실행엔진 어휘(기존 위키 항목)와 연결되는 사례.
- 학술논문 3편 실재 확인: (1) arXiv:2601.13671 "The Orchestration of Multi-Agent Systems: Architectures, Protocols, and Enterprise Adoption"(Adimulam·Gupta·Kumar), (2) arXiv:2605.02801 "Reinforcement Learning for LLM-based Multi-Agent Systems through Orchestration Traces"(Kimi Agent Swarm·OpenAI Codex·Anthropic Claude Code 실제 트레이스 연구), (3) arXiv:2602.23258 "AgentDropoutV2"(테스트타임 불필요 정보흐름 rectify-or-reject 프루닝).
- 검증 프로세스 교훈: 1단계 리서치가 제시한 9건 중 3건은 출처-내용 불일치(무관 URL, arXiv ID 오귀속, 발행일·기능목록 오류)로 판명 — 웹리서치 산출물은 반드시 URL 직접 대조 후 채택해야 함(이번 턴 근거로 폐기).

## 출처
- [MCP 최종 스펙 발행 예고(2026-07-28)](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [AI Agent 주간 뉴스 — LangGraph 1.0 MCP 노드화](https://aiagentstore.ai/ai-agent-news/this-week)
- [arXiv:2601.13671](https://arxiv.org/abs/2601.13671)
- [arXiv:2605.02801](https://arxiv.org/abs/2605.02801)
- [arXiv:2602.23258](https://arxiv.org/abs/2602.23258)

## 위키화 후보
- MCP 2026-07-28 최종 스펙 변경사항(stateless 코어/Tasks/MCP Apps/OAuth) — 프로토콜 레퍼런스 노트로 신설 가치.
- 오케스트레이션 관련 학술논문 3편(2601.13671/2605.02801/2602.23258) 요약 노트 — 기존 "오케스트레이션-설계-어휘" 노트에 연결.

## 프로필 반영 후보 (저위험)
- "MCP Apps(서버 렌더링 UI)", "rectify-or-reject 프루닝"(AgentDropoutV2) 용어를 오케스트레이션 설계 어휘로 참고.

## 승인 필요 (고위험)
- 없음.

## 신규 도구 후보 (에이전트/스킬)
- 없음 — 이번 턴은 기존 "출처-대조-검증기" 에이전트로 검증 수행, 실효성(9건 중 3건 폐기 확인) 재확인 완료.

## 폐기 항목(참고용, 위키·프로필 미반영)
- OpenAI "Presence" 플랫폼 — 출처(VentureBeat) 429 차단으로 본문 대조 불가, 확인 보류.
- Oracle "AI Agent Studio/Fusion Agentic Applications" — 인용 URL(shakudo.io)에 해당 내용 전무, 완전 무관한 출처.
- "Level 3 도달 1곳" 산업조사 통계 — 인용 arXiv:2604.00901은 무관 논문(오귀속), 정정 ID(2605.14675)도 직접 재확인 못 함.
- Claude Managed Agents 7월 신규기능(model effort settings 등) — 출처 문서 발행일(6월)·내용 모두 주장과 불일치.
