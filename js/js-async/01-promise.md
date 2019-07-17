# Promise

ES6에서 도입된 기능으로 비동기 작업을 조금 더 편하게 처리할 수 있도록 해준다.

이전의 비동기 작업은 콜백 함수로 처리했는데, 비동기 작업이 많아질 경우 코드가 쉽게 난잡해졌다.

```javascript
function increaseAndPrint(n, callback) {
    setTimeOut(() => {
        const increased = n + 1;
        console.log(increased);
        if(callback) {
            callback(increased);
        }
    }, 1000);
}

increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('끝!');
                });
            });
        });
    });
});
```

이런 식의 코드를 Callback Hell이라고 부른다.
비동기적으로 처리해야 하는 일이 많아질수록, 코드의 깊이가 계속 깊어지는 현상이 있다.
Promise를 사용하면 이렇게 코드의 깊이가 깊어지는 현상을 방지할 수 있다.

## Promise 만들기

```javascript
const myPromise = new Promise((resolve, reject) => {
    //구현..
})
```

Promise는 성공/실패할 수 있다.
성공시 resolve 호출하고, 실패시 reject 호출한다.

성공시 resolve사용, .then()을 사용한다.

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeOut(() => {
        resolve(1);
    }, 1000);
});

myPromise.then(n => {
    console.log(n);
});
```

실패시 rejet 사용, .catch을 통해 실패시 수행할 작업을 설정한다.

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeOut(() => {
        reject(new Error());
    }, 1000);
});

myPromise.then(n => {
    console.log(n);
}).catch(error => {
    console.log(error)
});
```

## Promise를 만드는 함수 작성하기

```javascript
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeOut(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(0).then((n) => {
    console.log('result : ', n);
})
```

연달아 Promise를 사용할 때
then 내부 넣은 함수에서 또 Promise를 리턴하게 되면 연달아서 사용이 가능하다.

```javascript
increaseAndPrint(0).then((n) => {
    console.log('result : ', n);
}).then((n) => {
    console.log('result : ', n);
}).then((n) => {
    console.log('result : ', n);
}).then((n) => {
    console.log('result : ', n);
}).then((n) => {
    console.log('result : ', n);
}).catch(e => {
    console.error(e);
});
```

위 코드는 이렇게 정리가 가능하다.

```javascript
increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
        console.error(e);
    });
```

Promise를 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 된다.

## Promise의 문제점

1. 에러를 잡을 때 몇번째에서 발생했는지 알아내기 어렵다.
2. 특정 조건에 따라 분기를 나누는 작업이 어렵다.
3. 특정 값을 공유해가면서 작업을 처리하기 까다롭다.

async/await을 사용하면 이러한 문제점을 해결할 수 있다.
