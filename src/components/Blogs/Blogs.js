import React from 'react';
import { Row } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import photo from '../../Assets/Images/bg-header.jpg';
import photo2 from '../../Assets/Images/calm.jpg';
import photo3 from '../../Assets/Images/header.jpeg';
import './Blogs.css'
function Blogs() {
    return (
        <div>
            <Row className="Blog-container">
                <Card className="m-2 p-0 w-30 col-md-3 col-sm-8">
                 <CardImg top width="100%" src={photo3} alt="Card image cap" height="50%" />
                 <CardBody>
                 <CardTitle tag="h5">Card Title</CardTitle>
                 <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
            </Row>
              
                <video className='videoTag ' id="background-video" autoPlay loop muted>
                  <source src="https://assets.calm.com/ec430076eb0ac1b7d31d0770246eb1d1.mp4" type='video/mp4' />
                </video>
              
        </div>
    )
}

export default Blogs