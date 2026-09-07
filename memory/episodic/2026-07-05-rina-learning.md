---
date: 2026-07-05
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-05

웹 접근 권한이 없어 리서치 원문 URL 직접 확인이 불가합니다. 대신 제시된 URL 패턴·내부 일관성·기존 메모리와의 교차검증으로 심사합니다.

---

**교차검증 폐기 항목**

| 항목 | 폐기 사유 |
|---|---|
| shadcn Base UI 기본 채택 (7월) | URL 경로가 `2026-01`(1월)인데 본문은 "7월" — 날짜 자기모순. 기존 메모리(2026-06-20)에 "도입 고려 여부" 단계로 기록됨 → DEFAULT 채택과 모순 |
| shadcn 채팅 컴포넌트(MessageScroller 등) | 출처가 changelog 최상단 페이지뿐(앵커·버전 미제시). 구체 컴포넌트명 검증 불가 |
| shadcn/skills · --preset CLI | 동일 changelog URL 단순 반복. 'shadcn/skills'가 이 시스템 Claude skills 명칭과 혼동 소지, 환각 가능성 높음 |
| Tailwind scrollbar-* 유틸리티 | 이미 메모리에 [2026-06-21] 기록 — 중복 |

---

## 오늘 배운 것

- **시맨틱 HTML이 AI 에이전트 경험(MX)의 기반이다**: AI 에이전트·LLM이 UI 요소를 올바르게 파악하도록 `role`, `aria-label`, 구조화된 마크업을 설계 단계에서 고려하는 흐름이 대두됨. 비주얼이 아닌 기계 해석 가능성을 함께 설계해야 함.
- **조율형 다중 브랜드 디자인 시스템**: 단일 모노리식 디자인 시스템 대신, 브랜드별 하위 시스템을 연결·조율하는 인프라 구조가 대규모 조직의 기본 모델로 안착 중. 토큰 레이어 분리 + 공유 프리미티브 조합이 핵심.
- **Tailwind `@container-size` — 높이 인지 컨테이너 쿼리(요주의·미확정)**: v4.3에서 컨테이너 높이 차원(`cqh`/`cqb`)을 명시 제어하는 기능이 추가됐다는 주장. CSS Container Queries 명세상 개념 자체는 유효하나, Tailwind API(`@container-size` 정확한 문법)는 공식 릴리스 노트 URL 미제시로 **실사용 전 공식 문서 재확인 필수**.
- **ADA Title II WCAG 2.1 AA 법적 기한(US · 참고용)**: 미국 연방법원 규칙상 지자체 규모별 준수 기한이 존재하나, 리서치 제시 날짜(5만 명 이상 → 2027년)가 원 규칙(2024년 4월 공포, 50k+ 기관 2년 = 2026년 4월)과 불일치. Trump 행정부 개정 가능성 있으나 미확인. **국내 프로젝트 직접 적용 근거 없음**; WCAG 2.1/2.2 Level AA 기준 자체는 기존 메모리 원칙 유지.

## 출처

- [Supernova — Design System Trends 2026](https://supernova.io) (다중 브랜드 시스템)
- [UX Pilot — MX Design Trends](https://uxpilot.ai) (Machine Experience 개념)
- [Federal Register — ADA Title II Final Rule](https://www.federalregister.gov) (날짜 미확정, 참고만)

## 위키화 후보

- `기계-경험-MX-설계.md` — AI 에이전트 해석 가능성을 위한 시맨틱 마크업 설계 원칙 정리 노트

## 프로필 반영 후보 (저위험)

- **MX(Machine Experience)** 용어 — AI 에이전트 대응 설계 관점 추가; 컴포넌트 ARIA 체크리스트에 "기계 해석 가능성" 항목 병기 검토

## 승인 필요 (고위험)

*(없음 — shadcn Base UI default 채택 주장은 검증 불가로 폐기했으므로 기존 Radix 기준 ARIA 체크리스트 유지)*

## 신규 도구 후보 (에이전트/스킬)

*(없음)*
