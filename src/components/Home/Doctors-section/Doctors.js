import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row
} from 'reactstrap';
import photo from '../../../Assets/Images/d1.jpg';
import './Doctors.css'
import { Media } from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import {Button} from 'reactstrap';
import { db } from "../../../firebase/utils";
import { useHistory } from 'react-router';


const DoctorSection = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [data, setdata] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = db.collection("doctors").onSnapshot((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log("documents",documents);
      setdata(documents);
    });
    return unsubscribe;
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const handleSubmit=()=>{
    history.push("/doctors");
  }

  const slides = data.map((item) => {
    
    return (
      
      <CarouselItem
        className="custom-tag p-0 m-0"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >        
       <h1>Calma Doctor</h1>
        <Media className=" align-items-center justify-content-center  py-5  flex-wrap">
          <Media left className="col-md-4 col-xs-12 ml-0">
            <Media object src={item.photo} alt="Generic placeholder image" className="w-100 h-100" /></Media>
            <Media body className="p-5 text-left col-md-6 col-xs-10 ">
              <Media heading className="ml-4">{item.displayName}</Media>
              <Media  > {item.displayName}</Media>
                  <div className="py-5 text-left">
                   <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </div>
                  <div className="row d-flex">
                    <div className=" col-md-6 col-xs-12 ">
                      <Button  color="primary" className=" bg-primary btn-doctor my-2   w-100 text-uppercase">
                         book now
                      </Button>
                    </div>
                    <div  className=" col-md-6 col-xs-12 ">
                      <Button  color="primary" className=" bg-primary  btn-doctor my-2 w-100 text-uppercase" onClick={handleSubmit} >
                        see more
                      </Button>
                    </div>
                  </div>
            </Media>
          </Media>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              
              background-color: var( --back-ground)
            }
            `
        }
      </style>
      <Carousel
      interval={false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="p-5 justify-content-between " />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next}  className="p-5 justify-content-flex-end"/>
      </Carousel>
    </div>
  );
}

export default DoctorSection;