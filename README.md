# Nomad Redux

redux개념을 좀 더 확실하게 잡기위해 추가 강의를 학습 중.
강의 제공은 js이지만 최대한 typescript를 바로 적용하여 활용하고 연습한다.

# Redux

react에 대한 개념보단 redux에 대한 개념을 익히고 추후 어떤 언어에서든 redux를 사용할 수 있도록 학습한다.

## 1.1 Store and Reducer

### 🔹store

`redux`에서 `createStore`메소드를 쓸 수 있는데, 이것은 무엇일까?
먼저 `store`라는 개념을 알아야한다.
`store`는 데이터를 넣는 공간으로 `state`를 넣는다고 보면 된다.
`createStore`는 `reducer`를 매개변수로 요구한다.
결과값은 `getState()`메소드를 통해 출력 할 수 있다.

ps. redux에서 createStore는 deprecate처리되어 있지만, 그냥 사용해도 무관하며 legacy_createStore를 as createStore라고 명명하고 사용하면 취소선 없이 사용할 수 있다.

### 🔹reducer

`reducer`는 `state`를 변경 시키는 메소드로 사용자가 작성하는 환경에 맞춰 `state`값들을 변경한다. 여기서 정수형의 값을 변경하거나 array, object등 원하는 데이터를 이곳에서만 변경하며, 변경하는 값은 `action`이라는 키워드를 통해 구분하여 처리한다.
`reducer`의 연산이 끝나고 return하는 값이 현재의 어플리케이션 `state`값이 되며 `store`에 등록된다.

### 🔹state

나의 어플리케이션에서 바뀌는 data들을 `state`라고 취급한다.
카운트 어플리케이션의 count와 같은 증가하거나 감소하는 정수값들을 의미한다.

### 🔹action

`store`에 등록하는 `reducer`를 소통하기 위한 방법으로 `action`을 사용한다.
`action`은 type이라는 key를 필수로 값는 Object형태의 데이터다.
`action`은 그럼 `reducer`에 어떻게 보내질까? `dispatch`메소드를 활용한다.
`dispatch`는 `store`에서 제공하는 메소드로 `reducer`를 동작시키게 만든다.

```js
store.dispatch({ type: "INCREASE" });
```

### 🔹dispatch

store내장 메소드로 reducer를 동작시키면서 action의 값을 전달한다.
(action은 type이라는 key를 꼭 가지도록 작성해야하고 object형태로 구성된다.)

### 🔹subscribe

store에 등록된 state가 변화가 생기면 알려준다.
내부에 등록한 콜백을 동작시켜준다.

## 1.4 Recap

action의 type들을 상수로 설정하고 대문자로 작성한다.
실수를 방지하기 위함이다.
reducer의 action.type은 switch case문을 권장한다.
(type의 종류가 많아지는 경우 가독성을 위하여 권장)
