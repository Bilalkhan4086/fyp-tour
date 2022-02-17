import { Box } from '@material-ui/core';
import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
const Index = () => {
  useEffect(()=>{
    console.log(window.innerHeight);
  },[])

  const styles = {
    mainHeading:{
      width:"60%",
      fontSize:"3rem",
      top:"50%",
      fontFamily: 'Asap Condensed',
      position:"absolute",color:"whitesmoke",
            '@media(max-width: 349px)': {
              width:"90%",
              left:"5%",
              top:"60%",
              fontSize:"1.7rem",           
            },
            '@media (min-width: 350px) and (max-width: 423px)': {
              width:"70%",
              left:"70px",
              fontSize:"1.8rem",      
            },
            '@media (min-width: 424px) and (max-width: 561px)': {
              width:"60%",
              left:"70px",
              fontSize:"2rem",  
            },
            '@media (min-width: 562px) and (max-width: 637px)': {
              width:"60%",
              left:"70px",
              fontSize:"2.2rem", 
            },
            '@media (min-width: 638px) and (max-width: 799px)': {
              width:"60%",
              left:"70px",
              fontSize:"2.5rem",
            },
            '@media screen and (min-width: 800px)': {
              width:"60%",
              left:"70px",
              fontSize:"3rem",
            }
    },
    subHeading:{
       fontSize:"1.2rem",
      '@media (max-width: 349px)': {
        width:"100%",
        fontSize:"0.75rem"          
      },
      '@media (min-width: 350px) and (max-width: 423px)': {
        width:"100%",
        fontSize:"0.8rem" 
      },
      '@media (min-width: 424px) and (max-width: 563px)': {
        width:"100%",
        fontSize:"0.9rem" 
      },
      '@media (min-width: 564px) and (max-width: 637px)': {
        width:"100%",
        fontSize:"1rem"
      },
      '@media (min-width: 638px) and (max-width: 799px)': {
        width:"100%",
        fontSize:"1rem"
      },
      '@media screen and (min-width: 800px)': {
        width:"100%",
        fontSize:"1.2rem"
      }
    }
  }

  return (
    <Box style={{
      backgroundImage:`url(https://cdn.decoist.com/wp-content/uploads/2017/07/Open-wooden-deck-with-a-hammock-surrounded-by-green-canopy.jpg)`,
      height:typeof window !== `undefined` ? window.innerHeight : '100vh',
      backgroundSize:"cover",
      backgroundPosition:"left",
      backgroundRepeat:"no-repeat",
    }}
    >
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Asap+Condensed&display=swap" rel="stylesheet"/>
    
    <Box sx={styles.mainHeading}>
    <Box>  
        We are here with you, let's go togather to explore Pakistan.
    </Box>
    <Box sx={styles.subHeading}>
    Helping you to find a more authentic, more exciting to,
<span>
<Typewriter
        options={{
    strings: ['Spreading Happiness', ' Connecting People'," Creating Memories"," Creating Stories"," Fulfilling Adventure"],
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter
      .pauseFor(1000)
      .deleteAll()
      .start();
  }}
/>
</span>


    </Box>
    </Box>
    </Box>
   
  )
  }
export default Index