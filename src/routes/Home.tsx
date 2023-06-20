import { useState } from "react";
import { connect } from "react-redux";
import { IState } from "../store";

function Home({ toDos }: { toDos: IState[] }) {
    console.log(toDos);
    const [text, setText] = useState("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText("");
        console.log(text);
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
                    <li key={x.id}>{x.text}</li>
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
function mapStateToProps(state: IState[], ownProps?: any) {
    console.log(state);
    console.log(ownProps);
    return { toDos: state };
}

export default connect(mapStateToProps)(Home);
