# Sass

Sass : Syntatically(문법적으로) Awesome Style Sheet

CSS pre-processor

[참고1-velopert님 post](https://velopert.com/1712)
[참고2-Sass 가이드라인](https://sass-guidelin.es/ko/)

sass/scss 확장자 지원. scss 문법이 더 많이 사용됨

프로젝트 내 `node-sass` 라이브러리를 설치해야한다.

```bash
$ yarn add node-sass
```

## SCSS 특징

### 변수 사용 가능

```scss
$blue: #228be6
```

### 주석 사용 가능

```scss
/* 기존 CSS 주석 */

// SCSS에서만 사용 가능한 주석
```

### 함수 사용

```scss
background: darken($blue, 10%);
background: lighten($blue, 10%);
```

### &

```scss
.Button {
  &.large {

  }
}
```

```scss
.Button.large {

}
```

### mixin

코드의 재사용성 증가

```scss
@mixin button-color($color) {
  background: $color;
  &:hover {
    background: lighten($color, 10%);
  }
  &:active {
    background: darken($color, 10%);
  }
}

.Button {
    &.blue {
    @include button-color($blue);
  }

  &.gray {
    @include button-color($gray);
  }

  &.pink {
    @include button-color($pink);
  }
}
```

### ...rest props

spread 와 rest를 사용

이 문법은 주로 배열과 객체, 함수의 파라미터, 인자를 다룰 때 사용하는데, 컴포넌트에서도 사용 할 수 있다.

```scss
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
```

그래서 이렇게 컴포넌트가 어떤 props 를 받을 지 확실치는 않지만 그대로 다른 컴포넌트 또는 HTML 태그에 전달을 해주어야 하는 상황에서 사용한다.

## classnames

조건부 스타일링을 할 때 함수의 인자에 문자열, 배열, 객체 등을 전달하여 손쉽게 문자열을 조합 할 수 있다.

설치

```bash
 $ yarn add classnames
```

사용법

```scss
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
```

## 정리

매번 버튼을 만들때마다 새로운 컴포넌트를 만들게 아니라 위와 같이 다양한 옵션을 넣을 수 있게 해서 그때 그때 커스터마이징 해서 사용하는 것이 효율적입니다.
