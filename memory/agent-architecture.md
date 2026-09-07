---
name: agent-architecture
description: 전체 에이전트 목록·역할·호출 시점 참조 문서. orchestrator.md와 CLAUDE.md에서 참조.
metadata:
  type: reference
  updated: 2026-06-10
---

# 에이전트 아키텍처

## 에이전트 목록 및 역할

| 에이전트 | 계층 | 역할 | 직접 수정 |
|---------|------|------|---------|
| orchestrator | 감독 | 작업 분석·분해·위임·보고. 코드 직접 작성 금지, 자기 평가 금지 | X |
| senior-strategist | 감독 | 설계 결정·기술 의사결정·아키텍처 검토. 구현 에이전트 호출 전 선행 | X |
| backend-agent | 생성 | Fastify API, 서버 로직, 인증·권한, Node.js | O |
| frontend-agent | 생성 | Next.js 15 컴포넌트, UI, Tailwind, Radix UI | O |
| database-agent | 생성 | PostgreSQL 스키마, 마이그레이션(Prisma), 쿼리 최적화. EF Core 마이그레이션은 dotnet-api-agent 담당. | O |
| test-agent | 생성 | 단위·통합 테스트 작성 및 실행 (Vitest, Node.js 전용) | O |
| code-reviewer | 검증 | 코드 품질 검토(버그, 보안, 성능, 가독성). 수정 금지, 판단만 | X |
| evaluator-strict | 검증 | 요구사항 100% 충족 여부 검증. 수정 금지, 판단만 | X |
| winforms-agent | 생성 | WinForms .NET 8 UI 전담 (hnedu_erp 클라이언트) | O |
| dotnet-api-agent | 생성 | ASP.NET Core Web API + EF Core 전담 (hnedu_erp 서버·마이그레이션) | O |

## 작업 유형별 에이전트 라우팅 매트릭스

### Node.js 스택 (hnedu_crm, hnedu_auth — package.json + fastify)

| 작업 유형 | 1차 에이전트 | 2차 에이전트 | 품질 게이트 |
|-----------|------------|------------|-----------|
| 신규 기능 (풀스택) | senior-strategist | database → backend → frontend → test (순차) | code-reviewer → evaluator-strict |
| API 엔드포인트만 | backend-agent | test-agent (병렬 가능) | code-reviewer → evaluator-strict |
| UI 컴포넌트만 | frontend-agent | test-agent (병렬 가능) | code-reviewer → evaluator-strict |
| DB 스키마 변경 | database-agent | backend-agent (순차) | code-reviewer → evaluator-strict |
| 기술 의사결정 | senior-strategist | — | evaluator-strict |
| 리팩토링 | senior-strategist (범위 정의) | 해당 도메인 에이전트 | code-reviewer → evaluator-strict |
| 외부 리서치·정보 수집 | research-agent | — | — (리서치 결과는 검증 불필요) |

### C#/.NET 스택 (hnedu_erp — .csproj/.sln 파일 존재 시)

