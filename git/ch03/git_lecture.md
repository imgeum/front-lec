# Chapter 3 - GIT

## 배울 내용

1. 소스트리로 로컬 저장소 추가
2. Add, Commit을 스테이지 개념과 함께 이해
3. Branch로 평행세계 나누기
4. Merge로 브랜치 합치기
5. 두 브랜치의 충돌(Conflict) 해결
6. 병합 요청(Pull Request, PR) 보내기
7. 저장소 복제: Fork

### 소스트리로 로컬 저장소 추가

1. Install SourceTree
2. Create Atalasian Account
3. Git Add Repos
   1. repo boxiting-oct, boxiting-cat

### Add, Commit 이해

#### commit in Git

1. 변경 사항의 모음(x), 하나의 최종 코드모음(o)
2. 기존 커밋과 비교하여 변경 파일만 저장하기 때문에 용량이 무겁지 않다.
   1. SVN은 바로 이전 커밋과의 변경사항만 저장
   2. 커밋당 용량은 더 가볍지만 한 버전을 보기 위해서는 처음 커밋부터 계산해야한다. -> 속도가 느리다.
   3. Git은 바로 이전 커밋만 보면 된다. -> 속도가 빠르다.

## 평행세계 나누기 - 브랜치(branch)

### 브랜치 이유

충돌이 날 수 있다. 동시에 똑같은 코드를 고칠 가능성이 있다.
충돌이 나더라도 합치는 시점에 명시적으로 충돌 해결이 가능하다.

#### git push origin master

master 브랜치(default branch)에 커밋을 푸시하라는 뜻
HEAD : 내가 지금 작업하고 있는 로컬 브랜치를 가리킴

### 브랜치 만들기

#### git branch cat

cat 브랜치를 현재 시점에 만들어라!

#### git checkout cat

cat 브랜치로 이동해라!
cat branch로 HEAD가 이동함.

### cat 브랜치에 커밋 추가하면?

master은 과거 커밋을
cat 브랜치는 새 커밋을 가리킴

### master로 이동하고, oct 브랜치를 만들고, 커밋하면

master 브랜치의 최신 커밋을 기점으로 oct 브랜치, cat 브랜치가 나뉘어짐
HEAD는 oct의 브랜치에 위치함

### 브랜치 생성 실습

1. [boxiting-cat repo] master에서 feat/main-page 브랜치 생성 (feat:feat브랜치만 볼 수 있어 편리함)
2. 커밋 추가
3. [boxiting-cat repo] pull 받기
4. master에서 feat/comment 브랜치 생성
5. 커밋 추가

## 두 버전 합치기 - 머지(merge)

master 브랜치의 최신 커밋(base)에 oct 브랜치의 최신 커밋(compare)을 합치려고 한다.

1. base가 될 브랜치를 master 브랜치로 이동
2. 'compare 브랜치인 oct를 나와 합치고 싶다'고 명령
   1. git merge oct
3. 합쳐진 결과는 문어 A 커밋
   1. oct와 master 브랜치 모두 문어 A를 가르킨다.

### merge 실습

1. [boxiting-cat repo] master 브랜치로 이동
2. feat/main-page 브랜치와 현재 브랜치(maseter)를 머지
3. master 브랜치에 feat/main-page의 최신 커밋이 반영된걸 확인

## 합치다가 충돌이 났어요 - 컨플릭트(Conflict)

### 두 문어의 합집합

1. Fast-forward
   1. 모자 안쓴 문어
   2. 모자 쓴 문어
   3. 의 합집합
      1. 모자 쓴 문어
2. Merge commit
   1. 모자 쓴 문어
   2. 꽃을 든 문어
   3. 모자를 쓰고 꽃을 든 문어
3. Conflict
   1. 모자 쓴 문어
   2. 꽃을 들고 생일모자를 쓴 문어
   3. 꽃을 들었지만 무슨 모자를 써야하는지 모른다.

#### Case 1 - 빨리감기 된 머지

#### Case 2 - 새로운 커밋이 만들어지는 머지

1. 새로운 커밋이 만들어지는 머지
   1. 충돌이 없음
2. 만약 충돌이 났다면?
   1. Conflict
   2. 머지할 때 두 버전이 같은 곳을 수정했다면 이를 수동으로 고쳐줘야 한다
   3. base, compare -> 수동으로 수정
   4. 새로운 merge 커밋이 생성

#### Case 3 -

### 머지, 컨플릭트 해결 실습

1. [boxiting-oct repo] feat/comment로 이동 후 '스파링 좋아요' 수정
2. master에 feat/comment 수정본 머지(머지 커밋 생성 확인)
3. [boxiting-cat repo] feat/main-page로 이동 후 '스파링 싫어요' 수정
4. master에 feat/main-page 수정본 머지(컨플릭트)
5. 컨플릭트 해결

