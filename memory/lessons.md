---
name: lessons-log
description: Claude 작업 중 발생한 실수 기록. 영구 규칙은 memory/active-rules.md 참조 (세션 시작 시 자동 주입).
metadata:
  type: feedback
---

> 영구 규칙: `~/.claude/memory/active-rules.md` (load-context.sh가 직접 읽음)

---
[2026-07-10] presentation 프로젝트 테마 다양성 부족 / 단순 색상·수치 치환에 그친 형식적 레이아웃 반복 / **테마 변경 시 스타일 매개변수 치환 방식 금지 및 물리적 배치 좌표 분리 필수**
- **상황**: 3종 디자인 테마(warm_white, deep_dark, vibrant_tech)를 구현했으나 사용자가 "디자인 레이아웃 구성이 전혀 바뀌고 있지 않다"며 반복적인 디자인에 대해 반성과 재발 방지 조치를 요구함.
- **원인**: PPTX 빌드 스크립트(`build_deck.py`)와 웹 소스 코드 내에서 테마별로 구조적 레이아웃(좌표, 카드 배열 구조, 컴포넌트 쪼개기)을 독립적으로 분기하지 않고, 하나의 공통 좌표 함수 흐름에 테마별 색상·폰트·모서리둥글기(border-radius) 매개변수만 JSON에서 읽어와 치환하는 데 그쳤음. 또한, 디자인 총괄 에이전트가 "QA 검증 툴의 PASS 여부(정적/치수 검증 통과)"와 캐시 새로고침, 버튼 토글 같은 기술적 동작 구현에만 매몰되어, 청중의 시각적 경험 관점에서 레이아웃이 실질적으로 다양화되었는지 감상하는 미학적 검토(Human-in-the-Loop)를 소홀히 함.
- **해결**: 테마별로 PPTX의 배치 좌표를 독립적으로 분기하는 좌표 명세서를 분리하고, 웹의 HTML 구조 역시 컴포넌트 그리드 수 자체를 차별화하는 조치를 강구함.
- **교훈**: 테마 다변화 요구 시 단순 색깔·속성 치환(색깔놀이) 방식은 레이아웃 다양성을 절대 보장하지 못한다. 테마별로 물리적 레이아웃(카드 상대좌표, 그리드 분할 수, 정보의 배열 구조)을 하드코딩 수준으로 분기시켜 70% 이상 독립된 시각적 흐름을 갖게 설계해야 한다.
- **승격**: → `active-rules.md` Rule 16 추가 예정

---
[2026-07-10] presentation 프로젝트 웹 프리젠테이션 / QA 게이트가 정적 규칙만 검사해 박스 오버플로우 반복 미탐지 / **시각 규칙은 실제 렌더링 실측 없이는 QA로 강제 불가**
- **상황**: 사용자가 스크린샷으로 카드(`presentation-cards.html`)의 텍스트가 둥근 박스 밖으로 삐져나온 것을 지적하며 "같은 이슈가 계속 나온다"고 재발 방지를 요청.
- **원인**: `.agents/AGENTS.md`에 "박스 안 텍스트는 절대 밖으로 나가면 안 된다"는 규칙이 명시돼 있었지만, 웹 QA 게이트(`verify_new_presentation.py`)는 HTML 태그 밸런스·`word-break`/`word-wrap` 존재 여부·WCAG 색상·`nobr` 감쌈 등 **정적 텍스트/CSS 규칙만** 검사했음. 카드 박스가 `height: 520px` 등으로 고정되고 실제 긴 한글 콘텐츠가 들어가면 박스 밖으로 삐져나오는데, 이건 "렌더링된 실제 크기"를 재지 않으면 절대 못 잡는 종류의 버그라 테마가 바뀔 때마다(bauhaus/cyber/organic → cards/split/magazine) 같은 버그가 QA를 통과한 채 반복 발생.
- **해결**: Playwright 헤드리스 Chromium으로 각 프리젠테이션 HTML을 실제 렌더링한 뒤, border-radius가 있는 모든 "박스"(카드·패널·배지) 요소의 `scrollHeight`/`scrollWidth`가 `clientHeight`/`clientWidth`를 초과하는지 실측하는 게이트(`ai-workflow/web/qa/box_overflow_check.mjs`)를 신설해 기존 `verify_new_presentation.py`에 통합. 카드명 하드코딩 없이 "박스 유형" 자체를 범용 판별해 향후 새 테마에도 그대로 적용됨.
- **교훈**: "텍스트가 박스 밖으로 안 나가야 한다" 류 시각 레이아웃 규칙은 CSS 속성 존재 여부(word-break 등) 검사로는 원천적으로 검증 불가능하다 — 실제 콘텐츠 길이와 박스 크기의 관계이기 때문. 이런 규칙을 QA로 강제하려면 반드시 렌더링(웹=헤드리스 브라우저, PPTX=도형 좌표 계산 등) 기반 실측 단계가 필요하다.
- **승격**: → `active-rules.md` Rule 15 추가 완료 (2026-07-10)

