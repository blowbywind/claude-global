---
date: 2026-09-06
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-09-06

## 오늘 배운 것
- unDraw 라이선스 원문(undraw.co/license) 직접 대조 완료: "AI/ML 학습·파인튜닝 목적 사용 금지"+"재배포 팩 제작 금지" 조항이 실제로 명시돼 있음(리서치 주장 확인됨). 08-10 인사이트(무료 스톡사진 일반 라이선스엔 AI학습 금지 조항 없음)와는 별개 사안이므로, 일러스트(unDraw 등)와 사진 스톡을 구분해 라이선스 체크할 것.
- WAI-ARIA 1.3(w3c.github.io/aria) 원문 확인 결과 아직 1.2 대비 신규기능을 얹는 초안 단계 문구만 확인됨 — 여전히 Candidate Recommendation 미도달. 단독 SVG 아이콘 접근성 체크리스트는 현행 ARIA 1.2/APG 기준 유지 판단이 맞음.
- **[폐기]** "Phosphor 최신 릴리스 772개 아이콘(신규 89개)" 주장: GitHub API 대조 결과 최신 릴리스는 v2.0.8(2024-02-01), npm 최신판도 2.1.1(2024-03-29)로 2026년 신규 릴리스 자체가 없어 근거 불일치. 기존 아이콘 비교표 노트 수정하지 않음.
- **[폐기]** "AVIF HDR 게인맵: libavif 1.2.0(2026-02), Safari v26부터/Chrome 플래그 뒤" 주장: 원문(aomedia.org) 대조 결과 실제 발행일은 2025-04-11이며, 본문은 "Chrome·Edge·Android·Apple OS가 이미 게인맵을 지원"이라고 명시 — Safari 특정 버전·Chrome 플래그 언급 자체가 없는 오귀속. 반영하지 않음.
- Figma Weave, OKLCH/color-mix 브라우저 지원 항목은 기존 위키(2026-08-17, 08-18 노트)에 이미 반영된 중복 내용이라 스킵.
- Squoosh 웹앱 정상 작동/CLI 미유지보수는 기존 노트(08-17)와 일치하나, "배치 처리 불가" 세부 주장은 출처(compresto.app 블로그) 원문 대조를 하지 못해 참고 수준으로만 인지(위키 반영 안 함).

## 출처
- [unDraw License](https://undraw.co/license)
- [WAI-ARIA (Editor's Draft)](https://w3c.github.io/aria/)
- [phosphor-icons/core releases (GitHub API 대조)](https://api.github.com/repos/phosphor-icons/core/releases/latest)
- [@phosphor-icons/core npm registry](https://registry.npmjs.org/@phosphor-icons/core)
- [Libavif Improves Support for HDR Imagery — AOMedia (실제 발행일 2025-04-11, 원문 대조로 리서치 주장 반증)](https://aomedia.org/blog%20posts/Libavif-Improves-Support-for-HDR-Imagery/)

## 위키화 후보
- unDraw 라이선스에 "AI/ML 학습·재배포팩 금지" 명문 조항 존재(원문 확인) — 기존 "무료 일러스트 라이선스 3종" 노트에 각주 보강.

## 프로필 반영 후보 (저위험)
- SVG 단독 아이콘 접근성 점검은 ARIA 1.3 대신 현행 ARIA 1.2/APG 기준으로 계속 진행(원문 재확인, 변경 없음 유지).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 원문 대조 필요성은 기존 후보(출처-대조-검증기 계열)로 이미 등록돼 있어 중복 제안 생략)
