---
date: 2026-09-03
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-09-03

## 오늘 배운 것

- **power-pptx의 "space-aware authoring" 3단 안전장치**(PyPI 메타데이터 원문 대조 확인): ①`TextFrame.fit_text()`가 저장 전에 Pillow 폰트 메트릭으로 폰트 크기를 XML에 확정 → ②`auto_size=MSO_AUTO_SIZE.TEXT_TO_FIT_SHAPE`가 렌더타임 폴백 → ③`slide.lint()`/`auto_fix()`/`tidy()`가 텍스트 오버플로우·도형 이탈·충돌을 사후 검출·자동보정. 기존 위키 어휘("space-aware authoring")의 실제 구현 메커니즘이 구체화됨.
- **python-pptx-extended**: upstream python-pptx v1.0.2 기준 포크(현재 자체 버전 1.2.0), 그림자·불릿·표 테두리·customXml 지원 확인. import 모듈명이 `pptx`로 동일해 원본 python-pptx와 동시 설치 불가(기존 power.md 노트의 제약과 동일 패턴).
- **Canva "Brand Kit(Pro)"**: 회사 색상·폰트·로고를 일관 적용하는 기능으로 원문 확인됨. 단, MS 365 Copilot의 "Brand Kit"(2026-07 도입, 기존 위키 별도 노트)과 이름이 같은 별개 벤더 제품이므로 혼동 주의.
- **Beautiful.ai "스마트 슬라이드"**: 브랜드 일관성 자동 집행을 표방(원문 확인). 단 출처(is4.ai)에 검증 불가한 정량 수치("73% 시간단축" 등)가 섞여 있어 정성적 주장만 채택, 수치는 배제.
- Juice Analytics "12 Rules for Data Storytelling (2026 Edition)", Beautiful.ai "5 Proof-Backed Frameworks" 두 아티클 모두 실재 발행 확인(표제 대조 완료, 본문 세부 프레임워크는 추후 심층 리서치 대상).

**폐기(검증 실패/불확실)**:
- "PowerPoint SmartArt 접근성 개선 — M365 빌드 19729.20000" 클레임: 원문(techcommunity.microsoft.com)이 JS 렌더링 페이지라 본문 로드 실패, 특정 빌드번호 대조 불가 → 폐기.
- "문제→근거→인사이트→액션" 4단계 내러티브 아크 라벨: chatslide.ai 원문에서 "narrative arc", "one idea per slide"는 확인되나 해당 4단계 명칭은 원문에 없음(요약 과정의 재구성 추정) → 라벨 폐기, "슬라이드당 메시지 1개" 트렌드만 채택.

## 출처
- [power-pptx — PyPI](https://pypi.org/pypi/power-pptx/json)
- [python-pptx-extended — PyPI](https://pypi.org/pypi/python-pptx-extended/json)
- [Deepak Gupta — AI Presentation Tools 2026](https://guptadeepak.com/tools/top-5-ai-presentation-tools-2026/)
- [is4.ai — Top 10 AI Presentation Tools 2026](https://is4.ai/blog/our-blog-1/top-10-ai-presentation-tools-2026-comparison-420)
- [Juice Analytics — 12 Rules for Data Storytelling (2026 Edition)](https://www.juiceanalytics.com/writing/12-rules-for-data-storytelling-2026)
- [Beautiful.ai — 5 Proof-Backed Frameworks](https://www.beautiful.ai/blog/data-storytelling-that-works-5-proof-backed-frameworks-for-communicating-insights-clearly)
- [ChatSlide — Data Storytelling Slide Design Trends 2026](https://www.chatslide.ai/articles/data-storytelling-slide-design-trends)

## 위키화 후보
- 기존 `power.md` 노트에 power-pptx의 fit_text/auto_size/lint 3단 메커니즘 보강(신규 노트 대신 기존 노트 보강 원칙 준수).
- 기존 `ms-365-copilot-powerpoint-brand-kit-2026.md`에 "Canva Brand Kit(Pro)"를 별개 벤더 제품으로 병기해 명칭 혼동 방지 각주 추가.

## 프로필 반영 후보 (저위험)
- 어휘: "space-aware authoring 3단 안전장치(fit_text→auto_size→lint/auto_fix)" — 도구 선정 논의 시 구체적 근거로 사용.
- 표현: "Brand Kit(Canva Pro) vs Brand Kit(MS Copilot)" 벤더 구분 — 브랜드 일관성 작업 시 출처 명시 정확도 향상.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 검증도 WebFetch 권한 거부→wget 폴백 패턴 재현되었으나 기존 후보(출처-대조-검증기 계열)에 이미 반복 등록되어 중복 제안 생략)
