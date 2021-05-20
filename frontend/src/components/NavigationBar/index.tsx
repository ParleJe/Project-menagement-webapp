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
import {useEffect, useState } from 'react'
import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import Project from '../../helpers/responseInterfaces/Project';
import {select, fetchProjects} from '../../redux/slices/projectSlice';


const NavigationBar = () => {
  const [showBasic, setShowBasic] = useState(false);
  /*________________________REDUX________________________*/ 
  const projects: Project[] = useAppSelector((state) => state.projects.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {dispatch(fetchProjects())})

  return (
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
            return <MDBNavbarItem key={index}><MDBNavbarLink onClick = {dispatch(select(value.id))}>{value.name}</MDBNavbarLink></MDBNavbarItem>
          })}
          </MDBNavbarNav>
          <div style={{minWidth: '20%'}} className="d-flex justify-content-end">
            <span className="navbar-text p-3">Name Surname</span>
            <MDBBtn floating size="lg" gradient="purple" className="mg-auto my-auto"><MDBIcon size='lg' icon="male" /></MDBBtn>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavigationBar;