---
date: 2026-08-04
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-04

## 오늘 배운 것
- MCP 2026-07-28 정식 스펙 확정: stateless 코어 전환, Multi Round-Trip Requests, 헤더 기반(Mcp-Method/Mcp-Name) 라우팅, 인증 강화(RFC 9207/CIMD), 확장 프레임워크 정식화, TS/Python SDK 각 10억 다운로드 돌파 — 공식 블로그 원문 대조로 확인됨.
- MCP Tasks가 "실험적(core)" 표기에서 벗어나 정식 확장 `io.modelcontextprotocol/tasks`(SEP-2663, `tasks/get`·`tasks/update`)로 분리 확정 — 공식 소스로 재확인됨(단 `tasks/cancel` 언급은 출처 미확인이라 제외).
- MCP 기능 폐기 시 최소 12개월 유예 원칙, 신버전 서버-구버전 클라이언트 간 하위호환 비보장 — 2026-07-19 검토 대기 항목이 확정 사실로 전환됨.
- OpenAPI 4.0(Moonwalk)은 "종료일 없음(no planned end date)"으로 공식 명시된 설계 단계이며, 3.x 계속 사용을 공식 권고 — 정식 출시일 관련 판단 보류 지속 타당.
- (검증 실패로 폐기) 확장 reverse-DNS ID/`ext-*` 별도 거버넌스, Spec Kit v0.13.4·스타 12만+·재작업 60~80% 감소, ChatPRD/Telos/Linear 백로그 도구 비교는 인용 출처 본문에서 근거를 찾지 못해 채택하지 않음.

## 출처
- [MCP Specification 2026-07-28](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [MCP prepares to break with its stateful past](https://www.theregister.com/devops/2026/07/23/model-context-protocol-prepares-to-break-with-its-stateful-past/5276722)
- [sig-moonwalk (OpenAPI 4.0)](https://github.com/OAI/sig-moonwalk)

## 위키화 후보
- MCP Tasks의 experimental→formal extension(SEP-2663) 전환 히스토리 개념 노트

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트의 "MCP 장기실행 작업... 실험적 확장임을 표기" 문구를 "정식 확장(`io.modelcontextprotocol/tasks`, SEP-2663)으로 전환됨"으로 갱신
- "MCP 기능 폐기 12개월 유예" 항목을 검토 대기 상태에서 확정 사실로 전환

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
