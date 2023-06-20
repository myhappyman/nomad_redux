import { IState } from "./store";

const LOCALSTORAGE_KEY = "myTodos" as const;

export function getTodos(): IState[] {
    const state = localStorage.getItem(LOCALSTORAGE_KEY);
    return JSON.parse(state ?? "");
}

export function saveTodos(state: IState[]) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
}
