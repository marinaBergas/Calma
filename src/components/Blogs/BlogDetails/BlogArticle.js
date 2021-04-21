import Footer from '../../Footer/Footer';
import { Container, Media, Row } from 'reactstrap';
import Blog from './BlogDetails';

const BlogArticle =(props)=>{
    return(
    <>
    <Container fluid={true}>
      <Row>
        <div className="col-12">
          {/* <h1>{props.title}</h1> */}
         
        {/* <img top width="100%"  src={props.image} alt="Card image cap" height="50%" /> */}
        </div>
      </Row>

    </Container>
     
    </>
  );


}
export default BlogArticle