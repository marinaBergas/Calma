import React from 'react';
import './Header.css';
import { Container, Row, Col } from 'reactstrap';
import image from '../../../Assets/Images/header-01.webp';
import headerGradient from '../../../Assets/Images/header-gradient.svg';
import { Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import WebNavbar from '../../Navbar/Navbar';
const mapState = ({user}) => ({
    currentUser:user.currentUser,
    signInSuccess :user.signInSuccess,
  });
function Header() {
    const {signInSuccess,currentUser} = useSelector(mapState);
    console.log("grfgv",currentUser)

    return (
          <>
            <WebNavbar/>
            <div className="header-text text-center text-md-left  my-5 py-5">
              <div className="header-content px-5 col-xs-12">
			          {/* <h1 key={1} className="mb-4 text-left text-white">Be Calm With Us </h1> */}
              </div>
            </div> 
            
            {/* <div className="header-image col-12 col-md-4 col-lg-6 col-xl-7">
			      	<img src={image} className="img-fluid p-0"/>
		      	</div>  */}
         </>
    )
}

export default Header
