import Project from "../responseInterfaces/Project";

const API_URL:string = "http://localhost:8080/api";

const fetchAll = (idUser: number, token: string):Promise<Response> => {
    const promise = fetch (`${API_URL}/user/${idUser}/project`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    });
    return promise;
}

const add = (project:Project, token: number):Promise<Response> => {
    const promise = fetch(`${API_URL}/project`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(project)
    });
    return promise;
}

const remove = (id:number, token: number):Promise<Response> => {
    const promise = fetch (API_URL+id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    });
    return promise;
}

export {fetchAll, add, remove};