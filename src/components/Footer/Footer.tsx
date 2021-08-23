import React from 'react'
import { Box, Text } from 'theme-ui'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
    const styles={
        iconStyles:{
            width:"19px",
            height:"19px",
            color:"#fff"
            },
            iconsBox:{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"space-between",
                width:"150px",
                marginX:"auto",
                marginTop:"5%",
                cursor:"pointer"
            },
            nav:{
                bg:"#2f3434",
                padding:"15px",
                color:"#fff",
                fontFamily:"Merriweather",
                fontSize:"0.8rem",
                textAlign:"center",
                
            }
    }
    return (
        <Box>
            <Box sx={{bg:"#293133",padding:"8% 10%"}}>
<Box sx={{fontSize:"1rem",color:"#fff",fontFamily:"Merriweather",width:"70%",textAlign:"center",marginX:"auto",marginBottom:"30px"}}>
<Text>“Our task must be to free ourselves… by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” –Albert Einstein</Text>
</Box>
     <hr/>
<Box sx={styles.iconsBox}>
    <FaFacebookF style={styles.iconStyles}/>
    <AiOutlineTwitter style={styles.iconStyles}/>
    <FiInstagram style={styles.iconStyles}/>
    <FaLinkedinIn style={styles.iconStyles}/>
</Box>
        </Box>
        <Box sx={styles.nav}>
           <Text><a style={{color:"#fff"}} href="#">Website Templates</a> created with <a style={{color:"#fff"}} href="#">Website Builder Software</a>.</Text>
        </Box>
        </Box>
    )
}

export default Footer
