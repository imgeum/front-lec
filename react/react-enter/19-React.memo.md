# React.memo를 사용한 컴포넌트 리렌더링 방지

컴포넌트의 props가 바뀌지 않았다면, 리렌더링을 방지하여 성능 최적화를 해줄 수 있는 React.memo

#### CreateUser.js

```javascript
const CreateUser = ({ username, email, onChange, onCreate }) => {
...
};

export default React.memo(CreateUser);
```

#### UserList.js

```javascript
const User = React.memo(function User({ user, onRemove, onToggle }) {
  const {username, email, id, active} = user;
  ...
});

function UserList({ users, onRemove, onToggle }) {
  return (
      ...
  );
}

export default React.memo(UserList);
```

위의 코드를 적용한 후, input을 수정할 때 하단의 UserList가 리렌더링되지 않는다.

하지만 User 중 하나라도 수정하면 모든 User들이 리렌더링되고, CreateUser도 리렌더링된다.
users 배열이 바뀔 때 마다 onCreate도 새로 만들어지고, onToggle, onRemove도 새로 만들어지기 때문이다.

`deps`에 `users`가 들어있기 때문에 배열이 바뀔 때마다 함수가 새로 만들어진다.

최적화하기 위해서는 `deps`에서 `users`를 지우고, 함수들에서 `useState`로 관리하는 `users`를 참조하지 않게 하는 것이다.
함수형 업데이트를 통해 위 내용을 할 수 있다.

함수형 업데이트를 하게 되면, `setUsers`에 등록하는 콜백함수의 파라미터에서 최신 `users`를 참조할 수 있기 때문에 `deps`에 `users`를 넣지 않아도 된다.

