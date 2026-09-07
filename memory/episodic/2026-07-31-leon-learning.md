---
date: 2026-07-31
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-31

## 오늘 배운 것
- CSS `@starting-style` + `transition-behavior: allow-discrete`로 `display:none` 전환 시에도 아이콘·팝오버 등장/퇴장 애니메이션을 JS `setTimeout` 없이 구현 가능(Chrome/Edge 117+, Safari 17.5+, Firefox 129+, 지원율 약 85~90%) — 신규 확인, 기존 아이콘 모핑 노트와 별개의 새 인터랙션 기법.
- WCAG 2.2 SC 2.5.8(타깃 크기) 기준 인터랙티브 아이콘·버튼의 최소 크기는 24×24px — 기존 아이콘 접근성 체크리스트(대비 3:1/4.5:1, SC 1.4.11)에 빠져 있던 별개 조항으로 보강 가치 있음.
- SVG 접근명 부여 시 `<title>` 단독 의존은 스크린리더 지원이 일관되지 않아 지양, `aria-label`/`aria-labelledby` 병행이 더 안전 — 기존 `role="img"+<title>+aria-labelledby` 체크리스트에 "title 단독 신뢰 금지" 단서로 보강할 만함.
- Recraft V4가 벤더 측 주장으로 래스터→벡터 변환이 아닌 실제 SVG 직접 생성을 지원한다고 하나, 출처가 특정 블로그 2곳뿐이고 "80%까지만 작업" 등 수치는 이번 턴에 URL 실접속 검증이 안 됨(권한 문제, 아래 참고) — 사실로 확정하지 않고 후속 검증 대상으로만 인지.
- (교차검증 결과) JPEG XL Chrome 재탑재, AVIF/WebP 이중 포맷, SVG 대비 3:1 조항, DTCG 2025-10 표준화, Figma Vectorize 97% 정확도 항목은 신규 사실이 아니라 이미 위키에 기록된 내용(07-18/07-25/07-27/07-28)과 중복이거나(JPEG XL·AVIF·대비), 출처 신뢰도 문제로 폐기(Figma 97%·DTCG — 서로 무관한 두 주장이 동일 출처 1건(atomize.tools)에서만 확인돼 근거 부족 판단, 폐기).

## 출처
- [CSS Entry/Exit Animations — Chrome Developers](https://developer.chrome.com/blog/entry-exit-animations)
- [CSS @starting-style Guide](https://devtoolbox.dedyn.io/blog/css-starting-style-guide)
- [Icon Accessibility Guidelines](https://10web.io/blog/icon-accessibility-guidelines/)
- [SVG Accessibility — A11y Collective](https://www.a11y-collective.com/blog/svg-accessibility/)

## 위키화 후보
- CSS `@starting-style`/`allow-discrete` 기반 아이콘·팝오버 등장/퇴장 애니메이션 — 신규 개념 노트 가치 있음.
- Recraft V4 text-to-SVG 생성 주장 — 신뢰도 낮은 출처 2건뿐이라 등재 보류, 별도 세션에서 재검증 후 판단.

## 프로필 반영 후보 (저위험)
- 기존 SVG 접근성 체크리스트에 "`<title>` 단독 의존 금지, `aria-label` 병행" 단서 추가.
- WCAG 2.5.8 타깃 크기(24×24px 최소) 항목을 아이콘 체크리스트에 별도 조항으로 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- 이번 세션에서도 인용 URL 실검증이 Bash/WebFetch/WebSearch 권한 전부 거부로 불가능했습니다(2026-07-16/22/29에 이어 재발). 기존 후보 "리서치-검증-권한-정합기"(권한 통일 점검) 우선순위를 높여달라는 요청으로 재확인 부탁드립니다 — 신규 제안 아님, 기존 건 재상신.
