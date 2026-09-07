---
date: 2026-07-10
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-10

충분한 기존 위키 확인이 완료됐습니다. 웹 리서치가 두 경로 모두 막혀 있으므로(**원본 antigravity 산출물**: 주제 무관 폐기, **백업 research-agent**: WebSearch 권한 없음), 기존 위키의 검증된 출처 노트에서 자가학습 인사이트에 **아직 등록되지 않은** 사실만 추려 종합합니다.

---

## 오늘 배운 것

1. **명제형 노트 제목이 wikilink 정확도를 결정한다** — "개념 이름" 대신 "X는 Y한다" 형식 제목(예: "Vitamin D prevents kidney stones")이 500+ 볼트에서 wikilink 대상 탐색 실패를 구조적으로 방지한다. 제목 자체가 맥락을 담아야 AI·인간 모두 정확히 연결할 수 있음. ([forum.obsidian.md](https://forum.obsidian.md/t/every-atomic-note-needs-a-title/87893), [kurtis-redux.medium.com](https://kurtis-redux.medium.com/in-obsidian-titles-are-everything-f173648b3ffc))

2. **폴더 분류를 캡처 시점에 강제하면 정보 20~60%가 미분류로 방치된다** — capture-first 원칙의 정량적 근거. 분류 결정을 캡처 시점에 묶으면 인지 자원 누적 소모 → 방치 루프 진입. 수치로 기억해야 할 anti-pattern. ([remlabs.ai](https://remlabs.ai/blog/ai-knowledge-management-2026))

3. **Smart Connections v4 로컬 임베딩** — 클라우드 API 없이 볼트 내에서 임베딩 생성, 볼트 내용 외부 전송 없이 시맨틱 검색 가능. 개인 볼트에서 프라이버시-안전 AI 검색의 현실적 선택지. ([blakecrosley.com](https://blakecrosley.com/guides/obsidian))

4. **BM25 + 벡터 + RRF(역수 순위 퓨전) 하이브리드 검색** — 단순 키워드(BM25)나 순수 벡터만으로는 위키 검색이 부족; RRF로 두 방식의 순위를 합산해야 검색 정확도가 구조적으로 높아진다. wiki-linter나 봇 RAG 쿼리 설계 시 기준 알고리즘으로 채택 가능. ([ericmjl.github.io](https://ericmjl.github.io/blog/2026/3/6/mastering-personal-knowledge-management-with-obsidian-and-ai/))

5. **Leiden/Louvain 클러스터링으로 위키 그래프 고아·허브 자동 탐지** — 고아 노트 수동 검색 대신 그래프 알고리즘(Leiden/Louvain)으로 위키의 고립 노드와 과밀 허브를 자동 식별. lint 패턴의 심화 구현체로, wiki-linter 에이전트 확장 후보. ([medium.com/@jsong_49820](https://medium.com/@jsong_49820/from-scattered-notes-to-a-living-knowledge-graph-building-llm-wiki-graphify-01b4f031471a))

---

## 출처

- [forum.obsidian.md — Every Atomic Note Needs a Title](https://forum.obsidian.md/t/every-atomic-note-needs-a-title/87893)
- [kurtis-redux.medium.com — In Obsidian, Titles Are Everything](https://kurtis-redux.medium.com/in-obsidian-titles-are-everything-f173648b3ffc)
- [remlabs.ai — AI Knowledge Management 2026](https://remlabs.ai/blog/ai-knowledge-management-2026)
- [blakecrosley.com — Obsidian Guide](https://blakecrosley.com/guides/obsidian)
- [ericmjl.github.io — Mastering PKM with Obsidian and AI (2026)](https://ericmjl.github.io/blog/2026/3/6/mastering-personal-knowledge-management-with-obsidian-and-ai/)
- [medium.com/@jsong_49820 — LLM Wiki + Graphify](https://medium.com/@jsong_49820/from-scattered-notes-to-a-living-knowledge-graph-building-llm-wiki-graphify-01b4f031471a)

> ⚠️ **리서치 제약 기록**: 원본 antigravity 산출물은 주제 무관(model flag 혼동)으로 전량 폐기. 백업 WebSearch도 서브에이전트 권한 정책으로 차단. 위 출처는 기존 위키 노트(pkm.md, obsidian-mcp-hybrid-retrieval.md, llm-wiki-lint-pattern.md)에 이미 기재된 URL 기준이며, 오늘 독립 재검증 없음.

---

## 위키화 후보

- **`Smart Connections v4`** (entities/) — 로컬 임베딩 기반 Obsidian 시맨틱 검색 도구; 현재 obsidian-mcp-hybrid-retrieval.md에만 언급, 전용 엔티티 노트 없음
- **`obsidian-bases`** (concepts/) — Dataview 대체 Bases 플러그인 단독 개념 노트 없음; pkm.md 인사이트에만 산재

---

## 프로필 반영 후보 (저위험)

- **명제형 노트 제목 원칙** — 대규모 볼트 wikilink 설계 시 제목 작성 기준으로 적용
- **RRF(역수 순위 퓨전)** — wiki-linter·봇 RAG 쿼리 설계 어휘로 등록

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

- **[skill] wiki-graph-cluster** — Leiden/Louvain 알고리즘으로 위키 그래프 클러스터 분석 후 고아·허브 노드 보고서 생성; 기존 wiki-linter 에이전트의 "검색 기반 고아 탐지"를 그래프 알고리즘으로 심화하는 확장 스킬 후보
