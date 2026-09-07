---
date: 2026-08-25
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-25

## 오늘 배운 것
- MCP Tasks extension GA 지위 재확인: 2026-07-28 정식 spec에서 core와 분리된 독립 extension(`io.modelcontextprotocol/tasks`, SEP-2663)으로 확정 — 기존 memory("core 분리·extensions framework 소속 확정") 및 위키 promoted 초안과 일치, 원문(SEP-2663·공식 블로그) 대조 완료.
- SDD(Spec-Driven Development)가 2026년 업계 표준 카테고리로 정착: Spec Kit·Kiro·Claude Code·Cursor·OpenSpec·BMAD 등 다수 도구가 채택 — PRD 절차 "SDD 4단계 정식 채택" 안건의 업계 근거는 추가 보강됐으나, 작업방식 변경 승인 요청 자체는 기존 방침대로 보류 유지.
- EARS 요구사항 문법이 AI 에이전트 시대 요구사항 표준으로 부상 중: AWS Kiro가 requirements/design/tasks 3문서 체계에 채택, 초기 사례 기준 에이전트 첫 시도 성공률 향상 보고 — API 명세서 배경지식 항목 보강 근거.
- GitHub Spec Kit 저장소에 EARS 통합 기능요청 이슈(#1356) 오픈 상태 확인 — 표준 템플릿 채택 여부는 미정, 모니터링 대상으로만 기록.
- llms.txt v2 스펙 발표(2026-08-10) 확인. 다만 실측 채택률은 측정 방식별 8.7%~51.8%로 편차가 크고, 구글 등 주요 검색엔진은 공식 지원 계획이 없음 — 기존 memory의 "토큰 약 90% 절감(검증완료)" 수치와는 별개 지표이므로, API 명세서에 "채택률"을 언급할 경우 과장 주의 필요.

※ Claude Opus 5 출시·Fable 5 대비 가격 비교·A2A의 Linux Foundation AAIF 편입 관련 주장은 모두 출처가 특정 기사 URL이 아닌 `agentic.ai/news` 포괄 홈페이지 하나뿐이며, Opus 5는 기존 위키 기록상 이미 2026-08-09부터 현행 라인업이라 "신규 출시" 서술과 시점 모순도 있어 이번엔 채택하지 않고 폐기함.

## 출처
- [MCP Blog - 2026-07-28 Spec](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [SEP-2663 원문](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2663-tasks-extension.md)
- [DEV.to SDD 2026](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2)
- [Augment Code 툴 비교](https://www.augmentcode.com/tools/best-spec-driven-development-tools)
- [EARS Notation 설명](https://www.braingrid.ai/blog/ears-notation)
- [Modern Requirements EARS 가이드](https://www.modernrequirements.com/blogs/ears-notation-the-practical-guide/)
- [GitHub spec-kit Issue #1356](https://github.com/github/spec-kit/issues/1356)
- [aeo.press State of llms.txt 2026](https://www.aeo.press/ai/the-state-of-llms-txt-in-2026)
- [Rankability 데이터](https://www.rankability.com/data/llms-txt-adoption/)
- [Refonte Learning](https://www.refontelearning.com/blog/implementing-llms-txt)

## 위키화 후보
- 없음(MCP Tasks·SDD 4단계 관련 초안은 이미 kiel의 2026-08-16/08-22 promoted 후보로 존재, 중복 방지를 위해 신규 제안하지 않음)

## 프로필 반영 후보 (저위험)
- API 명세서 배경지식에 "llms.txt 채택률은 측정방식별 8.7%~51.8% 편차, 구글 등 주요 검색엔진 미지원" 캐비어트 문구 추가.
- 배경지식에 "GitHub Spec Kit EARS 통합 논의(#1356, 미확정)" 모니터링 메모 추가.

## 승인 필요 (고위험)
- 없음(SDD 4단계 정식 채택 건은 기존과 동일하게 대기 유지, 이번 자료도 근거 보강일 뿐 재상신 아님)

## 신규 도구 후보 (에이전트/스킬)
- 없음
