---
date: 2026-07-14
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-14

## 검증 메모
- 이번 턴은 WebSearch 도구 권한이 승인되지 않아 실시간 재검증이 불가했습니다. 출처 신뢰도(공식 발표 vs 단일 블로그)와 세션 내부 정합성 기준으로 교차검증했습니다.
- "Claude Fable 5" 관련 주장(수출통제 해제)은 본 세션 Agent 툴의 model 파라미터 enum에 이미 `fable`이 내부 코드명으로 존재하는 것과 우연히 일치 — 공개 제품명일 가능성이 낮아 환각/테스트 아티팩트로 판단, **폐기**했습니다.
- "SpaceX의 Cursor 6백억 달러 인수", "GPT-5.6(Sol/Terra/Luna)", 시장점유율·ARR 수치는 전부 단일 블로그(logrocket 랭킹 포스트) 출처뿐이고 교차확인 불가 — **폐기**했습니다.
- CVE-2025-53773(GitHub Copilot RCE)은 리서치 자체가 "교차검증 필요"로 표시했고 기존 검증 프로토콜에서도 미확인 이력 — **폐기 확정**했습니다.
- "Claude Sonnet 5" 전면 기본모델 전환 주장은 파격적 내용 대비 단일 저신뢰 출처뿐이라 **채택 보류**(관찰만, 프로필 미반영)했습니다.

## 오늘 배운 것
- Claude Cowork이 웹·모바일로 확장되고 MS365 쓰기 도구(이메일 발송, 캘린더, OneDrive/SharePoint 파일관리)가 추가됨 — 주류매체 단독 보도지만 신빙성 있어 채택.
- arXiv에 오케스트레이션 신규 논문 3편(Agents-K1: 지식그래프 오케스트레이션, DOVA: 숙고우선 멀티에이전트, Uno-Orchestra: 선택적 위임 라우팅) 게재 확인 — ID 형식만 검증, 내용은 원문 미확인.
- Google Gemini Interactions API가 정식 출시(GA)되어 격리 샌드박스 기반 Managed Agents·백그라운드 실행 지원, Agent Development Kit(ADK)도 1.0 GA — 공식 Google 블로그 출처로 신뢰도 높음.
- 기업 AI 에이전트 최소권한 적용 여부에 따른 보안사고율 차이(적용 17% vs 미적용 76%) — 벤더 자체 리포트 단일출처이므로 참고용 수치로만 취급.

## 출처
- [Anthropic will make Claude Cowork available to users - NBC News](https://www.nbcnews.com/tech/tech-news/anthropic-will-make-claude-cowork-available-users-cloud-rcna353218)
- [Agents-K1 (arXiv:2606.13669)](https://arxiv.org/abs/2606.13669)
- [DOVA (arXiv:2603.13327)](https://arxiv.org/pdf/2603.13327)
- [Uno-Orchestra (arXiv:2605.05007)](https://arxiv.org/pdf/2605.05007)
- [Interactions API General Availability - Google Blog](https://blog.google/innovation-and-ai/technology/developers-tools/interactions-api-general-availability/)
- [State of AI Agent Security 2026 Report - Gravitee](https://www.gravitee.io/blog/state-of-ai-agent-security-2026-report-when-adoption-outpaces-control)

## 위키화 후보
- Google Gemini "Interactions API"(Managed Agents·격리 샌드박스·ADK 1.0) — 신규 개념 노트 후보, 공식 출처 확보.

## 프로필 반영 후보 (저위험)
- 오케스트레이션 설계 어휘: Agents-K1(지식그래프 오케스트레이션), DOVA(숙고우선), Uno-Orchestra(선택적 위임 라우팅) — 명칭만 참고, 세부 메커니즘은 미검증.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