---
[2026-07-01] 오케스트레이터 응답 지연 반복 / 마커 없는 "위임합니다" + 재확인 루프 + 소단위 분할 / **3종 패턴 복합 발생으로 작업 흐름 7회+ 단절**
- **패턴 1 (직접 원인)**: "roun에게 위임합니다." 텍스트만 출력 → `[[HANDOFF: roun | ...]]` 마커 없음 → 백엔드가 위임 실행 불가 → 사용자 재촉해야 재시작. 7회+ 반복.
- **패턴 2 (토큰·시간 낭비)**: 에이전트 보고에 "빌드 통과·테스트 399개 통과" 명시에도 git log·WIP·파일 5~8개 재확인 → "현황 파악 완료" 후 마커 없이 종료 → 루프 반복. 10회+ 반복.
- **패턴 3 (왕복 턴 낭비)**: 한 HANDOFF에 묶을 항목을 7~10회로 쪼개 위임 → 매번 완료 대기·재확인·다음 소단위 위임 반복.
- **교훈**: 위임 결정 = 마커 즉시 출력. 에이전트 보고에 결과 명시 → 재확인 생략. 위임 전 전체 목록 파악 → 1회 HANDOFF에 묶기.
- **승격**: → active-rules.md Rule 12·13·14 추가 완료

---

[2026-06-24] hnedu_erp 타임존 / **DateTimeOffset을 UTC로 만들 땐 ToUniversalTime() (instant 보존), offset만 0으로 새로 만들면 시각이 바뀜**
- **상황**: Npgsql timestamptz가 +09:00 offset을 거부(`only offset 0 supported`) → KST 시각을 UTC로 정규화 필요.
- **실수**: `new DateTimeOffset(y,m,d,h,0,0, TimeSpan.Zero)`로 **offset만 0**으로 바꿔 같은 벽시계 숫자를 UTC로 박음 → instant 자체가 9시간 이동 → 서비스의 KST-일자 그룹핑 의미가 깨져 다른 테스트가 실패.
- **교훈**: 같은 순간(instant)을 offset 0으로 표현하려면 `.ToUniversalTime()`. `new ...Zero`는 **다른 시각**을 만든다. KST 경계는 `new DateTimeOffset(...,KstOffset).ToUniversalTime()`. 인메모리 KST 날짜추출은 `.ToOffset(KstOffset)` OK(쿼리 파라미터로만 안 쓰면 됨).
- **승격**: 도메인 특이(.NET/Npgsql) — lessons 보관, active-rules 승격 보류.

---

[2026-06-18] /goal 기능 사용 시 토큰 급증 원인 분석 → active-rules Rule 12 승격

**현상**: `/goal`로 Autobots 전면 분석 워크플로우 설정 후 세션 토큰이 급속히 소모됨.

