import { MDBBtn, MDBContainer, MDBIcon, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import React, { Fragment } from "react"
import { useDispatch } from "react-redux";
import Simplified from "../../../helpers/responseInterfaces/Simplified";
import { useAppSelector } from "../../../redux/hooks";
import { removeHugeTasks, select } from "../../../redux/slices/HugeTasksSlice";
import { scopes, setScope } from "../../../redux/slices/LoggedUserSlice";

interface props {
    color: string,
    title: string,
    tasks: Simplified[],
    togglePopup?: Function
}

const KanbanPiece = ({color, title, tasks, togglePopup}: props) => {
    const dispatch = useDispatch();
    const scopeSelected = useAppSelector((state) => state.logged.scope);
    const isAddVisible = scopeSelected === scopes.Project && togglePopup !== undefined; ;
    const onClickKanbanPiece = (idTask: number) => {
        dispatch(setScope(scopes.HugeTask));
        dispatch(select(idTask));
    }

    return (
        <Fragment>
            <MDBRow className={"justify-content-center w-100 py-2 m-0 shadow rounded-top align-items-center "+color}>
                <h5 className='text-center'>{title}</h5>
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
                        
                {tasks.map((task: Simplified, key:number) => {
                    return(
                        <div key={key} className="card my-1 mx-2 border shadow-lg">
                            
                            <div className="col card-body" onClick={() => onClickKanbanPiece(task.id!)}>
                                <h5 className="card-title"><u>{task.name}</u></h5>
                                <p className="card-text">{task.description}</p>
                                <div className="d-flex justify-content-between">
                                    {task.state !== "not started" && <MDBIcon style={{cursor: 'pointer'}} icon='arrow-left'/>}
                                    {task.state !== "done" && <MDBIcon style={{cursor: 'pointer'}} icon='arrow-right'/>}
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                2 days ago
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