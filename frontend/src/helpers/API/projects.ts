import Project from "../classes/Project";

const API_URL:string = "https://localhost:8080/api/projects/";

const fetchAll = ():Promise<any> => {
    const promise = fetch (API_URL);
    return promise;
}

const add = (project:Project):Promise<any> => {
    const promise = fetch(API_URL+"TODO");
    return promise;
}

const remove = (id:number):Promise<any> => {
    const promise = fetch (API_URL+id);
    return promise;
}

export {fetchAll, add, remove};