import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../Home/Header/Header';
import photo from '../../Assets/Images/about-us-img.jpeg';
import missionimg from '../../Assets/Images/our-mission.jpg';
import visionimg from '../../Assets/Images/our-vision.jpg';
import { Media } from 'reactstrap';

import EcoIcon from '@material-ui/icons/Eco';
import GroupIcon from '@material-ui/icons/Group';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import './AboutUs.css'
import Footer from '../Footer/Footer';


const AboutUs = () => {
    return (
        <>
            <Container fluid={true} className="header-container p-0 ">
                <Header />
            </Container>  
               

            <Container fluid={true}  className="Calma-description-container ">
                <Row className="  justify-content-center align-items-center mx-0">
                     <Media className=" align-items-center justify-content-center  py-5 flex-wrap">
                        <Media body className=" px-3 text-left col-md-6 col-sm-10 ">
                            <Media heading className="ml-4 about_text mt-5">Who We Are ?</Media>
                            <Media  className="ml-4 py-3 text-secondary">
                            <p className=" text-left text-secondary h6 py-4">Calma site established in 2021 for psychotherapy and addiction treatment,  you can join us at any time and anywhere. We are at your service, Calma's certified professionals are here to guide you through your problems whether they're treated individually or as part of a couple.</p>
                        </Media>
                      <Media >
                        <ul>
                            <li className=" text-left  py-1">
                               <EcoIcon className="text-primary text-left h1" />
                               <span className="AboutUs_span text-secondary" >We care about you. </span>
                            </li>
                            <li className=" text-left py-1">
                                <GroupIcon className="text-primary text-left h1" />
                                <span className="AboutUs_span text-secondary" >We're trusted by hundreds of clients.</span>
                            </li>
                            <li className=" text-left py-1">
                                <FavoriteBorderIcon className="text-primary text-left h1" />
                                <span className="AboutUs_span text-secondary" >Social media loves us!</span>
                            </li>
                            <li className=" text-left py-1">
                                <DoneOutlineIcon className="text-primary text-left h1" />
                            <span className="AboutUs_span text-secondary" >you could contact us anytime anywhere !  </span>
                            </li>
                         </ul>      
                    </Media>
                    </Media>
                    <Media left className="col-md-4 col-sm-12 ml-0 ">
                    <Media object src={photo} alt="Generic placeholder image" className="w-100 " /></Media>
                    </Media>
                </Row>
           
            </Container>
            <Container fluid={true}  className="mission-container  px-0 py-2  align-items-center justify-content-center ">
                <Row className="mx-0">
                    <Media className=" align-items-center justify-content-center  px-3  flex-wrap">
                       <Media left className="col-md-4 col-sm-12 ml-0">
                       <Media object src={missionimg} alt="Generic placeholder image" className="w-100 " /></Media>
                            <Media body className="py-5 px-3 text-left col-md-6 col-sm-10 ">
                                <Media heading className="ml-4 about_text mt-5">OUR MISSION</Media>
                                <Media  className="ml-4 py-3 text-secondary">
                                <p className=" text-left text-secondary h6 py-4">Our mission is to answer all questions that come to your mind. we are expanding our fields to cover all your interests.Because we know how busy life can get, we provide you with certified experts that would understand your needs with a click away.We work with certified professionals that provide you with a very comfortable user friendly online counseling & follow-ups.</p>
                            </Media>
                        </Media>
                    </Media>
                </Row>
            </Container>
            <Container fluid={true}  className="vision-container  px-0 py-3  align-items-center justify-content-center ">
                <Row className="mx-0">
                    <Media className=" align-items-center justify-content-center  px-3  flex-wrap">
                        <Media body className="py-5 px-3 text-left col-md-6 col-sm-10 ">
                            <Media heading className="mr-4 about_text">OUR VISION</Media>
                            <Media  className="mr-4 py-3 text-secondary">
                            <p className=" text-left text-secondary h6 py-4">Our objective is to enhance people’s lives by providing them with a certified answer about their matters.We want to facilitate the user’s experience by giving them the option of following up with the same expert.We want to be the platform with the most accessible expert that is here to advise you to help you reach self-fulfillment.</p>
                        </Media>
                        </Media>
                        <Media left className="col-md-4 col-sm-12 ml-0">
                        <Media object src={visionimg} alt="Generic placeholder image" className="w-100 " /></Media>
                    </Media>
                </Row>
            </Container>
        
            <Footer/>


            
        </>
    )
}

export default AboutUs
