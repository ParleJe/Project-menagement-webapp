import { Dispatch } from "react";
import Project from "../../helpers/responseInterfaces/Project";
import Simplified from "../../helpers/responseInterfaces/Simplified";
import { addTask, TaskPayload } from "../../redux/slices/HugeTasksSlice";
import { addProject } from "../../redux/slices/projectSlice";
import { AddPopoverReducerState } from "./reducer";

const tryAdd = (dispatchFunc: Dispatch<any>, inputState: AddPopoverReducerState, idProject?: number): void => {
    if (idProject === undefined) return dispatchFunc(addProject(inputState as unknown as Project));
    const payload: TaskPayload = {
        task: inputState as Simplified,
        idProject: idProject
    };

    return dispatchFunc(addTask(payload));
};

export { tryAdd };