| 작업 유형 | 1차 에이전트 | 2차 에이전트 | 품질 게이트 |
|-----------|------------|------------|-----------|
| WinForms UI 작업 | winforms-agent | — (자체 `dotnet build`/`format` 검증) | code-reviewer → evaluator-strict (dotnet 기준) |
| ASP.NET Core API 작업 | dotnet-api-agent | — (자체 `dotnet test` 검증) | code-reviewer → evaluator-strict (dotnet 기준) |
| EF Core 마이그레이션 | dotnet-api-agent | — | evaluator-strict (dotnet build 기준) |
| DB 스키마 설계·쿼리 | dotnet-api-agent | — | code-reviewer → evaluator-strict |
| 신규 기능 (풀스택 C#) | senior-strategist | dotnet-api-agent → winforms-agent (순차, 각자 자체 테스트 검증) | code-reviewer → evaluator-strict |

> **스택 판별**: 프로젝트 루트에 `.csproj` 또는 `.sln` 파일이 존재하면 C#/.NET 경로 사용. `package.json` + fastify 의존성이 있으면 Node.js 경로 사용.
> **주의**: test-agent(Vitest 전용)·database-agent(PostgreSQL+Prisma 전용)는 Node.js 스택 전용이며 C#/.NET 스택에는 라우팅하지 않는다 — 두 에이전트 모두 EF Core/dotnet test 지식이 없어 실행 불가능한 위임이 된다(harness-scan 2026-09-07 발견).

## 병렬 vs 순차 실행 기준

- **병렬 실행**: 서로 의존성 없는 독립 작업 (예: frontend + test가 동일 인터페이스를 공유하지 않을 때)
- **순차 실행**: 의존성 있는 작업은 반드시 `database → backend → frontend → test` 순서 준수

## 품질 게이트 — 위험도 기반

변경 성격에 따라 게이트 강도를 차등 적용한다 (작은 수정에 풀 게이트 강제 → 컨텍스트 중복 복제 방지).

**self-check만 (게이트 생략)**: 단순 문서·네이밍·린트·타입 오류·1파일 한정 버그 수정
  → 작업 에이전트가 직접 빌드·타입·린트 검증 후 완료 보고

**풀 게이트 (code-reviewer → evaluator-strict)**: 아래 중 하나라도 해당하면 필수
  - 인증·권한·결제·보안 관련 변경
  - DB 스키마 변경, 마이그레이션
  - 인프라·서버 설정 변경
  - 2파일 이상 대형 변경, 신규 기능, 리팩토링
  - 판단이 애매한 경우

```
풀 게이트 흐름:
코드 변경 완료
  → code-reviewer (Critical/High 이슈 → 해당 에이전트 재실행)
  → evaluator-strict (미충족 항목 → 해당 에이전트 재실행)
  → 모두 통과 시에만 완료 보고
```

evaluator-strict 공통 통과 기준:

**Node.js 스택:**
- `pnpm build` 빌드 성공
- `tsc --noEmit` 타입체크 통과
- `eslint` / `prettier --check` 린트 통과
- 기존 테스트 모두 통과

**C#/.NET 스택 (스택별 오버라이드):**
- `dotnet build --configuration Release` 빌드 성공
- `dotnet test` 전체 테스트 통과
- `dotnet format --verify-no-changes` 포맷 검사

> 프로젝트별 커버리지·성능 지표 추가 기준은 해당 프로젝트 CLAUDE.md Dev Gate 섹션에 정의.

## 에이전트 간 통신 — 중간 산출물 공유

멀티 에이전트 워크플로에서 에이전트 A의 결정을 에이전트 B가 참조해야 할 때:
1. orchestrator가 에이전트 A 완료 후 핵심 결정 사항을 `~/.claude/memory/session-handoff.md`에 임시 기록
2. 에이전트 B 위임 시 session-handoff.md 내용을 컨텍스트로 전달
3. 세션 종료 시 handoff.md 내용을 Obsidian `projects/{repo}.md`에 병합

## 에스컬레이션 기준

- 에이전트 2회 연속 실패 → orchestrator 직접 개입 후 사용자에게 보고
- 요구사항 불명확 → 구현 전 사용자에게 확인
- **기술적 통과 but 인간 확인 필요**: DB 스키마 변경·인증정책 변경·기능 범위 확장·PRD와 충돌 감지 시 evaluator-strict는 "검증 통과이나 인간 확인 필요" 플래그를 반환


## 에이전트 호출 금지 패턴

- orchestrator가 코드를 직접 작성하는 행위
- code-reviewer 또는 evaluator-strict가 코드를 수정하는 행위
- 풀 게이트 대상(인증·DB·인프라·대형 변경)에서 품질 게이트를 건너뛰고 완료 선언하는 행위
