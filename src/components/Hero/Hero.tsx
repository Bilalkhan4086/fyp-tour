// import React from 'react'
// import {Box,Button} from 'theme-ui';
// import HeroImage from '../../Images/HeroImage.jpg';

// const Hero = () => {
//     const styles = {
//         main:{
//             // width:['25%','50%','100%']
//             background: `url(${HeroImage})`,
//             height:'50%',
//             backgroundRepeat:'no-repeat',
//             backgroundSize: 'cover',
//             fontFamily:"Merriweather"
//         },
//         outerBox:{
//             bg:"rgba(0,0,0,0.5211659663865546)",
//             // display:"flex",
//             // justifyContent:"center",
//             margin:"auto",
//             color:"#fff",
//             '@media (max-width: 720px)': {
//                 width: "90%",
//             },
//             '@media (min-width: 721px) and (max-width: 822px)': {
//                 width: "70%"
//             },
//             '@media screen and (min-width: 721px)': {
//                 width: "55%",
//             }

            
//         },
//         cover:{
//             height:'100vh',
//             // backgroundColor:"rgba(0,0,0,0.8211659663865546)"
//         },
//         smallBox1:{
            
// height:"10vh",
// width:"20%",
// borderTop:"4px solid #fff",
// borderLeft:"4px solid #fff",
// marginLeft:"0px"
//         },
//         smallBox2:{
//             height:"10vh",
//             width:"20%",
//             borderBottom:"4px solid #fff",
//             borderRight:"4px solid #fff",
//             // marginLeft:"79.5%",
//             position:"relative",
//             left:"80%",
//             bottom:"2.5%"

//                     },
//         textBox1:{
//             textAlign:"center",
//             fontSize:['1.2rem']
//         },
//         textBox2:{
//             textAlign:"center",
//             fontSize:['3rem','4rem',"4rem"]
//         },
//         boxButton:{
//             display:"flex",
//             justifyContent:"center",
//             margin:"auto",
//             marginTop:"5%",
//             color:"#fff",
//             bg:"#003d05",
//             cursor:"pointer",
//             '&:hover':{
//                 bg:"#0799df"
//             }
            
//         }
//     }
//     return (
// <Box sx={styles.main} >
// <link rel="preconnect" href="https://fonts.googleapis.com"/>
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
// <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
            
//     <Box sx={styles.cover}>
//         <Box sx={{marginBottom:['30%','15%',"10%"]}}>.</Box>
//     <Box sx={styles.outerBox}>
//         <Box sx={styles.smallBox1}/>
//      <Box sx={styles.textBox1}>Green is the prime color of the world</Box>
//      <Box sx={styles.textBox2}>The Beauty of <br/>Nature</Box>
//      <Button sx={styles.boxButton} variant="primary">Explore More...</Button>
//      <Box sx={styles.smallBox2}/>
//     </Box>
//     </Box>
// </Box>
//         )
// }

// export default Hero


import React from 'react';
import img1 from '../../Images/HeroImage.jpg'
import img2 from '../../Images/cloudMountain2.jpg'
import img3 from '../../Images/cloudMountain.jpg'
import { Box } from 'theme-ui';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './styles.css'
import './styles2.css'

const content = [
  {user:"Bilal",userProfile:img3,button:"EXPLORE MORE",image:img1,title:"Tourism is the good for health",description:'Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists".'},
  {user:"Umair",userProfile:img1,button:"EXPLORE MORE",image:img2,title:"Why I am not a Tourist",description:"Some people travel to learn about the history or culture of a city or country, or about the people who live there, or their ancestors."},
  {user:"Qudsia",userProfile:img2,button:"EXPLORE MORE",image:img3,title:"I am a tourist",description:"Tourism can bring damage to the local area, and/or the tourists. Litter, scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals. Tourism can change culture when people learn each others’ ways, and certain local traditions are being put aside for tourists."},
  ];

const Home = () => {
  return (
        <div style={{paddingTop:"30px"}}>

<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button className="button">{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
            </div>
  )
}
export default Home