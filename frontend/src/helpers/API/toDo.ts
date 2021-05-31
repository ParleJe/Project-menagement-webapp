import Simplified from "../responseInterfaces/Simplified";

const API_URL:string = "http://localhost:8080/api";


const fetchAll = (idTask: number, token: number):Promise<Response> => {
    const promise = fetch (`${API_URL}/task/${idTask}/todo`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    });
    return promise;
};

const add = (toDo: Simplified, idTask: number, token:number): Promise<Response> => {
    const promise = fetch (`${API_URL}/task/${idTask}/todo`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(toDo)
    });
    return promise;
};

const remove = (idToDo: number, token: number): Promise<Response> => {
    const promise = fetch (`${API_URL}/todo/${idToDo}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
    });
    return promise;
}

const update = (toDo: Simplified, token: number): Promise<Response> => {
    const promise = fetch (`${API_URL}/todo`, {
        method: "UPDATE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify(toDo)
    });
    return promise;
}

export {fetchAll, add, remove, update};