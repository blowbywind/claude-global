---
name: server-network-warning
description: 홈서버 Docker 환경에서 작업 시 인터넷 끊김을 유발하는 명령어와 안전한 대안
metadata:
  type: feedback
---

## 자동 복구 설정 (2026-06-11 추가)

**문제**: docker compose 재시작 또는 ufw reset 후 ufw-docker 규칙 만료 → 외부 접속 타임아웃

**설치된 자동 복구 서비스**: `caddy-ufw-watch.service`
- web_caddy 컨테이너 start 이벤트 감지 → ufw-docker 규칙 자동 재적용
- 설치 명령: `sudo cp /opt/web-infra/caddy-ufw-watch.service /etc/systemd/system/ && sudo systemctl enable --now caddy-ufw-watch.service`
- 상태 확인: `sudo systemctl status caddy-ufw-watch.service`

**수동 복구 스크립트**: `sudo /opt/web-infra/apply-ufw.sh`
- 죽은 브리지 제거 + ufw-docker 재적용 + hermes-dnat 재시작을 한 번에 수행

**진단 힌트**: timeout = UFW 차단, connection refused = 서비스 미실행

---

## 현재 환경 (2026-06-11 기준)

- **ufw-docker 설치 완료** — UFW + Docker 충돌 구조적 해결
- `ufw reload` / `systemctl restart ufw` 이제 안전 (Docker 규칙 보존됨)
- Docker 컨테이너는 `expose`만 사용, `ports`로 외부 바인딩 최소화
- ~~hermes-dnat.service~~ — hermes 폐기(2026-09-04)로 서비스 삭제됨, 더 이상 존재하지 않음

---

## 주의 명령어

### 1. `sudo ufw reload` — 이제 안전 (ufw-docker 설치 후)

**이전 문제:** UFW reload 시 Docker MASQUERADE/FORWARD 규칙 소멸 → 컨테이너 인터넷 끊김.
**현재 상태:** ufw-docker가 `/etc/ufw/after.rules`, `/etc/ufw/after6.rules`에 DOCKER-USER 체인 규칙을 주입해 reload 후에도 보존됨.

### 2. `docker compose up/down/restart` (포트 노출 서비스) — 주의

**Why:** Docker가 iptables FORWARD/NAT 규칙을 재작성. 노출 포트 없는 서비스는 상대적으로 안전.
**How to apply:** 새 서비스는 `ports:` 대신 `expose:`로 내부 통신만 설계. 기존 서비스 재시작은 트래픽 적은 시간에.

**⚠️ docker compose down/up 후 필수 작업:**
```bash
# 1. 컨테이너 IP 확인
docker inspect web_caddy --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'
# 2. ufw-docker 규칙 갱신 (IP가 바뀌므로 항상 재실행)
sudo ufw-docker allow web_caddy 80/tcp
sudo ufw-docker allow web_caddy 443/tcp
sudo ufw-docker allow web_caddy 9119/tcp
# 3. 죽은 브리지 확인
ip link show | grep "br-" | grep "NO-CARRIER"
# → NO-CARRIER 브리지가 172.18.0.0/16 점유 시 라우팅 오류 발생 (아래 참조)
```

### 3. SSH 파이프로 대용량 데이터 전송 — 위험

**Why:** 가정용 업로드 대역폭 한계로 라우터 버퍼 포화 → 패킷 손실 → 인터넷 일시 불안정.
**How to apply:** 대용량 파일은 서버에서 직접 다운로드:

```bash
# 위험: tar czf - ... | ssh server "tar xzf -"
# 안전: ssh server "cd /path && git pull"
# 안전: docker pull은 서버-to-DockerHub
```

### 4. `sudo apt install iptables-persistent` — **절대 금지**

**Why:** 이 서버에서 `iptables-persistent`를 설치하면 **ufw가 자동 제거됨** (패키지 충돌).
ufw 없이는 ufw-docker도 동작 불가. 2026-06-11 실제 발생.
**대안:** 커스텀 iptables 규칙은 systemd 서비스로 영속화 (아래 참조).

### 5. `/etc/ufw/before.rules`에 `*nat` 섹션 추가 — **금지**

**Why:** UFW가 `ufw enable`/`ufw reload` 시 before.rules의 `*nat` 섹션으로 nat 테이블을 **완전 덮어씀**.
Docker의 PREROUTING DNAT 규칙(포트 포워딩 전체)이 소멸 → 모든 컨테이너 포트 외부 접근 불가.
**대안:** 커스텀 DNAT 규칙은 systemd 서비스로 관리:
```bash
# /etc/systemd/system/hermes-dnat.service 참조
sudo systemctl status hermes-dnat.service
```

