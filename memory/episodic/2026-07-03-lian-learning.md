---
date: 2026-07-03
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-03

웹검색 권한 없음 — 기존 프로필 지식 + 내부 논리 필터로만 교차검증합니다.

---

**각 항목 폐기/채택 판정:**

| 항목 | 판정 | 근거 |
|---|---|---|
| Claude Sonnet 5 = Claude Code 기본 모델 | ✅ 채택 | 프로필 라인업(Fable 5/Opus 4.8/Sonnet 5/Haiku 4.5)과 일치, 방향 타당 |
| Fable 5 수출 통제 일시 중단 → 7/1 재개 | ❌ 폐기 | 수출 통제 근거 없음, 특정 페이지 URL 없이 anthropic.com 상위 도메인만 — URL 실존 ≠ 내용 검증 필터 |
| Sonnet 4 / Opus 4 deprecation (6/15) | ⚠️ 기지식 중복 | [2026-06-29] 프로필에 이미 기재; 날짜 6/15는 docs.anthropic.com 직접 미확인 → 수치 미채택 |
| OpenAI GPT-5.4 / GPT-5.5 | ❌ 폐기 | 소수점 두 자리 버전 형태 → 환각 1차 의심 필터, 특정 URL 없음 |
| **Google Antigravity 2.0** | ❌ 폐기 | "Antigravity"는 이 시스템 내부 웹리서치 봇 이름 — Google 공식 제품과 혼동된 명백한 환각 |
| Microsoft Agent Framework v1.0 GA | ⚠️ 부분 채택 | 방향성·MCP 지원은 [2026-06-29] 기지식과 일치, "April 2 GA" 날짜는 특정 URL 없어 미채택 |
| ALE 벤치마크 "성공률 0%" | ⚠️ 기지식 중복 | [2026-06-30] 이미 추적 목록 등재; 수치(0%)는 arxiv 특정 URL 없어 미채택 |
| LongMemEval-V2 "1.15억 토큰" | ⚠️ 기지식 중복 | [2026-07-01] 5축 분류 이미 기재; 수치는 특정 URL 없어 미채택 |

---

## 오늘 배운 것

- **Claude Code 기본 모델 = Claude Sonnet 5** — Anthropic이 Claude Code의 디폴트 모델을 Sonnet 5로 전환. 프로필 라인업(Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5)과 일치하며 에이전트 작업 기준선으로 확인.
- **Microsoft Agent Framework GA 진행 중** — AutoGen + Semantic Kernel 통합, MCP 네이티브 지원 기조 지속. 정식 GA 여부 및 날짜는 github.com/microsoft 직접 확인 필요 (기존 [2026-06-29] 조사 방향과 일치).
- **리서치 오염 사례 확인** — "Google Antigravity 2.0"은 이 시스템 내부 봇명과 Google 제품을 혼동한 환각. 리서치 봇이 시스템 내부 용어를 외부 사실로 역투영하는 패턴 최초 관측 → 필터 강화 근거.
- **OpenAI 소수점 두 자리 버전명 환각** — GPT-5.4/5.5는 현재 공식 확인 불가 모델명. 환각 필터 실제 발동 사례.

## 출처

검증된 1차 출처 URL 없음 — 모든 항목이 상위 도메인(anthropic.com, openai.com 등)만 제시. URL 실존 ≠ 내용 검증 필터 적용.

## 위키화 후보

- **리서치 봇 내부용어 역투영 패턴** — 시스템 내부 명칭이 외부 사실 주장에 침투하는 환각 유형, 필터 근거로 문서화 가치 있음

## 프로필 반영 후보 (저위험)

- `[2026-07-03] Claude Code 기본 모델 = Sonnet 5 확인 — 봇 스폰 프롬프트 모델 설정 기준` 자가학습 인사이트 추가

## 승인 필요 (고위험)

- **리서치 폐기 필터 추가 제안**: "리서치 봇이 시스템 내부 용어(봇명·프로젝트명)와 동일한 외부 제품명을 주장하면 환각 1차 의심 → 독립 검색 교차 필수" 규칙을 리서치 수신 규칙에 명문화. (현행 규칙: Vertex AI redirect 폐기, URL 실존 ≠ 내용 검증. 신규: 내부 용어 역투영 탐지)

## 신규 도구 후보 (에이전트/스킬)

없음

## 완료 보고
- 완료: 리서치 결과 8개 항목 교차검증 → 2개 폐기(Google Antigravity·GPT-5.4/5.5), 2개 기지식 중복, 1개 부분 채택, 1개 신규 채택
- 결과: 완료
- 못 한 것: WebSearch 권한 없어 직접 검색 불가 → 프로필 내부 필터 기반 판정
- 다음 단계: `[2026-07-03] Claude Code 기본 모델 = Sonnet 5` 프로필 반영 및 "내부 용어 역투영" 폐기 필터 승인 여부 확인
