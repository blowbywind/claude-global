---
date: 2026-07-12
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-12

## 오늘 배운 것
- **폰트 임베딩 갭 확인**: python-pptx는 폰트 임베딩을 네이티브 지원하지 않음(GitHub 이슈 #355, 장기 미해결) — Pretendard/JetBrains Mono를 실제로 임베딩하려면 `[Content_Types].xml`에 `fntdata` 확장자 등록 + `presentation.xml`의 `<p:embeddedFontLst>` + `ppt/fonts/` 바이너리 저장을 수동 XML로 처리해야 함. 2026-07-09 이미지 미임베딩 실사고와 같은 급의 발행 전 체크 항목으로 다뤄야 함.
- **스토리 구조 이론적 근거 확보**: Minto Pyramid(SCQA)와 Assertion-Evidence 슬라이드 제목 기법(제목=완결된 주장 문장, 본문=근거 시각자료 1개)이 기존 위키의 "1 Slide 1 Goal" 원칙을 뒷받침 — 신규 노트보다 `presentation-design-principles.md`에 섹션 보강이 적절.
- **theme.xml 폰트 스킴 표기 규칙**: `<a:majorFont>`(제목)/`<a:minorFont>`(본문) 하위 `<a:latin typeface="...">`에 폰트명은 확장자(Bold 등) 없이 기본 패밀리명만 지정해야 깨지지 않음 — 기존 "theme.xml clrScheme/fontScheme 레벨 고정" 노트를 구체화하는 보강 정보.
- **python-pptx 테마 색상 참조 API**: `font.color.theme_color = MSO_THEME_COLOR.ACCENT_1`로 개별 슬라이드 하드코딩 대신 테마 참조 지정 가능 — 브랜드 일관성 작업 시 실제 코드 패턴으로 채택.
- **차트 선택 기준 표준화**: 추세=선그래프, 카테고리 비교=막대, 상관관계=산점도, 부분-전체(5개 이하)=파이, 2차원 강도=히트맵/트리맵.
- **16:9 슬라이드 그리드 수치**: 13.33×7.5인치, 0.5인치 안전 여백, 12단 그리드는 Slide Master 안내선에 심어야 전체 슬라이드에 상속됨.

## 출처
- [Think-cell — Pyramid Principle for PowerPoint](https://www.think-cell.com/en/resources/content-hub/using-the-pyramid-principle-to-build-better-powerpoint-presentations)
- [Six Minutes — Assertion-Evidence Design](https://sixminutes.dlugan.com/assertion-evidence-design-presentation-slides/)
- [python-pptx GitHub Issue #355 (폰트 임베딩 미지원)](https://github.com/scanny/python-pptx/issues/355)
- [Brandwares — XML Hacking Font Themes](https://www.brandwares.com/bestpractices/2015/10/xml-hacking-font-themes/)
- [python-pptx 공식 문서 — Text](https://python-pptx.readthedocs.io/en/latest/user/text.html)
- [PageOn.ai — PowerPoint Grid System](https://blogs.pageon.ai/mastering-powerpoints-grid-system-build-professional-consistent-layouts)

※ beautiful.ai·lumenore.com의 "2026 트렌드/차트 선택" 항목은 출처가 마케팅 블로그로 신뢰도가 낮아 일반 상식 수준으로만 반영(핵심 학습 항목에서 제외).

## 위키화 후보
- 신규 노트 대신 기존 `presentation-design-principles.md`에 "스토리 구조(SCQA/Assertion-Evidence)" 섹션 보강, 기존 theme.xml 노트에 majorFont/minorFont 표기 규칙 보강 (중복 방지, 업데이트로 처리 권장).

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Assertion-Evidence 슬라이드 타이틀", "Minto Pyramid(SCQA)" — 전문성 표현 강화.

## 승인 필요 (고위험)
- 발행 전 체크리스트에 "폰트 미임베딩" 항목을 "이미지 미임베딩"과 동급 필수 게이트로 승격하는 안 — 신규 강제 규칙이라 사용자 승인 후 반영 권장.

## 신규 도구 후보 (에이전트/스킬)
- [skill] pptx-font-embed — python-pptx 미지원 폰트 임베딩(Pretendard/JetBrains Mono)을 `[Content_Types].xml`/`embeddedFontLst`/`ppt/fonts/` 수동 XML 패치로 자동화, 발행 전 임베딩 여부 검증까지 포함.
