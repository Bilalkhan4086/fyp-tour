import { Typography, Button } from '@material-ui/core'
import { HomeOutlined, LocationOnOutlined, VerifiedUserOutlined } from '@material-ui/icons'
import { Badge } from 'react-bootstrap'
import React from 'react'
import { Box } from 'theme-ui'
import Stars from '../Stars/Stars'

const Card2 = ({ hotelName, rating, description, imageUrl, hotelLocation, rooms, guests, price, badge }) => {
    return (
        <Box style={{ width: "750px", color: "whitesmoke", borderRadius: "10px", backgroundColor: "#080130", margin: "20px 0px" }}>
            <Box style={{ display: "flex", justifyContent: "space-around", borderRadius: "10px" }}>
                {/* left */}
                <Box style={{ width: "380px", height: "545px", backgroundSize: "cover", backgroundRepeat: "no-repeat",borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px",backgroundPosition:"center" ,backgroundImage: `url(${imageUrl ? imageUrl : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"})` }}>
                    <Badge style={{ marginTop: "20px" }} bg="danger">
                        {badge ? badge : "Flash Offer"}
                    </Badge>
                </Box>

                {/* right */}

                <Box style={{ width: "380px", margin: "auto" }}>

                    <Box style={{ width: "320px", margin: "auto" }}>
                        <Stars rating={rating ? rating : 3.5} />
                        <Typography style={{ marginBottom: "20px" }} variant="h6">
                            {hotelName ? hotelName : "Hotel Blue Haven"}
                        </Typography>
                        <Typography style={{ marginBottom: "35px", height: "165px", overflow: "hidden" }} variant="body1">
                            {description ? description : "Let's consider a large image, a 2982x2808 Firefox logo image. We want (for some reason likely involving horrifyingly bad site design) to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels."}
                        </Typography>

                        <Typography style={{ marginTop: "40px" }} variant="body2">
                            <LocationOnOutlined /> {hotelLocation ? hotelLocation : "Street 102 Naran"}
                        </Typography>
                        <Typography style={{ marginTop: "10px" }} variant="body2">
                            <VerifiedUserOutlined /> {guests ? guests : 2} x Guests
                        </Typography>
                        <Typography style={{ marginTop: "10px" }} variant="body2">
                            <HomeOutlined /> {rooms ? rooms : 1} x Rooms
                        </Typography>

                        <Box style={{ display: "flex", marginTop: "60px", justifyContent: "space-between" }}>
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

export default Card2