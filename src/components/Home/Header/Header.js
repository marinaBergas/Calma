import React from 'react';
import './Header.css';
import { Container, Row, Col } from 'reactstrap';
import image from '../../../Assets/Images/header-01.webp';
import headerGradient from '../../../Assets/Images/header-gradient.svg';
import { Button } from 'reactstrap';
import { useSelector } from 'react-redux';
const mapState = ({user}) => ({
    currentUser:user.currentUser,
    signInSuccess :user.signInSuccess,
  });
function Header() {
    const {signInSuccess,currentUser} = useSelector(mapState);

    return (
          <div className="row  justify-content-center ">
            <div className="header-text text-center text-md-left col-12 col-md-8 col-lg-6 col-xl-5 my-5 py-5">
                <div className="bg-gradient-wrap stretch-full capped-width bg-gradient-index">
                  <div className="bg-gradient ">
	                 	<img src={headerGradient} className="breathe"/>
	                </div>
                </div>
                {/* {(currentUser ) && [ */}
                <div className="header-content  ">
			       	<h1 key={1} className="mb-4 ml-5">Be Calm With Us </h1>,
              {/* {currentUser.displayName} */}
              {/* <img key={2}  src={currentUser.photoURL}/> */}
              {/* ]} */}
               {/* <img  src={currentUser.photoUrl}/> */}
                <p className="large mb-4 pl-5">your personality requires strengthening and your heart, mind and soul deserve specialized care. With Calma, you’ll get personalized treatment from a prescriber trained in mental health care . Talk to your therapist online privately anytime anywhere !</p>
			        	{/* <Button className="btn btn-primary">Get started</Button> */}
                </div>
            </div> 
            <div className="header-image col-12 col-md-4 col-lg-6 col-xl-7">
			      	<img src={image} className="img-fluid p-0"/>
		      	</div> 
         </div>
    )
}

export default Header
