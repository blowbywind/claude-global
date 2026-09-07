---
date: 2026-07-17
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-17

## 검증 결과 종합

리서치 산출물 9건 중 arxiv 논문 4건 + 뉴스/블로그 3건은 원문 대조로 실사실 확인, **2건(Gartner 40% 통계, Akeneo Ziggy)은 인용 출처 본문에 해당 내용이 없어 폐기**, VentureBeat 1건은 접근 차단(429)으로 내용 대조 불가하여 미채택 처리했습니다.

## 오늘 배운 것
- **DOVA/Agents-K1/Uno-Orchestra 3개 용어, 논문 원문 대조로 메커니즘 확인 완료**(기존 07-14 인사이트 "명칭만 참고" 상태에서 격상): DOVA=숙고우선+6단계 토큰예산으로 단순작업 추론비용 40~60% 절감, Agents-K1=문서→에이전트 네이티브 지식그래프 변환 파이프라인, Uno-Orchestra=선택적 위임 라우팅으로 macro pass@1 77.0%(베이스라인 대비 +16%)·비용 약 10분의 1.
- **Orchestra-o1(신규)**: 옴니모달 오케스트레이션 — 모달리티 인지 작업분해 + 서브에이전트 특화 + 병렬 서브태스크 실행.
- **Claude Code Dynamic Workflows**: Anthropic이 오케스트레이션 스크립트를 동적 생성→작업분해→병렬실행→검증하는 기능 출시(리서치 프리뷰) — 현재 내가 쓰는 Workflow 툴과 같은 계열 개념으로 직접 참고 가치 있음.
- **Anthropic Managed Agents(Code with Claude 2026)**: Dreaming(과거 세션 교훈 통합), Outcomes(루브릭 기반 자동 리비전), Multi-agent orchestration(리드 에이전트+전문 서브에이전트+공유 파일시스템) 3개 기능 확인.
- **검증 폐기 사례(방법론적 교훈)**: 리서치 산출물 9건 중 2건(Gartner "40%" 통계, Akeneo "Ziggy" 사례)이 인용된 출처 URL 본문에 실제로 존재하지 않음 확인 → 향후 웹리서치 산출물은 출처 원문 대조 없이 그대로 채택 금지, 이번처럼 관리자 단계 교차검증 필수.

## 출처
- [DOVA: Deliberation-First Multi-Agent Orchestration for Autonomous Research Automation](https://arxiv.org/abs/2603.13327)
- [Agents-K1: Towards Agent-native Knowledge Orchestration](https://arxiv.org/abs/2606.13669)
- [Uno-Orchestra: Parsimonious Agent Routing via Selective Delegation](https://arxiv.org/abs/2605.05007)
- [Orchestra-o1: Omnimodal Agent Orchestration](https://arxiv.org/abs/2606.13707)
- [Claude Code Adds Dynamic Workflows for Parallel Agent Coordination - InfoQ](https://www.infoq.com/news/2026/06/dynamic-workflows-claude-code/)
- [Code with Claude 2026: 5 New Agent Features Anthropic Just Shipped - MindStudio](https://www.mindstudio.ai/blog/code-with-claude-2026-new-agent-features)

## 위키화 후보
- Orchestra-o1(옴니모달 오케스트레이션, 모달리티 인지 작업분해) — 개념 노트 신설 가치 있음.

## 프로필 반영 후보 (저위험)
- DOVA·Agents-K1·Uno-Orchestra 세 용어를 "명칭만 참고, 세부 메커니즘 미검증"에서 "메커니즘 검증됨"으로 인사이트 정정.
- Anthropic "Dreaming / Outcomes(루브릭 기반 리비전) / Multi-agent orchestration(리드+서브에이전트+공유 파일시스템)" 어휘를 오케스트레이션 설계 어휘로 추가.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조 검증기 — 웹리서치 산출물의 인용 URL을 실제로 fetch해 핵심 주장이 본문에 존재하는지 자동 대조하는 경량 검증 에이전트. 이번 턴 수동 검증에서 9건 중 2건 폐기 사례 발생 → 반복작업화 가치 있음.
