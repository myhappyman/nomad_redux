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
const reducer = (state = initialCount) => {
    console.log(state);
    return state;
};
const store = createStore(reducer);
console.log(store.getState());
// const updateText = () => {
//     number.innerText = `${count}`;
// };
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
