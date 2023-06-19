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
interface IAction {
    type: "INCREASE" | "DECREASE";
}
const reducer = (state = initialCount, action: IAction) => {
    console.log(action);
    if (action.type === "INCREASE") {
        return state + 1;
    } else if (action.type === "DECREASE") {
        return state - 1;
    } else {
        return state;
    }
};
const store = createStore(reducer);

store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "DECREASE" });

const updateText = () => {
    number.innerText = `${store.getState()}`;
};
updateText();
// const handleAdd = () => {
//     count = count + 1;
//     updateText();
// };
// const handleMinus = () => {
//     di;
//     updateText();
// };
// add?.addEventListener("click", handleAdd);
// minus?.addEventListener("click", handleMinus);
