import React from 'react'
import { Box, Card, Heading, Link, Text } from 'theme-ui'

const Paper = ({number,heading,text}) =>{
const styles={
    mainCard:{
    backgroundColor:"rgba(254,255,254,0.5522584033613445)",
    width:"90%",
    height:"406px",
    margin:"5%",
    padding: "50px 30px"
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
        color:"#575f7c" 
    },
    heading:{
        display:"flex",
    justifyContent:"center",
    margin:"auto",
    marginLeft:"50px",
    fontSize:"22px",
    fontWeight:"bold",
    fontFamily:"Merriweather"
},
cardBody:{
        fontSize:"1.1rem",
        fontFamily:"Merriweather"
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
        <Box sx={{margin:"0px"}}>
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