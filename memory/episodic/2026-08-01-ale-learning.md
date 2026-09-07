---
date: 2026-08-01
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-01

## 오늘 배운 것
- python-pptx 포크 생태계 확산 확인: `python-pptx-extended`(v1.2.0, 2026-05-05, 그림자·글머리·표 테두리·customXml)와 `power-pptx`(v2.10.0, 2026-07-12)를 PyPI JSON API로 직접 조회해 버전·배포일·기능 설명 모두 일치 확인. 단 두 패키지 모두 `pptx` 모듈명을 그대로 써서 원본 python-pptx와 같은 가상환경 공존 불가(도입 시 완전 대체 여부 사전 판단 필요).
- Pandoc PPTX writer 폰트 임베딩 버그(GitHub #11492, 2026-02-27, closed)를 API로 직접 확인: `reference.pptx`의 임베딩 폰트가 `[Content_Types].xml`에 `.fntdata` 콘텐츠 타입으로 등록되지 않아 PowerPoint가 파일을 손상 처리. python-pptx뿐 아니라 대체 툴체인도 폰트 임베딩이 실무적으로 불안정하다는 근거 보강됨 — 기존 "발행 전 폰트 미임베딩 체크리스트"에 힘을 실어주는 사례.
- MS 365 Copilot Brand Kit: support.microsoft.com 페이지에서 "Brand kit을 PowerPoint에서 선택해 Copilot 생성 콘텐츠에 즉시 반영, 로고·색상·타이포그래피 포함" 문구 직접 확인. (techcommunity 링크는 이미 위키 `presentation.md`에 기록되어 있어 신규 아님, support 페이지 보강만 신규.)
- 2026 데이터 시각화 트렌드: beautiful.ai 블로그에서 "차트 자체보다 헤드라인 인사이트를 슬라이드에 직접 배치, 시각적 노이즈 최소화" 문구 확인 — 단 리서치 원문의 "도넛·생키 차트 확산" 서술은 해당 출처에서 확인되지 않아 제외.
- ADA Title II 관련 Baruch College 가이던스 문서(PDF) 존재·내용 확인: WCAG 2.1 AA, PowerPoint 포함 디지털 문서 범위 명시. 단 리서치 원문의 "시행일 2026-04-24 확정"은 이 PDF 텍스트에서 직접 확인되지 않음(문서에 날짜 기재 없음) — 별도 1차 출처(DOJ 최종규칙) 확인 전까지 날짜는 보류.

## 검증 후 폐기한 항목
- storydoc.com 통계(마지막 슬라이드 도달률 17.5%→65%): 해당 URL 본문을 직접 fetch했으나 해당 수치·"DocSend" 언급 자체가 없음 → 폐기.
- storyisthestrategy.com "Mountain Structure"/"Setup-Stakes-Shift-Stake-out" 프레임워크: 사이트가 Cloudflare 403으로 접근 차단되어 근거 확인 불가 → 폐기.
- Sankey 다이어그램 "컬럼당 노드 10~12개 초과 시 가독성 붕괴", "PowerPoint 네이티브 기능 없음" 구체 수치: slidemodel.com 본문에서 해당 서술 미확인 → 구체 수치는 폐기, Sankey 개념 자체(노드/플로우, 막대그래프 대비 용도)만 유지.

## 출처
- [python-pptx-extended PyPI](https://pypi.org/pypi/python-pptx-extended/json)
- [power-pptx PyPI](https://pypi.org/pypi/power-pptx/json)
- [Pandoc GitHub Issue #11492](https://github.com/jgm/pandoc/issues/11492)
- [MS 365 Copilot Brand Kit 지원 문서](https://support.microsoft.com/en-us/microsoft-365-copilot/create-and-manage-official-brand-kits-in-the-microsoft-365-copilot-app)
- [beautiful.ai: 2026 Data Visualization Trends](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Baruch College ADA Title II WCAG 2.1 Guidance (2026-02)](https://studentaffairs.baruch.cuny.edu/wp-content/uploads/sites/6/2026/03/Cross-College-ADA-TitleII-WCAG-Guidance-Feb2026.pdf)

## 위키화 후보
- Pandoc PPTX 폰트 임베딩 버그(fntdata/Content_Types.xml) — `presentation.md`의 "발행 전 폰트 미임베딩 게이트" 근거 보강용 신규 노트(위키 미기재 확인).
- `power-pptx` 포크(2.10.0) — `python.md`에 이미 초안된 `python-pptx-extended`와 나란히 "python-pptx 대체 포크 2종" 절로 통합.

## 프로필 반영 후보 (저위험)
- 어휘: "python-pptx 포크 생태계(power-pptx/python-pptx-extended)" — 대체 툴체인 논의 시 정확도 있는 표현으로 사용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 카탈로그의 "출처-대조-검증기" 제안이 이번 세션 수동 검증(9건 중 2건 폐기, 1건 부분수정)으로 재차 유효성 입증됨. 신규 제안 대신 기존 제안 채택을 권고.)
