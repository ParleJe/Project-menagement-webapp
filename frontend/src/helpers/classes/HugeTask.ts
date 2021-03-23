import DataObject from "./DataObject";
import SmallTask from "./SmallTask";
import User from "./User";

export default class HugeTask implements DataObject {
    id:number;
    name: string;
    description: string;
    smallTasks: Array<SmallTask>;
    assignedUsers: Array<User>

    constructor(_id:number, _name:string, _description:string, _smallTasks:Array<SmallTask>, _assignedUsers: Array<User>){
        this.id = _id;
        this.name = _name;
        this.description = _description;
        this.smallTasks = _smallTasks;
        this.assignedUsers = _assignedUsers;
    }
    parseFromResponse = (json:string) => {
        return null;
    };


}