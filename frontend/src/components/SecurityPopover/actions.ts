import { Dispatch } from "react";
import UserPost from "../../helpers/responseInterfaces/UserPost";
import { tryLog, tryRegister } from "../../redux/slices/LoggedUserSlice";

export enum SecurityPopoverModes {
    register = "Register",
    login = 'Login'
}

const handleSecurityPopoverSubmit = (reducerDispatch: Dispatch<any>, reduxDispatch: Dispatch<any>, inputState: UserPost, mode: SecurityPopoverModes) => {
    const stateToSend = inputState;
    console.log(stateToSend);
    console.log(inputState);
    reducerDispatch({type: "reset", payload: ""});
    if(mode === SecurityPopoverModes.login) return reduxDispatch(tryLog(stateToSend))
    return reduxDispatch(tryRegister(stateToSend));

}

export{ handleSecurityPopoverSubmit };