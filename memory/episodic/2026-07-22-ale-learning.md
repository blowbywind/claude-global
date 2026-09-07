---
date: 2026-07-22
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-22

## 오늘 배운 것
- 데이터 시각화: 파이차트는 세그먼트 3개 초과 비교에 부적합, 슬라이드에 차트 대신 헤드라인 인사이트 + "so-what" 메시지를 직접 노출하는 방식이 유효
- 타이포그래피: 장식 그래픽 대신 굵고 확대된 가변(variable) 폰트로 위계·감정을 전달하는 "타이포그래피 주도형" 슬라이드 흐름 확인
- python-pptx 기본 템플릿(theme1.xml)에 `<a:clrScheme>`/`<a:fontScheme>`가 실제 존재 — 기존 "브랜드 일관성=theme.xml 레벨 고정" 원칙(2026-07-11)의 구체적 구현 지점으로 확정
- 대용량 이미지 포함 PPTX 발행 전 `compress-pptx`/`pptx-downsizer`(PNG/TIFF→JPEG 자동 압축, 투명 PNG 스킵) 같은 오픈소스 도구로 용량 최적화 검토 가능 — 단 도입은 라이브러리 추가라 사전 보고 필요

※ 이번 세션은 WebFetch/WebSearch/curl 모두 권한 차단으로 원문 재대조가 불가했습니다. 이에 따라 아래는 폐기 처리했습니다: moda.app의 "브랜드 일관성=매출 33% 증가" 수치(출처 신뢰도 낮은 구체적 통계, 환각 패턴 위험), slidegmm.ai 5대 프레임워크(무명 도메인, 기존 위키에 Minto/CTR/1-3-1 이미 축적돼 실익도 낮음), plusai.com Beautiful.ai vs Gamma 비교(경쟁 툴 마케팅성 콘텐츠). 색상 3~4색/서체 2종 제한, Minto/CTR/1-3-1 언급도 기존 위키(concepts/)와 중복돼 신규 학습에서 제외했습니다.

## 출처
- [Data Visualization Trends for Presentations](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Presentation Design Trends](https://elements.envato.com/learn/presentation-design-trends-ppt)
- [python-pptx theme.xml (공식 템플릿)](https://github.com/scanny/python-pptx/blob/master/src/pptx/templates/theme.xml)
- [compress-pptx](https://github.com/slhck/compress-pptx)
- [pptx-downsizer](https://github.com/scholer/pptx-downsizer/)

## 위키화 후보
- "파이차트 3세그먼트 제한 + so-what 메시지" 원칙을 기존 데이터 시각화 노트(assertion 계열)에 보강 항목으로 추가

## 프로필 반영 후보 (저위험)
- 어휘 추가: "가변(variable) 폰트 타이포그래피 주도형 슬라이드" — 트렌드 표현 강화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] pptx-이미지압축검토 — 이미지 다량 삽입 덱 발행 전 compress-pptx/pptx-downsizer 적용 여부 점검(라이브러리 실도입은 별도 사전 보고 필요, 이번엔 후보 제안만)
