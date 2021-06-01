import UserPost from "../../helpers/responseInterfaces/UserPost";


export interface ReducerAction {
    type: "email"|"password"|"name"|"surname"|"reset",
    payload: string
}

const initialState: UserPost = {
    email: "",
    password: "",
    name: "",
    surname: "",
    token: "",
    id: 0,
} ;

const reducer = (state: UserPost, action: ReducerAction) => {
    const newVal = action.payload;
    switch(action.type) {
        case "email": return {...state, email: newVal};
        case "password": return {...state, password: newVal};
        case "name": return {...state, name: newVal};
        case "surname": return {...state, surname: newVal};
        case "reset": return initialState;
    }
}

export {reducer, initialState};
