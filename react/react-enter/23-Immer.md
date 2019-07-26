# 23. Immer를  사용한 더 쉬운 불변성 관리 

리액트에서 배열이나 객체를 업데이트 해야 할 때에는 직접 수정 하면 안되고 불변성을 지켜주면서 업데이트를 해주어야 합니다.

다음과 같이 `...` 연산자를 사용해서 새로운 객체를 만들어주어야 하죠.

배열도 마찬가지로, `push`, `splice` 등의 함수를 사용하거나 n 번째 항목을 직접 수정하면 안되고 다음과 같이 `concat`, `filter`, `map` 등의 함수를 사용해야 합니다.

데이터의 구조가 조금 까다로워지면 불변성을 지켜가면서 새로운 데이터를 생성해내는 코드가 조금 복잡해집니다.


객체
```js
const state = {
  posts: [
    {
      id: 1,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 1,
          text: '와 정말 잘 읽었습니다.'
        }
      ]
    },
    {
      id: 2,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 2,
          text: '또 다른 댓글 어쩌고 저쩌고'
        }
      ]
    }
  ],
  selectedId: 1
};
```

기존 불변성 코드
```js
const nextState = {
  ...state,
  posts: state.posts.map(post =>
    post.id === 1
      ? {
          ...post,
          comments: post.comments.concat({
            id: 3,
            text: '새로운 댓글'
          })
        }
      : post
  )
};
```

immer 라는 라이브러리를 사용하면 다음과 같이 구현을 할 수 있답니다.

```js
const nextState = produce(state, draft => {
  const post = draft.posts.find(post => post.id === 1);
  post.comments.push({
    id: 3,
    text: '와 정말 쉽다!'
  });
});
```

## immer 사용법

immer 설치

```bash
$ yarn add immer
```

import immer

```js
import produce from 'immer';
```

`produce` 함수
첫번째 파라미터 : 수정하고 싶은 상태
두번째 파라미터 : 어떻게 업데이트할지 정의하는 함수
두번째 파라미터에 넣을 함수는 불변성을 신경쓰지 않아도 업데이트하면 알아서 불변성을 지켜준다.

```js
const state = {
  number: 1,
  dontChangeMe: 2
};

const nextState = produce(state, draft => {
  draft.number += 1;
});
```

## Immer와 함수형 업데이트

`useState`를 사용한 함수형 업데이트

```js
const [todo, setTodo] = useState({
  text: 'Hello',
  done: false
});

const onClick = useCallback(() => {
  setTodo(todo => ({
    ...todo,
    done: !todo.done
  }));
}, []);
```

이렇게 setTodo 함수에 업데이트를 해주는 함수를 넣음으로써, 만약 useCallback 을 사용하는 경우 두번째 파라미터인 deps 배열에 todo 를 넣지 않아도 되게 되지요.

`produce`함수에 업데이트 함수만 넣어주면 반환값은 상태가 아닌 상태를 업데이트 해주는 함수가 된다.

```js
const todo = {
  text: 'Hello',
  done: false
};

const updater = produce(draft => {
  draft.done = !draft.done;
});

const nextTodo = updater(todo);

console.log(nextTodo);
// { text: 'Hello', done: true }
```

```js
const [todo, setTodo] = useState({
  text: 'Hello',
  done: false
});

const onClick = useCallback(() => {
  setTodo(
    produce(draft => {
      draft.done = !draft.done;
    })
  );
}, []);
```

가능하면 데이터의 구조가 복잡해지게 되는 것을 방지하세요. 그리고 어쩔 수 없을 때 Immer 를 사용하는것이 좋습니다. Immer 를 사용한다고 해도, 필요한곳에만 쓰고, 간단히 처리 될 수 있는 곳에서는 그냥 일반 JavaScript 로 구현하시길 바랍니다.
