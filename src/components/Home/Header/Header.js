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

    return (
          <>
            <WebNavbar/>
            <Row className="align-items-center justify-content-center header-row mx-0 " >

            <div className="header-text text-center text-md-left  ">
              <div className="header-content px-5 col-xs-12 justify-content-center text-center align-items-center">
			           <h1 key={1} className="mb-4  text-white">Be Calm With Us </h1>
                 {/* <p className="text-white ">Talk to your therapist privately anytime anywhere !</p> */}
              </div>
            </div> 
            </Row>
            
            {/* <div className="header-image col-12 col-md-4 col-lg-6 col-xl-7">
			      	<img src={image} className="img-fluid p-0"/>
		      	</div>  */}
         </>
    )
}

export default Header
