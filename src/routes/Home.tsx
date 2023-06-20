import { useState } from "react";
import { connect } from "react-redux";
import { ActionType, DispatchType, IState, actionCreators } from "../store";
import Todos from "../components/Todos";

function Home({ toDos, addTodo }: { toDos: IState[]; addTodo: AddTodoType }) {
    const [text, setText] = useState("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setText(e.target.value)
                    }
                />
                <button>추가</button>
            </form>
            <ul>
                {toDos.map((x) => (
                    <Todos key={x.id} id={x.id} text={x.text} />
                ))}
            </ul>
        </div>
    );
}

/**
 * redux에 등록된 store로부터 받은 state를 원하는 형태로 변조하고
 * 사용하려는 현재 컴포넌트(여기서는 Home컴포넌트)로 props를 전달하는 함수
 * store -> Provider로인해 뿌려짐 -> connect메소드의 mapStateToProps가 현재 컴포넌트 props로 다시 전달해줌
 * -> 현재 컴포넌트는 props를 통해 사용하면 됨. 데이터를 그리거나(Array.map) 사용(삽입, 삭제행위 등)
 * @param state IState[]
 * @param ownProps
 * @returns
 */
function mapStateToProps(state: IState[]) {
    return { toDos: state };
}

type AddTodoType = (text: string) => ActionType;
/**
 * redux에 등록된 store의 dispatch메소드를 현재 컴포넌트의 props로 전달하는 함수이다.
 * @param dispatch
 * @param ownProps
 * @returns
 */
function mapDispatchToProps(dispatch: DispatchType, ownProps?: any) {
    return {
        addTodo: (text: string) => dispatch(actionCreators.addTodo(text)),
    };
}

// const addTodo = (text: string, dispatch: DispatchType) => (dispatch(actionCreators.addTodo(text)));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
