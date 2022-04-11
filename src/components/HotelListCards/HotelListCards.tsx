import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Stars from '../../components/Stars/Stars';
import {navigate} from 'gatsby'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function MediaCard({images,hotelNames,descriptions,rating}) {
  const classes = useStyles();

  const styles={
    mainCard:{
    backgroundColor:"rgba(254,255,254,0.5522584033613445)",
    marginTop:"2%",
    '@media (max-width: 279px)': {
        width: "100%",
     },
     '@media (min-width: 280px) and (max-width: 350px)': {
         width: "240px",
         height: "470px"
      },
    '@media (min-width: 350px) and (max-width: 449px)': {
        width: "300px",
        height: "400px"
    },
    '@media (min-width: 450px) and (max-width: 672px)': {
        width: "400px",
        height: "400px"
    },
    '@media (min-width: 673px) and (max-width: 757px)': {
        width: "300px",
        height: "410px"
    },
    '@media (min-width: 758px) and (max-width: 800px)': {
        width: "300px",
        height: "410px"
    },
    '@media (min-width: 801px) and (max-width: 1010px)': {
        width: "320px",
        height: "380px"
    },
    '@media (min-width: 1011px) and (max-width: 1214px)': {
        width: "450px",
        height: "350px"
    },
    '@media screen and (min-width: 1215px)': {
        width: "370px",
        height: "370px"
    }
  
    }}

  return (
    <Card elevation={0} style={styles.mainCard} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images}
          title={hotelNames}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {hotelNames}
          </Typography>
          {/* <Typography gutterBottom variant="h5" component="h2">
        
          </Typography> */}
          <Typography gutterBottom variant="h5" component="h2" style={{display:"flex",justifyContent:"center",color:"#D99F0C"}}>
          <Stars rating={rating} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descriptions}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{navigate("/customer/hotel_details")}}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
} 
