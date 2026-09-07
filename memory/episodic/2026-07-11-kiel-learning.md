---
date: 2026-07-11
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-11

## 오늘 배운 것
- Spec-Driven Development(SDD)가 2026년 AI 코딩 워크플로 표준으로 자리잡는 중이며, 코드가 아닌 버전관리된 실행 가능 스펙을 단일 진실 소스로 삼는 방법론입니다 — PRD/API 명세를 코드보다 선행 산출물로 유지해야 한다는 원칙과 일치합니다.
- GitHub Spec Kit(오픈소스 CLI, v0.8.7, 2026-05-07 릴리스)이 Claude Code 등 30개 이상의 AI 코딩 에이전트를 지원합니다. (스타 수 "9만3천+"는 단일 출처 수치로 재확인 필요, 참고용)
- BMAD-METHOD(v6.6.0, 2026-04-29)는 기획·아키텍처·UX·개발·QA·스크럼마스터 등 SDLC 역할을 다수의 전문 에이전트로 오케스트레이션하는 프레임워크로, 역할별 산출물 분리 설계에 참고할 수 있습니다.
- Figma Make의 "AI PRD Generator" 등 PRD 자동생성 도구가 상용화되고 있습니다.
- AI 기반 유저스토리 분할 도구(예: Story Splitter)가 INVEST 기준으로 백로그를 평가·분할하나, arXiv 연구(2026)는 불필요한 태스크 필터링을 위해 반드시 사람의 검수가 필요하다고 지적합니다 — 키엘 최종 확인 단계 유지 근거로 활용 가능합니다.
- API 문서 생태계에서 llms.txt·MCP 서버 지원 여부가 "AI-ready" API 문서 평가 기준으로 부상하고 있어, 향후 API 명세서 작성 시 체크리스트 항목으로 고려할 만합니다.

## 출처
- [What is Spec-Driven Development](https://www.augmentcode.com/guides/what-is-spec-driven-development)
- [Meet GitHub Spec Kit](https://www.marktechpost.com/2026/05/08/meet-github-spec-kit-an-open-source-toolkit-for-spec-driven-development-with-ai-coding-agents/)
- [9 Best AI Tools for Spec-Driven Development in 2026](https://www.marktechpost.com/2026/05/08/9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/)
- [Figma AI PRD Generator](https://www.figma.com/solutions/ai-prd-generator/)
- [Best OpenAPI Tools 2026](https://zuplo.com/learning-center/best-openapi-tools-2026)
- [API Documentation Generator 2026](https://www.digitalapi.ai/blogs/api-documentation-generator-how-to-auto-generate-docs-in-2026)
- [Story Splitter](https://kollabe.com/tools/story-splitter)
- [arXiv 2605.07320](https://arxiv.org/html/2605.07320)
- [ServiceNow Agile Story Generation](https://www.servicenow.com/community/spm-articles/agile-story-generation-generating-stories-from-epics-just-got/ta-p/3484686)

## 위키화 후보
- Spec-Driven Development(SDD) — PRD·API 명세를 코드보다 선행하는 방법론 개념 노트
- INVEST 기준 백로그 분할 + AI 자동분할 시 사람 검수 필수 원칙 — 백로그 작성 가이드 노트

## 프로필 반영 후보 (저위험)
- 백로그 분할 시 INVEST 기준을 명시적 체크리스트로 사용
- API 명세 작성 시 llms.txt/MCP 서버 노출 여부를 "AI-ready" 체크 항목으로 고려

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backlog-invest-check — 작성된 백로그 항목을 INVEST 기준(Independent, Negotiable, Valuable, Estimable, Small, Testable)으로 점검하는 체크리스트 스킬. 단, 최종 승인은 항상 사람(키엘) 검수 유지.
