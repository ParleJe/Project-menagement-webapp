import SimplifiedUser from "./SimplifiedUser";
import User from "./User";

export default interface ToDo{
    id:number,
    name: string,
    assignedUsers: Array<SimplifiedUser>,
    isDone: boolean,
    idHugeTask: number
}