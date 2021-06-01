import Simplified from "../responseInterfaces/Simplified";


const API_URL:string = "http://localhost:8080/api";


const fetchAll = (idProject: number, token: number):Promise<Response> => {
    const promise = fetch (`${API_URL}/project/${idProject}/task`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    });
    return promise;
}

const fetchById = (idProject: number, idHugeTask:number, token: number):Promise<Response> => {
    const promise = fetch (`${API_URL}${idProject}/${idHugeTask}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    });
    return promise;
}

const add = (task: Simplified, idProject: number, token: number):Promise<Response> => {
    const promise = fetch (`${API_URL}/project/${idProject}/task`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(task)
    });
    return promise;
}

const remove = (task:Simplified, token: number):Promise<Response> => {
    const promise = fetch (`${API_URL}/task`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(task)
    });
    return promise;
}

const update = (task: Simplified, token: number):Promise<Response> => {
    console.log(task);
    const promise = fetch (`${API_URL}/task`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(task)
    });
    return promise;
}

export {fetchAll, fetchById, add, remove, update};