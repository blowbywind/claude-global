---
date: 2026-07-09
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-09

웹 검색 도구 권한 미부여 + antigravity 입력값 공백 → 실제 신규 웹리서치 불가. 위키 교차검증 결과만 출력한다.

---

## 오늘 배운 것

> ⚠️ **리서치 소스 없음**: antigravity 결과 공백, WebSearch/WebFetch 권한 미부여. 아래는 위키 교차검증에서 발견한 신규 인사이트만 포함.

1. **위키 불일치 발견 — Opus 버전 혼재**: `claude-mythos-클래스.md`(June 18 에피소딕 기반)가 "Opus 4.6이 표준"으로 기술하나, MEMORY.md(2026-07-02 갱신) 기준 현행 라인업은 **Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5**. 해당 노트의 Opus 4.6 언급은 구식(stale) — 수정 필요.

2. **Fable 5 유지, Mythos 5 단독 중단**: 동명 노트에서 "Mythos 5 = 수출통제(EAR)로 6일 만에 정지"가 확인됨. Fable 5는 현재도 활성. 두 모델을 혼동해 "Fable 5도 중단됐다" 환각이 발생할 수 있는 구조.

3. **Claude Code `/model` 명령어 노트 승격 완료**: `_drafts/_promoted`에 있던 2026-07-06 초안이 `wiki/concepts/claude-code-model-명령어.md`로 이미 승격 — 중복 위키화 불필요.

4. **ALE 에이전트 장기과제 통과율 2.6%**: 6월 30일 학습 위키에 이미 기록됨. 오늘 중복 추가 불필요. 다만 이 수치는 현 에이전트 기술의 구조적 한계를 가장 명확하게 수치화한 단일 지표로, 에이전트 역량 주장 평가 시 기준값으로 계속 활용.

5. **신규 정보 없음(검색 불가)**: Claude Code·OpenAI Codex·antigravity 관련 2026년 7월 이후 업데이트를 이번 회차에서 검증할 수 없었음. 다음 회차에서 WebSearch 권한 부여 후 재시도 필요.

---

## 출처

- 위키 교차검증만 수행 — 신규 외부 URL 없음
- 기존 출처: [[wiki/concepts/claude-mythos-클래스]] · [[wiki/concepts/오픈소스-llm-경쟁-구도-2026]] · MEMORY.md (2026-07-02)

---

## 위키화 후보

- `claude-mythos-클래스.md` 수정 후보 — Opus 4.6 → 4.8로 1줄 교체 (별도 노트 불필요, 기존 노트 수정)

---

## 프로필 반영 후보 (저위험)

- **리서치 재시도 조건 명문화**: "WebSearch/WebFetch 권한 없으면 위키 교차검증만 수행 후 `다음 회차 재시도 필요`로 보고" — 리서치 수신 규칙에 추가

---

## 승인 필요 (고위험)

- (없음)

---

## 신규 도구 후보 (에이전트/스킬)

- (없음)

---

> **완료 보고**
> - 완료: antigravity 입력값 공백 확인, WebSearch/WebFetch 권한 부재 확인, 위키 교차검증 수행, 결과 포맷 출력
> - 결과: 부분완료 (웹리서치 0건, 위키 교차검증 인사이트 2건)
> - 못 한 것: Claude Code·Codex·Anthropic 신규 모델 웹 검증 (권한 없음)
> - 다음 단계: WebSearch 권한 부여 후 재실행, `claude-mythos-클래스.md` Opus 4.6→4.8 수정 검토
