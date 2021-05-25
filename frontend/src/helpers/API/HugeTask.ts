import HugeTask from "../responseInterfaces/HugeTask";


const API_URL:string = "http://localhost:8080/api";


const fetchAll = (idProject: number):Promise<any> => {
    const promise = fetch (`${API_URL}/project/${idProject}/task`, {
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

const add = (hugeTask: HugeTask):Promise<any> => {
    const promise = fetch (`${API_URL}${hugeTask.idProject}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(hugeTask)
    });
    return promise;
}

const remove = (idProject: number, idHugeTask:number):Promise<any> => {
    const promise = fetch (`${API_URL}${idHugeTask}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const update = (hugeTask: HugeTask):Promise<any> => {
    const promise = fetch (`${API_URL}${hugeTask.id}`, {
        method: "UPDATE",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(hugeTask)
    });
    return promise;
}

export {fetchAll, fetchById, add, remove, update};