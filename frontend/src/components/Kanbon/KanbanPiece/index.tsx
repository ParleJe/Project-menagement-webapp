import {
    MDBBtn,
    MDBContainer,
    MDBIcon,
    MDBProgress,
    MDBProgressBar,
    MDBRow
} from "mdb-react-ui-kit";
import { Fragment } from "react"
import { useDispatch } from "react-redux";
import SelectedScopeEnum from "../../../helpers/enums/SelectedScopeEnum";
import Simplified from "../../../helpers/responseInterfaces/Simplified";
import { useAppSelector } from "../../../redux/hooks";
import { removeHugeTasks, updateHugeTask } from "../../../redux/slices/HugeTasksSlice";
import { onClickKanbanPiece, setNextState, setPrevState } from "./actions";

interface KanbanPieceProps {
    color: string,
    title: string,
    tasks: Simplified[],
    togglePopup?: Function
}

const KanbanPiece = ({ color, title, tasks, togglePopup }: KanbanPieceProps) => {
    const dispatch = useDispatch();
    const scopeSelected = useAppSelector((state) => state.logged.scope);
    const isAddVisible = scopeSelected === SelectedScopeEnum.PROJECT && togglePopup !== undefined;;

    return (
        <Fragment>
            <MDBRow className={"justify-content-center w-100 py-2 m-0 shadow rounded-top align-items-center " + color}>
                <h4 className='text-center'>{title}</h4>
                {isAddVisible && <MDBBtn outline onClick={() => togglePopup!()} floating size="sm" color='link'>
                    <MDBIcon size='lg' icon="plus" />
                </MDBBtn>}
            </MDBRow>
            <MDBContainer className="mt-0 p-0 overflow-auto w-100">

                {tasks.length === 0 &&
                    <div className="card my-1 mx-2 border shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">Nothing here yet :c</h5>
                        </div>
                    </div>
                }

                {tasks.map((task: Simplified, key: number) => {
                    return (
                        <div key={key} className="card my-1 mx-2 border shadow-lg">

                            <div className="col card-body">
                                <h5 onClick={() => onClickKanbanPiece(dispatch, task.id!)} className="card-title">
                                    <u>{task.name}</u>
                                </h5>
                                <MDBProgress>
                                    <MDBProgressBar width={(task.priority / 5) * 100} />
                                </MDBProgress>
                                <p className="card-text">{task.description}</p>
                                <div className="d-flex justify-content-between">
                                    {task.state !== "not started" &&
                                        <MDBIcon onClick={() => dispatch(updateHugeTask(setPrevState(task)))} style={{ cursor: 'pointer' }} icon='arrow-left' />}
                                    {task.state !== "done" &&
                                        <MDBIcon onClick={() => dispatch(updateHugeTask(setNextState(task)))} style={{ cursor: 'pointer' }} icon='arrow-right' />}
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-end">
                                <MDBBtn onClick={() => dispatch(removeHugeTasks(task))} className='btn-close' color='none' />
                            </div>
                        </div>
                    )
                })}
            </MDBContainer>
        </Fragment>
    )

}

export default KanbanPiece;