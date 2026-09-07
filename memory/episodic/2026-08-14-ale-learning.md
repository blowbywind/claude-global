---
date: 2026-08-14
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-14

## 오늘 배운 것
- python-pptx는 여전히 폰트 임베딩 API를 네이티브 지원하지 않습니다(2026-07-15 위키 노트에서 이미 확인된 사실과 일치). 브랜드 서체를 강제 적용해야 하면 수동 PowerPoint 임베딩 또는 Aspose.Slides 같은 대체 라이브러리를 병행 검토해야 합니다.
- 브랜드 서체는 theme.xml의 `<a:majorFont>`(제목용)·`<a:minorFont>`(본문용) 태그로 지정합니다. 기존 "theme.xml 우선 적용" 원칙과 정합하며, 보통 `theme1.xml` 하나만 수정하면 됩니다(멀티 슬라이드마스터 문서는 예외).
- 슬로프차트(전후 2시점 비교, 5~15개 항목 권장)와 범프차트(순위 변화 서사, 4~10개 항목 권장)는 혼동되기 쉬우나 용도가 다릅니다 — 수치 크기 비교 vs 순위 변화 스토리텔링.
- 데이터 스토리텔링 구조로 OIA(Observation→Insight→Action) 프레임과 "한 슬라이드=한 메시지", 콜라주가 아닌 코믹스트립식 순차 전개 원칙이 업계에서 강조되는 추세입니다.
- Gamma(웹 네이티브, PPTX 변환 시 레이아웃 손상 위험)와 Beautiful.ai(자동정렬·엔터프라이즈 브랜드 강제)는 우리의 python-pptx 기반 정형 PPTX 산출물과 트레이드오프가 다르므로, 비교 언급 시 용도 구분이 필요합니다.

※ Copilot Brand Kit 관련 신규 날짜 정보(6월 전세계 배포)는 기존 위키(2026-08-08 노트, 공식 MS 소스 기반 7월 중순 도입)와 시점이 어긋나고 이번 턴에 WebFetch/네트워크 접근이 차단돼 원문 재확인이 불가해 채택하지 않았습니다.

## 출처
- [Working with Fonts of PowerPoint (Python)](https://blog.conholdate.com/total/working-with-fonts-of-powerpoint-ppt-using-python/)
- [Aspose.Slides Embedded Font (Python)](https://docs.aspose.com/slides/python-net/embedded-font/)
- [Domo — Slope Chart](https://www.domo.com/learn/charts/slope-chart)
- [Domo — Bump Charts](https://www.domo.com/learn/charts/bump-charts)
- [Juice Analytics — 12 Rules for Data Storytelling](https://www.juiceanalytics.com/writing/12-rules-for-data-storytelling-2026)
- [Beautiful.ai vs Gamma](https://plusai.com/blog/beautiful-ai-vs-gamma/)

## 위키화 후보
- 슬로프차트 vs 범프차트 구분(전후비교 vs 순위서사, 권장 항목 수) — 기존 위키에 없는 신규 개념, 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "OIA 프레임워크(Observation-Insight-Action)", "코믹스트립형 슬라이드 전개(콜라주 지양)" — 데이터 스토리텔링 설명 시 전문성 표현으로 활용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — WebFetch 권한 거부는 이미 07-16/22/29/30에 이어 이번 턴도 재현되어 기존 후보(리서치-검증-권한-정합기)로 누적 기록됨, 중복 제안 생략)
