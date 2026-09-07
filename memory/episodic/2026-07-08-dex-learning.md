---
date: 2026-07-08
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-08

위키 교차검증 완료. 아래 항목을 **폐기**했다:

| 폐기 항목 | 이유 |
|---|---|
| Biome type-aware linting | `wiki/concepts/biome.md` 기존재. "tsc 없이 타입 어웨어 린팅" 주장은 Biome 자체 타입 추론이지 tsc 완전 대체 아님 → 과장 |
| React Compiler `useMemo` 지양 | `wiki/concepts/react.md`에 이미 포함 |
| 바이브 코딩 아키텍처 부채 | `wiki/concepts/vibe.md`에 이미 포함 (InfoWorld 더 강한 출처) |

출처 URL(plainenglish.io·medium.com·dev.to·cssauthor.com)은 도메인만 제공, 특정 기사 링크 없음 → 인용 불가. 핵심 사실만 공개 지식으로 검증 후 채택.

---

## 오늘 배운 것

- **Polars — Pandas 대체 DataFrame 라이브러리**: Rust 기반, lazy evaluation + Apache Arrow 컬럼형 메모리로 대용량 데이터 처리 속도 비교 우위. Python API 제공으로 진입 장벽 낮음. (PydanticAI 노트와 별개 — 데이터 파이프라인 레이어)
- **Pydantic v2 코어 Rust 재작성**: `pydantic-core`(Rust) 도입으로 v1 대비 5~50× 속도 향상. PydanticAI(에이전트 프레임워크)와 구별 필요 — Pydantic v2 자체는 범용 데이터 검증 라이브러리.
- **JSR(JavaScript Registry)**: Deno 팀이 만든 TypeScript-first·ESM-native npm 대안. npm 패키지와 JSR 동시 배포(듀얼 퍼블리싱)가 라이브러리 작성 표준으로 정착 중. `deno publish`로 게시.
- **Local-first 동기화 아키텍처**: PGLite(WASM 기반 브라우저 내 PostgreSQL), Zero(Rocicorp), PowerSync가 대표 구현체. 네트워크 없이 즉시 반응·백그라운드 sync — 협업 SaaS 및 오프라인 AI 에이전트의 차세대 데이터 레이어 후보.

## 출처

- [JSR 공식 사이트](https://jsr.io) — JSR 듀얼 퍼블리싱 패턴 (공식, 신뢰)
- [Biome 공식 사이트](https://biomejs.dev) — Biome v2 기능 명세 (공식, 신뢰)
- Polars·Pydantic v2·Local-first: 출처 URL이 도메인 수준(plainenglish.io·cssauthor.com)만 제공되어 인용 불가. 내용은 공개 기술 문서로 독립 검증 가능.

## 위키화 후보

- `local-first-sync` — PGLite/Zero/PowerSync 삼각 비교 및 use-case 정리 노트 (기존 위키 미존재)
- `polars` — Pandas 대비 Polars 특징·마이그레이션 포인트 요약 노트 (기존 위키 미존재)

## 프로필 반영 후보 (저위험)

- `JSR 듀얼 퍼블리싱 패턴` — npm 외 JSR 병행 게시 전략, 라이브러리 배포 시 참고 용어 추가
- `Pydantic v2 vs PydanticAI 구별` — 기존 pydanticai.md 노트 상단에 "Pydantic v2(범용 검증 라이브러리)와 다름" 한 줄 명시

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

_(없음)_
