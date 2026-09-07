---
date: 2026-07-15
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-15

## 오늘 배운 것
- **MCP Tasks 확장 검증 완료(직접 조회)**: 장시간 작업 시 서버가 블로킹 대신 `taskId` 핸들 반환 → 클라이언트가 `tasks/get`으로 폴링, 재연결 후 결과 회수 가능. 상태값 5종(working/input_required/completed/failed/cancelled) 확인. 단 이는 아직 정식 코어 표준이 아니라 **experimental extension**(별도 리포지토리) 단계임 — API 명세서에 반영 시 "실험적, 재검증 필요" 표기 필수.
- **원 리서치 오류 정정**: "SEP-1686"이라는 표기는 원문에서 검색되지 않음(실제 존재하는 것은 SEP-1865, 2106 등). "Tasks가 프로토콜 최대 개정사항"이라는 서술도 부정확 — 원문의 "최대 개정" 표현은 stateless core·Extensions 프레임워크·Tasks·MCP Apps·인증강화 등 **전체 릴리스**를 지칭하며 Tasks는 그중 한 항목. 해당 블로그 발행일도 2026-07-28(미래)이 아니라 **2026-05-21**(URL의 날짜는 목표 릴리스일 표기).
- **BMAD-METHOD 수치 주장 반박**: 최신 태그는 v6.8.0이 아니라 v6.10.0(이미 v6.9.0/v6.10.0 릴리스됨). 공식 CHANGELOG.md 전문 검색 결과 "31,667→8,333 토큰 절감" 수치는 **존재하지 않음** → 이 통계는 폐기.
- INVEST 6항목(Independent/Negotiable/Valuable/Estimable/Small/Testable)은 표준 프레임워크로 재확인. AI가 모호함·중복·의존성을 사전 플래깅하되 우선순위·이해관계자 협의는 대체 불가 — 기존 "사람 검수 필수" 방침을 그대로 유지할 근거.
- OpenAPI→MCP 자동변환 시 자동생성 설명("Get users user id repos")이 에이전트 툴 선택 정확도를 떨어뜨림 → summary/description/예시/에러응답 명시가 "AI-ready" 실무 기준으로 타당(일반적으로 알려진 관행, 신뢰도 보통).

## 출처
- [MCP Tasks 확장 개요](https://modelcontextprotocol.io/extensions/tasks/overview) (직접 조회로 상태값·목적 확인)
- [MCP 2026-07-28 Release Candidate 블로그](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) (직접 조회, 발행일 2026-05-21 확인)
- [BMAD-METHOD GitHub 태그 목록](https://api.github.com/repos/bmad-code-org/BMAD-METHOD/tags) (반박 근거: 최신 태그는 v6.10.0)
- [BMAD-METHOD 공식 CHANGELOG.md](https://raw.githubusercontent.com/bmad-code-org/BMAD-METHOD/main/CHANGELOG.md) (반박 근거: 토큰 수치 미기재)
- [INVEST 기준](https://agilepainrelief.com/glossary/invest/)
- [OpenAPI→MCP 도구 설계 가이드](https://www.speakeasy.com/mcp/tool-design/generate-mcp-tools-from-openapi)

> 폐기(검증 실패): SEP-1686 표기, BMAD v6.8.0=최신 태그 주장, "31,667→8,333 토큰" 수치. digitalapi.ai(2025-11 MCP 스펙 statelessness 명시 주장)·SDD 주요 툴 리스트(Spec Kit/Kiro/Cursor 등 나열)는 이번 검증 예산 내 교차확인 못 해 반영 보류.

## 위키화 후보
- MCP Tasks 확장(experimental) — 상태머신 5종·폴링모델 신규 개념, 기존 위키(`mcp-streamable-http.md`)에 없는 내용이라 별도 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 "AI-ready" 체크리스트에 "MCP 장기실행 작업 상태값(working/input_required/completed/failed/cancelled) 명시 + 실험적 확장임을 표기" 항목 추가 — 2026-07-14 검토 대기 항목을 검증된 사실로 확정.
- OpenAPI→MCP 변환 대비 원칙 추가: summary/description/예시/에러응답을 자동생성 문구 대신 명시적으로 작성.

## 승인 필요 (고위험)
(없음 — 오늘 검증에서 역할·작업방식 변경을 뒷받침할 새로운 확인된 근거 없음. 기존 2026-07-13 "SDD 4단계 표준 채택" 건은 여전히 사용자 확인 대기 상태로 별도 변동 없음.)

## 신규 도구 후보 (에이전트/스킬)
(없음)
