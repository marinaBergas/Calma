import React from 'react';
import { Row } from 'reactstrap';
import Header from '../Home/Header/Header';
import photo from '../../Assets/Images/about-us.jpg';
import './AboutUs.css'
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <Row className="row  justify-content-center">
                <div className="col">
                  <Header/>
                </div>
            </Row>
            <Row className="  justify-content-center align-items-center">
                <div className="col-md-6 col-sm-12">
                    <img src={photo} className="w-100" />

                </div>
                <div className="col-md-6 col-sm-12 ">
                    <h1>Who we are?</h1>
                    <p>Just like any muscle, your personality requires strengthening and your heart, mind and soul deserve specialized care. With Calma, you’ll get personalized treatment from a prescriber trained in mental health care</p>
                </div>
            </Row>
            <Footer/>


            
        </div>
    )
}

export default AboutUs
