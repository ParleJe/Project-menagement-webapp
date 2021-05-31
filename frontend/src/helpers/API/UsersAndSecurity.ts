import User from "../responseInterfaces/User";
import UserPost from "../responseInterfaces/UserPost";

const API_URL: string = "http://localhost:8080/api";


const fetchAll = (): Promise<any> => {
    const promise = fetch(`${API_URL}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return promise;
};

const addUserToProject = (name: string, surname: string, idProject: number, token: number): Promise<Response> => {
    const promise = fetch(`${API_URL}/project/${idProject}/user`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: name, surname: surname })
    });
    return promise;
};

const fetchAllFromProject = (idProject: number, token: number): Promise<Response> => {
    const promise = fetch(`${API_URL}/project/${idProject}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return promise;
};

const fetchAllFromTask = (idTask: number, token: number): Promise<Response> => {
    const promise = fetch(`${API_URL}/task/${idTask}/user`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    return promise;
};

const updateUser = (user: User, token: number): Promise<Response> => {
    const promise = fetch(`${API_URL}/user/${user.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    });
    return promise;
}

const register = (user: UserPost): Promise<Response> => {
    const promise = fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return promise;
};

const logIn = (payload: UserPost): Promise<Response> => {
    const promise = fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return promise;
};

export { logIn, register, updateUser, fetchAllFromTask, fetchAllFromProject, fetchAll, addUserToProject };