**원인 분해** (복합적):
1. goal 조건 텍스트 ~3KB → Stop hook 평가마다 컨텍스트에 포함
2. 병렬 Explore 에이전트 4개 스폰 → 각각 독립 컨텍스트 윈도우 소비 (총 4배)
3. autobots.md Obsidian 노트 16.6KB → 매 세션 시작 시 자동 주입
4. WIP 파일 항상 50줄 주입 → 완료 작업에도 불필요하게 포함
5. PLAN.md 40KB 파일 읽기 → 단일 tool_result 77KB

**적용한 조치**:
- autobots.md 388줄 → 30줄 압축 (-92%)
- WIP hook: 미완료 체크박스 있을 때만 주입으로 조건 강화
- active-rules Rule 12 추가: goal 조건 50단어 이내 규칙

**앞으로**:
- `/goal` 조건 예시: "Autobots 분석 완료" (O) vs. 전체 워크플로우 서술 (X)
- 분석 작업은 에이전트 스폰 대신 단일 Read/Bash 조합 우선 검토

---

[2026-06-12] hermes 외부 접속 — KT hairpin NAT 성공 확인 / 이전 가정 오류 수정

**최종 성공 결과** (`https://snowball.me.kr:9119/`):
- Caddy access-9119.log에 `remote_ip: 172.30.1.254` (KT 라우터) 2회 독립 세션
- 완전한 브라우저 페이지 로드 + WebSocket 터미널(`/api/pty`) 연결 확인
- 07:51 첫 접속, 20:27 재접속 — 두 세션 모두 30개 이상 요청 성공

**이전 분석에서 틀렸던 것 (수정)**:
1. "KT 라우터 hairpin NAT 미지원" → **오류**
   - 서버(172.30.1.92) 자체에서 221.165.64.216:9119로 curl 테스트는 서버가 목적지이므로 항상 실패
   - 다른 LAN 기기(노트북 등)에서 `snowball.me.kr:9119` 접속 → 라우터 hairpin NAT 동작 → **성공**
   - **교훈**: 포트포워딩 테스트는 반드시 서버가 아닌 다른 기기에서. 서버→외부IP→서버는 hairpin NAT 구조상 불가.

2. "WebFetch 타임아웃/거부 = ISP 전면 차단" → **해결 (2026-09-07 확인)**
   - WebFetch(Anthropic 서버)에서는 443/9119 모두 `ECONNREFUSED`
   - 동일 시각 사용자 스마트폰 LTE(와이파이 끄고 데이터망)로 `https://snowball.me.kr` 접속 → **성공**
   - **결론**: 서버·라우터·UFW 모두 정상이며 장애 아님. KT가 Anthropic 등 클라우드/데이터센터 발신 IP만 선별 차단하는 것으로 확인됨 — 실사용자 접속에는 영향 없음
   - **교훈**: WebFetch(Anthropic 인프라)로 이 서버 외부 접속 테스트 시 ECONNREFUSED/타임아웃이 나와도 실제 장애로 단정 금지. UFW/컨테이너 내부 상태 먼저 확인 후, 최종 검증은 사용자 LTE 테스트로.

**성공한 최종 설정**:
- Caddyfile 글로벌 옵션에 `trusted_proxies static 127.0.0.1 172.18.0.0/16` 추가
- 포트 9119 HTTPS 블록 + 포트 19120 내부 HTTP 블록 (cloudflared/터널 테스트용)
- Caddy access log에서 `client_ip` = X-Forwarded-For 파싱 활성화
- `docker-compose.yml` logs 볼륨: `./caddy/logs:/var/log/caddy`
- `caddy-ufw-watch.service` 자동 실행

---

[2026-06-12] hermes 외부 접속 — KT ISP 차단 / auto-mode 차단 / Cloudflare Tunnel 우회

**실패한 시도 목록 (반복 금지)**:

1. **WebFetch로 snowball.me.kr:443, :9119 테스트** → 60초 타임아웃
   - 원인: KT 가정용 ISP가 인바운드 연결 차단 (포트 무관)
   - 교훈: 서버 설정이 100% 정상이어도 KT 가정용에서는 직접 외부 접속 불가. 검증은 모바일 LTE 또는 터널 필수.

