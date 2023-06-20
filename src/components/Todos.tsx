import { connect } from "react-redux";
import { ActionType, DispatchType, actionCreators } from "../store";

interface ITodo {
    text: string;
    onBtnClick: () => ActionType;
}
function Todos({ text, onBtnClick }: ITodo) {
    return (
        <li>
            {text}
            <button onClick={onBtnClick}>삭제</button>
        </li>
    );
}

/**
 *
 * @param dispatch
 * @param ownProps 해당 인자는 해당 컴포넌트에서 받고있는 props에 대해 받아온다.
 * @returns
 */
function mapDispatchProps(dispatch: DispatchType, ownProps: any) {
    //받아온 props중 id값을 활용하여 메소드를 작성하였다.
    return {
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
    };
}

export default connect(null, mapDispatchProps)(Todos);
