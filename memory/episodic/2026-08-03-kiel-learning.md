---
date: 2026-08-03
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-03

## 종합·검증 결과 (2026-08-03)

키엘 리서치 원문을 1차 출처(공식 블로그·GitHub API) 대조 검증했습니다. MCP 관련 핵심 주장은 원출처에서 문구 그대로 확인되었고, BMAD-METHOD 버전·bmad-investigate 관련 주장은 **오류를 발견해 정정**했습니다.

## 오늘 배운 것
- MCP 2026-07-28 스펙 정식 확정: stateless 코어, Extensions 프레임워크, 인가 강화, 공식 폐기정책 포함 — 공식 블로그 원문에서 "largest revision since launch" 문구로 직접 확인.
- 기능수명주기 확정: Active→Deprecated→Removed, **폐기~제거 최소 12개월(twelve months) 유예** — 07-19 검토대기 항목이 원문 인용으로 확정됨. API 명세서 AI-ready 체크리스트에 반영 가능.
- MCP Apps(서버 렌더 UI)·Tasks(장기실행)는 모두 core가 아닌 **opt-in 확장(extension)**으로 확정. 특히 Tasks는 "2025-11-25 실험적 core 기능 → 2026-07-28 확장으로 강등"된 것으로, 기존 채택 서버는 마이그레이션 필요 — 07-14/07-15 항목의 배경 사실 보강.
- **[정정] BMAD-METHOD 버전 오류**: 리서치의 "v6.8 도달"은 부정확 — GitHub 확인 결과 최신은 **v6.10.0(2026-07-03)**. 또한 "PRD 검증 파이프라인(quality-rubric 합성 심사)"은 실재하나 도입 시점은 v6.8이 아닌 **v6.7.0(2026-05-17)**이며, "bmad-investigate 신규 스킬"이라는 서술은 **오류(정반대)** — 해당 스킬은 v6.7.0에서 도입됐다가 이미 **v6.10.0에서 폐지(retired)** 확인. 07-12 인사이트에 "PRD 검증 파이프라인"만 정확한 버전(v6.7.0)으로 반영, bmad-investigate 언급은 폐기.
- OpenAPI 4.0(Moonwalk) 여전히 드래프트 단계, 안정판은 3.2.0(2025-09-19) — GitHub 릴리스로 재확인, 기존 08-01 판단("정보 불충분, 모니터링만") 유효.
- GitHub Spec Kit 확산 지속(현재 star 12.5만+, GitHub API 직접 확인) — 다만 "AI PRD 툴 경쟁구도(Claude 1위 등)"는 벤더 자사 블로그(chatprd.ai, productboard.com) 출처라 객관성 낮아 **채택 보류**.

## 출처
- [The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) — MCP 스펙 확정 내용 원문 직접 확인
- [github/spec-kit GitHub 저장소](https://github.com/github/spec-kit) — star 수 API 직접 확인
- [bmad-code-org/BMAD-METHOD 릴리스 v6.7.0/v6.9.0/v6.10.0](https://github.com/bmad-code-org/BMAD-METHOD/releases) — 버전·기능(PRD 검증 파이프라인, bmad-investigate 폐지) 원문 확인
- [OAI/OpenAPI-Specification 릴리스](https://github.com/OAI/OpenAPI-Specification/releases) — 안정판 3.2.0 확인

## 위키화 후보
- (신규 노트 불필요) 기존 MCP 확장 프레임워크 노트(`2026-07-29-...mcp-extensions...`)에 "Tasks graduates to an extension"(core→확장 강등, 마이그레이션 필요) 원문 인용 보강 권고

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트: "MCP 기능수명주기 최소 12개월 유예" 항목을 **검토 대기 → 확정**으로 전환(07-19 항목 종결)
- BMAD-METHOD 비교 참고 기법(07-12)에서 "bmad-investigate 신규" 언급 제거, "PRD 검증 파이프라인(quality-rubric, v6.7.0~)"만 정확한 버전 표기로 유지

## 승인 필요 (고위험)
- 없음 (기존 "SDD 4단계 정식 채택" 검토 건은 이번 리서치와 무관, 별도 대기 유지)

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 제안된 "출처-대조-검증기"류가 이번 검증에서도 유효성 재확인 — 오늘도 수동 대조로 BMAD 오류 1건 발견됨)
