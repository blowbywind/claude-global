---
date: 2026-09-03
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-09-03

임시 폴더(빈 디렉터리, 파일은 삭제 완료)는 시스템 제약으로 자동 삭제되지 않아 `.verify_tmp_20260903/` 빈 폴더가 남았습니다. 필요시 수동 삭제 부탁드립니다.

원문 대조 검증 결과, 리서치 산출물 상당수가 출처 불일치로 확인되어 다수 폐기했습니다.

## 오늘 배운 것
- npm 생태계 2026년 공급망 공격: 2024.6~2026.6 누적 59개 캠페인·개별 악성 패키지-버전 657건, 전 캠페인 CVE 0건(제로데이 특성) — 원문 대조로 수치 정확히 일치 확인.
- node-ipc 공급망 공격: 악성 버전 9.1.6/9.2.3/12.0.1 확인(원문 grep 예시 일치). 단, 페이로드 크기는 원문 기준 117KB(리서치의 "80KB"는 오기), C2는 `sh.azurestaticprovider.net`(Tor 아님) — "IronWorm"이라는 명칭·976KB Rust 바이너리·eBPF 루트킷·Tor C2·OIDC 자가전파·"37개 패키지/9개 조직" 수치는 원문에 전혀 없음(허구 창작으로 판단, 전량 폐기).
- Mini Shai-Hulud Wave 2(2026-05): Phoenix Security 집계상 실사례 170+ 패키지 규모로 확인(기존 위키 "160+"와 유사 계열, 갱신 정도). 리서치가 주장한 "2026-08 재확산 400+ 패키지"는 인용 출처(tech-insider.org)가 실제로는 별개 사건(Mastra AI 프레임워크 공격, 6월 17일)을 다룬 글이라 해당 주장 뒷받침 안 됨 — 오귀속으로 판단, 폐기.
- MCP 서버 취약점 통계(명령어삽입 43%, SSRF 7000개 중 36.7%, tool poisoning 1899개 중 5.5%)는 인용 출처 본문에서 검색되지 않음 — 근거 확인 불가로 폐기.
- Fastify v6 milestone(GitHub #6) 페이지·MS 보안블로그(MCP 자동실행 IDE 취약점) 2건은 클라이언트 렌더링(JS) 페이지라 wget 정적조회로 본문 대조 불가 — 확정 불가로 이번엔 폐기(재조사 필요 시 headless 렌더링 필요).

## 출처
- [Accelerating Supply Chain Attacks — npm/PyPI/VS Code 2026](https://phoenix.security/accelerating-supply-chain-attacks-npm-pypi-vsx-ai-enabled-2026/) — 59캠페인/657패키지/CVE 0건, Mini Shai-Hulud Wave 2 규모 확인
- [node-ipc npm Supply Chain Attack](https://www.stepsecurity.io/blog/node-ipc-npm-supply-chain-attack) — 악성 버전 3종·페이로드 117KB 확인, "IronWorm" 관련 서술 없음

## 위키화 후보
- "리서치 산출물 원문 대조 시 허구 창작(IronWorm류)·오귀속(출처 불일치) 반복 확인" — 웹리서치 검증 프로세스의 구조적 취약점으로 개념 노트화 가치 있음.

## 프로필 반영 후보 (저위험)
- 없음(이번 라운드는 검증 결과 대부분 폐기되어 신규 확정 지식이 제한적).

## 승인 필요 (고위험)
- 1단계 웹리서치(덱스) 산출물에서 이번에 존재하지 않는 위협명("IronWorm")·통계(MCP 43%/36.7%/5.5%)·오귀속 출처(Mini Shai-Hulud 400+)가 다수 포함된 것을 확인했습니다. 재발 시 신뢰도 문제가 커지므로, 1단계 리서치 산출 시 "핵심 주장마다 원문 인용구 첨부"를 의무화하는 프로세스 규칙 추가를 제안합니다(행동규칙 변경이라 승인 필요).
- `mcp-tool-poisoning-도구-오염.md` 노트가 실제 본문 없이 "작성 예정" 스텁 상태로 방치된 것이 재확인됐습니다. 스텁 콘텐츠로 채울지, 삭제 후 재작성할지 방향 확인 부탁드립니다.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이미 후보 등록된 상태이며, 이번 라운드에서 실제 적용 시 9건 중 5건(핵심 주장 다수) 폐기 사유를 찾아낸 것으로 재차 실효성 확인됨. 반복 재확인되는 만큼 정식 도입 검토를 권합니다.
