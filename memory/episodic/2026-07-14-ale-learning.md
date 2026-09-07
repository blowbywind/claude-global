---
date: 2026-07-14
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-14

## 오늘 배운 것
- python-pptx는 폰트 임베딩 API를 제공하지 않음(2018년 이슈 이후 미해결) — Pretendard/JetBrains Mono를 슬라이드 파일 자체에 임베딩하려면 python-pptx만으로는 불가하고 Aspose.Slides 등 별도 라이브러리가 필요. 발행 전 체크리스트의 "폰트 미임베딩" 항목은 자동화가 아닌 수동 확인 절차로 유지해야 함.
- PPTX 접근성 필수 항목: 모든 이미지/차트에 1~2문장 대체텍스트, 파워포인트 "검토→접근성 검사→읽기 순서" 창으로 스크린리더 낭독 순서가 실제 레이아웃과 일치하는지 별도 검증. 발행 전 체크리스트에 "이미지/폰트 미임베딩"과 동급으로 편입 검토 가치 있음.
- python-pptx 네이티브 차트 API는 막대/선/파이/영역 등 기본 타입만 지원 — 폭포형·깔때기형·트리맵 등은 도형(사각형+라인+라벨) 조합으로 직접 구현해야 함. 도식화 설계 시 이 제약을 사전에 감안 필요.
- 차트 선택은 데이터 타입뿐 아니라 목적(비교/추세/부분-전체/관계)·청중 전문성까지 고려해야 하며, 파이차트는 값 비교가 어려워 스토리텔링용으로 비권장.
- 최종 산출물이 진짜 편집 가능한 .pptx여야 하면 Slidev 경유는 부적합(PPTX export가 슬라이드를 이미지화해 텍스트 선택 불가) — python-pptx 직접 구현 또는 Pandoc 경로가 맞음.
- (주의, 채택 보류) "slideforge.dev" 벤더 블로그의 구체 수치(46휴리스틱, 오류율 12%→1%)는 자체 홍보성 주장으로 신뢰도 낮아 배제. 다만 폰트 자동치환·이미지 관계ID 유실·URL 이미지 미지원 등 정성적 한계는 python-pptx 공식 문서 특성과 부합해 참고용으로만 남김.

## 출처
- [python-pptx font embedding issue #355](https://github.com/scanny/python-pptx/issues/355)
- [Reading Order Pane - Microsoft Support](https://support.microsoft.com/en-gb/office/make-slides-easier-to-read-by-using-the-reading-order-pane-863b5c1c-4f19-45ec-96e6-93a6457f5e1c)
- [python-pptx Charts 공식 문서](https://python-pptx.readthedocs.io/en/latest/user/charts.html)
- [ThoughtSpot: Types of Charts and Graphs](https://www.thoughtspot.com/data-trends/data-visualization/types-of-charts-graphs)
- [Slidev vs Marp vs Reveal.js (2026)](https://www.pkgpulse.com/guides/slidev-vs-marp-vs-revealjs-code-first-presentations-2026)

## 위키화 후보
- "PPTX 접근성 체크리스트(대체텍스트+읽기순서 검증)" — 기존 웹 WCAG 노트와 별개로 문서 스택 전용 concept 노트 신규 작성 가치 있음.
- "python-pptx 네이티브 차트 타입 제약과 도형 대체 구현 패턴" — 신규 concept 노트.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "읽기 순서(Reading Order) 검증", "차트 목적 기반 선택 기준(비교/추세/부분-전체/관계)".

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] pptx-접근성-검증 — 발행 전 대체텍스트 누락·읽기순서 불일치를 점검하는 체크리스트/스크립트, 기존 이미지·폰트 임베딩 검증 절차와 통합.