---

## 새 호스트 서비스를 Caddy로 외부 노출하기 (2026-08-05 확인, music_play 사례)

**패턴**: bare Node/Python 프로세스를 특정 호스트 IP(예: `172.30.1.92`, `0.0.0.0` 금지)에 바인딩 + Caddy `handle_path /prefix* { reverse_proxy 172.30.1.92:PORT }` 추가만으로는 부족함.
**원인**: UFW가 Docker 브리지(`172.18.0.0/16`) → 호스트 포트 접근을 기본 차단(`docker exec web_caddy curl host:PORT` → 타임아웃).
**해결**: hermes처럼 DNAT 없이도, 기존 `console.snowball.me.kr → 172.18.0.1:9300` 규칙과 동일하게 UFW에서 명시적으로 허용하면 충분:
```bash
sudo ufw allow from 172.18.0.0/16 to any port <PORT> proto tcp
```
**검증 순서**: ① `docker exec web_caddy curl -s -o /dev/null -w "%{http_code}" --max-time 5 http://<host-ip>:<port>/` (컨테이너→호스트 직접 확인) ② `curl --resolve <domain>:443:127.0.0.1 https://<domain>/<path>/` (SNI 지정, 이 샌드박스는 외부 DNS/egress가 막혀 있어 실제 도메인으로 직접 curl 시 타임아웃 — `--resolve`로 로컬 우회 필수).
**주의**: 새 서비스는 항상 전용 포트 사용 — `music_play` 개발 중 기본 바인딩(`app.listen(PORT)`, host 미지정)이 `0.0.0.0`이 되어 기존 `/auth/* → 172.30.1.92:3000` 라우트를 의도치 않게 가로챈 사고 발생(무인증 노출 위험). 이후 서버 코드 기본값을 `HOST=127.0.0.1`로 바꾸고 운영용 systemd 서비스에서만 `HOST=<host-ip>` 오버라이드하는 방식으로 수정.

---

## 안전한 작업 순서

1. UFW 규칙 추가 → `sudo ufw allow <port>` 사용 가능 (ufw-docker 설치 후 reload 안전)
2. Docker 이미지 pull → 서버에서 직접 (`docker pull`)
3. docker compose up (새 서비스, expose만) → 비교적 안전
4. 대용량 파일 → 서버에서 wget/git/npm/pnpm 직접 실행

## ufw-docker 외부 접근 허용

외부에서 접근해야 하는 컨테이너(예: Caddy)는 ufw-docker로 명시적 허용 필수:

```bash
sudo ufw-docker allow <container_name> <port>/tcp
```

허용하지 않으면 Let's Encrypt ACME 챌린지 포함 모든 외부 접근이 차단됨.
현재 허용된 컨테이너: web_caddy (80/tcp, 443/tcp, 9119/tcp)

---

## Docker 브리지 라우팅 오류 (2026-06-11 발생)

**증상:** `docker compose down && docker compose up -d` 후 외부(LAN/WAN)에서 Docker 포트 접근 불가.
컨테이너에서 외부로 ping은 되지만 외부에서 컨테이너로 TCP 불가.

**원인:** 구 브리지(`br-8cbfe101b3b9`, NO-CARRIER)가 라우팅 테이블에 잔존하여
172.18.0.0/16 경로를 점유. 새 컨테이너(br-39a03dc15944)로 패킷이 라우팅되지 않음.

**진단:**
```bash
ip route show | grep 172.18
# 출력이 "dev br-XXXXXXXX" 인데 ip link show | grep br-XXXXXXXX 가 NO-CARRIER면 오류
```

**해결:**
```bash
sudo ip link delete br-<죽은브리지ID>
# 또는
docker network prune  # 미사용 네트워크 정리
```

---

## Caddy + hermes 대시보드 설정 — 폐기 (2026-09-04)

**hermes는 더 이상 사용하지 않음** (2026-06-11 구성, `hermes-dnat.service` 삭제·`hermes-dashboard.service` inactive 확인, 재사용 불가).

**Caddy 재시작 후 필수 작업** (여전히 유효):
```bash
# 1. Caddyfile 컨테이너 동기화 (inode 교체 방지)
docker exec -i web_caddy sh -c 'tee /etc/caddy/Caddyfile > /dev/null' < /opt/web-infra/Caddyfile
docker exec web_caddy caddy reload --config /etc/caddy/Caddyfile
# 2. ufw-docker FORWARD 규칙 갱신 (Caddy IP 변경 시)
sudo ufw-docker allow web_caddy 80/tcp
sudo ufw-docker allow web_caddy 443/tcp
sudo ufw-docker allow web_caddy 9119/tcp
```
