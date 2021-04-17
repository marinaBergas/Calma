import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import photo from '../../../Assets/Images/bg-header.jpg'
const BlogsHome = (props) => {
    return (
      <>
          
        <Card className="m-2 p-0 w-30 col-md-3 col-sm-8" >
          <CardImg top width="100%" src={photo} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="m-2 p-0 w-30 col-md-3 col-sm-8">
          <CardImg top width="100%" src={photo} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="m-2 p-0 w-30 col-md-3 col-sm-8">
          <CardImg top width="100%" src={photo} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default BlogsHome;