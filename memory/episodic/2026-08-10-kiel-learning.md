---
date: 2026-08-10
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-10

## 오늘 배운 것
- MCP 스펙 2026-07-28 정식 릴리스 확정(공식 블로그 원문 "officially pushing the release button" 확인). 다만 "GA(General Availability)"라는 용어 자체는 본문에 없으므로, 표기 시 "GA 확정"이 아니라 "정식 릴리스 확정"으로 정정해 사용해야 함 — 기존 2026-07-22 보류 항목(RC→GA 확인 후 확정) 해소.
- 기능수명주기 최소 12개월 유예 정책 원문 재확인: "twelve-month minimum window" — 2026-07-19 잠정 항목을 확정 사실로 전환 가능.
- Tasks가 core에서 분리돼 `io.modelcontextprotocol/tasks` extension으로 이동, MCP Apps·Enterprise Managed Authorization(EMA)과 함께 별도 extensions framework 소속임을 원문으로 확정.
- Stateful(양방향 세션) → Stateless(요청/응답) 프로토콜 전환 원문 확정.
- **폐기(출처 대조 실패)**: SDD 도입 수치(재작업 38%↓, PR리뷰 47→19분, 회귀버그 56%↓, thebcms.com)는 원문에 해당 수치가 전혀 존재하지 않아 폐기.
- **폐기(출처 대조 실패)**: llms.txt 채택률 "전체 10%/기술문서 5~15%"(presenc.ai)도 원문에 없는 수치. 실제 원문은 "금융·헬스케어·법률 등 규제업종 top-100 도메인 한정 10% 미만"이며 방법론 서술도 없어 신뢰도 낮음.

## 출처
- [MCP 2026-07-28 스펙 릴리스 공식 블로그](https://blog.modelcontextprotocol.io/posts/2026-07-28/)

## 위키화 후보
- MCP Extensions Framework(Tasks/MCP Apps/EMA가 core와 분리된 별도 거버넌스 소속) — 기존 "MCP 4대 변경축" 노트와 연결 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 "MCP 12개월 유예 정책 명시" 항목을 검토대기 → 확정 표기로 전환, "MCP 장기실행 확장=실험적" 표기도 "core 분리·extensions framework 소속(확정)"으로 갱신.

## 승인 필요 (고위험)
없음 — 단, SDD 4단계 정식 채택 재상신 건은 이번 리서치가 제시한 근거 수치(38%/47→19분/56%)가 출처 대조 결과 원문에 존재하지 않는 것으로 확인되어 재상신 사유가 성립하지 않습니다. 기존 보류 상태 유지 권고.

## 신규 도구 후보 (에이전트/스킬)
없음
