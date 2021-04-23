import Simplified from "./Simplified";

export default interface User{
    id:number,
    name: string,
    surname: string,
    email: string,
    toDos: Array<Simplified>,
    hugeTasks: Array<Simplified>
}