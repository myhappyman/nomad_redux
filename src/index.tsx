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

const add = document.getElementById("add") as HTMLElement;
const minus = document.getElementById("minus") as HTMLElement;
const number = document.getElementById("number") as HTMLElement;

let initialCount = 0;
const INCREASE = "INCREASE" as const;
const DECREASE = "DECREASE" as const;
interface IAction {
    type: typeof INCREASE | typeof DECREASE;
}
const reducer = (state = initialCount, action: IAction) => {
    if (action.type === "INCREASE") {
        return state + 1;
    } else if (action.type === "DECREASE") {
        return state - 1;
    } else {
        return state;
    }
};
const store = createStore(reducer);

const onChange = () => {
    number.innerText = `${store.getState()}`;
};
store.subscribe(onChange);

const handleAdd = () => store.dispatch({ type: "INCREASE" });
const handleMinus = () => store.dispatch({ type: "DECREASE" });

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
