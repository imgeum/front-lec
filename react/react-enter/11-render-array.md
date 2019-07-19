# 배열 렌더링하기

아래의 배열을 컴포넌트로 렌더링하는 방법

```javascript
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
```

그대로 코드 작성하기.
가장 기본적인 방법. 비효율적이다.

```javascript
  <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div>
    </div>
  );
```

그런데, 재사용되는 코드를 일일히 넣는게 좋지 않으니 컴포넌트를 재사용할 수 있도록 새로 만들어준다.

한 파일에 여러개의 컴포넌트를 선언 가능하다.

```javascript
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
```

```javascript
return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
```

고정적인 배열은 인덱스를 하나하나 조회해가며 렌더링이 가능하지만 동적인 배열은 불가능하다.

동적인 배열을 렌더링할 때는 JS의 내장함수인 `map()`을 사용한다. [링크](https://learnjs.vlpt.us/basics/09-array-functions.html#map)

`map()` 함수는 배열 내 각 원소를 변환하여 새 배열을 만든다. 리엑트에서 동적인 배열을 렌더링할 때에는 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 반환하는데 사용한다.

```javascript
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
```

```javascript
return (
    <div>
      {users.map(user => (
        <User user={user} />
      ))}
    </div>
  );
```

하지만 브라우저의 콘솔에서는 key가 설정되지 않았다는 경고를 보여준다.

리액트에서 배열을 렌더링할 때 `key`라는 props를 설정해야한다.
`key`값은 각 원소들마다 가지고 있는 고유값으로 렌더링해야 한다.

```javascript
return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
```

데이터가 소규모일 경우, 자주 업데이트되지 않는 경우 key에 index를 넣어도 괜찮지만, 비효율적으로 업데이트된다.

## key의 존재유무에 따른 업데이트 방식

### key가 없을 때

배열에 삽입되는 값에 따라 기존 배열의 원소가 바뀌며 제거된다. 비효율적.

### key가 있을 때

수정되지 않은 기존의 값은 그대로 두고 원하는 내용을 삽입하거나 삭제한다. 효율적.

