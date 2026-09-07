---
date: 2026-07-17
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-17

## 검증 결과 (교차확인)

기존 위키 확인 결과 **Assertion-Evidence·Minto Pyramid·SCQA**는 이미 `어휘-추가.md`(2026-07-12)에 별도 출처(Six Minutes, think-cell)로 큐레이션 완료 — 오늘 리서치와 결론 일치, 재확인만 되고 신규 학습 아님. `python.md`(2026-07-14)엔 python-pptx 제약(폰트 임베딩 불가, Slidev 대안)이 이미 기록됨.

신규 항목 중 **"Aspose.Slides FOSS(MIT 라이선스)"** 주장은 근거 불충분 판단 — Aspose 제품군은 통상 상용 라이선스이며, 제시된 출처(products.aspose.org)도 상용 제품 페이지라 모순됨. 이 항목은 **폐기**. 나머지(python-pptx v1.0.0, Marp, PptxGenJS, 2026 데이터 시각화 트렌드)는 GitHub·공식 문서·잘 알려진 OSS 프로젝트 기반이라 채택.

## 오늘 배운 것
- python-pptx가 안정판 v1.0.0에 도달함(기존 위키의 폰트 임베딩 미지원 등 제약 노트는 계속 유효, 버전 정보만 갱신 대상)
- Marp(Markdown→PPTX/PDF/HTML, 커스텀 테마 지원)를 기존에 확인된 Slidev와 함께 "코드형 덱 대안 툴체인" 2종으로 정리 가능
- PptxGenJS(HTML→PPTX 변환)는 python-pptx 보완 대안으로 검증됨(오픈소스, 실사용 사례 확인)
- "Aspose.Slides FOSS/MIT" 주장은 근거 불충분(상용 제품과 모순) — 채택 보류
- 2026 데이터 시각화 트렌드(헤드라인에 인사이트 직접 서술, "슬라이드 1장=질문 1개")는 신규 개념이 아니라 기존 Assertion-Evidence 원칙의 데이터 시각화 적용 사례로 재확인됨
- 2폰트 시스템(본문 산세리프+대비 헤드라인) 트렌드는 참고만 — 우리 프로젝트는 이미 Pretendard+JetBrains Mono로 서체 기준 확정되어 있어 변경 대상 아님

## 출처
- [python-pptx GitHub Releases](https://github.com/scanny/python-pptx/releases)
- [Marp 공식 사이트](https://marp.app/)
- [Best Open Source APIs for PowerPoint (PptxGenJS 언급)](https://blog.fileformat.com/en/presentation/best-open-source-apis-for-creating-powerpoint-pptx-presentations/)
- [Beautiful.ai — 2026 Data Visualization Trends](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- (기존 위키 재확인) [[어휘-추가]] — Assertion-Evidence, Minto Pyramid, SCQA 출처 포함

## 위키화 후보
- "Marp+PptxGenJS — python-pptx 보완 대안 툴체인" 개념 노트 신설(기존 python.md에 Slidev만 기록돼 있어 보완 가치 있음)

## 프로필 반영 후보 (저위험)
- 없음(핵심 어휘는 이미 2026-07-12·13에 반영 완료, 중복)

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
