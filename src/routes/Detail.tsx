import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { IState } from "../store";

/**
 * Detail Page
 * @param param0
 * @returns
 */
function Detail({ toDos }: { toDos: IState[] }) {
    const id = parseInt(useParams().id as string);
    const todo = toDos.find((toDo: IState) => toDo.id === id);
    return (
        <div>
            <h1>{todo?.text}</h1>
            <h5>create at : {todo?.id}</h5>
        </div>
    );
}

function mapStateToProps(state: IState[]) {
    return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
