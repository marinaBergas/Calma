import React from 'react'
import Header from './Header/Header'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import WebNavbar from '../Navbar/Navbar';
import DoctorSection from './Doctors-section/Doctors';
import BlogsHome from './Blogs.js/BlogsHome';


function Home(props) {
    return (
      <>
        <Container fluid={true} className="header-container px-0 py-5">
          <Row>
             <Header {...props}/>
           </Row>
        </Container>
        <Container fluid={true} className="Doctors-container px-0 py-5">
          <Row >
              <DoctorSection/>
          </Row>
        </Container>
        <Container fluid={true} className="Doctors-container px-0 py-5">
          <Row className="justify-content-center">
              <BlogsHome/>
          </Row>
        </Container>
      </>
    )
}

export default Home
