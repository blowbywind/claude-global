---
date: 2026-08-21
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-21

## 오늘 배운 것
- MCP 2026-07-28 정식 스펙 원문(blog.modelcontextprotocol.io) 직접 대조 완료: Tasks가 experimental core에서 분리돼 `io.modelcontextprotocol/tasks` 공식 extension으로 확정, 폴링 `tasks/get`+신규 `tasks/update`(SEP-2663) 채택, 12개월 최소 유예 정책 공식화. 기존 위키 인사이트(08-05·08-09·08-11)와 일치하며, 08-11에 보류됐던 "core 분리·GA 확정 문구 갱신" 건의 원문 근거가 확보됐습니다. 단 "tasks/cancel" 존재는 원문에 없어 폐기.
- API 명세서 AI-ready 체크리스트에 넣을 만한 개념 "Agent Experience(AX)": "처음 보는 LLM이 올바른 도구·인자를 첫 시도에 선택 + 에러 자가복구 + 다음 도구로 체이닝" 4가지 충족 여부가 기준 — 원문(digitalapi.ai) 확인됨. 단 "6~12주 내 적용 가능"은 해당 업체 자사 유료 서비스 광고 문구("8주 온보딩")를 오인용한 것으로 확인돼 폐기.
- GitHub Spec Kit 관련 "111k 스타·30개 이상 도구 통합" 수치는 지정 원문(intuitionlabs.ai)에 전혀 없어 폐기(기존 위키 노트 2026-07-19 수준 정보만 유효). "SDD는 아직 업계 표준 아닌 성장 중 관행"이라는 정성 평가는 원문과 대체로 부합.
- 개발자 도구 선호도: 2026-04 JetBrains 설문에서 시니어 엔지니어 46%가 Claude Code를 최애 도구로 꼽음(Copilot 9%), 직장 채택률은 Copilot 29% > Cursor·Claude Code 각 18%(JetBrains) — 원문(tech-insider.org) 확인. 단 "Copilot 67%→51% 하락"은 JetBrains가 아닌 Stack Overflow Developer Survey 수치이고 "ChatGPT 28%"는 원문 미확인이라 두 세부는 폐기.
- PM용 AI-PRD 도구 채택률(4%→22%)·재작업 68% 통계는 출처 URL이 404(존재하지 않음), AI 코딩 시장 규모($12.8B·CAGR 27%/52.1%)와 JetBrains AI Pulse(90%/13%) 통계는 지정 원문에 해당 수치가 없어 전부 폐기.

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 원문 대조 확인
- [How to Make Your APIs Ready for AI Agents](https://www.digitalapi.ai/blogs/how-to-make-your-apis-ready-for-ai-agents) — AX 정의 부분 확인
- [GitHub Spec Kit: A Guide to Spec-Driven AI Development](https://intuitionlabs.ai/articles/spec-driven-development-spec-kit) — 정성 평가만 확인
- [GitHub Copilot Share Falls to 51% as Cursor Hits $2B ARR](https://tech-insider.org/ie/github-copilot-market-share-2026/) — JetBrains 발 29%/18%/18%, 46%/9% 수치 확인

## 위키화 후보
- "MCP Tasks = 2026-07-28 GA 확정 extension(SEP-2663, tasks/get+tasks/update)" — 08-11 보류 건 문구 갱신용 원문 근거 확보, 기존 노트 업데이트 후보

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "Agent Experience(AX)" 판별 기준(첫 시도 성공/자가복구/체이닝 3요건) 각주 추가

## 승인 필요 (고위험)
(없음 — 08-11 보류 중인 "PRD 절차 SDD 4단계 정식 채택" 건은 이번 리서치로도 신뢰 가능한 신규 근거가 확보되지 않아 대기 유지)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이미 후보 등록된 출처-대조-검증기(wget 폴백)가 이번 세션에서도 유효(9건 중 5건 폐기·2건 오귀속 적발)함을 재확인, 중복 제안 생략)
