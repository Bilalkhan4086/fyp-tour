import React from 'react'
import {Box, Button, Grid, Heading} from 'theme-ui';
import CurrentProjectCard from '../CurrentProjectCard/CurrentProjectCard';
import forestImage from '../../Images/KalashValley.jpg'
import {CurrentProjectData} from './CurrentProjectData';


const CurrentProject = () => {
  const styles = {
        main:{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            marginX:"auto",
            // '@media (max-width: 350px)': {
            //     width: "100%",
            //  },
            // '@media (min-width: 351px) and (max-width: 649px)': {
            //     width: "350px"
            // },
            // '@media (min-width: 650px) and (max-width: 816px)': {
            //     width: "650px"
            // },
            // '@media (min-width: 816px) and (max-width: 1030px)': {
            //     width: "816px"
            // },
            // '@media (min-width: 1031px) and (max-width: 1214px)': {
            //     width: "1017px"
            // },
            // '@media screen and (min-width: 1215px)': {
            //     width: "1215px"
            // }
        },
        headingMain:{
            textAlign:"center",
            fontFamily:"Merriweather",
            fontSize: '2.2rem',
            '@media (max-width: 200px)': {
                fontSize: '1.7rem'
            }
        },
        bottomBorder:{
            width:"25vh", 
            borderBottom: "2px solid #08d019",
            marginY: "2vh",
            marginX:"auto" ,
            '@media (max-width: 200px)': {
                width: "90%"
            }
        },
        secondHeading:{
            textAlign:"center",
            fontFamily:"Merriweather",
            marginX:"auto",
            '@media (max-width: 720px)': {
                width: "90%",
                fonstSize:"1.6rem"
            },
            '@media (min-width: 721px) and (max-width: 820px)': {
                width: "80%",
                fonstSize:"1.4rem"
            },
            '@media screen and (min-width: 821px)': {
                width: "65%",
                fonstSize:"1.4rem"
            }
        },
        cardButton:{
        color:"#303030",
        fontSize:"1.2rem",
        fontFamily:"Merriweather",
        cursor:"pointer",
        border:"1px solid black",
        "&:hover":{
            bg:"#909090",
        border:"1px solid black",
            color:"#fff"
        },"&:active":{
        border:"1px solid white",
        bg:"#707070",
            color:"#fff"
        },
        
        
    },

    }
    return (
<Box sx={styles.main}>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>

<Heading as="text" sx={styles.headingMain}>Current Projects</Heading>
<Box sx={styles.bottomBorder} /><br/>
<Box sx={styles.secondHeading}>Implementing phosphorus management best practices (such as replacing chemical fertilizers with compost, properly disposing of pet waste</Box>

    <Box sx={{display:"flex",flexWrap:"wrap",width:'100%',justifyContent:"space-around"}}>
{CurrentProjectData.map((data,i)=>
<CurrentProjectCard key={i} text={data.text} images={data.images}/>
)}
</Box>
<Box sx={{marginX:"auto",marginY:"7%"}}>
<Button sx={styles.cardButton}>BECOME A VOLUNTEER</Button>
</Box>
</Box>
        )
}

export default CurrentProject
{/* <Box sx={{display:"flex",flexWrap:"wrap"}}> */}