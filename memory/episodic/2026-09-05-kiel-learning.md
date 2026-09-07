---
date: 2026-09-05
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-09-05

## 오늘 배운 것
- **ARD(Agentic Resource Discovery) 명세 확인**: Google 개발자 블로그에서 2026-06-17 공식 발표(연구 초안의 "2026-07"은 오기, 정정). Junjie Bu·Srinivas Krishnan(Google) 주도이며, "Google·Microsoft·GitHub 연합" 표현은 원문에서 확인되지 않아 **폐기** — 실제로는 Linux Foundation 산하 "AI Catalog Working Group"의 데이터 모델 위에 구축된 Apache 2.0 오픈 명세임. `ai-catalog.json` 발행 방식은 원문에서 실존 확인.
- **AX Design(axd.ax) 확인**: Optagen이 관리하는 오픈 레퍼런스, 2026년 3월 공개 확인(연구 주장과 일치). "AX Score"와 "5차원(Discoverability·Navigability 등)" 프레임워크는 원문에서 확인됨. 단 "12원칙"이라는 구체 개수는 홈페이지에서 확인 불가 → **미검증 항목으로 제외**.
- **agent.json(useelba.com) 확인**: `/.well-known/agent.json`(RFC 8615 well-known URI 관례) 방식은 원문 확인됨. 다만 Elba라는 단일 벤더의 자사 제품 소개 페이지이므로 "업계 표준"이 아니라 "벤더 제안 관례" 수준으로 격하해 인식 필요.
- SDD 툴체인 순위(Spec Kit 1위·BMAD 2위·OpenSpec 브라운필드용)와 GitClear 41%/62% 수치는 위키에 이미 `github-spec-kit.md`, `bmad.md`, `sdd-툴체인-5종-비교표...md` 등으로 기존 반영되어 있어 중복 — 신규 학습 아님.
- A2A `agent-card.json`, ERC-8004, `robots-trust.json` 난립 주장은 이번 세션 검증 범위(웹검색 5회 이내) 밖이라 원문 대조 못 함 → 이번 산출물엔 반영하지 않음(불확실 표기 없이 버림).

## 출처
- [Announcing the Agentic Resource Discovery specification](https://developers.googleblog.com/announcing-the-agentic-resource-discovery-specification/) — wget으로 원문 직접 대조(날짜·저자·`ai-catalog.json` 확인)
- [AX Design: The Agent Experience Standard](https://www.axd.ax/) — wget으로 원문 직접 대조(발행일·AX Score·5차원 확인)
- [What is agent.json?](https://www.useelba.com/what-is/agent-json) — wget으로 원문 직접 대조(`.well-known/agent.json` 확인)

## 위키화 후보
- ARD(`ai-catalog.json`, Linux Foundation AI Catalog Working Group 기반, 2026-06-17 발표) 신규 개념 노트 — 기존 MCP/agents.json 계열과 구분되는 별개 발견 표준이라 등재 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "ARD `ai-catalog.json` 발행 여부" 항목 후보 추가(단, "Microsoft·GitHub 연합" 표현은 빼고 "Google 주도·Linux Foundation AI Catalog Working Group 기반"으로 정확히 표기).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기-wget-폴백" 계열로 이번에도 wget 폴백이 실제 3건 원문 대조·1건 핵심 주장 오귀속 적발에 성공했으나, 이미 후보 등재되어 있어 재상신 생략)
