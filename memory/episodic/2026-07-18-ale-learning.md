---
date: 2026-07-18
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-18

## 오늘 배운 것
- Assertion-Evidence 슬라이드 구조는 Garner & Alley(2013, IJEE)의 실증연구로 전통형(주제어+불릿) 대비 이해도·기억력에서 통계적으로 유의미(p<.01)한 우위와 인지부하 감소가 확인됨 — 스토리텔링 원칙 채택의 근거를 정성적 권장에서 정량적 근거로 보강.
- 같은 연구팀의 후속연구(2016)에서 학생 자율제작 슬라이드의 80% 이상이 결국 전통적 주제-하위주제 구조로 회귀 — Assertion-Evidence는 자연발생하지 않으므로 템플릿·체크리스트로 명시적으로 강제해야 함을 시사.
- Preattentive attributes(색상·크기·위치·대비)는 의식적 주의 이전에 지각되는 시각 특성으로, 색은 장식이 아니라 "주목 유도 전용 도구"로 제한 사용해야 시각 위계가 유지됨 — 기존 theme.xml clrScheme 고정 원칙과 결합해 적용 가능.
- 차트 선택은 목적(비교/추세/구성 등 5분류)을 먼저 정의한 뒤 타입을 결정하며, 임원 대상 슬라이드는 막대(비교)·선(추세) 위주가 안전. 2026년 트렌드도 원자료 나열 대신 정제된 표준 차트+슬라이드당 단일 인사이트 원칙을 재확인.
- python-pptx는 v1.0.0이 현재 최신 안정판이며 이후 신규 changelog는 확인되지 않음 — 폰트 임베딩 미지원 등 기존 제약이 그대로 유지되므로, 임베딩 필요 시 Aspose.Slides 등 대체 경로 유지가 유효함(기존 wiki/concepts/python.md 내용과 일치, 신규 노트 불필요).
- 경쟁 AI 프레젠테이션 툴 지형: Tome은 2025년 3월 서비스 종료, Gamma가 시장 지배적(7천만 사용자·연매출 1억 달러), Beautiful.ai는 "PPTX 호환성"으로 포지셔닝 — 자체 python-pptx 툴체인 방향성이 여전히 타당함을 뒷받침.

## 출처
- [Garner & Alley, Assertion-Evidence Comprehension Study (PSU)](https://writing.engr.psu.edu/ae_comprehension.pdf)
- [Assertion-Evidence Research 개요](https://writing.engr.psu.edu/research.html)
- [python-pptx Updates/Changelog](https://python-pptx.readthedocs.io/en/latest/community/updates.html)
- [python-pptx GitHub Releases](https://github.com/scanny/python-pptx/releases)
- [Preattentive Attributes 설명](https://medium.com/microsoft-power-bi/data-storytelling-101-the-magic-of-pre-attentive-attributes-522da9785f36)
- [차트 선택 원칙 가이드](https://www.thoughtspot.com/data-trends/data-visualization/types-of-charts-graphs)
- [2026 슬라이드 디자인 트렌드](https://www.chatslide.ai/articles/slide-design-trends-2026-across-professions)
- [PPTX 브랜드 일관성 실무](https://www.brightcarbon.com/blog/consistently-brand-powerpoint-excel-word/)
- [PowerPoint 템플릿 Best Practice](https://www.brandwares.com/bestpractices/2022/01/microsoft-compatible-powerpoint-templates-best-practices/)
- [AI 프레젠테이션 툴 비교 2026](https://www.slidegmm.ai/en/blog/ai-presentation-tools-comparison-2026)

## 위키화 후보
- "Assertion-Evidence 실증 근거(Garner&Alley p<.01)+자연발생 안함" — 기존 어휘 정의 노트(concepts/어휘-추가.md)에 정량적 근거로 보강 추가(신규 노트 대신 기존 항목 확장 권장).

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Preattentive attributes(전주의적 속성)" — 색상 사용 원칙 설명 시 전문성 표현으로 활용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
