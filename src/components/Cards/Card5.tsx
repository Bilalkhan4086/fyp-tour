import { Button, Typography } from '@material-ui/core'
import { Box } from 'theme-ui'
import React from 'react'
import {navigate} from 'gatsby'

const styles = {
    HotelDetailsMainBox:{
      display:"flex",
      justifyContent:"space-around",
      marginY:"20px",
      width:"825px",
      '@media (max-width: 1330px)': {
        width:"750px"
      },
      '@media (max-width: 1217px)': {
        width:"700px"
      },
      '@media (max-width: 1140px)': {
        width:"600px"
      },
      '@media (max-width: 1030px)': {
        width:"500px"
      },
      '@media (max-width: 910px)': {
        width:"400px",
        display:"block",
        margin:"auto"
      },
      '@media (max-width: 400px)': {
        width:"100vw",
        display:"block",
        margin:"auto"
      },
      '@media (max-width:290px)': {
        width:"100vw",
        height:"70vh",
        display:"block",
        margin:"auto"
      }

    },
    HotelDetailsImageBox:{
      height:"200px",
      width:"50%",
      overflow:"hidden",
      borderRadius:"15px",
      display:"flex",
      justifyContent:"space-around",
      marginRight:"5%",
      '@media (max-width: 910px)': {
        width:"100%",
        margin:"20px auto"
      }
    },
    HotelDetailsImage:{
      borderRadius:"15px",
      width:"250px",
      height:"auto"
      },
    HotelDetailTextBox:{
      width:"100%",
      height:"200px",
      '@media (max-width: 430px)': {
          paddingLeft:"5%"
        }
    },
    HotelDetailsButtons:{
      display:"flex",
      float:"right",
      position:"relative",
      bottom:"-10%"
    },
    cardContent:{
    }
}

const Card5 = ({hotelName,RoomName,NoOfGuests,NoOfBeds,NoOfBath,Price,totalEarning}) => {
  return (
    <Box sx={styles.HotelDetailsMainBox}>

    {/* left */}
    <Box sx={styles.HotelDetailsImageBox}>
    <img style={styles.HotelDetailsImage} src="https://content.r9cdn.net/res/images/horizon/ui/seo/common/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4" alt='no way'/>
    </Box>
    {/* Right */}
    <Box sx={styles.HotelDetailTextBox}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
    <Typography variant="body2">Room in {hotelName}</Typography>
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",bottom:"0px",left:'0px'}}>
    <Typography variant="body1" style={{margin:"auto"}}><b>${Price}</b> / night</Typography>
    <Typography variant="body2" style={{margin:"auto"}}>${totalEarning} total earning</Typography>
    </Box>
    </Box>
    <Box sx={styles.cardContent}>
    <Typography variant="h6" style={{marginBottom:"5px"}}>{RoomName}</Typography>
    <Typography variant="body1" style={{fontWeight:"bold",color:"#252525"}} >{NoOfGuests} guests  -  studio  -  {NoOfBeds} beds  -  {NoOfBath} bath</Typography>
    <Typography variant="body2">Wifi - Air conditioning - Kitchen - Heating</Typography>
    </Box>
    <Box sx={styles.HotelDetailsButtons}>
    <Button onClick={()=>{navigate("/manager/Addrooms")}}>Edit</Button>
    <Button>Book</Button>
    <Button>UnBook</Button>
    </Box>
    </Box>
    </Box>
  )
}

export default Card5