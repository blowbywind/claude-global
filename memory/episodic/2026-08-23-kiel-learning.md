---
date: 2026-08-23
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-23

## 검증 결과 요약

kiel 리서치 8개 핵심 주장 중 원문 대조(wget 폴백, WebFetch 권한 이번에도 차단) 결과 **4건은 원문에 근거 없어 폐기**했습니다.

**폐기(출처 불일치/미확인)**:
- "MCP SDK 각 누적 10억 다운로드" — chatforest 원문에는 "10억"이 아니라 "97M+ 월간 다운로드(2025-12 기준)"만 존재.
- "Figma AI PRD Generator 2026-08-11 업데이트" — 해당 날짜는 원문에서 "Figma Make 시간절감 측정" 별개 게시글에 붙은 날짜로, PRD Generator와 무관(오귀속).
- "2026년 말까지 API 수요 증가분 30%+ AI 툴 기인" — 인용된 digitalapi.ai 원문에 해당 수치 없음.
- "MS Agent Framework v1.15.0(A2UI/Foundry Hosted Agent/체크포인트 레지스트리)" — 공식 블로그 최신 글 목록에 해당 버전·기능명 전무(최신 확인 가능한 것은 "v1.0 GA", "Harness 출시"뿐).

**정정 후 유지**: MCP 로드맵은 2026-08-22 발표 맞으나, kiel이 제시한 "4개 우선순위(transport/에이전트통신/거버넌스/엔터프라이즈)"는 사실 **이전(3월) 로드맵**의 항목이며, 신규 로드맵은 **5개 영역**(에이전틱 메시징 프리미티브, HTTP-native transport 통합·강화, 에이전트 identity·엔터프라이즈 보안 등)으로 갱신됨을 원문에서 확인.

**원문 대조로 확정 유지**: MCP 레지스트리 성장(Glama 7.1만+/Toplist 약10.1만), SDD "Assess" 등급(ThoughtWorks Radar, dev.to 원문 확인), SDD 툴체인 5종 비교표, OpenAPI Initiative agent-ready 메타데이터 논의(미확정, 원문 문구 일치).

---

## 오늘 배운 것
- MCP가 2026-08-22 로드맵을 갱신(이전 로드맵 4개 영역은 2026-07-28 스펙에 반영 완료로 마감, 신규 로드맵은 5개 영역—에이전틱 메시징 프리미티브, HTTP-native transport 통합·강화, 에이전트 identity·엔터프라이즈 보안 등—으로 재구성).
- SDD(Spec-Driven Development)는 2026년 확산 중이나 ThoughtWorks Technology Radar에서 "Assess"(평가) 등급으로, 아직 "Adopt"(채택) 단계 업계표준 아님 — 기존 PRD SDD 4단계 채택 보류 판단의 근거 재확인.
- SDD 툴체인 5종 성격 구분: GitHub Spec Kit(모델 비종속·이식성), AWS Kiro(통합 에이전틱 IDE), Claude Code cc-sdd(터미널 워크플로), Cursor Plan Mode(IDE 우선), Tessl(규제산업 감사추적).
- OpenAPI Initiative가 2026년 상반기 LLM을 신규 API 클라이언트 유형으로 규정하고 capability discovery·intent signaling 등 "agent-ready" 메타데이터를 논의 중(확정 스펙 아님, 원문 문구 확인).

## 출처
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) (2026-08-22 게시, 원문 대조 완료)
- [MCP Ecosystem 2026: State of the Standard](https://chatforest.com/guides/mcp-ecosystem-2026-state-of-the-standard/) (원문 대조 완료)
- [Spec-Driven Development in 2026](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2) (원문 대조 완료)
- [OpenAPI Initiative Newsletter — February 2026](https://www.openapis.org/blog/2026/02/10/openapi-initiative-newsletter-february-2026) (원문 대조 완료)

## 위키화 후보
- SDD 툴체인 5종 비교표(Spec Kit/Kiro/Claude Code/Cursor/Tessl) — 신규 개념 노트로 정리 시 향후 PRD 작성 도구 선정에 재사용 가치 있음.

## 프로필 반영 후보 (저위험)
- 배경지식 갱신: "MCP 로드맵(2026-08-22 개정)=5대 우선순위" 표기 — 기존 "4대 우선순위" 표기가 있다면 구버전(3월 로드맵)임을 각주.

## 승인 필요 (고위험)
- 없음(기존 대기 중인 "PRD 절차 SDD 4단계 정식 채택" 건은 이번 원문 대조로도 "Assess 등급·비표준" 근거가 재확인되어, 보류 유지가 타당 — 별도 승인 요청 아님).

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 회차도 WebFetch 권한 차단 재발(반복 패턴), 수동 wget 폴백 대조 결과 8건 중 4건(50%) 원문 불일치로 폐기. 반복작업 자동화 필요성이 재차 실증되어 기존 후보 유지를 재확인드립니다(신규 제안 아님, 기 등록 후보 유효성 재확인).
