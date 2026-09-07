---
date: 2026-06-20
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-06-20

## 오늘 배운 것

- **Vercel AI SDK 5** (2025-07-31 출시) — `UIMessage` vs `ModelMessage` 분리, SSE 스트리밍(WebSocket 대체), `stopWhen`/`prepareStep`으로 에이전트 루프 제어, 경량 `Agent` 클래스 추가. 풀스택 AI 앱 표준 SDK로 부상 — 공식 문서 수집 우선순위 높음. 출처: [vercel.com/blog/ai-sdk-5](https://vercel.com/blog/ai-sdk-5)

- **LangGraph v0.4** (2026-04) — 상태 지속성·human-in-the-loop 체크포인트 강화, GitHub 3만 스타 돌파, CrewAI 추월, 모든 LangChain 에이전트의 기본 런타임으로 확정(Python + JS). 멀티에이전트 문서 수집 대상으로 확정 권고. 출처: [gurusup.com](https://gurusup.com/blog/best-multi-agent-frameworks-2026)

- **Drizzle Kit 오픈소스화** — Drizzle Kit 코어가 오픈소스로 공개, schema visualizer(`drizzle.run`) 추가, v1.0 로드맵 진행 중. 출처: [orm.drizzle.team](https://orm.drizzle.team/)

- **React 19 (현재 안정)** — React Compiler(자동 re-render 최적화), Actions API(비동기 처리), 문서 메타데이터 네이티브 지원. Next.js 최신 업데이트 2026-06-11 확인. 출처: [kanhasoft.com](https://kanhasoft.com/blog/react-next-js-node-js-the-full%E2%80%91stack-innovations-changing-software-in-2026/)

- **Hono + Drizzle 조합** Cloudflare D1/R2 배포 패턴으로 커뮤니티 내 사실상 표준 스택화 — 기존 메모리의 방향(Hono 추적) 유효함 확인. 출처: [dev.to](https://dev.to/aaronksaunders/getting-started-with-hono-js-and-drizzle-orm-2g6i)

---

## 출처
- [AI SDK 5 - Vercel](https://vercel.com/blog/ai-sdk-5)
- [Best Multi-Agent Frameworks in 2026 - gurusup](https://gurusup.com/blog/best-multi-agent-frameworks-2026)
- [AI Agent Frameworks Compared 2026 - pecollective](https://pecollective.com/blog/ai-agent-frameworks-compared/)
- [Drizzle ORM 공식](https://orm.drizzle.team/)
- [React/Next.js Full-Stack Innovations 2026 - kanhasoft](https://kanhasoft.com/blog/react-next-js-node-js-the-full%E2%80%91stack-innovations-changing-software-in-2026/)
- [Hono + Drizzle ORM 시작 - dev.to](https://dev.to/aaronksaunders/getting-started-with-hono-js-and-drizzle-orm-2g6i)

---

## 위키화 후보
- **Vercel AI SDK 5** — 풀스택 AI 앱 표준 SDK, `UIMessage/ModelMessage` 아키텍처·에이전트 루프 제어 패턴 정리 가치 있음
- **LangGraph** — 멀티에이전트 프레임워크 비교(vs CrewAI, AutoGen) 포함 개념 노트화 권장

---

## 프로필 반영 후보 (저위험)
- Vercel AI SDK(`sdk.vercel.ai`) 공식 문서를 정기 수집 대상에 추가 — 풀스택 AI 라이브러리 중 2026 기준 가장 높은 채택률
- LangGraph(`langchain-ai.github.io/langgraph`) 문서 수집 확정 — v1.0 안정화, Python+JS 지원, 멀티에이전트 표준 프레임워크

---

## 승인 필요 (고위험)
*(없음)*


## 추가 학습 (19:03 UTC)
## 오늘 배운 것

- **A2A 프로토콜 v1.0 정식화**: MCP(도구 연결)와 짝을 이루는 에이전트 간 통신 표준. Google이 만들고 Linux Foundation이 2025년 6월 인수. 150개 이상 조직 지원, Google·Microsoft·AWS·Salesforce 통합 완료. Agent Cards(HTTP/JSON)로 에이전트 역량을 노출하는 구조.
  - 출처: [Linux Foundation A2A](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year)

- **MCP 채택 규모 확인**: 2026년 4월 기준 엔터프라이즈 서버 10,000개 이상 구현, SDK 다운로드 9,700만 회. 사실상 표준 지위 수치로 확인됨.
  - 출처: [StartupHub AI Frameworks 2026](https://www.startuphub.ai/ai-news/insights/2026/ai-agent-frameworks-2026)

- **Gemini 3.5 Flash GA**: 2026년 5월 19일 Google I/O에서 출시. API $1.50/$9.00 per M tokens. Gemini 3.5 Pro는 6월 중 출시 예고(Sundar Pichai 직접 언급).
  - 출처: [June 2026 AI Launch Wave](https://wavespeed.ai/blog/posts/june-2026-ai-launch-wave/)

- **AI Co-Mathematician 연구**: 수학 오픈 문제 탐색을 위한 병렬 에이전트 벤치(병렬 에이전트 + 논문 검색 + 정리 증명). FrontierMath Tier 4 에서 48% 달성 — AI 수학 연구 영역 신기록.
  - 출처: [Analytics Vidhya Top LLM Papers 2026](https://www.analyticsvidhya.com/blog/2026/05/top-llm-research-papers-2026/)

- **오픈소스 모델 동등화**: Llama·Mistral·Qwen·DeepSeek가 다수 벤치마크에서 클로즈드 프론티어 모델과 동등 또는 우위. 비용 모델 선택 전략(코딩→Claude, 멀티모달→Gemini 등) 실효성 증가.
  - 출처: [LLM Stats AI Trends](https://llm-stats.com/ai-trends)

- **LlamaIndex Agentic Document Workflows**: 문서 처리 + 검색 + 구조화 출력 + 에이전트 오케스트레이션을 하나로 묶은 엔터프라이즈 워크플로. 계약 분석·규정 준수 자동화에 적용.
  - 출처: [DataCamp Best AI Agents 2026](https://www.datacamp.com/blog/best-ai-agents)

---

## 출처

- [Linux Foundation A2A Protocol 1-Year Milestone](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year)
- [June 2026 AI Launch Wave (WaveSpeed)](https://wavespeed.ai/blog/posts/june-2026-ai-launch-wave/)
- [Top 10 LLM Research Papers 2026 (Analytics Vidhya)](https://www.analyticsvidhya.com/blog/2026/05/top-llm-research-papers-2026/)
- [AI Agent Frameworks 2026 (StartupHub)](https://www.startuphub.ai/ai-news/insights/2026/ai-agent-frameworks-2026)
- [Best AI Agents 2026 (DataCamp)](https://www.datacamp.com/blog/best-ai-agents)

---

## 위키화 후보

- **A2A Protocol** — MCP와 짝을 이루는 에이전트 간 통신 표준(Linux Foundation 관리, v1.0, Agent Cards 기반)
- **AI 수학 연구 에이전트** — AI Co-Mathematician 패턴: 병렬 에이전트 + 정리 증명 + 문헌 검색 조합으로 FrontierMath Tier 4 48% 달성

---

## 프로필 반영 후보 (저위험)

- `[2026-06-21] A2A 프로토콜 추적: MCP(도구 연결)와 짝을 이루는 에이전트 간 통신 표준으로, 신규 라이브러리/프레임워크 문서 수집 시 MCP·A2A 지원 여부를 함께 체크 항목으로 추가`
- `[2026-06-21] Gemini 3.5 Flash/Pro 공식 문서 수집 대상 추가: Google AI Studio·Vertex AI 문서 정기 수집 대상에 포함`

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

- `[agent] a2a-doc-collector` — A2A 프로토콜 스펙 및 SDK 문서를 주기적으로 수집·요약하는 리서치 에이전트 (MCP 수집 에이전트와 병렬 운영)


## 추가 학습 (19:03 UTC)
## 오늘 배운 것
- **Next.js 16.2.7이 현재 stable** (16은 2025-10 stable, Turbopack 기본 번들러·Cache Components beta). 기존 메모리는 15 중심이므로 수집 기준선을 16으로 갱신 필요
- **Drizzle ORM v1.0.0-beta(RC) 진입** — ArkType 연동으로 대형 스키마 타입체크 70%↑, introspection 10s→1s 미만, MSSQL 지원 추가. 정식 v1 출시 추적 대상
- **MCP 차기 스펙 2026-07-28 정식 출시 예정** (RC 공개): stateless core, Extensions 프레임워크, Tasks(장기작업), MCP Apps(서버 렌더 UI), OAuth/OIDC 정렬 인증 하드닝. 출범 이래 최대 개정
- **MCP Registry 공식 운영 중** (2026-05 기준 server 9,652개) — 라이브러리 MCP 지원 체크 시 레지스트리 조회 가능
- **TanStack Start v1.0 RC = production-ready** — Vite+Nitro 기반 client-first React 풀스택(SSR·streaming·server functions), Cloudflare/Vercel/AWS 등 배포. Next.js 대안으로 부상, 단 문서·생태계 아직 미성숙
- **Hono 공식 문서가 Drizzle을 기본 ORM으로 권장** — Hono+Drizzle 엣지/서버리스 조합 표준화

## 출처
- [Next.js Blog / 16 release](https://nextjs.org/blog)
- [Next.js Latest Version June 2026 (16.2.7)](https://www.abhs.in/blog/nextjs-current-version-march-2026-stable-release-whats-new)
- [Drizzle ORM v1.0.0-beta.2 release](https://orm.drizzle.team/docs/latest-releases/drizzle-orm-v1beta2)
- [MCP 2026-07-28 Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [2026 MCP Roadmap](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/)
- [TanStack Start v1.0 (byteiota)](https://byteiota.com/tanstack-start-v1-0-type-safe-react-framework-2026/)

## 위키화 후보
- `tanstack-start.md` — Vite+Nitro 기반 client-first React 풀스택 프레임워크, Next.js 대안 (신규 수집 대상)
- 기존 `mcp.md` 업데이트 — 2026-07-28 신규 스펙(stateless core/Extensions/Tasks/MCP Apps) 반영

## 프로필 반영 후보 (저위험)
- 수집 기준선 갱신: Next.js 15→**16(Turbopack 기본·Cache Components)** 중심으로 문서 추적
- 정기 수집 대상에 **TanStack Start** 추가 (Vite 기반 풀스택, v1 RC)

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
