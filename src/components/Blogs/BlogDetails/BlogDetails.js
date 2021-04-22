import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
import {  useHistory } from 'react-router-dom';
import { setCurrentBlog } from '../../../redux/blogs/Blog.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './BlogDetails.css'


const Blog =(props)=>{
     const history= useHistory();
     const dispatsh = useDispatch();
    const getBlog=(blog)=>{
        history.push("/Blog");
        dispatsh(setCurrentBlog({
           title:props.title,
           image:props.image,
           description:props.description,
           paragraph:props.paragraph
        }))
    }
    useEffect(() => {
      dispatsh(setCurrentBlog({
        title:""
     }))
    }, []);
    
    return (
        <>
          <Card className="w-100 text-left  h-100" onClick={getBlog} style={{overflow:"hidden"}} >
            <CardImg top width="100%" src={props.image} alt="Card image cap" height="50%" />
            <CardBody  className="px-3 d-flex flex-wrap align-items-center">
              <CardTitle tag="h5">{props.title}</CardTitle>
              <CardText className="overflow-hidden">{props.secondTitle}</CardText>
              <CardText>
                <small className="text-primary ">See More</small>
              </CardText>
            </CardBody>
          </Card>
        </>
       
        );

}

export default Blog