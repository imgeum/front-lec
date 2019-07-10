# Learn Git&GitHub feat CLI

## Git 명령어

### init

git initialize
.git 디렉토리 생성(local repo)
ver info, remote repository address
clone시 자동으로 local repo 생성
한 폴더에 하나의 local repo

### add

commit할 파일 추가

### commit

* git commit -m "commit message"

#### 커밋 이모저모

1. 의미있는 변동사항을 묶어서 커밋
2. 버그를 고치는데 파일 5개 수정 -> 그 파일 5개를 묶어(add) 하나의 커밋
3. 추후에 특정 버그를 고치는데 어떤 파일을 수정했는지 손쉽게 파악 가능
4. 커밋 메시지 잘 적기.

#### 커밋은 기차처럼 쌓인다

1. 처음 파일에서
2. 라이브러리 연동하고
3. 버그 고치고
4. 테스트 작성


### log

* 생성 커밋 보기

## Git 실습

1. 디렉토리 생성
   * boxiting-cat
2. git init
3. 파일 생성
    * index.html
    * README.md
4. git add README.md
5. git commit -m "README.md 추가"
    * commit 내용 확인 (파일/변경 라인)
6. git log
    * 커밋 기록 확인
7. git add .
    * 전부 추가
8. git commit -m "메인 페이지 생성"
9. git log

## GitHub에 올리기

### Command

#### git remote add

원격 저장소 추가
```shell
git remote add [remote-repo-name] [url]
git remote add origin https
```

#### git push

만든 커밋 푸시
``` shell
git push origin master
```

### GitHub

#### gist, organization, proj

1. repository
   1. 코드 저장소
2. gist
   1. 코드 조각
3. organization
   1. 프로젝트 팀
4. project

### clone

원격 저장소를 내 컴퓨터에 받아오기

### pull

원격 저장소의 데이터를 가져오기

### Collaborator

Repository > Settings > Collaborators > Add collaborator



