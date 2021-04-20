
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import './Blogs.css';
import photo from '../../Assets/Images/bg-header.jpg';
import photo2 from '../../Assets/Images/calm.jpg';
import photo3 from '../../Assets/Images/header.jpeg';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Blog from './BlogDetails/BlogDetails';



const Blogs =(props) => {
  const articles =[
    {
    title:'zaghlool',
   },
   {
    title:'hamada',
   }
  ]
 const m=articles.map((article)=>{
  return (
    <>
    
    <Blog title={article.title}/>
    
    </>
  );
  
 })
 return(
   <div>{m}</div>
 )
 }
   
;
  
  export default Blogs;
