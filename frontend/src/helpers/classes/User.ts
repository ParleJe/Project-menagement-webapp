import DataObject from "./DataObject";
import HugeTask from "./HugeTask";
import ToDo from "./ToDo";
import SmallTask from "./SmallTask";

export default class User implements DataObject {
    id:number;
    name: string;
    surname: string;
    email: string
    toDos: Array<ToDo>;
    smallTasks: Array<SmallTask>;
    hugeTasks: Array<HugeTask>

    constructor(_id:number, _name:string, _surname:string, _email:string,
         _toDos:Array<ToDo>, _smallTasks:Array<SmallTask>, _HugeTasks:Array<HugeTask>){
        this.id = _id;
        this.name = _name;
        this.surname = _surname;
        this.email = _email;
        this.toDos = _toDos;
        this.smallTasks = _smallTasks;
        this.hugeTasks = _HugeTasks;
    }
    parseFromResponse = (json:string) => {
        return null;
    };
}