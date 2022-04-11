// import { Box, Typography } from '@material-ui/core'
// import React from 'react'
// import CurrentProjectCard from '../../components/CurrentProjectCard/CurrentProjectCard'
// import imgs from '../../Images/HeroImage.jpg'
// import HotelListCards from './../../components/HotelListCards/HotelListCards'

// const hotelList = [
//     {images:imgs,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
//     {images:imgs,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
//     {images:imgs,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
//     {images:imgs,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
//     {images:imgs,hotelName:"Gulshan-e-jabber",rating:3.5,description:"Its very beautiful and loving hotel. Most of the time professional meeting are being held in it."},
// ]
// const hotel_list = () => {
//   return (
//     <Box sx={{textAlign:"center",margin:"0px 10px"}}>
//         <Typography variant="h4">
//         HOTELS
//     </Typography>
//     <Typography variant="body1">
//       These are the best hotels against your search
//     </Typography>
    
//     <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
//     {
//             hotelList.map((data,i)=>(
//                 <HotelListCards images={data.images} hotelNames={data.hotelName} rating={data.rating} descriptions={data.description}/>

//             ))
//     }
//     </Box>
    
    
//     </Box>

//   )
// }

// export default hotel_list