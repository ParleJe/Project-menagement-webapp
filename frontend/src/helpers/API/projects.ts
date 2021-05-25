import Project from "../responseInterfaces/Project";

const API_URL:string = "https://localhost:8080/api/projects/";

const fetchAll = ():Promise<any> => {
    const promise = fetch (API_URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const add = (project:Project):Promise<any> => {
    const promise = fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(project)
    });
    return promise;
}

const remove = (id:number):Promise<any> => {
    const promise = fetch (API_URL+id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

export {fetchAll, add, remove};