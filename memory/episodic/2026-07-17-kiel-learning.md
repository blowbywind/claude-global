---
date: 2026-07-17
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-17

## 오늘 배운 것
- SDD(Spec-Driven Development)가 2026년 AI 코딩 도구 업계 표준으로 확산 중(GitHub Spec Kit·AWS Kiro·BMAD-METHOD·Tessl 등), 비trivial 작업 1차성공률 3~10배 개선 보고 — 대기 중인 "PRD SDD 4단계 채택" 검토건의 근거 보강 자료로 활용 가능.
- MCP 스펙이 2026-07-28 릴리스 후보로 stateless core + Tasks(장기실행) + Apps(서버렌더 UI) + OAuth/OIDC 인증 정렬을 확정 — 기존 "MCP 장기실행 상태값 + 실험적 확장 표기" 인사이트가 공식 로드맵과 부합함을 확인.
- MCP 툴 설계 구체기법 확인: 리턴 포맷을 예시로 명시(예: JSON array of {id,name,email}) + 오용 방지용 부정 지침(예: "100건 이상 벌크작업 금지") 추가가 효과적 — AI-ready 체크리스트에 반영 가능한 구체 항목.
- 미인증 Streamable HTTP MCP 서버는 48시간 내 악용 사례가 보고되며, OAuth 2.1 + PKCE가 스펙 권고 표준 — API 명세서 AI-ready 체크리스트에 보안 항목 추가 검토 여지.
- OpenAPI→MCP 자동변환 생태계(Speakeasy·Stainless·FastMCP, Postman 재진입)가 프로덕션 단계로 성장 — 기존 "OpenAPI→MCP 변환 대비 원칙(summary/description/예시/에러응답 명시적 작성)" 인사이트의 실무 배경이 강화됨.
- INVEST 기준을 명시적으로 결합한 전용 AI 백로그 분할 도구는 뚜렷이 확인되지 않음(우선순위화 도구는 있으나 "분할" 특화는 아님) — 현행 INVEST 체크리스트 접근이 여전히 유효한 방식임을 시사.

## 출처
- [Best Spec-Driven Development Tools](https://www.augmentcode.com/tools/best-spec-driven-development-tools)
- [Meet GitHub Spec Kit](https://www.marktechpost.com/2026/05/08/meet-github-spec-kit-an-open-source-toolkit-for-spec-driven-development-with-ai-coding-agents/)
- [MCP Release Candidate 2026-07-28](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP 2026 Spec: Agent Authentication](https://workos.com/blog/mcp-2026-spec-agent-authentication)
- [Generate MCP Tools from OpenAPI](https://www.speakeasy.com/mcp/tool-design/generate-mcp-tools-from-openapi)
- [API Development MCP Servers](https://chatforest.com/reviews/api-development-mcp-servers/)
- [MCP Best Practices](https://apigene.ai/blog/mcp-best-practices)
- [8 Tips and Best Practices for MCP Server Development](https://nordicapis.com/8-tips-and-best-practices-for-mcp-server-development/)
- [Why Your MCP Server Is a Security Disaster Waiting to Happen](https://medium.com/data-science-collective/why-your-mcp-server-is-a-security-disaster-waiting-to-happen-660577d8077c)
- [AI for Product Managers](https://www.chatprd.ai/learn/ai-for-product-managers)
- [AI Tools for Writing Product Specs](https://www.productboard.com/blog/ai-tools-for-writing-product-specs/)
- [Best AI Tools for Product Managers in 2026](https://getperspective.ai/blog/best-ai-tools-for-product-managers-in-2026-by-workflow-stage)

## 위키화 후보
- MCP 2026-07-28 정식 스펙 요약(stateless core + Tasks + Apps + OAuth/OIDC) — 개념 노트 신설 가치
- OpenAPI→MCP 자동변환 생태계 지도(Speakeasy/Postman/API 게이트웨이 통합) — 개념 노트 신설 가치

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "MCP 툴 리턴 포맷 예시 명시 + 부정 지침(negative instruction) 추가" 항목
- API 명세서 AI-ready 체크리스트에 "미인증 MCP 서버 리스크 + OAuth 2.1/PKCE 권고" 보안 항목

## 승인 필요 (고위험)
- 대기 중인 "PRD 작성 절차에 SDD 4단계(Specify→Plan→Tasks→Implement) 정식 채택" 건: 이번 리서치(업계 주류화 + 1차성공률 3~10배 개선 보고)가 근거를 보강했으므로, 채택 여부를 사용자에게 재상신할지 확인 필요.
- 기존 "MCP 장기실행 확장 = 실험적" 표기를 "확정 스펙(릴리스 후보 확정)"으로 격상: 단, 2026-07-28은 릴리스 후보(RC) 시점이지 정식 GA가 아니므로 완전 확정 표기는 GA 공식 발표 확인 후로 보류 권고.

## 신규 도구 후보 (에이전트/스킬)
- 없음
