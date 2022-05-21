import { Box, Typography } from '@material-ui/core'
import React from 'react'
import CurrentProjectCard from '../../components/CurrentProjectCard/CurrentProjectCard'
import imgs1 from '../../Images/cloudMountain.jpg'
import imgs2 from '../../Images/cloudMountain2.jpg'
import imgs3 from '../../Images/Nature.jpg'
import imgs4 from '../../Images/Nature2.jpg'
import imgs5 from '../../Images/Nature3.jpg'
import imgs6 from '../../Images/StoryImage4.jpg'
import HotelListCards from './../../components/HotelListCards/HotelListCards'
import SearchBar from "../../components/SearchBar/SearchBar"

const hotelList = [
    {images:imgs1,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
    {images:imgs2,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
    {images:imgs3,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
    {images:imgs4,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
    {images:imgs5,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
    {images:imgs6,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
]
const hotel_list = () => {
  const styles = {
    mainBox:{
        width:"100%",
        paddingY:"3%"
    }
}
  return (
    <Box sx={{textAlign:"center",margin:"3% 0px 0px"}}>
        <Typography variant="h4">
        Our Hotels
    </Typography>
    <Typography variant="body1">
      These are the best hotels against your search
    </Typography>
    
<Box style={{marginTop:"5%"}}>
<SearchBar/>
</Box>

    <Box sx={styles.mainBox}>
            <Box style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
{
    hotelList.map((hotel,i)=>{
        return(<HotelListCards images={hotel.images} key={i} descriptions={hotel.description} hotelNames={hotel.hotelName} rating={hotel.rating}/>)
    })
}
            </Box>
       </Box>
    
    
    </Box>

  )
}

export default hotel_list