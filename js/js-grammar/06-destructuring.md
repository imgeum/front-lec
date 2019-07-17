# 비구조화 할당 (구조 분해)

## 비구조화 할당

비구조화 할당 문법

```javascript
const object = { a: 1, b: 2};

const { a, b } = object;

console.log(a);
console.log(b);
```

함수의 파라미터에서의 비구조화 할당

```javascript
const object = { a: 1, b: 2};

function print({a, b}) {
    console.log(a);
    console.log(b);
}

print(object);
```

b값이 주어지지 않았을 때

```javascript
const object = { a: 1 };

function print({a, b}) {
    console.log(a);
    console.log(b);
}

print(object);
// 1
// undefined
```

## 비구조화 할당시 기본값 설정

함수의 파라미터에서 기본값 설정

```javascript
const object = { a: 1 };

function print({a, b=2}) {
    console.log(a);
    console.log(b);
}

print(object);
// 1
// undefined
```

기본 비구조화 할당에서 기본값 설정

```javascript
const object = { a:1};
const {a, b=2} = object;

console.log(a);
console.log(b);
```

## 비구조화 할당시 이름 바꾸기

기존 코드

```javascript
const animal = {
    name: '멍멍이',
    type: '개'
};

const nickname = animal.name;

console.log(nickname);
```

이름 바꾸기
'animal 객체 안에 있는 name을 nickname으로 선언하겠다'는 의미이다.

```javascript
const animal = {
    name: '멍멍이',
    type: '개'
};

const {name: nickname} = animal;

console.log(nickname);
```

## 배열 비구조화 할당

```javascript
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
```

배열 비구조화의 기본값 지정

```javascript
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
```

## 깊은 값 비구조화 할당

```javascript
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};
```

### 비구조화 할당 문법을 두번 사용하기

```javascript
const { name, languages } = deepObject.state.information;
const {value} = deepObject;

const extracted = {
    name,
    languages,
    value
};

/*
const extracted = {
    name: name,
    languages: languages,
    value: value
};
*/

console.log(extracted);
```

ES6의 object-shorthand 문법 - key 이름으로 선언된 값이 존재한다면 바로 매칭시켜주는 문법이다.

### 한번에 모두 추출하기

```javascript
const {
    state: {
        information: {name, language}
    },
    value
} = deepObject;

const extracted = {
    names, languages, value
};

console.log(extracted);
```

여러번에 걸쳐서 추출하는 것이 코드가 더욱 깔끔한 것 같다.
