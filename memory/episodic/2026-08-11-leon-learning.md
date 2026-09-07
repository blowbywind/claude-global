---
date: 2026-08-11
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-11

WebFetch 권한이 이번 세션 내내 차단되어 추가 소스 재검증이 불가능했습니다(기존에도 반복된 권한 이슈, 별도 승인 필요 사항으로 하단에 기록). MDN 1건만 직접 fetch로 교차검증 완료했고, 나머지는 독립 검증 불가 항목은 폐기, 잘 알려진 확립된 사실만 보수적으로 유지했습니다.

## 오늘 배운 것
- `light-dark()` CSS 함수는 `<color>`뿐 아니라 `url()`/`image-set()`/`linear-gradient()` 등 이미지 값도 인자로 받아 `light-dark(url(아이콘-라이트.svg), url(아이콘-다크.svg))` 형태로 라이트/다크 아이콘 전환에 바로 활용 가능 — MDN 직접 fetch로 확인. 단, 리서치 원문의 "2026-05 Baseline 도달" 주장은 오류이며 실제로는 **2024년 5월부터 Baseline Newly Available**(사용 시 `:root { color-scheme: light dark; }` 선행 필요)
- Unsplash API(웹사이트 직접 이용과 별개) 사용 시 Unsplash·촬영자 프로필 링크 표기가 의무이며 미표기 시 API 접근이 차단될 수 있음 — 1단계 무료 이미지 소싱 워크플로에서 API 경유 시 반드시 준수
- W3C Design Tokens Community Group의 `$value`/`$type` 문법 관련 표준화 동향은 원문 페이지 fetch가 막혀 재검증 불가 — 다음 세션에서 재확인 필요(폐기하지 않고 보류)

## 출처
- [light-dark() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) — 직접 fetch로 url()/이미지 값 지원 및 Baseline 2024 확인
- [Unsplash API Terms](https://unsplash.com/api-terms) — 기존에 잘 알려진 확립된 정책(장기간 유효), 이번 세션 fetch로 재검증은 못했으나 기존 지식과 합치

## 위키화 후보
- `light-dark()` + `url()`/이미지 값 조합을 "아이콘 라이트/다크 전환" 신규 concept 노트로 등록(기존 `var(--icon-fg)` 다색 아이콘 원칙과는 별개 축 — 단색 아이콘 파일 전환용)

## 프로필 반영 후보 (저위험)
- 라이트/다크 단색 아이콘 자산은 `light-dark(url(...), url(...))`로 CSS 단에서 전환 가능함을 체크리스트에 참고 추가(단, Baseline 시점은 2024-05로 정정)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기-wget-폴백-내장 — 이번 턴도 WebFetch 권한이 전량 차단되어 W3C/Iconify/Pexels/Figma forum 등 5건 이상을 검증 없이 폐기함. wget 폴백을 내장한 검증 서브에이전트 도입을 사용자 확인 후 적용 검토 권장(반복 4회 이상 재발 확인됨: 07-16/07-22/07-29/08-11)
