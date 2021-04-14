import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../Assets/Images/CALMA-logo.png';
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
import { auth } from '../../firebase/utils';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from '../../redux/User/User.action';


const mapState = ({user}) => ({
  currentUser:user.currentUser,
  signout :user.signout
});


const WebNavbar = (props) => {
  const dispatch = useDispatch();
  const {currentUser,signout} = useSelector(mapState);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   if (signout) {
  //     history.push("/register/signin");
  //   }else{
  //     history.push("/");
  //   }
  // }, [signout]);
  const toggle = () => setIsOpen(!isOpen);

  return (
   
    <Container  className=" webNavbar " fluid={true} >
      <Navbar  dark  expand="md"  className=" webNavbar " fixed="top" >
        <NavbarBrand  to="/" tag={Link}>
           <img src={Logo}  alt="Logo" style={{height:"35px"}} /> 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem >
            <NavLink  to="/" tag={Link} className=" NavbarLinks px-3">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink  to="/about" tag={Link} className=" NavbarLinks px-3">About us</NavLink>
            </NavItem>
            <NavItem>
              < NavLink to="/blogs"  tag={Link}  className=" NavbarLinks px-3" >Blogs</ NavLink>
            </NavItem>
            <NavItem>
            < NavLink to="/doctors" tag={Link}  className=" NavbarLinks px-3" >Doctors</ NavLink>
            </NavItem>
            <NavItem>
            < NavLink to="/dashboard" tag={Link}  className=" NavbarLinks px-3" >Dashboard</ NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            {currentUser && [ 
              <NavLink key={1} to="/"  tag={Link} className=" NavbarLinks px-3" onClick={()=>{
                auth.signOut();
                //dispatch(userLogOut(!signout))
                }}>
                Log Out
              </NavLink>]}

            {!currentUser&&[ 
              <DropdownToggle key={1} nav caret className=" NavbarLinks px-3">
                Register
              </DropdownToggle>,
              <DropdownMenu key={2} right>
               < NavLink to="/register/signup" tag={Link} >
                  <DropdownItem className=" NavbarLinks px-3">
                  Sign Up
                   </DropdownItem>
                </NavLink>
                <DropdownItem divider />
                < NavLink to="/register/signin"  tag={Link} >
                  <DropdownItem className=" NavbarLinks px-3">
                  Sign In
                </DropdownItem>
                </NavLink> 
              </DropdownMenu>]}
            
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
  );

  
}
WebNavbar.defaultProps = {
  currentUser : null
};

export default WebNavbar;