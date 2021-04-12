import React from 'react'
import Header from './Header/Header'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import WebNavbar from '../Navbar/Navbar';


function Home() {
    return (
        <Container fluid={true}>
        <Row>
          <Col className="px-0" >
             <Header/>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    )
}

export default Home
