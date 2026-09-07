---
date: 2026-07-12
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-12

## 오늘 배운 것
- MCP 프로토콜이 2026-07-28 릴리스 후보로 대규모 개정 중(stateless 코어, 서버 렌더 UI인 MCP Apps, 장기실행 Tasks 확장, OAuth/OIDC 인가) → API 명세서의 "AI-ready" 체크 항목 갱신 필요
- llms.txt 채택률은 30만 도메인 조사 기준 약 10.13%에 그치고 주요 AI 크롤러(ClaudeBot·GPTBot·PerplexityBot)도 거의 조회하지 않음 → 기존 인사이트("AI-ready 체크는 llms.txt 단독보다 MCP 서버 노출 우선") 수치로 재확인됨
- 엔터프라이즈 AI팀 78%가 MCP 기반 에이전트 운영, Fortune 500 중 28%가 MCP 서버 운영 → API 명세에 MCP 노출 여부를 우선 체크할 실무 근거 확보
- Spec-Driven Development(SDD)가 2026년 업계 표준 워크플로로 자리잡음: GitHub Spec Kit·AWS Kiro·BMAD-METHOD·OpenSpec, 공통적으로 Specify→Plan→Tasks→Implement 4단계 → PRD·백로그 분할 프로세스에 참고할 프레임워크
- BMAD-METHOD는 PRD·아키텍처 문서를 세분화된 스토리 파일로 샤딩하는 방식 → 우리 팀의 "백로그 분할" 업무와 직접 비교 가능

※ 이번 검증 단계에서 WebFetch 권한 미승인으로 개별 URL 재접속 확인은 수행하지 못했으며, 리서치 산출물에 명시된 출처 표기와 내부 정합성(위키 기존 기록과의 일관성)만으로 교차검증했습니다. Claude Sonnet 5 관련 항목, 다운로드 수치(9,700만 건) 등 정량 수치는 출처가 1건뿐이라 낮은 확신도로 제외했습니다.

## 출처
- [MCP 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP Streamable HTTP 헤더 변경](https://stacktr.ee/blog/mcp-2026-spec-changes)
- [MCP 엔터프라이즈 도입 현황](https://andrew.ooo/answers/mcp-model-context-protocol-enterprise-adoption-july-2026/)
- [llms.txt in 2026: The Full Guide](https://limy.ai/blog/llms.txt-in-2026-the-full-guide)
- [Spec-Driven Development 도구 비교](https://www.marktechpost.com/2026/05/08/9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/)

## 위키화 후보
- BMAD-METHOD의 SDD 4단계(Specify→Plan→Tasks→Implement) 및 PRD 샤딩 방식 — 신규 개념 노트 가치 있음(백로그 분할 INVEST 체크리스트와 비교 참고)

## 프로필 반영 후보 (저위험)
- 백로그 분할 시 "BMAD-METHOD PRD 샤딩" 방식을 INVEST 체크리스트의 비교 참고 기법으로 추가

## 승인 필요 (고위험)
- PRD 작성 절차 자체에 SDD 4단계(Specify→Plan→Tasks→Implement)를 정식 표준 프로세스로 채택할지 여부 — 작업방식 변경이라 사용자 확인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] spec-driven-prd — SDD 4단계 템플릿(Specify→Plan→Tasks→Implement)으로 PRD·백로그 초안을 구조화 생성하는 스킬
