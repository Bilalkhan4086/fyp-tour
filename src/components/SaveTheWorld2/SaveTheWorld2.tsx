import React from 'react'
import { Box, Button, Heading, Image, Text, Link, Card } from 'theme-ui';
import CurrentProjectCard from '../CurrentProjectCard/CurrentProjectCard';
import forestImage from '../../Images/KalashValley.jpg'
import forestImage1 from '../../Images/cloudMountain.jpg'
import forestImage2 from '../../Images/Nature3.jpg'
import forestImage3 from '../../Images/Nature.jpg'
import icon from '../../Images/mountain.png'
import IconCard from '../IconCards/IconCard';


const SaveTheWorld2 = () => {
    const styles = {
        main: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginX: "auto",
        },
        headingMain: {
            textAlign: "center",
            fontFamily: "Merriweather",
            fontSize: ["2.2rem", "2.2rem", "2.4rem"]
        },
        bottomBorder: {
            width: "25vh",
            borderBottom: "2px solid #08d019",
            marginY: "2vh",
            marginX: "auto"
        },
        secondHeading: {
            textAlign: "center",
            fontFamily: "Merriweather",
            marginX: "auto",
            '@media (max-width: 720px)': {
                width: "90%",
                fonstSize: "1.6rem"
            },
            '@media (min-width: 721px) and (max-width: 820px)': {
                width: "80%",
                fonstSize: "1.4rem"
            },
            '@media screen and (min-width: 821px)': {
                width: "65%",
                fonstSize: "1.4rem"
            }
        },
        headingThird: {
            width: "350px",
            fontSize: "2.2rem"
        },
        IconBox:{
marginX:"auto",
width:"90%",
display:"flex",
justifyContent:"space-between",
flexWrap:"wrap",
marginTop:"60px",

        }
    }
        return (
                <Box sx={{ backgroundColor: "rgba(256,256,256,0.5)", padding: "5%" }}>
                    <Box sx={styles.main}>
                        
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
    
                        <Heading as="text" sx={styles.headingMain}>Save The World!</Heading>
                        <Box sx={styles.bottomBorder} /><br />
                        <Box sx={styles.secondHeading}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero</Box>
    

    <Box sx={styles.IconBox}>
        <IconCard icon={icon} text="DISCOVER"/>
        <IconCard icon={icon} text="PROMOTE"/>
        <IconCard icon={icon} text="INVESTIGATE"/>
        <IconCard icon={icon} text="SUPPORT"/>
    </Box>
                   
            </Box>
            </Box>
        )
    }
    
    export default SaveTheWorld2
    