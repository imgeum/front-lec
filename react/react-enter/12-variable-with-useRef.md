# useRef 로 컴포넌트 안의 변수 만들기

컴포넌트에서 특정 DOM 을 선택해야 할 때 `ref`를 사용한다.
함수형 컴포넌트에서 이를 설정할 때 `useRef`를 사용하여 설정한다.

`useRef` Hook 은 2가지 용도가 있다.
DOM 을 선택하는 용도, 컴포넌트 안에서 조회 및 수정 가능한 변수를 관리하는 용도

`useRef`로 관리하는 변수는 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다.
리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출 및 렌더링 이후에 업데이트된 상태를 조회할 수 있지만 `useRef`로 관리하는 변수는 설정 이후 바로 조회가 가능하다.

이 변수를 사용하여 다음과 같은 값을 관리할 수 잇다.

* `setTimeout`, `setInterval` 을 통해서 만들어진 `id`
* 외부 라이브러리를 사용하여 생성된 인스턴스
* scroll 위치

## 예제

배열을 App 에서 선언하여 UserList에게 Props로 전달한다.

#### UserList.js

```javascript
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
```

#### App.js

```javascript
function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return <UserList users={users} />;
}
```

`useRef()`를 사용할 때 파라미터를 넣어주면, 이 값이 `.current` 값이 기본값이 된다.
이 값을 수정/조회할 때에는 `.current` 값을 수정/조회하면 된다.
