---
date: 2026-07-07
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-07

교차검증 에이전트가 WebSearch 권한 문제로 실패했다. 직접 판단 기준으로 전환한다.

**적용 필터:**
- 리서치 수신 규칙: 루트 도메인만 출처(`https://openai.com`, `https://deepmind.google`)는 1차 폐기
- 내용 검증 규칙: URL 실존 ≠ 주장 검증 → docs URL 포함 전 교차출처 필수
- 기존 메모리(`[2026-07-02]` 라인업, `[2026-06-30]` ALE, `[2026-07-01]` LongMemEval-V2) 대조

---

## 오늘 배운 것

- **Sonnet 5 포지셔닝 확인**: 에이전트 수행 능력 특화 + 이전 세대 수준 가격대 유지 — 봇 스폰 시 cost-vs-agent-performance 균형점 모델로 활용 가능 (출처: `anthropic.com/news/claude-sonnet-5`, 모델 존재 자체는 메모리 `[2026-07-02]` 확인됨)
- **ALE 세부 규모 업데이트**: 기존 메모리(`[2026-06-30]`)에는 이름만 등재. 리서치 산출물 기준 55개 전문 직종 × 1,500+ 태스크 구성, arxiv `2606.05405` — WebSearch 미확인이므로 조건부 수용
- **환각 패턴 실증 — "내부 봇명 → Google 제품 오인"**: 리서치 주제 "Antigravity new models"는 이 시스템 내부 봇 `antigravity(리안)`의 모델 업데이트를 뜻했으나, 리서치 봇이 "Google Antigravity 2.0" 제품으로 날조함. 고유명사가 내부/외부에 공유될 때 환각 위험 높음 → 폐기
- **루트 도메인 단독 출처 = 폐기 적용 실사례**: `https://openai.com`(GPT-5.5 Codex) · `https://deepmind.google`(Google Antigravity 2.0) 모두 구체 경로 없어 폐기 처리 — 현행 규칙 재확인
- **Fable 5 서비스 중단·재개 세부 주장 폐기**: 모델 존재는 메모리 확인, "한시적 중단 후 7월 1일 재개" 및 "Opus 4.8 = 보안필터 백업 모델" 세부 주장은 출처 내용 미검증 → 폐기

---

## 출처

- [Claude Sonnet 5 (Anthropic)](https://www.anthropic.com/news/claude-sonnet-5) — Sonnet 5 포지셔닝 (WebSearch 미확인, 기존 메모리 라인업 간접 검증)
- [ALE arxiv](https://arxiv.org/abs/2606.05405) — Agents' Last Exam 세부 규모 (WebSearch 미확인, 조건부)

---

## 위키화 후보

- **ALE(Agents' Last Exam) 세부 노트**: 기존 개념 등재만 됨 → 55직종·1,500+ 태스크·UC버클리 RDI 저자 세부 추가 (arxiv 직접 확인 후)

---

## 프로필 반영 후보 (저위험)

- `Sonnet 5` = 에이전트 특화 + 비용 균형 포지셔닝 → 봇 스폰 프롬프트 모델 선택 기준에 추가

---

## 승인 필요 (고위험)

- **리서치 수신 규칙 강화 제안**: 현행 "Vertex AI redirect = 폐기"에 "루트 도메인만인 출처(`https://openai.com` 등 경로 없음) = 폐기" 명문화. 기존 [2026-06-30] 규칙의 확장판으로 자가학습 인사이트에 추가 요청.

---

## 신규 도구 후보

- 없음

---

**폐기 목록 요약 (5건)**

| 주장 | 폐기 이유 |
|---|---|
| Google Antigravity 2.0 / Gemini 3.5 Flash | 루트 도메인 출처 + 내부 봇명 오인 환각 |
| OpenAI Codex + GPT-5.5 | 루트 도메인 출처(`openai.com`), 구체 경로 없음 |
| Fable 5 중단·7월 1일 재개 | URL 실존 ≠ 내용 검증, 출처 내 주장 미확인 |
| Opus 4.8 = 보안필터 백업 모델 | 세부 주장, 공식 출처 없음 |
| Claude Code Agent Teams / `/model` 명령어 | `docs.anthropic.com` 루트만, 경로 없음 |
