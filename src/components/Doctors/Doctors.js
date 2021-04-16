import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import photo from '../../Assets/Images/d1.jpg'
import './Doctors.css'
import { withStyles, createStyles } from "@material-ui/core/styles";
import MoneyIcon from '@material-ui/icons/Money';
const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  media: {
    height: 140,
  },
}));

export default function Doctors() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo}
          title="Contemplative Reptile"
          height="100vh"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
          Zein El Abdeen Sanhoury
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
          Clinical Psychotherapist
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Specialized in: Personality disorders , Sexual disorders
          </Typography>
          <div className="Price" >
              <Typography gutterBottom variant="h6" component="h6" mx="auto" > <MoneyIcon/> Price   </Typography>
          </div>
      
        </CardContent>
        <div className={classes.root}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book Now
        </Button>
        <Button size="small" color="primary">
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}
