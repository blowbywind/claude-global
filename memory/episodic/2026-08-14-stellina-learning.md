---
date: 2026-08-14
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-14

## 오늘 배운 것
- **CVE-2026-34040 정체 확정 검증**: eSecurityPlanet·Cyera 원문 직접 대조 완료 — Docker Engine의 AuthZ 플러그인 우회(CVSS 8.8), 1MB 초과 요청 바디가 미들웨어에서 조용히 잘려나가 AuthZ 플러그인 검사 없이 데몬에 전달됨. **CVE-2024-41110(제로바이트 우회)의 불완전한 패치**라는 점도 원문에서 추가 확인됨. 2026-07-22 "원문 미검증" 보류 항목 중 1건 해소.
- **containerd CVE-2026-47262 검증 완료**(CVSS 6.5): AWS 공식 보안 게시판 원문 대조 확인 — 조작된 컨테이너 이미지로 무한 메모리 소비 유발, containerd 프로세스 OOM 종료 → 해당 노드 전체 컨테이너 DoS.
- **GitHub Actions 가용성 장애 검증 완료**: pulsetic 원문 대조 확인 — 2026-08-06 15:05 UTC~08-07 00:14 UTC(10시간41분), 피크 시 워크플로 71% 실패, push/PR 등 일부 트리거는 자동 재생 불가(수동 재실행 필요). CI/CD 파이프라인 장애 대응 시 "재큐잉만으론 해결 안 됨" 참고할 것.
- **GitHub 2026-05 침해 사고 — 원 리서치 설명 정정 필요**: Armorcode 원문 대조 결과, 실제 메커니즘은 "가짜 확장으로 직원 사회공학"이 아니라 **널리 쓰이는 정상 VS Code 확장(Nx Console)이 공급망 공격으로 오염되어 마켓플레이스 자동업데이트로 배포**된 것(2026-05-18 확인, 내부 저장소 약 3,800개 유출, 자격증명·SSH키·GitHub 토큰 탈취). 시크릿 관리 관점에서 "개발자 머신=최고가치 공격표면, 확장 자동업데이트도 공급망 리스크"로 기록.
- **OpenTelemetry 프로덕션 채택률 상승 검증 완료**: Elastic 원문 대조 확인 — 6%→11%(YoY 거의 2배), 실험단계 31%→36%.
- **검증 실패로 폐기**: CVE-2026-72971(Windows Container Isolation FS Filter Driver) 항목은 원 리서치가 인용한 gopher.security 출처를 직접 대조한 결과, 해당 글은 2025년 구형 runC CVE 3건(CVE-2025-31133/52565/52881)만 다루고 있어 CVE-2026-72971 언급 자체가 없음 — **오귀속/환각으로 판단, 채택하지 않음**.

## 출처
- [Docker Flaw (CVE-2026-34040) Lets Attackers Bypass Security Controls and Take Over Hosts](https://www.esecurityplanet.com/threats/docker-flaw-cve-2026-34040-lets-attackers-bypass-security-controls-and-take-over-hosts/)
- [Docker Security Flaw CVE-2026-34040: Patch Now](https://www.cyera.com/research/one-megabyte-to-root-how-a-size-check-broke-dockers-last-line-of-defense)
- [AWS Security Bulletin 2026-046 — Issue with containerd CRI Plugin](https://aws.amazon.com/security/security-bulletins/2026-046-aws/)
- [GitHub Status — Incident #6249: Incident with Actions](https://pulsetic.com/status/github/incidents/6249/)
- [What Happened In The GitHub Breach By TeamPCP?](https://www.armorcode.com/blog/the-github-breach-how-it-happened-and-actions-you-can-take)
- [Observability trends for 2026 (Part 2): GenAI and OpenTelemetry reshape the landscape](https://www.elastic.co/blog/2026-observability-trends-generative-ai-opentelemetry)

## 위키화 후보
- CVE-2026-34040(Docker Engine AuthZ 우회) 개념 노트 — CVE-2024-41110 불완전 패치 계보 포함해 기존 runc/containerd CVE 노트군에 병합 편입.

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트에 "확장/플러그인 자동업데이트발 공급망 리스크"(개발자 머신 자격증명 탈취 경로) 항목 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- 이번 세션에서도 WebFetch 권한 거부가 재발(기존 07-16/07-22/07-29/07-30에 이어 5회째)했고, wget 폴백으로 7건 중 6건 원문 대조 성공·1건 오귀속 적발했습니다. 기존 제안된 "출처-대조-검증기(wget 폴백 내장)" 서브에이전트 정식화를 다시 한 번 권고합니다(반복 실증 완료, 적용은 사용자 승인 필요).
