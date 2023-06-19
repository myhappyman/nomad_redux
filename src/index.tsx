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
interface Iaction {
    type: typeof INSERT_TODO | typeof REMOVE_TODO;
    todo: string;
}
const initialState: string[] = [];
const reducer = (state = initialState, action: Iaction) => {
    switch (action.type) {
        case INSERT_TODO:
            return [...state, action.todo];
        case REMOVE_TODO:
            return state;
        default:
            return state;
    }
};
const store = createStore(reducer);

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
