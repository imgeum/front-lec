# 25. LifeCycle Method

생명주기 메소드

컴포넌트가 마운팅/업데이트/언마운팅 될 때 호출되는 메서드 + 컴포넌트에서 에러 발생시 호출되는 메서드

## 마운트

* constructor
* getDerivedStateFromProps
* render
* componenetDidMount

### constructor

컴포넌트의 생성자 메서드
컴포넌트가 만들어지면 가장 먼저 실행되는 메서드

### getDerivedStateFromProps

`props`로 받아온 것을 `state`에 넣어주고 싶을 때 사용한다.

앞에 `static`을 필요로 하고 안에서 `this`를 조회할 수 없다.
여기서 특정 객체를 반환하면 해당 객체 내의 내용이 컴포넌트의 `state`로 설정된다.
`null`을 반환하면 아무 일도 발생하지 않는다.

컴포넌트 처음 렌더링 될 때 / 리렌더링 될 때 매번 실행된다.

### render

컴포넌트를 렌더링하는 메서드

### componentDidMount

컴포넌트의 첫 렌더링이 마치면 호출되는 메서드.
호출될 때 컴포넌트과 화면에 나타난 상태이다.
DOM을 사용하는 외부 라이브러리(D3, masonry) 연동을 하거나, 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해 ajax 요청(axios, fetch)을 하거나, DOM의 속성을 읽거나 직접 변경하는 작업을 한다.

## 업데이트

* getDerrivedStateFromProps
* shouldComponentUpdate
* render
* getSnapshotBeforeUpdate
* componentDidUpdate

### getDerivedStateFromProps

컴포넌트의 props나 state가 바뀌었을 때 호출됨

### shouldComponentUpdate

컴포넌트의 리렌더링 유무를 결정하는 메서드
최적화할 때 사용. `React.memo`와 유사한 역할

### render

생략

### getSnapShotBeforeUpdate

컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면 이후 호출되는 `componentDidUpdate`함수에서 받아서 사용할 수 있다.

### componentDidUpdate

리렌더링 후 호출되는 메서드
3번째 파라미터로 `getSnapShotBeforeUpdate`에서 반환한 snapshot을 조회할 수 있다.

함수형 컴포넌트 + Hooks에서는 `getSnapShotBeforeUpdate`를 대체할 수 있는 기능이 아직 없다.
DOM 변화 직전 DOM의 속성을 확인하고 싶을 때 이 LifeCycle Method를 사용하면 된다.

## 언마운트

컴포넌트가 화면에서 사라지는 것.

* componentWillUnmount

### ComponentWillUnmount

컴포넌트가 화면에서 사라지기 직전에 호출

DOM에 직접 등록했던 이벤트 제거
`setTimeout`을 `clearTimeout`을 통해 제거
외부 라이브러리 사용시 dispose기능이 있다면 여기서 호출
