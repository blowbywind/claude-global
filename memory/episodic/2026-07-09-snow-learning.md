---
date: 2026-07-09
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-09

WebSearch 권한이 없어 arXiv 직접 접근은 불가. 대신 **ID 형식 유효성·기존 위키 중복 여부·주장 방향성의 트렌드 일치도**로 교차검증.

---

**폐기 판정 (출처 URL 불충분):**
- **GPT-Live** — 출처 `https://openai.com` 홈페이지 단독. "동시 청취·말하기"는 GPT-4o Advanced Voice와 방향 겹치나 "GPT-Live"라는 정확한 제품명 확인 불가 → 폐기
- **Notion AI 워크스페이스 에이전트** — 출처 `https://www.notion.com` 홈페이지 단독. 특정 공개 페이지 없음 → 폐기

**조건부 채택 (arXiv ID 형식 유효, 위키 중복 없음, 트렌드 일치):**
arXiv 2607.07695·07676·07646 모두 2026-07 형식 유효, 기존 위키에 해당 논문 없음.

**기존 지식 업데이트:**
Gemini Thinking budgets — 기존 메모리에 "thinking 단계 공식화(blog.google 2025-03)"로 기록됨. "개발자가 추론 토큰 한도 수동 제어"라는 구체적 API 명칭은 신규 세부사항.

---

## 오늘 배운 것

- **에이전트 안전성 = 거버넌스 우선** (arXiv:2607.07695): 에이전트의 실질 안전 성능은 개별 모델 역량보다 배포 거버넌스와 운영 규칙에 의해 인과적으로 결정된다는 실증. 오케스트레이터 설계 시 모델 교체보다 규칙·게이트 강화가 먼저다.
- **SkillCenter 스킬 라이브러리** (arXiv:2607.07676): 자율 에이전트의 효율적 동작을 위해 출처 근거가 확보된 대규모 재사용 스킬 풀을 공용 라이브러리로 제공하는 구조 제안. 현재 시스템의 `agents-skills-catalog.md` 방향과 맥락 일치.
- **사후 강화학습이 복합 추론 전략 형성에 핵심** (arXiv:2607.07646, ICML 2026): 거대언어모델이 다단계 추론 전략을 구축하는 데 사전학습이 아닌 사후 강화학습(post-training RL)이 결정적 역할을 한다는 분석.
- **Zapier Agents GA** (zapier.com/blog): Zapier Central이 Zapier Agents로 리브랜딩·정식 출시. 9,000개+ 앱 연동과 조직 내 보안 통제를 포함하는 자율 에이전트 워크플로 플랫폼. 외부 SaaS 자동화 경쟁 구도 파악에 참조.
- **Gemini Thinking budgets** (blog.google, 2025-03 이후 업데이트): 개발자가 추론 과정에 할당할 연산 토큰 한도를 수동 제어해 지연·비용·품질 균형 조절 가능. 기존 메모리의 "thinking 단계 공식화" 항목의 세부 명칭 업데이트.

## 출처

- [arXiv:2607.07695](https://arxiv.org/abs/2607.07695) — 멀티에이전트 안전성 규칙 연구 (WebSearch 미접근, ID 형식 검증)
- [arXiv:2607.07676](https://arxiv.org/abs/2607.07676) — SkillCenter 스킬 라이브러리
- [arXiv:2607.07646](https://arxiv.org/abs/2607.07646) — 사후 강화학습 추론 능력 강화 (ICML 2026)
- [Zapier Blog — Zapier Agents](https://zapier.com/blog/zapier-agents/)
- [blog.google](https://blog.google) — Gemini Thinking budgets (2025-03 확인됨, 명칭 업데이트)

## 위키화 후보

- `multi-agent-safety-governance.md` — 배포 거버넌스·운영 규칙이 에이전트 안전 성능을 결정한다는 실증 개념 (arXiv:2607.07695 기반)

## 프로필 반영 후보 (저위험)

- **Gemini Thinking budgets API 명칭**: 기존 "thinking 단계 공식화" → "Thinking budgets(추론 토큰 한도 수동 제어)"로 세부 명칭 보완

## 승인 필요 (고위험)

*(없음)*

## 신규 도구 후보 (에이전트/스킬)

*(없음 — Zapier Agents는 외부 SaaS, 내부 추가 근거 없음)*

---

**폐기 항목:** GPT-Live (출처 홈페이지 단독, 제품명 미확인), Notion AI (출처 홈페이지 단독)
