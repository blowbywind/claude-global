---
date: 2026-08-16
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-16

## 자가학습 종합 검증 결과 (2026-08-16)

눈꽃의 리서치 11건 중 원문 대조(wget 폴백, WebFetch 권한 이번에도 거부됨) 결과 **7건 확인, 4건 폐기**했습니다. 특히 Check Point 취약점 건은 프레임워크명 오류(Semantic Kernel→Microsoft Agent Framework)와 CVE 번호 3건 전부 원출처 어디에도 없음(환각 가능성)을 확인해 정정했습니다.

## 오늘 배운 것
- MCP 스펙 "2026-07-28" 정식 릴리스: 상태유지형→**무상태(stateless) 요청/응답 코어** 전환, MRTR(서버→클라이언트 요청 방식 대체)·헤더기반 라우팅(Mcp-Method/Mcp-Name)·캐시가능 리스트·공식 확장 프레임워크 도입 — 오케스트레이션 설계 어휘 확장
- Claude의 MCP 2026-07-28 지원: 커넥터 **관측성 대시보드**, **MCP 터널**(프라이빗 네트워크, 인바운드 방화벽 불필요), IdP 그룹 기반 제로터치 엔터프라이즈 인증 — 파이프라인 배포·시크릿 관리 어휘로 참고
- Claude Code 2026-08 업데이트: **기본 서브에이전트 포킹**, 세션 간 크로스메시징(SendMessage), GitLab 지원 확대 — 오케스트레이션 도구 자체 신기능, 직접 활용 가능
- Check Point 리서치(Black Hat 2026, The Register): LangChain·LangGraph·CrewAI·AutoGen·**Microsoft Agent Framework**·Google ADK 6개 프레임워크 1년 조사, 11건 취약점 발견(대부분 insecure deserialization·SSRF 등 구식 버그클래스 재등장). Google ADK는 신뢰경계 결함 CVE 미발급 — 멀티에이전트 프레임워크 보안검토 참고사례 (※ 원 리서치의 "Semantic Kernel"·구체 CVE 3건은 원문에 부재해 정정/폐기)
- "프롬프트 인젝션이 아니라 에이전트 프레임워크 구조 자체가 문제"(The Register 논조) — 신뢰경계 설계 원칙으로 참고
- Google ScientistOne: AI 생성 연구 인용 검증 프레임워크, 75편 논문 테스트에서 환각 참조 0건 — 산출물 검토·인용 정확성 어휘로 참고

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Bringing MCP 2026-07-28 to Claude](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)
- [Claude Code Updates — August 2026 (Releasebot)](https://releasebot.io/updates/anthropic/claude-code)
- [Prompt injection isn't the bug, AI agent frameworks are (The Register)](https://www.theregister.com/security/2026/08/05/prompt-injection-isnt-the-bug-ai-agent-frameworks-are/5283585)
- [ScientistOne addresses evidence failures in AI-generated research (agentic.ai/news, 경유 Crypto Briefing)](https://agentic.ai/news)
- [arXiv:2509.19599 — Knowledge Base-Aware Orchestration](https://arxiv.org/abs/2509.19599)
- [arXiv:2603.11445 — Verified Multi-Agent Orchestration (Plan-Execute-Verify-Replan)](https://arxiv.org/abs/2603.11445)

**폐기 항목(근거 불일치/미검증)**: EU AI Act 제50조(agentic.ai/news 전문에 부재), Open Secure AI Alliance·SAFE(axios 접근 불가), Amazon Bedrock Agents Classic 개칭(자체 부실 인용), CVE-2025-67644·CVE-2026-28277·CVE-2026-27022(원출처 The Register·TheHackerNews 어디에도 없음 — 환각 가능성)

## 위키화 후보
- MCP 2026-07-28 무상태 코어 전환(MRTR·헤더라우팅) — 신규 개념 노트 가치
- Check Point Black Hat 2026 프레임워크 취약점 사례(6개 프레임워크·11건·구식버그 재등장) — 멀티에이전트 프레임워크 보안 체크리스트 노트 가치

## 프로필 반영 후보 (저위험)
- "MCP 무상태 코어(stateless core)", "MRTR(Multi Round-Trip Requests)" 용어를 오케스트레이션 설계 어휘로 참고
- Claude Code "기본 서브에이전트 포킹(default subagent forking)" 용어 참고

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 등록된 "출처-대조-검증기" 계열 후보의 유효성이 이번 검증(11건 중 4건 폐기·오류 1건 정정)으로 재확인됨. 신규 중복 후보 추가는 보류)
