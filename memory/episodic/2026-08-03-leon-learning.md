---
date: 2026-08-03
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-03

## 오늘 배운 것
- SVGO 최신판 4.0.2 확인(GitHub 공식 릴리스 기준) — Node.js ≥16 요구, `VERSION` export 추가, `removeDeprecatedAttrs` 신규 플러그인(기본 비활성) 도입. 빌드 파이프라인 버전 점검 필요.
- CSS `d` 프로퍼티(path 트랜지션)는 MDN에서 직접 확인 결과 "Not Baseline"이며 Safari 미지원 — SVG path 애니메이션을 CSS만으로 구현 시 SMIL 또는 JS 폴백을 병행해야 함.
- 스톡 이미지 라이선스 재확인: Pexels는 API 포함 상업적 이용에 저작자 표시 불필요(공식 help center 기준, 가장 자유로운 조건). Unsplash는 단순 다운로드 사용은 표시 불필요하지만 **API로 연동**하면 API 이용약관상 저작자 표시가 별도로 요구됨(다운로드 사용과 조건 다름) — 다만 이 항목 출처는 1차(Unsplash 공식)가 아닌 3차 블로그라 신뢰도는 중간, 실제 API 연동 검토 시 unsplash.com 공식 API 가이드로 재확인 권장.
- Squoosh는 2023년 초 Google이 유지보수 중단 선언 후 현재까지 미유지, Sharp가 사실상 표준 이미지 최적화 엔진(Next.js `next/image` 내부 엔진)으로 자리잡음 — 신규 최적화 파이프라인에 Squoosh 도입 금지, Sharp 유지가 타당.

## 출처
- [SVGO v4.0.0 Release](https://github.com/svg/svgo/releases/tag/v4.0.0)
- [SVGO Migration v3→v4](https://svgo.dev/docs/migrations/migration-from-v3-to-v4/)
- [MDN — CSS `d` property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/d) (직접 fetch 검증 완료)
- [Pexels License FAQ](https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project)
- [Sharp vs Jimp vs Squoosh 2026](https://www.pkgpulse.com/guides/sharp-vs-jimp-vs-squoosh-2026)
- [Unsplash License Attribution (3차 출처, 재확인 권장)](https://www.licenseorg.com/blog/unsplash-license-attribution-required)

※ 검증 과정에서 다음 항목은 저신뢰 출처(개별 도구 마케팅 블로그·비공식 비교 사이트)이거나 미래 예측성 수치(JPEG XL Chrome 145 지원율 16%→85~90% 등)라 채택하지 않고 폐기: JPEG XL 2026년 하반기 활성화 세부 수치, Lucide/Tabler 아이콘 개수 비교(wmtips/devpick), Figma Config 2026 SVG export 노이즈 세부 주장(svgmaker.io).

## 위키화 후보
- 이미지 라이선스 소싱 체크리스트(Unsplash: 다운로드 vs API 연동 시 attribution 조건 차이, Pexels: 조건 없음) — 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 이미지 최적화 표준 도구를 Sharp로 명시(Squoosh 신규 도입 금지 명문화).
- SVG path 애니메이션 제작 시 CSS `d` 단독 의존 금지, SMIL/JS 폴백 체크리스트 항목 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 문제의식과 중복)
