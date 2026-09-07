---
date: 2026-06-21
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-06-21

---

## 오늘 배운 것

- **Bases는 YAML frontmatter만 읽음** — Dataview 인라인 필드(`key:: value` 본문 형식)는 Bases가 인식 불가. Dataview→Bases 마이그레이션 전 인라인 필드 존재 여부 먼저 점검 필수. ([출처](https://obsidian.md/help/bases/syntax))

- **Bases formula 한계 2종** — ① 자기참조(circular reference) 불가, ② Date 빼기 결과는 Duration 타입 → `.days`/`.hours` 접근 후에야 수학 연산 가능. Dataview DQL과 달리 스크립트 수준 유연성 없음. ([출처](https://help.obsidian.md/formulas))

- **Canvas → Graph/Backlink 통합** — 2026 업데이트로 Canvas 파일 내 링크가 Graph view·Backlinks 패널에 집계됨. Canvas도 지식 그래프 일부로 취급, 고아 Canvas 노드 점검 대상에 포함해야 함. ([출처](https://obsidian.md/changelog/))

- **engraph** — Obsidian 볼트용 로컬 지식 그래프 + AI 에이전트 MCP 서버. orphan 노트·broken wikilink·stale content·태그 위생 진단을 내장 vault health 리포트로 제공. ([출처](https://github.com/devwhodevs/engraph))

- **PKM Decision Fatigue** — 노트를 캡처할 때마다 폴더·태그·DB 결정을 요구하는 구조는 인지 자원을 누적 소모시킨다. 캡처된 정보의 20~60%가 미분류 방치로 유실되는 주요 원인. `capture-first, organize-later` + wikilink 우선 전략이 이 문제의 직접 해법. ([출처](https://remlabs.ai/blog/ai-knowledge-management-2026))

- **AI 지식 표면화 트렌드** — 수백 개 노트를 가로지르는 질문 응답·시각적 관계 맵 자동 생성이 2026 PKM 도구의 핵심 경쟁 포인트. 수동 링크 이상의 "질문 기반 탐색"이 표준화 중. ([출처](https://arxiv.org/pdf/2509.03610))

---

## 출처
- [Obsidian Bases Syntax](https://obsidian.md/help/bases/syntax)
- [Obsidian Formulas Help](https://help.obsidian.md/formulas)
- [Obsidian Changelog 2026](https://obsidian.md/changelog/)
- [engraph — vault health + MCP](https://github.com/devwhodevs/engraph)
- [AI for PKM 2026 — REM Labs](https://remlabs.ai/blog/ai-knowledge-management-2026)
- [NoteBar AI-assisted PKM paper](https://arxiv.org/pdf/2509.03610)

---

## 위키화 후보
- `obsidian-bases-formula-limits` — Bases formula 한계(인라인 필드 불가, circular ref, Duration 타입) 정리 → Dataview 마이그레이션 의사결정 레퍼런스
- `pkm-decision-fatigue` — 분류 결정 인지 비용 누적 문제와 capture-first 해법

---

## 프로필 반영 후보 (저위험)
- Canvas 백링크 집계(2026): 고아 점검 범위를 Canvas 파일까지 확장
- Bases 마이그레이션 체크리스트에 "인라인 필드 → frontmatter 변환" 선행 단계 추가

---

## 승인 필요 (고위험)
_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)
- **[skill] vault-health-check** — engraph MCP 또는 직접 grep 기반으로 orphan 노트·broken wikilink·Canvas 고립 노드를 주기적으로 진단하고 리포트 출력하는 스킬


## 추가 학습 (18:17 UTC)
---

## 오늘 배운 것

- **Datacore 성능 상한 재확인**: 기존 메모리 "2-10×"는 보수 추정. 개발자 및 일부 벤치마크에서 최대 100× 빠름 주장 존재. Vault 크기·쿼리 복잡도에 따라 편차 큼.
  - 출처: [Obsidian Rocks](https://obsidian.rocks/dataview-vs-datacore-vs-obsidian-bases/), [Medium](https://beingpax.medium.com/datacore-the-game-changing-successor-to-obsidians-dataview-plugin-6332563b02ea)

- **Atomic Note = 단일 주장 원칙**: 노트 하나에 아이디어가 둘이면 wikilink 대상이 모호해짐. "Vitamin D prevents kidney stones"처럼 명제형 제목이 연결 정확도를 높임.
  - 출처: [Obsidian Forum](https://forum.obsidian.md/t/every-atomic-note-needs-a-title/87893)

- **노트 제목이 신호(signal)**: "Thoughts on X", "Reflections on Y" 플레이스홀더 제목은 50개 vault에서는 작동하지만 500개+에서는 탐색 실패. 제목 자체가 구체적 맥락을 담아야 함.
  - 출처: [Medium - Titles Are Everything](https://kurtis-redux.medium.com/in-obsidian-titles-are-everything-f173648b3ffc)

- **Graph View vs Canvas 역할 분리**: Graph View는 200+ 노트에서 "탐색 불능(tangled web)"으로 전락. Canvas는 큐레이션 작업공간(라이브 편집 = 원본 즉시 반영) → Graph=건강도 시각화, Canvas=합성·계획 작업공간.
  - 출처: [Code Culture](https://codeculture.store/blogs/developer-culture/obsidian-graph-view-useful), [Obsibrain](https://www.obsibrain.com/blog/obsidian-canvas-complete-guide)

- **MCP + Obsidian = 읽기→쓰기 전환**: 2026 핵심 전환. MCP 서버를 통해 AI가 노트 생성·태그 업데이트·wikilink 자동 빌드 가능. "AI가 노트를 읽는" 패턴에서 "AI가 위키를 성장시키는" 패턴으로 이동.
  - 출처: [a2a-mcp.org](https://a2a-mcp.org/blog/andrej-karpathy-llm-knowledge-bases-obsidian-wiki), [MCP Servers](https://lobehub.com/mcp/2233admin-obsidian-llm-wiki)

- **LLM Wiki "compile-once" 패턴**: Karpathy 원칙 재확인 — 소스를 매번 RAG로 재질의하지 않고, 한 번 구조화된 인터링크 마크다운으로 컴파일 후 최신 유지. 토큰 절약 + 환각 감소.
  - 출처: [DeveloPassion Newsletter #210](https://www.dsebastien.net/developassions-newsletter-210-llm-wikis/)

---

## 출처
- [Dataview vs Datacore vs Obsidian Bases - Obsidian Rocks](https://obsidian.rocks/dataview-vs-datacore-vs-obsidian-bases/)
- [DataCore - Medium (beingpax)](https://beingpax.medium.com/datacore-the-game-changing-successor-to-obsidians-dataview-plugin-6332563b02ea)
- [In Obsidian, Titles Are Everything - Medium](https://kurtis-redux.medium.com/in-obsidian-titles-are-everything-f173648b3ffc)
- [Obsidian's Graph View Is Beautiful and Almost Completely Useless - Code Culture](https://codeculture.store/blogs/developer-culture/obsidian-graph-view-useful)
- [Obsidian Canvas Complete Guide - Obsibrain](https://www.obsibrain.com/blog/obsidian-canvas-complete-guide)
- [Karpathy LLM Knowledge Bases in Obsidian - a2a-mcp.org](https://a2a-mcp.org/blog/andrej-karpathy-llm-knowledge-bases-obsidian-wiki)
- [DeveloPassion's Newsletter #210 - LLM Wikis](https://www.dsebastien.net/developassions-newsletter-210-llm-wikis/)

---

## 위키화 후보
- **atomic-note-design** — 단일 주장 노트 설계 원칙: 제목=명제, 내용=단일 아이디어, 두 아이디어=분리 기준
- **obsidian-canvas-vs-graph** — Canvas(큐레이션 작업공간·라이브 편집) vs Graph View(건강도 시각화·200+ 탐색 불능) 역할 분리 기준

---

## 프로필 반영 후보 (저위험)
- 노트 제목은 구체적 명제형으로 작성 — 플레이스홀더 제목("Thoughts on X")은 500개+ vault에서 탐색 실패하므로 생성 시 즉시 명제화
- Datacore 성능 범위 업데이트: "2-10×" → "2-10× (일부 벤치마크 최대 100×)" — 상한치 병기로 판단 정확도 향상

---

## 승인 필요 (고위험)
- (없음)

---

## 신규 도구 후보
- `[skill] obsidian-title-lint` — 노트 제목 플레이스홀더 탐지("Thoughts on", "Notes about" 패턴) + 500개+ vault에서 신호 없는 제목 목록 출력 자동화


## 추가 학습 (18:17 UTC)
## 오늘 배운 것

- **Obsidian 공식 Skills 출시(2026)**: Obsidian이 AI 에이전트용 공식 Skills 스펙(Markdown + Bases + JSON Canvas 3종)을 공개했다. 에이전트가 볼트를 직접 읽고 쓸 때 이 스펙을 준수하면 도구 호환성이 보장된다.  
  출처: [Obsidian Skills Review 2026](https://vibecoding.app/blog/obsidian-skills-review)

- **JSON Canvas — 열린 스펙**: `.canvas` 파일은 노드·커넥션·그룹을 담은 고정 JSON 스키마다. AI가 직접 생성 가능하며, 노드당 최대 200단어 제한이 가독성·레이아웃 안정성 권장치로 거론된다.  
  출처: [Claude Code Turned Obsidian Canvas Into an AI Design Studio](https://agricidaniel.com/blog/claude-canvas-ai-visual-production)

- **PKM 핵심 함정 — 노트 수 최적화**: 5,000개 미처리 노트 < 50개 자주 꺼내는 노트. 노트 개수가 아닌 **활용 빈도**가 PKM 품질 지표다.  
  출처: [7 Mistakes Building Your PKM](https://medium.com/@theo-james/setting-up-your-pkms-here-are-7-mistakes-you-dont-want-to-make-587bdfc8b79c)

- **PKM 함정 — 수집·정리 혼용**: 캡처 중에 동시에 정리하려는 습관이 마찰을 만들어 캡처 루틴 자체를 무너뜨린다. "캡처 먼저, 정리 나중" 분리가 정설.  
  출처: [12 Common PKM Mistakes](https://www.dsebastien.net/12-common-personal-knowledge-management-mistakes-and-how-to-avoid-them/)

- **Knowledge Graph Analysis 플러그인**: 볼트를 Semantic Analysis / Knowledge Structure / Knowledge Evolution / Recommended Actions 4개 탭으로 분석한다. 고아 노드와 밀집 허브를 자동 탐지하고 연결 후보를 우선순위화한다.  
  출처: [Knowledge Graph Analysis Plugin](https://community.obsidian.md/plugins/knowledge-graph-analysis)

- **Canvas 기반 멀티에이전트 시각 오케스트레이션(Kanvas)**: 드래그앤드롭 캔버스에서 색상 코드 태스크 상태·의존성 트래킹으로 멀티에이전트 DAG 워크플로를 구성. YAML·코드 없이 에이전트 팀 구성 가능.  
  출처: [Kanvas GitHub](https://github.com/XMihura/Kanvas)

---

## 출처
- [Obsidian Skills Review 2026](https://vibecoding.app/blog/obsidian-skills-review)
- [Claude Code Turned Obsidian Canvas Into an AI Design Studio](https://agricidaniel.com/blog/claude-canvas-ai-visual-production)
- [7 Mistakes Building Your PKM](https://medium.com/@theo-james/setting-up-your-pkms-here-are-7-mistakes-you-dont-want-to-make-587bdfc8b79c)
- [12 Common PKM Mistakes](https://www.dsebastien.net/12-common-personal-knowledge-management-mistakes-and-how-to-avoid-them/)
- [Knowledge Graph Analysis Plugin](https://community.obsidian.md/plugins/knowledge-graph-analysis)
- [Kanvas GitHub](https://github.com/XMihura/Kanvas)

---

## 위키화 후보
- **`obsidian-skills`** — Obsidian 공식 AI 에이전트 Skills 스펙(Markdown·Bases·JSON Canvas 3종), 볼트 연동 에이전트 개발 시 참조 표준
- **`pkm-pitfalls`** — PKM 7대 함정(수집·정리 혼용, 노트 수 최적화, 도구 호핑 등) 실전 체크리스트

---

## 프로필 반영 후보 (저위험)
- `[2026-06-22]` 노트 품질 지표는 **개수가 아닌 활용 빈도** — 주기적 "사용 안 된 노트" 감사 시 기준으로 활용
- `[2026-06-22]` JSON Canvas 생성 시 노드당 최대 200단어 제한 준수 — 레이아웃 안정성과 가독성 보장

---

## 승인 필요 (고위험)
_(없음)_
