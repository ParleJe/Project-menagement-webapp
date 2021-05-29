import {MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInputGroup, MDBInputGroupElement, MDBSpinner } from "mdb-react-ui-kit";
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import SimplifiedUser from "../../helpers/responseInterfaces/SimplifiedUser";
import { useAppSelector } from "../../redux/hooks";
import { scopes } from "../../redux/slices/LoggedUserSlice";
import { fetchFromTask } from "../../redux/slices/UsersSlice";
import LoadingIndicator from "../LoadingIndicator";


const MembersTab = () => {
    const scopeSelected = useAppSelector((state) => state.logged.scope);
    const dispatch = useDispatch();
    const users = useAppSelector((state) => state.users.users)
    const selected = useAppSelector((state) => state.hugeTasks.selected);
    const loadingState = useAppSelector((state) => state.toDos.loading);

    useEffect(() => {
        if(scopeSelected === scopes.HugeTask)
            dispatch(fetchFromTask(selected));
    }, [dispatch, selected])

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                    <MDBInputGroupElement type='text' placeholder="find by name" />
                    <MDBBtn outline color="success">add</MDBBtn>
            </MDBInputGroup>  
            <MDBContainer className="w-100 h-80 overflow-auto shadow-sm position-relative">
                {loadingState === 'pending' && <LoadingIndicator />}
                {users.map((user:SimplifiedUser, key:number) => {
                    return (
                        <MDBRow key={key} between className=" border"> 
                            <MDBCol size="3 px-0">
                                <img alt="placeholder" className="img-fluid w-100 h-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                            </MDBCol>
                            <MDBCol center size="8" className="justify-center h-100">
                                <h6 className="m-0 mt-2">{user.name} {user.surname}</h6>
                                <p className="m-0 mb-2"><small>CEO</small></p>
                            </MDBCol>
                        </MDBRow>
                    )
                })}          
            </MDBContainer>
        </Fragment>
    );
};

export default MembersTab;