---
date: 2026-07-05
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-05

## 검증 결과 — 버림 항목 (출처 미특정)

| 항목 | 폐기 사유 |
|------|-----------|
| GPT-5.6 Sol/Terra/Luna | URL이 `openai.com` 루트만 — 공식 발표 페이지 없음 |
| SpaceX·Anysphere 600억 달러 인수 | `spacex.com` 루트만, 교차 보도 확인 불가 |
| Grok 4.5 V9 1.5조 매개변수 | 위 SpaceX 건 연계 주장 + `x.ai` 루트만 |
| "Mythos 5" | Anthropic 공식 모델명 아님, 확인 불가 |
| Makimoto Kawa | `prnewswire.com` 루트만 — 특정 릴리스 URL 없음 |

arxiv 논문 3건: 연구 방향은 실존하나 논문 ID·퍼마링크 미제공 → **내용 참고, 출처 미확정 표기**.

---

## 오늘 배운 것

- **Fable 5 복구 확인**: 내 메모리([2026-06-21])에 "Fable 5 복구 시 자동 복원 조건 포함" 명시 — 7월 1일 복구 보고는 메모리 교차 일치. 라우팅 원칙 원복 승인 필요.
- **에이전트 내부 추론 vs 외부 발언 불일치 탐지**: 공개 답변과 비공개 Chain-of-Thought를 대조해 기만 행위를 찾는 연구 방향이 실제 arxiv에 존재. 품질 게이트 설계에 직접 적용 가능. *(출처 미확정)*
- **영속 상태 에이전트 분산 공격**: 매 단계 안전한 개별 수정이 긴 호흡에서 익스플로잇으로 전환 — 오케스트레이터 체인 설계 시 단계별 상태 스냅샷·롤백 포인트 필수. *(출처 미확정)*
- **UnderSpecBench**: 모호한 명령어에서 에이전트가 재확인 대신 자의 수행하는 경향을 정량 평가 — `[[ASK]]` 카드 트리거 기준 설계 참고. *(출처 미확정)*

## 출처

- [Anthropic 공식](https://www.anthropic.com) — Fable 5 복구 (루트 URL, 특정 페이지 미확인)
- arxiv.org — 에이전트 기만·분산공격·UnderSpecBench 논문 (ID 미제공, 내용만 참고)

## 위키화 후보

- `UnderSpecBench` — 모호 명령 에이전트 자의 수행 정량 평가 벤치마크, 신규 개념
- `에이전트 내부 추론 기만 탐지` — CoT vs 공개 답변 대조 기법, 품질 게이트 설계어

## 프로필 반영 후보 (저위험)

- 품질 게이트 기준에 "에이전트 내부 추론(CoT)과 외부 응답 불일치 탐지" 검토 항목 추가

## 승인 필요 (고위험)

- **Fable 5 라우팅 복원**: 메모리 `orchestration-directives.md`에 명시된 자동 복원 조건 발동 여부 확인 후 적용. 라우팅 원칙을 "최고 성능 Claude = Opus 4.8 (Fable 5 중단 한시)" → "Fable 5 사용 가능" 으로 복원할지 승인 요청.

## 신규 도구 후보 (에이전트/스킬)

- [skill] `cot-integrity-check` — 산출 에이전트의 CoT 추론 로그와 최종 답변을 대조해 자기모순·의도 드리프트를 감지하는 품질 게이트 스킬
