import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row
} from 'reactstrap';
import photo from '../../../Assets/Images/header.jpeg';
import './Doctors.css'
import { Media } from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import {Button} from 'reactstrap';
const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const DoctorSection = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    
    return (
      <CarouselItem
        className="custom-tag p-0 m-0"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >        
        <Media className=" align-items-center justify-content-center row p-5  flex-wrap">
          <Media left className="col-md-4 col-sm-12 ml-5">
            <Media object src={photo} alt="Generic placeholder image" className="w-100 " /></Media>
            <Media body className="p-5 text-left col-md-6 col-sm-10">
              <Media heading >Media heading</Media>
                 Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  <div className="py-5 text-left">
                   <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </div>
                  <Button  color="primary" className="bg-info m-2 p-0">
                     Book Now
                   </Button>
                   <Button  color="primary" className="bg-info m-2 p-0" >
                     See More
                   </Button>
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
              background: white;
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
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className="p-5 justify-content-between " />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next}  className="p-5 justify-content-flex-end"/>
      </Carousel>
    </div>
  );
}

export default DoctorSection;