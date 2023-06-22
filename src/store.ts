import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { getTodos, saveTodos } from "./localstorage_modules";

export interface IState {
    id: number;
    text: string;
}

export type ActionType = ReturnType<typeof add> | ReturnType<typeof remove>;
export type DispatchType = (action: ActionType) => typeof action;
const initialState = getTodos() as IState[];

const toDos = createSlice({
    name: "toDosReducer",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.push({ text: action.payload as string, id: Date.now() });
            saveTodos(state);
        },
        remove: (state, action: PayloadAction<number>) => {
            state = state.filter((todo) => todo.id !== action.payload);
            saveTodos(state);
            return state;
        },
    },
});

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
