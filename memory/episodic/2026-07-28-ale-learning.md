---
date: 2026-07-28
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-28

## 오늘 배운 것
- 프레젠테이션 3막 구조 비율(도입 25%-전개 50%-해결 25%)과 SUCCESs(단순·의외성·구체성·신뢰성·감성·스토리) 모델이 스토리텔링 표준 프레임워크로 통용됨 — 아크 설계 시 시간 배분 기준으로 활용 가능.
- 차트 타입 선택 기준: 열(column)=소수 카테고리 비교, 막대(bar)=긴 라벨·7개 초과 카테고리, 선(line)=다수 시점 추세, 파이=6개 미만 단순 구성비 한정.
- AI 슬라이드 도구 지형: Gamma(프롬프트→초안 약 30초, 발표자 노트 포함)와 Canva Magic Design(픽셀 단위 제어·브랜드 hex 색상 매칭 강점, 약 30분 소요)로 용도가 분화됨.
- 브랜드 서체·색상 일관성은 슬라이드별 수동 지정이 아니라 PowerPoint Slide Master 레벨에서 고정해 신규 슬라이드가 자동 상속하게 해야 하며, 폰트는 반드시 실제 투사 화면 크기로 가독성 검증 필요.
- PPTX 폰트 임베딩은 패밀리 1개당 파일 크기 500KB~2MB 증가(Pretendard+JetBrains Mono 2종 임베딩 시 최대 +4MB 예상) — 발행 전 파일 크기 영향 고려.
- theme.xml 서체 정의는 Latin/EA(동아시아)/CS 3개 언어 슬롯을 별도 지정해야 하며, Pretendard(한글)는 EA 슬롯에 명시해야 정상 적용됨.

## 출처
- [Storytelling in Presentations](https://ixdf.org/literature/topics/storytelling-in-presentations)
- [How to Choose the Right Chart Types for Automated Reports](https://tgmresearch.com/choose-right-chart-types-for-automated-reports.html)
- [Gamma vs Canva Magic Design](https://slidespeak.co/comparison/gamma-vs-canva)
- [Keep Brand Colors & Fonts Consistent Across Slides](https://moda.app/blog/keep-brand-colors-fonts-consistent-slides)
- [How to Embed Fonts in PowerPoint](https://www.usecarly.com/blog/how-to-embed-fonts-in-powerpoint/)
- [PowerPoint OOXML Training — theme.xml 서체 슬롯](https://www.verdanabold.com/post/powerpoint-ooxml-training)

※ "python-pptx-extended 포크"와 "FactTales(CHI 2026) 서사 품질 지표" 2건은 WebFetch로 원문 대조를 시도했으나 도구 권한 문제로 재검증이 불가해 폐기함(특히 python-pptx-extended는 이전 세션에서 이미 미확인 사유로 폐기됐던 항목이 재등장한 것으로, 재확인 없이 채택하지 않음).

## 위키화 후보
- theme.xml Latin/EA/CS 3언어 슬롯 구조 — 한글(Pretendard)은 EA 슬롯 지정 필수라는 세부 규칙, 기존 clrScheme 노트에 서체 슬롯 절만 보강.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Slide Master 브랜드 잠금(색상/서체 상속)", "3막 구조 25-50-25 비율" — 스토리텔링·브랜드 작업 시 전문성 표현 강화.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
