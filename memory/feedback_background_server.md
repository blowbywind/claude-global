---
name: feedback-background-server
description: VS Code 원격 환경에서 백그라운드 HTTP 서버 실행 금지 — Ports 패널 포트 충돌로 Live Server 방해
metadata:
  type: feedback
---

VS Code 원격 환경에서 진단 목적이라도 `python3 -m http.server PORT &` 같은 백그라운드 서버를 절대 실행하지 말 것.

**Why:** 백그라운드 서버가 VS Code Ports 패널에 포트 항목을 등록하면, 이후 Live Server 등 다른 서버 재시작 시 포트 충돌 → ERR_CONNECTION_REFUSED. 사용자가 Ports 패널에서 수동으로 항목을 삭제해야 해결된다. (2026-06-09 hnedu_crm 프로토타입 디버깅 중 실제 발생)

**How to apply:**
- 서버 파일 서빙 검증은 `curl`로 충분 — 별도 HTTP 서버 불필요
- 꼭 필요하면 foreground로만 실행(`python3 -m http.server PORT`), 확인 후 즉시 Ctrl+C
- "빈화면 + Network 요청 없음" 증상 → 코드 분석 전에 Ports 패널 확인 → 스테일 항목 삭제 → 서버 재시작 순서로 진단
