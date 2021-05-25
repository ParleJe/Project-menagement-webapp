import {MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllFromProject, fetchAllFromTask } from "../../helpers/API/UsersAndSecurity";
import User from "../../helpers/responseInterfaces/User";
import { useAppSelector } from "../../redux/hooks";
import { scopes } from "../../redux/slices/LoggedUserSlice";
import { select } from "../../redux/slices/projectSlice";
import { fetchFromProject, fetchFromTask } from "../../redux/slices/UsersSlice";


const MembersTab = () => {
    const scopeSelected = useAppSelector((state) => state.logged.scope);
    const dispatch = useDispatch();
    const users = useAppSelector((state) => state.users.users)
    const selected = useAppSelector((state) => {switch (scopeSelected){
        case scopes.Project: return state.projects.selected;
        case scopes.HugeTask: return state.hugeTasks.selected;
    }})
    useEffect(() => {
        switch(scopeSelected) {
            case scopes.Project: dispatch(fetchFromProject(selected!)); break;
            case scopes.HugeTask: dispatch(fetchFromTask(selected!)); break;
        }
    }, [dispatch, scopeSelected, selected])

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                    <MDBInputGroupElement type='text' placeholder="find by name" />
                    <MDBBtn outline color="success">add</MDBBtn>
            </MDBInputGroup>  
            <MDBContainer className="w-100 h-80 overflow-auto shadow-sm">
                {users.map((user:User, key:number) => {
                    return (
                        <MDBRow between className=" border"> 
                            <MDBCol size="3 px-0">
                                <img alt="placeholder" className="img-fluid w-100 h-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                            </MDBCol>
                            <MDBCol center size="8" className="justify-center h-100">
                                <h6 className="m-0 mt-2">Name Surname</h6>
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