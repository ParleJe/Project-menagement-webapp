import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBInput,
  MDBInputGroup,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Fragment, useReducer, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import LoadingStateEnum from '../../helpers/enums/LoadingStateEnum';
import { initialState, reducer } from '../SecurityPopover/reducer';
import { handleSecurityPopoverSubmit } from './actions';
import { SecurityPopoverModesEnum } from '../../helpers/enums/SecurityPopoverModesEnum';

interface props {
  show: boolean;
  setShow?: Function;
  exitFunction?: Function;
}

const SecurityPopover = ({ show }: props) => {
  const [currentMode, setCurrentMode] = useState<SecurityPopoverModesEnum>(
    SecurityPopoverModesEnum.login
  );
  const loadingState = useAppSelector((state) => state.logged.loading);
  const [inputState, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useAppDispatch();

  return (
    <MDBModal staticBackdrop show={show} tabIndex="1">
      <MDBModalDialog centered size="sm">
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{currentMode} to your Account!</MDBModalTitle>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              value={inputState.email}
              onChange={(e: any) =>
                dispatch({ type: 'email', payload: e.target.value })
              }
              label="email"
              id="email"
              type="email"
            />
            <br />
            <MDBInput
              value={inputState.password}
              onChange={(e: any) =>
                dispatch({ type: 'password', payload: e.target.value })
              }
              label="password"
              id="pass"
              type="password"
            />
            {currentMode === SecurityPopoverModesEnum.register && (
              <Fragment>
                <hr />
                <MDBInput
                  value={inputState.name}
                  onChange={(e: any) =>
                    dispatch({ type: 'name', payload: e.target.value })
                  }
                  label="name"
                  id="name"
                  type="text"
                />
                <br />
                <MDBInput
                  value={inputState.surname}
                  onChange={(e: any) =>
                    dispatch({ type: 'surname', payload: e.target.value })
                  }
                  label="surname"
                  id="surname"
                  type="text"
                />
              </Fragment>
            )}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBInputGroup className="justify-content-center">
              <MDBDropdown>
                <MDBDropdownToggle outline className="dropdown-toggle-split">
                  <span className="visually-hidden">action</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink
                      onClick={() => setCurrentMode(SecurityPopoverModesEnum.login)}
                    >
                      {SecurityPopoverModesEnum.login}
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink
                      onClick={() =>
                        setCurrentMode(SecurityPopoverModesEnum.register)
                      }
                    >
                      {SecurityPopoverModesEnum.register}
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBBtn
                onClick={() =>
                  handleSecurityPopoverSubmit(
                    dispatch,
                    reduxDispatch,
                    inputState,
                    currentMode,
                    setCurrentMode
                  )
                }
                outline
              >
                {loadingState !== LoadingStateEnum.PENDING && currentMode}
                {loadingState === LoadingStateEnum.PENDING && (
                  <MDBSpinner grow size="sm" />
                )}
              </MDBBtn>
            </MDBInputGroup>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default SecurityPopover;
