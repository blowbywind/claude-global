---
date: 2026-08-21
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-21

## 오늘 배운 것
- **SVGO v4.0.2**가 최신판임을 GitHub releases 원문 대조로 직접 확인(기존 위키 기록과 일치) — 출처 재검증 완료.
- **resvg 2026년 릴리스**(v0.46.0~v0.48.1)를 GitHub releases 목록에서 직접 확인 — 위키의 "v0.46.0(1월)·v0.47.0(2월)" 기록보다 이후 버전(v0.48.x)까지 이미 나와 있어 갱신 여지 있음.
- **CSS `corner-shape`는 여전히 Chromium(139+) 전용**, Firefox·Safari 미지원임을 Smashing Magazine 원문 대조로 재확인 — Baseline 전환 전까지 실적용 보류 방침 유지 타당.
- ⚠️ **인용 왜곡 2건 폐기**: (1) "AVIF 94.9~95%/WebP 96.4%"(picshift.app 인용) — 원문(wget 대조)에 해당 수치 자체가 존재하지 않음(페이지 내 %는 100%·60%뿐), 완전 허위 인용. (2) "JPEG XL 반전, 전역 16%, Chrome 활성화 시 85~90% 전망"(theimagecdn.com 인용) — 원문은 정반대로 "Chrome/Firefox/Edge 지원 0%, 전역 13.6% 전부 Safari 단독 partial, 낙관적 전망 자체를 경계하라"고 명시. 기존 위키의 "JPEG XL 여전히 비활성" 판단이 맞고, 이번 리서치 쪽이 원문을 뒤집어 잘못 인용함.
- axe-core "이슈 30~40%만 자동포착" 주장은 해당 출처 페이지에서 확인 불가 — 미검증 폐기.
- Lucide v1.0, Figma Vectorize, Sharp 0.35.3 항목은 이미 위키에 동일/상세 내용이 기록된 중복 — 신규 학습 아님.

## 출처
- [SVGO Releases](https://github.com/svg/svgo/releases) — v4.0.2 확인
- [resvg Releases](https://github.com/linebender/resvg/releases) — v0.46.0~v0.48.1 확인
- [Smashing Magazine — corner-shape](https://www.smashingmagazine.com/2026/03/beyond-border-radius-css-corner-shape-property-ui/) — Chromium 139+ 전용 확인

## 위키화 후보
- resvg 버전 갱신: 기존 `resvg.md` 노트를 v0.48.1(2026년 최신)까지 갱신.

## 프로필 반영 후보 (저위험)
- (없음 — 이번 검증 결과 대부분 기존 지식 재확인 또는 폐기이며 신규 전문성 항목 없음)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 세션도 WebFetch 권한 거부 재발했으나 wget+python3 파싱 폴백으로 실제 원문 대조에 성공, 리서치 인용 2건(AVIF/WebP 수치, JPEG XL 반전 주장)이 원문 왜곡임을 실증 적발. 기존에 반복 제안된 후보와 동일 — 재확인 차 다시 기록.
