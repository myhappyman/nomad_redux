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

const add = document.getElementById("add") as HTMLElement;
const minus = document.getElementById("minus") as HTMLElement;
const number = document.getElementById("number") as HTMLElement;

let count = 0;
const updateText = () => {
    number.innerText = `${count}`;
};
const handleAdd = () => {
    count = count + 1;
    updateText();
};
const handleMinus = () => {
    count = count - 1;
    updateText();
};
add?.addEventListener("click", handleAdd);
minus?.addEventListener("click", handleMinus);
