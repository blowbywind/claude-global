---
date: 2026-08-01
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-01

## 오늘 배운 것
- 최신 안정판은 React 19.2.8(2026-07-21 릴리스)이며 "React 20"은 오해임 — 위키에 관련 노트 없어 신규 확인
- Fastify는 v5.11.0이 최신 안정판, v6 공식 로드맵 미공개(기존 위키 Fastify 계열 노트들과 배치되지 않음, 버전 오인 방지 체크리스트에 참고 가능)
- OWASP가 기존 LLM Top 10과 별개로 "Top 10 for Agentic Applications"를 신규 발표, prompt injection이 10개 카테고리 중 6개에 매핑됨(위키에 기존 owasp-mcp-top-10/owasp-api-top-10과는 다른 신규 프레임워크, 중복 아님)
- 같은 소스에서 Claude Code·Gemini CLI·Codex·Cline·Aider 5종 코딩 에이전트가 프롬프트 인젝션 증가를 주도하는 도구로 지목 — Autobots도 유사한 코딩 에이전트 함대 운영 중이므로 참고할 시사점
- OWASP LLM Top 10 기준 prompt injection #1 유지는 별도 출처(eccu.edu)로도 교차확인됨(기존 위키 인식과 일치)
- Microsoft Security Blog가 AI 에이전트 프레임워크의 실제 RCE 취약점 다수 공개("프롬프트가 셸이 되는" 유형) — 위키에 gemini-cli RCE 개별사례 노트는 있으나 프레임워크 전반의 패턴 노트는 없어 신규
- (검증 확인) "OWASP Agentic Top 10 Agent Goal Hijacking 1위·340% 증가" 주장은 원문 대조 결과 근거 없어 1단계에서 이미 폐기 처리됨 — 적절한 조치로 판단, 채택하지 않음
- 단, 본 세션에서는 WebFetch 권한이 없어 상기 출처 재검증(원문 재대조)은 수행하지 못했고 1단계 자체 검증 결과에 의존함(기존 인사이트 "리서치-검증-권한-정합기" 이슈 재확인)

## 출처
- [React v19.2.8 Release](https://github.com/react/react/releases/tag/v19.2.8)
- [Fastify Releases](https://github.com/fastify/fastify/releases)
- [Node.js Fastify Production 2026](https://www.hirenodejs.com/blog/nodejs-fastify-production-2026)
- [OWASP Prompt Injection AI Security Failures](https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/)
- [Prompt Injection: AI Cybersecurity Threat](https://www.eccu.edu/blog/prompt-injection-ai-cybersecurity-threat/)
- [Prompts Become Shells: RCE Vulnerabilities in AI Agent Frameworks](https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/)

## 위키화 후보
- OWASP Top 10 for Agentic Applications(신규 프레임워크, 기존 LLM01/owasp-mcp-top-10과 별개 개념 노트)
- AI 에이전트 프레임워크 RCE 패턴("프롬프트가 셸이 되는" 유형, Microsoft 발표 기반)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "React 19.x대 유지(20 없음), Fastify v5.11.0 최신(v6 로드맵 미공개)" 버전 오인 방지 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "리서치-검증-권한-정합기", "출처-대조-검증기" 후보와 중복되어 재제안하지 않음)
