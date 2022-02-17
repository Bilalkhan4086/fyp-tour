import React from 'react'
import { Box, Grid } from 'theme-ui'
import Paper from '../Papers/Paper'
// import CloudMountain from '../../Images/cloudMountain2.jpg';
const SixStroies = () => {

const Data = [
    {heading:"Change your driving habits",text:"We don’t all have the luxury of walking everywhere, but vehicles are the biggest compromise to our air. Those tailpipes are at street level"},
    {heading:"Notice how you use water",text:"We have a lot of water in Canada, but we also use a lot of water, and 65% of what we use is in the bathroom. Have shorter showers."},
    {heading:"Reduce paper in your life.",text:"Do you know that 40% of the world’s commercially cut timber is used for paper? This endangers natural habitats and uses a ton of water."},
    {heading:"Use a refillable water bottle",text:"Bottled water and throw away packaging is wasteful. Landfills are overfilling with water bottles alone. It is also estimated that 3 litres"},
    {heading:"Borrow or fix rather than buy",text:"Buying throwaway fashion is detrimental for the environment – 1 kg of fabric generates 23 kg of greenhouse gases! Start thinking about"},
    {heading:"Stop eating So Many meat",text:"The Environmental Working Group found that red meat is responsible for 10 to 40 times as many greenhouse emissions as common vegetables"}

]
    const styles = {
        mainBox:{
            backgroundImage:`url(https://www.alpsinsight.com/wp-content/uploads/2017/03/17SK0469.jpg)`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            width:"100%",
            marginY:"3%",
            paddingY:"3%"
        }
    }
    return (
       <Box sx={styles.mainBox}>
            <Box style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
{
    Data.map((data,i)=>{
        return(<Paper key={i} number={i+1} heading={data.heading} text={data.text}/>)
    })
}
            </Box>
       </Box>
    )
}

export default SixStroies
