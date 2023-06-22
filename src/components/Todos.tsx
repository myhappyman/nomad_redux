import { connect } from "react-redux";
import { ActionType, DispatchType, remove } from "../store";
import { Link } from "react-router-dom";

interface ITodo {
    text: string;
    id: number;
    onBtnClick: () => ActionType;
}
function Todos({ text, id, onBtnClick }: ITodo) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
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
        onBtnClick: () => dispatch(remove(ownProps.id)),
    };
}

export default connect(null, mapDispatchProps)(Todos);
