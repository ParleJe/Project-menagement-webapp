import './style.css';
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
import React, {Fragment, useEffect, useState } from 'react'
import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import Project from '../../helpers/responseInterfaces/Project';
import {select, fetchProjects} from '../../redux/slices/projectSlice';
import { scopes, setScope } from '../../redux/slices/LoggedUserSlice';
import AddPopover from '../AddPopover';
import { types } from '../../helpers/interfaces/TypeEnum';


const NavigationBar = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = () => setShowPopup(!showPopup);
  /*________________________REDUX________________________*/ 
  const projects: Project[] = useAppSelector((state) => state.projects.projects);
  const selected = useAppSelector((state) => state.projects.selected);
  const dispatch = useAppDispatch();

  useEffect(() => {dispatch(fetchProjects(1))}, [dispatch])

  const onClickProject = (idProject: number) => {
    dispatch(setScope(scopes.Project))
    dispatch(select(idProject));
  }

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
              return <MDBNavbarItem key={index}><MDBNavbarLink href='#' onClick = {() => onClickProject(value.id)}>{value.name}</MDBNavbarLink></MDBNavbarItem>
            })}
            <MDBNavbarItem className="d-flex justify-content-end">
              <MDBBtn outline onClick={() => togglePopup()} floating size="sm" gradient="purple" className="mg-auto my-auto">
                <MDBIcon size='md' icon="plus" />
              </MDBBtn>
            </MDBNavbarItem>
            </MDBNavbarNav>
            <div style={{minWidth: '20%'}} className="d-flex justify-content-end">
              <span className="navbar-text p-3">Name Surname</span>
              <MDBBtn floating size="lg" gradient="purple" className="mg-auto my-auto"><MDBIcon size='lg' icon="male" /></MDBBtn>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Fragment>
  );
}

export default NavigationBar;