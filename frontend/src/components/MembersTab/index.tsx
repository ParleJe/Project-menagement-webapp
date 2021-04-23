import {MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import User from "../../helpers/responseInterfaces/User";


const MembersTab = () => {

    const UserMock: Array<User> = [];

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                    <MDBInputGroupElement type='text' placeholder="find by name" />
                    <MDBBtn outline color="success">add</MDBBtn>
            </MDBInputGroup>  
        <MDBContainer className="w-100 h-80 overflow-auto shadow-sm">
            {UserMock.map((user:User, key:number) => {
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