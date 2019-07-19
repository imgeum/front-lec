# 배열에 항목 추가하기

## CreateUsers.js 컴포넌트 생성

#### CreateUsers.js

```javascript
import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
```

이 컴포넌트를 App 에서 렌더링한다.

#### App.js

```javascript
return (
    <>
      <CreateUser />
      <UserList users={users} />
    </>
  );
```

CreateUser 컴포넌트에 필요한 props를 App에서 준비해준다.

#### App.js

```javascript
const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };


  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
```

users도 `useState`를 사용하여 컴포넌트의 상태로서 관리해준다.

```javascript
 const [users, setUsers] = useState([
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
  ]);
```

## 배열에 변화를 주기

### spread 연산자

```javascript
const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    ...
  };
 
```

### concat

```javascript
const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    ...
  };
```
