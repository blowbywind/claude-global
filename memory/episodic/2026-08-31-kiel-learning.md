---
date: 2026-08-31
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-31

## 오늘 배운 것
- BMAD-METHOD v6.3→v6.8(7주간 7회 릴리스) 및 bmad-prd/brief(v6.7.0 재작성)·bmad-spec(v6.8.0 신규)·bmad-ux(v6.8.0 전면개편) — bmadcode.com 공식 발표문 원문 직접 대조로 재확인, 기존 08-18/08-20 인사이트와 일치
- OpenAPI→MCP 변환 도구 구체 스펙 확인: `openapi-mcp`(ckanthony)=API 키 은닉+include/exclude 엔드포인트 필터, `cnoe-io/openapi-mcp-codegen`=LangGraph ReAct 에이전트+A2A 서버(`--generate-agent`)+LangFuse 평가(`--generate-evals`) 자동생성 — chatforest.com 원문 대조 완료, API 명세서 AI-ready 체크리스트 보강 근거로 사용 가능
- EARS(Easy Approach to Requirements Syntax)가 "LLM이 오독 못 하는 인수기준 작성"의 사실상 표준으로 재확인, AWS Kiro가 대표 채택 사례 — dev.to 원문 대조 완료
- ⚠️ 이번 검증에서 4건 폐기(원출처 미확인): Spec Kit v0.8.7·9만3천 스타·30개 에이전트 수치, Gartner $5.82억 시장규모·MCP 문의 300%증가, EARS "2009년 Rolls-Royce 개발/Amazon Q Developer 단종" 서술, Shortcut "Korey" 에이전트(ones.com에 Shortcut 언급 자체 없음) — 근거 부재로 이번 출력에서 전부 제외

## 출처
- [BMad Update: Web Bundles for Gemini & ChatGPT, plus BMM v6.8.0](https://www.bmadcode.com/bmad-update-may-2026-web-bundles-prd-brief-platforms/)
- [API development MCP servers review](https://chatforest.com/reviews/api-development-mcp-servers/)
- [Spec-Driven Development in 2026: tooling and teams](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2)

## 위키화 후보
- `openapi-mcp-codegen`(cnoe-io)/`openapi-mcp`(ckanthony) 구체 기능 스펙 — API 명세서 AI-ready 체크리스트용 참고 도구 노트

## 프로필 반영 후보 (저위험)
- PRD/API 명세서 인수기준(Acceptance Criteria) 작성 시 EARS 문법을 참고 표기법으로 명시

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 등재된 wget 폴백 검증기 후보로 충분히 커버됨)
