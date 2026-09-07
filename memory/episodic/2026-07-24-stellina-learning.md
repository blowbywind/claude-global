---
date: 2026-07-24
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-24

## 오늘 배운 것
- **Docker Compose v5.0.0 "Mont Blanc"(2025-12-02, GitHub 공식 릴리스노트로 확인)**: 내장 빌더 제거, 빌드는 Docker Bake로 위임 — 원문 그대로 확인됨. (단, "Wasm 모듈과 Linux 컨테이너를 단일 compose.yml에서 함께 실행"이라는 부분은 공식 릴리스노트에 없어 근거 불충분 → 폐기)
- **Docker Compose v5.2.0(2026-06-23, GitHub 공식 릴리스노트로 확인)**: "관찰 상태(observed)와 기대 상태(expected) 간 재조정(reconciliation) 알고리즘" 도입 — 공식 문구와 거의 일치, 확인됨. autobots Compose 구성에서 `docker compose up` 안정성 개선 근거로 참고 가능.
- **ClickStack(ClickHouse+OTel Collector+HyperDX)**: 실재하는 구현체이며 컬럼형 저장으로 압축 효과 있음 — 단, 원문 근거는 "컬럼형 저장 압축 10~20배"이며, 스텔리나 보고의 "최대 90% 절감·15~50배 압축·셀프호스팅 FTE 10~20%" 수치는 원문에서 확인 불가(문맥 오독 추정) → **수치는 폐기, "구현체 존재 + 10~20배 압축" 만 채택**.
- **eBPF 런타임 보안(Falco/Tetragon/Tracee, 1337skills 블로그)**: Tetragon이 LSM 훅 기반으로 프로세스 종료·syscall 오버라이드 등 실제 차단(block/kill)까지 지원한다는 점은 확인됨. 단 오버헤드 수치는 원문이 "1% 미만"이라고 명시 — 스텔리나가 보고한 "1~5%"는 부정확 → **"1% 미만"으로 정정**.
- **GitHub Actions 2026 로드맵 / SHA 고정 한계(gitguardian)**: 기존 위키(2026-07-22)에 이미 반영된 내용과 중복 확인, 신규 아님.
- **AI 기반 피처플래그(azati.ai)**: 인용문 자체는 원문에 실재하나 출처가 IT 아웃소싱 업체의 마케팅 블로그로 권위 낮음 → 트렌드 참고용으로만 취급, 수치·기술주장으로 인용 금지.

## 출처
- [Docker Compose v5.0.0 릴리스노트](https://github.com/docker/compose/releases/tag/v5.0.0) (공식, GitHub API로 원문 대조)
- [Docker Compose v5.2.0 릴리스노트](https://github.com/docker/compose/releases/tag/v5.2.0) (공식, GitHub API로 원문 대조)
- [ClickHouse Observability Cost Optimization Playbook](https://clickhouse.com/resources/engineering/observability-cost-optimization-playbook) (원문 대조, 수치 일부 정정)
- [eBPF Runtime Security 2026: Falco vs Tetragon vs Tracee](https://1337skills.com/blog/2026-06-24-ebpf-runtime-security-2026-falco-tetragon-tracee/) (원문 대조, 오버헤드 수치 정정)

## 위키화 후보
- Docker Compose v5 릴리스 정책(빌더→Bake 위임, reconciliation 알고리즘) — Compose 관리 노트에 버전 이력 항목 추가

## 프로필 반영 후보 (저위험)
- ClickStack(구현체 명칭)을 OTel Collector 컬럼형 스토리지 권고 패턴에 "10~20배 압축" 수치로 정정 추가
- Tetragon을 Falco 옆에 "LSM 훅 기반 실차단(block/kill) 필요 시 대안"으로 병기(오버헤드 "1% 미만"으로 표기)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서 스텔리나 보고 9건 중 3건(수치 오류·미확인 주장)을 걸러냄. 반복 가치 확인됨. 단, 네트워크 접근 권한(WebFetch/WebSearch 또는 Bash 아웃바운드) 부여가 선행되어야 실효성 있음 — 현재 서브에이전트 샌드박스에 해당 권한이 막혀 있어 이번에도 메인 세션이 직접 wget으로 대조함(권한 이슈는 별도 확인 필요).