## 저장소 통째로 복제하기 - 포크(fork)

### fork 예시

고양이와 문어가 만든 Boxiting 오픈소스가 흥했다.
너구리가 게시글 좋아요 기능을 만들어 기여하고자 한다.
다만 Boxiting 저장소의 푸시 권한은 고양이와 문어만 갖고있다.
기여하기 위해서 Collaborator로 등록해야할까?

#### 포크(fork): 저장소를 통째로 복제

1. 고양이와 문어의 Boxiting 저장소를 통째로 너구리의 계정에 복제해와서
2. 그 저장소(너구리)에 자유롭게 커밋, 푸시를 하고
3. 내 저장소의 브랜치와 고양이이와 문어 저장소의 브랜치를 머지해달라고 요청하면 된다.

github.com/boxer-developer/boxiting -> github.com/my_account/boxiting

### 브랜치 vs 포크

두가지 모두 코드를 협업하기 위해 분기점을 나누는 방식이지만 특성이 다르므로 내 프로젝트에 맞게 사용

* 브랜치
  * 의의
    * 하나의 원본저장소에서 분기를 나눈다.
  * 편리한 점
    * 하나의 원본저장소에서 코드 커밋 이력을 편하게 볼 수 있다.
  * 불편한 점
    * 다수의 사용자가 다수의 브랜치를 만들면 관리하기 힘들다.
* 포크
  * 의의
    * 여러 원격저장소를 만들어 분기를 나눈다.
  * 편리한 점
    * 원본저장소에 영향을 미치지 않으므로 마음껏 코드를 수정할 수 있다.
  * 불편한 점
    * 원본저장소의 이력을 보려면 따로 주소를 추가해줘야 한다.

### 포크 실습

1. GitHub에 새로운 계정 만들기 (너구리 포크 실습용)
2. Boxiting 저장소 포크
3. 포크한 저장소 클론
4. 소스트리에서 새 계정 추가 및 디폴트 계정으로 설정
5. 좋아요 기능 만들고 커밋, 푸시
6. GitHub에서 커밋 확인

#### 소스트리 유저 변경 오류

소스트리의 git은 pc에 설치된 로컬 git 프로그램을 사용한다.
로컬 git의 global user가 설정되어있을 경우 소스트리의 유저 변경기능을 사용해도 global user로 git 명령어가 작동한다.

```bash
# 리스트 확인
git config --global -list
```

```bash
# 전체 이름 삭제
git config --global --user-name
```

```bash
#  전체 이메일 삭제
git config --global --user-email
```

#### GitHub Collaborator 추가

Repository -> Settings -> Collaborators 탭에서 email이나 username, full name으로 검색하여 invite link를 보낸다.

## 내 코드를 머지해주면 안되겠니 - 풀 리퀘스트(Pull Request)

### 풀 리퀘스트

1. 머지하고 싶은 두 브랜치를 선택하고
2. 어떤 변경을 했는지 제목과 내용에 쓴다
3. 단일 저장소에서 보낼 수도 있고, 포크한 저장소에서도 보낼 수 있다.

base 머지를 당할 브랜치
compare 새로 만든 브랜치

### 풀 리퀘스트로 머지 요청 보내기

1. 코드를 함께 작성하는 팀원이 있다면, 최대한 **직접 머지하는건 피하고** 모든 머지를 **풀 리퀘스트를 통해서** 하자.
2. 동료가 내 풀 리퀘스트(PR)을 보고 **코드 리뷰**가 가능
3. 동료의 PR에 수정이 필요하면 댓글을 달아 change request를 보낼 수 있다.
4. 오픈소스에 PR을 보낼때는 '**기여 안내문서**(contribution guideline)'을 반드시 참고해야gka
   1. [React Contribute Guide](https://reactjs.org/docs/how-to-contribute.html)

### tip. 브랜치 관리하기

1. 보통 [feat/기능이름]으로 **한 사람이 개발하는 기능 브랜치를 만든다. (혹은 [fix/버그이름], [hotfix/급한버그])
2. 작업이 끝나면 [dev](혹은 [master]) 브랜치로 PR을 보낸다.
3. [dev] 브랜치에서 큼지막한 작업이 모두 머지되면 [release](혹은 [latest]) 브랜치로 머지시키고 이를 **실서버에 배포**한다.
4. **직접 커밋**은 feat(혹은 fix, hotfix)브랜치에만 한다.
5. dev, master, release 브랜치에는 **직접 커밋하지 말고 머지만** 한다.

### 풀 리퀘스트 실습

1. 포크한 저장소에서 원본 저장소로 풀 리퀘스트 보내기
2. 풀 리퀘스트 수락 후 머지하기

## 리뷰

