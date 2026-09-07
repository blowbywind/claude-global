---
date: 2026-07-19
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-19

## 오늘 배운 것
- Anthropic Claude Developer Platform이 `agent-memory-2026-07-22` 베타 헤더로 메모리 조회 결과 순서 고정, depth/path_prefix/cursor 동작을 전 SDK(Python/TS/Go/Java/Ruby/PHP/C#/CLI)에 반영 — 공식 문서로 확인.
- Claude Managed Agents 볼트가 환경변수 자격증명 주입을 지원(CLI/SDK 시크릿을 샌드박스에 안전 전달) — 공식 지원문서로 확인, 파이프라인 배포 시 시크릿 관리 참고 가치 있음.
- Google ADK 2.0(5개 언어)이 그래프 기반 Workflow Runtime 정식화: Sequential/Parallel/Loop 3대 오케스트레이션 패턴 + Human-in-the-loop 내장 프리미티브 + Chat/Task/SingleTurn 3종 LLM 에이전트 모드 — 공식 블로그로 확인.
- Claude Code 서브에이전트 텍스트 스트리밍·백그라운드 에이전트 안정성 개선 등은 3자 집계 사이트발 정보라 참고용으로만 반영(신뢰도 중간).

※ 검증 불가로 폐기: arXiv "MAS-Orchestra"(2601.14652), "The Orchestration of Multi-Agent Systems"(2601.13671) — 이번 턴 WebSearch/WebFetch 권한 미승인으로 원문 대조 불가, ID·제목 진위 확인 못 함. LangGraph/CrewAI/AutoGen 토큰비용 "5~6배" 수치, SDK 출시 순서 타임라인 — 저신뢰 출처(블로그 집계). Gartner "2026년 40%" 통계 — 기존에 알려진 "2028년까지 33%"(Gartner 공식 발표) 수치와 상충해 왜곡 가능성 높음. 전부 이번 종합에서 제외.

## 출처
- [What's new — 2026-W28](https://code.claude.com/docs/en/whats-new/2026-w28)
- [Use the Claude Agent SDK with your Claude plan](https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan)
- [Announcing ADK Go 2.0](https://developers.googleblog.com/announcing-adk-go-20/)
- [Claude Code updates (aggregator, 참고용)](https://releasebot.io/updates/anthropic/claude-code)

## 위키화 후보
- 기존 `오케스트레이션 설계 어휘` 노트에 ADK 2.0의 "Sequential/Parallel/Loop 3대 패턴 + Human-in-the-loop 내장" 항목 추가(신규 노트 대신 기존 노트 갱신 권장).

## 프로필 반영 후보 (저위험)
- ADK 2.0 "Chat/Task/SingleTurn" 3종 에이전트 모드 어휘를 오케스트레이션 설계 어휘로 참고.
- Claude Managed Agents 볼트 "환경변수 자격증명 주입" 개념을 파이프라인 배포·시크릿 관리 어휘로 참고.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
