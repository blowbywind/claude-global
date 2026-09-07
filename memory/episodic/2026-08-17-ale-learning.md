---
date: 2026-08-17
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-17

검증 결과, 원 리서치 8건 중 2건은 사실관계 오류·근거 미확인으로 폐기했습니다(python-pptx "최근" 기능 프레이밍은 실제로는 2018년 changelog, slidebean 출처는 SCQA/주인공 프레이밍을 담고 있지 않음). 나머지는 원문 대조로 확인했습니다.

## 오늘 배운 것
- **python-pptx 코어는 사실상 정체, power-pptx가 유지 포크로 확장 담당**: power-pptx는 PyPI에 "python-pptx의 활발히 유지되는 포크"로 명시되어 있고 최신 버전 2.10.0이 2026-07-12에 실제 배포됨(PyPI JSON API 대조 확인). 단, 에일이 "최근 추가"라 인용한 SlideLayouts 관리·gradient fill·turbo-add·shadow·crop_x·Slide.background 기능은 python-pptx 공식 업데이트 로그 원문 대조 결과 실제로는 2018년(v0.6.9~0.6.17) 항목으로, "최근"이 아님 — 시기 오귀속으로 판단해 해당 기능 목록은 폐기.
- **스토리 vs 통계 기억률 63%/5%는 원문에서 확인**: storydoc.com 원문에 Dean & Chip Heath 연구 인용으로 명시되어 있음. Assertion-Evidence(결론형 제목) 원칙의 근거로 재사용 가능.
- **2026 데이터 시각화: 헤드라인 인사이트 전면 배치 확인**: beautiful.ai 원문에 "차트와 그래프는 헤드라인 인사이트를 슬라이드에 직접 배치하고 'so what' 메시지를 명확히 하는 방향으로 간다", "차트가 아닌 인사이트가 초점"이라는 문장 확인. 단, 원 리서치의 "색약 접근성 필수" 부분은 원문에서 색약(colorblind) 관련 언급을 찾지 못해 일반 접근성 언급으로 톤다운.
- **브랜드 일관성은 템플릿·테마 레벨 강제가 표준**: moda.app 원문에서 PowerPoint Slide Master 레벨에서 색상 팔레트·폰트를 기본값으로 잠그면 개별 텍스트박스·도형이 자동으로 승인된 브랜드 팔레트를 상속한다는 설명 확인 — PPTX 작업 시 슬라이드별 하드코딩 대신 슬라이드 마스터/테마 레벨 고정을 우선한다는 기존 원칙과 부합.
- **Gamma의 PPTX export 레이아웃 깨짐은 실사용 후기로 확인**: plusai.com 원문에 "Gamma로 만든 덱을 PowerPoint로 가져오면 슬라이드 요소 위치가 어긋나 수정 시간이 추가로 든다"는 실사용 서술 확인(원 리서치의 "drift"라는 표현 자체는 원문에 없어 뉘앙스만 유지).

## 출처
- [python-pptx Community Updates](https://python-pptx.readthedocs.io/en/latest/community/updates.html) — power-pptx 언급 없음, 인용된 기능들은 2018년 항목(시기 오귀속 정정용)
- [power-pptx PyPI](https://pypi.org/pypi/power-pptx/json) — "Actively-maintained fork of python-pptx", 최신 릴리스 2026-07-12 확인
- [Storydoc: Presentation Storytelling Examples](https://www.storydoc.com/blog/presentation-storytelling-examples) — 63%/5% 기억률 통계 확인
- [Beautiful.ai: Data Visualization Trends for Presentations in 2026](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026) — 헤드라인 인사이트·"so what" 원칙 확인
- [moda.app: Keep Brand Colors & Fonts Consistent](https://moda.app/blog/keep-brand-colors-fonts-consistent-slides) — 테마/마스터 레벨 강제 확인
- [Plus AI: Beautiful.ai vs Gamma](https://plusai.com/blog/beautiful-ai-vs-gamma/) — Gamma PPTX export 레이아웃 어긋남 확인

## 위키화 후보
- "차트 제목=so what 헤드라인" 원칙을 기존 Assertion-Evidence/Data-Ink Ratio 노트에 2026년 근거(beautiful.ai)로 보강.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "power-pptx" — python-pptx로 불가능한 gradient/effects/테마 커스터마이징이 필요할 때 대안 포크로 언급 가능(실사용 전 라이선스·API 안정성 별도 확인 필요).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 제안은 이미 후보 등록되어 있어 중복 제안 생략. 이번에도 8건 중 2건이 검증 단계에서 폐기되어 실효성이 재확인됨.)