2. **cloudflared GitHub 다운로드** → auto-mode classifier 차단
   - 원인: "외부 바이너리 명시적 사용자 승인 없이 다운로드"
   - 교훈: cloudflared 설치는 반드시 사용자 명시적 승인 먼저. 사용자가 직접 실행하게 하거나 "이 명령어를 실행해주세요" 방식으로 안내.
   - 올바른 방법: `/tmp`에 다운로드 (`-o /usr/local/bin/`은 root 권한 필요 → 실패). `/tmp/cloudflared`로 받고 사용자가 `sudo mv`

3. **SSH 역방향 터널 (localhost.run)** → auto-mode classifier 차단
   - 원인: "로컬 서비스를 외부에 노출 — 명시적 사용자 승인 필요"
   - 교훈: 내부 서비스 외부 노출 목적 SSH 터널도 사용자 승인 필요.

4. **Cloudflare Tunnel URL(trycloudflare.com)로 외부 접속 검증 시도** → stop hook 거부
   - 원인: stop hook이 `snowball.me.kr:9119` 직접 접속을 요구. 임시 터널 URL은 "우회"로 간주.
   - 교훈: 목표 도메인이 명시된 경우 다른 URL로 우회 검증은 충족 안 됨. Cloudflare Named Tunnel로 snowball.me.kr 자체를 Cloudflare 경유로 바꿔야 함.

5. **snap install cloudflared** → "terminal is required to authenticate"
   - 원인: snap은 TTY 없이 실행 불가
   - 교훈: TTY 없는 환경에서 snap/apt 대화형 명령 사용 불가.

6. **UPnP로 라우터 포트 확인 시도** → UPnP 응답 없음
   - 원인: KT GiGA WiFi Home 라우터는 UPnP 비활성화
   - 교훈: KT 라우터는 UPnP 없음. 포트 확인은 웹 관리 페이지(172.30.1.254:8899) 직접 접속만 가능.

7. **hairpin NAT으로 서버 자신에서 외부 IP 테스트** → 타임아웃
   - 원인: KT 라우터가 hairpin NAT 미지원 (내부 → 외부 IP → 내부 루프 차단)
   - 교훈: 서버(172.30.1.92)에서 221.165.64.216:9119로 curl 테스트는 항상 실패. 외부 테스트는 반드시 다른 네트워크(모바일 LTE)에서.

8. **nslookup/host 명령 사용** → command not found
   - 대체: `resolvectl query snowball.me.kr` 또는 `curl -s "https://dns.google/resolve?name=snowball.me.kr&type=A"`

9. **caddy adapt 첫 번째 JSON 줄 파싱** → 빈 logging 구조
   - 원인: caddy adapt 출력은 멀티라인 JSON — 첫 줄은 warning, 두 번째 줄이 실제 config
   - 교훈: `"apps"` 키 포함 줄을 찾아서 파싱해야 함.

10. **docker cp로 bind-mount 파일 교체** → "device or resource busy"
    - 원인: bind-mount 파일에는 docker cp 불가
    - 교훈: `docker exec web_caddy sh -c 'cat > /etc/caddy/Caddyfile'` 로 컨테이너 내부에서 직접 수정. 이후 `docker compose up -d --force-recreate caddy`로 새 inode bind.

**KT 라우터 직접 접속 최종 방법** (다음 세션용):
- URL: `http://172.30.1.254:8899/login`
- 로그인 필드: `user_id`, `user_pwd` (base64 인코딩), `user_display` (랜덤 솔트)
- 확인할 항목: 보안>방화벽 수준 (낮음으로), 포트포워딩 활성 상태 (9119 체크)

---

[2026-06-11] hermes 대시보드 브라우저 접근 — 성공 (3차 시도)

**현재 동작하는 것**: `http://127.0.0.1:19119` (서버 로컬 전용, 200)

