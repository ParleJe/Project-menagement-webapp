import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBInput, MDBInputGroup, MDBInputGroupElement, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBSpinner } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

interface props {
    show: boolean,
    setShow: Function,
    exitFunction: Function
}

enum types {
    register = "Register",
    login = 'Login'
}

const SecurityPopover = ({show, setShow, exitFunction}: props) => {
    const [currentType, setCurrentType] = useState<types>(types.login);


    return(
            <MDBModal staticBackdrop show={show} getOpenState={(e: any) => setShow(e)} tabIndex='1'>
                <MDBModalDialog centered size='sm'>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Login to your Account!</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput label='email' id='pass' type='email' />
                        <hr />
                        <MDBInput label='password' id='pass' type='password' />
                    </MDBModalBody>
                    <MDBModalFooter>
                        
                    <MDBInputGroup className="justify-content-center">
                            <MDBDropdown>
                                <MDBDropdownToggle outline className='dropdown-toggle-split'>
                                    <span className='visually-hidden'>action</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink onClick={() => setCurrentType(types.login)}>{types.login}</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink onClick={() => setCurrentType(types.register)}>{types.register}</MDBDropdownLink>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBBtn onClick={() =>exitFunction()} outline>
                                {currentType}
                                {/* <MDBSpinner grow size="sm" /> */}
                            </MDBBtn>
                    </MDBInputGroup>

                    </MDBModalFooter >
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    )
}

export default SecurityPopover;