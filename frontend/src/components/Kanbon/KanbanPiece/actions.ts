import { Dispatch } from "react";
import ExecutionStatusEnum from "../../../helpers/enums/ExecutionStatusEnum";
import SelectedScopeEnum from "../../../helpers/enums/SelectedScopeEnum";
import Simplified from "../../../helpers/responseInterfaces/Simplified";
import { select } from "../../../redux/slices/HugeTasksSlice";
import { setScope } from "../../../redux/slices/LoggedUserSlice";


const setTaskState = (task: Simplified ,newState: ExecutionStatusEnum): Simplified => {
    return {...task, state: newState};
}

const setNextState = (task: Simplified): Simplified => {
    switch(task.state) {
        case ExecutionStatusEnum.NOT_STARTED: return setTaskState(task, ExecutionStatusEnum.IN_PROGRESS);
        case ExecutionStatusEnum.IN_PROGRESS: return setTaskState(task, ExecutionStatusEnum.DONE);
        default: return task;
    }
}

const setPrevState = (task: Simplified): Simplified => {
    switch(task.state) {
        case ExecutionStatusEnum.DONE: return setTaskState(task, ExecutionStatusEnum.IN_PROGRESS);
        case ExecutionStatusEnum.IN_PROGRESS: return setTaskState(task, ExecutionStatusEnum.NOT_STARTED);
        default: return task;
    }
}

const onClickKanbanPiece = (dispatch: Dispatch<any>, idTask: number) => {
    dispatch(setScope(SelectedScopeEnum.TASK));
    dispatch(select(idTask));
}

export {setNextState, setPrevState, onClickKanbanPiece};