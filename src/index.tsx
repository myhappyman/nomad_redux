// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form") as HTMLElement;
const input = document.querySelector("input") as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLElement;

const INSERT_TODO = "INSERT_TODO" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const insertTodo = (todo: string) => ({
    type: INSERT_TODO,
    todo,
    id: Date.now(),
});
const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    id,
});

type IAction = ReturnType<typeof insertTodo> | ReturnType<typeof removeTodo>;
interface IState {
    todo: string;
    id: number;
}
const initialState: IState[] = [];
const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case INSERT_TODO:
            return [...state, { todo: action.todo, id: action.id }];
        case REMOVE_TODO:
            return state.filter((x) => x.id !== action.id);
        default:
            return state;
    }
};
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const dispatchInsertToDo = (todo: string) => {
    store.dispatch(insertTodo(todo));
};
const dispatchDeleteTodo = (e: MouseEvent) => {
    // vanilla에서 처리 방법
    const target = e.target as Element;
    const parent = target.parentNode as Element;
    const id = parent.id as string;
    store.dispatch(removeTodo(+id));
};

const paintToDos = () => {
    const todos = store.getState();
    ul.innerHTML = "";
    todos.forEach((x) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "X";
        btn.addEventListener("click", dispatchDeleteTodo);
        li.id = x.id + "";
        li.innerText = x.todo;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};
store.subscribe(paintToDos);

const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    dispatchInsertToDo(input.value);
    input.value = "";
};

form.addEventListener("submit", onSubmit);
