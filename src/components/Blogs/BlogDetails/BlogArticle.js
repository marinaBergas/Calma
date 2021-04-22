import Footer from '../../Footer/Footer';
import { Container, Media, Row } from 'reactstrap';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Blog from './BlogDetails';

import { useSelector } from 'react-redux';
const mapState = ({blog}) => ({
  currentBlog:blog.currentBlog,
});

const BlogArticle =(props)=>{
  const {currentBlog} = useSelector(mapState);

    return(
    <>
    <Container fluid={true} className="px-5 blogs-container my-5">
      <Row>
        <div className="col-12  ">
         <img top width="100%"  src={currentBlog.image} alt="Card image cap" height="100%" />
         <hr/>
        </div>
      </Row>
    </Container>
    <Container fluid={true}>
      <Row>
      <div className="col-12">
        <h2 className="h1 text-left pt-5 pb-3 px-4">{currentBlog.title}</h2>
        <hr/>
      </div>
      </Row>
    </Container>
    <Container >
      <Row>
      <p className="h1 text-left py-3">{currentBlog.description}</p>
      </Row>
    </Container>
    <Container >
      <Row>
      <p className="h1 text-left py-3">{currentBlog.paragraph}</p>
      </Row>
    </Container>
    <Container className="pb-5" >
      <Row>
      <FacebookShareButton
        url={"http://www.optimumep.com.au/blog"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button bg-white py-3 px-0"
      >
        
       <FacebookIcon className="text-white mr-3 "  size={32} round />
        share on Facebook
      </FacebookShareButton>
      <TwitterShareButton
        title={"test"}
        url={"http://www.optimumep.com.au/blog"}
        hashtags={["hashtag1", "hashtag2"]}
        className="bg-white py-3 px-0 mx-3"
      >
        <TwitterIcon  className="text-info mr-3 "  size={32} round />
        share on Twitter
      </TwitterShareButton>
      </Row>
    </Container>
    <Footer/>
    </>
  );


}
export default BlogArticle