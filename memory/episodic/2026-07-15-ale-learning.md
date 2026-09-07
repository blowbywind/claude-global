---
date: 2026-07-15
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-15

## 오늘 배운 것
- PPTX 폰트 임베딩은 신형식(.pptx)에서만 가능하며 TTF/OTF만 지원(PostScript 불가), "Embeddability=Installable/Editable" 표시가 없는 폰트는 애초에 임베딩 자체가 불가함 — 발행 전 폰트 라이선스 확인이 필요하다는 기존 품질 게이트에 실질적 근거 추가. (출처: iSpring)
- 폰트 임베딩은 데스크톱 PowerPoint에서만 확정 적용되고 PowerPoint for Web은 미지원 — 크로스플랫폼 서체 고정을 보장해야 하는 산출물은 PDF/영상 export를 병행 검토. (출처: verdanabold.com)
- theme.xml `a:fontScheme`의 majorFont/minorFont는 반드시 base font name만 지정해야 하며, 확장 스타일명까지 구체적으로 넣는 것이 흔한 실수 — 기존 "theme.xml clrScheme/fontScheme 레벨 고정" 원칙에 실무 디테일 보강. (출처: Brandwares)
- python-pptx `add_chart()`+`XL_CHART_TYPE`으로 만든 차트는 이미지가 아닌 편집 가능한 네이티브 DrawingML 차트(데이터 라벨·축 서식 커스터마이즈 가능). (출처: python-pptx 공식 문서)
- python-pptx의 커스텀 OTF 폰트 프로그래밍 임베딩은 여전히 미해결(GitHub #830) — 기존 위키 인식(폰트 임베딩 미지원, #355)과 일치, 자동화 한계이므로 수동 PowerPoint 임베딩 병행 필요.
- Marp는 텍스트 선택 가능한 PPTX 산출 가능, Slidev는 슬라이드를 이미지로 캡처해 텍스트 편집 불가 — 기존 위키의 Slidev 한계 인식에 Marp라는 대안 도구 정보 추가. (출처: pkgpulse.com)

※ 2026 트렌드 관련 항목(내러티브 스캐폴딩, Bento Grid, 비동기 공유)은 벤더 블로그 출처로 신뢰도가 낮거나(마케팅성) Bento Grid는 위키에 이미 있어 중복 → 핵심 학습에서 제외.

## 출처
- [python-pptx Charts](https://python-pptx.readthedocs.io/en/latest/user/charts.html)
- [iSpring — How to Embed Fonts in PowerPoint](https://www.ispringsolutions.com/blog/how-to-embed-fonts-in-powerpoint)
- [Embedding Fonts in PowerPoint — verdanabold.com](https://www.verdanabold.com/post/embedding-fonts-in-powerpoint-not-just-for-pcs-any-more)
- [Brandwares — XML Hacking: Font Themes](https://www.brandwares.com/bestpractices/2015/10/xml-hacking-font-themes/)
- [python-pptx GitHub Issue #830](https://github.com/scanny/python-pptx/issues/830)
- [Slidev vs Marp vs Reveal.js — pkgpulse.com](https://www.pkgpulse.com/guides/slidev-vs-marp-vs-revealjs-code-first-presentations-2026)

## 위키화 후보
- "PPTX 폰트 임베딩 기술 제약(파일형식·확장자·Embeddability 표시·데스크톱 전용)" — 기존 `python.md`에 없는 실무 디테일로 별도/보강 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 용어 "Embeddability(Installable/Editable)" — 폰트 라이선스 검증 시 전문 표현으로 사용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — alt-text 자동생성 도구는 수동 검증이 필수라 반복작업 완전자동화 대상 아님, 기존 접근성 체크리스트로 충분)
