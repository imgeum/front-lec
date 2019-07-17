# spread와 rest

## spread

before

```javascript
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(slime === cuteSlime);
```

after

```javascript
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);
```

### 배열에서 spread

before

```javascript
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
const anotherAnimals_1 = animals.concat('비둘기');

console.log(animals);
console.log(anotherAnimals);
```

after

```javascript
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers)
```

## rest

### 객체에서의 rest

```javascript
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;

console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(slime)
```

### 배열에서의 rest

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
// 불가
// const [...rest, one] = numbers;

console.log(one);
console.log(two);
console.log(rest);
```

### 함수 파라미터에서의 rest

```javascript
function sum(a, b, c, d, e, f, g) {
    let result = 0;
    if (a) result += a;
    if (b) result += b;
    if (c) result += c;
    if (d) result += d;
    if (e) result += e;
    ...
    return result;
}

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
```

### 함수 인자에서의 spread

인자 : 함수를 사용할 때 주어지는 값
파라미터 : 함수에 주어진 값

```javascript
function subtract(x, y) {
    return x - y;
}

const numbers = [1, 2];
const result = subtract(...numbers);
const result = subtract(numbers[0], numbers[1]));

console.log(result);
```

## Quiz

함수에 n개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 구하시오.
[링크](https://codesandbox.io/s/hardcore-chaum-jgpv7)

### 예

```javascript
function max() {
    return 0;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result)
```

```javascript
function max(...numbers) {
  let max_val = 0;
  numbers.forEach(num => {
    if(max_val < num) max_val = num;
  });
  return max_val;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
```
