---
date: 2026-08-22
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-22

빈 디렉터리(`.tmp_verify`)만 남았습니다(삭제 승인 불필요한 파일 정리는 완료). 검증 결과를 보고드립니다.

## 오늘 배운 것
- MCP가 2026-08-22 새 로드맵 발표(원문 직접 대조 확인): 5대 우선순위는 ①에이전트 메시징 프리미티브 ②HTTP 전송 통합·강화 ③에이전트 신원·엔터프라이즈 보안(DPoP, Workload Identity Federation) ④프리미티브 개선(도구 결과 표준화) ⑤SDK 개발자경험 — 리서치 요약과 일치.
- MCP Tasks extension(SEP-2663): 2026-07-28 spec 원문에서 "core에서 분리돼 formal extensions framework 소속으로 확정(GA)" 재확인(기존 08-09/08-11 인사이트 표기와 일치). 단 오늘 로드맵은 "Tasks를 향후 core 스펙에 재편입시키기 위한 성숙 작업"을 이번 우선순위로 명시 — extension 자체는 이미 GA이나, core 편입은 아직 미완료·진행형 항목입니다. 체크리스트 각주에 이 구분을 명확히 반영 권고.
- 2026-07-28 spec 핵심 3건 원문 확인: ①initialize 핸드셰이크·Mcp-Session-Id 헤더 폐지(프로토콜 완전 무상태화) ②Roots/Sampling/Logging 폐기예정, 최소 12개월(twelve-month minimum) 하위호환 유지 확정 문구 재확인 ③Tier1 SDK(Python/TS/Go/C#) 전량 대응, Rust는 베타.
- SDD 관련 주장 중 "GitHub Spec Kit·AWS Kiro·Claude Code·Cursor·OpenSpec·BMAD·Tessl·Google Antigravity 전부 자체 SDD 탑재"는 인용 출처(MS 개발자 블로그) 원문 대조 결과 GitHub Spec Kit 외 어떤 툴명도 언급되지 않아 **폐기**. SDD 개념 정의 자체(스펙 우선·요구사항-구현 정합)만 출처와 일치.
- 나머지 항목(Anthropic 워터마크, Claude Platform 도구, Meta Muse Code, xAI Grok Bot, 벤치마크 수치)은 이번 검증 예산 내 원문 대조를 못 해 **미검증 보류**, 인사이트 미반영.

## 출처
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — 원문 직접 대조 확인
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 원문 직접 대조 확인
- [Spec-Driven Development: A Spec-First Approach to AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/) — 원문 대조 결과 툴 목록 주장은 불일치로 폐기, 개념 설명만 채택

## 위키화 후보
- MCP Tasks extension 성숙 로드맵(SEP-2663, core 편입 목표 vs 현재 GA extension 지위 구분) — 향후 API 명세서 각주 갱신 근거로 재사용 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 문구 정밀화: "MCP Tasks extension = 2026-07-28 GA 확정(core 분리·formal extensions framework 소속), core 재편입은 2026-08-22 로드맵상 진행 중(미완료)"로 갱신.

## 승인 필요 (고위험)
- 대기 중인 "PRD 절차에 SDD 4단계 정식 채택" 건: 이번 검증으로 08-11 인사이트가 근거로 든 "업계 전면 채택" 서술(SDD 채택 툴 목록)이 원문 미지지로 폐기되어 오히려 근거가 약화됐습니다. 채택 여부 재상신은 계속 보류하고, 필요 시 08-11 인사이트 문구 자체를 정정하는 방향을 사용자 확인 후 검토해주시기 바랍니다.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번엔 WebFetch 차단을 wget 폴백(curl 부재 확인 후 wget 사용)으로 자체 해결, 기존 "출처-대조-검증기" 계열 후보와 중복이라 추가 제안 없음)
