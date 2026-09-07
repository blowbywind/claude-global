---
date: 2026-07-30
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-30

## 오늘 배운 것
- dotLottie(.lottie): 여러 애니메이션·에셋·테마·상태머신을 압축된 단일 파일로 묶어 재생하는 Lottie 프로덕션 포맷임을 공식 소개 페이지에서 직접 확인. 단 "기존 JSON 대비 최대 10배 압축", "월 300만+ 다운로드" 등 구체 수치는 해당 출처에 없어 제외(과장 가능성).
- SVG 2 명세는 원문 대조 결과 2025-09-14자 W3C **Editor's Draft**로 확인(정식 권고안 아님). `d` 모핑 등 SVG2 신규 기능을 전제로 설계할 때 브라우저 지원 격차를 항상 가정해야 함.
- APCA 대비 기준: 공식 문서에서 "Lc 15=다수 사용자에게 사실상 비가시점", "Lc 90=본문 텍스트 권장치"를 문구 그대로 확인. WCAG3 정식 채택 전이므로 브랜드 컬러 대비 검토 시 WCAG 2 비율의 보조 참고 지표로만 사용.
- CSS `content-visibility: auto`는 화면 밖 콘텐츠의 스타일·레이아웃·페인트를 지연시켜 초기 렌더링을 개선하는 메커니즘 자체는 원문에서 확인. 단 "45% 개선", "접근성 트리 유지"라는 구체 단정은 해당 출처에 없음(원문은 "접근성에 영향 있으니 별도 확인 필요"라고만 언급) — 수치·단정 주장은 폐기.
- [정정] 07-24 프로필 노트 "Squoosh 빌드타임 유지" 관련: 이번에 인용된 fastcompressor.com 출처를 직접 대조했으나 "Squoosh 폐기/유지보수 중단" 주장은 해당 글에 없음(경쟁 제품 홍보성 비교글로 "배치처리 미지원" 등 한계만 서술). 근거 불충분으로 이 주장은 폐기 — 기존 프로필 노트에 각주 추가 불필요, 그대로 유지.

## 출처
- [dotLottie — Intro](https://dotlottie.io/intro/)
- [SVG 2 (W3C Editor's Draft, 2025-09-14)](https://svgwg.org/svg2-draft/)
- [APCA in a Nutshell](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell.html)
- [content-visibility: the CSS performance API (DebugBear)](https://www.debugbear.com/blog/content-visibility-api)

## 위키화 후보
- `content-visibility: auto` — 대량 이미지/카드 리스트 렌더링 최적화 메커니즘, 신규 개념 노트 가치 있음.
- APCA `Lc` 임계치(15=비가시, 90=본문 권장) — 색상 대비 검토 시 WCAG2 보완 참고 지표로 개념 노트화 가치.

## 프로필 반영 후보 (저위험)
- dotLottie(.lottie) 포맷 — 애니메이션 아이콘 필요 시 단일 상태머신 번들 옵션으로 인지(수치 근거 없는 성능 주장은 배제).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
