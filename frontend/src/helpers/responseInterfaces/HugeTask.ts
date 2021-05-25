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



export default HugeTask;