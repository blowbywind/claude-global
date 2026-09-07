---
date: 2026-07-27
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-27

## 오늘 배운 것
- **Figma "Vectorize" 기능이 2026년 2월 정식 출시** 확인(recraft.ai 원문 대조) — 캔버스의 래스터 이미지를 원클릭으로 컬러/그레이스케일/흑백 벡터로 변환. Figma Professional 이상 플랜 + AI 크레딧 소모, 단방향(래스터→벡터)만 가능, 프롬프트 생성 불가. 일러스트 소스 확보 시 신규 후보 도구로 인지.
- **JPEG XL은 Chrome 145(2026-02)부터 플래그 뒤에서 디코딩만 지원**(기본 비활성 유지), Safari만 네이티브 지원해 전역 커버리지 약 **20~25%**(원 리서치의 "16%"는 원문 재대조 결과 오기 — 정정. 기본 활성화 시 85~90%로 전망). 지원율이 아직 낮아 "AVIF+WebP 폴백 유지" 기존 방침은 여전히 유효.
- **View Transitions API로 동일 `view-transition-name` 요소 간 형태·위치 자동 보간**(아이콘 모핑 등) 가능. caniuse 실측 대조 결과 지원 버전은 Chrome/Edge 111+, Safari 18+, **Firefox 144+**(원 리서치의 "Firefox 129"는 오기 — 정정).
- **Figma Variables → 디자인 토큰(CSS/SASS/JSON) 내보내기**는 공식 Figma Help Center 문서로 확인된 성숙 기능. 아이콘 컬러 토큰 감사·네이밍 체계화에 활용 가능.
- (참고·저신뢰) AI 래스터→벡터 도구(Vectorizer.AI, Recraft) 및 "인라인 SVG 컴포넌트가 sprite 대체 추세"는 단일 벤더 블로그 출처로 교차검증 미완료 — 참고 수준으로만 인지, 프로필 반영 보류.

**폐기 항목**: "`light-dark()`로 SVG 인라인 fill 다크모드 전환" 주장 — 인용된 hidde.blog 원문을 직접 대조한 결과 해당 글에 `light-dark` 언급 자체가 없어 근거 없음. 이번 학습 결과에서 제외.

## 출처
- [Figma Vectorize 출시(2026-02) — Best Image Vectorizers](https://www.recraft.ai/blog/best-image-vectorizers)
- [JPEG XL Is Back in Chrome (2026)](https://www.photoformatlab.com/blog/jpeg-xl-chrome-browser-support-2026)
- [View Transition API — caniuse](https://caniuse.com/mdn-api_document_startviewtransition)
- [View Transition API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [Figma: Tokens, variables, and styles](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles)

## 위키화 후보
- Figma Vectorize vs AI 벡터화 도구(Vectorizer.AI/Recraft) 비교 — 일러스트 소스 확보 워크플로 개념 노트
- View Transitions API 기반 아이콘 모핑 — 인터랙션 디자인 개념 노트

## 프로필 반영 후보 (저위험)
- Figma Vectorize를 일러스트 소스 확보 2단계(창작 이미지 필요 시) 후보 도구로 인지
- View Transitions API 아이콘 모핑을 향후 인터랙션 아이디어로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처-대조-검증기 에이전트가 이미 카탈로그에 존재, 이번 검증에서 실효성 재확인됨: 9건 중 2건 오류 발견)
