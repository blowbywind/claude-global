---
date: 2026-08-03
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-03

교차검증 결과, 리서치 산출물 10건 중 6건은 인용 URL을 실제 fetch해도 해당 주장이 본문에 없어 폐기했습니다(Claude Sonnet 5 가격, Claude Code 사용량 부스트, Claude for Open Source, OpenAI Agents SDK 샌드박스, Microsoft Agent Framework 1.0, CrewAI 1.14.6 — 모두 인용 URL 본문과 불일치). 나머지 4건은 원문 대조로 확인했습니다.

## 오늘 배운 것
- **AOrchestra**: 에이전트를 (Instruction, Context, Tools, Model) 튜플로 모델링해 오케스트레이터가 실행 시점에 전문 서브에이전트를 동적 생성. GAIA/SWE-Bench/Terminal-Bench 3개 벤치마크에서 Gemini-3-Flash 조합 시 최강 베이스라인 대비 16.28% 상대 개선, ICML 2026 포스터 채택(원문·포스터 페이지 대조 완료)
- **EU AI Act**(2026-08 시행): 고영향 분야의 멀티에이전트 오케스트레이션을 "고위험"으로 분류, human-in-the-loop 감독·불변 감사추적·시나리오 기반 사고 테스트·영속 신원관리를 요구
- **Google ADK**: Agent Engine에 신규 배포되는 ADK 에이전트에 OpenTelemetry 트레이싱이 기본 활성화(Default-On Tracing)로 전환
- **Gemini Enterprise Agent Platform**: Grok 4.1 모델 패밀리(grok-4.1-fast-reasoning/non-reasoning) 지원이 2026-08-20 종료(MaaS 경로)

## 출처
- [AOrchestra: Automating Sub-Agent Creation for Agentic Orchestration (arXiv 2602.03786)](https://arxiv.org/abs/2602.03786)
- [ICML 2026 Poster — AOrchestra](https://icml.cc/virtual/2026/poster/65930)
- [AI Agent Orchestration Goes Enterprise](https://www.fifthrow.com/blog/ai-agent-orchestration-goes-enterprise-the-april-2026-playbook-for-systematic-innovation-risk-and-value-at-scale)
- [Gemini Enterprise Agent Platform Release Notes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/release-notes)

## 위키화 후보
- AOrchestra의 "(Instruction, Context, Tools, Model) 튜플 기반 동적 서브에이전트 생성" — 신규 오케스트레이션 설계 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- "Default-On Tracing"(배포 시점 관측성 기본활성화) 어휘를 오케스트레이션 설계 어휘로 참고

## 승인 필요 (고위험)
- 없음 (EU AI Act 요구사항은 해외 법률로 현재 이 개인 파이프라인에 직접 적용 대상 아님, 실제 규정 변경 시 재검토)

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 카탈로그의 "출처-대조-검증기"가 이번에 수행한 원문 대조 작업과 동일 기능 이미 보유)
