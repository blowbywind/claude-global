---
date: 2026-07-03
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-03

웹검색 권한이 없어 훈련 지식 + 출처 품질 분석으로 교차검증합니다.

---

## 검증 판정 (출력 전 처리)

| 항목 | 판정 | 근거 |
|---|---|---|
| 정부 규제 → "Claude Fable 5", "GPT-5.6 Sol/Terra/Luna" 제한 | **폐기** | 존재하지 않는 모델명(Anthropic 넘버링 없음, OpenAI Sub-variant 명칭 없음). 출처=도메인만, 구체 URL 없음. 전형적 환각 |
| "The Verification Horizon" (arxiv) | **폐기** | 논문 ID·저자 없음. 출처=`https://arxiv.org` 도메인만. 검증 불가 |
| AIclicks.io AEO 모니터링 | **조건부 보류** | aiclicks.io 도메인 실존 가능성 있음, 개념(AEO 모니터링)은 기존 메모리에 이미 등재(2026-06-20). 구체 기능 미검증 |
| ALE (Agents' Last Exam) GitHub | **폐기** | 리포 경로 없음, 출처=`https://github.com` 도메인만. 검증 불가 |
| Microsoft SkillOpt | **폐기** | 논문·발표자 없음, 출처=`https://microsoft.com` 도메인만. 검증 불가 |
| IBM sub-1nm(0.7nm) 칩 | **폐기** | 출처=`https://ibm.com` 도메인만. 구체 프레스릴리즈 URL 없어 검증 불가 |
| 기획자 린 스택(Perplexity+Kompyte+Claude) | **부분 채택** | Klue·Kompyte·Perplexity 실존 도구. 개념은 기존 메모리 "2~5개 도구 경계 정의" 인사이트(2026-06-24)와 일치. 단, 특정 klue.com 아티클 URL 미제공 |

→ 검증된 신규 정보: 린 스택 원칙 보강 1건. 나머지 5건 폐기.

---

## 오늘 배운 것

- **AI 리서치 산출물 환각 패턴**: 출처가 도메인 루트(예: `https://arxiv.org`, `https://github.com`)만 제시되고 구체 경로·논문 ID·저자가 없으면 검증 불가 → 즉시 폐기 기준으로 처리
- **모델명 환각 식별법**: Anthropic은 버전 숫자 없이 코드네임(Opus/Sonnet/Haiku/Fable) 체계, OpenAI GPT-5 계열에 "Sol/Terra/Luna" 서브 티어 없음 → 실존하지 않는 제품명이 등장하면 전체 클레임 신뢰도 0으로 처리
- **린 스택 구체 구성(기존 인사이트 보강)**: Perplexity(조사) + Kompyte(경쟁사 모니터링) + Claude/ChatGPT(합성) 3-도구 조합이 Tool Sprawl 방지 원칙과 정합 — 기존 "2~5개 도구 경계 정의" 인사이트의 실제 구성 예시로 추가 가능
- **AEO 모니터링 도구 카테고리 실존 확인**: 브랜드의 AI 검색 인용 추적 전용 도구 카테고리가 실제 시장에 형성 중(개별 제품 검증은 별도 필요). 경쟁 분석 체크리스트 항목("AI 검색 브랜드 묘사 확인", 2026-06-20 기존 인사이트)의 도구화 단계 진입을 의미

## 출처

- 없음 — 검증 통과 클레임의 출처가 모두 도메인 루트 수준이어서 채택 불가. 린 스택 구성은 기존 메모리 기록(2026-06-24)으로 교차 확인

## 위키화 후보

- `AI 리서치 결과 검증 프로토콜` — 리서치 산출물에서 환각 클레임을 걸러내는 출처 품질 판정 기준(도메인 루트 vs. 직접 URL, 모델명 실존 여부 등) 체계 정리 가치 있음

## 프로필 반영 후보 (저위험)

- **린 스택 구체 예시 추가**: 기존 인사이트 "2~5개 도구 경계 정의" 항목에 "예시 구성: Perplexity + Kompyte + Claude" 부연 추가

## 승인 필요 (고위험)

없음

## 신규 도구 후보 (에이전트/스킬)

- `[skill] research-verifier` — 웹리서치 산출물의 출처 URL 패턴(도메인 루트 여부·논문 ID 유무)과 고유명사(모델명·제품명) 실존 여부를 자동 점검해 환각 클레임을 필터링하는 검증 스킬
