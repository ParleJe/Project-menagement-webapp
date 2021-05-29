import Project from "../responseInterfaces/Project";

const API_URL:string = "http://localhost:8080/api";

const fetchAll = (idUser: number):Promise<any> => {
    const promise = fetch (`${API_URL}/user/${idUser}/project`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const add = (project:Project):Promise<any> => {
    const promise = fetch(`${API_URL}/project`, {
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