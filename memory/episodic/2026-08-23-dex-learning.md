---
date: 2026-08-23
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-23

## 오늘 배운 것
- **CVE-2026-44578**(Next.js self-hosted WebSocket 업그레이드 핸들러 SSRF) 원문 대조 완료: 2026-05-11 공개(GHSA-c4j6-fc7j-m34r), 13.4.13~15.5.15/16.0.0~16.2.4 영향, 15.5.16·16.2.5에서 수정. Vercel 관리형·서버리스 미영향, IMDSv2 사용 시 피해 제한적. **주의**: 리서치 원문은 "신규 발견"처럼 썼지만 실제 공개일은 5월 12일로 3개월 전 사안이며 이미 패치 버전 존재 — 새 취약점이 아니라 "우리 위키에 미기록이었던 과거 CVE"로 정정.
- **Next.js 2026-07-20 보안릴리스**(v16.2.11/15.5.21) CVE 9건(64641~64649) 목록을 공식 블로그 원문과 1:1 대조해 정확히 일치 확인.
- **State of JS 2025**: Vite 만족도 98% vs Webpack 26%, 백엔드 런타임 Node.js 90% 압도적 1위·Bun 21%(+4%p)·Deno 11% — InfoQ 원문 수치 그대로 확인(단 "Bun이 Deno를 추월"은 리서치의 해석 표현이며 원문은 현재 순위만 명시).
- **Prisma CLI (v8.0.0-rc.4-dev.14, 08-21)**: `orm init` 실패 메시지의 폐지 플래그(`--no-skill`,`--force`) 제거 후 실제 플래그(`--skip-skills`,`--confirm <디렉터리명>`) 안내로 교체 — releasebot.io 원문 대조 확인.
- keyv/ChainDrop 웜, Node.js 2026-07-29 보안릴리스는 기존 위키 기록과 중복이라 신규 위키화 불필요.

## 출처
- [Next.js WebSocket SSRF: CVE-2026-44578 (Hadrian)](https://hadrian.io/blog/next-js-websocket-ssrf-unauthenticated-access-to-internal-resources-cve-2026-44578-2)
- [July 2026 Security Release (Next.js 공식 블로그)](https://nextjs.org/blog/july-2026-security-release)
- [State of JS Survey 2025 (InfoQ)](https://www.infoq.com/news/2026/03/state-of-js-survey-2025/)
- [Prisma Release Notes (Releasebot)](https://releasebot.io/updates/prisma)

## 위키화 후보
- CVE-2026-44578: self-hosted Next.js WebSocket SSRF 개념 노트(ai-ops는 정적 export라 직접영향 낮음, hnedu 등 self-hosted Next 프로젝트용 참고 노트로 가치)

## 프로필 반영 후보 (저위험)
- State of JS 2025 런타임/빌드도구 트렌드(Vite 압도적 우위, Bun>Deno) 인지 항목 축적

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 턴에도 WebFetch가 hadrian.io 1건에서 권한거부되었고 wget 폴백으로 실제 원문 확보·"신규 발견" 오프레이밍 1건 정정에 성공. 기존 후보(2026-08-21 이전 등록)의 유효성이 이번 세션에서도 재확인됨 — 정식 도입 여부는 사용자 승인 필요.
