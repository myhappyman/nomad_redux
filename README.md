# Nomad Redux

redux개념을 좀 더 확실하게 잡기위해 추가 강의를 학습 중.

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

reducer는 state를 변경 시키는 메소드로 사용자가 작성하는 환경에 맞춰 state값들을 변경한다. 여기서 정수형의 값을 변경하거나 array, object등 원하는 데이터를 이곳에서만 변경하며, 변경하는 값은 action이라는 키워드를 통해 구분하여 처리한다.
reducer의 연산이 끝나고 return하는 값이 현재의 어플리케이션 state값이 되며 store에 등록된다.

### 🔹state

나의 어플리케이션에서 바뀌는 data들을 `state`라고 취급한다.
카운트 어플리케이션의 count와 같은 증가하거나 감소하는 정수값들을 의미한다.

### 🔹action
