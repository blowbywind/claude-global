---
date: 2026-07-07
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-07

WebSearch 권한 없음 — 기존 위키 grep 결과와 출처 신뢰도로 교차검증한다.

---

**검증 결과 요약**

| 항목 | 판정 | 근거 |
|---|---|---|
| Least Agency / Least Agency Ratio (dev.to) | **버림** | 개념은 이미 메모리에 있음(2026-06-28). "Least Agency Ratio" 지표는 dev.to 2차 출처, 원 OWASP 문서 미확인 |
| CSA Agentic Trust Framework, ATF (cloudsecurityalliance.org) | **조건부 수용** | CSA가 에이전트 보안 프레임워크를 다루는 것은 타당하나 "ATF" 명칭·5대 축은 WebSearch 없이 원문 미확인 → 명칭은 버리고 방향성만 기록 |
| Agent Cards `/.well-known/agent-card.json` (jumpcloud.com) | **버림** | `wiki/concepts/a2a-protocol.md`에 이미 존재, jumpcloud.com은 2차 출처 |
| Long-horizon tasks 전환 (openai.com) | **버림** | `wiki/concepts/agents.md`에 이미 기록됨 |
| AIclicks AEO 모니터링 (visualping.com) | **버림** | AEO 항목 위키 다수 존재, visualping.com은 간접 출처 |
| Klue Compete Agent (klue.com) | **버림** | `wiki/concepts/ai-경쟁-인텔리전스-도구-비교.md`에 이미 존재 |
| SWE-Together (sophon.at) | **버림** | sophon.at은 비인증 출처, 학술/공식 AI 기관 아님 |
| ORAgentBench (arxiv.org) | **조건부 수용** | arxiv.org 1차 출처로 타당, 개념 자체는 유효하나 구체 논문 미확인 |

---

## 오늘 배운 것

- **에이전트 평가 기준 확장 필요성**: ORAgentBench(arxiv.org 제안)가 시사하듯, 에이전트 기능 기획 시 단순 task 완료율 외에 복잡한 비즈니스 의사결정 최적화 완수 능력을 인수 조건으로 정의하는 새로운 평가 축이 등장하고 있다 — PRD 에이전트 기능 섹션에서 검증 기준(success metric) 항목을 보강할 근거.
- **CSA 에이전트 보안 프레임워크 방향성**: 신원·행위·데이터 거버넌스·세그멘테이션·사고대응 5축 통제 구조가 제시되고 있으며, 이는 기존 메모리의 `Zero Trust for Agents`(2026-06-25) 및 `Least-Agency 원칙`(2026-06-28) 인사이트와 일치한다. PRD 에이전트 보안 섹션에서 "사고 대응(Incident Response) 요구사항"이 현재 빠져 있음을 확인 — 추가 검토 필요.

*(중복 확인된 6개 항목은 신규 학습 없음)*

## 출처

- ORAgentBench: [arxiv.org](https://arxiv.org/) *(논문 직접 접근 미완료, 명칭·링크 추후 확인 필요)*
- CSA 에이전트 보안: [cloudsecurityalliance.org](https://cloudsecurityalliance.org/) *(ATF 명칭 미검증, 방향성만 참고)*

## 위키화 후보

- `wiki/concepts/agent-evaluation-benchmarks.md` — 에이전트 기능 평가 기준(단발 task→장기 비즈니스 의사결정 완수) 비교 정리, ORAgentBench·SWE-bench 계보

## 프로필 반영 후보 (저위험)

- PRD 에이전트 기능 섹션 체크리스트에 **"에이전트 사고 대응(IR) 요구사항"** 항목 추가 — 기존 보안 섹션에서 누락된 축

## 승인 필요 (고위험)

*(없음 — CSA ATF 명칭 미검증 상태라 역할 변경 제안 보류)*

## 신규 도구 후보 (에이전트/스킬)

*(없음 — 검증된 신규 도구 없음)*
