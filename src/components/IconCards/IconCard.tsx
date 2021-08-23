import React from 'react'
import { Card, Image, Text } from 'theme-ui'

type iconText = {
    icon:any,
    text:String
}

const IconCard = (iconText:iconText) => {
    const styles = {
        card:{
            textAlign:"center",
            width:"218px",
            margin:"auto",
            paddingY:"40px",
            '@media (min-width: 823px) and (max-width: 1093px)': {
                width: "160px",
            },
            '@media (min-width: 389px) and (max-width: 554px)': {
                width: "150px",
            },
            '@media (max-width: 388px)': {
                width: "100px",
            }
        },
        image:{
            width:"80px",
            '@media (min-width: 389px) and(max-width: 554px)': {
                width: "60px",
            }
        },
        text:{
fontFamily:"Merriweather",
fontSize:"22px",
'@media (max-width: 554px)': {
    fontSize:"18px",
}
        }
    }
    return (
        <Card sx={styles.card}>
            <Image sx={styles.image} src={iconText.icon} alt="Loading icon"/>
            <br/>
            <Text sx={styles.text}>{iconText.text}</Text>
        </Card>
    )
}

export default IconCard
