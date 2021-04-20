import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  // import './Blogs.css';
//   import photo from '../../Assets/Images/bg-header.jpg';
  import photo2 from '../../../Assets/Images/calm.jpg';
  import photo3 from '../../../Assets/Images/header.jpeg';
  import { Container, Row, Col } from 'reactstrap';
  import { Link, useHistory } from 'react-router-dom';


const Blog =(props)=>{
     const history= useHistory();

    const getBlog=()=>{
        history.push("/Blog")
    }

    return (
        <>
        <Container className="justify-content-center align-items-center">
          <Row>
          <Card className="mx-4 p-0 w-30 col-md-3 col-sm-8">
            <CardImg top width="100%" src={photo2} alt="Card image cap" height="50%" />
            <CardBody>
              <CardTitle tag="h5"><Link>{props.title}</Link></CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <CardText>
                <small className="text-muted"><Link>View Details</Link></small>
              </CardText>
            </CardBody>
          </Card>
          <Button onClick={getBlog}>Click here</Button>
         
          </Row>
        </Container>
        </>
        );

}

export default Blog