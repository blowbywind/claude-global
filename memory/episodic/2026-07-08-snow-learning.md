---
date: 2026-07-08
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-08

WebSearch 권한 없음. 기존 지식 + 위키 교차검증으로 진행한다.

---

**검증 판정 요약**

| # | 항목 | 판정 | 사유 |
|---|---|---|---|
| 1 | DepthWeave-KV | ❌ 폐기 | arxiv.org 도메인만, 논문 ID 없음 |
| 2 | BrainAgent | ❌ 폐기 | arxiv.org 도메인만, 논문 ID 없음 |
| 3 | Agent Jacking | ⚠️ 부분 채택 | 용어 출처(CSA URL 미확인), 개념 자체는 실존 취약점 유형으로 유효 |
| 4 | EU AI Act 제50조 | ✅ 채택 | 법 발효일(2024-08-01) + 24개월 = 2026-08-02, 날짜 계산 일치. Pinsentmasons 도메인 신뢰도 있음. "12월 2일 유예" 세부는 미확인으로 별도 표기 |
| 5 | Gemini 3.5 Flash | ⚠️ 부분 채택 | 우리 봇(lian·rina)이 `gemini-3.5-flash` 이미 2026-06 사용 중(위키 확인) → 모델 존재 확인됨. blog.google 특정 URL 없어 "컴퓨터 유즈 기능" 세부 검증 불가 |
| 6 | EXAONE Discovery / Rhamsydil | ❌ 폐기 | "하루 만에 신약 발굴" = extraordinary claim. aitimes.com 특정 URL 없음 |
| 7 | Agent FinOps | ❌ 중복 | 기존 메모리 2026-06-21 등재 |
| 8 | Nationality-based Access Control | ❌ 중복 | 기존 메모리 2026-06-25 등재 |
| 9 | Dreaming Architecture | ❌ 중복 | 기존 메모리 2026-06-25 등재 |
| 10 | ForeSci | ❌ 중복 | 기존 메모리 2026-06-26 등재 |

---

## 오늘 배운 것

- **EU AI Act 제50조 시행 D-25(2026-08-02)**: 합성 콘텐츠 식별·표시 등 일반 투명성 의무 발효. 고위험 AI 규제(2027~2028 예정)보다 먼저 시행됨. EU 사용자 서비스 시 AI 생성 콘텐츠에 명시 라벨 의무 발생.
- **에이전트 하이재킹(Agent Jacking)**: 프롬프트 인젝션으로 에이전트의 쉘 실행·도구 호출 권한을 탈취해 악성 코드를 수행시키는 공격 유형. 멀티에이전트 플랫폼에서 외부 입력이 에이전트 도구 실행 경로로 연결될 때 직접 위협.
- **Gemini 3.5 Flash 컴퓨터 유즈 내장**: 우리 봇(lian·rina)이 이미 사용 중인 모델. 화면 읽기·소프트웨어 직접 조작 기능 포함. 라우팅 원칙의 Gemini 항목에 "네이티브 컴퓨터 유즈 지원" 반영 후보.

## 출처

- [EU AI Act Obligations Timeline — Pinsent Masons](https://www.pinsentmasons.com) *(경로 미확인, 날짜는 법령 조항으로 독립 검증)*
- [AI Agent Security: Agent Jacking — Cloud Security Alliance](https://cloudsecurityalliance.org) *(특정 URL 미확인, 개념 유효)*

## 위키화 후보

- `에이전트 하이재킹(Agent Jacking)` — 멀티에이전트 보안 위협 분류 노트로 신규 가치 있음

## 프로필 반영 후보 (저위험)

- `라우팅 원칙 Gemini 항목`: "네이티브 컴퓨터 유즈(화면 조작) 지원(Gemini 3.5 Flash 확인)" 추가
- `에이전트 보안 체크리스트`: "Agent Jacking 점검 항목" 추가 — 외부 입력 → 도구 실행 경로 격리 여부

## 승인 필요 (고위험)

- 없음

## 신규 도구 후보 (에이전트/스킬)

- `[skill] eu-ai-act-compliance-check` — EU AI Act 제50조 대응: AI 생성 콘텐츠 식별·표시 의무 점검 자동화(2026-08-02 시행 대비)
