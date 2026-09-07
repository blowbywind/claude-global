---
date: 2026-06-19
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-06-19

## 오늘 배운 것

- **Obsidian Bases 출시 (2025)**: 네이티브 no-code 데이터베이스 뷰. YAML 프로퍼티 기반, GUI로 TABLE 쿼리 대체 가능. 단순 필터/정렬은 Bases, 복잡한 DQL/DataviewJS는 아직 Dataview 필요. 2026 기준 권장: "Dataview 유지 + 단순 케이스만 Bases 마이그레이션". ([출처](https://obsidian.rocks/dataview-vs-datacore-vs-obsidian-bases/))
- **Datacore = Dataview 후속**: 동일 개발자(Michael Brenan). React 기반, 2–10× 성능, WYSIWYG 테이블 직접 편집, 블록/섹션 단위 쿼리 지원. 2025년 중반 stable 채널 진입. ([출처](https://obsidian.rocks/getting-started-with-datacore/))
- **Frontmatter-first 원칙**: YAML에 `summary: 1-2줄` 추가 → LLM 에이전트가 전체 파일 열지 않고 메타데이터만으로 관련 노트 선별 가능. 토큰·레이턴시 절감. LLM이 생성한 노트는 frontmatter 누락이 잦아 수동 보완 필요. ([출처](https://medium.com/@michael.hannecke/frontmatter-first-is-not-optional-context-window-survival-for-local-llms-in-opencode-15809b207977))
- **고아 노트(orphan node)는 구조적 건강 문제**: 링크 없는 노트는 그래프에서 AI 에이전트가 탐색 불가. 정기 자동 검증(고아 탐지)으로 예방 필요. (기존 자가학습 인사이트 "통합 없는 노트는 고립됨"을 실증하는 외부 근거) ([출처](https://aicompetence.org/ai-enhanced-personal-knowledge-graphs/))
- **AI 에이전트 컨텍스트 품질 = PKM 구조에 직결**: 잘 구조화된 볼트는 에이전트 환각(hallucination) 감소, 지식 관리 오버헤드 30–40% → 10% 미만. 구조화 투자가 에이전트 신뢰도에 직접 영향. ([출처](https://www.buildmvpfast.com/blog/obsidian-claude-ai-knowledge-management-system-2026))
- **obsidian-llm-wiki (GitHub)**: Karpathy LLM Wiki 개념의 오픈소스 구현체. entity/concept 페이지 자동 생성 + 대화형 쿼리. bbw-wiki 구조와 직접 비교 참고 가능. ([출처](https://github.com/green-dalii/obsidian-llm-wiki))

## 출처

- [Dataview vs Datacore vs Obsidian Bases](https://obsidian.rocks/dataview-vs-datacore-vs-obsidian-bases/)
- [Getting Started with Datacore](https://obsidian.rocks/getting-started-with-datacore/)
- [Obsidian Bases Guide](https://www.obsibrain.com/blog/obsidian-bases-guide)
- [Frontmatter-First Is Not Optional](https://medium.com/@michael.hannecke/frontmatter-first-is-not-optional-context-window-survival-for-local-llms-in-opencode-15809b207977)
- [AI-Enhanced Personal Knowledge Graphs](https://aicompetence.org/ai-enhanced-personal-knowledge-graphs/)
- [Obsidian + Claude AI Knowledge Management 2026](https://www.buildmvpfast.com/blog/obsidian-claude-ai-knowledge-management-system-2026)
- [obsidian-llm-wiki GitHub](https://github.com/green-dalii/obsidian-llm-wiki)

## 위키화 후보

- `obsidian-bases` — 2025년 출시 네이티브 no-code 데이터베이스 뷰. Dataview/Datacore와 선택 기준 정리
- `frontmatter-first` — LLM 에이전트 효율화를 위한 YAML summary 우선 원칙 (토큰 절감 + 탐색 정확도)

## 프로필 반영 후보 (저위험)

- 노트 생성 시 YAML frontmatter에 `summary:` 1–2줄 필드 추가 — LLM이 전체 파일 로드 없이 관련도 판단 가능
- 단순 TABLE 쿼리는 Obsidian Bases로, 복잡한 DQL은 Dataview/Datacore 유지 — 네이티브 vs 플러그인 역할 분리

## 승인 필요 (고위험)

(없음)


## 추가 학습 (18:15 UTC)
좋아, 검색 3회 소진. 위키 기존 내용과 대조 후 결과를 정리한다.

---

## 오늘 배운 것

- **Obsidian Bases는 네이티브 DB, 단순 TABLE 쿼리의 자연스러운 대체재**: 클릭 기반 필터·정렬·그룹핑 지원, 모바일에서도 빠름. 복잡한 DQL/DataviewJS는 여전히 Dataview가 필요. 기존 위키 인사이트 `[2026-06-18]`과 일치—확인된 전략임. ([Obsidian Bases vs Dataview](https://obsidian.rocks/dataview-vs-datacore-vs-obsidian-bases/))

- **고아 노트(orphan nodes)는 그래프 신뢰도를 깎는 주요 pitfall**: 링크 없는 노트는 지식 그래프에서 단절되어 검색 시 누락됨. 자동화된 검증(스키마 위반·고아 노트 감지) 도입이 권장됨. ([PKM 지식 그래프 가이드](https://www.glukhov.org/knowledge-management/))

- **LLM 컨텍스트 과부하 pitfall**: 그래프 검색 시 경로/서브그래프를 너무 많이 가져오면 오히려 응답 품질 저하 (역U자 곡선). 관련성 높은 소수 경로만 주입해야 LLM 성능 최대화. ([AI Graph-Based PKM](https://medium.com/@theo-james/ai-graph-based-personal-knowledge-management-c0e09ac55654))

- **2026년 Obsidian 커뮤니티 플러그인 2,500개 돌파**: 플러그인 과잉 도입이 새로운 pitfall. 핵심 플러그인(Daily Notes, Templates)을 먼저 안정화한 뒤 추가 도입 권장. ([Best Obsidian Plugins 2026](https://www.dsebastien.net/the-must-have-obsidian-plugins-for-2026/))

- **Bases 마이그레이션 전략**: "지금 당장 Dataview 교체 금지, 특정 use case별로 점진 전환"이 2026 현실적 권고. ([Migrate to Bases from Dataview](https://practicalpkm.com/moving-to-obsidian-bases-from-dataview/))

## 출처
- [Obsidian Bases vs Dataview vs Datacore](https://obsidian.rocks/dataview-vs-datacore-vs-obsidian-bases/)
- [Migrate to Obsidian Bases from Dataview](https://practicalpkm.com/moving-to-obsidian-bases-from-dataview/)
- [Knowledge Management 2026 — PKM Tools & Pitfalls](https://www.glukhov.org/knowledge-management/)
- [AI Graph-Based PKM (Medium)](https://medium.com/@theo-james/ai-graph-based-personal-knowledge-management-c0e09ac55654)
- [Best Obsidian Plugins for 2026](https://www.dsebastien.net/the-must-have-obsidian-plugins-for-2026/)

## 위키화 후보
- **`obsidian-bases`** — Obsidian 네이티브 DB 기능. 단순 TABLE → Bases, 복잡 DQL → Dataview 분리 전략. `llm-wiki-pattern.md`에 링크 추가 가치 있음.
- **`knowledge-graph-retrieval`** — LLM+그래프 결합 시 경로 과잉 주입의 역U자 성능 저하 패턴. `rag.md`와 연계 가능.

## 프로필 반영 후보 (저위험)
- **고아 노트 주기적 감지 원칙**: 노트 생성 후 wikilink 통합 외에도, 주기적으로 `orphan` 노트(백링크 0) 탐지 → 기존 노트에 연결하거나 삭제 검토.
- **Bases 점진 전환 기준**: `TABLE` 쿼리만 쓰는 Dataview 블록은 Bases로 마이그레이션 후보로 표시. 복잡 DQL은 유지.

## 승인 필요 (고위험)
*(없음)*
