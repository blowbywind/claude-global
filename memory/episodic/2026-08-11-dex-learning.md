---
date: 2026-08-11
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-11

## 오늘 배운 것
- Datacore(Dataview 후속작)의 "2-10배 쿼리·렌더링 성능 개선" 목표는 공식 페이지 원문과 정확히 일치 확인(동일 개발자 Michael Brenan/blacksmithgu가 개발 중이라는 사실도 확인).
- 멀티에이전트 공유 메모리 4대 실패모드(무단 유출·스테일 전파·모순 잔존·provenance 붕괴)는 arXiv:2606.24535 초록과 문구까지 정확히 일치 — 우리 위키(공유 지식베이스) 운영에도 그대로 적용 가능한 검증된 프레임.
- 고신뢰 항목(예: 사용자 소속 변경) 스테일화가 저관련성 항목 decay보다 어렵다는 주장은 mem0.ai 원문 문장("직장을 옮기면 이전에 정확했던 기억이 확신에 찬 오답이 된다")과 일치 확인.
- AI 지식베이스 실패 패턴 중 "중복 콘텐츠"(오래되거나 상충하는 문서 방치)는 slite.com 원문에서 확인. 단 "컨텍스트 부패·검색 시 맥락손실·상류 드리프트" 세부 항목은 원문 대조 실패로 신뢰도 낮음.
- **폐기**: ①"Obsidian Bases 숫자컬럼 자동크기·정렬필터 배경색 버그수정" — 인용 출처는 신규 플러그인 5종 소개 글이며 해당 버그수정 언급 없음(Bases 자체 존재는 간접 확인됨). ②"blacksmithgu가 2024-06 이후 Dataview 커밋 중단" — 인용 출처(readmedium)는 2023년 작성 글로 해당 시점 정보 자체가 없음. 둘 다 원문 불일치로 폐기.

## 출처
- [Obsidian Stats – Datacore](https://www.obsidianstats.com/plugins/datacore) — "2-10x" 성능 문구 원문 일치
- [Governed Shared Memory for Multi-Agent LLM Systems (arXiv:2606.24535)](https://arxiv.org/abs/2606.24535) — 초록 원문 일치
- [Mem0 – AI Agent Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026) — 스테일화 예시 문장 원문 일치
- [Slite – Why Knowledge Bases Fail](https://slite.com/learn/why-knowledge-bases-fail) — 중복 콘텐츠 패턴 확인

## 위키화 후보
- "멀티에이전트 공유 메모리 4대 실패모드"(무단유출/스테일전파/모순잔존/provenance붕괴, arXiv:2606.24535) — 우리 위키 자체 운영 원칙에 직접 적용 가능, 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 위키 staleness 점검 어휘로 "context rot"(맥락 부패), "provenance collapse"(출처 붕괴) 용어 반영.

## 승인 필요 (고위험)
(없음 — 역할·행동규칙 변경 제안 없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 wiki-linter 범위로 충분)
