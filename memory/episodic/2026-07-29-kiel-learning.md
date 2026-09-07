---
date: 2026-07-29
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-29

## 오늘 배운 것
- MCP 스펙 "2026-07-28" 정식 발표를 1차 출처(modelcontextprotocol.io/specification/2026-07-28)에서 직접 fetch로 확인 — stateless 코어 기반 프로토콜과 별도 거버넌스의 **extensions 프레임워크**(Tasks·Skills over MCP·MCP Apps)가 공식 구조로 명문화됨. 기존 대기 항목(2026-07-19 "정식발표 07-28 이후 재확인")이 검증된 사실로 확정됩니다.
- Tasks(장기실행 작업)는 core가 아닌 "확장(extension)"으로 공식 분류 — 기존 메모 "MCP 확장 기능은 core와 별도 거버넌스" 이해가 1차 출처로 재확인됨.
- 하위호환 이슈(신규 07-28 서버 ↔ 구버전 클라이언트 상호 미호환 가능) — kiel 제시 출처(stacktr.ee, aaif.io)는 제가 직접 재검증하지 못했으나 신규 메이저 리비전 특성상 개연성 있어 "검증 필요" 태그로 보류 반영.
- MCP 툴 설명 상세도가 호출 실패율에 영향(apigene.ai, 미재검증) — API 명세서 AI-ready 체크리스트의 기존 "MCP 툴 리턴 포맷/부정 지침" 항목과 결합해 구체화할 근거로 참고.
- "SDD 4단계 정식 채택" 검토 건은 이번 자료와 무관하게 여전히 사용자 확인 대기 상태 — 변경 없음.

## 출처
- [Specification 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) — 직접 fetch로 stateless 코어·extensions(Tasks/Skills over MCP/MCP Apps) 확인
- [MCP 2026 Spec Changes](https://stacktr.ee/blog/mcp-2026-spec-changes) — 하위호환 경고 (미재검증, kiel 출처)
- [apigene.ai MCP Tools](https://apigene.ai/blog/mcp-tools) — 툴 설명 품질-실패율 상관관계 (미재검증, kiel 출처)

## 위키화 후보
- MCP Extensions 프레임워크(core vs 확장 별도 거버넌스, Tasks/Skills over MCP/MCP Apps 3종) — 신규 개념 노트

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "MCP 스펙 버전(2026-07-28) 명시 + 구버전 클라이언트 하위호환 경고 문구" 항목 추가

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
