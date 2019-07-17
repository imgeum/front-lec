# 자바스크립트에서 비동기 처리 다루기

## 동기

```javascript
function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + 'ms');
}

console.log('작업 시작!');
work();
console.log('다음 작업');
```

## 비동기

함수를 비동기 형태로 전환

```javascript
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);
}

console.log('작업 시작!');
work();
console.log('다음 작업');
```

setTimeout 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms 단위)이 흐른 후 호출해줍니다. 
0ms 이후에 실행한다는 의미이지만 실제로는 4ms 이후에 실행됩니다. [참고](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#Reasons_for_delays_longer_than_specified)


## 콜백 함수

work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면 콜백 함수를 파라미터로 전달해주면 됩니다.
콜백 함수란, 함수 타입의 값을 파라미터로 넘겨줘서, **파라미터로 받은 함수를 특정 작업이 끝나고 호출**을 해주는 것을 의미합니다.

```javascript
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    callback();
  }, 0);
}

console.log('작업 시작!');
work(() => {
  console.log('작업이 끝났어요!')
});
console.log('다음 작업');
```

## 비동기 처리의 예시

* Ajax Web API 요청
  * 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.
* 파일 읽기
  * 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.
* 암호화/복호화
  * 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.
* 작업 예약
  * 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.
