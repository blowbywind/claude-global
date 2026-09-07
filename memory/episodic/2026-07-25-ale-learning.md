---
date: 2026-07-25
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-25

## 오늘 배운 것
- **Assertion-Evidence 슬라이드 구조**(메시지형 헤드라인+시각적 증거+구두 설명)는 공학전공생 대상 실증 연구로 이해도 향상·인지부하 감소가 확인된 검증된 기법 — assertion-evidence.org 원문("The assertion-evidence approach leads to increased audience comprehension")과 PSU 논문 페이지(comprehension/cognitive load/engineering/110 키워드) 교차 확인 완료.
- **theme.xml 멀티 브랜드 테마 관리**: 여러 컬러 테마를 한 템플릿에 담으려면 각 theme#.xml의 clrScheme을 다른 theme 파일의 `extraClrScheme` 태그에 복사해 사용자가 전환 가능하게 구성 — 원문에서 `extraClrScheme` 실제 등장 확인.
- **데이터 시각화 접근성 2단계(two-tiered) 패턴**: 차트 요소에 "유형+핵심 결론" 짧은 alt-text + 상세 데이터 표/텍스트 요약 병행, 범례보다 데이터 라벨을 요소에 직접 배치 — 원문에서 two-tiered/alt-text/data label/legend 키워드 확인.
- **PowerPoint Copilot 온브랜드 생성 트렌드**: 조직 Brand Kit(로고/컬러/폰트) 준수 생성 기능 확인(techcommunity 문서에 "Brand Kit" 실존). 단, "GPT-5.6"이라는 버전명은 기사 제목에만 등장하고 본문에서 DALL-E/Flux 선택 등 세부는 원문에서 재확인 못함 — 세부 스펙은 보류, 큰 방향(브랜드킷 기반 온브랜드 생성)만 채택.

## 검증 중 폐기한 항목
- **python-pptx-extended 포크 패키지**: PyPI 페이지가 봇 차단(Client Challenge)만 반환해 실제 존재·기능(그림자/customXml 등)을 확인 불가 — 채택하지 않음.
- **theme.xml 폰트세트 이름=컬러 팔레트 이름 동일화→드리프트 즉시감지** 팁: brandwares 원문에는 "폰트 테마를 클라이언트명 또는 포함 폰트명으로 명명하라"는 일반 관행만 있고, "이름 불일치로 드리프트 감지"라는 구체 메커니즘은 원문에 없음(에일의 추론 가미) — 특정 메커니즘 문구는 폐기.

## 출처
- [Assertion-Evidence Presentations](https://www.assertion-evidence.org/)
- [How the design of presentation slides affects audience comprehension (PSU)](https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/)
- [Multiple Color Themes, One Template (Brandwares)](https://www.brandwares.com/bestpractices/2016/10/multiple-color-themes-one-template/)
- [Accessible Data Visualization Guide for Diverse Audiences 2026](https://inclusionresearch.org/accessible-data-visualization-for-diverse-audiences-2026-guide)
- [PowerPoint Edit with Copilot – Brand Kit and Image Gen Overview (Microsoft Tech Community)](https://techcommunity.microsoft.com/blog/drivingadoptionblog/powerpoint-edit-with-copilot-brand-kit-and-image-gen-overview--demo--march-2026-/4505685)

## 위키화 후보
- `presentation-design-principles.md`에 Assertion-Evidence 실증 근거(PSU 110명 연구) 출처 보강
- 신규 노트: "theme.xml extraClrScheme — 템플릿 내 멀티 브랜드 컬러테마 전환"

## 프로필 반영 후보 (저위험)
- 어휘 추가: "extraClrScheme 멀티 테마 관리", "two-tiered(2단계) alt-text 접근성 패턴"

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 세션 검증에 활용한 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재하므로 신규 제안 없음)
