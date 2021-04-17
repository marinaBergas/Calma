import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import './Blogs.css';
import photo from '../../../Assets/Images/bg-header.jpg';
import photo2 from '../../../Assets/Images/calm.jpg';
import photo3 from '../../../Assets/Images/header.jpeg';

const BlogsHome = (props) => {
    return (
      <>
        <div className="row justify-content-center">
        <Card className="mx-4 px-0 w-30 col-md-3 col-sm-8" >
          <CardImg top width="100%" src={photo} alt="Card image cap" height="50%" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="mx-4 p-0 w-30 col-md-3 col-sm-8">
          <CardImg top width="100%" src={photo2} alt="Card image cap" height="50%" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="mx-4 p-0 w-30 col-md-3 col-sm-8">
          <CardImg top width="100%" src={photo3} alt="Card image cap" height="50%" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        
        <div className="col-md-12 p-3 ">
                 <Button  color="primary" className="bg-primary m-2 p-0 doctor-btn">
                     See More 
                </Button>
            </div>
        </div>
      
      </>
    );
  };
  
  export default BlogsHome;