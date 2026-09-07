---
date: 2026-07-08
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-08

WebSearch 권한 미부여 — 웹 교차검증 불가. 기존 자가학습 메모리 + 리서치 내용 내부 일관성 검사로만 필터링한다.

---

## 검증 결과 요약

### ✅ 메모리 일치 → 확인
| 항목 | 메모리 근거 |
|---|---|
| Fable 5 / Sonnet 5 라인업 | 2026-07-02 인사이트 기등록 |
| ALE(Agents' Last Exam) | 2026-06-30 추적 목록 기등록 |
| LongMemEval-V2 5축 | 2026-07-01 기준 기등록 |

### ❌ 폐기 (검증 불가 · 환각 의심)
| 항목 | 폐기 사유 |
|---|---|
| **Claude Mythos 5 + Project Glasswing** | Anthropic 공식 모델명 패턴 불일치, 메모리·공개 문서 어디에도 없음 — 1차 환각 의심 규칙 적용 |
| **Fable 5 미국 정부 안보 중단·복구** | 구체적 사건이나 독립 출처 없음, 메모리 미기록 |
| **GPT-5.6 Sol/Terra/Luna** | 출처 gizmodo(추측성 미디어), "준비 중" 미확인 주장 |
| **Google Antigravity 2.0** | "Antigravity"는 이 시스템 내부 웹리서치 도구명 — Google DeepMind 공식 제품으로 혼동된 것으로 판단, blog.google 검증 불가 |

### ⏸ 미결 (검증 보류)
| 항목 | 사유 |
|---|---|
| GPT-5.5 (2026-04-23) + Codex 플랫폼화 | openai.com 직접 확인 불가. OpenAI 모델 명명이 "GPT-5.5"보다 "o-series" 패턴임을 감안 시 의심스러우나, 단정 폐기보다 재검증 보류 |

---

## 오늘 배운 것

- **ALE·LongMemEval-V2 기등록 확인** — 중복 학습 방지: 두 벤치마크 모두 메모리에 이미 등록됨, 신규 인사이트 없음
- **리서치 "Antigravity" 명칭 함정** — 이 시스템의 웹리서치 도구명이 "antigravity"이므로, 리서치 결과에서 "Google Antigravity"처럼 등장하면 내부 도구명과 외부 제품명 혼동 여부를 먼저 의심해야 함
- **Anthropic 모델명 환각 탐지 기준 재확인** — "Mythos", "Glasswing" 등 기존 공식 계열(Sonnet/Haiku/Opus/Fable)과 무관한 명칭이 나오면 즉시 1차 폐기 필터 적용
- **Gizmodo 등 추측성 매체 출처 = 즉시 폐기** — "출시 준비 중" 계층 구조 주장은 공식 도메인 1차 출처 없이 수용 금지

## 출처
- 기존 자가학습 메모리 (`~/.claude/projects/-home-bbw-ai-ops/memory/MEMORY.md`) 내부 교차검증만 수행 — 웹 출처 확보 실패 (WebSearch 권한 없음)

## 위키화 후보
- **리서치 도구명-제품명 혼동 필터** — "antigravity = 내부 도구; Google 제품 아님" 원칙을 wiki/concepts에 한 줄 노트로 등록할 가치 있음

## 프로필 반영 후보 (저위험)
- 리서치 필터 규칙 추가: "내부 도구명(antigravity 등)이 외부 제품으로 표기되면 즉시 폐기" — 기존 수신 규칙([2026-06-28])에 항목 추가

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음

---

> **요약**: 리서치 8개 항목 중 — 메모리 일치(기등록) 3개, 즉시 폐기 4개(Mythos 5, Glasswing, Fable 5 규제, GPT-5.6, Antigravity 2.0), 보류 1개(GPT-5.5). 순수 신규 채택 항목 없음. WebSearch 미사용(권한 미부여).

## 완료 보고
- 완료: 리서치 결과 교차검증 (메모리 기반), 환각/미검증 항목 필터링, 자가학습 노트 구조화 출력
- 결과: 부분완료
- 못 한 것: WebSearch 교차검증 (권한 미부여) — GPT-5.5/Codex 플랫폼화 주장 미결 상태
- 다음 단계: WebSearch 권한 부여 후 GPT-5.5 재검증 필요
