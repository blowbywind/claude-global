---
date: 2026-08-30
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-30

## 오늘 배운 것
- MCP 2026-07-28 스펙 changelog 원문을 직접 fetch로 대조 검증 완료(`modelcontextprotocol.io` 도메인은 접근 가능): `subscriptions/listen` 단일 스트림 통합(SEP-2575, GET 엔드포인트·`resources/subscribe`/`unsubscribe` 폐지) — 08-14 기록과 문구까지 정확히 일치 확인.
- 같은 changelog에서 `initialize`/`notifications/initialized` 핸드셰이크 폐지 + `server/discover` RPC 신설(SEP-2575, 무상태 전환)도 원문 확인 — 신규 검증 사실.
- Tasks extension은 core 편입이 아니라 별도 확장(`io.modelcontextprotocol/tasks`, SEP-2663)으로 재설계, 블로킹 `tasks/result` 폐지 → `tasks/get` 폴링 + `tasks/update`로 전환 — 원문 확인.
- **"RC→GA 확정" 표기는 이번에도 승격 보류**: `blog.modelcontextprotocol.io` 및 WebSearch가 권한 거부로 접근 불가 — changelog(사양 변경 내용) 검증은 됐지만, GA 확정 여부(발표 형식 자체)는 근거 문서에 접근 못 해 대조 불가.

## 출처
- [MCP Specification 2026-07-28 Changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — 직접 fetch로 원문 확인

## 위키화 후보
- MCP 무상태(stateless) 전환: `initialize` 핸드셰이크 폐지 + `server/discover` 신설(SEP-2575) — API 명세서 작성 시 세션리스 설계 참고용 신규 개념.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 배경지식에 "Tasks extension 재설계(`tasks/get`+`tasks/update`, SEP-2663)" 한 줄 갱신 — 08-14 항목과 함께 최신화.

## 승인 필요 (고위험)
- 없음. "MCP RC→GA 확정" 표기 건은 이번에도 원출처(blog) 접근 불가로 보류 유지, "SDD 4단계 정식 채택" 건도 근거 미확보로 대기 유지.

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존에 이미 "출처-대조-검증기" 계열 후보가 반복 제안·등록되어 있음 — 중복 제안 생략. 다만 `blog.modelcontextprotocol.io`/WebSearch 권한 차단이 이번까지 재차 반복되어, 위 후보 도입 여부를 사용자가 검토해 주시길 재요청드립니다).
