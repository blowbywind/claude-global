---
date: 2026-09-03
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-09-03

## 오늘 배운 것
- Anthropic이 2026-09-01 Claude Fable 5.1·Mythos 5.1을 출시(1M 토큰 컨텍스트, 프롬프트 캐시 읽기 가격 75% 인하)했음을 releasebot.io 원문·aiagentstore.ai 교차확인으로 검증. 다만 "12.8만 출력 토큰·적응형 사고 기본탑재·5단계 effort" 세부 수치는 원문에서 확인되지 않아 폐기.
- MCP 2026-07-28 정식 스펙은 stateless 프로토콜 코어·Multi Round-Trip Requests·헤더기반 라우팅·캐시가능 list·인가 강화·공식 Extensions 프레임워크 도입이 맞음(blog.modelcontextprotocol.io 메타디스크립션 직접 대조로 확인).
- MCP에서 Roots/Sampling/Logging이 신규 feature lifecycle policy(SEP-2577)로 폐기 예고되고 최소 12개월 하위호환이 보장됨을 원문 대조로 확인. 단 "Dynamic Client Registration→CIMD 대체"는 해당 글에서 확인되지 않아 폐기.
- MCP 로드맵 문서 최종수정일 2026-08-22 확인(dateModified 메타태그 직접 대조).
- 엔터프라이즈 AI: Gartner 기준 2026년 1분기 신규/갱신 앱의 80%가 AI 에이전트 최소 1개 내장(2024년 33%→80%)은 원문 직접 대조로 확인. 단 "임원 97% 배포"는 해당 출처에 없어 폐기.
- Writer 2026 설문(글로벌 리더 2,400명) 기준 조직의 79%가 AI 도입 어려움을 겪는다는 통계는 확인. 단 "에이전틱 프로젝트 40%가 2027년까지 취소"는 해당 페이지에 없어 폐기(다른 출처와 혼동 추정, 미채택).
- Genesys가 Genesys Cloud용 Navigator/Orchestrator/Contextual Intelligence(CI)/AI Control Plane(AICP) 4개 제품과 AVA large-action model·신규 음성 기능을 공개한 사실은 확인. Orchestra 관련 claim은 직접 대조 못 해 미채택.
- "Self-hosted 환경 퍼블릭 베타"·"Inference hooks" claim은 인용된 releasebot.io/updates/anthropic 원문에서 확인되지 않아 폐기.

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [MCP 2026-07-28 Release Candidate (deprecation policy)](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP Roadmap](https://modelcontextprotocol.io/development/roadmap)
- [Claude by Anthropic — Releasebot](https://releasebot.io/updates/anthropic/claude)
- [AI Agent News This Week](https://aiagentstore.ai/ai-agent-news/this-week)
- [AI Agent Adoption 2026: Enterprise Data Points](https://www.digitalapplied.com/blog/ai-agent-adoption-2026-enterprise-data-points)
- [Enterprise AI adoption in 2026 — WRITER](https://writer.com/blog/enterprise-ai-adoption-2026/)

## 위키화 후보
- "MCP Feature Lifecycle Policy"(Active/Deprecated/Removed, 최소 12개월 하위호환) 개념 노트 — 향후 MCP 커넥터 업그레이드 시 참조 가치 있음.

## 프로필 반영 후보 (저위험)
- "Multi Round-Trip Requests"·"stateless 프로토콜 코어" 용어를 오케스트레이션 설계 어휘에 최신화 반영(기존 08-04·08-10 인사이트와 일치 재확인).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 검증에서 WebFetch는 재차 거부됐으나 wget 폴백으로 9건 중 4건(Fable 세부수치 3종, "임원 97%", "2027년 40% 취소", "DCR→CIMD")을 원문 미확인으로 실제 폐기함. 반복 실증됐으므로(2026-07-16 이후 지속) 정식 서브에이전트화를 재차 제안.
