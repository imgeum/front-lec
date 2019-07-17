# 함수의 기본 파라미터

기본 값을 지정하지 않았을 때 

```javascript
functoin calculateCircleArea(r) {
    const radius = r || 1
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area)
```

함수의 기본 파라미터 사용

```javascript
functoin calculateCircleArea(r = 1) {
    const radius = r || 1
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area)
```
