---
date: 2026-09-04
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-09-04

검증을 위해 실제 1차 출처(GitHub API, 공식 블로그, dev.to 원문 전체)를 직접 대조했습니다. 그 결과 리서치 결과 중 2건이 완전 오귀속(원문에 없는 수치 인용)으로 확인되어 폐기했습니다.

※ 검증 과정에서 `/home/bbw/ai-ops/.tmp_research/`에 임시 스크래치 파일을 남겼습니다. 삭제해도 될까요?

## 오늘 배운 것
- BMAD-METHOD 최신판은 **v6.12.0(2026-09-03 공식 릴리스)** — GitHub API로 직접 확인. `{diff_output}`→`{diff_file}` 변수명 변경, `llms.txt`/`llms-full.txt` 발행 중단, `bmad-checkpoint-preview`→`bmad-walkthrough` 등 breaking change 포함. v6.11.0(2026-08-09)은 `bmad-quick-dev`→`bmad-build` 통합이 핵심. 기존 메모의 "v6.11.0(최신)" 표기는 갱신 필요.
- OpenAPI 최신 정식판은 **3.2.0(2025-09-19)** — GitHub 공식 릴리스로 재확인. 4.0(Moonwalk)은 sig-moonwalk 저장소 설명 원문에 "확정 종료일 없음, 3.x 사용 권장"이 그대로 명시되어 리서치 주장과 일치.
- MCP 로드맵 신규 5대 우선순위(Agentic messaging primitives / HTTP-native transport / Agent identity & enterprise security / Improved primitives / Improved SDK developer experience)와 **Enterprise-Managed Authorization(EMA) stable 승격**은 공식 블로그(2026-08-22)·InfoQ 원문 둘 다에서 확인.
- ⚠️ "MCP SDK 다운로드 10억 건 돌파"는 공식 블로그·InfoQ 원문 어디에도 없는 수치 — 근거 없음으로 **폐기**.
- ⚠️ "GitHub 자체발표 10배 감소·AWS Kiro 40h→8h" 인용원(dev.to 글) 전문을 대조한 결과 해당 문구·수치가 전혀 존재하지 않음(완전 오귀속) — 대기 중인 "PRD 작성 절차 SDD 4단계 정식채택" 안건의 찬성근거로 **재상신 불가**, 폐기. 채택 보류 유지.
- BuildBetter의 "고객 통화/티켓/설문 직접 캡처→요구사항 인용 추적" 차별점은 원문 대조로 확인됨. 단 "Productboard Spark"라는 제품명은 원문에 없음(원문은 "Productboard"만 로드맵 연계 PRD 도구로 소개) — 표기 오류로 폐기.

## 출처
- [BMAD-METHOD v6.12.0 Release](https://github.com/bmad-code-org/BMAD-METHOD/releases/tag/v6.12.0)
- [BMAD-METHOD CHANGELOG.md](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/CHANGELOG.md)
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)
- [MCP EMA stable 승격 (InfoQ)](https://www.infoq.com/news/2026/07/mcp-ema-enterprise-auth/)
- [OpenAPI-Specification Releases](https://github.com/OAI/OpenAPI-Specification/releases)
- [OAI/sig-moonwalk 저장소](https://github.com/OAI/sig-moonwalk)
- [Evidence-Grounded PRD 도구 비교 (BuildBetter)](https://blog.buildbetter.ai/best-ai-tools-for-writing-prds-grounded-in-customer-evidence/)

## 위키화 후보
- `concepts/bmad.md`(07-12 작성 후 미갱신) 버전 정보를 v6.12.0 실측치로 갱신 필요.

## 프로필 반영 후보 (저위험)
- BMAD-METHOD 참고 시 버전 표기를 "v6.12.0(2026-09-03, diff_file 변수명 변경·llms.txt 발행 중단)"으로 갱신.
- API 명세서 체크리스트의 OpenAPI 버전 기준을 "3.2.0(2025-09-19 최신) / 4.0(Moonwalk) 종료일 미정·3.x 권장"으로 고정.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 "출처-대조-검증기" 계열 후보가 이번에도 유효성 재입증됨(2건 오귀속 적발). 이미 다회 등재되어 중복 제안 생략)
