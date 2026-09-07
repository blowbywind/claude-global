---
date: 2026-07-13
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-13

## 오늘 배운 것
- python-pptx는 `theme.xml`의 `<a:clrScheme>`(색상)·`<a:fontScheme>`(majorFont/minorFont)을 코드로 직접 조작해 테마 레벨 브랜드 일관성을 강제할 수 있음 — 기존 인사이트(테마 레벨 고정)를 실제 구현 코드 수준으로 구체화.
- 테마색 적용 시 `schemeClr`(예: accent1) + `brightness`(-1.0~1.0)로 명도 조절 가능 — 그라데이션·강조색 파생 시 활용.
- Anthropic 공식 pptx 스킬(anthropics/skills)이 python-pptx 기반으로 아웃라인→덱 생성, 템플릿 브랜드 컬러·레이아웃 준수, speaker notes 편집을 지원 — 우리 툴체인과 동일 기반이므로 참고 가치 높음.
- 폰트 임베딩은 TrueType/OpenType만 가능하고 라이선스가 임베딩을 허용해야 함. 발행본은 "사용된 문자만" 임베딩(용량↓) 권장, 편집 대비 시에만 "전체 문자" 선택.
- 차트 선택은 "어떤 의사결정을 지원하는가"가 출발점 — 비교=막대, 추세/변동성=선. 2026년 트렌드는 화려한 차트보다 단일 포커스 차트(기존 "1 Slide 1 Goal"과 정합).
- 데이터 스토리텔링 실행 프레임워크 2종 확인: Context-Tension-Resolution(맥락→긴장→해결), 1-3-1(핵심 1개→근거 3개→결론 1개) — 기존 Minto Pyramid(SCQA)를 슬라이드 그룹 배치에 적용할 때 보완 도구로 활용.

## 출처
- [python-pptx theme.xml 템플릿](https://github.com/scanny/python-pptx/blob/master/src/pptx/templates/theme.xml)
- [python-pptx 폰트색 schemeClr 분석](https://python-pptx.readthedocs.io/en/latest/dev/analysis/txt-font-color.html)
- [Anthropic pptx skill SKILL.md](https://github.com/anthropics/skills/blob/main/skills/pptx/SKILL.md)
- [PowerPoint 폰트 임베딩 가이드](https://www.ispringsolutions.com/blog/how-to-embed-fonts-in-powerpoint)
- [폰트 임베딩 옵션(문자셋 범위)](https://neuxpower.com/blog/how-to-embed-fonts-in-powerpoint)
- [데이터 시각화 의사결정 원칙](https://omni.co/articles/data-visualization-best-practices-for-better-decision-making)
- [2026 프레젠테이션 데이터 시각화 트렌드](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [데이터 스토리텔링 프레임워크](https://www.thoughtspot.com/data-trends/best-practices/data-storytelling)
- [증거기반 스토리텔링 5원칙](https://www.beautiful.ai/blog/data-storytelling-that-works-5-proof-backed-frameworks-for-communicating-insights-clearly)

## 위키화 후보
- Anthropic 공식 pptx 스킬(anthropics/skills) 기능·제약 요약 — 우리 툴체인 참고 기준으로 신규 노트 가치 있음.
- 데이터 스토리텔링 실행 프레임워크(Context-Tension-Resolution, 1-3-1) — 기존 Minto Pyramid 노트에 "실행 변형"으로 보완 연결.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Context-Tension-Resolution 아크", "1-3-1 프레임워크" — 스토리텔링 구조 설계 시 전문성 표현 강화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 python-pptx 기반 작업 흐름 유지로 충분)
