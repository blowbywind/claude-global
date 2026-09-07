---
date: 2026-09-06
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-09-06

## 오늘 배운 것

교차검증 결과, 5개 인용 중 4개는 원문 대조로 사실 확인되었고 1개는 확인 불가로 폐기했습니다.

- **python-pptx 포크 2종 실재 확인**: `python-pptx-extended`(v1.2.0, 2026-05 첫 배포, upstream 1.0.2 기준 그림자·표 셀별 테두리·customXml 확장)와 `power-pptx`(핵심 가치제안 원문: "text doesn't overflow its container and shapes don't slide off the edges of the slide")는 PyPI 원문 대조로 사실 확인됨. 단, `power-pptx`는 실제로는 2026-04-29부터 존재(리서치의 "2026-07"보다 이른 시점) — 날짜 표현만 보정 필요.
- **⚠️ 기존 위키(`power.md`) 오류 발견**: 기존 노트는 "python-pptx-extended와 power-pptx 모두 원본과 동일한 `pptx` 모듈명을 사용해 동시 설치 불가"라고 기록했으나, 원문 확인 결과 `power-pptx`는 `power_pptx`로 임포트되어 원본과 모듈명이 다릅니다(동시 설치 충돌 없음). 도구 추천 시 이 정정이 실무에 직접 영향을 줌.
- **MS 365 Copilot PowerPoint Brand Kit 확장(2026-08)**: Copilot Premium+Windows 사용자 대상 Backstage 브랜드 템플릿 직접 접근 롤아웃(2026-08 초~말)이 원문 그대로 정확히 일치 확인됨.
- **데이터 스토리텔링 "narrative spine" 표현 정정 필요**: chatslide.ai 원문에는 narrative spine 개념과 "problem statement→evidence 수집→context to insight to action 전환" 흐름이 각각 존재하나, 리서치가 주장한 "problem → evidence → insight → action" 4단계 고정 공식은 원문에 그대로 명시돼 있지 않음(재구성된 표현). 정확한 어휘로만 반영.
- **Gamma "Gamma Agent"/Connectors 주장은 폐기**: gamma.app 해당 URL이 Cloudflare 봇 차단(403)으로 직접 대조 불가, 대체 검증도 확보하지 못해 원칙대로 버립니다. 기존 위키의 Gamma Imagine(TechCrunch 출처, 2026-03-17 확인됨) 서술은 그대로 유지.

## 출처
- [python-pptx-extended (PyPI)](https://pypi.org/project/python-pptx-extended/)
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/)
- [Narrative-First Slide Decks 2026 (ChatSlide)](https://www.chatslide.ai/articles/narrative-first-slide-decks)
- [Microsoft PowerPoint — Access organizations' brand templates](https://m365admin.handsontek.net/microsoft-powerpoint-access-organizations-brand-templates-powerpoint/)

## 위키화 후보
- `power.md` 정정: power-pptx 임포트 모듈명은 `power_pptx`(원본 `pptx`와 무충돌) — 기존 "동일 모듈명 충돌" 서술 삭제/수정

## 프로필 반영 후보 (저위험)
- 어휘: `python-pptx-extended`(그림자·표 셀별 테두리·customXml, 2026-05~) — 고급 서식 요구 시 대안 후보로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존에 제안된 출처-대조-검증기 계열과 중복)
