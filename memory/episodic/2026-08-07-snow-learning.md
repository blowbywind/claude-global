---
date: 2026-08-07
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-07

[검증 절차] WebFetch 권한이 없어 wget으로 폴백, 주요 출처 9건 중 6건 본문을 직접 대조했습니다.

## 오늘 배운 것
- **Google ADK Go 2.0** — 2026년 6월 30일 출시, 그래프 기반 워크플로 엔진에 human-in-the-loop과 동적 오케스트레이션 내장. 출처 본문에서 날짜·내용 그대로 확인.
- **EU AI Act 고위험 조항** — 2026년 8월 2일 시행 확정(오늘 8/7 기준 이미 시행 중). 멀티에이전트 체인의 MCP/A2A 호출까지 포함해 6개월간 행위별 로그 보관 의무, 위반 시 최대 €1,500만 또는 전세계 매출 3% 중 높은 금액. 기존 위키 노트(`eu-ai-act-에이전트-컴플라이언스-요구사항.md`)엔 "8월" 시행까지만 있었고, 구체 일자·벌금 수치가 이번에 본문 대조로 확정됨.
- **Anthropic Claude Managed Agents 4종(Dreaming·Outcomes·멀티에이전트 오케스트레이션·웹훅)** — 실제 발행일은 **2026년 5월 19일** 단일 발표로 확인됨(눈꽃이 제시한 "5/7 1차 + 5/19 self-hosted 2차 발표" 이원화 서사는 근거 없어 정정). MCP·A2A·AI SDK·RPC 멀티프로토콜 지원도 같은 페이지에 포함.
- **AOrchestra(ICML 2026 채택)** — (Instruction, Context, Tools, Model) 4-튜플 기반 서브에이전트 동적 생성, 기존 위키 초안(2026-08-03)과 본문 대조 재확인 완료.
- **open-multi-agent**(TypeScript, MIT, GitHub 실존 확인) — "그래프가 아닌 목표를 기술"하는 코디네이터가 런타임에 태스크 DAG를 플래닝, Claude/ChatGPT/Gemini/DeepSeek/로컬 모델 지원. 신규 오픈소스 오케스트레이션 도구로 검증됨.

**폐기(미검증/불일치)**: MS Agent Framework 1.0 GA "2026-04-03" 구체 일자(출처 본문에 날짜 언급 없음, 기존 위키의 "4월"만 유지) / Anthropic "5월 7일" 1차 발표설(위 정정 참조) / 5대 오케스트레이션 패턴·Claude Agent SDK 계층형 스포닝(truefoundry)은 본문 미대조로 보류.

## 출처
- [Claude Managed Agents 신규 기능](https://claude.com/blog/new-in-claude-managed-agents) — 본문 대조(발행일 May 19, 2026)
- [StackOne — EU AI Act Action Layer](https://www.stackone.com/blog/eu-ai-act-action-layer-logs/) — 본문 대조
- [open-multi-agent GitHub](https://github.com/open-multi-agent/open-multi-agent) — 본문 대조
- [Nerd Level Tech — ADK Go 2.0](https://nerdleveltech.com/microsoft-agent-framework-go-google-adk) — 본문 대조
- [atoms.dev — ICML 2026 Review](https://atoms.dev/blog/icml-2026-papers-ai-agents) — 본문 대조
- [nerova.ai — ADK vs MS Agent Framework](https://nerova.ai/comparisons/google-adk-vs-microsoft-agent-framework-2026) — 부분 대조(GA 일자 미확인)

## 위키화 후보
- open-multi-agent(목표기술형 런타임 DAG 플래닝) — 신규 개념, 위키에 부재 확인.

## 프로필 반영 후보 (저위험)
- ADK Go 2.0 그래프기반+human-in-the-loop(2026-06-30 확정) — 기존 "그래프 기반 실행엔진" 인사이트 날짜 보강.
- EU AI Act 고위험 시행(2026-08-02, €15M/3% 벌금) — 컴플라이언스 어휘로 추가.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (URL 본문 교차검증 기능은 기존 `출처-대조-검증기` 에이전트와 중복)
