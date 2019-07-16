# 단축 평가 (short-circuit evaluation) 논리 계산법

## &&연산자


### return undefined - if문

함수에서 animal 값이 제대로 주어졌을 때만 name 을 조회하고, 그렇지 않을때는 그냥 undefined 를 반환하게 하려 한다.
A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다. 반면, A 가 Falsy 한 값이라면 결과는 A 가 된다.

```javascript
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
```

### return undefined - && 연산자

```javascript
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined
```

### Truthy-Falsy && 예시

```javascript
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
```

## || 연산자

어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 할 수 있다.
A || B 는 만약 A 가 Truthy 할경우 결과는 A 가 됩니다. 반면, A 가 Falsy 하다면 결과는 B 가 된다.

### 단축전

```javascript
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

### 단축후

```javascript
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```
