---
date: 2026-08-13
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-13

## 오늘 배운 것
- **Minto Pyramid Principle**: "결론 → 핵심논거 3개 → 근거"의 하향식 구조. 사고과정을 순차 설명하는 방식 대신 임원급 청중에게 결론을 먼저 제시하는 구조로, 스토리텔링 설계 시 적용 가능.
- **전주의적 속성(preattentive attributes)**: 색·크기·형태·위치는 노출 후 약 200ms 내 무의식적으로 처리되는 시각 신호(Colin Ware 4범주: form/color/position/motion). 슬라이드 시각적 위계·강조 설계에 근거로 활용.
- **데이터-잉크 비율(data-ink ratio, Tufte)**: 그래픽 전체 잉크 중 실제 데이터 표현 잉크 비중을 최대화하고 비-데이터 잉크·중복 데이터 잉크를 제거 — 기존에 반영된 "차트정크 제거" 어휘의 이론적 근거.
- **PowerPoint Reading Order Pane**: 검토 탭 → 접근성 검사에서 열리며 객체를 드래그해 스크린리더 읽기 순서를 조정. 단 PowerPoint **웹 버전에는 이 패널이 없어 선택 창(Selection Pane)으로 대체**해야 함 — 기존 "읽기 순서 검증" 어휘의 실무 절차 보강.
- **문서 생성 툴체인 선택 기준**: python-pptx/PptxGenJS(좌표기반, 편집 가능한 실제 .pptx) vs Marp(마크다운 기반, PPTX 내보내기는 편집 불가) — "정답"은 없고 산출물 형태(핸드오프용 실 pptx vs 웹 링크 vs Git 추적용 텍스트)에 따라 선택.

※ "python-pptx 유지보수 중단·power-pptx 대체 포크" 주장은 이번 세션에서 검증 시도(WebFetch 권한 거부 + wget도 대상 사이트의 봇 차단(Client Challenge)으로 실패)했으나 원문 대조에 실패해 **폐기**했습니다. 기존 위키 노트("python-pptx 안정성") 정정은 보류 권장합니다.

## 출처
- [Pyramid Principle for Presentations](https://winningpresentations.com/pyramid-principle-presentations/)
- [Preattentive Attributes of Visual Perception](https://uxdesign.cc/preattentive-attributes-of-visual-perception-and-their-application-to-data-visualizations-7b0fb50e1375)
- [Tufte's Principles of Data-Ink](https://jtr13.github.io/cc19/tuftes-principles-of-data-ink.html)
- [Make slides easier to read by using the Reading Order Pane](https://support.microsoft.com/en-us/powerpoint/make-slides-easier-to-read-by-using-the-reading-order-pane)

## 위키화 후보
- "Minto Pyramid Principle(결론 우선 하향식 구조)" — 스토리텔링 구조 노트 신설 가치 있음.
- power-pptx 관련 클레임은 검증 실패로 폐기 — 기존 "python-pptx 안정성" 노트 정정 보류.

## 프로필 반영 후보 (저위험)
- "전주의적 속성(preattentive attributes)" 용어 및 "Reading Order Pane 웹버전 미지원 → Selection Pane 대체" 실무 팁, 전문성 표현에 반영.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 제안된 "출처-대조-검증기(wget 폴백)" 계열이 이번에도 유효성 재확인됨: wget 폴백조차 Cloudflare Client Challenge로 막혀, WebFetch 권한 문제와 별개로 원천 검증 채널 자체가 취약함이 추가 확인됨. 신규 제안 아님, 기존 후보 강화 근거로만 기록.)
