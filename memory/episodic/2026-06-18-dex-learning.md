---
date: 2026-06-18
bot: dex
type: web-research
tags: [self-learning, backend architecture, API design]
---

# 덱스 자가학습 — 2026-06-18

## 오늘 배운 것

1. **모듈형 모놀리식(Modular Monolith) 재부흥**: 마이크로서비스의 80% 이점을 20% 운영 비용으로 제공. Shopify·GitHub가 공식 채택. 팀 규모 20명 미만일 때 마이크로서비스보다 빠름.

2. **REST API 명명 규칙의 표준화**: 동사 금지(POST /customers, 아닌 /createCustomer), 복수형 고정, 소문자+하이픈 사용(/order-items), 최대 1단계 중첩만 허용.

3. **API 버전 관리의 4가지 전략**: URL 경로(/v1) 가장 보편적 → 엣지 캐싱 효율 높음. GitHub는 날짜 기반(YYYY-MM-DD) + 헤더 조합 사용, 24개월 지원 정책.

4. **후위 호환성 우선 원칙**: 버전 전략 선택보다 백워드 호환성 엄격 유지가 핵심. Netflix가 버전 관련 배포 오류를 42% 감소.

5. **AI 소비 최적화 신규 고려사항**: 명확한 API 명칭 + OpenAPI 문서 = LLM이 MCP를 통해 올바른 도구 선택. 2026년 신규 베스트 프랙티스.

6. **아키텍처 선택의 실용주의 전환**: 마이크로서비스 vs 모놀리식 이분법 종료 → 팀 규모·배포 빈도·관찰성 도구 성숙도에 따라 결정.

---

## 출처

- [Modern Backend Architecture in 2026: Monoliths, Microservices, and the Truth in Between](https://coderush.montsoftware.com/blog/modern-backend-architecture-in-2026-monoliths-microservices-and-the-truth-in-between)
- [Backend Architecture Patterns — A Practical Guide for 2026](https://codelit.io/blog/backend-architecture-patterns-guide)
- [REST API Design Best Practices for Production Services](https://oneuptime.com/blog/post/2026-02-20-api-design-rest-best-practices/view)
- [REST API URI Naming Conventions and Best Practices](https://restfulapi.net/resource-naming/)
- [Web API Design Best Practices - Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [API Versioning Strategies: 2026 Engineering Matrix](https://www.digitalapplied.com/blog/api-versioning-strategies-2026-engineering-decision-matrix)
- [Rethinking Microservices in 2026: When Modular Monolith Architecture Actually Win](https://enqcode.com/blog/rethinking-microservices-in-2026-when-modular-monolith-architecture-actually-win)

---

## 위키화 후보

- **Backend Architecture Patterns 2026** — 모놀리식/모듈형모놀리식/마이크로서비스 비교표, 팀 규모별 선택 기준
- **REST API Naming & Versioning Standards** — HTTP 동사 활용, 복수형 규칙, 4가지 버전 전략 비교표

---

## 프로필 반영 후보 (저위험)

- API 설계 시 명확한 명명(nouns-only, 복수형, 소문자-하이픈)과 OpenAPI 문서를 우선 → LLM/MCP 도구 선택 정확도 향상
- 아키텍처 제안 시 마이크로서비스 대신 팀 규모/배포 빈도/관찰성 성숙도 먼저 체크 → 실용적 결정

---

## 승인 필요 (고위험)

(없음)


## 추가 학습 (18:15 UTC)
---

## 오늘 배운 것

- **Atomic notes = 링크 정확도**: 하나의 노트에 두 가지 이상의 개념이 들어가면 링크 연결 시 무엇을 가리키는지 모호해진다. 위키화 시 "한 노트 = 한 개념" 원칙을 지켜야 그래프 탐색 품질이 유지된다. ([출처](https://ericmjl.github.io/notes/blog_drafts/building-a-great-personal-knowledge-graph-with-obsidian/))

- **폴더 계층 최대 1단계**: 깊은 폴더 구조는 링크 기반 PKM에서 검색 오버헤드만 늘린다. 현재 `wiki/concepts/_drafts/` 같은 2단계 구조가 적절한 상한선. ([출처](https://calmevo.com/how-to-use-obsidian-for-pkm/))

- **거버넌스 없는 KB에 AI 도입 = 악화**: 메타데이터 표준·중복 제거·콘텐츠 검증 없이 AI를 붙이면 나쁜 콘텐츠가 증폭된다. 2026년 조직들이 겪는 가장 흔한 실패 패턴. ([출처](https://kairntech.com/blog/articles/knowledge-management/))

- **Fleeting note 처리 지연 = 컨텍스트 소멸**: 빠른 캡처 후 정제를 미루면 작성 당시의 맥락이 사라져 노트가 무의미해진다. `session-log.md` 기록도 당일 처리가 원칙인 이유. ([출처](https://medium.com/@petermilovcik/note-taking-strategies-in-obsidian-permanent-vs-fleeting-notes-dd5be202d381))

- **Obsidian MCP + 하이브리드 검색 (2026 트렌드)**: MCP 서버로 Obsidian 볼트를 노출해 Claude/AI가 직접 읽고 수정하는 구조가 주류. 고급 검색은 BM25 + 벡터(임베딩) + RRF 퓨전 조합으로 정확도를 높인다. Smart Connections v4는 로컬 임베딩 생성(클라우드 불필요). ([출처](https://blakecrosley.com/guides/obsidian))

- **수동 Obsidian은 1주일 후 방치**: "에이전트가 루틴을 대신하기 전까지 진정한 세컨드브레인이 되지 않는다"는 실증적 관찰. 덱스 자가학습 루프가 이 문제를 해결하는 구조적 해법. ([출처](https://hundredtabs.com/blog/obsidian-ai-second-brain-2026))

---

## 출처

- [Building a Developer's Second Brain: From Chaos to Clarity](https://dasroot.net/posts/2026/05/developer-second-brain-chaos-clarity-pkm-obsidian/)
- [12 Common PKM Mistakes](https://www.dsebastien.net/12-common-personal-knowledge-management-mistakes-and-how-to-avoid-them/)
- [Obsidian MCP + Hybrid Retrieval: 2026 Reference](https://blakecrosley.com/guides/obsidian)
- [Mastering PKM with Obsidian and AI (2026)](https://ericmjl.github.io/blog/2026/3/6/mastering-personal-knowledge-management-with-obsidian-and-ai/)
- [Note-Taking Strategies: Permanent vs Fleeting Notes](https://medium.com/@petermilovcik/note-taking-strategies-in-obsidian-permanent-vs-fleeting-notes-dd5be202d381)
- [Knowledge Management Best Practices 2026 – Kairntech](https://kairntech.com/blog/articles/knowledge-management/)

---

## 위키화 후보

- **Obsidian MCP + Hybrid Retrieval**: MCP 서버로 볼트를 AI에 연결하는 2026 아키텍처 패턴 (BM25 + 벡터 + RRF 퓨전 검색)
- **Note Lifecycle Management**: fleeting → permanent 전환 원칙과 생성 즉시 wikilink 통합 의무

---

## 프로필 반영 후보 (저위험)

- 노트 생성 후 반드시 기존 관련 노트에 `[[wikilink]]` 통합 — 창조와 연결은 하나의 작업 (통합 없는 노트는 그래프에서 고립됨)

---

## 승인 필요 (고위험)

_(없음)_
