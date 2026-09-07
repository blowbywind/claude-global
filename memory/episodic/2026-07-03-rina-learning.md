---
date: 2026-07-03
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-03

WebSearch 권한이 없으므로 훈련 데이터 + 기존 메모리와 교차검증으로 진행합니다.

---

**[검증 결과 — 항목별]**

| 항목 | 판정 | 근거 |
|---|---|---|
| AI 적응형 인터페이스 | ❌ 버림 | 출처 도메인만(uxdesign.cc), 특정 URL 없음. 역할 실무 범위 밖 |
| 다중 감각 공간 UI (XR) | ❌ 버림 | 출처 도메인만(designdb.com). Tailwind/shadcn 웹 UI 역할 범위 밖 |
| WCAG 3.0 점수제 전환 | ⚠️ 부분 | "2026년 3월 업데이트" 특정 URL 없음. 단, WCAG 3.0이 Draft 상태임은 기존 지식과 일치 |
| DOJ ADA Title II 2026-04-24 | ✅ 채택 | 법률 전문 출처(bbklaw.com), 복수 경로 기존 확인된 사실 |
| Tailwind v4.2 Webpack + 신규 컬러 | ❌ 버림 | "v4.2" 특정 버전 URL 없음. "mauve/mist/taupe" — Tailwind 팔레트 네이밍 패턴과 불일치, 환각 의심 |
| shadcn/ui Base UI 기본값 전환(7월) | ❌ 버림 | 특정 릴리스 노트 URL 없음. 기존 메모리(2026-06-20)에 "고려 여부" 수준으로만 기록됨 |
| shadcn/skills | ❌ 버림 | 알려진 공식 기능 없음. Claude Code "skills" 개념과 혼동한 환각 강하게 의심 |
| `npx shadcn@latest apply` | ❌ 버림 | 특정 URL 없음. CLI 서브커맨드 검증 불가 |
| MessageScroller / Bubble 컴포넌트 | ❌ 버림 | shadcn/ui 공식 컴포넌트 목록에 없는 이름. 특정 URL 없음. 환각 |

---

## 오늘 배운 것

- **DOJ ADA Title II — WCAG 2.1 AA 법적 의무화 발효**: 미국 인구 5만 명 이상 주·지방 공공기관은 2026-04-24부로 WCAG 2.1 Level AA 준수 의무. 5만 명 미만은 2027-04-26. 국내 직접 적용 아니나, 글로벌 조달·공공 UI 작업 시 기준선으로 참조 가능
- **WCAG 3.0은 여전히 Working Draft — 현행 준수 기준 아님**: 점수제 전환 논의 진행 중이나 채택 미확정. 기존 메모리("WCAG 2.2 Level AA가 현행 법적 기준") 유효, WCAG 3.0을 근거로 판단하면 안 됨
- **리서치 결과 환각 패턴 주의**: "shadcn/skills", "MessageScroller/Bubble", "mauve/mist 컬러" 등 특정 URL 없는 상세 기능명 주장은 웹리서치 에이전트 환각 위험 높음 — 항상 릴리스 노트 URL 직접 확인 필수

## 출처

- [DOJ ADA Title II Final Rule — BBK Law](https://www.bbklaw.com) (DOJ 규정 해설 법률 블로그)
- [W3C WCAG 3.0 Working Draft](https://www.w3.org/TR/wcag-3.0/) (초안 상태 확인용)

## 위키화 후보

- **DOJ ADA Title II 2026 — WCAG 의무화 타임라인**: 미국 공공기관 접근성 법적 기한 정리 노트 (국제 프로젝트 참조용)

## 프로필 반영 후보 (저위험)

- **WCAG 3.0 Draft 상태 명시**: "WCAG 3.0은 현행 준수 기준 아님(Working Draft) — 법적 기준은 WCAG 2.1/2.2 AA" 자가학습 노트에 추가

## 승인 필요 (고위험)

없음

## 신규 도구 후보

없음
