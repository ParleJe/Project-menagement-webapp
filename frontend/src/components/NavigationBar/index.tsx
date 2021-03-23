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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {useState } from 'react'
import NavigationBarProps from '../../helpers/interfaces/NavigationBarProps';


const NavigationBar = ({projects}: NavigationBarProps) => {
  const [showBasic, setShowBasic] = useState(false);

  

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
            return <MDBNavbarItem><MDBNavbarLink>{value.name}</MDBNavbarLink></MDBNavbarItem>
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

            // <MDBNavbarItem>
            //   <MDBDropdown>
            //     <MDBDropdownToggle tag='a' className='nav-link'>
            //       Dropdown
            //     </MDBDropdownToggle>
            //     <MDBDropdownMenu>
            //       <MDBDropdownItem>
            //         <MDBDropdownLink>Action</MDBDropdownLink>
            //       </MDBDropdownItem>
            //       <MDBDropdownItem>
            //         <MDBDropdownLink>Another action</MDBDropdownLink>
            //       </MDBDropdownItem>
            //     </MDBDropdownMenu>
            //   </MDBDropdown>
            // </MDBNavbarItem>
