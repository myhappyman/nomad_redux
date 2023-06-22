import { legacy_createStore as createStore } from "redux";
import {
    PayloadAction,
    configureStore,
    createAction,
    createReducer,
} from "@reduxjs/toolkit";
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
const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action: PayloadAction<string>) => {
            state.push({ text: action.payload as string, id: Date.now() });
            saveTodos(state);
        })
        .addCase(deleteTodo, (state, action: PayloadAction<number>) => {
            state = state.filter((todo) => todo.id !== action.payload);
            saveTodos(state);
            return state;
        });
});

// const store = createStore(reducer);
const store = configureStore({ reducer });

// export type RootState = ReturnType<typeof store.getState>;
export const actionCreators = {
    addTodo,
    deleteTodo,
};

export default store;
