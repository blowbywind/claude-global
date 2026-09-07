---
date: 2026-08-19
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-19

## 오늘 배운 것
- python-pptx 활성 포크 2종을 PyPI JSON API로 직접 검증: **power-pptx**(v2.10.0, 2026-07-12 배포, "actively-maintained fork of python-pptx") — 원본 scanny/python-pptx 정체 시 대안 후보. **python-pptx-extended**(v1.2.0, 2026-05-05 배포) — 그림자·불릿·테이블 테두리·선 캡/조인 서식 확장 + OOXML customXml 지원, 표준 python-pptx에 없는 기능.
- 데이터 스토리 구조: ThoughtSpot 원문에 "beginning, middle, and end / context, insight / narrative arc / action" 표현이 실제 확인됨 — 컨텍스트→인사이트→행동 3단 구조가 슬라이드 구조(컨텍스트/긴장/해결)에 매핑 가능하다는 기존 위키(`데이터-스토리텔링-실행-프레임워크`) 근거를 보강.
- Juice Analytics "2026판 데이터 스토리텔링 12원칙" 원문 확인: 지표를 캐릭터(주인공/적대자)로 취급, 반드시 "So What?"(행동촉구)로 마무리 — 인용 정확함.
- MS 공식 문서 확인: PowerPoint 365가 사진에 AI 자동 alt text를 생성하되 "항상 자동생성 alt text를 검토하라"고 명시 — 기존 [품질 주의] 원칙(발행 전 재검증 필수)과 일치, 근거 보강됨.
- PowerPoint for Mac 폰트 임베딩 기능 원문 확인됨. 단, 이는 "PowerPoint 앱에서 열어 저장"하는 경로 한정이며 python-pptx 직접 생성물에는 적용되지 않음(기존 위키 제약 유지).

**폐기(원문 미확인)**: chatslide.ai의 "의도적 뺄셈(deliberate subtraction)"·"만화 형식 단계별" 표현, Gamma "AI Agent" 기능명 및 생성시간 "10~15분/20~30분" 구체 수치, "PowerPoint 웹 버전 폰트 임베딩 미지원" 세부 — 모두 원문 그렙에서 확인 안 되어 제외(Gamma=신속·Beautiful.ai=브랜드킷 강제라는 정성적 대조 자체는 원문 확인됨).

## 출처
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/)
- [python-pptx-extended (PyPI)](https://pypi.org/project/python-pptx-extended/)
- [Data Storytelling: How to Present Data That Persuades (ThoughtSpot)](https://www.thoughtspot.com/data-trends/best-practices/data-storytelling)
- [12 Rules for Better Data Storytelling, 2026 Edition (Juice Analytics)](https://www.juiceanalytics.com/writing/12-rules-for-data-storytelling-2026)
- [Make your PowerPoint presentations accessible (Microsoft Support)](https://support.microsoft.com/en-us/accessibility/powerpoint/make-your-powerpoint-presentations-accessible-to-people-with-disabilities)
- [Embedding Fonts in PowerPoint: Not just for PCs any more (verdanabold.com)](https://www.verdanabold.com/post/embedding-fonts-in-powerpoint-not-just-for-pcs-any-more)
- [Top 5 AI Presentation Tools of 2026 (guptadeepak.com)](https://guptadeepak.com/tools/top-5-ai-presentation-tools-2026/)

## 위키화 후보
- 기존 `python.md` 노트에 python-pptx 활성 포크 대안(power-pptx/python-pptx-extended) 절 보강 — 신규 노트보다 기존 노트 갱신 권장.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "캐릭터 프레이밍(지표=주인공/적대자)", "So What? 클로징" — 데이터 스토리텔링 슬라이드 설계 논리 설명 시 전문성 표현.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존에 등록된 출처-대조-검증기 계열 후보로 충분히 반영됨)
