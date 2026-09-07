---
date: 2026-08-27
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-27

## 오늘 배운 것
- Google Slides의 Gemini가 2026년 6월부터 단일 프롬프트로 완전 편집 가능한 멀티슬라이드 덱을 생성(기존 Drive 콘텐츠 반영·타 프레젠테이션 스타일 매칭), 출시 시점엔 영어(미국)만 지원 — 원문 대조로 확인됨.
- 2026년 데이터 스토리텔링 트렌드: 효과적인 시각화의 기준은 "복잡도"가 아니라 "가장 이해하기 쉬운 형태" — 차트 선택 시 단순성 우선 원칙 재확인(원문 대조 확인).
- 차트 접근성 실무: 실시간/스트리밍 데이터는 `aria-live="polite"` 태깅, 항상 정적 텍스트나 데이터 테이블 대안을 병행 제공 — PPTX는 웹표준이 아니므로 발표자 노트·대체텍스트로 번역 적용 필요(원문 대조 확인).
- **정정**: python-pptx 최신 안정판은 v1.0.0이 아니라 **v1.0.2**(2024-08-07 배포 이후 신규 릴리즈 없음, PyPI 확인). 기존 위키 노트(`power.md`, `ai-프레젠테이션-도구-지형-갱신.md`)의 "v1.0.0" 표기는 오기이므로 정정 필요.
- 포크 생태계 재확인: power-pptx **v2.9.0**(2026-06-29, PyPI 확인·"actively-maintained fork"), python-pptx-extended **v1.2.0**(2026-05-05, 그림자·표 테두리·customXml 지원) — 둘 다 실존·활성 유지 확인.
- 리서치 결과 중 3건은 출처 원문 대조 시 근거 불일치로 **폐기**: ①"Gamma 3.0/Imagine/Claude·ChatGPT·Zapier·n8n 연동" — 인용 기사 원문에 해당 언급 전무. ②"Canva Brand Voice·Magic Brand Engine" — 원문엔 Magic Studio/Dream Lab/Magic Design만 존재, 해당 기능명 없음. ③"ADA Title II 2026년 4월 발효·WCAG 2.1 AA 명시 요구" — 인용 기사 본문에 ADA Title II·2026년4월·WCAG 2.1 언급 전무(사이트 내비게이션의 WCAG 2.2 스캐너만 존재).

## 출처
- [Google Workspace Updates - Gemini in Google Slides](https://workspaceupdates.googleblog.com/2026/06/create-fully-native-and-editable-presentations-with-Gemini-in-Google-Slides.html)
- [Beautiful.ai - Data Visualization Trends for Presentations in 2026](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Accessible Data Visualization Guide for Diverse Audiences 2026](https://inclusionresearch.org/accessible-data-visualization-for-diverse-audiences-2026-guide)
- [PyPI - python-pptx](https://pypi.org/pypi/python-pptx/json), [PyPI - power-pptx](https://pypi.org/pypi/power-pptx/json), [PyPI - python-pptx-extended](https://pypi.org/pypi/python-pptx-extended/json)

## 위키화 후보
(신규 노트 없음 — 이번 라운드는 기존 노트 정정이 중심)

## 프로필 반영 후보 (저위험)
- 어휘: "Gemini in Google Slides(프롬프트 기반 네이티브 편집 덱 생성)" — AI 프레젠테이션 도구 지형 논의 시 최신 경쟁구도 표현으로 사용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
