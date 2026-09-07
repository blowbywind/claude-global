---
date: 2026-06-21
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-06-21

## 오늘 배운 것

- **Salesforce Agentforce Multi-Agent Orchestration** 2026-06-15 프로덕션 롤아웃: 엔터프라이즈 최초 멀티에이전트 대규모 배포. 에이전트 체인 간 에러 전파·거버넌스 SLA 준수 사례 데이터가 실제로 쌓이기 시작했다. 오케스트레이터 설계 레퍼런스로 추적 가치 있음.
  출처: [Daily AI Agent News – June 16, 2026](https://agent-harness.ai/blog/daily-ai-agent-news-roundup-june-16-2026/)

- **GLM-5.2 (June 2026)** 오픈웨이트 모델로 SWE-Bench Pro에서 GPT-5.5 최초 추월, 컨텍스트 1M 토큰. 중국 오픈소스 랩(DeepSeek V4 Pro MIT·Qwen 3.7 Max)이 추론·코딩 격차를 급속도로 좁히는 중. 라우팅 전략에서 "코딩→Claude"를 절대 전제로 두지 말고 주기적 벤치마크 재검토가 필요하다.
  출처: [Best AI Models June 2026](https://www.buildfastwithai.com/blogs/best-ai-models-june-2026)

- **τ-bench (Sierra/Princeton)**: 동적 유저+툴 시뮬레이션으로 에이전트를 실세계 환경에서 평가하는 벤치마크. 기존 정적 QA 벤치와 달리 multi-turn 완료율·도구 호출 정확도를 동시에 측정한다. autobots 평가 시 채택 검토.
  출처: [τ-bench: Benchmarking AI agents for the real-world](https://sierra.ai/blog/benchmarking-ai-agents)

- **Mem2ActBench**: 에이전트의 장기 메모리 활성화 + 도구 실행 연결을 측정하는 신규 벤치마크. "기억은 하는데 행동으로 이어지지 않는" 갭을 정량화. 눈꽃 시스템의 second-brain 설계 검증 지표로 유용.
  출처: [State of AI Agent Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026)

- **추론 모델 속도-정확도 트레이드오프** 심화 (o-series, DeepSeek-R1 계열): 오케스트레이터가 서브태스크 유형별로 "속도 우선 모델" vs "정확도 우선 모델"을 분기하는 전략이 실무 표준으로 자리잡는 중.
  출처: [Top LLM Models in 2026](https://aimlapi.com/blog/top-llm-models-in-2026-the-best-ai-models-for-reasoning-coding-multimodal-tasks)

---

## 출처
- [Daily AI Agent News Roundup — June 16, 2026](https://agent-harness.ai/blog/daily-ai-agent-news-roundup-june-16-2026/)
- [Best AI Models June 2026: Full Ranked Leaderboard](https://www.buildfastwithai.com/blogs/best-ai-models-june-2026)
- [Top LLM Models in 2026](https://aimlapi.com/blog/top-llm-models-in-2026-the-best-ai-models-for-reasoning-coding-multimodal-tasks)
- [τ-bench: Benchmarking AI agents for the real-world](https://sierra.ai/blog/benchmarking-ai-agents)
- [State of AI Agent Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026)

---

## 위키화 후보
- **τ-bench** — 동적 유저+툴 시뮬레이션 기반 에이전트 실세계 평가 벤치마크 (Sierra/Princeton, 2026)
- **GLM-5.2** — 최초 오픈웨이트 SWE-Bench Pro SOTA, 1M 컨텍스트, 2026-06 출시

---

## 프로필 반영 후보 (저위험)
- 코딩 라우팅 원칙 보완: `코딩 모델 라우팅은 분기 시점마다 최신 SWE-Bench Pro 순위를 재확인한다 — GLM·DeepSeek 등 오픈웨이트가 프론티어를 추월하는 사례가 발생하고 있음`
- 에이전트 평가 기준 추가: `autobots 기능 검증 시 τ-bench 지표(multi-turn 완료율·도구 호출 정확도)를 체크리스트 기준으로 참조`

---

## 승인 필요 (고위험)
_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)
- `[skill] benchmark-check` — 새 모델 출시 시 SWE-Bench Pro·τ-bench 기준 순위를 WebSearch로 조회해 라우팅 테이블 업데이트 여부를 판단하는 경량 스킬


## 추가 학습 (19:45 UTC)
## 오늘 배운 것

- **MCP(수직) + A2A(수평) 2-레이어 스택이 에이전트 표준으로 확정** — MCP는 에이전트→도구 연결, A2A는 에이전트→에이전트 위임 역할 분리. 두 프로토콜 모두 Linux Foundation 산하로 편입되어 사실상 산업 표준. Anthropic/OpenAI/Google/Microsoft/AWS 전원 채택. ([출처](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence/))

- **MCP June 2026 로드맵: "서버가 에이전트가 되는" 재귀 구성 패턴 도입 예정** — MCP 서버가 다른 MCP 서버에 연결 → 계층형 에이전트 트리 구성 가능. 오케스트레이터 태스크 카드 설계 시 MCP recursive composition 가능성 고려 필요. ([출처](https://toloka.ai/blog/the-future-of-mcp-enterprise-adoption/))

- **오픈소스 모델 급성장 — Nemotron 3 Ultra(550B, 완전 허용 라이선스), MiniMax M3(1M 컨텍스트, SWE-bench Pro 59%), Kimi K2.7 Code(1T파라미터)** — 클로즈드 모델과 격차 급격히 좁혀짐. 로컬 배포 가능 모델이 API 대안으로 현실화. ([출처](https://blog.mean.ceo/new-ai-model-releases-news-june-2026/))

- **Claude Opus 4.8 SWE-bench Verified 88.6%로 코딩 1위 유지** — Grok SWE-bench 75% 대비 명확한 우위. 기존 라우팅 원칙(코딩→Claude) 유효성 재확인. ([출처](https://aitoolranked.com/blog/ultimate-grok-review-benchmarks))

- **LangGraph가 결정론적 에이전트 워크플로 프레임워크 1위** — 예측 가능한 제어 흐름 필요 시 LangGraph, 멀티-에이전트 토론/반복 개선 시 AutoGen. 오케스트레이터 설계 원칙(코드 기반 결정론 우위)과 일치. ([출처](https://www.truefoundry.com/blog/multi-agent-orchestration-tools))

- **Grok 4.3 출시됐으나 독립 검증 벤치마크 미공개** — HLE 50.7%(Grok 4 기준)는 유효, 4.3 버전 수치는 미확인. 라우팅 원칙 변경 시 검증된 벤치마크 대기 필요.

## 출처
- [AI Model Benchmarks Jun 2026 | LM Council](https://lmcouncil.ai/benchmarks)
- [New AI Model Releases News | June 2026](https://blog.mean.ceo/new-ai-model-releases-news-june-2026/)
- [Multi-Agent Orchestration Tools 2026 | TrueFoundry](https://www.truefoundry.com/blog/multi-agent-orchestration-tools)
- [Agent Interoperability Protocols: MCP, A2A, ACP | Zylos Research](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence/)
- [Grok 4.3 Benchmarks 2026 Review | AI Tool Ranked](https://aitoolranked.com/blog/ultimate-grok-review-benchmarks)
- [The future of MCP: 2026 enterprise adoption | Toloka](https://toloka.ai/blog/the-future-of-mcp-enterprise-adoption/)

## 위키화 후보
- **MCP + A2A 에이전트 프로토콜 스택** — 수직(MCP: tool) + 수평(A2A: agent delegation) 2-레이어 구조, Linux Foundation 관할, 엔터프라이즈 멀티에이전트 설계 기준선
- **오픈소스 LLM 경쟁 구도 2026** — Nemotron 3 Ultra(550B 허용), MiniMax M3(1M ctx), Kimi K2.7(1T) — 클로즈드 API 대안으로 부상한 로컬 배포 모델 지형도

## 프로필 반영 후보 (저위험)
- 멀티에이전트 오케스트레이터 설계 시 에이전트 간 위임에는 A2A 프로토콜, 에이전트→도구 연결에는 MCP를 구분 적용하는 2-레이어 표준 패턴을 우선 검토한다
- 라우팅 원칙 보완: 오픈소스 대형 모델(Nemotron/MiniMax/Kimi 계열)이 클로즈드 API 수준 진입 — 비용 민감 배치 시 로컬 모델을 4번째 라우팅 옵션으로 고려

## 승인 필요 (고위험)
_(없음)_


## 추가 학습 (19:45 UTC)
## 오늘 배운 것

- **Claude Fable 5 출시 후 72시간 만에 전면 중단**: Anthropic이 6/9 Fable 5(공개)·Mythos 5(제한) 출시($10/$50 per M tokens, 1M ctx) → 6/12 미국 정부 수출통제 지시로 모든 고객 접근 차단. 사유: 외국인에 대한 실시간 국적 인증 불가 + 정부가 jailbreak 기법 발견 주장. Opus 4.8은 영향 없음.

- **기존 라우팅 원칙 업데이트 필요**: 메모리에 "최고난도 추론→Grok 4"로 기록되어 있으나 Grok 4는 7/4 이후 출시 예정이었고, Grok 4.2(공개 베타)·4.3(Amazon Bedrock GA, 1M ctx, 최저 환각률) 기준으로 실제 사용 가능. "코딩·작문→Claude"는 현재 Opus 4.8 기준으로 유효.

- **MCP Apps — HTML UI 확장**: 2026년 1월부터 MCP가 텍스트 기반을 넘어 sandboxed iframe 내 rich HTML UI를 반환하는 MCP Apps 확장. 에이전트-사용자 상호작용 방식이 바뀔 수 있음. MCP 서버 10,000개+ 등록.

- **Claude Agent SDK 별도 크레딧 과금 시작(6/15)**: Agent SDK 사용이 일반 구독 크레딧과 분리되어 별도 월간 크레딧 차감 시작 → agent-finops 관점에서 비용 귀속 구조 재검토 필요.

- **AI 연구 트렌드 전환**: 모델 성능 경쟁 → 시스템 수준 배포·거버넌스·실세계 통합으로 무게 이동. 의료·기후·신약 분야 특화 AI가 연구 실용화 선두.

- **엔터프라이즈 멀티에이전트 본격화**: EY·Salesforce·JPMorgan 등이 수천 개 워크플로에 에이전트 오케스트레이션 프로덕션 배포. 싱글 에이전트→병렬 특화 에이전트 팀 구조가 표준화.

## 출처

- [Anthropic: Fable 5 & Mythos 5 소개](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [Anthropic: Fable 5 접근 중단 성명](https://www.anthropic.com/news/fable-mythos-access)
- [xAI Grok 4 로드맵 (MindStudio)](https://www.mindstudio.ai/blog/xai-grok-roadmap-7-models-training-grok-5-10-trillion)
- [MCP Is Growing Up (AAIF)](https://aaif.io/blog/mcp-is-growing-up/)
- [AI Agent Frameworks 2026 비교](https://www.morphllm.com/ai-agent-framework)
- [Enterprise AI Orchestration April 2026 Playbook](https://www.fifthrow.com/blog/ai-agent-orchestration-goes-enterprise-the-april-2026-playbook-for-systematic-innovation-risk-and-value-at-scale)

## 위키화 후보

- `claude-fable5-export-control` — 미 정부 수출통제로 frontier 모델이 72시간 만에 전면 차단된 사례; AI 거버넌스·컴플라이언스 레퍼런스
- `mcp-apps-html-ui` — MCP가 텍스트→sandboxed iframe HTML UI로 확장된 시점과 에이전트 UX 함의

## 프로필 반영 후보 (저위험)

- 라우팅 원칙 보강: "Grok 4.3 = 1M ctx + 최저 환각률 → 최고난도 추론·사실검증 라우팅 실 사용 가능" (기존 원칙 구체화)
- agent-finops 메모: Claude Agent SDK 별도 크레딧(6/15~) → per-agent 비용 귀속 시 SDK 사용 여부 구분 필요

## 승인 필요 (고위험)

- **라우팅 원칙 일시 수정 제안**: Fable 5 중단 기간 동안 "최고 성능 Claude = Opus 4.8"로 명시 업데이트. Fable 5 복구 시 자동 복원 조건 포함. → 메모리 `orchestration-directives.md` 수정 대상

## 신규 도구 후보 (에이전트/스킬)

- `[skill] model-status-check` — 라우팅 결정 전 현재 사용 가능한 frontier 모델 목록을 조회·캐시하는 스킬 (Fable 5 사태처럼 모델이 갑자기 비가용될 경우 라우팅 오류 방지)
