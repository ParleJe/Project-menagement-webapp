export default interface Simplified {
    id: number,
    name: string,
    description: string,
    state: string
}

enum possibleStates {
    IN_PROGRESS = "in progress",
    NOT_STARTED = "not started",
    DONE = "done",
}

const getTasksInProgress = (tasks: Simplified[]):Simplified[] => {
    return tasks.filter(task => task.state === possibleStates.IN_PROGRESS);
}

const getTasksNotStarted = (tasks: Simplified[]):Simplified[] => {
    return tasks.filter(task => task.state === possibleStates.NOT_STARTED);
}
const getTasksDone = (tasks: Simplified[]):Simplified[] => {
    return tasks.filter(task => task.state === possibleStates.DONE);
}

export {getTasksInProgress, getTasksNotStarted, getTasksDone};