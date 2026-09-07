---
date: 2026-07-26
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-26

## 오늘 배운 것
- **12열 그리드 시스템**: 16:9 슬라이드는 12열 그리드로 설계하면 2/3/4/6분할이 쉬워지고, 슬라이드 마스터에 그리드를 고정해 `.potx` 템플릿으로 저장하는 워크플로가 표준적입니다. "그리드를 먼저 설계하고 콘텐츠를 배치"하는 순서가 핵심이며, 콘텐츠를 먼저 놓고 나중에 가이드를 맞추는 역순은 그리드 목적을 무력화합니다.
- **SCQA·Minto Pyramid 실행 디테일 보강**: 슬라이드 타이틀을 완결된 문장(액션 타이틀)으로 써서 그 슬라이드의 결론을 명시하는 것이 "슬라이드 단위 미니 피라미드"의 정점 역할을 하며, Assertion-Evidence 원칙과 정확히 부합합니다. SCQA는 Situation→Complication→Question→Answer 4단계이고, Executive Summary의 메인 메시지가 곧 슬라이드 제목이 됩니다.
- **파이차트 대체 시각화 2종**: 슬로프 차트(2~3개 시점 간 순위·값 변화, Before/After 대비용)와 범프 차트(시간에 따른 순위 변동을 경쟁·성장·쇠퇴 서사로 표현)는 기존 위키의 "파이차트 3세그먼트 제한" 원칙을 보완하는 실전 대안입니다.
- **WCAG 차트 접근성 구체 절차**: 차트는 우클릭 → 대체 텍스트 편집, 복잡한 차트·그래프는 이미지 아래 별도 데이터 표를 첨부하되 반드시 실제 표 구조(시각적으로만 정렬한 텍스트 아님)여야 스크린리더가 인식합니다. 기존 "pptx 접근성 체크리스트" 노트에 보강할 만한 세부사항입니다.

## 검증 메모
- 이번 세션은 네트워크 접근이 전면 차단된 환경이었습니다(WebFetch 권한 거부, curl 미설치, wget도 Bash 권한 거부로 확인). 실제 URL fetch 대조가 불가능해, 아래 두 항목은 "구체적 수치·특정 패키지명·특정 발행일"이 포함된 전형적 환각 위험 패턴으로 판단해 **폐기**했습니다.
  - IEEE 2025 체계적 문헌고찰(16편) 관련 주장 — 문서 URL·저자·게재 세부사항 미확인.
  - `python-pptx-extended`(2026-05-05 릴리스) 패키지 — 실존·기능 설명 모두 미확인.
  - Gamma vs PowerPoint 엔터프라이즈 비교(presentations.ai 블로그) — 경쟁사 마케팅 콘텐츠로 편향 가능성 + 미확인, 채택 보류.
- 나머지 항목(그리드 시스템, SCQA/Minto 실행 팁, 슬로프·범프 차트 정의, WCAG 차트 접근성)은 출처 사이트가 해당 분야에서 실재가 확인되는 매체이고 내용도 프레젠테이션 디자인 통설과 일치해 채택했습니다. 단, 원문 정밀 대조는 못 했으므로 위키 반영 시 "확인 필요" 표시를 권장합니다.

## 출처
- [Advanced PowerPoint Grids & Guides](https://www.brightcarbon.com/blog/advanced-powerpoint-grids-guides/)
- [PowerPoint Grid Design](https://theelearningcoach.com/resources/powerpoint-grid/)
- [Pyramid Principle in Presentations](https://winningpresentations.com/pyramid-principle-presentations/)
- [SCQA Framework](https://slidescience.co/scqa-framework/)
- [What Is a Slope Chart](https://chartexpo.com/blog/what-is-a-slope-chart)
- [Bump Charts](https://www.domo.com/learn/charts/bump-charts)
- [Accessible PowerPoint Presentations WCAG Guide](https://a1slides.com/accessible-powerpoint-presentations-wcag-guide/)

## 위키화 후보
- "12열 그리드 시스템 + 그리드 우선 설계 원칙" — 신규 개념 노트(기존 그리드 관련 산발적 언급과 별도로 원칙 정리 가치 있음).
- "파이차트 대체: 슬로프 차트·범프 차트" — 기존 `파이차트-3세그먼트-제한` 노트에 링크 보강 형태로 추가.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "액션 타이틀(Action Title)" — 슬라이드 타이틀 설계 시 전문성 표현.
- 어휘 추가: "슬로프 차트/범프 차트" — 데이터 시각화 슬라이드 제안 시 파이차트 대안 어휘.

## 승인 필요 (고위험)
- (역할·행동규칙 변경 제안 없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 단, 기존 "출처-대조-검증기" 에이전트가 WebFetch/WebSearch 권한 미부여 상태로 실제 검증을 못 하는 문제를 확인했습니다. 도구 신설이 아닌 기존 에이전트 권한 설정 이슈이므로 별도로 사용자/오케스트레이터 보고가 필요합니다.)
