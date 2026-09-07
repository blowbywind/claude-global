---
date: 2026-07-26
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-26

## 오늘 배운 것
- **MCP 최종 스펙 확정일 재확인**: 2026-07-28 발표(RC는 5/21 잠금, 10주 검증기간) — blog.modelcontextprotocol.io 원문 그대로 확인됨. 기존 대기 항목("07-28 이후 재확인")의 전제일 뿐, **아직 미발표**(이틀 남음) → 재확인은 계속 07-28 이후로 대기.
- **Roots/Sampling/Logging 3종 공식 폐기 + 대체경로 확인**(Roots→URI/파라미터, Sampling→LLM API 직접호출, Logging→stderr/OpenTelemetry). "12개월 유예"는 워크OS 기사가 아니라 공식 블로그 거버넌스 섹션("at least twelve months")이 근거 — 기존 07-19 인사이트와 일치, 출처만 정정.
- **인가(authorization) 스펙**: "전면 재작성"이 아니라 "6개 SEP를 통한 OAuth 2.0/OIDC 정합성 강화" — 기존 07-17 OAuth 2.1/PKCE 인사이트와 취지 일치, 표현만 완화.
- **arXiv 논문 실재 확인**: "Model Context Protocol (MCP) Tool Descriptions Are Smelly!"(2026-02) — 부실한 도구 설명이 에이전트 호출 실패의 원인이라는 학술 근거 확보. 기존 07-17 "부정 지침" 인사이트를 뒷받침하는 출처로 채택 가능.
- **SDD 생태계 일부만 확인**: GitHub Spec Kit(기사 시점 9.3만 스타→현재 12만+), AWS Kiro/BMAD-METHOD/Tessl 실재. 단 Google Antigravity 연관 서술, 도입효과 수치(재작업 38%↓·PR리뷰 47→19분·회귀버그 56%↓)는 **원문에 없는 완전 환각** — 폐기.
- **도구설명↔호출실패율 배수(3~4배)**·**AI 백로그 경쟁구도(Jira/Atlassian MCP연동, Taro)**는 대부분 검증 실패 — Linear AI 자동 트리아지 언급만 원문 확인, 나머지 폐기.

## 출처
- [The 2026-07-28 MCP Specification Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP Tool Descriptions Are Smelly! (arXiv 2602.14878)](https://arxiv.org/html/2602.14878v1)
- [9 Best AI Tools for Spec-Driven Development (부분 인정)](https://www.marktechpost.com/2026/05/08/9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/)
- [Best AI Tools for Product Managers (부분 인정)](https://getperspective.ai/blog/best-ai-tools-for-product-managers-in-2026-by-workflow-stage)

## 위키화 후보
- "MCP Tool Descriptions Are Smelly"(arXiv 2602.14878) — API 명세서 AI-ready 체크리스트의 학술 근거 노트로 신규 생성 가치 있음

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트의 "부정 지침(negative instruction)" 항목에 학술 출처(arXiv 2602.14878) 각주 추가

## 승인 필요 (고위험)
- 없음 (기존 "SDD 4단계 정식 채택" 검토건은 그대로 대기 — 이번 자료도 신규 승인 요청 아님)

## 신규 도구 후보 (에이전트/스킬)
- 없음

---
※ 참고: 원 리서치 9건 중 2건(SDD 도입효과 수치, SDK betas의 Extensions/Tasks/MCP Apps 귀속)은 원문에 없는 완전 환각으로 폐기, 3건은 부분 과장(12개월 수치 출처 오류, "전면 재작성" 표현, Google Antigravity·Taro 허구 언급)으로 수정 반영했습니다.
