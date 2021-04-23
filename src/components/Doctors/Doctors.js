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
    <div className="container pt-5">
        <h2 className="text-dark mt-5">Doctors</h2>
      <div className="row justify-content-center mt-5">
      
        {data.map((item) => {
          return (
            <Card className={classes.root} className="col-4 " mx={1}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={photo}
                  title="Contemplative Reptile"
                  height="100vh"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h1">
                    {item.displayName}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="p">
                    Clinical Psychotherapist
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Specialized in: Personality disorders , Sexual disorders
                  </Typography>
                  <div className="Price">
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h6"
                      mx="auto"
                    >
                      {" "}
                      <MoneyIcon /> Price{" "}
                    </Typography>
                  </div>
                </CardContent>
                <div className={classes.root}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </CardActionArea>
              <CardActions >
              <div  className="row">
                    <div className=" col-md-6 col-sm-6 ml-0 ">
                    <Button  className="  gen_btn text-white bg-primary ml-0 " >
                        BOOK NOW
                      </Button>
                    </div>
                    <div  className=" col-md-6 col-sm-6 ml-0">
                      <Button  className=" gen_btn text-white bg-primary  ml-0" >
                        See More
                      </Button>
                    </div>
              </div>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
