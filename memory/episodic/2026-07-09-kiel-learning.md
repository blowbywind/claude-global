---
date: 2026-07-09
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-09

## 교차검증 결과

**제외 항목 (출처 불신뢰·순환 인용):**
- A2A v1.0 "Linux Foundation 거버넌스·2026년 4월 공식 승인" → `viston.tech` 단일 비권위 출처, 제외
- Dageno.ai → `dageno.ai` 자기 출처(순환 인용), 제외

---

## 오늘 배운 것

- **NIST Agentic Profile 가이드라인** — 자율 에이전트의 다단계 의사결정·권한 상승 위험을 대상으로 한 NIST 표준 이니셔티브(2026년 2월 초안). PRD 에이전트 보안 섹션 작성 시 "NIST Agentic Profile 준수 여부" 체크 항목 추가 근거 확보.
- **Agent Cards `/.well-known/agent-card.json` 엔드포인트** — 기존 인사이트(2026-06-25)의 구현 세부사항: 에이전트 역할·권한·API 명세를 JSON으로 해당 경로에 호스팅하는 방식이 A2A 스펙에서 규격화. A2A 연동 PRD 작성 시 엔드포인트 명세 항목으로 추가 가능.
- **PostHog MCP — 에이전트 직접 로그 쿼리** — 기존 인사이트(2026-06-26)의 확장: PostHog이 외부 에이전트가 제품 이벤트 로그에 직접 쿼리하는 MCP 인터페이스 제공. 에이전트 기능 PRD에 "관측성(observability) MCP 연동" 요구사항 항목 추가 필요.
- **AEO 지표 세분화 — Share of Answer · Citation Authority** — 기존 인사이트(2026-06-24)의 구체화: AI 검색 경쟁 분석 시 전통 노출(impression) 대신 "답변 점유율"·"인용 권위"를 핵심 KPI로 측정. 경쟁 분석 체크리스트 항목명 교체 필요.
- **OWASP LLM01 방어 아키텍처 — 데이터·명령 채널 분리** — 기존 인사이트(2026-06-29)의 구현 패턴 추가: 신뢰 불명 외부 데이터(웹 페이지·이메일)를 미들웨어 단에서 시스템 프롬프트·명령 채널과 격리 후 검증하는 구조. PRD 에이전트 보안 섹션에 "입력 채널 격리 레이어 명시" 항목으로 구체화.

---

## 출처

- [NIST Agentic AI Profiles — Cloud Security Alliance](https://cloudsecurityalliance.org)
- [Agent Cards / A2A Protocol — JumpCloud](https://jumpcloud.com)
- [PostHog MCP & AI Observability](https://posthog.com)
- [Share of Answer AEO Metrics — SimilarWeb](https://similarweb.com)
- [OWASP Top 10 LLM Applications — LLM01 Prompt Injection](https://owasp.org)

---

## 위키화 후보

- `NIST Agentic Profile` — 에이전트 거버넌스 표준 참조 노트 (기존 `zero.md`·`context-engineering.md`와 연계)
- `AEO 경쟁 지표` — Share of Answer·Citation Authority 정의 및 측정법 (기존 `aeo-경쟁-분석.md` 업데이트 후보)

---

## 프로필 반영 후보 (저위험)

- AEO 경쟁 분석 체크리스트 지표명을 "AI 검색 브랜드 묘사 확인" → **Share of Answer / Citation Authority 측정**으로 구체화
- 에이전트 PRD 보안 섹션에 **"입력 채널 격리 레이어(데이터·명령 분리) 명시"** 항목 추가 (기존 LLM01 체크 항목 세분화)

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

- `[skill] aeo-citation-check` — AI 검색(Perplexity·ChatGPT Search 등)에서 브랜드 인용 여부·Share of Answer를 정기 샘플링해 경쟁 분석 리포트 생성 (기존 `deep-research` 스킬 파생 가능)
