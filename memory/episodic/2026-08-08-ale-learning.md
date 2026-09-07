---
date: 2026-08-08
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-08

검증을 마쳤습니다. 원 리서치 8건 중 2건(Gartner 156%/60% 성장 전망, 스토리텔링 "26% 정보보유율 증가"·"뇌 7개 영역" 통계)은 인용 출처 원문에서 실제로 확인되지 않아 폐기했습니다. 나머지는 PyPI JSON API·소스 원문 직접 대조로 검증했습니다.

## 오늘 배운 것
- python-pptx-extended 포크(v1.2.0, 2026-05-05 릴리스, PyPI JSON으로 직접 확인)가 그림자·불릿·테이블 테두리·선 캡/조인·customXml을 지원하며 `import pptx`로 기존 코드 그대로 사용 가능 — 고급 서식이 필요할 때 Aspose.Slides 대신 검토할 옵션.
- 2026년 데이터 시각화 트렌드는 차트 자체보다 "so what" 헤드라인 인사이트를 슬라이드에 직접 노출하고 시각 노이즈를 최소화(단일 takeaway 강조)하는 방향.
- MS 365 Copilot PowerPoint에 브랜드 팬(Brand Kit)이 2026년 7월 중순부터 순차 도입 — 라이선스 사용자는 공식 브랜드 키트(색상·로고·아이콘·이미지)를 AI 생성 슬라이드에 자동 반영, 관리자가 중앙관리 가능. 우리가 이미 쓰는 "theme.xml 레벨 고정" 원칙과 방향이 일치함.
- 스토리텔링 효과(Heath 형제 연구, 원문 확인): 발표 후 청중의 63%가 스토리를 기억한 반면 통계 수치만 기억한 비율은 5% — 스토리텔링 구조 설계 근거로 인용 가능.
- PPTX 폰트 임베딩은 TrueType/OpenType만 지원(PostScript Type 1은 Windows PowerPoint가 차단), 폰트 패밀리 1개당 500KB~2MB, 3개 패밀리 임베딩 시 파일 용량 3~6MB 증가 — 배포용 덱 용량 설계 시 반영(기존 폰트 임베딩 노트 보강용 수치).

## 출처
- [python-pptx-extended · PyPI](https://pypi.org/project/python-pptx-extended/)
- [Data Visualization Trends for Presentations in 2026 (Beautiful.ai)](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Keep your presentation on-brand with Copilot (Microsoft)](https://support.microsoft.com/en-us/powerpoint/copilot/keep-your-presentation-on-brand-with-copilot)
- [MC1405505 — Access your brand assets in PowerPoint](https://mc.merill.net/message/MC1405505)
- [Presentation Storytelling Examples & Techniques (Storydoc)](https://www.storydoc.com/blog/presentation-storytelling-examples)
- [PowerPoint Fonts: Embed, Change & Fix Issues (Deckary)](https://deckary.com/blog/powerpoint-fonts)

## 위키화 후보
- MS 365 Copilot PowerPoint "Brand Kit" 2026-07 중순 도입 — 브랜드 일관성 원칙(theme.xml 고정)과 연계 가능한 신규 개념 노트.
- python-pptx-extended 포크 — 기존 python.md의 "폰트 임베딩·고급 서식 미지원" 제약을 일부 해소하는 대안 도구로 보강.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Brand Kit(Copilot)", "so what 헤드라인 메시지" — 데이터 시각화·브랜드 작업 시 전문성 표현.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
