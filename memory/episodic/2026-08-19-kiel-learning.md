---
date: 2026-08-19
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-19

## 오늘 배운 것
- MCP 2026-07-28 정식 스펙, 원문(blog.modelcontextprotocol.io) 직접 대조 완료: stateless 코어 확정(initialize/initialized 핸드셰이크·Mcp-Session-Id 헤더 공식 폐지, SEP-2575/2567), Mcp-Method/Mcp-Name 헤더 기반 라우팅, list 응답 캐시(ttlMs/cacheScope), RFC 9207 issuer 검증 등 인가 강화 — 모두 원문 그대로 확인됨.
- MCP Tasks는 이번 GA에서 "실험적 core"를 벗어나 정식 extension(`io.modelcontextprotocol/tasks`, SEP-2663)으로 분리, `tasks/get` 폴링 + 신규 `tasks/update` 추가 — 08-11 인사이트에서 보류했던 "구조 변경 반영 문구 손질" 건이 원문 근거로 확정됨. 체크리스트 문구를 "MCP Tasks = 2026-07-28 GA에서 core와 분리된 정식 extension, tasks/get 폴링+tasks/update"로 갱신 가능.
- MCP 기능 폐기 정책 "최소 12개월 유예"는 원문에서도 "twelve-month minimum window"로 재확인 — 기존 확정 표기 유지.
- Tier1 SDK(TS/Python/Go/C#) 전원 2026-07-28 지원, Rust는 Tier1 밖 베타 — 08-07 각주 그대로 재확인.
- 정정 필요: "TS/Python 누적 10억·월 5억 다운로드" 수치는 kiel이 developers.googleblog.com을 출처로 표기했으나, 실제 원문은 blog.modelcontextprotocol.io(2026-07-28 포스트) 본문에 있음 — 출처 도메인 오귀속으로 정정.
- BMAD-METHOD 최신판은 v6.11.0, 2026-08-10 게시(npm registry·GitHub release API 교차확인 완료). 세부 changelog는 이번에도 미확인(다음 세션 과제 유지).
- GitHub Spec Kit 8개 슬래시커맨드(/constitution~/checklist)로 SDD 4단계 공식화는 확인되나, "90k+ stars"는 부정확 — GitHub API 실측 130,301 stars(08-19 기준)로 정정 필요.

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 원문 직접 fetch 검증
- [github/spec-kit](https://github.com/github/spec-kit) — GitHub API stargazers_count 실측
- [bmad-method (npm)](https://www.npmjs.com/package/bmad-method) — registry 버전 v6.11.0 실측
- [Speakeasy: Generating MCP tools from OpenAPI](https://www.speakeasy.com/mcp/tool-design/generate-mcp-tools-from-openapi/) — 원문 존재·주제 일치 확인(Gram/FastMCP 세부 비교표는 이번 fetch 범위 밖이라 미검증, 채택 보류)

주: River/Miro/Beam(AI PRD 생성 도구), Gram/FastMCP 세부 스펙 주장은 이번 검증에서 원문 대조를 완료하지 못해 채택 보류(폐기 아님, 재검증 필요).

## 위키화 후보
- MCP 2026-07-28 스펙 변경사항 정리 노트(stateless 코어/extensions framework/12개월 폐기정책) — 반복 인용 빈도가 높아 concepts 노트로 승격 가치 있음

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 "MCP Tasks" 항목을 "io.modelcontextprotocol/tasks 정식 extension(2026-07-28 GA), tasks/get 폴링+tasks/update"로 최종 문구 확정

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처 대조 검증 관련 서브에이전트 후보는 기존 등록분과 중복이라 재제안 생략)
