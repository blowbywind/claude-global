---
description: Conventional Commits 형식의 깔끔한 커밋 생성
---

현재 변경 사항을 분석하여 Conventional Commits 형식으로 커밋하세요.

## 절차

1. `git status` 및 `git diff --staged` 실행 (unstaged도 `git diff` 확인)
2. 변경 사항을 논리적 단위로 그룹화
3. 아래 형식으로 커밋 메시지 작성:

```
<type>(<scope>): <subject>

[body - 선택, 무엇을/왜 변경했는지]

[footer - 선택, BREAKING CHANGE 또는 이슈 참조]
```

**Type 목록**:
| type | 용도 |
|------|------|
| `feat` | 새 기능 |
| `fix` | 버그 수정 |
| `refactor` | 리팩토링 (기능 변경 없음) |
| `docs` | 문서만 변경 |
| `test` | 테스트 추가/수정 |
| `chore` | 빌드/도구/설정 변경 |
| `perf` | 성능 개선 |
| `style` | 코드 스타일 (로직 변경 없음) |
| `ci` | CI/CD 설정 변경 |

**규칙**:

- subject: 50자 이내, 소문자 시작, 마침표 없음, 명령형 동사
- body: 72자 줄바꿈, `why`에 집중
- BREAKING CHANGE: footer에 `BREAKING CHANGE: <설명>` 추가
- 코드 주석과 커밋 메시지는 **영어** 사용

4. `git add <파일>` (민감 파일 포함 여부 확인 후)
5. 커밋 실행 후 `git status`로 확인

$ARGUMENTS
