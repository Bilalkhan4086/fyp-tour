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
        <div style={{paddingTop:"0px"}}>

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