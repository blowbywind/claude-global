---
date: 2026-07-16
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-16

## 오늘 배운 것
- Assertion-Evidence 슬라이드 방식은 공학 전공생 110명 실증 연구에서 전통 불릿포인트 대비 이해도 상승·인지부하 감소·지연 회상 향상이 확인됨(단, 발표자 자신의 동기·자기효능감엔 유의미한 차이 없음) — 이미 프로필에 반영된 "Assertion-Evidence 슬라이드 타이틀" 용어의 근거 자료로 확정.
- 데이터 시각화 슬라이드는 차트정크(과도한 격자선·장식) 제거 + 슬라이드당 단일 인사이트("so what")만 강조색 처리, 나머지는 중립색 처리하는 방식이 최근 트렌드 — 기존 diagram 원칙(25~30번)의 데이터시각화 특화판으로 반영 가능.
- python-pptx 차트 구현 시 트레이드오프: 네이티브 차트(GraphicFrame)는 PPT 내 편집 가능하나 3D 미지원, Matplotlib/Plotly 이미지 임베드는 디자인 자유도는 높지만 편집 불가한 정적 이미지 — 산출물 설계 시 목적(편집가능성 vs 디자인자유도)에 따라 선택 기준으로 사용.
- 서체 타입스케일 구체 수치(제목 36~44pt·부제 28~32pt·본문 18~24pt·캡션 12~16pt, 제목은 본문 대비 약 50% 커야 위계 형성) — Pretendard/JetBrains Mono 서체 시스템에 적용할 수치 기준으로 즉시 활용 가능.
- theme.xml 브랜드 고정은 Slide Master의 Colors/Fonts Customize 메뉴로 `<a:clrScheme>`/`<a:majorFont>`/`<a:minorFont>` 편집하는 방식이며, PowerPoint는 테마를 완전히 잠글 방법은 없음(Slide Master 경유만 가능) — 기존 "theme.xml 레벨 고정" 원칙의 실무 절차 보강.
- Minto Pyramid/SCQA(Situation-Complication-Question-Answer)는 결론 우선 제시 후 근거로 하강하는 구조로, 기존에 기록된 CTR(Context-Tension-Resolution)·1-3-1 프레임워크와 조합 가능한 원형 프레임워크로 확인.

## 출처
- [How the design of presentation slides affects audience comprehension (Penn State)](https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/)
- [Assertion-Evidence 실증 연구 (ScienceDirect)](https://www.sciencedirect.com/science/article/pii/S2307187725001701)
- [Data Visualization Trends for Presentations in 2026 (Beautiful.ai)](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [python-pptx Charts 공식 문서](https://python-pptx.readthedocs.io/en/latest/user/charts.html)
- [The Typography System That Makes Every Slide Look Professional](https://slidebazaar.com/blog/the-typography-system-that-makes-every-slide-look-professional/)
- [XML Hacking: Font Themes (Brandwares)](https://www.brandwares.com/bestpractices/2015/10/xml-hacking-font-themes/)
- [Minto Pyramid / SCQA (ModelThinkers)](https://modelthinkers.com/mental-model/minto-pyramid-scqa)
- [Markdown Presentation Tools: Marp, Slidev, Reveal.js 비교](https://dasroot.net/posts/2026/04/markdown-presentation-tools-marp-slidev-reveal-js/)

## 위키화 후보
- "서체 타입스케일 수치 기준"(제목/부제/본문/캡션 pt값 + 50% 위계 규칙) — 독립 개념 노트로 등록해 디자인 시스템 문서와 연결할 가치 있음.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "차트정크(chart junk) 제거", "네이티브 차트 vs 이미지 임베드 트레이드오프" — 데이터시각화 작업 시 전문성 표현 강화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
