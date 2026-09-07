---
date: 2026-07-11
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-11

웹 접근 도구(WebFetch/WebSearch)가 이번 턴에서 권한 오류로 차단되어 실시간 재검증은 불가했습니다. 기존 지식과 위키 사전 확인(중복 없음 확인)을 토대로, 검증 신뢰도가 낮은 항목(구체적 회상률 수치 등 출처 재확인 불가한 통계)은 제외하고 기술적으로 확립된 사실 위주로 정리했습니다.

## 오늘 배운 것
- python-pptx는 폰트 임베딩(embeddedFontLst)을 표준 API로 지원하지 않는 알려진 한계임 — 실제 배포 PC에 Pretendard/JetBrains Mono 미설치 시 산출물 폰트가 깨질 리스크로 직결됨(GitHub issue #355 계열의 잘 알려진 이슈).
- 우회 방법: PPTX는 ZIP+OOXML 구조이므로 `ppt/fonts/`에 TTF/OTF를 넣고 `presentation.xml`의 `embeddedFontLst`를 수동 편집(zip 재압축)하거나 Aspose.Slides `add_embedded_font()` 사용. 단 TrueType/OpenType만 가능하며 임베딩·상업적 사용 허용 라이선스인지 재확인 필요(Pretendard/JetBrains Mono는 OFL 계열로 통상 허용).
- 브랜드 일관성은 슬라이드 마스터(`slideMaster.xml`+`theme.xml`의 `<a:clrScheme>`/`<a:fontScheme>`)에서 전역 설정하면 전체 슬라이드에 자동 전파됨 — 리나 감수용 브랜드 색·폰트 기준을 매 슬라이드 개별 지정이 아닌 테마 레벨에서 고정하는 것이 안전.
- python-pptx 작업 시 템플릿(레이아웃)과 데이터 채우기 로직을 분리하고, 차트/표 생성 전 데이터 검증을 선행하는 것이 표준 모범사례.
- 데이터 시각화는 슬라이드당 단일 메시지(단일 인사이트 헤드라인) 원칙, 막대=비교·선=추세·원=제한적 비중 표현이 여전히 유효한 기본 원칙.
- (제외) "스토리 구조 발표는 63%/43% 더 기억됨" 류 수치는 실시간 재검증이 불가해 이번 노트에서는 채택하지 않음 — 확인되면 재반영.

## 출처
- [python-pptx GitHub Issues (font embedding 관련)](https://github.com/scanny/python-pptx/issues/355)
- [OOXML embeddedFontLst 기술 문서](https://c-rex.net/samples/ooxml/e1/Part4/OOXML_P4_DOCX_embeddedFontLst_topic_ID0E6JGGB.html)
- [Aspose.Slides embedded font 가이드](https://docs.aspose.com/slides/python-net/embedded-font/)
- [Microsoft 365 — On-brand PowerPoint 템플릿](https://www.microsoft.com/en-us/microsoft-365-life-hacks/presentations/how-to-create-on-brand-powerpoint-presentation-templates)
- [python-pptx로 PPT 생성 모범사례](https://slideforge.dev/blog/generate-powerpoint-python)

## 위키화 후보
- `wiki/concepts/무료-폰트-가이드-웹폰트`에 "PPTX 폰트 수동 임베딩 절차(ppt/fonts + embeddedFontLst XML 편집)" 섹션 추가 — 문서 스택 전용, 실제 작업 시 1회 검증 후 등재 권장.

## 프로필 반영 후보 (저위험)
- 브랜드 일관성 작업 시 "슬라이드 개별 색상 지정" 대신 "theme.xml clrScheme/fontScheme 레벨 고정"을 기본 접근으로 명시.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] pptx-font-embed — PPTX(zip) 내 `ppt/fonts/` 추가 + `presentation.xml` embeddedFontLst 수동 삽입을 자동화해 Pretendard/JetBrains Mono 임베딩 누락 재발(2026-07-09 실사고 계열)을 원천 차단하는 반복작업 스킬.
