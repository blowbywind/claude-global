---
date: 2026-08-08
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-08

## 검증 결과 요약

리서치 7건 중 3건은 기존 위키(아이콘 라이브러리 비교표, Sharp/Squoosh 정책, SVGO 4.0.2, AVIF/JPEG XL 노트)와 이미 중복 확인된 내용이라 제외했습니다. **직접 재검증**(WebFetch 실패 → wget으로 원문·npm 레지스트리 대조)을 거쳐 신규 사실만 아래에 반영합니다.

- Lucide v1.0 기사(InfoQ) 본문 대조 → "1,600개+ 아이콘, 브랜드 로고 전체 제거(상표권 압박), Simple Icons로 안내" 문구 원문 확인. ✅ 채택
- `@squoosh/cli` npm 레지스트리 직접 조회 → 최신판 0.7.3, 마지막 배포 2023-01-03 확인(3년+ 무업데이트). ✅ 채택(기존 "Squoosh 신규 도입 금지" 정책과 정합)
- Jpegli 32% 비트레이트 절감 주장 → mochify.app 원문에서 "2.8bpp vs 3.7bpp, 32%/35% 개선" 문구 확인했으나 2차 매체(비공식 블로그) 출처라 신뢰도 중간으로 표기. △ 조건부 채택
- SVGO/CSS `if()`/AVIF·JPEG XL 커버리지 항목은 기존 위키 노트와 100% 일치하는 재확인이라 신규 학습에서 제외.

---

## 오늘 배운 것
- Lucide 아이콘 라이브러리가 v1.0(2026-06) 정식 출시: 상표권 문제로 GitHub·Facebook·Figma·Slack 등 브랜드 로고 아이콘을 전량 제거하고, 1,600개+ 규모로 확장. 로고 아이콘이 필요하면 Simple Icons를 대신 안내하는 방침으로 전환됨 — 기존 위키 "Lucide ~1,500개" 표기 갱신 필요.
- `@squoosh/cli`/`@squoosh/lib` npm 패키지는 최신판 0.7.3(2023-01-03 배포 후 업데이트 없음)로 사실상 비유지보수 상태 확인. 웹앱 squoosh.app 자체는 별개로 운영 중이므로, "Squoosh=코덱 실험용 웹앱만, CLI/lib 패키지는 신규 파이프라인 도입 금지" 원칙을 더 명확히 구분해 기록할 가치 있음.
- Jpegli 인코더는 libjpeg-turbo 대비 동일 화질 기준 약 32%(2.8bpp≈3.7bpp) 비트레이트 절감 주장 확인(단, 2차 매체 출처라 신뢰도는 보통 — AVIF/WebP 미지원 레거시 폴백 시 JPEG 품질 개선 옵션 후보로만 참고).

## 출처
- [Lucide Releases Version 1.0, Removing Brand Icons and Cutting Bundle Size — InfoQ](https://www.infoq.com/news/2026/06/lucide-v1-icons/)
- [@squoosh/cli — npm registry](https://registry.npmjs.org/@squoosh/cli) (직접 조회, dist-tags.latest=0.7.3, 배포일 2023-01-03)
- [JPEG in 2026: Jpegli — mochify.app](https://mochify.app/guides/jpeg-in-2026-jpegli)

## 위키화 후보
- Lucide 아이콘 라이브러리 노트에 "v1.0(2026-06), 1,600개+, 브랜드 로고 제거→Simple Icons 안내" 갱신

## 프로필 반영 후보 (저위험)
- 아이콘 라이브러리 비교표 수치 Lucide "~1,500개"→"1,600개+(v1.0, 브랜드 로고 제외)"로 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
