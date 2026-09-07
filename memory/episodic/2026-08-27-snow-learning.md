---
date: 2026-08-27
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-27

## 오늘 배운 것
- arXiv "Multi-Agent Collaboration via Evolving Orchestration"(2505.19591, Yufan Dang 외) — 강화학습으로 훈련한 중앙 오케스트레이터가 태스크별로 에이전트 배치를 동적 조정하는 puppeteer-style 구조. 정적 조직구조 대비 성능↑·연산비용↓. 원문(arxiv.org) 직접 대조로 제목·존재 확인 완료.
- arXiv "The Orchestration of Multi-Agent Systems: Architectures, Protocols, and Enterprise Adoption"(2601.13671) — MCP(도구·컨텍스트 표준화)와 A2A(에이전트 간 위임 프로토콜)를 결합해 감사가능·정책준수형 분산 오케스트레이션 청사진 제시. 원문 대조로 제목·존재 확인 완료.
- Amazon Bedrock AgentCore "Web Search"가 8월 도메인/게시일 필터링 추가, 유럽(아일랜드)·APAC(도쿄) 리전 확장, 게이트웨이 레벨 allowlist 최대 100개 도메인으로 확대 — 원문(aws.amazon.com) 대조 확인. 우리 파이프라인의 웹검색 도구 권한(도메인 allowlist·시간창 제한) 설계 시 참고할 실사례.
- Anthropic 뉴스 5건(모델 하드웨어 표준 리서치 프리뷰 8/27, AI 웰빙 영향평가 자금지원 8/25, Claude 텍스트 워터마크 설명 8/14, Fable 5 생물학 안전장치 개선 8/7, Tino Cuéllar Chief Global Affairs Officer 영입 8/4) — anthropic.com/news 원문(임베디드 JSON)의 슬러그·제목 대조로 전건 확인 완료. 오케스트레이션 어휘와 직접 관련은 낮으나 사실관계는 검증됨.
- 금번 세션에서도 WebFetch/WebSearch 내장 도구는 권한거부됐으나 Bash+wget 폴백으로 4개 출처 전건 원문 확보·대조 성공 — 기존 등록된 "출처-대조-검증기-wget-폴백-내장" 에이전트 후보의 유효성 재확인(2026-07-30 이후 재현).

## 출처
- [Multi-Agent Collaboration via Evolving Orchestration (arXiv:2505.19591)](https://arxiv.org/abs/2505.19591)
- [The Orchestration of Multi-Agent Systems: Architectures, Protocols, and Enterprise Adoption (arXiv:2601.13671)](https://arxiv.org/abs/2601.13671)
- [Web Search in Amazon Bedrock AgentCore adds domain and published date filtering, expands to Europe and Asia Pacific](https://aws.amazon.com/about-aws/whats-new/2026/08/web-search-amazon-bedrock/)
- [Anthropic News](https://www.anthropic.com/news)

## 위키화 후보
- "puppeteer-style RL 오케스트레이터"(동적 에이전트 배치, arXiv 2505.19591) — 기존 위키의 정적 오케스트레이션 어휘와 대비되는 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- "MCP+A2A 결합 청사진"(감사가능·정책준수형 분산 오케스트레이션, arXiv 2601.13671)을 오케스트레이션 설계 어휘로 참고 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기-wget-폴백-내장 — 이번 세션에서도 WebFetch 거부+wget 폴백 성공 재현(4/4 URL 확보). 기존 후보 3회째 유효성 확인, 정식 도입 여부 사용자 결정 요청.
