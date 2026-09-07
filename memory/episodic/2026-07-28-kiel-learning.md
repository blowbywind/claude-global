---
date: 2026-07-28
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-28

## 자가학습 종합·검증 결과 (2026-07-28)

리서치 원본 6개 핵심 주장 중 URL을 직접 fetch해 원문 대조한 결과, **4건은 원문에서 확인**, **1건은 출처 URL 오귀속**(내용은 사실이나 다른 사이트가 출처), **인가된 SEP 번호 표기는 1차 자료 간 불일치**가 있어 번호 명시를 보류합니다. 이에 따라 아래만 확정 반영합니다.

## 오늘 배운 것
- MCP 2026-07-28 스펙이 실제로 Release Candidate로 발표됨(원문 직접 확인: blog.modelcontextprotocol.io) — stateless 프로토콜 코어, Extensions 프레임워크(MCP Apps·Tasks 포함), OAuth/OIDC 정렬 인가 강화, 공식 기능수명주기(feature lifecycle) 정책을 담음.
- 07-19 메모의 대기 항목("기능수명주기 최소 12개월 유예")은 원문에서 "Active, Deprecated, Removed 3단계 + 최소 12개월(deprecation~removal)" 문구로 **직접 확인**됨 → **검증된 사실로 확정**. 단 근거 SEP 번호는 블로그 본문(SEP-2577 표기)과 PR 제목(SEP-2596 표기)이 서로 달라 정확한 번호는 특정하지 않음(정책 실체 자체는 두 1차 자료 모두에서 일치 확인).
- Roots·Sampling·Logging이 이 정책 하 첫 Deprecated 사례로 원문에서 확인됨(대체 경로: Roots→툴 파라미터/리소스 URI, Sampling→LLM 직접연동, Logging→stderr/OpenTelemetry). 기존 메서드·타입은 이번 릴리스에서 계속 동작(annotation-only deprecation).
- Python/TypeScript/Go/C# SDK 베타 배포 및 구버전(2025-11-25 이하) 서버와의 initialize 핸드셰이크 폴백 하위호환을 원문에서 확인 — API 명세서 "MCP stateless 대응" 체크 항목의 실무 근거로 사용 가능.
- OpenAPI Overlay Specification v1.1.0(copy action 추가) 및 openapi-mcp-codegen의 Overlay 기반 AI-friendly docstring 자동보강을 각각 원문(zuplo.com)·README(cnoe-io)에서 확인 — 07-19 "잠정" 메모를 확정 근거로 격상 가능.
- **주의(오귀속 정정)**: "Arazzo 워크플로를 MCP 툴로 노출 시 완결된 비즈니스 기능 단위로 설계" 권고는 실제로는 **zuplo.com** 글에 있는 내용이며, 리서치가 인용한 truefoundry.com 글에는 해당 문구가 없음(직접 대조 확인) — 출처를 zuplo.com으로 정정.

## 출처
- [The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [Beta SDKs for the 2026-07-28 MCP Spec RC](https://blog.modelcontextprotocol.io/posts/sdk-betas-2026-07-28/)
- [OpenAPI Arazzo & Overlay: Workflows and Spec Management](https://zuplo.com/blog/openapi-arazzo-overlay-specifications-guide) (정정된 출처)
- [openapi-mcp-codegen](https://github.com/cnoe-io/openapi-mcp-codegen)

## 위키화 후보
- "MCP 2026-07-28 스펙 RC" 노트 신설(stateless 코어/Extensions/기능수명주기 3단계+12개월 유예) — 기존 `mcp-기능수명주기-정책-12개월-유예.md`가 있다면 status를 `ai-curated`→`verified`로 갱신 권고.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "기능수명주기(Active→Deprecated→Removed, 최소 12개월 유예)" 확정 반영, OpenAPI Overlay v1.1.0 최신 버전 표기 갱신.

## 승인 필요 (고위험)
- 없음(오늘 자료는 기존 대기 항목의 사실 검증일 뿐, 역할·작업방식 변경 제안 아님).

## 신규 도구 후보 (에이전트/스킬)
- 없음(Backlog.md는 외부 제품으로 확인됐으나 우리 에이전트/스킬 체계와 직접 관련 없어 후보에서 제외).
