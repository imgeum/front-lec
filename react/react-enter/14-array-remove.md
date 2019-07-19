# 배열에 항목 제거하기

UserList에서 각 User 컴포넌트를 보여줄 때 삭제 버튼을 렌더링해준다.

```javascript
function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}
```

onRemove를 호출하는 함수를 만들어서 넣어줘야한다.
onRemove를 바로 대입시키면 렌더링이 될 때 onRemove가 호출되어 원소가 삭제된다.
위와같이 함수를 대입할 때 함수를 호출하는 함수를 만들어야 한다.

```javascript
const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
```
