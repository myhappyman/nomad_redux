import { legacy_createStore as createStore } from "redux";

const ADD = "ADD" as const;
const DELETE = "DELETE" as const;
const addTodo = (text: string) => ({ type: ADD, text, id: Date.now() });
const deleteTodo = (id: number) => ({ type: DELETE, id: id });

export interface IState {
    id: number;
    text: string;
}
export type ActionType =
    | ReturnType<typeof addTodo>
    | ReturnType<typeof deleteTodo>;

const reducer = (
    state = [{ id: 1, text: "초기값" }] as IState[],
    action: ActionType
) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: action.id }, ...state];
        case DELETE:
            return state.filter((todo) => todo.id !== action.id);
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
