---
date: 2026-08-06
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-06

## 오늘 배운 것
- M365 Copilot(Premium) Windows 사용자 대상 "PowerPoint Backstage에서 조직 브랜드 템플릿 직접 접근" 기능, 2026년 8월부터 제공 시작(브랜드 매니저가 Brand Kit 발행·게시) — 원문 직접 확인 완료.
- 색각이상 대응 8색 차트 팔레트: `#000000 #E69F00 #56B4E9 #009E73 #F0E442 #0072B2 #D55E00 #CC79A7`, 회피 조합은 빨강-초록·초록-갈색·파랑-보라·노랑-연두 — 원문 확인 완료. 단 **정정**: 이 팔레트는 원출처에서 "Okabe-Ito"가 아니라 **"Wong 팔레트"(Wong 2011, Nature Methods)**로 명명됨. 프로필에 "Okabe-Ito" 단독 표기는 부정확하므로 "Wong 팔레트(Okabe-Ito 색각이상 유니버설디자인 원칙 기반)"로 정정해 사용.
- PowerPoint 차트에서 색상 구분 대체·보강 수단으로 패턴 채우기(사선/점/크로스해치, `Format Data Series > Fill > Pattern Fill`) 병행 적용 가능 — 원문 확인 완료.
- python-pptx 차트는 계열 색상을 기본적으로 테마 `Accent1~6` 슬롯 순서로 순환 배정하고, 6개 초과 시 명도(밝기) 변형을 사용함 — 공식 GitHub 문서(scanny/python-pptx)로 확인 완료. **브랜드 일관성 작업 시 theme.xml clrScheme 고정이 차트 색상까지 자동 전파된다**는 기존 원칙에 실증 근거 보강됨.
- python-pptx 대안 포크 2종 실존 확인(PyPI 메타데이터 직접 조회): `python-pptx-extended` v1.2.0(2026-05-05, 그림자·글머리기호·표 테두리·customXml 지원), `power-pptx` v2.10.0(2026-07-12, "actively-maintained fork" 명시) — 채택은 여전히 사용자 승인 필요.

※ 2025년 신규 AE(Assertion-Evidence) 공학교육 연구(ScienceDirect PII S2307187725001701) 및 Minto/SCQA 출처는 접근 차단(403) 또는 검증 불충분으로 "오늘 배운 것"에서 제외. Minto/SCQA는 출처 페이지 존재·주제 일치는 확인됐으나 기존 위키 어휘의 출처 보강용일 뿐 신규 사실 아니므로 생략, AE 2025 연구는 Crossref 교차검색에서 동일 주제 2023년 선행 논문만 확인되고 2025년 게재판·세부 결과("발표자 본인 이해도 향상")는 미확인이라 폐기.

## 출처
- [Microsoft PowerPoint: Access your organization's brand templates](https://m365admin.handsontek.net/microsoft-powerpoint-access-organizations-brand-templates-powerpoint/)
- [Color blindness friendly chart colors (Wong palette)](https://rgblind.com/blog/color-blindness-friendly-chart-colors)
- [Color blind friendly PowerPoint (pattern fill)](https://rgblind.com/blog/color-blind-friendly-powerpoint)
- [python-pptx: About colors (chart 색상 순환)](https://github.com/scanny/python-pptx/blob/master/docs/user/charts.rst)
- [PyPI: python-pptx-extended](https://pypi.org/project/python-pptx-extended/)
- [PyPI: power-pptx](https://pypi.org/project/power-pptx/)

## 위키화 후보
- "Wong 팔레트(Nature Methods, Okabe-Ito 원칙 기반) 8색 헥스코드 + 회피 조합" — 색각이상 대응 차트 배색 개념 노트 신설 가치 있음.

## 프로필 반영 후보 (저위험)
- 어휘 정정: "Okabe-Ito 팔레트" → "Wong 팔레트(Okabe-Ito 색각이상 유니버설디자인 원칙 기반)"로 명칭 교정.
- "패턴 채우기 병행 원칙"(색상만으로 데이터 계열 구분 금지의 실무 구현 수단) 어휘 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
