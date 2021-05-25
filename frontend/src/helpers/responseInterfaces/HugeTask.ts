import Simplified from "./Simplified";
import SimplifiedUser from "./SimplifiedUser";

interface HugeTask {
    id: number,
    name: string,
    description: string,
    smallTask: Array<Simplified>,
    assignedUser: Array<SimplifiedUser>,
    state: "Not Started"|"In Progress"|'Done',
    idProject: number
}

const getTasksInProgress = (tasks: Array<HugeTask>):Array<HugeTask> => {
    return tasks.filter(task => task.state === "In Progress")
}

const getTasksNotStarted = (tasks: Array<HugeTask>):Array<HugeTask> => {
    return tasks.filter(task => task.state === "Not Started")
}
const getTasksDone = (tasks: Array<HugeTask>):Array<HugeTask> => {
    return tasks.filter(task => task.state === "Done")
}

export default HugeTask;
export {getTasksInProgress, getTasksNotStarted, getTasksDone};