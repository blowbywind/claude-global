---
date: 2026-07-16
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-16

## 오늘 배운 것

- **MCP Tasks는 여전히 별도 extension** — 공식문서(modelcontextprotocol.io/extensions/tasks/overview) 직접 재확인 결과, Tasks는 core spec이 아닌 별도 저장소(experimental-ext-tasks) 확장이며 상태값 5종(working/input_required/completed/failed/cancelled)·`tasks/get` 폴링·`tasks/update` 입력방식이 그대로 유지됨. 기존 인사이트(2026-07-15 "실험적 확장 표기")는 **유지**.
- **"SEP-2663 분리·2026-07-28 RC 공개" 주장은 미채택** — 유일 출처가 미래 시점(2026-07-28) 블로그 URL이며 이번 세션에서 접근 권한 제한으로 실물 확인 불가. 존재 자체가 불확실해 API 명세서 문구를 지금 바꾸지 않음(기존 "experimental 표기" 원칙 그대로 유지).
- **OpenAPI→MCP 변환 벤더 생태계 확대** — Speakeasy(기존 검증 출처 재확인) 외 Stainless·FastMCP·ConvertMCP 등이 동일 패턴을 상용 지원 중. "자동생성 문구 대신 명시적 summary/description/예시/에러응답 작성" 원칙의 실무 근거가 보강됨.
- **SDD 4단계 채택 논의용 참고자료 축적** — GitHub Spec Kit(30개+ 에이전트 지원)·VS Code 통합 확산 사례 확인. 다만 이는 **참고자료일 뿐**, "PRD 절차에 SDD 정식 채택" 여부는 기존과 동일하게 사용자 확인 대기 상태 유지.
- **BMAD 백로그 비교기법 최신화** — BMAD-METHOD가 "모듈 생태계"형으로 구조 재편(스토리 파일에 근거·제약·테스트 임베드)됐다는 흐름은 INVEST 체크리스트 비교 참고에 유효. 단 "v6.8.0" 등 구체 버전·날짜는 이번 세션에서 재검증 못 해 참고용으로만 취급.
- **경쟁 동향(AI PRD 생성 툴)** — ChatPRD, Figma/Miro 자체 AI PRD 기능 등이 PM 워크플로에 통합되는 추세. 벤더 자체 주장(이용자 수 등 정량치)은 재검증 안 됨, 시장 방향성 참고로만 기록.

## 출처
- [MCP Tasks 확장 개요](https://modelcontextprotocol.io/extensions/tasks/overview)
- [OpenAPI→MCP 도구 설계 가이드 (Speakeasy)](https://www.speakeasy.com/mcp/tool-design/generate-mcp-tools-from-openapi)
- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [BMAD-METHOD 저장소](https://github.com/bmad-code-org/BMAD-METHOD)
- [ChatPRD](https://www.chatprd.ai/)

## 위키화 후보
- 신규 노트 불필요 — 기존 `mcp-tasks-확장-experimental.md`, `bmad.md`, `openapi-mcp-변환-대비-원칙-추가.md`가 핵심을 이미 담고 있으며, 이번 회차는 재확인·근거보강 수준이라 업데이트로 충분.

## 프로필 반영 후보 (저위험)
- API 명세서 "AI-ready" 체크리스트 배경지식에 "MCP 확장 기능은 core와 별도 거버넌스로 관리됨"이라는 구조적 이해 한 줄 추가.

## 승인 필요 (고위험)
- 없음(기존 "SDD 4단계 정식 채택" 검토 건은 그대로 대기 — 이번 자료는 근거 보강일 뿐 신규 승인 요청 아님).

## 신규 도구 후보 (에이전트/스킬)
- 없음.
