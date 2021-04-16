import React from 'react';
import './Header.css';
import { Container, Row, Col } from 'reactstrap';
import image from '../../../Assets/Images/header-01.webp';
import headerGradient from '../../../Assets/Images/header-gradient.svg';
import { Button } from 'reactstrap';
function Header() {
    return (
          <div className="d-flex header-container">
            <div className="header-text text-center text-md-left col-12 col-md-8 col-lg-6 col-xl-5 my-5">
                <div className="bg-gradient-wrap stretch-full capped-width bg-gradient-index">
                  <div className="bg-gradient ">
	             	<img src={headerGradient} className="breathe"/>
	              </div>
                </div>
				<h1 className="mb-4 ml-5">Be Calm With Us</h1>
                <p className="large mb-4 pl-5">your personality requires strengthening and your heart, mind and soul deserve specialized care. With Calma, you’ll get personalized treatment from a prescriber trained in mental health care . Talk to your therapist online privately anytime anywhere !</p>
				{/* <Button className="btn btn-primary">Get started</Button> */}
			</div> 
            <div className="header-image col-12 col-md-4 col-lg-6 col-xl-7">
				<img src={image} className="img-fluid"/>
			</div> 
         </div>
    )
}

export default Header
