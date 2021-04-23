import Simplified from "./Simplified";
import SimplifiedUser from "./SimplifiedUser";

export default interface HugeTask {
    id: number,
    name: string,
    description: string,
    smallTask: Array<Simplified>,
    assignedUser: Array<SimplifiedUser>,
    idProject: number
}