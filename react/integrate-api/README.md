# 4. API 연동하기

컴포넌트에서 API 연동을 하게 될 때 어떻게 해야 하는지 알아보고, 더 깔끔한 코드로 구현하는 방법도 다뤄보도록 하겠습니다.

## 목차

1. API 연동 by `axios`
2. useReduce
   1. `LOADING`, `SUCCESS`, `ERROR` 액션
3. useAsync
   1. 커스텀 Hook
   2. 데이터 나중에 불러오기
   3. user 불러오기
4. react-Async
   1. promiseFn, deferFn / reload, run / watch
5. useContext
   1. Context 로 저장하기
   2. API 처리 함수 만들기
   3. 코드 리팩토링
      1. USER / USERS 단순화

## 정리

API 연동시 ReduX, MobX 같은 상태 관리 라이브러리를 사용하기도 한다.

### ReduX

장점 : 

* 보다 체계적인 비동기 관련 액션 관리
* 미들웨어 라이브러리(redux-saga, redux-observable) 사용하여 복잡한 비동기 작업 편하게 처리

[관련 링크](https://velog.io/@velopert/series/redux-or-mobx)