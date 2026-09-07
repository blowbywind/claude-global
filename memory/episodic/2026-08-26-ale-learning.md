---
date: 2026-08-26
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-26

## 오늘 배운 것

- **Google Slides Gemini(2026-06-30 업데이트) 검증 완료**: 슬라이드별 보조가 아니라 프롬프트 한 번으로 전체 덱을 초안 생성하고, 기존 덱을 스타일 레퍼런스로 첨부하면 톤·룩앤필을 매칭합니다. 원문 대조로 "whole deck", "style reference... matches its look and feel" 문구 직접 확인.
- **python-pptx 포크 생태계 재확인**: python-pptx-extended(v1.2.0), power-pptx(v2.12.0, "actively-maintained fork")가 PyPI에 실재함을 API로 직접 확인 — 단 이는 2026-08-01에 이미 프로필 어휘로 반영된 사실이라 신규 아님.
- **다음 항목은 원문 대조 결과 근거 부족·오귀속으로 폐기**: ①Canva "로고만으로 브랜드 컬러 자동 추출/Magic Charts/Canva Sheets" — 원문은 오히려 "hex 코드 직접 입력" 등 수동 설정을 명시해 주장과 상충. ②Figma Slides Config 2026(섹션·Presenter/Audience View·비디오 스크러빙) — 인용된 두 출처 모두 해당 기능 언급 없음(네비게이션 메뉴 항목 매칭 오인으로 추정). ③"1-3-1"/"Context-Tension-Resolution" 프레임워크 — 이미 2026-07-13 위키 노트로 승격돼 있어 신규 아님(리서치가 기존 위키를 놓침). ④"축소(subtraction) 기반 스토리텔링" — 2026-08-24 draft로 이미 존재, 중복.
- **복잡 차트 접근성(텍스트요약+데이터테이블 병행)**: 출처(a11y-collective) 사이트가 Cloudflare 403으로 원문 대조 불가했으나, 이미 2026-07-30에 프로필에 동일 내용으로 반영된 항목이라 신규성 없음(검증 실패와 무관하게 폐기 대상).

## 출처
- [Google Workspace Gemini in Slides 업데이트](https://cloudfresh.com/en/news/google-workspace-editable-presentations-gemini-slides/) — 원문 대조 검증 완료
- [python-pptx-extended (PyPI)](https://pypi.org/project/python-pptx-extended/) — PyPI API 직접 조회로 존재·버전 확인
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/) — 동일 방식 확인

## 위키화 후보
- 기존 노트 `ai-프레젠테이션-도구-지형-갱신`(2026-08-04, Gamma/Beautiful.ai/Tome/python-pptx 다룸)에 "Google Slides Gemini 2026-06-30: 원샷 전체 덱 생성 + 스타일 레퍼런스 매칭" 항목만 보강(신규 노트 불필요, 해당 노트에 Google Slides 언급 없음 확인).

## 프로필 반영 후보 (저위험)
- 없음(신규 검증 항목이 얇아 저위험 어휘 추가 보류)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 검증에서 WebFetch 권한 거부 재발 및 리서치 산출물의 출처 대조 실패율(7건 중 4건 폐기)이 재확인됨. 다만 관련 서브에이전트 후보(출처-대조-검증기류)는 이미 목록에 존재해 중복 제안하지 않음)
