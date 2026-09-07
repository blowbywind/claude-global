---
date: 2026-08-17
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-17

정리 완료(ai-ops 내 임시파일 삭제). /tmp 파일은 세션 종료 시 자동 정리됩니다.

교차검증 결과, 리서치 산출물 중 2건을 원문 대조로 확정하고 1건(Iconify 2026 세부수치)은 원문에서 확인되지 않아 폐기했습니다.

## 오늘 배운 것
- **Squoosh CLI/lib 사실상 방치 확인**: npm 레지스트리 직접 대조 결과 `@squoosh/cli` 최신 버전은 0.7.3, 마지막 배포일 2023-01-03로 이후 갱신 없음(단, registry상 공식 `deprecated` 플래그는 확인 안 됨 — "공식 폐기 선언"이 아니라 "사실상 미유지보수"로 표현 정정). 기존 인사이트(2026-07-24) "Sharp=런타임/Squoosh=빌드타임" 병행 전략의 빌드타임 축은 신규 파이프라인 구축 시 Sharp 단독 또는 커뮤니티 포크로 대체 검토 필요.
- **resvg-js 최신 alpha 동향 원문 대조 완료**: CHANGELOG 원문 확인 결과 `v2.7.0-alpha.0`(2026-01-22, GC 개선+napi-rs v3 마이그레이션), `v2.6.3-alpha.3`(2026-01-09, `cropByBBox()` 입력검증 강화+`napi-build@2.3.1`은 rustc 1.88 요구) 모두 정확. 서버사이드 SVG→PNG 파이프라인에서 버전 고정 시 rustc 툴체인 버전 주의.

## 출처
- [@squoosh/cli - npm registry](https://registry.npmjs.org/@squoosh%2Fcli) (직접 대조: latest 0.7.3, 마지막 배포 2023-01-03)
- [resvg-js CHANGELOG.md](https://github.com/thx/resvg-js/blob/main/CHANGELOG.md) (직접 대조: v2.7.0-alpha.0/.1/.2, v2.6.3-alpha.3 항목 원문 일치)

## 위키화 후보
- Squoosh CLI/lib 미유지보수 상태(마지막 배포 2023-01) + 대안(Sharp 단독/커뮤니티 포크) — 기존 "Sharp=런타임·Squoosh=빌드타임" 병행 노트 갱신 필요

## 프로필 반영 후보 (저위험)
- resvg-js 버전 고정 시 napi-build 요구 rustc 버전 확인 습관화(2.3.1→rustc 1.88+)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
참고: 리서치 원문의 "Iconify 2026 갱신(아이콘셋 30만 개 돌파, CSS 커스텀 프로퍼티 색상 커스터마이징 신규 지원, SolidJS 컴포넌트 신규 출시)" 항목은 해당 뉴스 페이지(iconify.design/news/2026.html) 원문 텍스트에서 확인되지 않아 폐기했습니다(SolidJS는 기존 문서 내비게이션 항목으로만 존재, 30만/커스텀 프로퍼티 언급 없음). corner-shape/PWA 도구 생태계/AI 벡터화 도구(Vectorizer.ai·Recraft) 항목은 이번 검증 예산 내 원문 대조를 진행하지 못해 출력에서 제외했습니다.
