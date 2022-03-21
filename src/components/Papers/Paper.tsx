import React from 'react'
import { Box, Card, Heading, Link, Text } from 'theme-ui'

const Paper = ({number,heading,text}) =>{
const styles={
    mainCard:{
    backgroundColor:"rgba(254,255,254,0.5522584033613445)",
    padding: "50px 30px",
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

    },
mainBox:{
    display:"flex",
    justifyContent:"center",
    margin:"auto",
    },
    numberHeading:{
        fontSize:"5rem",
        fontWeight:"lighter",
        fontFamily:"Merriweather",
        color:"#575f7c",
        '@media (max-width: 200px)': {
            fontSize:"3rem"
        }
    },
    heading:{
        display:"flex",
    justifyContent:"center",
    margin:"auto",
    marginLeft:"50px",
    fontSize:"22px",
    fontWeight:"bold",
    fontFamily:"Merriweather",
    '@media (max-width: 200px)': {
        fontSize:"16px"
    }
},
cardBody:{
        fontSize:"1.1rem",
        fontFamily:"Merriweather",
        '@media (max-width: 200px)': {
            fontSize:"0.75rem"
        }
    },
link:{
    fontFamily:"Merriweather",
fontWeight:"bolder",
borderBottom:"2px solid blue",
paddingBottom:"5px",
textDecoration:"none",
color:"#002012"
}
}
    return(
        <Box sx={{margin:"10px"}}>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
<Card
  sx={styles.mainCard}>
<Box sx={styles.mainBox}>
    <Heading sx={styles.numberHeading}>
        {number}
    </Heading>
    <Text sx={styles.heading}>
    {heading}
    </Text>
</Box>
<Box>
<Text sx={styles.cardBody}>
{text}
</Text>
</Box><br/><br/>
<Box>
    <Link href="#" sx={styles.link}>
    MORE
    </Link>
</Box>
</Card>
        </Box>
    )
}
export default Paper;