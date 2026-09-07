---
date: 2026-07-27
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-27

## 오늘 배운 것
- **MCP 2026-07-28 스펙은 아직 "릴리스 후보(RC)" 단계**입니다. 원 리서치의 "최종 스펙 발효" 표현은 과장이며, blog.modelcontextprotocol.io 원문은 "Release Candidate"라고만 명시합니다. stateless 코어 전환, Tasks 확장(장기실행 작업), MCP Apps, OAuth/OIDC 정합은 RC 발표 내용과 일치 확인됨.
- **AWS Bedrock AgentCore harness GA**(2026-06-18, 원 자료의 06-17은 하루 오차) — `CreateHarness`/`InvokeHarness` 2개 API, 세션별 microVM 격리, Bedrock/OpenAI/Gemini/LiteLLM 모델 전환 지원 — 원문 대조로 확인됨.
- **Microsoft Agent Framework v1.0 GA(2026-04-02)** — Semantic Kernel과 AutoGen을 단일 플랫폼으로 통합 — shakudo.io 원문 문구 그대로 확인됨.
- **오케스트레이션 설계 논문 3편 실재·내용 확인**: VMAO(arXiv 2603.11445, Plan-Execute-Verify-Replan 루프), AgentOrchestra(arXiv 2506.12508, TEA 프로토콜+GAIA 89.04% 정확 일치), MAS-Orchestra(arXiv 2601.14652, 목표지향 서브에이전트를 호출가능 함수로 추상화). 3편 모두 abstract 원문 대조로 확인 — 오케스트레이션 설계 어휘로 신뢰 가능.
- **멀티에이전트 오케스트레이션 서베이(arXiv 2601.13671)** — MCP(도구·컨텍스트 접근 표준화)와 Agent2Agent(피어 협상·위임)를 조합한 상호운용 통신 기반 — 원문 확인됨.
- **Claude Code MCP 자동 백그라운드 전환** — 2분 이상 걸리는 MCP 도구 호출 자동 백그라운드 이동, `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` 환경변수로 조정 — releasebot.io 원문 문구 정확 일치 확인.

## 출처
- [MCP 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [AWS Bedrock AgentCore harness GA](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-harness-is-now-generally-available-go-from-idea-to-production-grade-agent-in-minutes/)
- [Top 9 AI Agent Frameworks (Shakudo)](https://www.shakudo.io/blog/top-9-ai-agent-frameworks)
- [VMAO — arXiv 2603.11445](https://arxiv.org/abs/2603.11445)
- [AgentOrchestra — arXiv 2506.12508](https://arxiv.org/abs/2506.12508)
- [MAS-Orchestra — arXiv 2601.14652](https://arxiv.org/abs/2601.14652)
- [멀티에이전트 오케스트레이션 서베이 — arXiv 2601.13671](https://arxiv.org/abs/2601.13671)
- [Claude Code Updates — releasebot.io](https://releasebot.io/updates/anthropic/claude-code)

**폐기(검증 실패)**: LangGraph 1.0 "MCP first-class node" 주장(aiagentstore.ai 원문에 LangGraph 언급 자체 없음, 환각 의심) / "Claude Managed Agents" 세부 인프라 설명(mindstudio.ai 원문에 해당 고유명사·버전관리 세부는 없음 — 개념은 기존 2026-07-19 인사이트와 유사하므로 중복 판단, 신규 반영 안 함).

## 위키화 후보
- "Plan-Execute-Verify-Replan" 오케스트레이션 패턴(VMAO) — DAG 분해+병렬 실행+LLM검증+적응재계획 구조, 개념 노트 가치 있음.
- "TEA(Tool-Environment-Agent) 프로토콜"(AgentOrchestra) — 도구/환경/에이전트를 버전관리되는 1급 리소스로 모델링하는 어휘.

## 프로필 반영 후보 (저위험)
- "서브에이전트를 호출 가능한 함수로 추상화"(MAS-Orchestra) — 오케스트레이션 설계 어휘로 참고.
- MCP Tasks 확장 용어(`tasks/get`·`tasks/update`·`tasks/cancel`, 장기실행 작업 관리) — 파이프라인 배포 어휘로 참고.

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)
- [skill] 출처검증-폴백 — 이번 검증에서 서브에이전트(WebFetch/Bash) 권한이 반복 거부됐으나 orchestrator가 직접 `Bash(python3 urllib)`로 우회해 4건 성공. 향후 웹리서치 검증 시 서브에이전트 위임보다 orchestrator 직접 재시도를 표준 절차화할 가치 있음.
