import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import React, { Dispatch, Fragment, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import Project from '../../helpers/responseInterfaces/Project';
import { fetchProjects } from '../../redux/slices/projectSlice';
import AddPopover from '../AddPopover';
import { onClickProject } from './actions';


const NavigationBar = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = (): void => setShowPopup(!showPopup);
  /*________________________REDUX________________________*/
  const projects: Project[] = useAppSelector((state) => state.projects.projects);
  const selected: number = useAppSelector((state) => state.projects.selected);
  const dispatch: Dispatch<any> = useAppDispatch();
  const loggedUser = useAppSelector((state) => state.logged.logged);

  useEffect(() => {
    if (loggedUser !== null)
      dispatch(fetchProjects(loggedUser.id))
  }, [dispatch, loggedUser])

  return (
    <Fragment>
      <AddPopover show={showPopup} setShow={setShowPopup} />
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Bénévoles</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav>
              {projects.map((value, index) => {
                return <MDBNavbarItem key={index}>
                          <MDBNavbarLink active={value.id === selected} href='#' onClick={() => onClickProject(value.id, dispatch)}>
                            {value.name}
                          </MDBNavbarLink>
                        </MDBNavbarItem>
              })}
              <MDBNavbarItem className="d-flex justify-content-end">
                <MDBBtn outline onClick={() => togglePopup()} floating size="sm" gradient="purple" className="mg-auto my-auto">
                  <MDBIcon size='md' icon="plus" />
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <div style={{ minWidth: '20%' }} className="d-flex justify-content-end">
              <span className="navbar-text p-3">{loggedUser !== null && `${loggedUser?.name} ${loggedUser?.surname}`}</span>
              <MDBBtn floating size="lg" gradient="purple" className="mg-auto my-auto"><MDBIcon size='lg' icon="male" /></MDBBtn>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Fragment>
  );
}

export default NavigationBar;
