import DataObject from "./DataObject";
import User from "./User";

export default class ToDo implements DataObject {
    id:number;
    name: string;
    assignedUsers: Array<User>;
    isDone: boolean;

    constructor(_id:number, _name:string, _assignedUsers: Array<User>, _isDone:boolean){
        this.id = _id;
        this.name = _name;
        this.assignedUsers = _assignedUsers;
        this.isDone = _isDone;
    }
    parseFromResponse = (json:string) => {
        return null;
    };
}