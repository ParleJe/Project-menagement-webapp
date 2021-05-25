import ToDo from "../responseInterfaces/ToDo";

const API_URL:string = "http://localhost:8080/api";


const fetchAll = (idTask: number):Promise<any> => {
    const promise = fetch (`${API_URL}/task/${idTask}/todo`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
};

const add = (toDo: ToDo) => {
    const promise = fetch (API_URL+toDo.idHugeTask, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(toDo)
    });
    return promise;
};

const remove = (idToDo: number) => {
    const promise = fetch (API_URL+idToDo, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          }
    });
    return promise;
}

const update = (toDo: ToDo) => {
    const promise = fetch (API_URL+toDo.id, {
        method: "UPDATE",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(toDo)
    });
    return promise;
}

export {fetchAll, add, remove, update};