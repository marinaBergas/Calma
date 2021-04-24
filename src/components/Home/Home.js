import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router";
import Header from "./Header/Header";
import { Container, Row, Col } from "reactstrap";
import Footer from "../Footer/Footer";
import WebNavbar from "../Navbar/Navbar";
import DoctorSection from "./Doctors-section/Doctors";
import BlogsHome from "./Blogs.js/BlogsHome";
import HappyClient from "./HappyClientSection/HappyClient";
import CentersHome from "./CentersHome/Centers";
import Messenger from "../Dashboard/Messenger";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <Container fluid={true} className=" p-0 m-0">
        <Container fluid={true} className="header-container p-0  ">
          <Row className="align-items-center justify-content-center header-row mx-0 ">
            <Header {...props} />
          </Row>
        </Container>
        <Container fluid={true} className="Doctors-container  pt-5">
          <Row className=" doctor-container mx-0">
            <div className="col-sm-12 mx-0 ">
              <DoctorSection />
            </div>
          </Row>
        </Container>
        <Container fluid={true} className="Blogs-container  px-0 py-5">
          <BlogsHome />
        </Container>
        <Container fluid={true} className="HappyClient-container   p-0 m-0">
          <Row className=" mx-0 ">
            <HappyClient />
          </Row>
        </Container>

        <Container fluid={true} className="Centers-container  px-0 ">
              <CentersHome/>
        </Container>
        <Container fluid={true} className="px-0 ">
          <Row className=" justify-content-center mx-0">
            <div className=" col-md-6 col-xs-12 ">
              <Button
                color="primary"
                className=" bg-primary  btn-doctor my-2 w-100 text-uppercase"
              >
              <Link to="/dashboard/Messenger"></Link> GO TO CALMA MESSENGER
              </Button>
            </div>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
