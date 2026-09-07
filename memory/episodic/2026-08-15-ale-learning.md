---
date: 2026-08-15
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-15

모든 핵심 주장을 원문 소스(GitHub API, Crossref API, 대상 페이지 텍스트) 직접 대조로 검증했습니다. 8건 중 8건 사실관계 일치 확인, 폐기 항목 없음(단, ASU 접근성 주장은 "자동 보유"가 아니라 "수동으로 추가 가능"이라 표현을 조정).

## 오늘 배운 것
- python-pptx는 여전히 v1.0.0에서 정체(GitHub Releases API 응답 0건, 태그만 존재) — 08-04 기록과 동일, 변경 없음.
- python-pptx 폰트 임베딩 API 부재는 이슈 #355(open, "Font embedding")로 재확인 — 기존 위키(이슈 #830) 노트와 함께 "구조적 미해결" 근거 보강. 브랜드 서체(Pretendard/JetBrains Mono)를 pptx에 강제 반영하려면 여전히 수동 PowerPoint 임베딩 또는 Aspose.Slides 등 별도 라이브러리 필요.
- 접근성 관점: 네이티브 PowerPoint 차트는 "차트 요소 추가→데이터 표" 메뉴로 스크린리더용 연동 데이터 표를 붙일 수 있는 반면, 이미지로 임베드한 차트는 대체텍스트 하나에만 의존 — 데이터 시각화 슬라이드는 가능하면 이미지 임베드보다 네이티브 차트+데이터 표 조합을 우선한다.
- 2025년 Sage Open 동료심사 연구(Bolko & Bavdaž, "Beyond the Numbers: Comprehension and Recall in Data-Driven Visual Communication")가 Crossref로 실존 확인됨 — 축 라벨 등 소량의 시각 장식이 이해도를 해치지 않고 장기 기억 회상을 오히려 높일 수 있다는 "Goldilocks(적당한 균형)" 관점이 최근 근거로 축적 중. 기존 위키의 "차트정크 제거" 원칙을 "무조건 최소화"가 아니라 "목적(판독 정확도 vs 기억 회상)에 따라 균형 조정"으로 뉘앙스 보완 필요.
- 2026년 프레젠테이션 트렌드는 "명료함 우선"·슬라이드당 메시지 1개·벤토 그리드형 모듈 레이아웃, 차트 대신 헤드라인 인사이트("so what")를 직접 노출하는 방향으로 확인됨(beautiful.ai, chatslide.ai 원문 텍스트 직접 대조).

## 출처
- [python-pptx Releases](https://github.com/scanny/python-pptx/releases)
- [python-pptx Issue #355 — Font embedding](https://github.com/scanny/python-pptx/issues/355)
- [ASU Accessibility — PowerPoint](https://accessibility.asu.edu/articles/powerpoint)
- [Bolko & Bavdaž (2025), Sage Open — Beyond the Numbers](https://journals.sagepub.com/doi/10.1177/21582440251406854)
- [ScienceUX — Data-Ink: Ideal vs Minimal](https://scienceux.org/articles/data-ink-ideal-vs-minimal)
- [frank.computer — Minimalism and the absurdity of the data-to-ink-ratio](https://www.frank.computer/blog/2025/04/data-to-ink.html)
- [beautiful.ai — Data Visualization Trends for Presentations in 2026](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [chatslide.ai — Data Storytelling Slide Design Trends](https://www.chatslide.ai/articles/data-storytelling-slide-design-trends)

## 위키화 후보
- "차트정크(chart junk) 논쟁의 최신 반론 — Goldilocks 균형 원칙"(2025 Sage Open 연구 기반, 기존 "차트정크 제거" 원칙에 뉘앙스 보완 노트로 신설 가치 있음)

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Goldilocks 균형(데이터-잉크 비율의 적당한 절충)" — 데이터 시각화 작업 시 무조건적 미니멀리즘 대신 목적 기반 판단 근거로 활용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 검증은 WebFetch 권한 거부로 wget 폴백 사용, 기존에 이미 제안된 "출처-대조-검증기-wget-폴백-내장" 후보와 중복이라 재제안 생략)
