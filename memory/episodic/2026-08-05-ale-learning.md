---
date: 2026-08-05
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-05

## 오늘 배운 것
- python-pptx 생태계에 신규 활성 포크 2종 확인 — `python-pptx-extended`(2026-05-05 릴리스, 그림자·불릿·표 테두리 등 확장 서식 + customXml 지원)와 `power-pptx`(2026-07-12 릴리스, v2.10.0·활발히 유지보수 중인 포크). PyPI 메타데이터로 존재·설명·릴리스일 직접 대조 완료.
- python-pptx 차트는 슬라이드 내부에 임베디드 Excel 워크시트로 저장되는 구조 — 청중이 "데이터 원본" 요청 시 XLSX 그대로 추출 가능한 점을 문서 산출물 설계에 반영 가능(공식 readthedocs 문서 근거).
- 2026 타이포그래피 트렌드: 가변 폰트의 weight/width/optical size 축을 브랜드 디자인 토큰으로 다루는 흐름 확인(원문 대조 완료, 발행일 2026-01-27) — 기존 위키의 "가변 폰트 축" 원칙과 정합.
- PPTX 접근성 흔한 오류 4종(alt text 누락·색 대비 부족·읽기 순서 오류·표 헤더 미지정)을 JMU 가이드로 재확인 — 발행 전 체크리스트 항목과 일치.

## 출처
- [python-pptx-extended (PyPI)](https://pypi.org/project/python-pptx-extended/)
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/)
- [python-pptx 공식 문서 — 차트/임베디드 워크북](https://python-pptx.readthedocs.io/en/latest/dev/analysis/cht-access-xlsx.html)
- [Variable Fonts as Brand Systems (FontAlternatives, 2026)](https://fontalternatives.com/blog/variable-fonts-brand-systems-2026/)
- [JMU PowerPoint 접근성 가이드](https://www.jmu.edu/accessibility/digital-accessibility/guides/microsoft-office/powerpoint.shtml)

## 위키화 후보
- python-pptx 포크 비교 노트(python-pptx-extended vs power-pptx — 기능 차이·선택 기준)

## 프로필 반영 후보 (저위험)
- 어휘 추가: "가변 폰트 브랜드 토큰화(Variable Font Axes as Design Tokens)"

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
검증 중 리서치 원문에서 근거를 찾지 못해 폐기한 항목 2건 — ① "피치덱 프레임워크-용도 매핑(Hero's Journey/PAS/BAB/Why-How-What/YC Memo)": 인용된 beautiful.ai URL은 "Hero" 매칭이 실제로는 페이지 내 JS 위젯 변수명이었고, 본문은 해당 매핑을 다루지 않음. ② "데이터 스토리텔링 슬라이드 원칙(차트당 질문 1개, 엑셀 스크린샷 복붙 금지 등)": 인용된 ThoughtSpot URL 본문은 일반적 내러티브 아크 설명만 있고 해당 구체 규칙은 확인 불가. WCAG 2.1 AA 수치(4.5:1/3:1) 건도 인용 URL 본문에 해당 수치가 없어 신규 항목으로 채택하지 않았습니다(기존 위키에 이미 커버됨).