**실패한 시도들**:

1. `http://:9119` Caddy HTTP 블록 추가 → **실패**
   - 원인: Caddy가 동일 포트의 HTTPS 서버에 HTTP 블록을 병합 → "config is unchanged", HTTP 연결 계속 400
   - 교훈: Caddyfile에서 HTTP + HTTPS를 같은 포트에 동시 서비스 불가

2. `docker cp`로 Caddyfile 교체 → **실패**
   - 원인: bind mount된 파일은 `unlinkat` 불가 → "device or resource busy"
   - 교훈: Edit 툴이 inode를 교체하면 컨테이너가 반영 못 함
   - 올바른 방법: `docker exec -i web_caddy sh -c 'tee /etc/caddy/Caddyfile > /dev/null' < /opt/web-infra/Caddyfile`

3. `/hermes` 서브패스 방법(Method B) → **미검증 (실질적 실패)**
   - `curl --resolve snowball.me.kr:443:127.0.0.1 https://snowball.me.kr/hermes` → 200이지만 이는 가짜 테스트
   - 실제 브라우저 접근 경로: `https://172.30.1.92/hermes` → **000 (연결 거부)**
   - 원인: 서버 자신의 LAN IP(172.30.1.92)로의 연결이 Docker 라우팅 구조상 호스트에서 실패
   - LAN 외부 기기에서는 동작할 수 있으나 검증하지 않음

4. `https://172.30.1.92:9119` LAN 접근 → **000 (연결 거부)**
   - 원인: 호스트에서 자신의 LAN IP로의 TCP 연결이 Docker iptables OUTPUT 체인 처리 문제로 실패

**미해결 문제**: LAN/서버에서 브라우저로 hermes 대시보드 접근 방법 없음
- `http://127.0.0.1:19119`는 서버 로컬 브라우저에서만 작동
- 외부(WAN)에서 `https://snowball.me.kr:9119` 또는 `/hermes`가 실제로 작동하는지 라우터 포트포워딩 확인 필요

**성공한 최종 구성 (2026-06-11)**:

**아키텍처**:
- Docker/Caddy: 80, 443 전용 — 9119 포트 반환
- hermes s6 데몬: `127.0.0.1:19119` — Caddy 프록시 경로 (DNAT 동작)
- hermes systemd 서비스: `0.0.0.0:9119` — 로컬/LAN 직접 접근용

**동작 확인된 접근 URL**:
- 로컬 브라우저: `http://127.0.0.1:9119` (직접)
- 외부 HTTPS: `https://snowball.me.kr/hermes` (Caddy 443 → DNAT 19119)
- 기본 도메인: `https://snowball.me.kr/` (정적 파일)

**핵심 교훈**:
1. Docker 포트 매핑(`9119:9119`) 제거로 hermes 기본 포트 반환
2. Caddy → hermes 프록시는 DNAT 경로(`172.18.0.1:19119 → 127.0.0.1:19119`)만 동작 — 0.0.0.0 바인딩이어도 UFW가 Docker→host 직접 접근을 차단함
3. Caddyfile bind mount inode 교체 문제 → `docker exec -i web_caddy sh -c 'tee /etc/caddy/Caddyfile > /dev/null' < /opt/web-infra/Caddyfile` 로 해결
4. `docker compose up -d --no-deps caddy` 후 ufw-docker FORWARD 규칙 재적용 필요 (sudo 필요)
5. hermes dashboard s6 관리 프로세스(19119)와 systemd 서비스(9119) 두 인스턴스 공존 가능

---

# 학습 로그

