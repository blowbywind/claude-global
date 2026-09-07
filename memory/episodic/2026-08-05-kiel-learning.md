---
date: 2026-08-05
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-05

## 오늘 배운 것

- **MCP 스펙 2026-07-28 정식 발표 확인**(changelog 직접 fetch로 검증) — stateless 코어 강화(initialize 핸드셰이크 제거, `server/discover` 도입), Multi Round-Trip Requests 패턴, 확장(`extensions`) 필드 추가, OAuth/OIDC 인가 정합성 강화(iss 파라미터 검증, DCR 대신 Client ID Metadata Documents 권장) — 모두 원문에서 확인됨.
- **MCP 기능수명주기(최소 12개월 유예) 정책 확정** — Active→Deprecated→Removed 3단계, 이번 릴리스에서 Roots/Sampling/Logging, 구 HTTP+SSE 트랜스포트가 Deprecated 지정됨(원문 문구 일치). 07-19 인사이트의 "정식발표 이후 재확인" 전제가 충족되어 확정 사실로 승격 가능.
- **[정정] Tasks는 "코어 편입"이 아니라 그 반대** — 원문 확인 결과 Tasks는 오히려 코어에서 빠져 공식 확장(`io.modelcontextprotocol/tasks`)으로 이동·재설계됨(폴링 방식 `tasks/get`/`tasks/update` 도입, `tasks/list`와 블로킹 `tasks/result` 제거). kiel 리서치의 "실험 기능 졸업 → 코어 편입" 주장은 출처와 반대여서 폐기. 오히려 07-16 인사이트("MCP 확장 기능은 core와 별도 거버넌스")가 이번 스펙으로 더 강화된 셈.
- **BMAD-METHOD/Spec Kit 관련 주장**(v6.8.0, PRD 검증 루브릭 개편, Spec Kit star 수 등)은 이번 세션에서 WebFetch/WebSearch 권한 제한으로 직접 재검증하지 못함 — kiel 제시 출처는 있으나 미검증 상태로만 참고, 확정 사실로 반영하지 않음.
- **OpenAPI 4.0(Moonwalk) 여전히 설계 단계** — 기존 위키 노트와 일치, 신규 진전 없음(직접 재검증은 못했으나 기존 검증 상태 유지로 판단 리스크 낮음).

## 출처
- [Key Changes — MCP Specification 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — 직접 fetch로 확인
- (미검증, kiel 원 인용만 유지) BMAD-METHOD GitHub Releases, GitHub Spec Kit 가이드, Bump.sh Moonwalk 가이드 — 이번 세션 권한 제한으로 재확인 불가

## 위키화 후보
- "MCP 2026-07-28 스펙 변경사항"(Tasks=확장 재확인, stateless 강화, 12개월 유예 정책 확정) — kiel 초안(07-31~08-03)과 병합해 노트 확정 필요.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 "MCP Tasks" 항목을 "코어 편입"이 아닌 "공식 확장(extension), tasks/get 폴링 기반"으로 정정 반영(07-14/07-15 인사이트 업데이트).
- "MCP 기능수명주기 최소 12개월 유예" 항목을 잠정→확정 사실로 승격(07-19 검토 대기 항목 해소).

## 승인 필요 (고위험)
- (없음 — 07-13 "SDD 4단계 정식 채택" 건은 그대로 사용자 확인 대기 유지, 이번 자료는 근거 보강일 뿐 신규 승인 요청 아님)

## 신규 도구 후보
- 없음
