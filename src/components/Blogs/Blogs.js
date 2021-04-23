import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
// import './Blogs.css';
import photo from "../../Assets/Images/bg-header.jpg";
import photo2 from "../../Assets/Images/calm.jpg";
import photo3 from "../../Assets/Images/header.jpeg";
import { Container, Row, Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Blog from "./BlogDetails/BlogDetails";
import Artical1 from "../../Assets/Images/Articles/A1.jpg";
import Artical2 from "../../Assets/Images/Articles/A2.jpg";
import BlogArticle from "./BlogDetails/BlogArticle";
import { useState } from "react";



const Blogs = (props) => {
  const articles = [
    {
      id: 1,
      title: "HOW TO CULTIVATE MINDFULNESS PRACTICE IN DAILY LIFE",
      description:
        "practising the art of mindfulness trains your mind to stay alert and live in the moment. You may have noticed that our happiest memories are of the time when we are living in the moment. All our cherished memories comprise of talking to a loved one, being on a vacation and so on.",
      image: Artical1,
      paragraph:
        "Is living in the moment really this great? Based on recent researches, the answer is yes.Being mindful is about experiencing each moment in all its vividness without letting thoughts and other distractions clouding the experience.Mindfulness at home: Boosts health and immune system Mindfulness has changed and improved the lives of millions of individuals all over the world. In a 2013 study, it was reported that mindfulness meditation has beneficial effects on individuals who have anxiety and helped reduce stress reactivity in people with an anxiety disorder.",
    },
    {
      id: 2,
      title: "HOW TO DEAL WITH GRIEF WHILE BATTLING DEPRESSION",
      description:
        "Grief can occur for reasons other than a loved one’s passing. Other types of loss include loss of a job, the end of a marriage or significant relationship, or the loss of physical health. All of these types of loss also spark the powerful emotions associated with grieving.",
      image: Artical2,
    },
  ];

  return (
    <Container
    className="justify-content-center align-items-center "
    fluid={true}
    >
      <Row>
        {articles.map((article, id) => {

          return (
        
            <>
             
              <div className="mx-4 p-0 w-30 col-md-3 col-sm-8" key={id}>
                <Blog
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  
                />
              </div>
              
            </>
          );
         
        })}
        ;
      </Row>
    </Container>
  );
};

export default Blogs;
