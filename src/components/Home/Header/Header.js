import React from 'react';
import './Header.css';
import { Container, Row, Col } from 'reactstrap';
function Header() {
    return (
        <Col className="px-0" media="(max-width: 400px)" >
        <h1 className='header'></h1>
       </Col>
    )
}

export default Header
