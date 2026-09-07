---
date: 2026-07-01
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-01

WebSearch 권한 없음 — 검색 3회 전부 실패. 기존 메모리·학습 기반 교차검증으로 대체한다.

---

**교차검증 판정 요약**

| 항목 | 판정 | 사유 |
|---|---|---|
| Claude Fable 5 복구 | ⚠️ 조건부 보류 | 메모리 "복구 시 자동복원" 조건 존재, 그러나 URL 미확인 |
| Claude Mythos 5 | ❌ 폐기 | 기존 Anthropic 명명 체계 외 모델명, 출처 URL 미확인 |
| Gemini Deep Think | ⬛ 중복 | 2026-06-24 메모리 기록 완료 |
| 비동기 드리밍 아키텍처 | ⬛ 중복 | 2026-06-25 메모리 기록 완료 |
| EU CADA Sovereignty Attestation | ⬛ 중복 | 2026-06-24 메모리 기록 완료 |
| SWE-bench Verified | ⚠️ 부분 수용 | 벤치마크 실존, 출처가 openai.com(제작자 아님)으로 부정확 |
| Microsoft Foundry IQ | ❌ 폐기 | 제품명 미확인, 출처 너무 포괄적(crn.com 단독) |
| AWS Bedrock AgentCore | ⚠️ 미확인 | 제품명 미검증, 트렌드 맥락상 plausible |
| Google ADK 2.0 | ✅ 조건부 수용 | Google ADK 실존 확인, 2.0 세부 미검증, 결정론적 제어 방향은 원칙과 일치 |

---

## 오늘 배운 것
- **Google ADK의 결정론적 에이전트 제어 방향 공식화**: 구글이 비결정적 동작 오류 방지를 위한 ADK를 발표 — 기존 원칙("코드 기반 결정론적 엔진이 신뢰도 측면 우위")이 주요 벤더 전략과 수렴 중 (출처: blog.google, 2.0 세부는 미확인)
- **SWE-bench Verified가 에이전트 코딩 평가 표준으로 자리잡음**: 사람 검수 500 태스크 기반 — 에이전트 품질 게이트 설계 시 외부 기준선으로 참조 가능 (출처: swebench.com, 리서치 출처 openai.com은 부정확)
- **대형 클라우드 내장형 에이전트 플랫폼 경쟁 심화**: AWS·Microsoft가 IDE/클라우드 통합 에이전트 플랫폼 출시 경쟁 중 — 독립 AI-ops 플랫폼의 차별화 포인트 재점검 필요 (구체적 제품명 미검증, 트렌드로만 수용)
- **Claude Fable 5 복구 가능성 신호**: 기존 메모리에 "복구 시 자동복원" 조건 등록됨 — WebSearch 복구 후 anthropic.com 직접 확인 필요, 확인 시 라우팅 원칙 즉시 롤백

## 출처
- [Google Blog](https://blog.google) — ADK 발표 (세부 URL 미확인)
- [SWE-bench](https://www.swebench.com) — Verified 벤치마크 공식 (리서치 제시 URL openai.com은 부정확)

## 위키화 후보
- `SWE-bench Verified` — AI 에이전트 코딩 품질 표준 벤치마크, 품질 게이트 외부 기준 노트

## 프로필 반영 후보 (저위험)
- **결정론적 에이전트 제어(Deterministic Agent Control)**: 주요 벤더(Google ADK)가 동일 방향 공식화 → 기존 원칙 외부 근거로 보강 가능

## 승인 필요 (고위험)
- **Claude Fable 5 복구 확인 시 라우팅 원칙 자동 롤백**: WebSearch 복구 후 anthropic.com 직접 확인 → 기존 메모리 조건("Fable 5 복구 시 자동 복원") 실행 승인 요청

## 신규 도구 후보 (에이전트/스킬)
- [skill] `fable5-status-check` — Anthropic 공개 페이지 폴링 후 Fable 5 복구 여부 감지 및 라우팅 메모리 자동 패치