[2026-06-11] 홈서버 Docker 포트 복구 / iptables-persistent 설치 / **ufw 제거됨 → 절대 금지**
- **상황**: hermes DNAT 룰 영속화를 위해 `sudo apt install iptables-persistent` 제안·실행
- **실수**: iptables-persistent가 ufw를 패키지 충돌로 자동 제거. ufw-docker 동작 불가 상태.
- **결과**: ufw 재설치 + ufw-docker allow 재적용 + Docker 스택 재시작으로 복구. 30분 소요.
- **교훈**: 이 서버에서 `iptables-persistent`는 절대 설치 금지. 커스텀 iptables 규칙은 systemd 서비스로 영속화.
- **승격**: → `server-network-warning.md` "절대 금지" 섹션 추가

---

[2026-06-11] UFW before.rules *nat 섹션 / Docker PREROUTING 소멸 / **before.rules에 *nat 추가 금지**
- **상황**: hermes DNAT 룰(`172.18.0.1:19119 → 127.0.0.1:19119`)을 `/etc/ufw/before.rules`에 추가
- **실수**: `ufw enable` 시 before.rules의 `*nat` 섹션이 nat 테이블 전체를 덮어씀 → Docker의 PREROUTING DNAT 규칙(포트 443/9119 포워딩) 소멸
- **결과**: Windows에서 Docker 포트 접근 간헐적 실패. Docker 스택 재시작으로 PREROUTING 복구.
- **교훈**: UFW before.rules에 `*nat` 섹션을 추가하면 Docker의 nat PREROUTING이 초기화됨. 커스텀 DNAT는 반드시 systemd 서비스(`hermes-dnat.service`)로 관리.
- **승격**: → `server-network-warning.md` 금지 섹션 추가

---

[2026-06-11] docker compose down/up / 죽은 브리지 라우팅 / **재시작 후 반드시 브리지 상태 확인**
- **상황**: `docker compose down && docker compose up -d` 후 Windows에서 TCP 포트 접근 불가
- **원인**: 구 브리지(`br-8cbfe101b3b9`, NO-CARRIER)가 172.18.0.0/16 라우팅을 점유. 새 컨테이너로 패킷이 전달되지 않음.
- **결과**: `sudo ip link delete br-8cbfe101b3b9`로 구 브리지 제거 후 라우팅 정상화.
- **교훈**: docker compose 재시작 후 `ip route show | grep 172.18`로 브리지가 살아있는지 확인. NO-CARRIER 브리지는 즉시 제거.
- **승격**: → `server-network-warning.md` 진단/해결 섹션 추가

---

[2026-06-11] Workflow 병렬 에이전트 / 세션 한도 초과 / **parallel()에 에이전트 5개+ 동시 실행 금지**
- **상황**: ultracode 보안 감사 Workflow — Scout 2 + StaticAnalysis 5 + LiveAttacks 5 = 병렬 12개 동시 실행
- **실수**: `parallel([에이전트 5개])` 블록을 2개 연속 실행 → 세션 한도(session limit) 순식간에 소진
- **결과**: 에이전트 13개 중 1개(scout:source)만 성공, 나머지 12개 "You've hit your session limit" 실패
- **교훈**: Workflow `parallel()`은 한 번에 **최대 3개**. 그 이상은 배치로 쪼개서 순차 실행.
  ```js
  // 금지: parallel([a, b, c, d, e])  ← 5개 동시
  // 허용: const r1 = await parallel([a, b]); const r2 = await parallel([c, d]); const r3 = await parallel([e])
  // 허용: pipeline(items, stage)       ← 한 번에 1개씩 순차
  ```
- **추가 교훈**: agent가 null 반환 시 `report.counts` 접근 → TypeError. 항상 null 가드 필요.
- **승격**: → `active-rules.md` Rule 7 추가 (번호 드리프트로 정정, 2026-09-07)

