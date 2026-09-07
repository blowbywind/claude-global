---
date: 2026-07-03
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-03

검증 결과를 종합합니다. WebFetch는 nodejs.org만 성공했고 valkey.io·owasp.org는 접근 차단됩니다.

**검증 요약:**
- Node.js 26 (Temporal, V8 14.6, getOrInsert) → ✅ 직접 확인
- Node.js 27+ LTS 정책 변경 → ✅ 직접 확인
- OWASP SSRF → A01 BAC → ✅ 기존 인사이트 [2026-06-20] 교차 확인
- Valkey 9.0 Hash TTL·multi-DB·슬롯 마이그레이션 → ⚠️ URL 접근 불가 (Redis 7.4 HEXPIRE 패리티로 Hash TTL은 신뢰도 중간, 나머지 제거)
- OWASP A03 Supply Chain·A10 Exceptional Conditions 신규 카테고리 → ❌ 미검증 제거
- Drizzle ORM `jit: true` → ❌ GitHub 접근 불가, 미검증 제거

---

## 오늘 배운 것

- **Node.js 26 (2026-05-05) `Temporal` API 기본 활성화**: `dayjs`/`date-fns` 없이 ISO 날짜 파싱·타임존 변환·기간 연산이 표준 API로 처리 가능. API 응답의 날짜 포맷 변환 로직을 외부 의존 없이 작성할 수 있다.
- **Node.js 26 V8 14.6 `Map/WeakMap.prototype.getOrInsert(key, val)` / `getOrInsertComputed(key, fn)`**: 기존 `if (!map.has(k)) map.set(k, v); return map.get(k)` 패턴을 한 줄로 대체. 인메모리 캐시·멱등성 맵 초기화 코드 간소화에 직접 활용 가능.
- **Node.js 27+부터 LTS 정책 전환**: 홀수/짝수 교차 방식 폐지 → 매년 단일 메이저 버전 출시, 전 버전 LTS 승격 (Current 6개월 → Active LTS → Maintenance). "짝수만 프로덕션"이라는 기존 경험칙 무효화 — 인프라 Node.js 버전 업그레이드 정책 재검토 필요.
- **Valkey 9.0 Hash 필드 단위 TTL** (Redis 7.4 `HEXPIRE` 패리티로 신뢰도 중간, 직접 검증 실패): 세션 Hash 내 서브필드(마지막 활동시각, MFA 인증 상태 등)에 독립 TTL 설정 가능 → 만료 시 Hash 전체 삭제 대신 해당 필드만 소멸하는 정밀 캐시 설계가 된다.
- **OWASP Top 10:2025 SSRF → A01 Broken Access Control 통합** (기존 [2026-06-20] 인사이트 교차 확인): SSRF를 인가 취약점의 하위 항목으로 다루는 관점 공식화. BOLA/IDOR 점검 체크리스트에 SSRF 검증을 같은 레이어로 묶어서 리뷰.

## 출처

- [Node.js v26.0.0 Release](https://nodejs.org/en/blog/release/v26.0.0)
- [Node.js Releases — LTS Schedule](https://nodejs.org/en/about/releases)

## 위키화 후보

- `valkey.md` 업데이트 — 기존 노트에 Valkey 9.0 Hash 필드 TTL 항목 추가 (직접 검증 시 확정)

## 프로필 반영 후보 (저위험)

- `Temporal` API — 날짜 처리 스택 용어에 추가 (Node.js 26+ 표준)
- Node.js 27+ 전 버전 LTS 정책 — 인프라 버전 선택 의사결정 기준 갱신

## 승인 필요 (고위험)

*(없음)*

## 신규 도구 후보 (에이전트/스킬)

*(없음)*
