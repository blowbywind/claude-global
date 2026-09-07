---
date: 2026-07-13
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-13

웹 검증 도구(WebFetch/gh api) 접근이 차단되어 있어, 리서치 내 **출처 간 교차대조** 및 **수치 신뢰도** 기준으로 검증했습니다. 결과: BMAD-METHOD 스타 수가 두 출처(46,200 vs 37,000+)에서 서로 모순되어 해당 수치·버전(v6.6.0)은 폐기, "PM 70% 매일 AI 사용"·Gartner "40%" 수치는 근거가 약한 2차 출처(단일 블로그, 원자료 미인용)라 폐기했습니다. 나머지 항목은 채택합니다.

## 오늘 배운 것
- API 명세서의 "AI-ready" 체크는 검색엔진 노출(llms.txt는 GPTBot·ClaudeBot이 대체로 무시)이 아니라 **Claude Code·Cursor 등 IDE 에이전트의 상시 fetch 소비 가능 여부**로 기준을 재정의해야 함 — 출처: https://limy.ai/blog/llms.txt-in-2026-the-full-guide
- MCP가 2026-07-28 릴리스 후보에서 프로토콜 레이어를 stateless로 전환(sticky routing·공유 세션스토어 불필요) — API 명세서의 MCP 서버 노출 항목에 "무상태 설계 준수" 체크 추가 검토 — 출처: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- BMAD-METHOD와 GitHub Spec Kit 두 스펙 주도 프레임워크가 경쟁·병행되는 추세이며, "계획 단계(BMAD/Spec Kit)+실행 단계(GSD/Superpowers)" 조합으로 업계가 수렴 중 — 정확한 스타 수는 출처 간 불일치로 폐기, 트렌드 방향성만 채택 — 출처: https://earezki.com/ai-news/2026-05-09-9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/
- 백로그 분할 AI 도구는 INVEST 기준 자동 평가·분할 패턴 추천까지 가능하나, 업계 컨센서스는 "완전 자동화"가 아닌 "리파인먼트 회의 전 노이즈 제거 코치" 역할 한정 — 기획자 역할(사람 최종 판단) 대체 아님을 확인 — 출처: https://agileseekers.com/blog/using-ai-tools-for-backlog-refinement-and-story-creation
- ChatPRD 등 PRD 전용 AI 도구는 문제정의·목표·유저스토리·지표·리스크·의존성의 표준 섹션 구조로 초안을 생성하나, AI 초안은 반드시 사람 재편집이 전제 — 출처: https://www.chatprd.ai/learn/ai-for-product-managers

## 출처
- [llms.txt in 2026: The Full Guide](https://limy.ai/blog/llms.txt-in-2026-the-full-guide)
- [MCP 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [9 Best AI Tools for Spec-Driven Development in 2026](https://earezki.com/ai-news/2026-05-09-9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/)
- [Using AI Tools for Backlog Refinement and Story Creation](https://agileseekers.com/blog/using-ai-tools-for-backlog-refinement-and-story-creation)
- [ChatPRD: AI for Product Managers](https://www.chatprd.ai/learn/ai-for-product-managers)

## 위키화 후보
- "AI-ready API 명세 체크리스트" — llms.txt(검색노출 무관) 대신 IDE 에이전트 fetch 소비 관점 + MCP stateless 설계 준수 항목으로 신규 개념 노트

## 프로필 반영 후보 (저위험)
- API 명세서 "AI-ready" 체크 기준을 "llms.txt 노출"에서 "IDE 에이전트 소비 가능성 + MCP stateless 설계"로 세분화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
