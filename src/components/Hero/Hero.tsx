import React from 'react'
import {Box,Button} from 'theme-ui';
import HeroImage from '../../Images/HeroImage.jpg';

const Hero = () => {
    const styles = {
        main:{
            // width:['25%','50%','100%']
            background: `url(${HeroImage})`,
            height:'50%',
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            fontFamily:"Merriweather"
        },
        outerBox:{
            bg:"rgba(0,0,0,0.5211659663865546)",
            // display:"flex",
            // justifyContent:"center",
            margin:"auto",
            color:"#fff",
            '@media (max-width: 720px)': {
                width: "90%",
            },
            '@media (min-width: 721px) and (max-width: 822px)': {
                width: "70%"
            },
            '@media screen and (min-width: 721px)': {
                width: "55%",
            }

            
        },
        cover:{
            height:'100vh',
            // backgroundColor:"rgba(0,0,0,0.8211659663865546)"
        },
        smallBox1:{
            
height:"10vh",
width:"20%",
borderTop:"4px solid #fff",
borderLeft:"4px solid #fff",
marginLeft:"0px"
        },
        smallBox2:{
            height:"10vh",
            width:"20%",
            borderBottom:"4px solid #fff",
            borderRight:"4px solid #fff",
            // marginLeft:"79.5%",
            position:"relative",
            left:"80%",
            bottom:"2.5%"

                    },
        textBox1:{
            textAlign:"center",
            fontSize:['1.2rem']
        },
        textBox2:{
            textAlign:"center",
            fontSize:['3rem','4rem',"4rem"]
        },
        boxButton:{
            display:"flex",
            justifyContent:"center",
            margin:"auto",
            marginTop:"5%",
            color:"#fff",
            bg:"#003d05",
            cursor:"pointer",
            '&:hover':{
                bg:"#0799df"
            }
            
        }
    }
    return (
<Box sx={styles.main} >
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
            
    <Box sx={styles.cover}>
        <Box sx={{marginBottom:['30%','15%',"10%"]}}>.</Box>
    <Box sx={styles.outerBox}>
        <Box sx={styles.smallBox1}/>
     <Box sx={styles.textBox1}>Green is the prime color of the world</Box>
     <Box sx={styles.textBox2}>The Beauty of <br/>Nature</Box>
     <Button sx={styles.boxButton} variant="primary">Explore More...</Button>
     <Box sx={styles.smallBox2}/>
    </Box>
    </Box>
</Box>
        )
}

export default Hero
