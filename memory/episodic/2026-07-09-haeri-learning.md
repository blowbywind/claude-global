---
date: 2026-07-09
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-09

외부 도구 권한 없음 — 기존 위키 정보 + 출처 도메인 신뢰도로 교차검증 진행.

---

## 위키 중복 제거 결과

| 항목 | 판정 | 근거 |
|------|------|------|
| 실행 기반 벤치마크 (ARC-AGI, SWE-bench) | **중복** | 위키 2026-06-25·06-28·07-06에 이미 등재 |
| reasoning_effort / thinking_budget API | **중복** | 메모리 2026-06-26, 위키 test.md 기 수록 |
| 프롬프트 압축 (LLMLingua) | **중복** | 위키 2026-07-03-haeri-learning.md 기 수록 |
| Promptfoo + Garak + PyRIT | **중복** | 위키 pyrit.md·llm-red-teaming 기 수록 |
| MCP 연동 표준화 | **중복** | 메모리 2026-06-25, 출처 medium.com은 1차 출처 아님 |
| CI/CD 이원화 타이밍 (PR-level vs. 야간 스캔) | **신규 세부 정보** | 도구 3종은 기 수록이나 타이밍 분리 패턴 미수록 |
| Graphiti 동적 컨텍스트 그래프 | **개념 신규, 출처 불충분** | `github.com` 단독 URL → 특정 저장소 불명 |
| 자가 치유형 에이전틱 모니터링 | **신규, 부분 수용** | atlan.com = 실존 데이터 카탈로그 회사, "자동 패치" 주장은 강하나 개념 자체는 실재 트렌드 |

---

## 오늘 배운 것

- **CI/CD 이원화 보안 스캔 타이밍**: PR 병합 전 → `promptfoo` 빠른 어서션 회귀 검증 / 야간 빌드 → `Garak` + `PyRIT` 심층 취약점 스캔. 도구 3종은 기존에 알고 있었으나 "PR 단계 vs. 야간 단계" 시간적 배치 패턴이 신규. 빠른 게이트와 느린 게이트를 분리함으로써 PR 블로킹 없이 깊은 레드팀 검사 가능.
- **Graphiti 동적 컨텍스트 그래프**: 정적 배치 RAG에서 탈피하여 에이전트에 유입되는 정보의 시간적 유효성과 엔티티 관계 변화를 실시간 추적하는 그래프 파이프라인(zep-ai/graphiti). 기존 MCP 테스팅이 포맷 정합성을 검증한다면, 이 도구는 컨텍스트의 시간적 유효성을 검증하는 보완 역할. — 출처 URL이 `github.com` 단독이라 특정 저장소 불명확, 조건부 수용.
- **자가 치유형 에이전틱 모니터링**: 에이전트가 단순 업타임 감시를 넘어 데이터 파이프라인의 스키마 드리프트·계보 오류를 직접 진단하고 자동 패치하는 개념이 프로덕션에 등장. 테스터 관점에서는 "회귀 트리거 기준 확장(스키마 변경 감지 포함)" 설계 시 참고 가능.

## 출처

- CI/CD 이원화 보안 게이트 — [beyondscale.tech](https://beyondscale.tech) *(도메인 알려지지 않은 블로그, 개념 일관성으로 조건부 채택)*
- 자가 치유형 에이전틱 모니터링 — [atlan.com](https://atlan.com) *(실존 데이터 카탈로그 회사, 신뢰도 보통)*
- Graphiti — [github.com/zep-ai/graphiti](https://github.com/zep-ai/graphiti) *(원 리서치 URL `github.com` 불특정 → 프로젝트 특정 URL로 보정)*

## 위키화 후보

- `graphiti-temporal-context-graph.md` — 정적 RAG 대비 시간 기반 동적 컨텍스트 그래프 개념, MCP 테스팅과의 역할 분담

## 프로필 반영 후보 (저위험)

- `CI/CD 보안 스캔 이원화 타이밍 패턴` — PR 단계 빠른 회귀(promptfoo) + 야간 심층 스캔(Garak/PyRIT) 레퍼토리 추가

## 승인 필요 (고위험)

*(없음)*

## 신규 도구 후보 (에이전트/스킬)

*(없음)*

---

**폐기 항목**: 실행 기반 벤치마크 / reasoning_effort / 프롬프트 압축 / PyRIT 3종 편대 / MCP 표준화 — 모두 기존 위키 중복 또는 1차 출처 부재.

## 완료 보고
- 완료: 리서치 7개 항목 위키 중복 검증, 출처 도메인 신뢰도 교차검증, 유효 항목 3개 추출 및 구조화
- 결과: 부분완료
- 못 한 것: beyondscale.tech·atlan.com 실제 페이지 패치 (도구 권한 없음) → 도메인 신뢰도·개념 일관성으로 대체 검증
- 다음 단계: `graphiti-temporal-context-graph.md` 위키화 승인 시 memory-agent에 위임
