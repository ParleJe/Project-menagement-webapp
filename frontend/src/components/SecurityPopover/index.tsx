import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBInput, MDBInputGroup, MDBInputGroupElement, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBSpinner } from 'mdb-react-ui-kit';
import React, { Fragment, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { loadingStates } from '../../redux/slices/LoggedUserSlice';

interface props {
    show: boolean,
    setShow?: Function,
    exitFunction?: Function
}

enum types {
    register = "Register",
    login = 'Login'
}

const SecurityPopover = ({show}: props) => {
    const [currentType, setCurrentType] = useState<string>(types.login);
    const loadingState = useAppSelector((state) => state.logged.loading);

    return(
            <MDBModal staticBackdrop show={show} getOpenState={(e: any) => true} tabIndex='1'>
                <MDBModalDialog centered size='sm'>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>{currentType} to your Account!</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput label='email' id='email' type='email' />
                        <br />
                        <MDBInput label='password' id='pass' type='password' />
                        {currentType === types.register && 
                        <Fragment>
                            <hr />
                            <MDBInput label="name" id="name" type="text" />
                            <br />
                            <MDBInput label="surname" id="surname" type="text" />
                        </Fragment>
                        }
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
                            <MDBBtn outline>
                                {loadingState !== loadingStates.PENDING && currentType}
                                {loadingState === loadingStates.PENDING && <MDBSpinner grow size="sm" />}
                            </MDBBtn>
                    </MDBInputGroup>

                    </MDBModalFooter >
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    )
}

export default SecurityPopover;