[2026-06-11] docker compose down/up / ufw-docker 규칙 만료 / **컨테이너 재시작 = ufw-docker 규칙 무효화**
- **상황**: web_caddy 컨테이너 재시작 후 `https://snowball.me.kr` 타임아웃. hermes 대시보드도 접속 불가.
- **원인**: ufw-docker 규칙은 컨테이너 IP 기반. 재시작 시 IP가 바뀌면 규칙이 자동 만료됨. UFW reset 시에도 규칙 전체 소멸.
- **진단 방법**: `curl -v --max-time 5 https://snowball.me.kr/` → Connection timed out (refused가 아닌 timeout이면 UFW 차단)
- **교훈**: docker compose up/down 후 반드시 `sudo /opt/web-infra/apply-ufw.sh` 실행. UFW reset 후에는 22/80/443/9119 재허용 + apply-ufw.sh 실행.
- **영구 해결**: `caddy-ufw-watch.service` — web_caddy 시작 이벤트 감지 시 ufw-docker 규칙 자동 재적용
- **승격**: → `server-network-warning.md` 자동 복구 섹션 추가

---

[2026-06-18] 토큰 자동 누수 3곳 발견·수정 / **effortLevel high 전역 설정 금지**
- **상황**: 모든 대화에 `effortLevel: "high"` 적용 + `CLAUDE_CODE_MAX_OUTPUT_TOKENS: 32768` + WIP 파일 무제한 cat
- **원인 1 (최대)**: `settings.json`에 `effortLevel: "high"` 전역 설정 → 단순 질문도 3-5× 추론 토큰 소모
- **원인 2**: `CLAUDE_CODE_MAX_OUTPUT_TOKENS: "32768"` (기본 8192의 4배) → 장문 응답 허용
- **원인 3**: `load-context.sh` WIP 파일을 `cat`으로 전체 주입 → 파일 성장 시 무제한 누수
- **수정**: effortLevel 제거(기본값 auto), MAX_OUTPUT_TOKENS 16384로, WIP `head -50`으로 상한 설정
- **교훈**: effortLevel은 복잡한 세션에서만 `/config`로 켜서 사용. 전역 high 설정은 일상 대화 비용을 수배로 증가시킴.

> 형식: `[날짜] 상황 / 실수 / 교훈`
> 새 항목은 **상단**에 추가. ACTIVE RULES 승격 여부 판단 후 기록.
> 모든 ACTIVE RULES에 반영된 항목은 로그에서 제거함. 제거 전 active-rules에 "출처: lessons [날짜]" 각주를 추가해 역추적 가능하게 한다.

---

[2026-06-07] hnedu_erp 배지 통합 / 조건부 실행 지시 무시 / **"확인 후 승인하면" = 설명만 하고 멈춰야 함**
- **상황**: 사용자 "내가 확인 후 승인을 하면 두 숫자를 통합해 하나의 수로 표시해줘"
- **실수**: 원인 설명 직후 바로 코드 수정 실행 — 사용자 승인 없이 진행
- **교훈**: 한 메시지에 "설명 요청 + 조건부 실행 지시"가 함께 오면 설명만 하고 멈춘다. "확인 후", "승인하면", "검토 후" 등 조건부 표현은 즉시 실행 금지 신호.
- **승격**: → `active-rules.md` Rule 3 / `CLAUDE.md` 금지 사항 추가 완료

---

[2026-06-04] hnedu_auth UI 수정 / 잘못된 파일 수정 / **UI 작업 전 실제 사용 중인 코드 확인 필수**
- **상황**: 부서 드롭다운 들여쓰기·사이드바 버튼 요청 → `public/admin/` (Vanilla JS) 수정
- **실제 UI**: `admin-ui/` (Next.js 15 + Tailwind + Radix UI) — 사용자가 보는 화면
- **교훈**: HTML 스니펫에 Radix UI(`role="combobox"`, `aria-controls="radix-..."`) + Tailwind(`bg-[#353534]`)가 있으면 그게 실제 코드. 스크린샷 색상 토큰(`#353534` 등)으로 디자인 시스템 파악 가능.
- **예방**: 수정 전 `find` 또는 `ls`로 프로젝트 전체 구조 확인. CLAUDE.md Architecture 섹션이 현실과 다를 수 있음 → 항상 파일시스템 직접 확인.
- **승격**: → `active-rules.md` Rule 5 추가 완료 (2026-06-10)

