import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Free_Sample_By_Wix.jpg';
import './Navbar.css'
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavLink,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



const WebNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container  className=" webNavbar " fluid={true}>
      <Navbar  light expand="md"  className=" webNavbar " >
        <NavbarBrand > <img src={Logo}  alt="Logo" style={{height:"50px"}} /> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem >
            <NavLink  to="/" tag={Link} className=" NavbarLinks px-3">Home</NavLink>
            </NavItem>
            <NavItem>
              {/* < NavLink ctiveClassName="active" >About us </ NavLink> */}
            </NavItem>
            <NavItem>
              < NavLink to="/blogs"  tag={Link}  className=" NavbarLinks px-3" >Blogs</ NavLink>
            </NavItem>
            <NavItem>
            < NavLink to="/doctors" tag={Link}  className=" NavbarLinks px-3" >Doctors</ NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Register
              </DropdownToggle>
              <DropdownMenu right>
               < NavLink to="/register" tag={Link} className=" NavbarLinks px-3">
                  <DropdownItem>
                    Sign up
                   </DropdownItem>
                </NavLink>
                <DropdownItem divider />
                < NavLink to="/register"  tag={Link} className=" NavbarLinks px-3"><DropdownItem>
                  Log in
                </DropdownItem></NavLink> 
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
  );
}

export default WebNavbar;