---
date: 2026-08-03
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-03

## 오늘 배운 것

- **색맹 안전 차트 팔레트(정성 데이터)**: Wong/Okabe-Ito 팔레트(검정·주황#E69F00·하늘색#56B4E9·청록#009E73·노랑#F0E442·파랑#0072B2·버밀리언#D55E00·자주#CC79A7) — 2011년 Nature Methods 논문 기반의 확립된 표준. 기존 위키의 "색상 단독 구분 금지, 패턴 병행" 원칙보다 한 단계 더 구체적인 실무 헥스코드 기준으로, 인포그래픽/도넛차트 색상 지정 시 바로 적용 가능.
- **연속형(그라데이션) 데이터에는 Viridis** — 지각적 균일성 + 색맹 안전성이 검증된 팔레트. 매출 추이 히트맵, 지표 그라데이션 슬라이드에 적용.
- **WCAG 1.4.11 비텍스트 대비 3:1**은 기존 위키 노트(단독 SVG 아이콘 체크리스트)에 이미 반영돼 있음 — 신규 발견은 이 기준이 아이콘뿐 아니라 선그래프·파이 조각 등 "정보 전달용 그래픽 요소" 전반에 동일 적용된다는 범위 확인. 별도 신규 노트보다 기존 노트에 "차트 요소도 동일 적용" 한 줄 보강이 적절.
- **Aspose.Slides for Python 정정**: 원 리서치는 "오픈소스 대안"으로 기술했으나 실제로는 상용(유료 라이선스) 제품임 — python-pptx의 서버 사이드 대체 툴체인 옵션으로만 기록, "오픈소스" 표현은 폐기.
- **AI 프레젠테이션 툴 동향(참고용)**: Gamma는 스크롤형 웹카드 구조라 PPTX(고정 16:9) 내보내기 시 레이아웃 밀림 이슈가 있고, 브랜드 템플릿 엄격 고정이 필요하면 템플릿 락 방식인 Beautiful.ai가 더 안전 — 우리 산출물은 python-pptx 직접 생성이라 해당 없지만, 사용자가 이 툴들과 비교 문의 시 답변 근거로 유지.
- **python-pptx 관련 신규 패키지(power-pptx, python-pptx-extended) 주장은 폐기** — 버전(v2.10.0)·날짜가 과도하게 구체적이나 교차검증 불가(WebFetch 권한 미부여로 원문 확인 실패), 패키지 실재성이 의심스러워 채택하지 않음.

## 출처
- Wong, B. (2011) "Points of view: Color blindness" *Nature Methods* — 팔레트 원 출처(리서치 인용 rgblind.com은 2차 정리 자료)
- [WCAG 2.2 — Non-text Contrast](https://dequeuniversity.com/resources/wcag2.1/1.4.11-non-text-contrast) (기존 위키 노트와 동일 기준 재확인)
- Viridis 색맹 안전성: [Datylon — Data Visualization for Colorblind Readers](https://www.datylon.com/blog/data-visualization-for-colorblind-readers)
- [Aspose.Slides for Python](https://products.aspose.org/slides/python/) (상용 제품 — "오픈소스" 표현은 정정)

## 위키화 후보
- "[시각화 원칙] 색맹 안전 팔레트" 신규 노트 — Wong/Okabe-Ito 8색 헥스코드(정성) + Viridis(연속형) 실무 기준. 기존 "패턴 병행" 원칙 노트를 보완.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Wong/Okabe-Ito 팔레트", "Viridis(지각적 균일 팔레트)" — 색맹 안전 차트 설계 시 전문성 표현.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 인용 URL 실사실 대조는 이미 등록된 "출처-대조-검증기" 에이전트가 담당 가능, 신규 제안 불요)
