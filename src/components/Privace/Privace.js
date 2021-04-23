import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container, Row } from 'reactstrap';
import './Privace.css'
import Footer from '../Footer/Footer';
import WebNavbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    // flexShrink: 0,
    backgroundColor:theme.palette.background.primary,
  },
  secondaryHeading: {
    // fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Privace = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <WebNavbar/>
    <Container className="privace-container  justifiy-content-center " >
        <Row className="flex-wrap text-left">
            <div className="col-8">
              <h2>Privacy and Policy </h2>
              <p>Date of Last Revision: 2021</p>
            </div>
        </Row>
        <Row className="flex-wrap text-left">
            <div className="col-12">
              <h3>WELCOME TO Calma</h3>
              <p _ngcontent-serverapp-c101="">The privacy policy is applied to all personal data, which you provide (User Data) through the website  or our e-mail application. It has been developed in order to strengthen confidence about the privacy and safety of your personal details as that is one of our most important goals. "You" refers to the user. "We" means a Calma company. "Users" refers generally and \ or individually to users of the site as the context indicates. We deal with all personal data and information of user in full accordance to all relevant legislation protecting privacy. 
              </p>
              <p>The policy is founded on these rules:</p>
              <p>Data that you are asked to be included are the key information needed to complete the process of booking appointments with a specialist. Whatever is going on inside the meeting is your own and you share it with the specialist (based on a confidential relationship and respect for privacy). We do not collect, process or retrieve any information exchanged between you and the worker during the session. No one will know that you have sessions with psychological specialist through the site Calma unless you tell about that. People who are able to know about your meeting with the specialist are the site administrators and staff to provide you with the service. No one of the Calma crew knows about your meetings with the psychologist, only those whom job is based on this information (aiming to provide the service and the best measure of efficiency)</p>
            </div>
        </Row>
        <Row className="privace-content">
          <div className={classes.root}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                    What do we do with data provided by the user
                </Typography>
                {/* <Typography className={classes.secondaryHeading}>
                  I am an accordion
                </Typography> */}
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                  When you provide us with your user data, you agree that we could keep them with our own technique or by using services through another company that is specialized in processing of these data on behalf of us.
                 
                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                  We may use your user data, according to the terms of this Privacy Policy for the following purposes:                </Typography>
                  
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                    1 - Conducting market research, including statistical analysis on the behavior of the user, which we may provide to third parties in an entirely non-personal, way. </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                    2 -  Enable us to meet all the legal requirements imposed on us. .                
                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                3 -  Send correspondences patrol to you (which include e-mail message), regarding specifications, products, services, events, and special offers.                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                
                <Typography className={classes.heading}>
                  We may disclose your user data to a third party in the following cases:
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                If we have to sell or buy a business or assets, in this case we may disclose your user data to the buyer or the seller of such business or property.   
                 </Typography>         
                 </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                In Case of that a third party buys or acquires all or most of our assets, all your user data that you have provided are devolved to that third party as part of his immovable assets.              
                </Typography> 
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                If we had to disclose or share your user information in order to:               
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>
                   Updates
                </Typography>
                
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white">
                <Typography >
                  You have to inform us about any updates, modifications, and corrections, carried out by you on your data that we have already collected, through the use of link feedback form in the "Contact Us" section on the site.
                  </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                  We may change the Privacy Policy from time to time so you have to review it periodically. By your using of the site shezlong that indicates the acceptance of the applicable privacy policy at the time.
                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white">
                <Typography>
                We have the right to change, modify or update the Privacy Policy at any time.                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>
                  Data collection
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                When you use the site, you may encounter sites such as forums or video services where you are prompted as a user to enter your user information. Such user information is used only for the purpose for which it is collected, and any other purposes identified at the point of collection in accordance with this Privacy Policy.
                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                We will not disclose any user information you provide to third parties without your approval, except that you must provide services that you specify                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography className={classes.heading}>
                  Unsubscribe
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                When you use the site, you may encounter sites such as forums or video services where you are prompted as a user to enter your user information. Such user information is used only for the purpose for which it is collected, and any other purposes identified at the point of collection in accordance with this Privacy Policy.
                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                We will not disclose any user information you provide to third parties without your approval, except that you must provide services that you specify            
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <Typography className={classes.heading}>
                Text files (cookies)
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                You have to learn that it is possible that the information and data may be collected automatically through the use of text files (cookies), which are small text files that are saved through the basic information used by web site in order to determine the repeated uses of the site. For example, retrieve your name if you have entered before. We may use this data in order to conduct follow-up and assembly of data in order to improve the site, and the targeting of ads and evaluate the overall effectiveness of such ads.                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                These text files do not merge within your operating system and does not harm your files. If you prefer not to collect data by the use of text files, you can follow a simple procedure through most browsers that enables you to reject property download text files. But you must note that your personally oriented services may be affected if you choose to disable text files option. If you want to disable download text files property Click the link here to the instructions that will appear in a separate window.                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
              >
                <Typography className={classes.heading}>
                Protect your user information
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                Unfortunately sending data over the Internet can not be guaranteed in a holistic manner. With our commitment of protection of your user data, we can not safely send them to the site. Any data that is sent, including your user data are at your own risk.                </Typography>
              </AccordionDetails>
              <AccordionDetails className="text-left bg-white ">
                <Typography>
                For our part, we are aware of industry standards and use security applications in order to protect user data from unauthorized or illegal misuse. So when we use those data we are applying industry standards and specifications of the security measures in order to prevent illegal access to user data.                </Typography>
                </AccordionDetails>
            </Accordion>
          </div>
        </Row>
      </Container>

    <Footer/>

    </>
  );
}
export default Privace 