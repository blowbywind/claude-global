---
date: 2026-08-29
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-29

## 오늘 배운 것
- MCP 스펙 2026-07-28 개정판(공식 changelog 원문 대조 완료)에서 SEP-2575로 `initialize`/`notifications/initialized` 핸드셰이크가 폐지되고, 프로토콜 버전·capability 정보가 매 요청 `_meta`로 이동, 신규 `server/discover` RPC가 도입됨. API 명세서 초기화 흐름 섹션 갱신이 필요합니다.
- 같은 SEP-2575로 HTTP GET 엔드포인트와 `resources/subscribe`/`unsubscribe`가 폐지되고 `subscriptions/listen` 단일 스트림으로 통합된 것도 원문 대조로 재확인됨(기존 08-14 반영 내용과 일치, 오류 없음).
- SEP-2663 Tasks extension은 원문 확인 결과 실험적 코어 기능이 별도 extension(`io.modelcontextprotocol/tasks`)으로 이전되어 `tasks/get`(폴링)+`tasks/update`로 재설계, `tasks/list`는 폐지됨. 코어에는 편입되지 않았으므로 기존 대기 항목("MCP 장기실행 확장=RC→GA 격상")은 이번에도 미확정으로 재확인됩니다.
- Spec Kit 성장 지표(star 수, 지원 에이전트 수, 재작업 감소율)와 llms.txt 채택률·AI 에이전트 트래픽 비중은 출처(fundesk.io, buildwithfern.com, GitHub) 원문 대조를 시도했으나 이번에도 WebFetch 권한이 도메인별로 비일관 차단되어 검증 실패 — 수치는 채택하지 않고 폐기합니다.
- AI PRD 생성 도구 경쟁분석(Miro·River·UX Pilot 등) 항목도 동일 사유로 원문 검증 불가하여 폐기합니다.

## 출처
- [MCP Specification Changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — WebFetch 원문 직접 대조 완료

## 위키화 후보
- MCP 2026-07-28: `initialize`/`initialized` 핸드셰이크 폐지 + `server/discover` 신설(무상태화 전환) — API 명세서 AI-ready 배경지식에 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 각주에 "MCP 2026-07-28부터 handshake 없는 무상태 요청 방식(`_meta` 기반 버전 협상)" 용어 추가.

## 승인 필요 (고위험)
- WebFetch/WebSearch 도메인별 권한 비일관 차단이 이번까지 6회 반복(07-16/07-22/07-29/07-30/08-14/08-29)되어, 이번 검증도 1개 도메인만 성공하고 나머지(github.com, fundesk.io, buildwithfern.com, 일반 WebSearch)는 전부 실패했습니다. 기존 제안된 리서치-검증-권한-정합기 성격의 설정 점검(update-config 스킬 활용)을 실제 적용할지 사용자 확인 부탁드립니다. 기존 "SDD 4단계 정식 채택" 대기 건은 이번에도 신규 근거 검증 불가로 상태 변경 없이 대기 유지합니다.

## 신규 도구 후보 (에이전트/스킬)
- [skill] mcp-changelog-fetch-verify — 웹리서치 봇이 인용한 URL을 이번처럼 WebFetch로 즉시 원문 대조해 폐기/채택을 자동 판정하는 경량 검증 루틴(반복 검증 패턴 재확인, 이미 후보 등록된 출처-대조-검증기 계열과 통합 검토 권장).
