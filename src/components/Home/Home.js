import React from 'react'
import Header from './Header/Header'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import WebNavbar from '../Navbar/Navbar';
import DoctorSection from './Doctors-section/Doctors';
import BlogsHome from './Blogs.js/BlogsHome';
import HappyClient from './HappyClientSection/HappyClient';


function Home(props) {
    return (
      <>
        <Container fluid={true} className="header-container px-0 py-5 ">
          <Row className="align-items-center justify-content-center header-row" >
             <Header {...props}/>
           </Row>
        </Container>
        <Container fluid={true} className="Doctors-container  px-0 py-5">
          <Row className=" doctor-container ">
              <DoctorSection/>
          </Row>
        </Container>
        <Container fluid={true} className="Blogs-container  px-0 py-5">
          <Row className=" blog-container justify-content-center  ">
              <BlogsHome/>
          </Row>
        </Container>
         <Container fluid={true} className="HappyClient-container  px-0 py-5">
          <Row className=" HappyClient-container ">
              <HappyClient/>
          </Row>
        </Container>
        <Footer/>
      </>
    )
}

export default Home
