---
date: 2026-08-07
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-07

웹 검증 도구 권한이 이 세션 체인 전체(본 세션→research-agent→하위 위임)에서 막혀 있어 원문 직접 대조가 완료되지 않았습니다. 이는 기존에 이미 추적 중인 구조적 문제(에이전트 카탈로그의 "리서치-검증-권한-정합기" 항목, 2026-07-16/07-22/07-29 반복)와 동일한 사안입니다. 반복 위임이 수렴하지 않아 더 이상 하위 재위임은 하지 않고, 키엘이 제시한 출처(URL)의 구체성·기존 대기 항목과의 정합성을 근거로 판단해 아래와 같이 정리합니다. MCP GA 확정 건은 "출처 제시 사실"로만 채택하고 원문 직접검증은 완료하지 못했음을 명시합니다.

## 오늘 배운 것
- MCP 2026-07-28 스펙이 RC가 아닌 **정식 발표**로 공지됨(공식 블로그 인용 제시) — 단, 이 세션에서 WebFetch/WebSearch 권한 차단으로 원문 직접 재검증은 완료하지 못함. 2026-07-22 대기 항목("RC이지 GA 아님")의 최종 확인은 **다음 세션에서 원문 재검증 후 확정**으로 보류합니다.
- MCP Tier 1 SDK(Python/TS/Go/C#)가 07-28 스펙을 정식 지원, Rust SDK는 베타 — API 명세서 AI-ready 체크리스트의 SDK 호환성 근거로 참고 가능.
- MCP 07-28 스펙 핵심 변경(세션 핸드셰이크 폐지·stateless·헤더 기반 라우팅·인가 재설계·확장 프레임워크 공식화)은 기존 축적 노트(장기실행 확장, MCP core/확장 거버넌스 분리)와 방향이 일치 — 다만 개별 항목별 원문 대조는 미완.
- OpenAPI 4.0(Moonwalk)은 여전히 SIG 논의 단계·종료 시한 미정 — 기존 방침(API 명세서 3.x 기준 유지)을 바꿀 근거 없음, 그대로 유지.
- SDD(Spec-Driven Development) 2026년 주류화(Spec Kit·Kiro·BMAD·Tessl·Antigravity 등) — 2026-07-13 검토 대기 중인 "PRD 절차에 SDD 4단계 정식 채택" 건의 업계 근거가 보강됨(단, 채택 여부 자체는 여전히 사용자 확인 필요, 승인 미완료 상태 변경 없음).

## 출처
- [MCP 2026-07-28 스펙 발표문](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 원문 직접 대조 미완료(도구 권한 제약)
- [MCP SDK 베타 공지](https://blog.modelcontextprotocol.io/posts/sdk-betas-2026-07-28/)
- [WorkOS: MCP 2026 스펙 에이전트 인증](https://workos.com/blog/mcp-2026-spec-agent-authentication)
- [OpenAPI Moonwalk SIG](https://github.com/OAI/sig-moonwalk)
- [SDD 도구 9선 비교](https://www.marktechpost.com/2026/05/08/9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/)
- [SDD 2026 정의·툴링](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2)

## 위키화 후보
- 없음(기존 mcp-* 노트에 이미 축적, 신규 개념 없음)

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "SDK Tier1(Python/TS/Go/C#) 정식 지원 vs Rust 베타" 구분 참고용 각주 추가

## 승인 필요 (고위험)
- 없음(2026-07-22 "MCP RC→GA 확정" 건은 원문 미검증으로 이번엔 승격하지 않고 보류 유지, 2026-07-13 "SDD 4단계 정식 채택" 건도 기존과 동일하게 대기)

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존 제안된 "출처-대조-검증기" 계열 도구가 이미 카탈로그에 있으나, 이번 세션에서 확인된 바 하위 위임 체인 자체가 WebFetch 권한 차단으로 수렴 실패 — 근본 원인은 도구/스킬 신설이 아니라 **role별 permission 설정(settings.json) 점검**이며, 이는 이미 별도 트래킹 중인 사안이므로 중복 제안하지 않음)
