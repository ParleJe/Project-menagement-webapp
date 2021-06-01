import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBInput, MDBInputGroup, MDBInputGroupElement, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBSpinner } from 'mdb-react-ui-kit';
import React, { Fragment, useReducer, useState } from 'react';
import { logIn } from '../../helpers/API/UsersAndSecurity';
import UserPost from '../../helpers/responseInterfaces/UserPost';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loadingStates, tryLog, tryRegister } from '../../redux/slices/LoggedUserSlice';
import { initialState, reducer } from '../SecurityPopover/reducer';

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
    const [inputState, dispatch] = useReducer(reducer, initialState);
    const reduxDispatch = useAppDispatch();
    const handleClick = () => {
        const stateToSend = inputState;
        console.log(stateToSend);
        console.log(inputState);
        dispatch({type: "reset", payload: ""});
        if(currentType === types.login) return reduxDispatch(tryLog(stateToSend))
        return reduxDispatch(tryRegister(stateToSend));

    }
    return(
            <MDBModal staticBackdrop show={show} tabIndex='1'>
                <MDBModalDialog centered size='sm'>
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>{currentType} to your Account!</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput onChange={(e: any) => dispatch({type: "email", payload: e.target.value})} 
                            label='email' id='email' type='email' />
                        <br />
                        <MDBInput onChange={(e: any) => dispatch({type: "password", payload: e.target.value})}
                            label='password' id='pass' type='password' />
                        {currentType === types.register && 
                        <Fragment>
                            <hr />
                            <MDBInput onChange={(e: any) => dispatch({type: "name", payload: e.target.value})}
                                label="name" id="name" type="text" />
                            <br />
                            <MDBInput onChange={(e: any) => dispatch({type: "surname", payload: e.target.value})}
                                label="surname" id="surname" type="text" />
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
                            <MDBBtn onClick={() => handleClick()} outline>
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