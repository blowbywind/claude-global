---
date: 2026-08-04
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-04

## 검증 메모
WebFetch/WebSearch 툴 권한이 이번 세션에 부여되지 않아 실시간 재크롤은 불가했습니다. 대신 출처 신뢰도(공식 문서/업계 리서치사 vs 개인 블로그)와 기존 지식 정합성 기준으로 교차검증해, 근거가 약한 항목(구체적 수치·미확인 트렌드)은 제외했습니다.

## 오늘 배운 것
- 차트 선택 원칙: 카테고리 비교=막대, 시계열 추세=선, 볼륨+비율 동시 비교=콤보 차트 — "어떤 의사결정을 지원할지"를 먼저 정의한 뒤 유형을 고르는 순서 권장(ThoughtSpot)
- Sankey 다이어그램은 방향성 있는 흐름·비율(예산 배분, 고객 여정 등) 표현에만 적합하며, PowerPoint는 네이티브 차트 타입이 없어 도형 수작업 또는 애드인이 필요함(SlideModel)
- 2026년 AI 프레젠테이션 도구 구도: Gamma(빠른 초안·웹 스토리텔링), Beautiful.ai(고정 레이아웃+브랜드 스타일가이드 강제 적용), Tome(2025년 3월 프레젠테이션 사업 종료 후 세일즈 자동화로 피벗) — 경쟁 도구 언급 시 Tome을 프레젠테이션 툴로 예시하지 않도록 갱신 필요
- python-pptx는 여전히 v1.0.0이 최신 안정판(1.0.2는 공식 릴리스로 확인 안 됨) — 기존 지식과 일치, 변경 없음

## 출처
- [Types of Charts and Graphs](https://www.thoughtspot.com/data-trends/data-visualization/types-of-charts-graphs)
- [Sankey Diagrams for PowerPoint](https://slidemodel.com/sankey-diagrams/)
- [Top AI Presentation Tools 2026](https://guptadeepak.com/tools/top-5-ai-presentation-tools-2026/)
- [python-pptx Releases](https://github.com/scanny/python-pptx/releases)

## 위키화 후보
- "차트 유형 선택 원칙(막대/선/콤보) + Sankey 사용조건" — concepts/ 노트 신설 가치 있음

## 프로필 반영 후보 (저위험)
- AI 프레젠테이션 도구 지형 갱신: Tome=프레젠테이션 툴 아님(세일즈 자동화로 피벗), 비교 언급 시 Gamma/Beautiful.ai 위주로 정정

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
**제외한 항목(근거 부족)**: 브랜드 일관성 "매출 33% 증가" 수치(verdanabold.com, 1차 출처 불명 — 통상 인용되는 "약 23%" 수치와 배치돼 오염 가능성), 가변 폰트(variable fonts)의 PPTX 임베딩 지원 트렌드(inkppt.com, 리서치 원문에서도 미검증 명시), WCAG 2.1 AA·ADA Title II 2026년 4월 규정화 항목(DOJ Title II 규칙 자체는 신뢰하나, PPTX 문서 자체가 해당 규칙의 직접 적용 대상인지는 출처 문서로 확인 안 됨 — 추가 검증 전까지 프로필 미반영).
