import DataObject from "./DataObject";
import User from "./User";
import ToDo from "./ToDo";

export default class SmallTask implements DataObject {
    id:number;
    name: string;
    description: string;
    assignedUsers: Array<User>;
    toDos: Array<ToDo>;

    constructor(_id:number, _name:string, _description: string, _assignedUsers: Array<User>, _toDos: Array<ToDo>){
        this.id = _id;
        this.name = _name;
        this.description = _description;
        this.assignedUsers = _assignedUsers;
        this.toDos = _toDos;
    }
    parseFromResponse = (json:string) => {
        return null;
    };
}