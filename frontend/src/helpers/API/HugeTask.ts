import HugeTask from "../responseInterfaces/HugeTask";


const API_URL:string = "https://localhost:8080/api/projects/";


const fetchAll = (idProject: number):Promise<any> => {
    const promise = fetch (API_URL+idProject, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const fetchById = (idProject: number, idHugeTask:number):Promise<any> => {
    const promise = fetch (`${API_URL}${idProject}/${idHugeTask}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const add = (idProject: number, hugeTask: HugeTask):Promise<any> => {
    const promise = fetch (`${API_URL}${idProject}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const remove = (idProject: number, idHugeTask:number):Promise<any> => {
    const promise = fetch (`${API_URL}${idProject}/${idHugeTask}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const update = (idProject: number, idHugeTask:number):Promise<any> => {
    const promise = fetch (`${API_URL}${idProject}/${idHugeTask}`, {
        method: "UPDATE",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

export {fetchAll, fetchById, add, remove, update};