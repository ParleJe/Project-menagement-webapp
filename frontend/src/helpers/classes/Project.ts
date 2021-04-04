export default class Project {
    id: number;
    name: string;
    description: string;
    // hugeTasks: Array<HugeTask>; TODO
    // usersAssigned: Array<User>; TODO

    constructor(_id: number, _name: string, _description: string) {
        this.id = _id;
        this.name = _name;
        this.description = _description;
    }

    parseFromResponse = (json:string) => {
        return null;
    };
}