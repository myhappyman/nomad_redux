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

`action`의 type들을 상수로 설정하고 대문자로 작성한다.
실수를 방지하기 위함이다.
`reducer`의 action.type은 switch case문을 권장한다.
(type의 종류가 많아지는 경우 가독성을 위하여 권장)

## 2.0 Vanilla ToDos

vanilla todos를 redux로 작성해본다.
이전에 배운 action, action함수, `reducer`, `store`를 작성하고 연결하여 가볍게 todo insert동작까지 작성하였다.

`reducer`의 return state 부분을 작성할땐 꼭 `mutate`처리가 되지 않도록 조심해야한다. ex) `arr.push`는 사용하면 안된다. `[...state, "add"]`

## 2.1 State Mutation

redux의 공식문서를 보면 `state`는 `read-only`이다.
또한 `Single source of truth`이다.
즉, `store.getState()+1`같은 행위는 하면 안된다. 오로지 `reducer`에서 `action` 구분값에 맞춰서 처리가 이루어지는 약속을 지켜야한다.

`Single source of truth`: 여러 곳에서 같은 값이 사용될 때 한 곳에서 처리하고 수정하도록 작성하여 디버깅이나 유지보수성을 늘리는 행위를 말한다. 한글로 번역하면 `단일 진실 공급원`이라고 부른다.

## 2.2 Delete To Do

```ts
// 바닐라 js에서 타입스크립트 dom parentNode 접근하기
// button태그에 click이벤트 처리
const deleteTodo = (e: MouseEvent) => {
    // vanilla에서 처리 방법
    const target = e.target as Element;
    const parent = target.parentNode as Element;
    const id = parent.id as string;
    store.dispatch(removeTodo(+id));
};
```

### 🔹actionCreator

dispatch에서 사용될 action의 object의 사용값을 전달하는 함수
dispatch에 직접 넣기보단 밖으로 함수를 작성하고 dispatch에서 사용한다.

\*\*\* 타입스크립트로 작성하는게 너무 오래걸린다... ㅠㅠㅠ

## 2.3 Delete To Do part Two

splice와 같은 mutate를 일으키는 메소드가 아닌 새로운 배열을 작성해주는 filter를 통해 불변성을 지키고 return 시켜서 삭제 기능을 작성하였다.

## 3.0 setup

`npm install react-redux`
`npm install react-router-dom`

### react-router-dom v6이상 변화

Routes안에 Route들이 담겨야 한다.
components props가 사라지고 element에 컴포넌트를 넣는다.
`<Route path="/" element={<Home />}></Route>`

## 3.1 Connecting the Store

-   `action`을 작성한다. const, 대문자 조합
-   `actionCreator`를 작성한다
-   `reducer`를 작성한다
-   `store`에 `reducer`를 등록한다.
-   `react-redux`의 Provider를 통해 `store`를 호출하고 감싸준다.

## 3.2 mapStateToProps

등록 처리가 끝났으니 redux로부터 state의 값을 가져올 수 있어야한다.
`connect`: 컴포넌트들에게 `store`를 연결시켜준다. 2개(`state`, `dispatch`)의 인자를 가진다.
(
입력(저장, 삭제 등): 저장하는 행위 store.dispatch로 reducer를 동작시키기
읽기: store에 등록된 state를 가져오는 행위 store.getState()
)
참고로 connect의 내부는 es6 currying문법을 활용해서 저렇게 기괴하게 생긴 모습이 된듯하다.

`mapStateToProps`: 함수이며 두개의 인자를 가진다. 첫번째는 state이고, redux store의 state이다. 2번째는 components의 props이다.

## 3.3 mapDispatchToProps

`connect`의 두번째 인자로 들어가는 값이다.
`connect(mapStateToProps, mapDispatchToProps)`
해당 컴포넌트에서 사용할 dispatch에 알맞는 동작 함수를 작성하고, dispatch 전체를 전달하는게 아니라 필요한 행위의 함수만 전달해서 처리한다.

-   2019년 이후로는 connect기법을 잘 사용하지 않는다고한다... `useSelector`, `useDispatch`로 대체됨

## 3.4 Deleting To Do

할 일을 표기하는 Todos컴포넌트를 작성하고 Home컴포넌트에 연결하였다.
Todos컴포넌트에서 삭제를 누르게되면 dispatch를 사용하여 삭제를 처리하는데 삭제 구분을 위해 id값이 필요하다. 해당 컴포넌트에 props를 전달하기 위해 mapDispatchToProps를 쓰지만 ownProps를 통해 애초에 해당 컴포넌트에 전달되고 있는 props도 확인이 가능하다. 해당 props중 id값을 활용하여 별도의 처리 없이 dispatch함수에 필요한 id값을 전달하여 store에 등록된 state를 삭제하였다.

## 3.5 Detail Screen

react router dom의 Link를 통해 각 Todo들에게 Link를 걸고 상세페이지를 나타낸다.

---

react-router-dom 6버전부터는 history, location, match를 받을수 없고 mapStateToProps에서 ownProps도 빈 객체로 나온다. useParams() 훅으로 처리하도록 한다.

## 3.6 Conclusions

react-redux강의가 끝났다.

### Challenge ✅❎

❎ localstorage를 통해 작성된 todos 작업을 적용해보기
❎ 요즘 사용하는 useSelector, useDispatch hook으로 교체해보기
