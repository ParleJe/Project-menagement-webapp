import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBSpinner } from 'mdb-react-ui-kit';
import React from 'react';

interface props {
    show: boolean,
    setShow: Function,
    exitFunction: Function
}

const LoginTab = ({show, setShow, exitFunction}: props) => {

    return(
            <MDBModal show={show} getOpenState={(e: any) => setShow(e)} tabIndex='1'>
                <MDBModalDialog centered size='sm'>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Login to your Account!</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput label='email' id='login' type='text' />
                        <br />
                        <MDBInput label='password' id='pass' type='password' />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn onClick={exitFunction}>
                        <MDBSpinner size='sm' grow />
                        </MDBBtn>
                    </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    )
}

export default LoginTab;