import React from 'react'
import { Box, Card, Image } from 'theme-ui'
import forestImage from '../../Images/KalashValley.jpg';

type propsType = {
    text:String,
    images:any
}

const CurrentProjectCard = ({images,text}:propsType) => {
    const styles = {
        card: {
            textAlign: "center",
            fontFamily: "Merriweather",
            // margin:"3%",
            marginTop:"7%"
            ,
            padding:"1%",            
            marginX: "auto",
            '@media (max-width: 350px)': {
                width: "100%",
                height: "330px"
             },
            '@media (min-width: 350px) and (max-width: 419px)': {
                width: "300px",
                height: "330px"
            },
            '@media (min-width: 420px) and (max-width: 716px)': {
                width: "400px",
                height: "330px"
            },
            '@media (min-width: 717px) and (max-width: 800px)': {
              width: "350px",
                height: "330px"
            },
            '@media (min-width: 801px) and (max-width: 1014px)': {
                width: "390px",
                height: "330px"
            },
            '@media (min-width: 1015px) and (max-width: 1214px)': {
                width: "250px",
                height: "330px"
            },
            '@media screen and (min-width: 1215px)': {
                width: "300px",
                height: "330px"
            }
            
        },
        cardImage: {
            background: `url(${images})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            fontFamily: "Merriweather",
            height: "100%"
        },
        cardText: {
            marginX: "auto",
            marginY: "50%",
            background: "white",
            padding: "3%",
            width: "90%",
            '@media (max-width: 420px)': {
                fontSize: "1.4rem",
            },
            '@media (min-width: 421px) and (max-width: 720px)': {
                fontSize: "1.6rem",
            },
            '@media (min-width: 721px) and (max-width: 820px)': {
                fontSize: "1.7rem",
            },
            '@media screen and (min-width: 821px)': {
                fontSize: "1.6rem",
            }
        }
    }
    return (
        <Box>
            <Card sx={styles.card}>
            <Box sx={styles.cardImage}>
                <Box sx={{ display: "hidden" }} />
                <Box sx={styles.cardText}>
                    {text.toUpperCase()}
                </Box>
            </Box>

        </Card>
        </Box>
    )
}

export default CurrentProjectCard
