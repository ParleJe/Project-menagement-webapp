import Simplified from "./Simplified";
import SimplifiedUser from "./SimplifiedUser";

export default interface SmallTask {
    id:number,
    name: string,
    description: string,
    assignedUsers: Array<SimplifiedUser>,
    toDos: Array<Simplified>,
}