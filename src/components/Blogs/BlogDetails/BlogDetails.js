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
import BlogArticle from './BlogArticle';



const Blog =(props)=>{
     const history= useHistory();
    const getBlog=()=>{
        history.push("/Blog");
    }
    
    return (
        <>
         
          <Card className="w-100 h-100 text-left " onClick={getBlog} >
            <CardImg top width="100%" src={props.image} alt="Card image cap" height="50%" />
            <CardBody  className="px-3">
              <CardTitle tag="h5">{props.title}</CardTitle>
              <CardText className="overflow-hidden">{props.description}</CardText>
              <CardText>
                <small className="text-primary ">See More</small>
              </CardText>
            </CardBody>
          </Card>

         
       
        </>
       
        );

}

export default Blog