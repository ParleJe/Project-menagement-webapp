import User from "../responseInterfaces/User";

const API_URL:string = "http://localhost:8080/api";


const fetchAll = ():Promise<any> => {
    const promise = fetch (`${API_URL}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
};

const fetchAllFromProject = (idProject: number):Promise<any> => {
    const promise = fetch (`${API_URL}/project/${idProject}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
};

const fetchAllFromTask = (idTask: number):Promise<any> => {
    const promise = fetch (`${API_URL}/task/${idTask}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
};

const updateUser = (user: User): Promise<any> => {
    const promise = fetch (`${API_URL}/user/${user.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    });
    return promise;
}

const removeUser = ():Promise<any> => {
    const promise = fetch (`${API_URL}/users`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
    });
    return promise;
}

const register = (user: User):Promise<any> => {
    const promise = fetch (`${API_URL}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    });
    return promise;
};

interface loginPayload {
    login:string,
    password:string
}

const logIn = (payload: loginPayload):Promise<any> => {
    const promise = fetch (`${API_URL}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(payload)
    });
    return promise;
};

export { logIn, register, removeUser, updateUser, fetchAllFromTask, fetchAllFromProject, fetchAll };
export type { loginPayload };
