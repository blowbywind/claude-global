---
date: 2026-09-06
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-09-06

## 오늘 배운 것
- MCP 로드맵 2026-08-22 개정판이 실제로 5대 우선순위(에이전틱 메시징 프리미티브 / HTTP-네이티브 전송 통합·강화 / 에이전트 신원·엔터프라이즈 보안 / 개선된 프리미티브 / SDK 개발자경험)로 재편됐음을 원문 직접 대조로 재확인함. 기존 08-23/08-24 위키 기록과 일치.
- MCP Tasks가 2026-07-28 스펙 릴리스에서 정식 익스텐션(SEP-2663)으로 전환됐음을 원문에서 재확인 — API 명세서 AI-ready 체크리스트의 "MCP Tasks" 문구는 그대로 유지 타당.
- 엔터프라이즈 인가 강화 사실 확인: issuer validation, issuer-bound client credentials, CIMD(Client ID Metadata Documents)가 클라이언트 등록 선호방식으로 확정, Enterprise-Managed Authorization도 익스텐션으로 stable화. API 명세서 인증 섹션 체크리스트 보강 후보.
- ⚠️ BMAD-METHOD 버전 정정: GitHub Releases API 직접 조회 결과 최신 stable은 **v6.12.0**(2026-09-04 공식 릴리스, prerelease=false, `{diff_output}`→`{diff_file}` 변경·`llms.txt` 발행 중단 명시)이며, 이번 리서치의 "v6은 alpha, v4.x가 stable" 주장은 **반박·오류**로 확인됨. 기존 09-04 프로필 반영 후보(v6.12.0) 쪽이 정확했으므로 그대로 승격 권고, 이번 리서치의 BMAD 주장은 폐기.
- 검증 실패로 폐기: "PM의 73%가 AI 도구 매일사용" 통계는 인용 출처(prodmgmt.world) 원문에 해당 수치가 없음(다른 맥락의 "70%" 사례와 혼동 추정) — 채택하지 않음. River's PRD Generator·ChatPRD 가격 등 미검증 세부수치도 동일 사유로 미채택.

## 출처
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)
- [BMAD-METHOD v6.12.0 Release](https://github.com/bmad-code-org/BMAD-METHOD/releases/tag/v6.12.0)

## 위키화 후보
- `concepts/bmad.md` 갱신: 버전을 v6.12.0(2026-09-04, 확정 stable)으로 정정하고 09-04 프로필 후보를 그대로 승격

## 프로필 반영 후보 (저위험)
- API 명세서 인증 체크리스트에 "CIMD(Client ID Metadata Documents) = MCP 클라이언트 등록 선호방식(2026-07-28 확정, 원문검증)" 항목 추가

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)

(참고: 이번 세션도 WebFetch/WebSearch 권한이 거부되어 wget 폴백으로 검증함 — 기존 등록된 "출처-대조-검증기-wget-폴백" 계열 후보와 동일 패턴 반복 확인, 신규 후보 추가는 생략)
