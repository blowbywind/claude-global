---
date: 2026-08-18
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-18

## 오늘 배운 것

- **MCP 2026-07-28 스펙 원문 직접 대조 검증 완료**(blog.modelcontextprotocol.io 원문 fetch): `initialize/initialized` 핸드셰이크 및 `Mcp-Session-Id` 헤더 완전 폐지(무상태 코어), `Mcp-Method`/`Mcp-Name` 헤더 라우팅, 목록 응답 `ttlMs`/`cacheScope` 캐싱 힌트, DCR→CIMD 전환+RFC 9207 `iss` 검증, MCP Tasks는 core 분리 후 `io.modelcontextprotocol/tasks` 확장으로 `tasks/get`(poll)+신규 `tasks/update`(SEP-2663) 사용 — 기존 인사이트 전부 원문과 일치 확인.
- **Roots/Sampling/Logging 신규 deprecated**(SEP-2577, 최소 12개월 하위호환) 확인. 기존 12개월 유예 인사이트는 "MCP 기능 폐기" 일반 원칙이었으나, 이번에 대상이 Roots/Sampling/Logging임을 원문으로 구체화.
- **SDK Tier1 vs Rust 베타** 구분 원문 확인: TypeScript/Python/Go/C#이 Tier1, Rust는 베타 지원 — 기존 08-07 인사이트와 일치.
- **BMAD-METHOD 최신 버전 = v6.11.0**(npm registry 직접 조회로 확정, 2026-08-18 기준). v6.8.0에서 `bmad-prd`/`bmad-brief`/`bmad-ux`/`bmad-spec` 플래닝 생성 기능 추가는 bmadcode.com 원문에서 확인. 기존 "quality-rubric v6.7.0" 인사이트와 모순 없음(별개 기능, 버전만 갱신 필요).
- **OpenAPI→MCP 변환 도구**(Speakeasy Gram, FastMCP, openapi-mcp-generator) 및 **"2026년 말 API 수요 증가분의 30%가 AI 툴발"** 수치를 xano.com 원문에서 직접 확인 — API 명세서 작성 시 "MCP 변환 가능성" 설계 고려사항 채택 근거 확보.
- **Spec-Driven Development 툴 지형**: GitHub Spec-Kit("constitution" 개념), OpenSpec(delta spec 방식, 완료분만 source-of-truth 아카이빙)을 augmentcode.com 원문에서 확인.

## 출처

- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 원문 fetch로 직접 검증
- [bmad-method npm registry](https://registry.npmjs.org/bmad-method/latest) — v6.11.0 직접 확인
- [BMAD Update: Web Bundles, PRD/Brief Platforms](https://www.bmadcode.com/bmad-update-may-2026-web-bundles-prd-brief-platforms/) — 원문 fetch로 v6.8.0 기능 확인
- [OpenAPI Specification: The Definitive Guide](https://www.xano.com/blog/openapi-specification-the-definitive-guide/) — 원문 fetch로 30% 수치·MCP 변환도구 확인
- [Best Spec-Driven Development Tools](https://www.augmentcode.com/tools/best-spec-driven-development-tools) — 원문 fetch로 Spec-Kit/OpenSpec 확인
- [AI Tools for Writing Product Specs](https://www.productboard.com/blog/ai-tools-for-writing-product-specs/) — 원문 fetch로 Spark/ChatPRD 확인

**폐기(검증 실패)**: scriptonia.dev 소스 2건(`ai-product-requirements-document`, `best-ai-prd-tools`)은 fetch 시 **HTTP 404**(Vercel `DEPLOYMENT_NOT_FOUND`) 확인 — "PM 22% AI 채택" 수치와 "Scriptonia" 도구 언급은 존재하지 않는 페이지 인용으로 판명되어 전량 폐기.

## 위키화 후보

- (없음 — MCP 2026-07-28 관련 항목은 `mcp-무상태-코어-stateless-core-mrtr-multi-round.md`에 이미 등재되어 중복, 신규 노트 불필요)

## 프로필 반영 후보 (저위험)

- API 명세서 AI-ready 체크리스트에 "OpenAPI→MCP 변환 가능성(Speakeasy Gram/FastMCP류) 설계 고려" 항목 검토 여지 추가
- BMAD-METHOD 참고 기법 인사이트(07-12/08-03)의 버전 표기를 "v6.7.0" → "v6.11.0(최신)"로 갱신, v6.8.0의 `bmad-prd`/`bmad-brief`/`bmad-ux`/`bmad-spec` 기능 병기

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
