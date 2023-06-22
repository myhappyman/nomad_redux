import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { getTodos, saveTodos } from "./localstorage_modules";

const addTodo = createAction<string>("ADD");
const deleteTodo = createAction<number>("DELETE");

export interface IState {
    id: number;
    text: string;
}
export type DispatchType = (action: ActionType) => typeof action;
export type ActionType =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof deleteTodo>;

const initialState = getTodos() as IState[];
const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case addTodo.type:
            state = [
                { text: action.payload as string, id: Date.now() },
                ...state,
            ];
            saveTodos(state);
            return state;
        case deleteTodo.type:
            state = state.filter((todo) => todo.id !== action.payload);
            saveTodos(state);
            return state;
        default:
            return state;
    }
};

const store = createStore(reducer);

// export type RootState = ReturnType<typeof store.getState>;
export const actionCreators = {
    addTodo,
    deleteTodo,
};

export default store;
