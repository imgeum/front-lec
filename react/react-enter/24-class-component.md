# 24. 클래스형 컴포넌트

클래스형 컴포넌트를 유지보수시 필요
함수형 컴포넌트 + Hooks로 못하는 작업이 2개 있다
구 리액트 관련 라이브러리에 Hooks 지원이 안되는 경우가 있다
react-native 관련 라우터 라이브러리인 react-native-navigation의 경우에도 클래스형 컴포넌트를 어쩔 수 없이 사용해야하는 일이 있다.

## 클래스형 컴포넌트 만드는 방법

#### 기존 함수형 컴포넌트 - Hello.js

```js
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello;
```

#### 클래스형 컴포넌트 - Hello.js

```js
import React, { Component } from 'react';

class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello;
```

클래스형 컴포넌트에서 `render()` 메서드가 있어야 한다.
이 메서드에서는 렌더링할 JSX를 반환한다.
`props`를 조회해야 할 때 `this.props`를 조회하면 된다.

`defaultProps` 설정은 함수형 컴포넌트와 똑같이 해도 된다.
클래스 내부에 `static` 키워드와 함께 선언 가능

#### Hello.js

```js
class Hello extends Component {
    static defaultProps = {
        name: 'NoName'
    };
}
```

#### 기존 함수형 컴포넌트 Counter.js

```js
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

#### 클래스형 컴포넌트 Counter.js

```js
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>0</h1>
        <button>+1</button>
        <button>-1</button>
      </div>
    );
  }
}

export default Counter;
```

## 커스텀 메서드 만들기


#### 메서드 Counter.js

```js
class Counter extends Component {
  handleIncrease() {
    console.log(this);
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}
```

클래스 내부에 종속된 함수를 "메서드" 라고 부릅니다. 클래스에서 커스텀 메서드를 만들게 될 때에는 보통 이름을 `handle...` 이라고 이름을 짓습니다. 단, 정해진 규칙은 아니므로 꼭 지키실 필요는 없습니다.

`handleIncrease` 에서 this 를 콘솔에 출력하면 `undefined` 가 나타나게 됩니다.
이렇게 되는 이유는, 우리가 만든 메서드들을 각 button 들의 이벤트로 등록하게 되는 과정에서 각 메서드와 컴포넌트 인스턴스의 관계가 끊겨버리기 때문입니다.

해결할 수 있는 3가지 방법

### 1. 클래스 생성자 메서드 `constructor`에서 `bind` 작업을 하는 것

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  ...
}
```

### 2.  커스텀 메서드를 선언 할 때 화살표 함수 문법을 사용해서 작성하는 것

```js
class Counter extends Component {
  handleIncrease = () => {
    console.log('increase');
    console.log(this);
  };

  handleDecrease = () => {
    console.log('decrease');
  };
  ...
}
```

### 3. onClick 에서 새로운 함수를 만들어서 전달을 하는 것

렌더링 할 때마다 함수가 새로 만들어지기 때문에 나중에 컴포넌트 최적화 할 때 까다롭기 때문에 사용하지 않는다.

```js
return (
  <div>
    <h1>0</h1>
    <button onClick={() => this.handleIncrease()}>+1</button>
    <button onClick={() => this.handleDecrease()}>-1</button>
  </div>
);
```

## 상태 선언하기

클래스형 컴포넌트에서 상태를 관리 할 때에는 `state` 라는 것을 사용합니다. `state` 를 선언 할 때에는 `constructor` 내부에서 `this.state` 를 설정해주시면 됩니다.

```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  ...

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        ...
  }
}
```

클래스형 컴포넌트의 state 는 무조건 객체형태여야 합니다.

render 메서드에서 state 를 조회하려면 this.state 를 조회하시면 됩니다.

우리가 화살표 함수 문법을 사용하여 메서드를 작성 할 수 있게 해줬던 class-properties 문법이 적용되어 있다면 굳이 constructor 를 작성하지 않고도 다음과 같이 state 를 설정해줄 수 있습니다.

```js
class Counter extends Component {
  state = {
    counter: 0
  };
  ...
}
```

CRA 로 만든 프로젝트에서 보통 이렇게 활용한다.

## 상태 업데이트하기

상태를 업데이트해야 할 때에는 `this.setState` 함수를 사용하면 됩니다.

```js
class Counter extends Component {
  state = {
    counter: 0
  };

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  ...
}
```

`this.setState` 를 사용 할 떄는 위 코드 처럼 객체 안에 업데이트 하고 싶은 값을 넣어서 호출해주면 되는데요, 만약에 다음과 같이 `state` 에 다른 값이 들어있어도 `this.setState` 를 할 때 파라미터에 넣는 객체에 `fixed` 값을 넣어주지 않아도 값이 유지됩니다.

하지만, 클래스형 컴포넌트의 state 에서 객체 형태의 상태를 관리해야 한다면, 불변성을 관리해줘가면서 업데이트를 해야 합니다.

## `setState`의 함수형 업데이트

```js
class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };
  ...
}
```

함수형 업데이트는 보통 한 함수에서 setState 를 여러번에 걸쳐서 해야 되는 경우에 사용하면 유용합니다. 예를 들어서 다음과 같은 코드는 setState 를 두번 사용하면서 state.counter 값에 1을 더해주는 작업을 두번주지만, 실제로 2가 더해지지지는 않습니다.

업데이트 할 객체를 넣어주는 setState 에서 2씩 더해지지 않는 이유는 setState 를 한다고 해서 상태가 바로 바뀌는게 아니기 때문입니다. setState 는 단순히 상태를 바꾸는 함수가 아니라 상태로 바꿔달라고 요청해주는 함수로 이해를 해야합니다 (참고). 성능적인 이유 때문에 리액트에서는 상태가 바로 업데이트 되지 않고 비동기적으로 업데이트가 됩니다.

만약에, 상태가 업데이트 되고 나서 어떤 작업을 하고 싶다면 다음과 같이 setState 의 두번째 파라미터에 콜백함수를 넣어줄 수도 있습니다.

```js
handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log(this.state.counter);
      }
    );
};
```