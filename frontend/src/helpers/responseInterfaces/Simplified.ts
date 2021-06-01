import ExecutionStatusEnum from "../enums/ExecutionStatusEnum";

export default interface Simplified {
    id?: number,
    name: string,
    description: string,
    priority: number,
    state: ExecutionStatusEnum
}



const getTasksInProgress = (tasks: Simplified[]):Simplified[] => {
    return tasks.filter(task => task.state === ExecutionStatusEnum.IN_PROGRESS);
}

const getTasksNotStarted = (tasks: Simplified[]):Simplified[] => {
    return tasks.filter(task => task.state === ExecutionStatusEnum.NOT_STARTED);
}
const getTasksDone = (tasks: Simplified[]):Simplified[] => {
    return tasks.filter(task => task.state === ExecutionStatusEnum.DONE);
}

export {getTasksInProgress, getTasksNotStarted, getTasksDone};