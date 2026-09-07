---
date: 2026-06-20
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-06-20

---

## 오늘 배운 것

- **LLM 가격 80% 하락 (2025→2026)**: API 비용이 급락하면서 "비용 때문에 모델 다운그레이드"가 약화됨. 라우팅 전략에서 가격 가중치보다 태스크 적합도 가중치를 높일 시점.
  출처: [Best LLMs June 2026](https://azumo.com/artificial-intelligence/ai-insights/top-10-llms-0625)

- **Claude Opus 4.5, SWE-Bench 80.9% 1위**: 코딩·에이전틱 라우팅 원칙(Claude 우선) 계속 유효. GPT-5는 수학·Arena Elo(1,561) 선두.
  출처: [LLM Leaderboard 2026](https://www.clickrank.ai/llm-leaderboard/)

- **Microsoft Agent Framework 1.0 출시 (2026-04)**: AutoGen + Semantic Kernel 통합. 두 프레임워크 모두 유지보수 모드 전환. .NET·Python 동일 API. 오케스트레이터 설계 시 AutoGen 참조 문서는 MAF로 교체 필요.
  출처: [Visual Studio Magazine](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx)

- **MCP(vertical) + A2A(horizontal) 이중 표준 정착**: MCP는 에이전트↔툴, A2A는 에이전트↔에이전트 통신. 멀티에이전트 설계 시 두 프로토콜 레이어를 명확히 분리.
  출처: [Multi-Agent Orchestration Guide](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier)

- **기업 AI 거버넌스 격차 심각**: 72% 기업이 에이전틱 AI를 프로덕션 배포했으나 60%는 공식 거버넌스 없음. 65%가 보안 사고 경험. "거버넌스 없는 배포"가 2026 최대 위험 요인.
  출처: [Agentic AI Enterprise Adoption 2026](https://agenticaiinstitute.org/agentic-ai-enterprise-adoption-2026-governance-gap/)

- **Qwen 3 235B-A22B·DeepSeek R1, 오픈소스 최강자 등극**: 클로즈드 프론티어 대비 대부분 벤치마크 동급. 로컬 배포·프라이버시 요건 있는 태스크에서 대안 가능.
  출처: [Best Open-Source LLM 2026](https://techsy.io/en/blog/best-open-source-llms-2026)

## 출처

- [Best LLMs Right Now: June 2026](https://azumo.com/artificial-intelligence/ai-insights/top-10-llms-0625)
- [LLM Leaderboard 2026](https://www.clickrank.ai/llm-leaderboard/)
- [Microsoft Agent Framework 1.0](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx)
- [Multi-Agent Orchestration 2026](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier)
- [Agentic AI Enterprise Adoption](https://agenticaiinstitute.org/agentic-ai-enterprise-adoption-2026-governance-gap/)
- [Best Open-Source LLM 2026](https://techsy.io/en/blog/best-open-source-llms-2026)
- [Top Agentic Frameworks 2026](https://blog.jetbrains.com/pycharm/2026/06/top-agentic-frameworks-for-building-applications-2026/)

## 위키화 후보

- **Microsoft Agent Framework 1.0** — AutoGen + Semantic Kernel 통합 경위, 마이그레이션 경로, .NET·Python API 구조 정리 (hnedu_erp dotnet 연계 시 참조)
- **Enterprise AI Governance Gap 2026** — 72% 배포/60% 거버넌스 부재 통계, 주요 보안 사고 패턴, Autobots 하드닝 백로그 연계

## 프로필 반영 후보 (저위험)

- LLM API 가격 80% 하락(2025→2026) → 모델 라우팅 결정 시 비용보다 태스크 적합도를 1순위 기준으로 사용
- 멀티에이전트 통신 레이어: MCP(에이전트↔툴, vertical) + A2A(에이전트↔에이전트, horizontal) 이중 표준을 설계 기준에 명시

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

- `[agent] governance-auditor` — 에이전틱 작업 완료 후 보안·거버넌스 체크리스트 자동 검증 (evaluator-strict의 컴플라이언스 특화 분기; Autobots 하드닝 백로그 Phase 2 완료 시 검토)


## 추가 학습 (19:45 UTC)
## 오늘 배운 것
- **하이브리드 라우팅이 2026 정설**: MS Agent Framework 1.0(2026.04 stable)이 LLM-driven 오케스트레이션과 결정론적 워크플로 오케스트레이션을 한 시스템에서 모두 지원. 결정론적을 기본으로 하되 *진짜로 가변적인 결정 지점만* 동적 라우팅으로 한정하는 것이 권장 — 기존 내 "태스크 분배는 코드로" 원칙을 보강·정밀화.
- **Conductor(MS 오픈소스, MIT)**: 멀티에이전트 워크플로를 YAML로 선언, 오케스트레이션 루프에 LLM 미개입(라우팅 결정에 토큰 0). "CI/CD 파이프라인처럼 diff 가능하게" — 내 결정론적 분배 엔진 철학의 구체적 레퍼런스 구현.
- **품질 게이트는 별도 judge 모델로**: 산출물을 만든 모델과 같은 추론 패턴으로 자기검증하면 신뢰 불가. 생성-비평(generator-critic) 분리, 전담 평가 모델 사용이 원칙 — 내 code-reviewer→evaluator-strict 게이트 설계와 정확히 일치하며, *프롬프트 레벨 역할 분리만으로도* 단일 에이전트가 놓치는 오류 노출 가능.
- **릴리스 게이트는 per-metric 임계값**: 종합 점수(aggregate pass rate)는 특정 워크플로의 높은 실패율을 은폐. 항목별 임계 적용이 핵심 — 내 승인/반려 기준에 직접 적용.
- **컨텍스트 엔지니어링 = 오케스트레이터의 1급 책무**: "프롬프트 작성"이 아니라 "각 서브에이전트가 매 호출에서 무엇을 보는가를 설계". 서브에이전트는 무관 정보를 걸러 핵심만 부모 컨텍스트로 반환해 정보 밀도를 높임.

## 출처
- [Conductor: Deterministic orchestration for multi-agent AI workflows (Microsoft)](https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows/)
- [Microsoft Agent Framework Version 1.0](https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/)
- [Agent orchestration explained (Dataiku)](https://www.dataiku.com/stories/blog/agent-orchestration-explained)
- [AI agent evaluation: A practical framework (Braintrust)](https://www.braintrust.dev/articles/ai-agent-evaluation-framework)
- [The AI Agents Stack 2026 Edition (O'Reilly)](https://www.oreilly.com/radar/the-ai-agents-stack-2026-edition/)

## 위키화 후보
- **deterministic-orchestration-hybrid** — 결정론(기본)+동적(가변 지점 한정) 하이브리드 라우팅 패턴, Conductor·MS Agent Framework 사례 포함
- **generator-critic-quality-gate** — 별도 judge 모델·per-metric 임계값 기반 산출물 검증 패턴 (기존 generator-evaluator-pattern.md 보강)

## 프로필 반영 후보 (저위험)
- 산출물 승인 기준: 종합 점수가 아닌 **항목별(per-metric) 임계값**으로 반려 판정한다.
- 품질 게이트의 검토 에이전트는 산출 에이전트와 **다른 역할/모델**로 분리한다(자기검증 루프 금지).

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 code-reviewer→evaluator-strict 게이트로 충분)


## 추가 학습 (19:45 UTC)
## 오늘 배운 것

- **Claude Opus 4.8 SWE-bench 88.6%**: 코딩 벤치마크 1위 유지 (기존 라우팅 원칙 "코딩→Claude" 재확인). Grok 4는 HLE(Humanity's Last Exam) 50.7%로 최고난도 추론 1위 → 기존 라우팅 원칙 유효.
- **Gemini 3.1 Pro 추론 강세**: GPQA Diamond 94.3%, ARC-AGI-2 77.1%로 추론 벤치마크 전반 선도. 멀티모달·롱컨텍스트 외 추론 라우팅도 고려 필요.
- **에이전트 루프 비용 2차 증가**: 10-턴 에이전트 세션 비용 ≈ 단일 호출의 50배 (context 재전송 누적). 실제 사례: 4개 에이전트 무한루프로 $47,000 발생. 오케스트레이터 설계 시 컨텍스트 요약·루프 상한 필수.
- **MCP 사실상 표준화**: Model Context Protocol이 VS Code·JetBrains·주요 플랫폼에서 에이전트-툴 통신 표준으로 채택됨.
- **Microsoft Agent Framework 1.0 GA** (2026-04): Semantic Kernel + AutoGen 통합 단일 SDK. 엔터프라이즈 멀티에이전트 레퍼런스 스택으로 부상.
- **프롬프트 캐싱 효과**: 입력 토큰 50~90% 절감. 반복 오케스트레이션 패턴에서 즉시 적용 가능한 최고 ROI 전략.

## 출처

- [Grok 4 vs Claude Opus 4.8 Benchmark 2026](https://aitoolranked.com/blog/ultimate-grok-review-benchmarks)
- [Claude Opus 4.6 vs GPT-5.4 vs Gemini 3.1 Pro April 2026](https://www.aimagicx.com/blog/claude-opus-4-6-vs-gpt-5-4-vs-gemini-3-1-benchmark-comparison-april-2026)
- [Multi-Agent Orchestration Guide 2026](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier)
- [AI Agent Cost Optimization 2026](https://niteagent.com/blog/ai-agent-cost-optimization-2026/)
- [AI Agent Token Budget Management](https://www.mindstudio.ai/blog/ai-agent-token-budget-management-claude-code)
- [10 AI Research Breakthroughs June 2026](https://www.buildthisnow.com/blog/guide/mechanics/ai-research-june-2026)

## 위키화 후보

- **MCP (Model Context Protocol)**: 에이전트-툴 통신 업계 표준으로 부상, VS Code·JetBrains 등 채택 현황 정리
- **에이전트 루프 비용 패턴**: 2차 증가 메커니즘, 실제 사례($47k), 컨텍스트 요약 전략 문서화

## 프로필 반영 후보 (저위험)

- 에이전트 루프 비용은 2차 증가(10-턴 ≈ 50× single-call) → 오케스트레이터 태스크 카드 설계 시 최대 턴 수 + 컨텍스트 요약 정책을 명시한다
- Gemini 3.1 Pro가 추론 벤치마크(GPQA 94.3%)도 선도 → 라우팅 원칙 보완: "최고난도 추론→Grok 4 (HLE 기준), 복합 추론·롱컨텍스트→Gemini"

## 승인 필요 (고위험)

(없음)
