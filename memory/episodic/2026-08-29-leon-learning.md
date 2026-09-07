---
date: 2026-08-29
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-29

## 오늘 배운 것
- ThumbHash는 BlurHash와 달리 알파 채널(투명도)을 지원 — 투명 배경이 필요한 UI 아이콘/배지 플레이스홀더 생성에 적합 (검증: DatoCMS 공식 발표 + evanw 공식 구현 페이지 직접 확인)
- Iconify가 2026-07-10 기준 오픈소스 아이콘 30만 개 돌파 발표 (검증: iconify.design/news/2026.html 원문 확인)
- Iconify 아이콘 사이트가 2026-05-14 전면 개편 — 무한스크롤 폐지→페이지네이션 전환, 다중 아이콘 선택 후 번들/스프라이트 생성하는 코드 생성기 신설 (검증 완료)
- Iconify SVG+CSS 컴포넌트(Vue/Svelte/React/SolidJS)에 2026-04-30부터 CSS 커스텀 프로퍼티(`--svg-color--*`, `--svg-stroke-width--*`, `--svg-opacity--*`) 지원 추가 — 아이콘 SVG 원본을 건드리지 않고 CSS만으로 색상·스트로크·투명도 오버라이드 가능 (검증 완료)
- Iconify SolidJS용 SVG+CSS 컴포넌트가 2026-03-06 신규 출시, 아이콘셋당 200개+ 패키지 제공 (검증 완료)

※ 원 리서치의 "pngquant→oxipng 순차 파이프라인이 단독보다 우수" 주장은 원문(ryangreenberg.com)이 두 도구를 각각 단독 테스트한 사례일 뿐 순차 체이닝 실험이 아니어서 폐기. "Safari가 SVG favicon 내 embedded CSS 다크모드 미적용" 주장은 출처 하나(owenconti.com)가 404, 나머지(catalin.red)엔 Safari 관련 언급이 없어 미검증으로 폐기.

## 출처
- [Introducing ThumbHash - The Compact Placeholder with Alpha Support](https://www.datocms.com/blog/introducing-thumbhash-the-compact-placeholder-with-alpha-support)
- [ThumbHash 공식 데모/구현](https://evanw.github.io/thumbhash/)
- [Iconify Updates 2026](https://iconify.design/news/2026.html)

## 위키화 후보
- 기존 "아이콘셋 후보(Iconify/Tabler)" 노트에 2026년 업데이트(30만 개 돌파, CSS 변수 커스터마이징, SolidJS 컴포넌트) 반영 갱신

## 프로필 반영 후보 (저위험)
- 이미지 최적화 체크리스트에 "ThumbHash=알파 채널 필요 시(아이콘·배지), BlurHash=사진 플레이스홀더" 구분 기준 추가
- 다색 아이콘 자산 처리 시 Iconify CSS 커스텀 프로퍼티(`--svg-color--*` 등) 기법을 클리핑/변형 체크리스트 항목에 병기

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)
