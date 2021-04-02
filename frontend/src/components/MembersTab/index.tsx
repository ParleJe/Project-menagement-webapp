import {MDBBtn, MDBCol, MDBContainer, MDBRow, MDBInputGroup, MDBInputGroupElement } from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import User from "../../helpers/classes/User";


const MembersTab = () => {

    const UserMock = [new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []), new User(1, "name", "surname", "", [], [], []), 
                    new User(1, "name", "surname", "", [], [], []),new User(1, "name", "surname", "", [], [], []), ]

    return (
        <Fragment>
            <MDBInputGroup className="mb-2 shadow"> 
                    <MDBInputGroupElement type='text' placeholder="find by name" />
                    <MDBBtn outline color="success">add</MDBBtn>
            </MDBInputGroup>  
        <MDBContainer className="w-100 h-80 overflow-auto">
            {UserMock.map((user:User, key:number) => {
                return (
                    <MDBRow between className="h-25 border"> 
                        <MDBCol size="3 h-100 px-0">
                            <img alt="placeholder" className="img-fluid h-100" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
                        </MDBCol>
                        <MDBCol center size="8" className="align-items-center">
                            <h5>Name Surname</h5>
                            <small>CEO</small>
                        </MDBCol>
                    </MDBRow>
                )
            })}          
        </MDBContainer>
        </Fragment>
    );
};

export default MembersTab;