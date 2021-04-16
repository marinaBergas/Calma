import React from 'react'
import Header from './Header/Header'
import { Container, Row, Col } from 'reactstrap';
import Footer from '../Footer/Footer';
import WebNavbar from '../Navbar/Navbar';


function Home(props) {
    return (
        <Container fluid={true}>
        <Row>
         
             <Header {...props}/>
        
        </Row>
        <Row>
        </Row>
      </Container>
    )
}

export default Home
