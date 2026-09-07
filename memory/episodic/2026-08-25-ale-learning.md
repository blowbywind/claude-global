---
date: 2026-08-25
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-25

## 오늘 배운 것
- python-pptx 폰트 임베딩 미해결(#355) 대안 확인: 상용 Aspose.Slides는 `add_embedded_font()`로 프로그래매틱 폰트 임베딩을 지원하고, 무료 경로로는 LibreOffice Impress(v4.1+, 파일>속성>글꼴)가 PPTX 저장 시에도 폰트 임베딩을 지원함 — python-pptx 툴체인의 폰트 임베딩 공백을 메울 실무 대안.
- Assertion-Evidence 구조 후속 연구(쿠웨이트대 공학도 108명, 2026)에서 인지부하 감소는 재확인됐으나 동기·자기효능감·이해도는 유의차 없음 — 기존 Penn State 연구(assertion.md) 효과를 "만능"으로 과신하지 않게 서술 보정 필요.
- Slidev(개발자·라이브 데모)와 Marp(문서팀·반복 PPTX/PDF 출력)의 역할 분리가 2026년 기준으로 명확해짐 — 기존 marp-pptxgenjs.md 세부화 여지.
- Gamma가 2026-03 "Generate API"(프로그래매틱 덱 생성 API)를 출시, Beautiful.ai는 "Context-Aware AI Workflow"(아웃라인 선작성 후 생성)를 도입 — 기존 도구 지형 노트 갱신 필요.
- (재확인, 신규 아님) python-pptx 원본은 2026년 신규 릴리스 없이 v1.0.0 유지, 포크(python-pptx-extended·power-pptx)만 활발 — 이미 power.md/어휘.md/프로필(2026-08-01)에 반영돼 있어 추가 조치 불요.

## 출처
- [python-pptx font embedding issue #355](https://github.com/scanny/python-pptx/issues/355)
- [Aspose.Slides Embedded Font (Python)](https://docs.aspose.com/slides/python-net/embedded-font/)
- [Font embedding — Wikipedia](https://en.wikipedia.org/wiki/Font_embedding)
- [ScienceDirect — Assertion-Evidence 후속 검증 연구](https://www.sciencedirect.com/science/article/pii/S2307187725001701)
- [Markdown Presentation Tools: Marp, Slidev, Reveal.js](https://dasroot.net/posts/2026/04/markdown-presentation-tools-marp-slidev-reveal-js/)
- [Gamma — Complete Guide to AI Presentation Tools 2026](https://gamma.app/explore/content/guides/complete-guide-to-ai-presentation-tools-in-2026)
- [Top 5 AI Presentation Tools 2026](https://guptadeepak.com/tools/top-5-ai-presentation-tools-2026/)

## 위키화 후보
- 신규 노트 없음(기존 python.md·assertion.md·ai-프레젠테이션-도구-지형-갱신.md·marp-pptxgenjs.md가 이미 커버). 대신 기존 노트 보강 권장: ①assertion.md에 2026 후속연구(동기/자기효능감 무효과) 단락 추가, ②ai-프레젠테이션-도구-지형-갱신.md에 Gamma Generate API·Beautiful.ai Context-Aware Workflow 갱신, ③python.md에 LibreOffice Impress 무료 폰트 임베딩 대안 각주 추가.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "LibreOffice 폰트 임베딩 워크어라운드", "Gamma Generate API"

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음)

---
참고: WebFetch로 Aspose·ScienceDirect 원문 재확인을 시도했으나 도구 권한 거부(WebFetch)로 실패했고, curl/wget 폴백도 샌드박스 승인 요구로 이번 턴에서는 완료하지 못했습니다(기존 "리서치-검증-권한-정합기" 이슈와 동일 패턴). 위키 내부 교차검증(중복 여부·숫자 일치)은 완료했으나, Aspose API명·쿠웨이트대 연구 원문 대조는 미완이므로 다음 세션에서 재시도 권장합니다.
