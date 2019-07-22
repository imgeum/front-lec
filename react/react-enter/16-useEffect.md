# useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기

useEffect라는 Hook을 사용하여 컴포넌트가 마운트됐을 때(처음 나타났을 때), 언마운트됐을 때(사라질 때), 업데이트됐을 때(특정 props가 바뀔 때) 특정 작업을 처리하는 방법에 대해 알아보자.

## 마운트/언마운트

`useEffect` 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (`deps`)을 넣습니다. 만약에 `deps` 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 `useEffect`에 등록한 함수가 호출됩니다.

그리고, useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.

#### UserList.js

```javascript
useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
```

주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있다.

* props 로 받은 값을 컴포넌트의 로컬 상태로 설정
* 외부 API 요청 (REST API 등)
* 라이브러리 사용 (D3, Video.js 등...)
* setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

그리고 언마운트 시에 하는 작업들은 다음과 같은 사항이 있다.

* setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
* 라이브러리 인스턴스 제거

## deps에 특정 값 넣기

deps에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 