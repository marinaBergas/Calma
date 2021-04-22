import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
  import './Center.css'
const Center = (props) => {
    return (
        
            <>
              <Card className="w-100 text-left center-card pb-5 " style={{overflow:"hidden"}}>
                <CardImg top width="100%" src={props.image} alt="Card image cap" height="50%" />
                <CardBody  className="px-3 ">
                  <CardTitle tag="h5">{props.title}</CardTitle>
                  <CardText  >{props.secondTitle}</CardText>
                  <CardText className="text-left  " >{props.description}</CardText>
                  <CardText>
                    <small className="text-primary ">See Details</small>
                  </CardText>
                </CardBody>
              </Card>
            </>
           
    );
}

export default Center
