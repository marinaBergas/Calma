import React from 'react'
import Header from './Header/Header'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import WebNavbar from '../Navbar/Navbar';
import DoctorSection from './Doctors-section/Doctors';
import BlogsHome from './Blogs.js/BlogsHome';
import HappyClient from './HappyClientSection/HappyClient';
import CentersHome from './CentersHome/Centers';


function Home(props) {
    return (
      <>
      <Container fluid={true} className=" p-0 m-0" >
        <Container fluid={true} className="header-container  p-0 m-0 ">
         
             <Header />
          
        </Container> 
         <Container fluid={true} className="Doctors-container  p-0 m-0">
          <Row className=" doctor-container mx-0">
            <div className="col-sm-12 mx-0 ">
              <DoctorSection/>
            </div>
          </Row>
        </Container>
        <Container fluid={true} className="Blogs-container   p-0 m-0">
              <BlogsHome/>
        </Container>
        <Container fluid={true} className="HappyClient-container   p-0 m-0">
          <Row className=" mx-0 ">
              <HappyClient/>
          </Row>
        </Container>

        <Container fluid={true} className="Blogs-container   p-0 m-0 ">
          <Row className=" blog-container justify-content-center mx-0 ">
              <CentersHome/>
          </Row>
        </Container>
        <Footer/>
        </Container>
      </>
    )
}

export default Home
