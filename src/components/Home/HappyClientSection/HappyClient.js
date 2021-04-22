import React from 'react';
import { Media } from 'reactstrap';
import photo from '../../../Assets/Images/happyClient.jpeg';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SpaIcon from '@material-ui/icons/Spa';
import AirlineSeatFlatAngledIcon from '@material-ui/icons/AirlineSeatFlatAngled';
import './HappyClient.css';
const HappyClient = () => {
    return (
        <>
        <Media className=" align-items-center justify-content-center   flex-wrap">
        <Media body className=" text-left col-md-6 col-sm-10 ">
               <Media heading className="ml-4">Happy Patients</Media>
               <Media  className="ml-4 py-3 text-secondary">
                  <p> We create healthy minds free of depression and anxietys ,Therapy helps in many different areas of sexual wellness. Whether you're experiencing sexual pain, intimacy concerns or low desire and could use some guidance; </p>
               </Media>
               <Media >
            <ul className="ml-4">
                        <li className=" text-left">
                            <SpaIcon className="text-primary text-left h1" />
                            <span className="text-secondary" >Better life decisions. </span>
                        </li>
                        <li className=" text-left">
                            <AirlineSeatFlatAngledIcon className="text-primary text-left h1" />
                            <span className="text-secondary" >Sleep Better.</span>
                        </li>
                        <li className=" text-left">
                            <SentimentSatisfiedAltIcon className="text-primary text-left h1" />
                            <span className="text-secondary" >More confident.</span>
                        </li>
                        <li className=" text-left">
                            <HowToRegIcon className="text-primary text-left h1" />
                            <span className="text-secondary" >Healthier life.  </span>
                        </li>
                    </ul>
            </Media>
            
            </Media>
         

            <Media left className="col-md-4 col-sm-12 ml-0">
               <Media object src={photo} alt="Generic placeholder image" className="w-100 px-5" /></Media>
        </Media>
        </>
    )
}

export default HappyClient
