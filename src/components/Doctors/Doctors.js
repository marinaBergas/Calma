import React, { useEffect, useState } from "react";
import AllAppoints from "../Dashboard/All-Appointments/AllAppoints";
import Appointments from "../Dashboard/Appointments/Appointments";
import WebNavbar from "../Navbar/Navbar";
// const dispatch = useDispatch()
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import photo from "../../Assets/Images/d1.jpg";
import "./Doctors.css";
import { withStyles, createStyles } from "@material-ui/core/styles";
import MoneyIcon from "@material-ui/icons/Money";
import { db } from "../../firebase/utils";
import Footer from "../Footer/Footer";
// const [state, setstate] = useState(initialState)
/* function Doctors() {
    return (
        <div>
      */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",

    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
  media: {
    height: 140,
  },
}));

export default function Doctors() {
  const classes = useStyles();
  const [data, setdata] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("doctors").onSnapshot((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(documents);
      setdata(documents);
    });
    return unsubscribe;
  }, []);
  return (
    <>
    
    <div className="container-fluid px-0 pt-2">
    <WebNavbar  />
      <h2 className="text-dark doctor-text">Doctors</h2>
      <div className="row justify-content-center mt-5 mx-0">
        {data.map((item,index) => {
          return (
            <Card className={classes.root} className="col-lg-3 col-xs-12 w-80 text-left h-100 my-4 mx-3  " key={index} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.photo}
                  title="Contemplative Reptile"
                  height="100vh"
                />
                <CardContent className="doctors-card">
                  <Typography gutterBottom  component="h3">
                    {item.displayName}
                  </Typography>
                  <Typography gutterBottom  component="p">
                    {item.spectext}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    className="overflow-hidden h-50"
                  >
                    {item.spectext2}
                  </Typography>
                  </CardContent>
                  <div className="Price">
                    <Typography
                      
                      variant="h6"
                      component="h6"
                      mx="auto"
                    >
                      {" "}
                      <MoneyIcon /> Price{" "}
                      {item.price}
                    </Typography>
                  </div>
                
                <div className={classes.root}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </CardActionArea>
              <CardActions>
                <div className="row text-left">
                  <div className=" col-lg-10 col-md-12 ml-0 mr-2 p-0 ">
                    <Button className="  gen_btn text-white bg-primary ml-0 my-2 btn-lg">
                      BOOK NOW
                    </Button>
                  </div>
                  <div className=" col-lg-10 col-md-12 ml-0 p-0">
                    <Button className=" gen_btn text-white bg-primary  ml-0 my-2">
                      See More
                    </Button>
                  </div>
                </div>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Footer />
    </div>
    
    </>
  );
}
