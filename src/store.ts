import { legacy_createStore as createStore } from "redux";
import { getTodos, saveTodos } from "./localstorage_modules";

const ADD = "ADD" as const;
const DELETE = "DELETE" as const;
const addTodo = (text: string) => ({ type: ADD, text, id: Date.now() });
const deleteTodo = (id: number) => ({ type: DELETE, id: id });

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
        case ADD:
            state = [{ text: action.text, id: action.id }, ...state];
            saveTodos(state);
            return state;
        case DELETE:
            state = state.filter((todo) => todo.id !== action.id);
            saveTodos(state);
            return state;
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo,
};

export default store;
