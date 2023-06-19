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

const INSERT_TODO = "INSERT_TODO";
const REMOVE_TODO = "REMOVE_TODO";
interface IAction {
    type: typeof INSERT_TODO | typeof REMOVE_TODO;
    todo: string;
}
interface IState {
    todo: string;
    date: number;
}
const initialState: IState[] = [];
const reducer = (state = initialState, action: IAction) => {
    console.log(action);
    switch (action.type) {
        case INSERT_TODO:
            return [...state, { todo: action.todo, date: Date.now() }];
        case REMOVE_TODO:
            return state;
        default:
            return state;
    }
};
const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
const createTodo = (todo: string) => {
    const li = document.createElement("li");
    li.innerHTML = todo;
    ul?.appendChild(li);
};

const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const todo = input.value;
    input.value = "";
    // createTodo(todo);
    store.dispatch({ type: INSERT_TODO, todo: todo });
};

form.addEventListener("submit", onSubmit);
