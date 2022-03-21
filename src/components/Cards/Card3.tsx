import { Typography, Button } from '@material-ui/core'
import { HomeOutlined, LocationCityOutlined, LocationOnOutlined, VerifiedUserOutlined } from '@material-ui/icons'
import { navigate } from 'gatsby'
import { Badge } from 'react-bootstrap'
import React from 'react'
import { Box, Image } from 'theme-ui'
import Stars from '../Stars/Stars'

const Card3 = ({ hotelName, rating, imageUrl, hotelLocation, rooms, guests, price, badge }) => {
    return (
        <Box style={{ width: "300px", color: "whitesmoke", borderRadius: "10px", backgroundColor: "#080130", margin: "20px 0px" }}>
            <Box style={{ borderRadius: "10px" }}>
                {/* left */}
                <Box style={{ width: "300px", height: "250px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", backgroundPosition: "center center", backgroundSize: "500px", background: `url(${imageUrl ? imageUrl : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"})` }}>
                    <Badge style={{ marginTop: "20px" }} bg="danger">
                        {badge ? badge : "Flash Offer"}
                    </Badge>
                </Box>

                {/* right */}

                <Box style={{ width: "300px" }}>

                    <Box style={{ width: "220px", margin: "30px" }}>
                        <Stars rating={rating ? rating : 3.5} width="13px" />
                        <Typography style={{ marginBottom: "20px" }} variant="h6">
                            {hotelName ? hotelName : "Hotel Blue Haven"}
                        </Typography>
                        <Typography style={{ marginTop: "10px" }} variant="body2">
                            <LocationOnOutlined /> {hotelLocation ? hotelLocation : "Street 102 Naran"}
                        </Typography>
                        <Typography style={{ marginTop: "10px" }} variant="body2">
                            <VerifiedUserOutlined /> {guests ? guests : 2} x Guests
                        </Typography>
                        <Typography style={{ marginTop: "10px" }} variant="body2">
                            <HomeOutlined /> {rooms ? rooms : 1} x Rooms
                        </Typography>

                        <Box style={{ display: "flex", marginTop: "20px", justifyContent: "space-between" }}>
                            <Typography style={{ marginTop: "10px" }} variant="h6">
                                PKR {price ? price : "6,500"}
                            </Typography>
                            <Button style={{ backgroundColor: "red", color: "whitesmoke", fontWeight: "bold", marginTop: "10px" }}>
                                Book Now
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default Card3