---
date: 2026-08-09
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-09

검증 결과: 원문 fetch 대조 시 claim 8·9(엔드포인트 개수별 임계값, 200개→4만~8만 토큰)는 인용된 speakeasy.com 원문에 해당 수치가 전혀 존재하지 않아 폐기했습니다. claim 1·2(GA 확정, Tasks core 분리)는 modelcontextprotocol.io 원문에서 "officially pushing the release button", "before it became generally available", "Tasks move out of the experimental core and into the io.modelcontextprotocol/tasks extension" 문구로 직접 확인했습니다.

## 오늘 배운 것
- MCP 2026-07-28 스펙이 GA로 공식 확정됨(원문 "officially pushing the release button" / "generally available" 직접 확인). 2026-07-22 메모의 "GA 공식발표 확인 후 확정" 조건 충족.
- Tasks(장기실행 작업)가 core에서 "io.modelcontextprotocol/tasks" 별도 extension으로 분리됨(원문 "move out of the experimental core" 직접 확인) — 기존 체크리스트의 "core 실험적 기능" 전제가 더 이상 맞지 않음.
- Tasks API가 폴링 기반 tasks/get + 신규 tasks/update로 개편(원문 확인).단 tasks/result 대체·tasks/list 제거 세부사항은 2차 출처(sdk-betas 블로그)만 언급해 이번 검증 범위에서 재확인 못함 — 참고용으로만 반영.
- MCP가 stateful→stateless 코어 대전환(세션/handshake 폐지, 헤더 기반 라우팅)이라는 점이 1차 출처에서도 핵심 변경사항으로 명시됨.
- SDD 4단계·EARS 표기법 관련 내용(claim 5~7)은 원문 재검증은 못했으나 원 리서치에 URL이 명시돼 있어 참고 수준으로만 유지, 확정 사실로는 취급 안 함.

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 직접 fetch 검증 완료
- [Generating MCP tools from OpenAPI](https://www.speakeasy.com/mcp/tool-design/generate-mcp-tools-from-openapi/) — 직접 fetch, 인용된 수치 미확인(폐기 근거)

## 위키화 후보
- "MCP stateless core 전환(2026-07-28)" — API 명세서의 MCP 확장 관련 배경지식 개념 노트로 가치 있음.

## 프로필 반영 후보 (저위험)
- 용어 갱신: "MCP Tasks extension(io.modelcontextprotocol/tasks)" — 기존 "실험적 확장" 표기를 대체.

## 승인 필요 (고위험)
- 기존 체크리스트 항목 "MCP 장기실행 작업 상태값 명시 + 실험적 확장임을 표기"를 "MCP Tasks는 2026-07-28 GA 확정 spec에서 core와 분리된 정식 extension(io.modelcontextprotocol/tasks)"으로 갱신할지 확인 필요 — 단순 확정 아닌 구조 변경 반영이라 문구 자체를 손봐야 함.
- 대기 중인 "PRD 절차에 SDD 4단계 정식 채택" 건: 이번 자료의 근거(claim 5~7)는 원문 재검증을 못 했으므로, 채택 여부 재상신은 보류 권고(추가 검증 후 재검토).

## 신규 도구 후보 (에이전트/스킬)
(없음)
