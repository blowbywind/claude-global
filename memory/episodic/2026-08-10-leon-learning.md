---
date: 2026-08-10
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-10

## 오늘 배운 것

- **SVG 아이콘 전달 이원화 전략**: 크리티컬(above-the-fold) 아이콘은 인라인 SVG로, 반복 사용되는 아이콘은 외부 `<symbol>`+`<use>` 스프라이트로 분리해 브라우저 캐싱 이점을 살리는 방식이 권장됨(기존 "50개 미만 인라인/100개 초과 sprite" 임계치 노트를 보강하는 세부 전략).
- **LCP 이미지 최적화**: `srcset`+`sizes`로 반응형 크기 선택, `<picture>`+`<source>`로 AVIF/WebP 폴백 구성에 더해, **LCP 대상 이미지에는 `fetchpriority="high"` 부여**가 성능 개선에 가장 크게 기여(기존 srcset 초안 노트에 없던 신규 디테일).
- **무료 스톡 이미지 라이선스 정정 사항**: Unsplash/Pexels 등 무료 티어는 배상 보장(indemnification)이 없어 저작권 분쟁 시 이용자가 법적 리스크를 전적으로 부담하며, "경쟁 서비스로의 콘텐츠 컴파일"은 공통 금지 조항으로 확인됨. 단, **"AI 학습 활용 금지"는 사실과 다름** — 오히려 무료 플랫폼은 AI 학습을 금지하지 않거나(Pixabay는 명시적으로 허용) 하는 경우가 많음. 1단계 이미지 소싱 시 라이선스 확인 항목에 "배상 보장 없음" 리스크만 반영.

## 출처
- [How to Use P3 Colors with SVG (일반 P3 지원 언급만 확인, 브라우저별 차이 구체 내용은 미확인)](https://evilmartians.com/chronicles/how-to-use-p3-colors-in-svg)
- [Free Stock Photos: The Licensing Traps Nobody Talks About](https://www.licenseorg.com/blog/free-stock-photos-licensing-traps)
- [Pexels License FAQ](https://help.pexels.com/hc/en-us/articles/360042295214-Can-I-use-the-photos-and-videos-for-a-commercial-project)

## 위키화 후보
- SVG 아이콘 캐싱 이원화 전략(인라인 vs 스프라이트) — 기존 임계치 노트에 추가 병기 권장.
- LCP 이미지 `fetchpriority="high"` 원칙 — 기존 srcset 초안 노트(draft 상태)에 병합해 승격 권장.

## 프로필 반영 후보 (저위험)
- 무료 스톡 이미지 라이선스 체크리스트에 "배상 보장 없음(법적 리스크 이용자 부담)" 항목 추가, "AI 학습 금지" 관련 기존 가정이 있었다면 정정.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
**검증 메모**: 원 리서치 결과 중 2건은 교차검증 결과 폐기함 — ① "2026년 3월 미국 대법원 판결"은 실제 출처(lovart.ai) 확인 결과 **허위**(원문은 "저작권 소송이 향후 대법원까지 갈 수도 있다"는 미해결·전망 서술일 뿐, 실제 판결 없음) → 프로필/위키 반영 금지. ② P3 색상 브라우저별 렌더링 불일치(Chrome vs Firefox/Safari sRGB 매핑) 세부 주장은 출처 원문에서 해당 서술을 확인할 수 없어 미채택. ③ Sharp가 Squoosh 대비 "25배" 빠르다는 벤치마크 수치는 출처(pkgpulse.com) 신뢰도 낮고 기존 지식(Sharp/Squoosh 역할분리)과 중복이라 미기록. ④ Unsplash "AI 학습 금지" 주장은 원문과 반대(허용/금지 안 함)로 확인되어 정정해 반영.
