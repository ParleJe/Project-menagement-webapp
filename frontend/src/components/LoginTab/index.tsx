import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';

interface props {
    show: boolean,
    setShow: Function,
    exitFunction: Function
}

const LoginTab = ({show, setShow, exitFunction}: props) => {

    return(
            <MDBModal show={show} getOpenState={(e: any) => setShow(e)} tabIndex='1'>
                <MDBModalDialog centered size='lg'>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Modal title</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={exitFunction}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>odwahbwdiubaid</MDBModalBody>
                    <MDBModalBody>odwahbwdiubaid</MDBModalBody>
                    <MDBModalBody>odwahbwdiubaid</MDBModalBody>
                    <MDBModalBody>odwahbwdiubaid</MDBModalBody>


                    <MDBModalFooter>
                        <MDBBtn color='secondary' onClick={exitFunction}>
                        Close
                        </MDBBtn>
                        <MDBBtn>Save changes</MDBBtn>
                    </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    )
}

export default LoginTab;